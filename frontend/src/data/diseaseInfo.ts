export interface DiseaseInfo {
  title: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  sources: string[];
}

export const diseaseInfoData: { [key: string]: DiseaseInfo } = {
  'Osteoporosis': {
    title: 'Osteoporosis',
    description: 'A condition characterized by weak and brittle bones, making them more prone to fractures.',
    symptoms: [
      'Back pain',
      'Loss of height over time',
      'Stooped posture',
      'Brittle or fragile bones',
      'Weak grip strength',
      'Increased frequency of fractures'
    ],
    treatments: [
      'Calcium and vitamin D supplements',
      'Bisphosphonates medications',
      'Hormone therapy',
      'Regular exercise program',
      'Fall prevention strategies'
    ],
    sources: [
      'https://www.niams.nih.gov/health-topics/osteoporosis',
      'https://www.mayoclinic.org/diseases-conditions/osteoporosis/symptoms-causes/syc-20351968'
    ]
  },
  'Osteoarthritis': {
    title: 'Osteoarthritis',
    description: 'A degenerative joint disease that causes the breakdown of joint cartilage and underlying bone.',
    symptoms: [
      'Joint pain',
      'Joint stiffness',
      'Joint tenderness',
      'Loss of flexibility',
      'Bone spurs',
      'Joint swelling',
      'Joints pop or crackle often'
    ],
    treatments: [
      'Pain relievers and anti-inflammatory medications',
      'Physical therapy',
      'Joint injections',
      'Weight management',
      'Low-impact exercise'
    ],
    sources: [
      'https://www.niams.nih.gov/health-topics/osteoarthritis',
      'https://www.mayoclinic.org/diseases-conditions/osteoarthritis/symptoms-causes/syc-20351925'
    ]
  },
  'Rickets': {
    title: 'Rickets',
    description: 'A condition that affects bone development in children, causing soft and weak bones.',
    symptoms: [
      'Delayed growth and motor skills',
      'Spine pain',
      'Pelvis pain',
      'Leg pain',
      'Muscle weakness',
      'Bowed legs',
      'Thickened wrists and ankles',
      'Breastbone projection'
    ],
    treatments: [
      'Vitamin D supplements',
      'Calcium supplements',
      'Sunlight exposure',
      'Dietary changes'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/rickets/symptoms-causes/syc-20351943',
      'https://www.nhs.uk/conditions/rickets-and-osteomalacia/'
    ]
  },
  'Polymyositis': {
    title: 'Polymyositis',
    description: 'A rare inflammatory disease that causes muscle weakness and inflammation.',
    symptoms: [
      'Muscle weakness',
      'Difficulty swallowing',
      'Muscle pain',
      'Muscle tenderness',
      'Fatigue'
    ],
    treatments: [
      'Corticosteroids',
      'Immunosuppressant medications',
      'Physical therapy',
      'Speech therapy'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/polymyositis/symptoms-causes/syc-20353208',
      'https://www.niams.nih.gov/health-topics/polymyositis'
    ]
  },
  'Dermatomyositis': {
    title: 'Dermatomyositis',
    description: 'An inflammatory disease marked by muscle weakness and a distinctive skin rash.',
    symptoms: [
      'Muscle weakness',
      'Swelling around eye',
      'Rash',
      'Fatigue',
      'Weight loss'
    ],
    treatments: [
      'Corticosteroids',
      'Immunosuppressant medications',
      'Physical therapy',
      'Sun protection'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/dermatomyositis/symptoms-causes/syc-20353188',
      'https://www.niams.nih.gov/health-topics/dermatomyositis'
    ]
  },
  'Rhabdomyolysis': {
    title: 'Rhabdomyolysis',
    description: 'A serious syndrome caused by muscle injury and muscle cell death.',
    symptoms: [
      'Muscle pain',
      'Muscle weakness',
      'Dark urine',
      'Nausea',
      'Irregular heartbeat'
    ],
    treatments: [
      'Intravenous fluids',
      'Electrolyte management',
      'Kidney function monitoring',
      'Treatment of underlying cause'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/rhabdomyolysis/symptoms-causes/syc-20351880',
      'https://www.niddk.nih.gov/health-information/kidney-disease/rhabdomyolysis'
    ]
  },
  'Myasthenia Gravis': {
    title: 'Myasthenia Gravis',
    description: 'A chronic autoimmune neuromuscular disease that causes weakness in the skeletal muscles.',
    symptoms: [
      'Muscle weakness',
      'Drooping eyelids',
      'Difficulty swallowing',
      'Breathlessness',
      'Weakness'
    ],
    treatments: [
      'Cholinesterase inhibitors',
      'Corticosteroids',
      'Immunosuppressants',
      'Plasmapheresis',
      'Thymectomy'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/myasthenia-gravis/symptoms-causes/syc-20352036',
      'https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis'
    ]
  },
  'Toxic Myopathy': {
    title: 'Toxic Myopathy',
    description: 'Muscle damage caused by exposure to certain drugs or toxins.',
    symptoms: [
      'Muscle pain',
      'Muscle tenderness',
      'Weakness',
      'Fatigue',
      'Dark urine'
    ],
    treatments: [
      'Discontinuation of causative agent',
      'Supportive care',
      'Physical therapy',
      'Monitoring of kidney function'
    ],
    sources: [
      'https://www.sciencedirect.com/topics/medicine-and-dentistry/toxic-myopathy',
      'https://www.ncbi.nlm.nih.gov/books/NBK559512/'
    ]
  },
  'Fibromyalgia': {
    title: 'Fibromyalgia',
    description: 'A disorder characterized by widespread musculoskeletal pain accompanied by fatigue, sleep, memory and mood issues.',
    symptoms: [
      'Muscle pain',
      'Muscle tenderness',
      'Fatigue',
      'Headache',
      'Depression',
      'Anxiety'
    ],
    treatments: [
      'Pain relievers',
      'Antidepressants',
      'Anti-seizure drugs',
      'Physical therapy',
      'Counseling'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/fibromyalgia/symptoms-causes/syc-20354780',
      'https://www.niams.nih.gov/health-topics/fibromyalgia'
    ]
  },
  'Compartment Syndrome': {
    title: 'Compartment Syndrome',
    description: 'A painful condition that occurs when pressure within the muscles builds to dangerous levels.',
    symptoms: [
      'Severe pain in muscle compartment',
      'Swelling',
      'Tightness',
      'Numbness in specific compartment',
      'Decreased movement',
      'Loss of circulation'
    ],
    treatments: [
      'Emergency surgery (fasciotomy)',
      'Pain management',
      'Physical therapy',
      'Monitoring of pressure'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/compartment-syndrome/symptoms-causes/syc-20370432',
      'https://www.orthoinfo.org/en/diseases--conditions/compartment-syndrome/'
    ]
  },
  'Tendinitis': {
    title: 'Tendinitis',
    description: 'Inflammation or irritation of a tendon, the thick fibrous cords that attach muscle to bone.',
    symptoms: [
      'Inflammation of tendons',
      'Pain and stiffness during movement',
      'Swelling in shoulders',
      'Swelling in elbows',
      'Swelling in knees',
      'Swelling in heels'
    ],
    treatments: [
      'Rest',
      'Ice application',
      'Physical therapy',
      'Pain relievers',
      'Corticosteroid injections'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/tendinitis/symptoms-causes/syc-20378243',
      'https://www.niams.nih.gov/health-topics/tendinitis'
    ]
  },
  'Bursitis': {
    title: 'Bursitis',
    description: 'Inflammation of the bursae, small fluid-filled sacs that cushion the bones, tendons and muscles near your joints.',
    symptoms: [
      'Inflammation of bursae',
      'Swelling',
      'Restricted movement',
      'Joint pain',
      'Joint swelling',
      'Muscle tenderness'
    ],
    treatments: [
      'Rest',
      'Ice application',
      'Pain relievers',
      'Physical therapy',
      'Corticosteroid injections'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/bursitis/symptoms-causes/syc-20353242',
      'https://www.niams.nih.gov/health-topics/bursitis'
    ]
  },
  'Chronic Fatigue Syndrome': {
    title: 'Chronic Fatigue Syndrome (CFS)',
    description: 'A complex disorder characterized by extreme fatigue that cannot be explained by any underlying medical condition.',
    symptoms: [
      'Muscle fatigue',
      'Difficulty concentrating',
      'Joint pain',
      'Muscle pain',
      'Extreme exhaustion'
    ],
    treatments: [
      'Cognitive behavioral therapy',
      'Graded exercise therapy',
      'Sleep management',
      'Pain management',
      'Lifestyle changes'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/chronic-fatigue-syndrome/symptoms-causes/syc-20360490',
      'https://www.cdc.gov/me-cfs/'
    ]
  },
  'Pyomyositis': {
    title: 'Pyomyositis',
    description: 'A bacterial infection of the skeletal muscles that leads to abscess formation.',
    symptoms: [
      'Fever',
      'Chills',
      'Muscle pain',
      'Swelling',
      'Redness'
    ],
    treatments: [
      'Antibiotics',
      'Surgical drainage if needed',
      'Pain management',
      'Rest'
    ],
    sources: [
      'https://www.ncbi.nlm.nih.gov/books/NBK532288/',
      'https://www.sciencedirect.com/topics/medicine-and-dentistry/pyomyositis'
    ]
  },
  'Lactic Acidosis': {
    title: 'Lactic Acidosis',
    description: 'A buildup of lactic acid in the bloodstream, which can be life-threatening.',
    symptoms: [
      'Muscle pain',
      'Muscle cramps',
      'Rapid breathing',
      'Nausea',
      'Weakness'
    ],
    treatments: [
      'Intravenous fluids',
      'Bicarbonate therapy',
      'Oxygen therapy',
      'Treatment of underlying cause'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/lactic-acidosis/symptoms-causes/syc-20374451',
      'https://www.ncbi.nlm.nih.gov/books/NBK470202/'
    ]
  },
  'Lupus': {
    title: 'Lupus',
    description: 'A systemic autoimmune disease that occurs when your body\'s immune system attacks your own tissues and organs.',
    symptoms: [
      'Butterfly shaped rash on face',
      'Red bumps',
      'Sensitivity to sunlight',
      'Hair loss',
      'Joint pain',
      'Joint stiffness',
      'Joint swelling',
      'Fatigue'
    ],
    treatments: [
      'Nonsteroidal anti-inflammatory drugs',
      'Antimalarial drugs',
      'Corticosteroids',
      'Immunosuppressants',
      'Biologics'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/lupus/symptoms-causes/syc-20365789',
      'https://www.niams.nih.gov/health-topics/lupus'
    ]
  },
  "Sjogren's Syndrome": {
    title: "Sjogren's Syndrome",
    description: 'An autoimmune disorder that affects the body\'s moisture-producing glands.',
    symptoms: [
      'Dry eyes',
      'Dry mouth',
      'Dry skin',
      'Fatigue',
      'Joint pain',
      'Joint stiffness',
      'Muscle weakness',
      'Difficulty swallowing',
      'Difficulty talking',
      'Difficulty concentrating',
      'Taste loss',
      'Tooth decay'
    ],
    treatments: [
      'Artificial tears',
      'Saliva substitutes',
      'Prescription medications',
      'Lifestyle changes',
      'Regular dental care'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/sjogrens-syndrome/symptoms-causes/syc-20353216',
      'https://www.niams.nih.gov/health-topics/sjogrens-syndrome'
    ]
  },
  'Neuropathic Arthropathy': {
    title: 'Neuropathic Arthropathy',
    description: 'A progressive degeneration of a weight-bearing joint, a process marked by simultaneous bone destruction and repair.',
    symptoms: [
      'Joint pain',
      'Joint swelling',
      'Joint redness',
      'Deformity of joints',
      'Weight fluctuation',
      'Loss of sensation',
      'Diabetes'
    ],
    treatments: [
      'Offloading devices',
      'Orthopedic shoes',
      'Physical therapy',
      'Surgery in severe cases',
      'Management of underlying conditions'
    ],
    sources: [
      'https://www.ncbi.nlm.nih.gov/books/NBK559163/',
      'https://www.sciencedirect.com/topics/medicine-and-dentistry/neuropathic-arthropathy'
    ]
  },
  'Ehlers-Danlos': {
    title: 'Ehlers-Danlos',
    description: 'A group of inherited disorders that affect your connective tissues — primarily your skin, joints and blood vessel walls.',
    symptoms: [
      'Loose joints',
      'Stretchy skin',
      'Fragile skin',
      'Skin bruises',
      'Chronic pain',
      'Fatigue',
      'Cognitive impairment',
      'Headache',
      'Gastrointestinal issues'
    ],
    treatments: [
      'Physical therapy',
      'Pain management',
      'Joint protection',
      'Lifestyle modifications',
      'Genetic counseling'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/ehlers-danlos-syndrome/symptoms-causes/syc-20362125',
      'https://www.niams.nih.gov/health-topics/ehlers-danlos-syndrome'
    ]
  },
  'Myopathy': {
    title: 'Myopathy',
    description: 'A general term referring to any disease that affects the muscles that control voluntary movement in the body.',
    symptoms: [
      'Muscle weakness',
      'Muscle cramps',
      'Muscle stiffness',
      'Muscle spasms',
      'Fatigue with exertion',
      'Lack of energy'
    ],
    treatments: [
      'Physical therapy',
      'Exercise programs',
      'Medications to manage symptoms',
      'Lifestyle modifications',
      'Regular monitoring'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/myopathy/symptoms-causes/syc-20351997',
      'https://www.ninds.nih.gov/health-information/disorders/myopathy'
    ]
  },
  'Tendonitis': {
    title: 'Tendonitis',
    description: 'Inflammation or irritation of a tendon, the thick fibrous cords that attach muscle to bone.',
    symptoms: [
      'Pain and tenderness near a joint',
      'Stiffness that worsens with movement',
      'Swelling around the affected area',
      'Limited range of motion',
      'Pain that worsens at night or in the morning'
    ],
    treatments: [
      'Rest and activity modification',
      'Ice application',
      'Physical therapy',
      'Pain relievers',
      'Corticosteroid injections'
    ],
    sources: [
      'https://www.mayoclinic.org/diseases-conditions/tendinitis/symptoms-causes/syc-20378243',
      'https://www.niams.nih.gov/health-topics/tendinitis'
    ]
  }
}; 