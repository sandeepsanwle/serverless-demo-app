import serverless from 'serverless-http';
import express, { urlencoded, json } from 'express';
const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/', (req, res) => {
  res.send({ message: "Hello express app" });
});

app.post('/hey', (req, res) => {
  let message = req.body.message;
  res.send({ message: message });
});

app.post('/sayhello', (req, res) => {
  let message = req.body.message;
  res.send({ message: message });
});

export const handler = serverless(app);