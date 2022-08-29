/**
 * @module server
 */
import dotenv from "dotenv"

dotenv.config()
/**
 * Esta es la dirección URL de nuestra base de datos
 * @type {string}
 */
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/testdb"
/**
 * Este es el número de puerto de nuestro servidor
 * @type {Number | string}
 */
export const PORT = process.env.PORT || 3000