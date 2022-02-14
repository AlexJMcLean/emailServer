import express from "express";

import contactRoutes from "./routes/contact.js";

const app = express();
const route = express.Router();
const PORT = process.env.PORT || 5000;

app.use("/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Contact form API");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
