// sequelize config  

var sequelize = new sequelize('database', 'user', 'pass', {   
    host: '127.0.0.1',   
    dialect: 'mysql',   
    port: 3306,    
    pool: {     
      max: 10,     
      min: 0,     
      idle: 20000   
    } 
  });
  
  // tunnel config 
    
  var config = {       
    username:'user',
    host:'sshhost',
    port:22,
    dstHost:'127.0.0.1',
    dstPort:3306,
    srcHost:'127.0.0.1',
    srcPort:3306,
    localHost:'127.0.0.1',
    localPort: 3306,
    privatekey: require('fs').readfilesync('/Files/key')   
  };  
    
  var tunnel = require('tunnel-ssh');  
  // initiate tunnel 
  
  tunnel(config, function (error, server) {   
    //....   
    if(error) {     
      console.error(error);   
    } else {     
      console.log('server:', server);    
      // test sequelize connection     
      sequelize.authenticate().then(function(err) {
        console.log('connection established');         
      }).catch(function(err) {             
        console.error('unable establish connection', err);         
      })   
    } 
  }) 