// const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcryptjs"); // Use bcryptjs for consistency
// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");

// // Generate JWT Token
// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
// };

// // @desc Register a user
// // @route POST /api/users/register
// // @access private
// const registerUser = asyncHandler(async (req, res) => {
//     console.log("Request Body: ", req.body); // Debugging log

//     const { username, email, password } = req.body;

//     if (!username || !email || !password) {
//         res.status(400);
//         throw new Error("All fields are mandatory!");
//     }

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//         res.status(400);
//         throw new Error("User already registered!");
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     console.log("Hashed Password: ", hashedPassword);

//     const user = await User.create({
//         username,
//         email,
//         password: hashedPassword,
//     });

//     if (user) {
//         res.status(201).json({
//             _id: user.id,
//             username: user.username,
//             email: user.email,
//             message: "User registered successfully",
//         });
//     } else {
//         res.status(400);
//         throw new Error("Invalid user data");
//     }
// });

// // @desc Login user
// // @route POST /api/users/login
// // @access private
// // const loginUser = asyncHandler(async (req, res) => {
// //     const { email, password } = req.body;

// //     if (!email || !password) {
// //         res.status(400);
// //         throw new Error("All fields are mandatory!");
// //     }

// //     // Find user by email
// //     const user = await User.findOne({ email });

// //     // Validate password
// //     if (user && (await bcrypt.compare(password, user.password))) {
// //         res.status(200).json({
// //             _id: user._id,
// //             username: user.username,
// //             email: user.email,
// //             accessToken: generateToken(user._id), 
// //         });
// //     } else {
// //         res.status(401);
// //         throw new Error("Invalid credentials"); 
// //     }
// // });


// // const loginUser = asyncHandler(async (req, res) => {
// //     console.log("🔵 Login Request Body:", req.body); // Debugging log

// //     const { email, password } = req.body;
    
// //     if (!email || !password) {
// //         console.log("🔴 Missing email or password");
// //         res.status(400);
// //         throw new Error("All fields are mandatory!");
// //     }

// //     // Find user by email
// //     const user = await User.findOne({ email });
// //     console.log("🟢 Found User in DB:", user); // Debugging log

// //     if (!user) {
// //         console.log("🔴 User not found");
// //         res.status(401);
// //         throw new Error("Invalid credentials");
// //     }

// //     // Validate password
// //     const isPasswordValid = await bcrypt.compare(password, user.password);
// //     console.log("🟡 Password Validation:", isPasswordValid); // Debugging log

// //     if (user && isPasswordValid) {
// //         console.log("✅ Login Successful");
// //         res.status(200).json({
// //             _id: user._id,
// //             username: user.username,
// //             email: user.email,
// //             accessToken: generateToken(user._id),
// //         });
// //     } else {
// //         console.log("🔴 Invalid Password");
// //         res.status(401);
// //         throw new Error("Invalid credentials");
// //     }
// // });


// // const loginUser = asyncHandler(async (req, res) => {
// //     const { email, password } = req.body;

// //     console.log("🔵 Login Request Body:", req.body);

// //     if (!email || !password) {
// //         console.log("❌ Missing Fields!");
// //         return res.status(400).json({ error: "All fields are mandatory!" });
// //     }

// //     const user = await User.findOne({ email });

// //     if (user) {
// //         console.log("🟢 Found User in DB:", user);

// //         const isPasswordValid = await bcrypt.compare(password, user.password);
// //         console.log("🟡 Password Validation:", isPasswordValid);

// //         if (isPasswordValid) {
// //             console.log("✅ Login Successful");
            
// //             // Log before sending the response
// //             console.log("🚀 Sending Response Now...");
// //             return res.status(200).json({
// //                 _id: user._id,
// //                 username: user.username,
// //                 email: user.email,
// //                 accessToken: generateToken(user._id),
// //             });
// //         }
// //     }

// //     console.log("❌ Invalid Login Credentials");
// //     res.status(401).json({ error: "Invalid email or password" });
// // });


// // const loginUser = asyncHandler(async (req, res) => {
// //     const { email, password } = req.body;

// //     console.log("🔵 Login Request Body:", req.body);

// //     if (!email || !password) {
// //         console.log("❌ Missing Fields!");
// //         return res.status(400).json({ error: "All fields are mandatory!" });
// //     }

// //     const user = await User.findOne({ email });

// //     if (user) {
// //         console.log("🟢 Found User in DB:", user);

// //         const isPasswordValid = await bcrypt.compare(password, user.password);
// //         console.log("🟡 Password Validation:", isPasswordValid);

// //         if (isPasswordValid) {
// //             console.log("✅ Login Successful");
            
// //             // Log before sending the response
// //             console.log("🚀 Sending Response Now...");
// //             res.status(200).json({
// //                 _id: user._id,
// //                 username: user.username,
// //                 email: user.email,
// //                 accessToken: generateToken(user._id),
// //             });

// //             return; // Ensure no further execution
// //         }
// //     }

// //     console.log("❌ Invalid Login Credentials");
// //     res.status(401).json({ error: "Invalid email or password" });
// // });

// const loginUser = asyncHandler(async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         console.log("🔵 Login Request Body:", req.body);

//         if (!email || !password) {
//             console.log("❌ Missing Fields!");
//             return res.status(400).json({ error: "All fields are mandatory!" });
//         }

//         console.log("🔍 Searching for User...");
//         const user = await User.findOne({ email });

//         if (!user) {
//             console.log("❌ User Not Found");
//             return res.status(401).json({ error: "Invalid email or password" });
//         }

//         console.log("🟢 Found User in DB:", user);

//         console.log("🔍 Comparing Passwords...");
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         console.log("🟡 Password Validation:", isPasswordValid);

//         if (!isPasswordValid) {
//             console.log("❌ Invalid Password");
//             return res.status(401).json({ error: "Invalid email or password" });
//         }

//         console.log("✅ Login Successful");

//         // const accessToken = generateToken(user._id);
//         const accessToken = (user) => {
//             return jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' }); // <-- 1 day
//         };
          

//         console.log("🚀 Sending Response Now...");
//         return res.status(200).json({
//             _id: user._id,
//             username: user.username,
//             email: user.email,
//             accessToken: accessToken,
//         });

//     } catch (error) {
//         console.error("🔥 Internal Server Error:", error);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }
// });


// // @desc Get current user info
// // @route GET /api/users/current
// // @access private
// const currentUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user).select("-password"); // Exclude password
//     if (!user) {
//         res.status(404);
//         throw new Error("User not found");
//     }
//     res.json(user);
// });

// // @desc update user info
// // @route PUT /api/users/:id
// // @access private
// const updateUserData = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//         res.status(404);
//         throw new Error("User Not Found!");
//     }

//     console.log("User in DB:", user._id.toString()); // Debugging log
//     console.log("User from Token:", req.user._id.toString()); // Debugging log

//     // Ensure the authenticated user can update only their own data
//     if (user._id.toString() !== req.user._id.toString()) {
//         res.status(403);
//         throw new Error("Not authorized to update this user");
//     }

//     const updatedUser = await User.findByIdAndUpdate(
//         req.params.id,
//         { $set: req.body },
//         { new: true, runValidators: true }
//     );

//     if (!updatedUser) {
//         res.status(400);
//         throw new Error("Update failed");
//     }

//     res.status(200).json({
//         _id: updatedUser.id,
//         username: updatedUser.username,
//         email: updatedUser.email,
//         message: "User updated successfully",
//     });
// });


// // @desc  delete user info
// // @route DELETE /api/users/:id
// // @access public
// const deleteUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//         res.status(404);
//         throw new Error("User Not Found!");
//     }
//     await User.deleteOne({ _id: req.params.id });
//     res.status(200).json({ message: `User deleted successfully!` });
// });

// module.exports = { registerUser, loginUser, currentUser, updateUserData, deleteUser };


const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1d" });
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already registered!");
  }

//   const user = await User.create({ username, email, password });

    const user = new User({
        username,
        email,
        password, // plaintext for now, will get hashed via pre('save')
    });

    await user.save(); // This triggers pre('save') to hash password

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      message: "User registered successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// // Login User
// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     res.status(400);
//     throw new Error("All fields are mandatory!");
//   }

//   const user = await User.findOne({ email });

//   if (user && (await user.comparePassword(password))) {
//     res.status(200).json({
//       _id: user._id,
//       username: user.username,
//       email: user.email,
//       accessToken: generateToken(user._id),
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid credentials");
//   }
// });



const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ email });

  if (!user) {
    console.log("❌ No user found with email:", email);
    res.status(401);
    throw new Error("Invalid credentials (user not found)");
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    console.log("❌ Password did not match");
    res.status(401);
    throw new Error("Invalid credentials (wrong password)");
  }

  res.status(200).json({
    _id: user._id,
    username: user.username,
    email: user.email,
    accessToken: generateToken(user._id),
  });
});

// Get current logged-in user
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
