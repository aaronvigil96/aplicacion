import 'dotenv/config';
import express from 'express';
import usersRoutes from './routes/usersRoutes.js';

const app = express();

app.use(express.json());

app.use("/api", usersRoutes);

console.log(`Server running in port: ${process.env.PORT}`);
app.listen(process.env.PORT);
