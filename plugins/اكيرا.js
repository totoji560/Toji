const dir = [
'https://telegra.ph/file/98f7cfe9221647829ef27.mp4',  
'https://telegra.ph/file/b0dd4a9451d0b11b1ba6c.mp4',
'https://telegra.ph/file/5303bf394c633dd20a1e4.mp4',
'https://telegra.ph/file/8862b8ec757855d488239.mp4',
'https://telegra.ph/file/2171fb90c3adf0c68985e.mp4',
'https://telegra.ph/file/d12bcca74bc4708e02496.mp4',
'https://telegra.ph/file/862846942302a1abb2fdf.mp4',
'https://telegra.ph/file/1273a33228ed91be54cef.mp4',
'https://telegra.ph/file/a136726cb0fb17cc133e6.mp4',
'https://telegra.ph/file/37fdbc7aebc6d8302e3ac.mp4',
'https://telegra.ph/file/04a5403b45595e898ebb5.mp4',
'https://telegra.ph/file/1b03d087a5786d24148c0.mp4',
'https://telegra.ph/file/d91476ee99754dc712956.mp4',
'https://telegra.ph/file/1b4d9bb6f0294e628bf39.mp4',
'https://telegra.ph/file/25ad5fc1473b69ebc33dc.mp4',
'https://telegra.ph/file/3abda7e3d5090792048c9.mp4',
'https://telegra.ph/file/7b0f12df9ae5dfe29b210.mp4',
'https://telegra.ph/file/04cf88fc002f45d4a94eb.mp4',
'https://telegra.ph/file/cf0afa21c53e996aea9fe.mp4',
'https://telegra.ph/file/a200d2f3331f3d897cea8.mp4',
'https://telegra.ph/file/d8bd516227954442af4b8.mp4',
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dado.webp', '', m)
}
handler.help = ['dado']
handler.tags = ['game']
handler.command = ['zom100', 'اكيرا'] 

export default handler
