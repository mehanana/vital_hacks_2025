import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the backend API!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 