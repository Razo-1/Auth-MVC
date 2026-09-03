class AuthMe {

    renderAuthPage(req,res,next){
        const { start } = req.params
        const file = req.app.locals.services.start.createPath(start);
        res.render(file);
    }
}

module.exports.authProfile = new AuthMe();