'use scrict';

const electron = require('electron');
const path = require('path');
const Ffmpeg = require('fluent-ffmpeg');

const { app, BrowserWindow, ipcMain } = electron;

require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
// If development environment
if (env === 'development') {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
    hardResetMethod: 'exit',
  });
}

// electron starts --> app process is  created --> app ready events --> app closes down
// BrowserWindow: will start new Browser Window in electron
let mainWindow;

app.on('ready', () => {
  // do something
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  console.log('App is now ready');
  // we can also load website such as follows
  // mainWindow.loadURL('https://www.google.com/');
  // mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.loadFile('index.html');

  // let's recieved message from main window in IPC
  ipcMain.on('video:submit', (event, path) => {
    Ffmpeg.ffprobe(path, (err, metadata) => {
      console.log(metadata);
      mainWindow.webContents.send('video:metadata', metadata.format.duration);
    });
  });
});
