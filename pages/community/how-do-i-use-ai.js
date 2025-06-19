// pages/community/how-do-i-use-ai.js
import { useState } from 'react';
import AIForm from '../../components/AIForm';
import RatingBoard from '../../components/RatingBoard';
import CommunityWall from '../../components/CommunityWall';

export default function HowDoIUseAIPage() {
  const [step, setStep] = useState(1);
  const [userEmail, setUserEmail] = useState('');

  const handleSubmitted = (email) => {
    setUserEmail(email);
    setStep(2);
  };

  const handleRatingsDone = () => {
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4">
      {step === 1 && <AIForm onSubmitted={handleSubmitted} />}
      {step === 2 && <RatingBoard userEmail={userEmail} onDone={handleRatingsDone} />}
      {step === 3 && <CommunityWall />}
    </div>
  );
}
