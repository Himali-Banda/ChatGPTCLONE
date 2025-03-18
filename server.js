// //const app = require('./app')
// const express = require('express');
// const bodyParser = require('body-parser');
// const openaiRoutes = require('./routes/openaiRoutes'); // Adjust the path as necessary

// const app = express();
// app.use(bodyParser.json());

// // Use the routes
// app.use('/api', openaiRoutes);

// // Start the server
// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });

// //const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// //const bodyParser = require("body-parser");
// const colors = require("colors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const errorHandler = require("./middelwares/errorMiddleware");

// //routes path
// const authRoutes = require("./routes/authRoutes");

// //dotenv
// dotenv.config();

// //mongo connection
// connectDB();

// //rest object
// //const app = express();

// //middlewares
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("dev"));
// app.use(errorHandler);

// //const PORT = process.env.PORT || 8080;

// //API routes
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/openai", require("./routes/openaiRoutes"));

// //listen server
// app.listen(PORT, () => {
//   console.log(
//     `Server Running in ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan
//       .white
//   );
// });

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Adjust as necessary
const errorHandler = require('./middelwares/errorMiddleware'); // Adjust as necessary


//const authRoutes = require('./routes/authRoutes');
//app.use('/api/auth', authRoutes);

// Import routes
//const authRoutes = require('./routes/authRoutes');
const openaiRoutes = require('./routes/openaiRoutes'); // Ensure this path is correct


//const express = require('express'); // Import Express
const authRoutes = require('./routes/authRoutes'); // Adjust the path as necessary

const app = express(); // Initialize Express app
const port = 3000; // Set the port

app.use(express.json()); // Middleware to parse JSON

// Use the authRoutes AFTER initializing app
app.use('/api/auth', authRoutes); // This line should come after `const app = express();`

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`); // Start the server
// });



dotenv.config();
connectDB();

//const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(errorHandler);



// Use routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/openai', openaiRoutes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`);
});
