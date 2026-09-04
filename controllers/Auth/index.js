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

    loginUser(req,res,next){
        req.app.locals.services.start.login(req.body);
        res.status(200).json({msg : 'The user has successfully logged in.  ', ok : true})
    }

}

module.exports.authProfile = new AuthMe();