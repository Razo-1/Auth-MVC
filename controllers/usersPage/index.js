class UserPage {
    async renderUsers(req,res,next){
        const path = req.app.locals.services.users.createPath('users');
        const users = await req.app.locals.services.users.readDB();
        const myResource = await req.app.locals.services.users.myResource(req.params);
        res.render(path,{users,date : myResource})
    }
}

module.exports.userProfile = new UserPage();