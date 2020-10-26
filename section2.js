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

// Our Project: user uploads a video, application to find length of video and show to user using 
//  local application ffmpeg
// ffmpeg is installed manually along npm package fluent-ffmpeg
// our flow is: get file path from electron app, give it ot ffmpeg which is installed in local os, 
//  get video length and show back to user in electron app

// question for us is: should we get video length from web compoonent (index.html) or from electron app (index.js)
//  convention in  this course: we will  doing as much as possible in electron app 
//      web app: only web related stuff
//      this also helps from the prospective that this web component code can now be used in actual web app as  well
//  this required communication between index.html and index.js

// IPC (Inter Process Communication): this helps with communication between index.html and index.js
