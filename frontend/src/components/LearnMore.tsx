import React from 'react';

const LearnMore: React.FC = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h2 className="text-center mb-0">Learn More About Medical Conditions</h2>
            </div>
            <div className="card-body">
              <h3>Understanding Common Medical Conditions</h3>
              <p className="lead">
                This section provides detailed information about various medical conditions
                and their symptoms to help you better understand your health.
              </p>
              <div className="mt-4">
                <h4>Common Categories</h4>
                <ul className="list-group">
                  <li className="list-group-item">Joint and Bone Conditions</li>
                  <li className="list-group-item">Muscle Disorders</li>
                  <li className="list-group-item">Autoimmune Diseases</li>
                  <li className="list-group-item">Chronic Pain Conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore; 