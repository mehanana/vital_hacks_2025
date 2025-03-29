import React, { useState } from 'react';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Results from './components/Results';
import Navigation from './components/Navigation';
import LearnMore from './components/LearnMore';
import About from './components/About';
import { initialQuestions, relatedSymptoms } from './data/disorders';
import { analyzeSymptoms } from './utils/helpers';
import { Result } from './types';
import './App.css';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('survey');
  const [currentStep, setCurrentStep] = useState<'welcome' | 'questions' | 'results'>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<string[]>([]);
  const [presentSymptoms, setPresentSymptoms] = useState<string[]>([]);
  const [isInitialPhase, setIsInitialPhase] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  const handleStart = () => {
    setCurrentStep('questions');
    setQuestions(initialQuestions);
    setCurrentQuestion(0);
    setPresentSymptoms([]);
    setIsInitialPhase(true);
  };

  const handleAnswer = (symptom: string, value: boolean) => {
    if (value) {
      setPresentSymptoms(prev => [...prev, symptom]);
    }

    if (currentQuestion + 1 >= questions.length) {
      if (isInitialPhase) {
        const positiveSymptoms = presentSymptoms.filter(symptom => 
          initialQuestions.includes(symptom)
        );

        if (positiveSymptoms.length > 0) {
          const allRelatedSymptoms = positiveSymptoms.flatMap(symptom => relatedSymptoms[symptom] || []);
          const uniqueQuestions = Array.from(new Set(allRelatedSymptoms));
          setQuestions(uniqueQuestions);
          setPresentSymptoms([]);
          setCurrentQuestion(0);
          setIsInitialPhase(false);
        } else {
          showResults();
        }
      } else {
        showResults();
      }
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const showResults = () => {
    const analysisResults = analyzeSymptoms(presentSymptoms);
    setResults(analysisResults);
    setCurrentStep('results');
  };

  const handleRestart = () => {
    setCurrentStep('welcome');
    setCurrentQuestion(0);
    setQuestions([]);
    setPresentSymptoms([]);
    setIsInitialPhase(true);
    setResults([]);
  };

  const progress = questions.length ? (currentQuestion / questions.length) * 100 : 0;

  const renderContent = () => {
    if (activeTab !== 'survey') {
      return activeTab === 'learn' ? <LearnMore /> : <About />;
    }

    return (
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h2 className="text-center mb-0">Symptom Diagnostics for Skeletal, Muscular, and Joint Diseases</h2>
        </div>
        <div className="card-body">
          {currentStep === 'welcome' && <Welcome onStart={handleStart} />}
          
          {currentStep === 'questions' && (
            <>
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <Question
                symptom={questions[currentQuestion]}
                currentIndex={currentQuestion}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
              />
            </>
          )}
          
          {currentStep === 'results' && (
            <Results results={results} onRestart={handleRestart} />
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
