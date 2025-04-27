# Payment System

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

> A simple backend service for managing users, points, and basic transactions.  
> Built with **Node.js**, **Express**, **Sequelize**, and **SQLite**.

---

## 🚀 Features

- User registration
- Points management
- Basic API endpoints for operations
- SQLite database with Sequelize ORM
- Easily extendable and customizable

---

## 🛆 Requirements

- Node.js (version 18 or higher recommended)
- npm (Node Package Manager)

---

## 🛠 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/payment-system.git
cd payment-system
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the server:**

```bash
npm start
```

The server will start running on:  
`http://localhost:3000/`

---

## 📁 Project Structure

```bash
.
├── app.js               # Main application file (Express server setup)
├── config/
│   └── database.js      # Sequelize database configuration
├── controllers/
│   ├── AuthController.js       #register controller
│   ├── DepositController.js    #deposit into user's own account
│   ├── PaymentsController.js   #payment controller 
│   ├── TransfersController.js  #user-2-user payment controller
│   ├── BalanceController.js    #check money and points
│   └── SettingsController.js   #setup configs for the whole API
│   └── ShowSpentController.js  #have control over user's payment history
├── models/
│   └── User.js          # Sequelize model for users
│   └── Settings.js      # Sequelize model for settings
├── routes/              #acess endpoints
│   ├── auth.js
│   ├── funds.js
│   ├── payments.js
│   ├── transfers.js
│   ├── balance.js
│   └── settings.js
│   └── spent.js
├── db.sqlite            # SQLite database file (auto-created)
├── package.json         # Project metadata and dependencies
└── README.md            # This file
```

---

## ✨ Development Notes

- Database tables are automatically synced at startup using Sequelize.
- Current database: local **SQLite** for simplicity. You can easily switch to **MySQL**, **PostgreSQL**, or others by adjusting `config/database.js`. Currently using sequelize will be enough but it might be necessary to add a caching system in the future to hold the amount of data users generate.
- Environment variables can be configured (for example, `PORT` or database settings).

---

## 🔥 Future Improvements

- Add authentication (JWT or sessions)
- Implement points transactions between users
- Create a ShoppingCart controller, model and route
- Setup automated testing (it will be mocha, but i am still figuring it out)
- Add Docker support for easier deployment
- masked IDs
- caching system

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Made by Daniel Lourenco Affonso

