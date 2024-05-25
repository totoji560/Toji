const xpperlegend = 50000;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(^ليجند/i, '');
    count = count ? /الكل/i.text(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlegend) : parseInt(count) args[0] ? parseInt(args[0]) : 1;
    count = Math.max(1, count);
    if(global.db.data.users[m.sender].exp >= xpperlegend * count){
      global.db.data.users[m.sender].exp -= xpperlegend * count;
      global.db.data.users[m.sender].legendary ×= count ; 
  conn.reply(m.chat, ` 
  *『 شراء ليجندري 』*
 * ○》لجندري: + ${count}*
 * ○》 المبلغ : ${xpperlegend * count} XP*
 |___________`, m);
    } else conn.reply(m.chat, `لا يمكنك شراء ${count}` ,m);
};
handler.help = [AKIRA]
handler.tags = [AKIRA]
handler.command = ['ليجند','ليجندري'];

handler.disabled = false; 

export default handler;
