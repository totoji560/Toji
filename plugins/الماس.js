const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^شراء/i, '');
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
*❐『 شـــراء الـــمـــ💎ـاس 』*
*⏎┇ الالـــمـــاس : + ${count}💎* 
*⏎┇ الـــــدفـــــع :  ${xpperlimit * count} XP*
└──────────────`, m);
  } else conn.reply(m.chat, `[❣️]~ اسف معكش خبرة عشان تشتري ${count} ماس 💎`, m);
};
handler.help = ['A K I R A'];
handler.tags = ['A K I R A'];
handler.command = ['شراء', 'شراءالكل'];

handler.disabled = false;

export default handler;



