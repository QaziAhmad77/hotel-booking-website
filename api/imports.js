import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import connectDB from './connectDB/connectDB.js';
const app = express();
const port = 4000;
dotenv.config();

export { express, dotenv, routes, connectDB, app, port };
