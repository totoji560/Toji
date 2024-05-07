
let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^ميتسوري$/i.test(m.text)) { 
     responses = [ 
 '*هــا؟!*'  
     ];
    
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى النقطه*',  
     ];

        }else if (/^استماره$/i.test(m.text)) { 
     responses = [ 
       '*اكتب.استماره*',  
     ];
    }else if (/^استمارة$/i.test(m.text)) { 
     responses = [ 
       '*اكتب.استماره*',  
     ];
    }else if (/^.استمارة$/i.test(m.text)) { 
     responses = [ 
       '*اكتب.استماره وليس .استمارة*',  
     ];
        }else if (/^.مطور$/i.test(m.text)) { 
     responses = [ 
       '*حط ال*',  
     ];
       
    
      
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
