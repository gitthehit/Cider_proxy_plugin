const { app } = require('electron');
app.commandLine.appendSwitch('proxy-server', 'socks5://127.0.0.1:10808');\\you can change ip:port to your own proxy address
\\app.commandLine.appendSwitch('proxy-bypass-list', '<local>;*.baidu.com');
class netproxy {
    name = 'net proxy setting';
    description = 'set Cider use given proxy address'
    version = '1.0.0';
    author = 'BY';
  
    env
    win
  
    constructor(env) {
        this.env = env
        \\this.debug('Loading Complete')
    }
  
    async onReady(win) {
        this.win = win
        \\this.debug('Ready')
    }
  
    onBeforeQuit() {
        \\this.debug('Stopped')
    }
  
    onPlaybackStateDidChange(attributes) {
      
    }
    
    onNowPlayingItemDidChange(attributes) {
      
    }
    
    debug(text) {
        console.log(`[Plugin][${this.name}]`, text)
    }
}

module.exports = netproxy;
