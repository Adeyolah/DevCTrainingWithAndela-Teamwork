import express from 'express';

const app = express();

app.use((req, res) => {
  res.json({ message: 'Welcome to Teamwork!' });
});

export default app;
