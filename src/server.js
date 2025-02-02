const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/error.middleware");
const numberRoutes = require("./routes/number.route");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", numberRoutes);
app.use("*", (req, res) =>
  res.json({
    message: "Welcome to the Number Classifier API",
    route: "`GET /api/classify-number?number=<integer>`",
  })
);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
