
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^توجي$/i.test(m.text)) { 
     responses = [ 
 '*ماذا ي احمق🗿*'  
     ];
        }else if (/^سلام عليكم$/i.test(m.text)) { 
     responses = [ 
       '*وعليكم السلام*',  
     ];
        }else if (/^هلا$/i.test(m.text)) { 
     responses = [ 
       '*هلا*',  
     ];
        }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
       '*شلحها🐦*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى النقطه*',  
     ];
    }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*شــوفــلــك كــلـــبــه*',  
     ];


        }else if (/^.مطور$/i.test(m.text)) { 
     responses = [ 
       '*حط ال*',  
     ];
       
    }else if (/^بحبك$/i.test(m.text)) { 
     responses = [ 
       '*حبك برص احول🦎*',  
     ];
        }else if (/^بنتي$/i.test(m.text)) { 
     responses = [ 
       '*انا بنت اكيرا*',  
     ];
        }else if (/^منور$/i.test(m.text)) { 
     responses = [ 
       '*بــــنــــوري*',  
     ];
        
          }else if (/^.مهام$/i.test(m.text)) { 
     responses = [ 
       '.المهام',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
