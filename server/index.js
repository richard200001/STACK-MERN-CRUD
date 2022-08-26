import { connectDB } from "./db.js"
import { PORT } from './config.js';
import app from './app.js'

connectDB();
/**
 * aquí colocamos en escucha nuestro puerto del servidor
 */
app.listen(PORT);
console.log('Server on port',PORT)