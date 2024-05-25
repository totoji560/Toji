const rewards = {
    exp: 200000,
    money: 50000,
    potion: 20,
    mythic: 5,
    legendary: 3,
}

const cooldown = 2592000000
let handler = async (m) => {
    let user = global.db.data.users[m.sender]
    if (Date.now() - user.lastmonthly < cooldown) throw `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - Date.now()).toTimeString()}*`
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    //conn.sendButton(m.chat,'*––––––『 MONTHLY 』––––––*', text.trim(), null, [['Inventory', '.inv'], ['Menu', '.menu']],m)
    m.reply(`
    *______『 MONTHLY 』______*
    
    ▢ *Has received:*
     ${text}`)
    user.lastmonthly = Date.now()
}
handler.help = ['monthly']
handler.tags = ['rpg']
handler.command = /^(شهري)$/i

handler.cooldown = cooldown

export default handler
