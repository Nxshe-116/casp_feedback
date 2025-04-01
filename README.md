CASP Web Platform
Project Overview
The CASP (Climate-Agricultural Stock Predictor) Web Platform is an Angular-based application that integrates climate risk modeling with financial analytics for Zimbabwe's agricultural sector. Built with Angular 19, this platform provides AI-powered stock predictions with environmental factors.

Getting Started
Prerequisites
Node.js v18+

Angular CLI v19

Firebase account (for data services)

Installation
Clone the repository:

bash
Copy
git clone https://github.com/your-repo/CASPWeb.git
cd CASPWeb
Install dependencies:

bash
Copy
npm install
Configure environment:

bash
Copy
cp src/environments/environment.example.ts src/environments/environment.ts
Edit the Firebase configuration in the environment file.

Development Workflow
Running the Development Server
bash
Copy
ng serve
Access the application at http://localhost:4200

Building for Production
bash
Copy
ng build --configuration production
Optimized artifacts will be generated in the dist/ directory.

Key Features
Core Functionality
Real-time climate-risk stock analysis

Hybrid Heston-CIR prediction models

Regulatory compliance reporting tools

Investor portfolio stress-testing

Technical Stack
Angular 19 (Standalone Components)

Angular Material UI

Firebase Firestore (Modular API)

RxJS for state management

Tailwind CSS for utility styling

Testing
Unit Tests
bash
Copy
ng test
End-to-End Testing
bash
Copy
ng e2e
Deployment
Firebase Hosting
bash
Copy
firebase init hosting
firebase deploy
Alternative Deployment
Configure your preferred CI/CD pipeline using the dist/ output.

Project Structure
Copy
src/
├── app/               # Main application components
│   ├── core/          # Core services and interceptors
│   ├── features/      # Feature modules
│   └── shared/        # Shared components and utilities
├── assets/            # Static resources
├── environments/      # Environment configurations
└── styles/            # Global styles and themes
Contributing
Fork the repository

Create a feature branch

Submit a pull request

Support
For technical issues, contact the development team at dev-support@casp.zim