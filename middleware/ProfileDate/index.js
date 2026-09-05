const checkId = async (req,res,next) => {

    const { id } = req.params;
    const userId = Number(id);

    try{
        const  login  = await req.app.locals.services.start.readLogin();

        const checkLogin = login.find(el => el.id === userId);

        if(!checkLogin){
            return res.status(404).json({error : 'wrong Id!'});
        }
        
        next()

    }catch(error){
        console.log(error)
    }
}

module.exports = { checkId }