class AuthMe {

    renderAuthPage(req,res,next){
        const { start } = req.params
        const file = req.app.locals.services.start.createPath(start);
        res.render(file);
    }

    newUser(req,res,next){
        req.app.locals.services.start.newUser(req.body);
        res.status(201).json({msg : 'new user have been added!', ok : true})
    }

    async loginUser(req,res,next){
        const user = await req.app.locals.services.start.login(req.body);
        res.status(200).json({msg : 'The user has successfully logged in.  ', ok : true,id : user})
    }

    logoutProfile(req,res,next){
        const { id } = req.params;
        req.app.locals.services.start.logoutProfile(id);
        res.status(200).json({msg : 'you have been logged out of the system', ok : true})
    }

    newUserPassword(req,res,next){
        req.app.locals.services.start.newPass(req.body);
        res.status(200).json({msg : 'The password has been changed.', ok : true})
    }
}

module.exports.authProfile = new AuthMe();