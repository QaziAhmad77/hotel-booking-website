// server.js
import cookieParser from 'cookie-parser';
import { dotenv, routes, connectDB, app, port, express } from './imports.js';
app.use(cookieParser());
app.use(express.json());
//middlewares
app.use('/api', routes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
