import React, { useState } from 'react';
import { Result } from '../types';
import DiseaseDetails from './DiseaseDetails';

interface ResultsProps {
  results: Result[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ results, onRestart }) => {
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);

  return (
    <div>
      <h3 className="text-center mb-4">Your Potential Risks</h3>
      <div id="results-container">
        {results.length === 0 ? (
          <div className="alert alert-info">
            No significant matches found. Please consult with a healthcare professional for a proper diagnosis.
          </div>
        ) : (
          results.map((result, index) => (
            <div key={index} className="result-card">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">{result.disorder}</h5>
                <span className="result-percentage">{result.percentage.toFixed(1)}% match</span>
              </div>
              <button
                className="btn btn-outline-primary btn-sm mt-2"
                onClick={() => setSelectedDisease(selectedDisease === result.disorder ? null : result.disorder)}
              >
                {selectedDisease === result.disorder ? 'Hide Details' : 'Preventative Care'}
              </button>
              {selectedDisease === result.disorder && (
                <DiseaseDetails diseaseName={result.disorder} />
              )}
            </div>
          ))
        )}
      </div>
      <div className="text-center mt-4">
        <button onClick={onRestart} className="btn btn-secondary">
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Results; 