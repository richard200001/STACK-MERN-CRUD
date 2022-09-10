/**
 * Regresa al tutorial {@tutorial first-tutorial}
 * @module server/index
 */
/**
 * @example 
 * connectDB();
app.listen(PORT);
 */

import { connectDB } from "./db.js"
import { PORT } from './config.js';
import app from './app.js'
/**
 * Aquí se inician los componentes
 */
connectDB();
app.listen(PORT);
console.log('Server on port',PORT)