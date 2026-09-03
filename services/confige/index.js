const path = require('path');

class ConfigeService {
    createPath(fileName){
        return path.join(__dirname,'..','..','views',`${fileName}.ejs`);   
    }
}

module.exports.ConfigeService = ConfigeService;