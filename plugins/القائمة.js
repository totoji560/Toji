let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: '*🎗️قـائـمـة الـاوامــر🎗️*'
            },
            body: {
              text: '🧿افتح المهام بواسطة الزر'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'المهام',
                    sections: [
                      {
                        title: 'List',
                        highlight_label: 'ON',
                        rows: [
                          {
                            header: 'الترفيــ🌸هه',
                            title: '.قسم_الترفيه',
                            description: '*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*•┃❖اهلا بك في قسم الترفيــ🌸هه*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.الـمــطـور 】➥*
*⏎┇🌸⃝•┇【.تــــــــوب 】➥*
*⏎┇🌸⃝•┇【.الشخصيه】➥*
*⏎┇🌸⃝•┇【.لــــــــــــو 】➥*
*⏎┇🌸⃝•┇【.ذكـــــــــاء】➥*
*⏎┇🌸⃝•┇【.غــــبــــاء 】➥*
*⏎┇🌸⃝•┇【.حــكــمــه 】➥*
*⏎┇🌸⃝•┇【.جــمــيــل 】➥*
*⏎┇🌸⃝•┇【.طــــــلاق 】➥*
*⏎┇🌸⃝•┇【.تــطقـيـم 】➥*
*⏎┇🌸⃝•┇【.طــقــــم2】➥*
*⏎┇🌸⃝•┇【.طــقــمـي 】➥*
*⏎┇🌸⃝•┇【.خــــروف 】➥*
*⏎┇🌸⃝•┇【.تـــــــــاج 】➥*
*⏎┇🌸⃝•┇【.هـــــــــــل】➥*
*⏎┇🌸⃝•┇【.صـراحــه 】➥*
*⏎┇🌸⃝•┇【.تـــكــــرار 】➥*
*⏎┇🌸⃝•┇【.حــــروف 】➥*
*⏎┇🌸⃝•┇【.تـصـمـيـم 】➥*
*⏎┇🌸⃝•┇【.ايــديـــت 】➥*
*⏎┇🌸⃝•┇【.خــــــــط 】➥*
*⏎┇🌸⃝•┇【.مـــيــمـــز 】➥*
*⏎┇🌸⃝•┇【.زخــــرفـه 】➥*
*⏎┇🌸⃝•┇【.قــــلـــــب 】➥*
*⏎┇🌸⃝•┇【.انــحـراف 】➥*
*⏎┇🌸⃝•┇【.منحرف  】➥*
*⏎┇🌸⃝•┇【.كــــــذاب 】➥*
*⏎┇🌸⃝•┇【.مـــراتـــي 】➥*
*⏎┇🌸⃝•┇【.اخــتــفـاء 】➥*
*⏎┇🌸⃝•┇【.رفــــيــــق 】➥*
*⏎┇🌸⃝•┇【.زوجـــنــي 】➥*
*⏎┇🌸⃝•┇【.صــــفـــــع 】➥*
*⏎┇🌸⃝•┇【.رومــنــســي】➥*
*⏎┇🌸⃝•┇【.خــــيـــانــــه】➥*
*⏎┇🌸⃝•┇【.خـــلـــفــيـــه】➥*
*⏎┇🌸⃝•┇【.حــــــضــــــن】➥*
*⏎┇🌸⃝•┇【.اغـــــنــــيــــه】➥*
*⏎┇🌸⃝•┇【.تـــعـــلـــيـــق】➥*
*⏎┇🌸⃝•┇【.تـــــنــــــمــــر】➥*
*⏎┇🌸⃝•┇【.مجرم 】➥*
*⏎┇🌸⃝•┇【.زواج 】➥*
*⏎┇🌸⃝•┇【.ورع 】➥*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*☜┇حقـوق السيد اكيرا ┇〄* 
*☞┇ wa.me/201559321760*
*☞┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴  〖🐉〗*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*',
                            id: 'te'
                          },
                          {
                            header: 'الالعـ👾ـاب',
                            title: '.قسم_الالعاب',
                            description: '*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم الالعـ👾ـاب*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.ســــؤال 】➥*
*⏎┇🌸⃝•┇【.كـــــــت 】➥*
*⏎┇🌸⃝•┇【.ديـــــــن 】➥*
*⏎┇🌸⃝•┇【.عــــيـــن 】➥*
*⏎┇🌸⃝•┇【.اكـس او 】➥*
*⏎┇🌸⃝•┇【.كــــــوره 】➥*
*⏎┇🌸⃝•┇【.رياضيات 】➥*
*⏎┇🌸⃝•┇【.تــحــدي 】➥*
*⏎┇🌸⃝•┇【.فـــكـــك 】➥*
*⏎┇🌸⃝•┇【.رتـــــــب 】➥*
*⏎┇🌸⃝•┇【.الــمـــارد 】➥*
*⏎┇🌸⃝•┇【.ايـمـوجي】➥*
*⏎┇🌸⃝•┇【.فــــزوره 】➥*
*⏎┇🌸⃝•┇【.مــوجـي 】➥*
*⏎┇🌸⃝•┇【.شــبــيـه 】➥*
*⏎┇🌸⃝•┇【.اعـــــرف 】➥*
*⏎┇🌸⃝•┇【.عـــــلــــم 】➥*
*⏎┇🌸⃝•┇【.مـسابــقـه 】➥*
*⏎┇🌸⃝•┇【.عــــكــــس 】➥*
*⏎┇🌸⃝•┇【.حــــــــرب 】➥*
*⏎┇🌸⃝•┇【.عكسعكس 】➥*
*⏎┇🌸⃝•┇【.انــــمـــــي 】➥*
*⏎┇🌸⃝•┇【.مسابقه-صور】➥*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*☜┇حقـوق السيد اكيرا ┇〄* 
*☞┇⌬ wa.me/201559321760*
*☞┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖👾〗*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*',
                            id: 'te'
                          },
                           {
                            header: 'الجــروبـ🌟ـات',
                            title: '.قسم_الجروبات',
                            description: '*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⧉┇اهلا بك في  اوامر الجــروبـ🌟ـات*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.مــنــشـن】➥*
*⏎┇🌸⃝•┇【.خــفــض】➥*
*⏎┇🌸⃝•┇【.رفـــــــــع】➥*
*⏎┇🌸⃝•┇【.جــــروب】➥*
*⏎┇🌸⃝•┇【.حـــــذف】➥*
*⏎┇🌸⃝•┇【.انــــــذار】➥* 
*⏎┇🌸⃝•┇【.رفع-انذار】➥*
*⏎┇🌸⃝•┇【.طـــــــرد】➥*
*⏎┇🌸⃝•┇【.الجـروب】➥*
*⏎┇🌸⃝•┇【.لـمـنـشـن】➥*
*⏎┇🌸⃝•┇【.الادمــــن】➥*
*⏎┇🌸⃝•┇【.مــخـفــي】➥*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*☜┇ حقـوق السيد اكيرا┇〄* 
*☞┇ wa.me/201559321760*
*☞┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖🐉〗*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*',
                            id: 'te'
                          }
                          {
                            header: 'القـ🕋ـران',
                            title: '.قسم_القران',
                            description: '*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم القـ🕋ـران*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.نصيحه】➥*
*⏎┇🌸⃝•┇【.قران】➥*
*⏎┇🌸⃝•┇【.اذكار-الصباح】➥*
*⏎┇🌸⃝•┇【.اذكار-المساء】➥*
*⏎┇🌸⃝•┇【.الله】➥*
*⏎┇🌸⃝•┇【.ايه_الكرسي】➥*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*☜┇حقـوق السيد اكيرا┇〄* 
*☞┇ wa.me/201559321760*
*☞┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖🕋〗*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*',
                            id: 'te'
                          },
                          {
                            header: 'التحـ🧚‍♂️ـويل',
                            title: '.قسم_التحويل',
                            description: '*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم التحـ🧚‍♂️ـويل*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.لصـــوره】➥*
*⏎┇🌸⃝•┇【.لفـيـديـو】➥*
*⏎┇🌸⃝•┇【.خـــــــط】➥*
*⏎┇🌸⃝•┇【.تليجراف】➥*
*⏎┇🌸⃝•┇【.مــلـصـق】➥*
*⏎┇🌸⃝•┇【.ســـرقــه】➥*
*⏎┇🌸⃝•┇【.بـاركــود】➥*
*⏎┇🌸⃝•┇【.انــطــق 】➥*
*⏎┇🌸⃝•┇【.تـحـميــل】➥*
*⏎┇🌸⃝•┇【.دمــــــــج】➥*
*⏎┇🌸⃝•┇【.لــصـــوت】➥*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*☜┇ حقـوق السيد اكيرا ┇〄* 
*☞┇ wa.me/201559321760*
*☞┋𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖🐉〗*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*',
                            id: 'te'
                          },
                          {
                            header: 'البنـ💸ـك',
                            title: '.قسم_البنك',
                            description: '
                            *⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم البنـ💸ـك*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*⏎┇🌸⃝•┇【.يـــومــي】➥*
*⏎┇🌸⃝•┇【.رانــــــك】➥*
*⏎┇🌸⃝•┇【.راتــــــب】➥*
*⏎┇🌸⃝•┇【.لــــفــــل】➥*
*⏎┇🌸⃝•┇【.هــجــوم】➥*
*⏎┇🌸⃝•┇【.شـــــراء】➥*
*⏎┇🌸⃝•┇【.شــهــري】➥*
*⏎┇🌸⃝•┇【.اسبوعي】➥*
*⏎┇🌸⃝•┇【.بـــنــــك】➥*
*⏎┇🌸⃝•┇【.عـــمـــل】➥*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*
*☜┇ حقـوق السيد اكيرا ┇〄* 
*☞┇wa.me/201559321760*
*☞┇𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴⁵〖💎〗*
*⧠━──━⧈⇓《🌸》⇓⧈━──━⧠*',
                            id: 'te'
                          },
                          {
                            header: 'المطـــ🐉ور',
                            title: '.قسم_المطور',
                            description: '*⧠━──━⧈⇓《🐉》⇓⧈━──━⧠*
*⧉┇اهلا بك في قسم المطـــ🐉ور*
*⧠━──━⧈⇓《🐉》⇓⧈━──━⧠*
*⏎┇🐉⃝•┇【.ضيف_اكس_بي】➥*
*⏎┇🐉⃝•┇【.بـــــان_شـــــات】➥*
*⏎┇🐉⃝•┇【.حـذف_بريـميـام】➥*
*⏎┇🐉⃝•┇【.الــغــاء_الــبــان】➥*
*⏎┇🐉⃝•┇【.المبندين】➥*
*⏎┇🐉⃝•┇【.بريميام】➥*
*⏎┇🐉⃝•┇【.شـــات】➥*
*⏎┇🐉⃝•┇【.مخفـي】➥*
*⏎┇🐉⃝•┇【.إعادة】➥*
*⏎┇🐉⃝•┇【.انضم】➥*
*⏎┇🐉⃝•┇【.بان】➥*
*⏎┇🐉⃝•┇【.برا】➥*
*⧠━──━⧈⇓《🐉》⇓⧈━──━⧠*
*☜┇ حقـوق السيد اكيرا ┇〄* 
*☞┇ wa.me/201559321760*
*☞┇𝑇𝐸𝑁𝐷𝛩𝑈, 𝐴𝐾𝐼𝑅𝐴  〖🐉〗*
*⧠━──━⧈⇓《🐉》⇓⧈━──━⧠*',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['القايمه','القائمة','القائمه','القايمة']

export default handler
