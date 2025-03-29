import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center mb-0">About the Medical Diagnostic Tool</h2>
            </div>
            <div className="card-body">
              <h3>Our Mission</h3>
              <p className="lead">
                We aim to provide accessible, preliminary information about potential medical conditions
                based on symptoms. This tool is designed to help users better understand their health
                and facilitate more informed discussions with healthcare professionals.
              </p>
              <div className="mt-4">
                <h4>Important Disclaimer</h4>
                <div className="alert alert-warning">
                  This tool is for informational purposes only and should not be used as a substitute
                  for professional medical advice, diagnosis, or treatment. Always seek the advice of
                  your physician or other qualified health provider with any questions you may have
                  regarding a medical condition.
                </div>
              </div>
              <div className="mt-4">
                <h4>How It Works</h4>
                <p>
                  Our diagnostic tool uses a series of carefully crafted questions to gather information
                  about your symptoms. Based on your responses, it provides preliminary information
                  about potential conditions that might be related to your symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 