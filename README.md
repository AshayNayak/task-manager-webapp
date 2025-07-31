# Task Manager Web App

A full-stack task management application built with React, Node.js, Express, and MongoDB Atlas.

## 🚀 Features

- ✅ Create, read, update, and delete tasks
- ⭐ Mark tasks as important
- ✔️ Toggle task completion status
- 🔍 Search and filter tasks
- 📊 Real-time task statistics
- 📱 Responsive design with Tailwind CSS

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Git

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/task-manager-webapp.git
   cd task-manager-webapp
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies (if separate package.json)
   cd frontend
   npm install
   cd ..
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add your MongoDB Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager?retryWrites=true&w=majority
   PORT=5000
   ```

4. **Run the application**
   ```bash
   # Start backend server
   node server.js

   # In another terminal, start frontend (if separate)
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Backend API: http://localhost:5000
   - Frontend: http://localhost:3000 (or your Vite dev server port)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
5. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**

### 📝 Contribution Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation if needed
- Create descriptive commit messages

## 🔒 Branch Protection

- Main branch is protected
- All changes require pull requests
- Pull requests need approval before merging
- Direct pushes to main are not allowed

## 📂 Project Structure

```
task-manager-webapp/
├── server.js              # Express server
├── package.json           # Backend dependencies
├── .env                   # Environment variables (not tracked)
├── frontend/              # React frontend (if separate)
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   └── ...
│   └── package.json      # Frontend dependencies
└── README.md
```

## 🐛 Troubleshooting

**Common Issues:**

1. **Server won't start**
   - Check if port 5000 is available
   - Verify MongoDB connection string
   - Ensure all dependencies are installed

2. **Frontend can't connect to backend**
   - Make sure backend server is running
   - Check API_BASE_URL in frontend code
   - Verify CORS configuration

3. **Database connection fails**
   - Check MongoDB Atlas connection string
   - Verify database user permissions
   - Ensure IP address is whitelisted

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/YOUR-USERNAME)

## 🙏 Acknowledgments

- Thanks to all contributors
- Built with modern web technologies
- Inspired by productivity apps

---

⭐ **Star this repository if you found it helpful!**
