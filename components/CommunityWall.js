// components/CommunityWall.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function CommunityWall() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRatedIdeas() {
      setLoading(true);

      // Step 1: Get all ratings
      const { data: ratings, error: ratingsError } = await supabase
        .from('ratings')
        .select('idea_id, rating');

      if (ratingsError) {
        console.error('Error fetching ratings:', ratingsError);
        setLoading(false);
        return;
      }

      // Step 2: Group ratings by idea_id
      const ratingMap = new Map();

      for (const { idea_id, rating } of ratings) {
        if (!ratingMap.has(idea_id)) {
          ratingMap.set(idea_id, []);
        }
        ratingMap.get(idea_id).push(rating);
      }

      // Step 3: Filter for ideas with at least 1 rating and calculate averages
      const ratedIdeaIds = [];
      const averageMap = new Map();

      for (const [idea_id, ratingsList] of ratingMap.entries()) {
        if (ratingsList.length >= 1) {
          const sum = ratingsList.reduce((a, b) => a + b, 0);
          const average = sum / ratingsList.length;
          ratedIdeaIds.push(idea_id);
          averageMap.set(idea_id, average);
        }
      }

      // Step 4: Fetch idea details
      const { data: ideasData, error: ideasError } = await supabase
        .from('ideas')
        .select('id, text')
        .in('id', ratedIdeaIds);

      if (ideasError) {
        console.error('Error fetching ideas:', ideasError);
        setLoading(false);
        return;
      }

      // Step 5: Sort ideas by average rating
      const sorted = ideasData
        .map((idea) => ({
          ...idea,
          average: averageMap.get(idea.id),
        }))
        .sort((a, b) => b.average - a.average);

      setIdeas(sorted);
      setLoading(false);
    }

    fetchRatedIdeas();
  }, []);

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-blue-900 text-center">
        Top Community AI Ideas
      </h2>
      <p className="text-center text-gray-600">
        Sorted by average rating (based on community feedback)
      </p>

      {loading ? (
        <p className="text-center text-gray-500">Loading ideas...</p>
      ) : ideas.length === 0 ? (
        <p className="text-center text-gray-500">
          Not enough ratings yet. Be the first to contribute!
        </p>
      ) : (
        <ul className="space-y-4">
          {ideas.map((idea) => (
            <li
              key={idea.id}
              className="bg-gray-100 p-4 rounded-lg shadow-sm"
            >
              <div className="text-blue-900 font-medium">{idea.text}</div>
              <div className="text-sm text-gray-500 mt-1">
                Average rating: {idea.average.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

