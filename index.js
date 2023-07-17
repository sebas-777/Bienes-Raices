const express =  require('express')

// crear la app 
const app = express()

// Routing 
app.get('/', function(req,res){
    res.send('Hola Mundo en Express')
});

// definir un puerto y arrancar el proyecto
const port = 3001;
app.listen(port, () => {
    console.log(`el servidor esta funcionando en el puerto ${port}`)
});