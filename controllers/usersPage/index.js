class UserPage {
    async renderUsers(req,res,next){
        const path = req.app.locals.services.users.createPath('users');
        const users = await req.app.locals.services.users.readDB();
        res.render(path,{users})
    }
}

module.exports.userProfile = new UserPage();