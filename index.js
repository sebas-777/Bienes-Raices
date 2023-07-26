import  express  from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import db from './config/db.js'

// crear la app 
const app = express() 

// conexion a la base de datos 
try {
    await db.authenticate();
    console.log('Conexion a la base de datos exitosa')
} catch (error) {
    console.log(error)
}

//Habilitar Pug
app.set('view engine','pug')
app.set('views','./views') 

// Carpeta Publica 
app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes)

// Definir un puerto y arrancar el proyecto
const port = 3001;
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
});