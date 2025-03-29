# Medical Symptom Diagnostic Tool

A web application that helps users identify potential medical conditions based on their symptoms. The tool provides preliminary information and should not be used as a substitute for professional medical advice.

## Features

- Interactive symptom questionnaire
- Real-time progress tracking
- Detailed disease information from NIH Open API
- Responsive design for all devices
- Learn more about medical conditions
- Comprehensive about section

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/medical-diagnostic-tool.git
cd medical-diagnostic-tool
```

2. Install all dependencies:
```bash
npm run install-all
```

## Running the Application

1. Start both frontend and backend servers:
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Development

- Frontend development server: `npm run start:frontend`
- Backend development server: `npm run start:backend`
- Build frontend for production: `npm run build`
- Run tests: `npm test`

## Project Structure

```
medical-diagnostic-tool/
├── frontend/                 # React frontend application
│   ├── src/                 # Source files
│   ├── public/              # Static files
│   └── package.json         # Frontend dependencies
├── backend/                 # Node.js backend application
│   ├── src/                # Source files
│   └── package.json        # Backend dependencies
├── package.json            # Root package.json
└── README.md              # Project documentation
```

## API Integration

This project uses the NIH Open API for disease information. To use the API:

1. Sign up for an API key at [NIH Open API](https://api.nih.gov)
2. Create a `.env` file in the backend directory with your API key:
```
NIH_API_KEY=your_api_key_here
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

This tool is for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.