import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function RatingBoard({ onDone }) {
  const [ideas, setIdeas] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    async function loadIdeas() {
      const { data: allIdeas, error } = await supabase
        .from('ideas')
        .select('id, text');

      if (error) {
        console.error('Error fetching ideas:', error);
        return;
      }

      // Shuffle ideas with preference to those with fewer ratings
      const weighted = allIdeas.map((idea) => {
        const ratingCount = idea.rating_count || 0;
        return {
          ...idea,
          weight: 1 / (ratingCount + 1),
        };
      });

      const shuffled = weighted
        .sort(() => 0.5 - Math.random())
        .sort((a, b) => b.weight - a.weight)
        .slice(0, 5);

      setIdeas(shuffled);
    }

    loadIdeas();
  }, []);

  function setRating(ideaId, score) {
    setRatings((prev) => ({ ...prev, [ideaId]: score }));
  }

  async function handleSubmit() {
    const email = localStorage.getItem('userEmail') || 'anonymous@user.com';

    const entries = Object.entries(ratings);
    if (entries.length < ideas.length) {
      alert('Please rate all ideas before submitting.');
      return;
    }

    const submissions = entries.map(([idea_id, rating]) => ({
      idea_id,
      rating,
      email: JSON.stringify({ email, ideaId: idea_id }),
    }));

    const { error } = await supabase.from('ratings').insert(submissions);

    if (error) {
      console.error('Rating insert error:', error);
      alert('There was a problem saving your ratings.');
      return;
    }

    if (typeof onDone === 'function') {
      onDone();
    }
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-blue-900 text-center">
        Rate These AI Use Ideas
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Give each one a score from 1 (not useful) to 5 (very helpful).
      </p>

      {ideas.map((idea) => (
        <div key={idea.id} className="p-4 rounded-md bg-gray-50">
          <p className="font-medium mb-2">{idea.text}</p>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                onClick={() => setRating(idea.id, num)}
                className={`px-3 py-1 rounded-full border ${
                  ratings[idea.id] === num
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={Object.keys(ratings).length < ideas.length}
        className="w-full mt-6 py-3 rounded-full text-white bg-gradient-to-r from-purple-500 to-blue-600 disabled:opacity-50"
      >
        Submit Ratings + Unlock Wall
      </button>
    </div>
  );
}
