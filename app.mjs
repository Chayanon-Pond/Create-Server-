import express from 'express';

const app = express();
const PORT = 4000;

app.get("/profiles", (req, res) => {
  res.json({
    data: {
      name: "john",
      age: 20
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});