# ABC Restaurant Frontend

This repository contains the frontend of the ABC Restaurant interactive web-based application. The application is designed to provide users with features such as browsing restaurant facilities, checking offers, making reservations, and more.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features
- **Restaurant Overview**: View detailed information about the restaurant, including its services and facilities.
- **Offers and Promotions**: Browse and take advantage of the latest offers.
- **Reservation System**: Make, view, and manage reservations.
- **Customer Registration and Login**: Secure authentication and user management.
- **Query Submission**: Submit and manage queries regarding services and other inquiries.
- **Gallery**: Explore images of the restaurant and its ambiance.

## Technologies Used
- **React**: Frontend framework used to build the user interface.
- **Material-UI**: React component library for faster and easier web development.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Day.js**: Lightweight library to manipulate dates.
- **React Router**: Standard library for routing in React.

## Installation
Follow these steps to set up and run the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) (v6.x or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/MadhushaWeerasiri/ABC_Restaurant-Frontend.git
   cd ABC_Restaurant-Frontend
2. Install the dependencies:
   ```bash
    npm install

## Running the Application

### Development Server
To run the application in development mode:
  ```bash
  npm start
  ```

The app will be available at http://localhost:3000/. The page will reload automatically when you make changes to the code.

## Production Build
To build the app for production:
  ```bash
npm run build
```

This will create an optimized build of the application in the build directory.

## Environment Variables
Create a .env file in the root directory of the project to configure the following environment variables:
  ```bash
  REACT_APP_ENDPOINT=your_api_endpoint_here
  ```
REACT_APP_ENDPOINT: The base URL of your backend API.

## Project Steucture
```bash
ABC_Restaurant-Frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components (e.g., AppBar, BottomNav, Bubble)
│   ├── pages/           # Page components (e.g., Home, Menu, Offers)
│   ├── services/        # API service files (e.g., Axios configurations)
│   ├── App.js           # Main app component
│   ├── index.js         # Entry point of the application
│   └── ...              # Other utility and helper files
├── .env                 # Environment configuration file (not included in the repo)
├── .gitignore           # Git ignore file
├── package.json         # NPM configuration file
└── README.md            # Project documentation
```

## Contributing
We welcome contributions to improve this project! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/your-feature).
6. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.
