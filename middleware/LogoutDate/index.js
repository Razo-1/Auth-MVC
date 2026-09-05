const verifid = async (req,res,next) => {
    const { id } = req.params;
    const userId = Number(id);
    try{
        const  login  = await req.app.locals.services.start.readDB();

        const checkOnline = login.find(el => el.id === userId);

        if(!checkOnline){
            return res.status(400).json({error : 'wrong data'});
        }

        next();
    }catch(err){
        console.log(err);
    }

};

const logoutVerif = [ verifid ];


module.exports = { logoutVerif }