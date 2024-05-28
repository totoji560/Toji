const xpperlimit = 200000;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^مثك/i, '');
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
*❐『 شـــراء الــــمــــــ🎃ــثــــك 』*
*⏎┇ الــــمـــثــك : + ${count}🎃* 
*⏎┇ الـــــدفـــــع :  ${xpperlimit * count} XP*
└──────────────`, m);
  } else conn.reply(m.chat, `[🎃]~ اسف لا تملك ما يكفي لشراء ${count}مثك`, m);
};
handler.help = ['A K I R A'];
handler.tags = ['A K I R A'];
handler.command = ['مثك', 'ميثك'];

handler.disabled = false;

export default handler;



