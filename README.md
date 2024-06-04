# Bootcamp Banking

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

Welcome to Bootcamp-Banking, a full-stack banking application developed collaboratively during our Ed-X coding bootcamp. This application showcases our ability to build a real-world, responsive, and interactive web application featuring user authentication, secure handling of sensitive information, and a polished, intuitive UI. We utilized Node.js and Express.js to create a robust RESTful API, and implemented Handlebars.js as our template engine to ensure a dynamic and interactive user experience. Our database management was handled through PostgreSQL and Sequelize ORM, ensuring efficient data retrieval and storage. The project also incorporates user authentication with express-session and cookies, protects sensitive information with environment variables, and is deployed on Render for live demonstration. Users can open accounts, view and manage their balances, and access customer support. Bootcamp Banking is not just a project, but a culmination of our hard work, dedication, and the collaborative efforts of our team.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [License](#license)
- [Installation](#installation)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Technologies Used

- Backend: Node.js and Express.js for creating a RESTful API
- Frontend: Handlebars.js as the template engine, Bootstrap for a polished and responsive UI, and Toastify.js for seamless notifications
- Database: PostgreSQL and Sequelize ORM
- Authentication: Express-session and cookies for secure user login and session management
- Deployment: Render for deploying the application
- Environment Variables: Protected API keys and sensitive information
- Features: Robust API endpoints for data retrieval and submission, options to open and manage checking and savings accounts, responsive design optimized for various devices, and an interactive user-friendly interface

## Usage

In your preferred browser, navigate to https://bootcamp-banking.onrender.com. You will be directed to the login page to create an account or sign in.

**Create a new user account**:

- From the login page, click `Create New Account`
- You will be re-directed to the register page
- Fill out the registration form and click `Sign Up`
- You will be re-directed back to the login page

**Login**:
Use your credentials to log in

**Dashboard**:
After logging in, you will be redirected to the homepage where you can view your existing accounts and/or create new ones. You will see the type(s) of accounts you have and their account number(s). For more detailed information and accouht management, click on `View Account`for either Checking or Savings.

**Checking and Savings Accounts**:
From the Checking and Savings pages you can

- View account balances
- Make deposits, withdrawals, and transfer between two existing accounts
- View date/time of last transaction
- View date account was created

**Navigation Bar**:
The navigation bar provides easy access to view accounts, open accounts, and log out.

### Application Images

![login image ](public/images/Login%20screenshot.jpg) ![Homepage](public/images/homepage%20screenshot%201%20account.jpg) ![Savings](public/images/savings%20account%20details%20screenshot.jpg)

## License

Licensed under the [MIT](https://opensource.org/licenses/MIT) license.

## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js version 18.x or higher
- Docker (for containerized deployment)

### Clone the Repository

1. Fork the repository on GitHub.
2. Clone your forked repository:
   ```bash
   git clone https://github.com/yourusername/bootcamp-banking.git
   cd bootcamp-banking
   ```

### Setup Development Environment

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up enviroment variables:

- Create a `.env` file in the root directory of your project.
- Add the following variables and replace the placeholders with your actual values:

  ```bash
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_HOST=your_database_host
    DB_PORT=your_database_port
    SESSION_SECRET=your_session_secret
  ```

3. Sign in to PostgreSQL:
   ```bash
     cd db
     psql -U postgres
     \i schema.sql
     \q
     cd ..
   ```
4. Seed database:

   ```bash
     npm run seed
   ```

5. Seed database:

   ```bash
     npm run seed
   ```

### Running the Application

1. Start the server

   ```bash
     npm run start
   ```

2. Access the Application:

   - Open your web browser and navigate to http://localhost:3000

## Contributing

We welcome contributions to Bootcamp Banking! Please follow these guidelines:

### Getting Started

1. **Fork and Clone the Repository**

   - Fork the repository on GitHub.
   - Clone your forked repository:
     ```bash
     git clone https://github.com/yourusername/bootcamp-banking.git
     cd bootcamp-banking
     ```

2. **Set Up Development Environment**
   - Follow the [Installation](#installation) instructions to install dependencies and set up the database.

### Making Changes

1. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**

- Follow coding standards and add comments where necessary.

3. **Submitting Changes**

- Commit and Push

  ```bash
  git add .
  git commit -m "Add feature X"
  git push origin feature/your-feature-name
  ```

## Questions

Please reach out to our team of developers with any questions or feedback you may have about this project via GitHub:

- [Paul Sherrill](https://github.com/pauldsherrill)
- [Ivory Rines](https://github.com/IvoryRines)
- [Jesse Corona](https://github.com/Jesse2919)
- [Samuel Cox](https://github.com/Swemee)
