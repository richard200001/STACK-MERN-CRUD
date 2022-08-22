import express from 'express'
import postsRoutes from './routes/posts.routes.js'
const app = express();

app.use(postsRoutes);

app.listen(3000);
console.log('Server on port',3000)