// // // // const express = require("express");
// // // // const  connectDb = require("./config/dbConnection");
// // // // const dotenv = require("dotenv").config();
// // // // const errorHandler = require("./middleware/errorHandler");

// // // // connectDb() ;
// // // // const app = express();
// // // // const PORT = process.env.PORT || 5000;

// // // // // Middleware to parse JSON request bodies
// // // // app.use(express.json());

// // // // // Define API routes
// // // // app.use("/api/users", require("./routes/userRoutes"));

// // // // app.use(errorHandler) ;
// // // // // Start the server
// // // // app.listen(PORT, () => {
// // // //     console.log(`Server is running on port ${PORT}`);
// // // // });




// // // // require('dotenv').config();
// // // // require('express-async-errors');

// // // // const express = require('express');
// // // // const app = express();
// // // // const connectDB = require('./config/dbConnection');
// // // // const path = require('path');

// // // // const mainRouter = require('./routes/main');

// // // // app.use(express.json());
// // // // app.use(express.urlencoded({ extended: true })); 

// // // // // Routes
// // // // app.use('/', mainRouter);

// // // // const port = process.env.PORT || 3000;

// // // // const start = async () => {
// // // //     try {
// // // //         if (!process.env.MONGO_URI) {
// // // //             throw new Error('MONGO_URI is not defined in .env file');
// // // //         }

// // // //         await connectDB(process.env.MONGO_URI);
// // // //         console.log('Connected to MongoDB successfully');

// // // //         app.listen(port, () =>
// // // //             console.log(`Server is listening on port ${port}...`)
// // // //         );
// // // //     } catch (error) {
// // // //         console.error('Failed to start server:', error.message);
// // // //         process.exit(1); // Exit process with failure
// // // //     }
// // // // };

// // // // start();




// // // require("dotenv").config();
// // // require("express-async-errors");
// // // const http = require("http");
// // // // const express = require("express");
// // // // const path = require("path");
// // // const { Server } = require("socket.io"); // ✅ R

// // // const express = require("express");
// // // const path = require("path");
// // // const connectDB = require("./config/dbConnection");
// // // const errorHandler = require("./middleware/errorHandler");
// // // const mainRouter = require("./routes/main");
// // // const userRouter = require("./routes/userRoutes");

// // // const app = express();
// // // const server = http.createServer(app);
// // // const PORT = process.env.PORT || 5000;

// // // // Ensure MONGO_URI is defined
// // // if (!process.env.MONGO_URI) {
// // //     console.error("MONGO_URI is not defined in .env file");
// // //     process.exit(1);
// // // }

// // // // Connect to MongoDB
// // // const startServer = async () => {
// // //     try {
// // //         await connectDB(process.env.MONGO_URI);
// // //         console.log("Connected to MongoDB successfully");

// // //         // Middleware
// // //         app.use(express.json());
// // //         app.use(express.urlencoded({ extended: true }));

// // //         app.use(express.static(path.join(__dirname, "public")));

// // //         // Routes
// // //         app.use("/", mainRouter);
// // //         app.use("/api/users", userRouter);

// // //         // Error Handling Middleware
// // //         app.use(errorHandler);

// // //         // Start Server
// // //         app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
// // //     } catch (error) {
// // //         console.error("Failed to start server:", error.message);
// // //         process.exit(1);
// // //     }
// // // };

// // // const io = new Server(server); // ✅ Ensure this is properly initialized

// // // // Handle socket connection
// // // io.on('connection', (socket) => {
// // //   console.log("A user connected"); // ✅ Log when a user connects

// // //   socket.on('chat message', (msg) => {
// // //     io.emit('chat message', msg);
// // //   });

// // //   socket.on('disconnect', () => {
// // //     console.log("A user disconnected"); // ✅ Log when a user disconnects
// // //   });
// // // });

// // // startServer();






// // require("dotenv").config();
// // require("express-async-errors");

// // const express = require("express");
// // const http = require("http");
// // const path = require("path");
// // const { Server } = require("socket.io");

// // const connectDB = require("./config/dbConnection");
// // const errorHandler = require("./middleware/errorHandler");

// // const mainRouter = require("./routes/main");
// // const userRouter = require("./routes/userRoutes");

// // const app = express();
// // const server = http.createServer(app); // ✅ Now this server will be used for socket.io
// // const io = new Server(server); // ✅ Use this server instance

// // const PORT = process.env.PORT || 5000;

// // // Middleware
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, "public")));

// // // Routes
// // app.use("/", mainRouter);
// // app.use("/api/users", userRouter);

// // // Error Handling
// // app.use(errorHandler);

// // // Socket.io handling
// // io.on("connection", (socket) => {
// //     console.log("🟢 A user connected");

// //     socket.on("chat message", (msg) => {
// //         console.log("Message received:", msg);
// //         io.emit("chat message", msg); // Broadcast to all users
// //     });

// //     socket.on("disconnect", () => {
// //         console.log("🔴 A user disconnected");
// //     });
// // });

// // // Start server + connect DB
// // const startServer = async () => {
// //     try {
// //         if (!process.env.MONGO_URI) {
// //             throw new Error("MONGO_URI is not defined in .env");
// //         }

// //         await connectDB(process.env.MONGO_URI);
// //         console.log("✅ Connected to MongoDB");

// //         server.listen(PORT, () => {
// //             console.log(`🚀 Server is running on http://localhost:${PORT}`);
// //         });
// //     } catch (error) {
// //         console.error("❌ Server failed to start:", error.message);
// //         process.exit(1);
// //     }
// // };

// // startServer();




// // const express = require('express');
// // const mongoose = require('mongoose');
// // const session = require('express-session');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const path = require('path');

// // const authRoutes = require('./routes/authRoutes');
// // const profileRoutes = require('./routes/profileRoutes');

// // const app = express();

// // mongoose.connect('mongodb://127.0.0.1:27017/teamfinder', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // }).then(() => console.log('MongoDB connected'))
// //   .catch(err => console.log('MongoDB connection error:', err));

// // app.use(cors());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());
// // app.use(session({
// //     secret: 'avanimathur01',
// //     resave: false,
// //     saveUninitialized: true
// // }));

// // app.use(express.static(path.join(__dirname, 'public')));

// // // Routes
// // app.use('/api/auth', authRoutes);
// // app.use('/api/profile', profileRoutes);

// // // Serve HTML pages
// // app.get('/', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'public', 'login.html'));
// // });
// // app.get('/register', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'public', 'register.html'));
// // });
// // app.get('/profile', (req, res) => {
// //     res.sendFile(path.join(__dirname, 'public', 'profile.html'));
// // });

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// // require("dotenv").config();
// // require("express-async-errors");

// // const express = require("express");
// // const http = require("http");
// // const path = require("path");
// // const { Server } = require("socket.io");
// // const session = require("express-session");
// // const connectDB = require("./config/dbConnection");
// // const errorHandler = require("./middleware/errorHandler");
// // const cors = require("cors");

// // const mainRouter = require("./routes/main");
// // // const userRouter = require("./routes/user");
// // const authRouter = require("./routes/auth");
// // const profileRouter = require("./routes/profile");

// // const app = express();
// // const server = http.createServer(app);
// // const io = new Server(server);

// // // Port
// // const PORT = process.env.PORT || 5000;

// // // Mongo URI check
// // if (!process.env.MONGO_URI) {
// //     console.error("❌ MONGO_URI not defined in .env");
// //     process.exit(1);
// // }

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, "public")));

// // app.use(session({
// //     secret: process.env.SESSION_SECRET || "defaultsecret",
// //     resave: false,
// //     saveUninitialized: true,
// // }));

// // // Routes
// // app.use("/", mainRouter);
// // // app.use("/api/users", userRouter);
// // app.use("/api/auth", authRouter);
// // app.use("/api/profile", profileRouter);

// // // Error Handling Middleware
// // app.use(errorHandler);

// // // Socket.io Chat
// // io.on("connection", (socket) => {
// //     console.log("🟢 A user connected");

// //     socket.on("chat message", (msg) => {
// //         console.log("📨 Message received:", msg);
// //         io.emit("chat message", msg);
// //     });

// //     socket.on("disconnect", () => {
// //         console.log("🔴 A user disconnected");
// //     });
// // });

// // // Start Server
// // const startServer = async () => {
// //     try {
// //         await connectDB(process.env.MONGO_URI);
// //         console.log("✅ Connected to MongoDB");

// //         server.listen(PORT, () => {
// //             console.log(`🚀 Server running at http://localhost:${PORT}`);
// //         });
// //     } catch (err) {
// //         console.error("❌ Server failed to start:", err.message);
// //         process.exit(1);
// //     }
// // };

// // startServer();



// // require("dotenv").config();
// // require("express-async-errors");

// // const express = require("express");
// // const http = require("http");
// // const path = require("path");
// // const { Server } = require("socket.io");
// // const session = require("express-session");
// // const connectDB = require("./config/dbConnection");
// // const errorHandler = require("./middleware/errorHandler");
// // const cors = require("cors");

// // const mainRouter = require("./routes/main");
// // const authRouter = require("./routes/userRoutes");      // Auth routes: register, login, current user
// // const profileRouter = require("./routes/profile"); // Profile routes: create, get profile

// // const app = express();
// // const server = http.createServer(app);
// // const io = new Server(server);

// // // Port
// // const PORT = process.env.PORT || 5000;

// // // Mongo URI check
// // if (!process.env.MONGO_URI) {
// //   console.error("❌ MONGO_URI not defined in .env");
// //   process.exit(1);
// // }

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.static(path.join(__dirname, "public")));

// // app.use(
// //   session({
// //     secret: process.env.SESSION_SECRET || "defaultsecret",
// //     resave: false,
// //     saveUninitialized: true,
// //   })
// // );

// // // Routes
// // app.use("/", mainRouter);
// // app.use("/api/auth", authRouter);       // Register, login, current user
// // app.use("/api/profile", profileRouter); // Profile routes protected internally

// // // Error Handling Middleware (for express-async-errors)
// // app.use(errorHandler);

// // // Socket.io Chat
// // io.on("connection", (socket) => {
// //   console.log("🟢 A user connected");

// //   socket.on("chat message", (msg) => {
// //     console.log("📨 Message received:", msg);
// //     io.emit("chat message", msg);
// //   });

// //   socket.on("disconnect", () => {
// //     console.log("🔴 A user disconnected");
// //   });
// // });

// // // Start Server and Connect DB
// // const startServer = async () => {
// //   try {
// //     await connectDB(process.env.MONGO_URI);
// //     console.log("✅ Connected to MongoDB");

// //     server.listen(PORT, () => {
// //       console.log(`🚀 Server running at http://localhost:${PORT}`);
// //     });
// //   } catch (err) {
// //     console.error("❌ Server failed to start:", err.message);
// //     process.exit(1);
// //   }
// // };

// // startServer();



// require("dotenv").config();
// require("express-async-errors");

// const express = require("express");
// const http = require("http");
// const path = require("path");
// const { Server } = require("socket.io");
// const session = require("express-session");
// const connectDB = require("./config/dbConnection");
// const errorHandler = require("./middleware/errorHandler");
// const cors = require("cors");

// const mainRouter = require("./routes/main");
// const authRouter = require("./routes/userRoutes");      // Auth routes: register, login, current user
// const profileRouter = require("./routes/profile"); // Profile routes: create, get profile

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// // Port
// const PORT = process.env.PORT || 5000;

// // Mongo URI check
// if (!process.env.MONGO_URI) {
//   console.error("❌ MONGO_URI not defined in .env");
//   process.exit(1);
// }

// // Middleware

// // Log every incoming request
// app.use((req, res, next) => {
//   console.log(`➡️ ${req.method} ${req.originalUrl}`);
//   next();
// });

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "defaultsecret",
//     resave: false,
//     saveUninitialized: true,
//   })
// );

// // Routes
// app.use("/", mainRouter);
// app.use("/api/auth", authRouter);       // Register, login, current user
// app.use("/api/profile", profileRouter); // Profile routes protected internally

// // Note: Add console logs like below *inside* the route handlers in authRouter and profileRouter
// // For example, inside register handler: console.log(`✅ User Registered: username`)
// // Inside login handler: console.log(`🔑 User Logged In: username`)
// // Inside profile create/update handler: console.log(`📝 Profile Created/Updated for userId`)

// // Error Handling Middleware (for express-async-errors)
// app.use(errorHandler);

// // Socket.io Chat
// io.on("connection", (socket) => {
//   console.log("🟢 A user connected");

//   socket.on("chat message", (msg) => {
//     console.log("📨 Message received:", msg);
//     io.emit("chat message", msg);
//   });

//   socket.on("disconnect", () => {
//     console.log("🔴 A user disconnected");
//   });
// });

// // Start Server and Connect DB
// const startServer = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//     console.log("✅ Connected to MongoDB");

//     server.listen(PORT, () => {
//       console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error("❌ Server failed to start:", err.message);
//     process.exit(1);
//   }
// };

// startServer();


require("dotenv").config();
require("express-async-errors");

const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const session = require("express-session");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

const mainRouter = require("./routes/main");
const authRouter = require("./routes/userRoutes");      // Auth routes: register, login, current user
const profileRouter = require("./routes/profile"); // Profile routes: create, get profile

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Port
const PORT = process.env.PORT || 5000;

// Mongo URI check
if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI not defined in .env");
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "defaultsecret",
    resave: false,
    saveUninitialized: true,
  })
);

// --- Logging Middleware for key routes ---
app.use((req, res, next) => {
  const { method, originalUrl, body } = req;

  if (method === "POST") {
    if (originalUrl === "/api/auth/register") {
      console.log(`🔐 Registration Attempt - Username: ${body.username || "N/A"}, Email: ${body.email || "N/A"}`);
    } else if (originalUrl === "/api/auth/login") {
      console.log(`🔑 Login Attempt - Email: ${body.email || "N/A"}`);
    } else if (originalUrl.startsWith("/api/profile/create")) {
      console.log(`📝 Profile Creation Attempt - UserId: ${req.session?.userId || "unknown"}`);
      console.log("Profile Data:", body);
    } else if (originalUrl.startsWith("/api/profile/update")) {
      console.log(`✏️ Profile Update Attempt - UserId: ${req.session?.userId || "unknown"}`);
      console.log("Profile Data:", body);
    }
  }

  next();
});

// Routes
app.use("/", mainRouter);
app.use("/api/auth", authRouter);       // Register, login, current user
app.use("/api/profile", profileRouter); // Profile routes protected internally

// Error Handling Middleware (for express-async-errors)
app.use(errorHandler);

// Socket.io Chat
io.on("connection", (socket) => {
  console.log("🟢 A user connected");

  socket.on("chat message", (msg) => {
    console.log("📨 Message received:", msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("🔴 A user disconnected");
  });
});

// Start Server and Connect DB
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    server.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Server failed to start:", err.message);
    process.exit(1);
  }
};

startServer();
