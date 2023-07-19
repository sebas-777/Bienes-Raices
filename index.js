import  express  from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

// crear la app 
const app = express()

//Routing
app.use('/', usuarioRoutes)

// definir un puerto y arrancar el proyecto
const port = 3001;
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
});