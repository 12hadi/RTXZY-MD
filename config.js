global.owner = ['6282288275146']  
global.mods = ['6282288275146'] 
global.prems = ['6282288275146']
global.nameowner = 'Putra'
global.numberowner = '6282288275146' 
global.mail = 'gmail.com' 
global.gc = 'https://chat.whatsapp.com/'
global.instagram = 'https://instagram.com/'
global.wm = '© Putra'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Bot WhatsApp'

//INI WAJIB DI ISI!//
global.btc = 'ZuPr3Trv' 
//Daftar terlebih dahulu https://api.botcahx.live

global.lann = 'YpSun4Uv'
//Daftar terlebih dahulu https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'ZuPr3Trv' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
