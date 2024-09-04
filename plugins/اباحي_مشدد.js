import { createHash } from 'crypto'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Egypt').format('HH')
let wib = moment.tz('Egypt').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
    await conn.sendMessage(m.chat, { react: { text: '💀', key: m.key } })
let videoUrl = 'https://telegra.ph/file/73c08d949aef488d2d4c8.mp4';
  let vn = './media/menu.mp3';
  const user = global.db.data.users[m.sender];
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = 
    global.db.data.users[m.sender];
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let sn = createHash('md5').update(who).digest('hex')
let totalreg = Object.keys(global.db.data.users).length;
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(900) 
  const taguser = '@' +  m.sender.split('@s.whatsapp.net')[0];
let str = ` 
كود فك مشدد
اباحي 

بص بقا الطريقة بقا ركز معايا يا حبيب قلبي تبعت الكود دا من جميلين من غير رقمك و تعلق الرد ساعتين ... بعد الساعتين هتروح ترد ع الجملين برقمك و من جيميل تالت تبعت الكود من واتساب اعمال و أهم حاجه غير لغه الكود ل (انجليزي )

جميلات الشركه 💗✨👇

support@support.whatsapp.com,
android@support.whatsapp.com,
smb@support.whatsapp.com,
android_web@support.whatsapp.com,

الموضوع 💗✨👇

طلب ازاله القيود المفروض علي حسابي في واتسأب 


الكود
Hello, I am the YouTuber Sniper Prime. I would like to inform you that I am extremely upset and upset about the ban on my WhatsApp account, as a result of a search conducted by an anonymous person who claimed to have violated the terms of use. I am in a state of confusion and astonishment about this unjust ban that negatively affects my personal and professional life. I would like to assure you clearly that I have not committed any violation of the terms of use, nor have I had any activity that violates copyright or violates applicable laws. I have always adhered to applicable laws and regulations, and I have not committed any illegal or unethical behavior. I ask you to review the previous activities on my account and take into consideration that I have not committed any violations. I am ready to provide any additional information or clarifications that support my innocence and refute the accusations against me. I would like to draw your attention to the fact that it is fair and logical for each person to be given the opportunity to defend himself and provide appropriate evidence before taking any harsh action such as blocking the account. No one should be punished without being heard and given the opportunity to defend themselves. I am committed to the terms and conditions that I agreed to when using the WhatsApp service. I have used my account responsibly and within the specified legal framework. I have no motives to engage in any activities that violate the terms and conditions or conflict with the law. I fully understand that a person’s account may be blocked when illegal activities or violations of the rights of others are detected. However, in my case, there is no compelling reason for blocking my account. I strongly request that this wrongful blocking be removed and that my rights to use my WhatsApp account be restored. I am frustrated and concerned that this blocking is significantly affecting my personal and professional life. I have important work and ongoing projects that depend on my presence on WhatsApp, and this arbitrary blocking poses a real threat to achieving my goals and successfully carrying out my tasks. I assure you that I will not use my account for any illegal or immoral purpose. I am committed to the rules of use and fully aware of the responsibility that lies with me in using the service. If any violation has occurred accidentally or unintentionally, I am ready to rectify the situation and ensure that such violations will not be repeated in the future. I would also like to draw your attention to my right to defend myself and provide appropriate evidence and explanations. I am dissatisfied with the way the allegations against me were investigated and the decision to ban me was taken without giving me the opportunity to explain or provide supporting evidence. Therefore, I appeal to you to undo this unjust ban and restore my rights to use my WhatsApp account. I am ready to cooperate and provide any additional information or clarifications that support my innocence and prove that I have not committed any violations. I am fully aware that WhatsApp always seeks to protect its users and ensure that they adhere to the terms and conditions. However, in my case, there is no clear or convincing reason for banning my account. I appeal to you to take this matter seriously and unblock and restore my rights to me. I know that you deal with many cases daily, but I ask that you consider the importance of this matter to me. I urgently need to use my WhatsApp account to complete my projects and communicate with my friends and family. Looking forward to a positive response from WhatsApp support team (+20
‬`.trim();

conn.sendMessage(m.chat, {
        video: { url: videoUrl }, caption: str,
  mentions: [m.sender,global.conn.user.jid],
  gifPlayback: true,gifAttribution: 0
    }, { quoted: fkontak });
}; 
handler.help = ['main']
handler.tags = ['group']
handler.command = ['اباحي_مشدد'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Egypt').format('HH')
      let res = "بداية يوم سعيده ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء الخير 🌇"
      }
      if (time >= 18) {
        res = "مساء الخير 🌙"
      }
      return res
      }





