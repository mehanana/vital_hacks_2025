import React from 'react';
import { formatSymptomText } from '../utils/helpers';

interface QuestionProps {
  symptom: string;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (symptom: string, value: boolean) => void;
}

const Question: React.FC<QuestionProps> = ({
  symptom,
  currentIndex,
  totalQuestions,
  onAnswer,
}) => {
  return (
    <div className="question-card">
      <h4 className="mb-3">Question {currentIndex + 1} of {totalQuestions}</h4>
      <p className="mb-3">Do you experience {formatSymptomText(symptom)}?</p>
      <div className="d-grid gap-2">
        <button
          className="btn btn-outline-primary btn-option"
          onClick={() => onAnswer(symptom, true)}
        >
          Yes
        </button>
        <button
          className="btn btn-outline-secondary btn-option"
          onClick={() => onAnswer(symptom, false)}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Question; 