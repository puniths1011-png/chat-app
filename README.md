# ConnectHub

ConnectHub is a Full Stack real-time chatting application built with the MERN stack. It supports one-to-one and group conversations, typing indicators, and secure user authentication, with user details stored in encrypted format in MongoDB.

## Features

- User authentication (Sign up / Login) with encrypted credentials
- Real-time messaging powered by Socket.io
- Typing indicators
- One-to-one private chats
- Group chat creation, along with adding/removing group members
- Search for users to start a conversation
- Real-time notifications for new messages
- View other users' profiles

## Tech Stack

**Client:** React JS

**Server:** Node JS, Express JS

**Database:** MongoDB

**Real-time communication:** Socket.io

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes bundled with Node.js)
- [MongoDB](https://www.mongodb.com/) — either a local installation or a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster
- [Git](https://git-scm.com/)

## Project Structure

```
mern-chat-app/
├── backend/ (or root)      # Node.js + Express server
├── frontend/                # React client
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/puniths1011-png/mern-chat-app
cd mern-chat-app
```

### 2. Backend Setup

From the project root, install the backend dependencies:

```bash
npm install
```

Create a `.env` file in the root directory and add the following environment variables:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

| Variable     | Description                                                |
| ------------ | ---------------------------------------------------------- |
| `NODE_ENV`   | Application environment (`development` or `production`)    |
| `PORT`       | Port on which the backend server will run                  |
| `MONGO_URI`  | Your MongoDB connection string (local or Atlas)            |
| `JWT_SECRET` | Secret key used to sign JSON Web Tokens for authentication |

Start the backend server:

```bash
npm run start
```

For development with auto-restart on file changes (if `nodemon` is configured):

```bash
npm run dev
```

By default, the backend server will run on `http://localhost:5000`.

### 3. Frontend Setup

Open a **new terminal window**, then navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend/` directory if the client needs to know the backend URL:

```env
REACT_APP_API_URL=http://localhost:5000
```

Start the React development server:

```bash
npm start
```

The frontend will run on `http://localhost:3000` by default and will open automatically in your browser.

### 4. Running the Full App

You need **two terminals running simultaneously**:

1. **Terminal 1 (Backend):**
   ```bash
   npm run start
   ```
2. **Terminal 2 (Frontend):**
   ```bash
   cd frontend
   npm start
   ```

Once both servers are running, open `http://localhost:3000` in your browser to use the app.

## Author

- [@puniths1011-png](https://github.com/puniths1011-png)
