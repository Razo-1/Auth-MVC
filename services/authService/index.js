const { ConfigeService } = require("../confige");
const bcrypt = require('bcryptjs');

class AuthService extends ConfigeService {

    async newUser(body){
        body.id = Date.now();
        try{
            let hashPass = await bcrypt.hash(body.password,10);
            body.password = hashPass;
            await this.dataBase(body)
        }catch(error){
            console.log(error)
        }
    }

    async login(body){
        try{
            const users = await this.readDB();
            const findUser = users.find(el => el.email === body.email);
            findUser.isActive = true;
            await this.dataLogin(findUser);
            await this.updateDateBase(users);
        }catch(error){
            console.log(error);
        }
    }
}


module.exports.AuthService = AuthService;