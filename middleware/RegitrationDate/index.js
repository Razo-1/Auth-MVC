const { authSchema } = require("../../Schema");

const data_verification = async (req,res,next) => {
    try{
        await authSchema.validateAsync(req.body);
        next();
    }catch(err){
        res.status(400).json({err});
    }
};

const email_verification = async (req,res,next) => {
    const { email } = req.body;
    try{
        const  users  = await req.app.locals.services.start.readDB();

        const checkEmail = users.find(el => el.email === email);

        if(checkEmail){
            return res.status(409).json({error : 'The email is already registered'});
        }
        next();
    }catch(err){
        res.status(500).json({err})
    }
    
}

const verification = [ data_verification,email_verification];

module.exports = { verification }