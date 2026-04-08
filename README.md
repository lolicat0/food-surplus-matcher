# Food Surplus Matcher

A serverless web application that connects food donors (like hotels and bakeries) with charities and volunteer drivers to reduce food waste and feed communities in need.

## Live Deployment

🚀 **Live URL**: [https://food-surplus-e1eca.web.app](https://food-surplus-e1eca.web.app)

The application is deployed securely utilizing Firebase Hosting.

## Tech Stack
- **Frontend**: React (Create React App), Tailwind CSS, Framer Motion
- **Backend/Identity**: Firebase Authentication
- **Database**: Firebase Firestore (NoSQL)
- **Maps**: Google Maps JavaScript & Places API (Live Ping Animations)

## Local Development (Quick Start)

### Prerequisites
Node.js and npm must be installed. Use `npm install` within the project root directory once pulled to install all necessary React dependencies.

### Environment Variables
For the app to run perfectly, it requires an `.env` file at the root of the project with the following structure:
```env
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=food-surplus-e1eca.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=food-surplus-e1eca
REACT_APP_FIREBASE_STORAGE_BUCKET=food-surplus-e1eca.firebasestorage.app
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```
*(Note: If these keys aren't found locally, the code is currently hardcoded with fallback values for presentation purposes.)*

### Running the App Locally
Run the following command to start your local development server:
```bash
npm start
```

## How To Deploy to Production

Whenever you alter the code and wish to deploy the new application build to our live URL, use your terminal and run this combined command from the project's root folder:

```bash
npm run build ; firebase deploy
```

*(If you are utilizing a standard Unix/Mac shell like bash/zsh, use `npm run build && firebase deploy` instead)*

### Deployment Process
1. **`npm run build`**: Analyzes the project and packages a minified, fully optimized production app within the `build/` folder.
2. **`firebase deploy`**: Immediately pushes the static `build/` folder and any configured Firebase rules (like your `firestore.rules` security policies) directly to Google Cloud.

## Required Cloud Services
To ensure the map and logins work:
- Verify **Maps JavaScript API** and **Places API** are fully enabled on Google Cloud.
- Ensure **Email/Password** authentication is enabled on the Firebase console under "Sign-in methods".