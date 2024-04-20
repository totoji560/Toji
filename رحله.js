let handler = async (m, { conn, isPrems }) => { //lastmiming
    const fkontak = {
        "key": {
            "participants": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

    let user = global.db.data.users[m.sender]
    let premium = user.premium
    let minar = `${pickRandom(['مبروك لقد ربحت ',
        '🌟✨باهِر!! لقد حصلت',
        ' رائع!! أنت رحال عظيم ',
        'لقد ذهبت ف رحله 🌊 !!',
        ' لقد تمكنت من الذهاب ف رحله',
        'سوف يزيد دخلك بفضل حقيقة أنك قمت برحله',
        '🌊🌊 رحله ',
        '🤩 نعم!!! الآن لديك',
        'المئذنة على جانبك، ولهذا السبب تحصل عليها',
        '😻 حظ مينار',
        ' لقد تم الذهاب ف رحله ، مبروك عليك',
        '🏄🏻 لقد أفادتك الرحله',
        '🛣️ لقد عثرت على مكان للذهاب ف رحله',
        '👾 بفضل حقيقة أنك قمت لذهاب ف رحله دخلك يزيد',
        'تهانينا!! الآن لديك', '🏄🏻🏄🏻 لقد حصلت'])}`

    let pp = 'https://media.istockphoto.com/vectors/basic-rgb-vector-id1315251368?b=1&k=6&m=1315251368&s=170667a&w=0&h=2BgQx5Pu2CewGeq93Qxsyoyw5oT4gioHOOIkHb7PoyY='

    let string = `${pickRandom([1, 2, 3, 4, 5])}` * 1
    let stringpremium = `${pickRandom([3, 4, 6, 7, 9, 11])}` * 1

    let coal = `${pickRandom([4, 5, 8, 10, 12])}` * 1
    let coalpremium = `${pickRandom([9, 14, 15, 17, 20])}` * 1

    let emas = `${pickRandom([1, 0, 2, 3, 0, 0, 0])}` * 1
    let emaspremium = `${pickRandom([2, 4, 5, 1, 1, 7, 8])}` * 1

    const recompensas = {
        string: premium ? stringpremium : string,
        coal: premium ? coalpremium : coal,
        emas: premium ? emaspremium : emas,
    }

    let xp = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1
    let exppremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250,
