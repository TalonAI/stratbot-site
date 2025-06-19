// components/AIForm.js
import { useState } from 'react';
import { supabase } from '../supabase.js';

export default function AIForm({ onSubmitted }) {
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

const { data, error } = await supabase.from('ideas').insert([
  {
    text: idea.trim(),
    email: email.trim(),
  },
]).select(); // 🔥 Important: ensures Supabase returns inserted data

setLoading(false);

if (error || !data || data.length === 0) {
  console.error('Insert failed:', error);
  setError('Something went wrong. Please check your input and try again.');
} else {
  onSubmitted({ email, ideaId: data[0].id });
}

  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">How Are You Using AI?</h2>
      <p className="text-md text-gray-600 text-center mb-6">
        It can be a workflow, a question, or even a prompt like "explain it like I’m in 5th grade."
      </p>

      <textarea
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        placeholder="Your AI use case..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        rows={4}
        required
      />

      <input
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-full font-semibold text-lg shadow hover:opacity-90 transition duration-150"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Submit + Start Rating'}
      </button>
    </form>
  );
}
