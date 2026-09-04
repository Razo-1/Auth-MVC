class UserPage {
    async renderUsers(req,res,next){
        const path = req.app.locals.service.start.createPath('users');
        const users = await req.app.locals.service.start.readDB();
        res.render(path,{users})
    }
}

module.exports.userProfile = new UserPage();