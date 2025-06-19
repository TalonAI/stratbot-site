// components/IdeaDebugger.js
import { useEffect, useState } from 'react';
import { supabase } from '../supabase.js';

export default function IdeaDebugger() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const { data, error } = await supabase
        .from('ideas')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(10);

      if (error) {
        console.error('❌ Supabase fetch error:', error);
      } else {
        console.log('✅ Supabase returned ideas:', data);
        setIdeas(data);
      }
    };

    fetchIdeas();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow mt-10">
      <h2 className="text-xl font-bold mb-4 text-blue-900">🛠 Idea Debugger</h2>
      {ideas.length === 0 ? (
        <p className="text-gray-500">No ideas found.</p>
      ) : (
        <ul className="space-y-2">
          {ideas.map((idea) => (
            <li
              key={idea.id}
              className="border rounded p-3 text-sm text-gray-800"
            >
              <strong>{idea.text}</strong> <br />
              <span className="text-xs text-gray-500">{idea.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
