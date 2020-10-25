// import is not used in electron rather require is used
// import is ES6 statement and node is not yet ES6 

// electron lifecycle
// electron starts --> app process is  created --> app ready events --> app closes down
// BrowserWindow: will start new Browser Window in electron
const { app, BrowserWindow } = electron; 

    // we can also load website such as follows
    // mainWindow.loadURL('https://www.google.com/');

// any framework such as react, angular, vue can be inside this to product html,
//  but for this section, plane html is being used

// webpage can only read file which only user purposefully feeds
// with Electron, we can read any file on OS without asking user