import React from 'react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="text-center mb-4">
      <p className="lead">This tool will help identify potential conditions based on your symptoms.</p>
      <p className="text-muted">Please note that this is for informational purposes only and should not replace professional medical advice.</p>
      <button onClick={onStart} className="btn btn-primary btn-lg">
        Start Diagnosis
      </button>
    </div>
  );
};

export default Welcome; 