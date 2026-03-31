import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Code H Server is running' });
});

// Auth Routes (placeholder)
app.post('/api/auth/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

app.post('/api/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

// Patients Routes (placeholder)
app.get('/api/patients/:id', (req, res) => {
  res.json({ message: 'Get patient data' });
});

// Doctors Routes (placeholder)
app.get('/api/providers/search', (req, res) => {
  res.json({ message: 'Search providers' });
});

// Admin Routes (placeholder)
app.get('/api/admin/dashboard', (req, res) => {
  res.json({ 
    message: 'Admin dashboard data',
    stats: {
      totalPatients: 125432,
      totalDevices: 8921,
      activeProviders: 3421
    }
  });
});

// Chatbot Routes (placeholder)
app.post('/api/chatbot/diagnose', (req, res) => {
  res.json({ message: 'Diagnostic suggestion' });
});

// Health Points Routes (placeholder)
app.get('/api/points/balance', (req, res) => {
  res.json({ balance: 2450 });
});

// Error handling
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Code H Server running on port ${PORT}`);
  console.log(`📍 API: http://localhost:${PORT}/api`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
});

export default app;
