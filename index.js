const electron = require('electron');


// electron starts --> app process is  created --> app ready events --> app closes down
// 
const { app } = electron; 

app.on( 'ready',() => {
    // do something
    console.log('app is now ready');
});
