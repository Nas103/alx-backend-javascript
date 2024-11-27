// full_server/server.js
import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 1245;

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

export default app;
