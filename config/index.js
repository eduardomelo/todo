var configValues = require('./config');

module.exports = {
    
    
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + 
        ':' + configValues.pwd + 
        '@ds021969.mlab.com:21969/nodetodosample';
    }
    
    
    //seguindo o padrão URL, USER, PWD
    /*getDbConnectionString: function () {
        return [
            "127.9.39.131:27017/servidor", 
            configValues.uname, 
            configValues.pwd
        ];
    }
    */
}