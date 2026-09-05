const { ConfigeService } = require("../confige");

class UserService extends ConfigeService {
    async myResource({ id }){
        const userId = Number(id);
        try{
            const login = await this.readLogin();

            const findDate = login.find(el => el.id === userId);
            
            return findDate
        }catch(error){
            console.log(error)
        }
    }
}

module.exports.UserService = UserService