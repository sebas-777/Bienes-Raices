

const formularioLogin = (req,res) =>{
    res.render('auth/login',{
        page:'Sing in'
    })
} 

const formularioRegistro = (req,res) =>{
    res.render('auth/register',{ 
        page:'Create account'
        
    })
} 

const formularioOlvidePassword = (req,res) =>{
    res.render('auth/forgot-password',{ 
        page:'Forgot your password'
        
    })
} 

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
    
}