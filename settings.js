const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'your apikey',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
//global.autorecording = true //status auto merekam ( auto record )
//global.autoketik = false //status auto mengetik (auto typing)
//global.available = false //status online (online)

// Other
global.botname = "Sakura-Mdོ" //namabot kalian
global.ownername= "Sakura-Chan" //nama kalian
global.myweb ="https://instagram.com/itzme_nitsu" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UC7jyjV6kcG6qTV_VcJtJzzA" //bebas asal jan hapus
global.github = "https/github.com/JakaV3/" //bebas
global.email = "jkasmprn@gmail.com" //bebas
global.region = "Japanese" //bebas
global.ownernomer = "6285785694474" // nomor wa kalian
global.ownernomerr = "+6285785694474" //nmr wa kalian
global.thumbnail = "./image/lolh.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasip.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6285785694474","6285785694474","081335334848"] //ganti agar fitur owner bisa di gunakan
global.packname = '© Sakura-Mdོ' //sticker wm ubah
global.author = 'Di Buat Oleh Sakura-Chan' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Sudah Selesai Darling~',
    admin: 'Kamu bukan admin, maaf !',
    botAdmin: 'Tch Jadiin Admin Dulu Lah !',
    owner: 'Command Khusus Untuk Owner Tersayang !',
    group: 'Command Ini Hanya Bisa Di Grup !',
    private: 'Command Ini Hanya Bisa Di Private Chat !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Chottomatte, Darling',
	lockCmd: 'Tch Ama OwnerKu Ngak Di Aktifkan fitur nya:( !',
	example1: 'Hai, Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
