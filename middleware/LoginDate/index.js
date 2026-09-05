const { loginSchema } = require('../../Schema');
const bcrypt = require('bcryptjs');

const login_Verification = async (req,res,next) => {
    try{
        await loginSchema.validateAsync(req.body);
        next();
    }catch(err){
        res.status(500).json({err});
    }
}
const checkUserExists = async (req,res,next) => {
    const { email } = req.body;
    try{
        const  users  = await req.app.locals.services.start.readDB();
        const checkUser = users.find(el => el.email === email);

        if(!checkUser){
            return res.status(404).json({error : 'email not found'});
        }

        next();
    }catch(err){
        res.status(500).json({err});
    }

}

const verifyCredentials = async (req,res,next) => {
    try{
        const  users  = await req.app.locals.services.start.readDB();

        const { email,password } = req.body;

        const checkData = users.find(el => el.email === email);
        
        if(!checkData){
            return res.status(400).json({error : 'incorrect data'});
        }

        const hashPass = bcrypt.compare(password,checkData.password);

        if(!hashPass){
            return res.status(400).json({error : 'incorrect data'});
        }
        next();
    }catch(err){
        res.status(500).json({err});
    }
    
}

const userIsOnline = async (req,res,next) => {

    try{
        const  login  = await req.app.locals.services.start.readLogin();

        const { email } = req.body;

        const checkOnline = login.find(el => el.email === email);

        if(checkOnline){
            return res.status(409).json({error : 'user is online'});
        }
        next();
    }catch(err){
        res.status(500).json({err});
    }
   
}

const loginVerification = [ login_Verification,checkUserExists,verifyCredentials,userIsOnline ];


module.exports = { loginVerification };