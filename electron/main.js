require('dotenv').config()
const { app, BrowserWindow } = require('electron')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV

function createWindow() {
  let win = new BrowserWindow({
    width: 800, height: 600, webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  win.loadURL(`http://127.0.0.1:${process.env.PROT}/`)

  if (NODE_ENV === 'development') {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(() => {
  createWindow()
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
