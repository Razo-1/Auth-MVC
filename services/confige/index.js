const fs = require('fs').promises;
const path = require('path');

class ConfigeService {
    createPath(fileName){
        return path.join(__dirname,'..','..','views',`${fileName}.ejs`);   
    }

    async readDB(){
        try{
            const users = JSON.parse(await fs.readFile(path.join(__dirname,'..','..','DB','users.json'),'utf-8'))
            return users
        }catch(error){
            console.log(error)
        }
    }

    async readLogin(){
        try{
            const login = JSON.parse(await fs.readFile(path.join(__dirname,'..','..','DB','login.json'),'utf-8'))
            return login
        }catch(error){
            console.log(error)
        }
    }

    async dataBase(newUsers){
        try{
            const users = await this.readDB();
            users.push(newUsers)
            return await fs.writeFile(path.join(__dirname,'..','..','DB','users.json'),JSON.stringify(users,null,2),'utf-8')
        }catch(error){
            console.log(error)
        }
    }

    async dataLogin(newLogin){
        try{
            const login = await this.readLogin();
            login.push(newLogin)
            return await fs.writeFile(path.join(__dirname,'..','..','DB','login.json'),JSON.stringify(login,null,2),'utf-8')
        }catch(error){
            console.log(error)
        }
    }

    async updateDateBase(users){
        try{
            await fs.writeFile(path.join(__dirname,'..','..','DB','users.json'),JSON.stringify(users,null,2),'utf-8')
        }catch(error){
            console.log(error)
        }
    }

    async updateLoginBase(users){
        try{
            await fs.writeFile(path.join(__dirname,'..','..','DB','login.json'),JSON.stringify(users,null,2),'utf-8')
        }catch(error){
            console.log(error)
        }
    }
}

module.exports.ConfigeService = ConfigeService;