import express from 'express';

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express in Turborepo!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
