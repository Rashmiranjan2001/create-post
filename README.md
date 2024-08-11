Live Link: https://create-post-project-rashmiranjan.vercel.app/

Getting started 

Prerequisites
Ensure that you have the following software installed:
Node.js 
npm or Yarn

Clone the repo
1. Use latest stable node version
2. Run npm install to install the dependencies
3. Run npm start to start the server
4. Open http://localhost:3000 in your browser

Project Structure

src/
│
├── molecules/              # Contains stateful components
│   ├── Feed/               # Fetch and render feeds
│   ├── Landing/            # Shows login page and redirects to feeds page if logged in
│   ├── Login/              # Contains the login component
│   └── Signup/             # Contains the signup component
│
├── content/                # Contains presentational components
│   ├── Post/               # Contains the post card component
│   └── AddNewPost/         # Contains the create post card
│
├── sharedComponents/       # Contains design library components
│   ├── Button/             # Contains the button component
│   ├── Input/              # Contains the input component
│   └── Modal/              # Contains the modal Higher Order Component (HOC)
│
├── services/               # Contains services and business logic
│   └── auth-services/      # Handles user authentication-related business logic
│
├── App.js                  # Main app component
├── index.js                # Main entry point of the application
└── routes.js               # Defines all the application routes


Structure Overview
src/: This folder contains all the source code for the application, including components, services, and entry points.
molecules/:
This folder contains stateful components, which manage and maintain their own state.

Feed/: Responsible for fetching and rendering the feeds. It interacts with backend services to retrieve feed data and displays them.

Landing/: This component shows the login page by default. If a user is already logged in, it redirects them to the feeds page automatically.

Login/: Contains the login component, handling user input for credentials, and submitting them to the authentication service.

Signup/: This component manages the sign-up process, collecting user details and interacting with authentication services for account creation.

content/:
This folder holds presentational components, which primarily focus on the UI and don't manage their own state.

Post/: This component is responsible for displaying individual posts in a card format, showing the content, author, and other relevant information.

AddNewPost/: Contains the create post card, allowing users to write and submit new posts. This component is typically used within the feed or profile sections.

sharedComponents/:
Contains reusable design library components that are used across different parts of the application.

Button/: A reusable button component that can be styled and configured with various props like type, onClick, etc.

Input/: A versatile input component that can be used for different form fields, supporting various types of inputs like text, password, email, etc.

Modal/: A Higher Order Component (HOC) for modals, which can be wrapped around other components to display them as modals.

services/:
Handles all business logic and service interactions, such as API calls.

auth-services/: Contains all the logic related to user authentication, including login, logout, signup, and token management.
Key Files:
App.js: The main component of the application, which sets up the overall structure, including the layout and routing.

index.js: The entry point for the React application, rendering the App component and initiating the React rendering process.

routes.js: Defines all the routes in the application, mapping paths to components and handling route navigation.

### Libraries

- **React**: For building the UI.
- **React Router DOM**: For routing.
- **Sass**: For styling.
- **Moment**: For date formatting.