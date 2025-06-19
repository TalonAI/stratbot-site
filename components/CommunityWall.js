// components/CommunityWall.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function CommunityWall() {
  const [topIdeas, setTopIdeas] = useState([]);

  useEffect(() => {
    const fetchCommunityIdeas = async () => {
      const { data, error } = await supabase
        .from('ratings')
        .select('idea_id, rating')
        .order('timestamp', { ascending: false });

      if (error) {
        console.error('❌ Failed to fetch ratings:', error);
        return;
      }

      // Aggregate ratings by idea_id
      const ratingMap = {};
      data.forEach(({ idea_id, rating }) => {
        if (!ratingMap[idea_id]) {
          ratingMap[idea_id] = { total: 0, count: 0 };
        }
        ratingMap[idea_id].total += rating;
        ratingMap[idea_id].count += 1;
      });

      // Filter to ideas with at least 1 rating
      const filteredIdeaIds = Object.keys(ratingMap).filter(id => ratingMap[id].count >= 1);

      if (filteredIdeaIds.length === 0) {
        setTopIdeas([]);
        return;
      }

      const { data: ideas, error: ideaError } = await supabase
        .from('ideas')
        .select('id, text')
        .in('id', filteredIdeaIds);

      if (ideaError) {
        console.error('❌ Failed to fetch ideas:', ideaError);
        return;
      }

      // Merge ratings into ideas and sort
      const enriched = ideas.map(idea => {
        const stats = ratingMap[idea.id];
        return {
          ...idea,
          average: (stats.total / stats.count).toFixed(2),
          count: stats.count,
        };
      });

      enriched.sort((a, b) => b.average - a.average);

      // ✅ Limit to top 10
      setTopIdeas(enriched.slice(0, 10));
    };

    fetchCommunityIdeas();
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6 mt-8">
      <h2 className="text-2xl font-bold text-blue-900 text-center">Top Community AI Ideas</h2>
      <p className="text-center text-sm text-blue-800 font-medium">Top 10 AI Use Ideas</p>
      <p className="text-center text-gray-600 mb-4">
        Sorted by average rating (based on community feedback)
      </p>

      {topIdeas.length === 0 ? (
        <p className="text-center text-gray-500">Not enough ratings yet. Be the first to contribute!</p>
      ) : (
        <ul className="space-y-4">
          {topIdeas.map(idea => (
            <li
              key={idea.id}
              className="bg-gray-100 rounded-lg p-4 shadow-sm border border-gray-200"
            >
              <p className="font-medium text-blue-800">{idea.text}</p>
              <p className="text-sm text-gray-600">Average rating: {idea.average}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
