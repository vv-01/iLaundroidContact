const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/api/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  // Call the sendMail function here
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
