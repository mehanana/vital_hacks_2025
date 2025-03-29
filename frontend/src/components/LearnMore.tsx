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
                <h4 className="mb-3">Joint Disorders</h4>
                <div className="list-group">
                  <a href="https://medlineplus.gov/jointdisorders.html" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    MedlinePlus: Joint Disorders Overview
                  </a>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10419701/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Recent Research on Joint Disorders
                  </a>
                  <a href="https://arthritis-research.biomedcentral.com/articles" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Arthritis Research Journal
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3">Muscle Disorders</h4>
                <div className="list-group">
                  <a href="https://medlineplus.gov/muscledisorders.html" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    MedlinePlus: Muscle Disorders Overview
                  </a>
                  <a href="https://www.sciencedirect.com/topics/neuroscience/disorders-of-muscles" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Scientific Overview of Muscle Disorders
                  </a>
                  <a href="https://www.sciencedirect.com/journal/neuromuscular-disorders" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Neuromuscular Disorders Journal
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3">Bone Disorders</h4>
                <div className="list-group">
                  <a href="https://medlineplus.gov/bonediseases.html" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    MedlinePlus: Bone Disorders Overview
                  </a>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7279399/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Recent Research on Bone Disorders
                  </a>
                  <a href="https://www.nature.com/boneres/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Bone Research Journal
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3">Autoimmune Diseases</h4>
                <div className="list-group">
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3823499/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Overview of Autoimmune Diseases
                  </a>
                  <a href="https://www.mayoclinic.org/departments-centers/rheumatology/sections/overview/ovc-20477132" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Mayo Clinic Rheumatology Department
                  </a>
                  <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10484226/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Recent Advances in Autoimmune Research
                  </a>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-3">Chronic Pain Conditions</h4>
                <div className="list-group">
                  <a href="https://mcpress.mayoclinic.org/opioids/how-chronic-pain-works/" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Mayo Clinic: Understanding Chronic Pain
                  </a>
                  <a href="https://my.clevelandclinic.org/health/diseases/4798-chronic-pain" target="_blank" rel="noopener noreferrer" className="list-group-item list-group-item-action">
                    Cleveland Clinic: Chronic Pain Overview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore; 