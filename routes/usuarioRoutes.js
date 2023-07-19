import express from "express";


const router = express.Router();

// Routing 
router.get('/',(req,res) =>{
    res.json({msg:'Hola Mundo en Express'})
});


export default router