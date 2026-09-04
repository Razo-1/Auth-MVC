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
            return findUser.id
        }catch(error){
            console.log(error);
        }
    }

    async logoutProfile(id){
        try{
            const userId = Number(id);
            const users = await this.readDB();
            const login = await this.readLogin();
            
            const findUser = users.find(el => el.id === userId);
            findUser.isActive = false;

            const findLoginUser = login.filter(el => el.id !== userId);

            await this.updateDateBase(users);
            await this.updateLoginBase(findLoginUser);
        }catch(error){
            console.log(error);
        }
    }

    async newPass(body){
        try{
            const users = await this.readDB();

            const findUser = users.find(el => el.email === body.email);

            const hashPass = await bcrypt.hash(body.newPassword,10);

            findUser.password = hashPass;

            await this.updateDateBase(users);

        }catch(error){
            console.log(error);
        }
    }
}


module.exports.AuthService = AuthService;