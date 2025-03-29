import React, { useState, useEffect } from 'react';

interface DiseaseDetailsProps {
  diseaseName: string;
}

interface DiseaseInfo {
  title: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  sources: string[];
}

const DiseaseDetails: React.FC<DiseaseDetailsProps> = ({ diseaseName }) => {
  const [diseaseInfo, setDiseaseInfo] = useState<DiseaseInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDiseaseInfo = async () => {
      try {
        setLoading(true);
        // Using NIH Open API endpoint
        const response = await fetch(`https://api.nih.gov/health/conditions/${encodeURIComponent(diseaseName)}`);
        if (!response.ok) {
          throw new Error('Failed to fetch disease information');
        }
        const data = await response.json();
        
        // Transform the API response into our DiseaseInfo format
        const transformedData: DiseaseInfo = {
          title: data.title || diseaseName,
          description: data.description || 'No description available.',
          symptoms: data.symptoms || [],
          treatments: data.treatments || [],
          sources: data.sources || []
        };
        
        setDiseaseInfo(transformedData);
      } catch (err) {
        setError('Unable to fetch disease information. Please try again later.');
        console.error('Error fetching disease info:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiseaseInfo();
  }, [diseaseName]);

  if (loading) {
    return (
      <div className="disease-details mt-4">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="disease-details mt-4">
        <div className="alert alert-danger">
          {error}
        </div>
      </div>
    );
  }

  if (!diseaseInfo) {
    return null;
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