import React from 'react';
import { preventativeCareData } from '../data/preventativeCare';
import { diseaseInfoData } from '../data/diseaseInfo';

interface DiseaseDetailsProps {
  diseaseName: string;
}

const DiseaseDetails: React.FC<DiseaseDetailsProps> = ({ diseaseName }) => {
  const diseaseInfo = diseaseInfoData[diseaseName];
  const preventativeCareTips = preventativeCareData[diseaseName] || [];

  if (!diseaseInfo) {
    return (
      <div className="disease-details mt-4">
        <div className="alert alert-info">
          No detailed information available for this condition.
        </div>
      </div>
    );
  }

  return (
    <div className="disease-details mt-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{diseaseInfo.title}</h4>
          <p className="card-text">{diseaseInfo.description}</p>
          
          {diseaseInfo.symptoms.length > 0 && (
            <div className="mt-3">
              <h5>Common Symptoms</h5>
              <ul className="list-group">
                {diseaseInfo.symptoms.map((symptom, index) => (
                  <li key={index} className="list-group-item">{symptom}</li>
                ))}
              </ul>
            </div>
          )}

          {preventativeCareTips.length > 0 && (
            <div className="mt-3">
              <h5>Preventative Care Tips</h5>
              <ul className="list-group">
                {preventativeCareTips.map((tip, index) => (
                  <li key={index} className="list-group-item">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {diseaseInfo.treatments.length > 0 && (
            <div className="mt-3">
              <h5>Treatment Options</h5>
              <ul className="list-group">
                {diseaseInfo.treatments.map((treatment, index) => (
                  <li key={index} className="list-group-item">{treatment}</li>
                ))}
              </ul>
            </div>
          )}

          {diseaseInfo.sources.length > 0 && (
            <div className="mt-3">
              <h5>Sources</h5>
              <ul className="list-group">
                {diseaseInfo.sources.map((source, index) => (
                  <li key={index} className="list-group-item">
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      {source}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiseaseDetails; 