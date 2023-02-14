const { app } = require('electron')
app.commandLine.appendSwitch('proxy-server', '127.0.0.1:10808')
