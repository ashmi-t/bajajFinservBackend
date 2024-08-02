import express from 'express';
import cors from 'cors';
import bfhlRoutes from './router/routes';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

// Use the routes
app.use('/bfhl', bfhlRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;