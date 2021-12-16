//saving documents to db and generating link
bot.on('document', async(ctx, next) => {
    await new Promise((resolve, reject) =>{
        setTimeout(()=>{
            return resolve("Result");
        }, 2_000);
    });
    await next();
  
    if(ctx.chat.type == 'private') {
        document = ctx.message.document
    }

    if(ctx.from.id == config.ADMIN || ctx.from.id == config.ADMIN1 || ctx.from.id == config.ADMIN2 || ctx.from.id == config.ADMIN3 || ctx.from.id == config.ADMIN4){
        if(document.file_name == undefined){
            if(ctx.chat.type == 'private'){
                try{
                    var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                    var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                    //console.log(member);
                    if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                        await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                    }else{
                        await saver.checkFile(`${document.file_unique_id}`).then(async res => {
                            let result = `${document.file_unique_id}`.replace(/-/g, '_');
                            //console.log(res);
                            if(res == true) {
                                await ctx.reply(`File already exists. #file${result}`)
                            }else{
                                await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                                if(ctx.message.caption == undefined){
                                    const data1 = await ctx.reply(`#video #file${result} #size${document.file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                        chat_id: config.LOG_CHANNEL,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true,
                                        disable_notification: true,
                                        reply_markup:{
                                            inline_keyboard:[
                                                [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${document.file_unique_id}`}]
                                            ]
                                        }
                                    })
                                    if(ctx.chat.type == 'private') {
                                        fileDetails1 = {
                                            file_name: today2(ctx),
                                            userId:ctx.from.id,
                                            file_id: document.file_id,
                                            caption: ctx.message.caption,
                                            file_size: document.file_size,
                                            uniqueId: document.file_unique_id,
                                            messageId: data1.message_id,
                                            type: 'document'
                                        }
                                        await saver.saveFile(fileDetails1)
                                    }
                                    return;
                                }
                                const data2 = await ctx.reply(`${ctx.message.caption}\n\n#video #file${result} #size${document.file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                    chat_id: config.LOG_CHANNEL,
                                    parse_mode:'HTML',
                                    disable_web_page_preview: true,
                                    disable_notification: true,
                                    reply_markup:{
                                        inline_keyboard:[
                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${document.file_unique_id}`}]
                                        ]
                                    }
                                })
                                if(ctx.chat.type == 'private') {
                                    fileDetails1 = {
                                        file_name: today2(ctx),
                                        userId:ctx.from.id,
                                        file_id: document.file_id,
                                        caption: ctx.message.caption,
                                        file_size: document.file_size,
                                        uniqueId: document.file_unique_id,
                                        messageId: data2.message_id,
                                        type: 'document'
                                    }
                                    await saver.saveFile(fileDetails1)
                                }
                            }
                        })
                    }
                }catch(error){
                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                }
            }
        }else{
            if(ctx.chat.type == 'private'){
                try{
                    var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                    var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                    //console.log(member);
                    if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                        await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                    }else{
                        await saver.checkFile(`${document.file_unique_id}`).then(async res => {
                            let result = `${document.file_unique_id}`.replace(/-/g, '_');
                            //console.log(res);
                            if(res == true) {
                                await ctx.reply(`File already exists. #file${result}`)
                            }else{
                                await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                                if(ctx.chat.type == 'private') {
                                    var exstension2 = document.file_name;
                                    var regex2 = /\.[A-Za-z0-9]+$/gm
                                    var doctext2 = exstension2.replace(regex2, '');
                                    filename2 = {
                                        file_name: doctext2
                                    }
                                }
                                if(ctx.message.caption == undefined){
                                    const data1 = await ctx.reply(`#video #file${result} #size${document.file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                        chat_id: config.LOG_CHANNEL,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true,
                                        disable_notification: true,
                                        reply_markup:{
                                            inline_keyboard:[
                                                [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${document.file_unique_id}`}]
                                            ]
                                        }
                                    })
                                    if(ctx.chat.type == 'private') {
                                        var exstension = document.file_name;
                                        var regex = /\.[A-Za-z0-9]+$/gm
                                        var doctext = exstension.replace(regex, '');
                                        fileDetails2 = {
                                            file_name: doctext,
                                            userId:ctx.from.id,
                                            file_id: document.file_id,
                                            caption: ctx.message.caption,
                                            file_size: document.file_size,
                                            uniqueId: document.file_unique_id,
                                            messageId: data1.message_id,
                                            type: 'document'
                                        }
                                        await saver.saveFile2(fileDetails2)
                                    }
                                    return;
                                }
                                const data2 = await ctx.reply(`${ctx.message.caption}\n\n#video #file${result} #size${document.file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                    chat_id: config.LOG_CHANNEL,
                                    parse_mode:'HTML',
                                    disable_web_page_preview: true,
                                    disable_notification: true,
                                    reply_markup:{
                                        inline_keyboard:[
                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${document.file_unique_id}`}]
                                        ]
                                    }
                                })
                                if(ctx.chat.type == 'private') {
                                    var exstension = document.file_name;
                                    var regex = /\.[A-Za-z0-9]+$/gm
                                    var doctext = exstension.replace(regex, '');
                                    fileDetails2 = {
                                        file_name: doctext,
                                        userId:ctx.from.id,
                                        file_id: document.file_id,
                                        caption: ctx.message.caption,
                                        file_size: document.file_size,
                                        uniqueId: document.file_unique_id,
                                        messageId: data2.message_id,
                                        type: 'document'
                                    }
                                    await saver.saveFile2(fileDetails2)
                                }
                            }
                        })
                    }
                }catch(error){
                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                }
            }
        }
    }else{
        var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
        var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
        //console.log(member);
        if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
            const profile2 = await bot.telegram.getUserProfilePhotos(ctx.from.id)
            await saver.checkBan(`${ctx.from.id}`).then(async res => {
                //console.log(res);
                if(res == true) {
                    if(ctx.chat.type == 'private') {
                        await ctx.reply(`${messagebanned(ctx)}`)
                    }
                }else{
                    if(ctx.chat.type == 'private') {
                        try{
                            var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                            var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                            //console.log(member);
                            if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }else{
                                if(!profile2 || profile2.total_count == 0)
                                    return await ctx.reply(`<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,{
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true
                                    })
                                    await ctx.replyWithPhoto(profile2.photos[0][0].file_id,{caption: `<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true
                                    })
                            }
                        }catch(error){
                            await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                        }
                    }
                }
            })
        }else{
            if(ctx.chat.type == 'private') {
                document = ctx.message.document
            }
            
            if(document.file_name == undefined){
                if(ctx.chat.type == 'private'){
                    await saver.checkBan(`${ctx.from.id}`).then(async res => {
                        let result = `${document.file_unique_id}`.replace(/-/g, '_');
                        //console.log(res);
                        if(res == true) {
                            await ctx.reply(`${messagebanned(ctx)}`)
                        }else{
                            try{
                                var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                                var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                                //console.log(member);
                                if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                                }else{
                                    await saver.checkFile(`${document.file_unique_id}`).then(async res => {
                                        let result = `${document.file_unique_id}`.replace(/-/g, '_');
                                        //console.log(res);
                                        if(res == true) {
                                            await ctx.reply(`File already exists. #file${result}`)
                                        }else{
                                            await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                                parse_mode: 'HTML',
                                                disable_web_page_preview: true,
                                                reply_to_message_id: ctx.message.message_id
                                            })
                                            if(ctx.message.caption == undefined){
                                                const data1 = await ctx.reply(`#video #file${result} #size${document.file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                    chat_id: config.LOG_CHANNEL,
                                                    parse_mode:'HTML',
                                                    disable_web_page_preview: true,
                                                    disable_notification: true,
                                                    reply_markup:{
                                                        inline_keyboard:[
                                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${document.file_unique_id}`}]
                                                        ]
                                                    }
                                                })
                                                if(ctx.chat.type == 'private') {
                                                    fileDetails1 = {
                                                        file_name: today2(ctx),
                                                        userId:ctx.from.id,
                                                        file_id: document.file_id,
                                                        caption: ctx.message.caption,
                                                        file_size: document.file_size,
                                                        uniqueId: document.file_unique_id,
                                                        messageId: data1.message_id,
                                                        type: 'document'
                                                    }
                                                    await saver.saveFile(fileDetails1)
                                                }
                                                return;
                                            }
                                            const data2 = await ctx.reply(`${ctx.message.caption}\n\n#video #file${result} #size${document.file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                chat_id: config.LOG_CHANNEL,
                                                parse_mode:'HTML',
                                                disable_web_page_preview: true,
                                                disable_notification: true,
                                                reply_markup:{
                                                    inline_keyboard:[
                                                        [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${document.file_unique_id}`}]
                                                    ]
                                                }
                                            })
                                            if(ctx.chat.type == 'private') {
                                                fileDetails1 = {
                                                    file_name: today2(ctx),
                                                    userId:ctx.from.id,
                                                    file_id: document.file_id,
                                                    caption: ctx.message.caption,
                                                    file_size: document.file_size,
                                                    uniqueId: document.file_unique_id,
                                                    messageId: data2.message_id,
                                                    type: 'document'
                                                }
                                                await saver.saveFile(fileDetails1)
                                            }
                                        }
                                    })
                                }
                            }catch(error){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }
                        }
                    })
                }
            }else{
                if(ctx.chat.type == 'private'){
                    await saver.checkBan(`${ctx.from.id}`).then(async res => {
                        //console.log(res);
                        if(res == true) {
                            await ctx.reply(`${messagebanned(ctx)}`)
                        }else{
                            try{
                                var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                                var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                                //console.log(member);
                                if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                                }else{
                                    await saver.checkFile(`${document.file_unique_id}`).then(async res => {
                                        let result = `${document.file_unique_id}`.replace(/-/g, '_');
                                        //console.log(res);
                                        if(res == true) {
                                            await ctx.reply(`File already exists. #file${result}`)
                                        }else{
                                            await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                                parse_mode: 'HTML',
                                                disable_web_page_preview: true,
                                                reply_to_message_id: ctx.message.message_id
                                            })
                                            if(ctx.chat.type == 'private') {
                                                var exstension2 = document.file_name;
                                                var regex2 = /\.[A-Za-z0-9]+$/gm
                                                var doctext2 = exstension2.replace(regex2, '');
                                                filename2 = {
                                                    file_name: doctext2
                                                }
                                            }
                                            if(ctx.message.caption == undefined){
                                                const data1 = await ctx.reply(`#video #file${result} #size${document.file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                    chat_id: config.LOG_CHANNEL,
                                                    parse_mode:'HTML',
                                                    disable_web_page_preview: true,
                                                    disable_notification: true,
                                                    reply_markup:{
                                                        inline_keyboard:[
                                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${document.file_unique_id}`}]
                                                        ]
                                                    }
                                                })
                                                if(ctx.chat.type == 'private') {
                                                    var exstension = document.file_name;
                                                    var regex = /\.[A-Za-z0-9]+$/gm
                                                    var doctext = exstension.replace(regex, '');
                                                    fileDetails2 = {
                                                        file_name: doctext,
                                                        userId:ctx.from.id,
                                                        file_id: document.file_id,
                                                        caption: ctx.message.caption,
                                                        file_size: document.file_size,
                                                        uniqueId: document.file_unique_id,
                                                        messageId: data1.message_id,
                                                        type: 'document'
                                                    }
                                                    await saver.saveFile2(fileDetails2)
                                                }
                                                return;
                                            }
                                            const data2 = await ctx.reply(`${ctx.message.caption}\n\n#video #file${result} #size${document.file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                chat_id: config.LOG_CHANNEL,
                                                parse_mode:'HTML',
                                                disable_web_page_preview: true,
                                                disable_notification: true,
                                                reply_markup:{
                                                    inline_keyboard:[
                                                        [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${document.file_unique_id}`}]
                                                    ]
                                                }
                                            })
                                            if(ctx.chat.type == 'private') {
                                                var exstension = document.file_name;
                                                var regex = /\.[A-Za-z0-9]+$/gm
                                                var doctext = exstension.replace(regex, '');
                                                fileDetails2 = {
                                                    file_name: doctext,
                                                    userId:ctx.from.id,
                                                    file_id: document.file_id,
                                                    caption: ctx.message.caption,
                                                    file_size: document.file_size,
                                                    uniqueId: document.file_unique_id,
                                                    messageId: data2.message_id,
                                                    type: 'document'
                                                }
                                                await saver.saveFile2(fileDetails2)
                                            }
                                        }
                                    })
                                }
                            }catch(error){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }
                        }
                    })
                }
            }
        }
    }

})

//video files
bot.on('video', async(ctx, next) => {
    await new Promise((resolve, reject) =>{
        setTimeout(()=>{
            return resolve("Result");
        }, 2_000);
    });
    await next();
  
    if(ctx.chat.type == 'private') {
        video = ctx.message.video
    }

    if(ctx.from.id == config.ADMIN || ctx.from.id == config.ADMIN1 || ctx.from.id == config.ADMIN2 || ctx.from.id == config.ADMIN3 || ctx.from.id == config.ADMIN4){
        if(video.file_name == undefined){
            if(ctx.chat.type == 'private'){
                try{
                    var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                    var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                    //console.log(member);
                    if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                        await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                    }else{
                        await saver.checkFile(`${video.file_unique_id}`).then(async res => {
                            let result = `${video.file_unique_id}`.replace(/-/g, '_');
                            //console.log(res);
                            if(res == true) {
                                await ctx.reply(`File already exists. #file${result}`)
                            }else{
                                await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                                if(ctx.message.caption == undefined){
                                    const data1 = await ctx.reply(`#video #file${result} #size${video.file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                        chat_id: config.LOG_CHANNEL,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true,
                                        disable_notification: true,
                                        reply_markup:{
                                            inline_keyboard:[
                                                [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${video.file_unique_id}`}]
                                            ]
                                        }
                                    })
                                    if(ctx.chat.type == 'private') {
                                        fileDetails1 = {
                                            file_name: today2(ctx),
                                            userId:ctx.from.id,
                                            file_id: video.file_id,
                                            caption: ctx.message.caption,
                                            file_size: video.file_size,
                                            uniqueId: video.file_unique_id,
                                            messageId: data1.message_id,
                                            type: 'video'
                                        }
                                        await saver.saveFile(fileDetails1)
                                    }
                                    return;
                                }
                                const data2 = await ctx.reply(`${ctx.message.caption}\n\n#video #file${result} #size${video.file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                    chat_id: config.LOG_CHANNEL,
                                    parse_mode:'HTML',
                                    disable_web_page_preview: true,
                                    disable_notification: true,
                                    reply_markup:{
                                        inline_keyboard:[
                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${video.file_unique_id}`}]
                                        ]
                                    }
                                })
                                if(ctx.chat.type == 'private') {
                                    fileDetails1 = {
                                        file_name: today2(ctx),
                                        userId:ctx.from.id,
                                        file_id: video.file_id,
                                        caption: ctx.message.caption,
                                        file_size: video.file_size,
                                        uniqueId: video.file_unique_id,
                                        messageId: data2.message_id,
                                        type: 'video'
                                    }
                                    await saver.saveFile(fileDetails1)
                                }
                            }
                        })
                    }
                }catch(error){
                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                }
            }
        }else{
            if(ctx.chat.type == 'private'){
                try{
                    var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                    var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                    //console.log(member);
                    if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                        await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                    }else{
                        await saver.checkFile(`${video.file_unique_id}`).then(async res => {
                            let result = `${video.file_unique_id}`.replace(/-/g, '_');
                            //console.log(res);
                            if(res == true) {
                                await ctx.reply(`File already exists. #file${result}`)
                            }else{
                                await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                                if(ctx.chat.type == 'private') {
                                    var exstension2 = video.file_name;
                                    var regex2 = /\.[A-Za-z0-9]+$/gm
                                    var vidtext2 = exstension2.replace(regex2, '');
                                    filename2 = {
                                        file_name: vidtext2
                                    }
                                }
                                if(ctx.message.caption == undefined){
                                    const data1 = await ctx.reply(`#video #file${result} #size${video.file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                        chat_id: config.LOG_CHANNEL,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true,
                                        disable_notification: true,
                                        reply_markup:{
                                            inline_keyboard:[
                                                [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${video.file_unique_id}`}]
                                            ]
                                        }
                                    })
                                    if(ctx.chat.type == 'private') {
                                        var exstension = video.file_name;
                                        var regex = /\.[A-Za-z0-9]+$/gm
                                        var vidtext = exstension.replace(regex, '');
                                        fileDetails2 = {
                                            file_name: vidtext,
                                            userId:ctx.from.id,
                                            file_id: video.file_id,
                                            caption: ctx.message.caption,
                                            file_size: video.file_size,
                                            uniqueId: video.file_unique_id,
                                            messageId: data1.message_id,
                                            type: 'video'
                                        }
                                        await saver.saveFile2(fileDetails2)
                                    }
                                    return;
                                }
                                const data2 = await ctx.reply(`${ctx.message.caption}\n\n#video #file${result} #size${video.file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                    chat_id: config.LOG_CHANNEL,
                                    parse_mode:'HTML',
                                    disable_web_page_preview: true,
                                    disable_notification: true,
                                    reply_markup:{
                                        inline_keyboard:[
                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${video.file_unique_id}`}]
                                        ]
                                    }
                                })
                                if(ctx.chat.type == 'private') {
                                    var exstension = video.file_name;
                                    var regex = /\.[A-Za-z0-9]+$/gm
                                    var vidtext = exstension.replace(regex, '');
                                    fileDetails2 = {
                                        file_name: vidtext,
                                        userId:ctx.from.id,
                                        file_id: video.file_id,
                                        caption: ctx.message.caption,
                                        file_size: video.file_size,
                                        uniqueId: video.file_unique_id,
                                        messageId: data2.message_id,
                                        type: 'video'
                                    }
                                    await saver.saveFile2(fileDetails2)
                                }
                            }
                        })
                    }
                }catch(error){
                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                }
            }
        }
    }else{
        var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
        var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
        //console.log(member);
        if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
            const profile2 = await bot.telegram.getUserProfilePhotos(ctx.from.id)
            await saver.checkBan(`${ctx.from.id}`).then(async res => {
                //console.log(res);
                if(res == true) {
                    if(ctx.chat.type == 'private') {
                        await ctx.reply(`${messagebanned(ctx)}`)
                    }
                }else{
                    if(ctx.chat.type == 'private') {
                        try{
                            var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                            var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                            //console.log(member);
                            if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }else{
                                if(!profile2 || profile2.total_count == 0)
                                    return await ctx.reply(`<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,{
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true
                                    })
                                    await ctx.replyWithPhoto(profile2.photos[0][0].file_id,{caption: `<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true
                                    })
                            }
                        }catch(error){
                            await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                        }
                    }
                }
            })
        }else{
            if(ctx.chat.type == 'private') {
                video = ctx.message.video
            }
            
            if(video.file_name == undefined){
                if(ctx.chat.type == 'private'){
                    await saver.checkBan(`${ctx.from.id}`).then(async res => {
                        let result = `${video.file_unique_id}`.replace(/-/g, '_');
                        //console.log(res);
                        if(res == true) {
                            await ctx.reply(`${messagebanned(ctx)}`)
                        }else{
                            try{
                                var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                                var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                                //console.log(member);
                                if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                                }else{
                                    await saver.checkFile(`${video.file_unique_id}`).then(async res => {
                                        let result = `${video.file_unique_id}`.replace(/-/g, '_');
                                        //console.log(res);
                                        if(res == true) {
                                            await ctx.reply(`File already exists. #file${result}`)
                                        }else{
                                            await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                                parse_mode: 'HTML',
                                                disable_web_page_preview: true,
                                                reply_to_message_id: ctx.message.message_id
                                            })
                                            if(ctx.message.caption == undefined){
                                                const data1 = await ctx.reply(`#video #file${result} #size${video.file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                    chat_id: config.LOG_CHANNEL,
                                                    parse_mode:'HTML',
                                                    disable_web_page_preview: true,
                                                    disable_notification: true,
                                                    reply_markup:{
                                                        inline_keyboard:[
                                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${video.file_unique_id}`}]
                                                        ]
                                                    }
                                                })
                                                if(ctx.chat.type == 'private') {
                                                    fileDetails1 = {
                                                        file_name: today2(ctx),
                                                        userId:ctx.from.id,
                                                        file_id: video.file_id,
                                                        caption: ctx.message.caption,
                                                        file_size: video.file_size,
                                                        uniqueId: video.file_unique_id,
                                                        messageId: data1.message_id,
                                                        type: 'video'
                                                    }
                                                    await saver.saveFile(fileDetails1)
                                                }
                                                return;
                                            }
                                            const data2 = await ctx.reply(`${ctx.message.caption}\n\n#video #file${result} #size${video.file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                chat_id: config.LOG_CHANNEL,
                                                parse_mode:'HTML',
                                                disable_web_page_preview: true,
                                                disable_notification: true,
                                                reply_markup:{
                                                    inline_keyboard:[
                                                        [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${video.file_unique_id}`}]
                                                    ]
                                                }
                                            })
                                            if(ctx.chat.type == 'private') {
                                                fileDetails1 = {
                                                    file_name: today2(ctx),
                                                    userId:ctx.from.id,
                                                    file_id: video.file_id,
                                                    caption: ctx.message.caption,
                                                    file_size: video.file_size,
                                                    uniqueId: video.file_unique_id,
                                                    messageId: data2.message_id,
                                                    type: 'video'
                                                }
                                                await saver.saveFile(fileDetails1)
                                            }
                                        }
                                    })
                                }
                            }catch(error){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }
                        }
                    })
                }
            }else{
                if(ctx.chat.type == 'private'){
                    await saver.checkBan(`${ctx.from.id}`).then(async res => {
                        //console.log(res);
                        if(res == true) {
                            await ctx.reply(`${messagebanned(ctx)}`)
                        }else{
                            try{
                                var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                                var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                                //console.log(member);
                                if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                                }else{
                                    await saver.checkFile(`${video.file_unique_id}`).then(async res => {
                                        let result = `${video.file_unique_id}`.replace(/-/g, '_');
                                        //console.log(res);
                                        if(res == true) {
                                            await ctx.reply(`File already exists. #file${result}`)
                                        }else{
                                            await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                                parse_mode: 'HTML',
                                                disable_web_page_preview: true,
                                                reply_to_message_id: ctx.message.message_id
                                            })
                                            if(ctx.chat.type == 'private') {
                                                var exstension2 = video.file_name;
                                                var regex2 = /\.[A-Za-z0-9]+$/gm
                                                var vidtext2 = exstension2.replace(regex2, '');
                                                filename2 = {
                                                    file_name: vidtext2
                                                }
                                            }
                                            if(ctx.message.caption == undefined){
                                                const data1 = await ctx.reply(`#video #file${result} #size${video.file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                    chat_id: config.LOG_CHANNEL,
                                                    parse_mode:'HTML',
                                                    disable_web_page_preview: true,
                                                    disable_notification: true,
                                                    reply_markup:{
                                                        inline_keyboard:[
                                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${video.file_unique_id}`}]
                                                        ]
                                                    }
                                                })
                                                if(ctx.chat.type == 'private') {
                                                    var exstension = video.file_name;
                                                    var regex = /\.[A-Za-z0-9]+$/gm
                                                    var vidtext = exstension.replace(regex, '');
                                                    fileDetails2 = {
                                                        file_name: vidtext,
                                                        userId:ctx.from.id,
                                                        file_id: video.file_id,
                                                        caption: ctx.message.caption,
                                                        file_size: video.file_size,
                                                        uniqueId: video.file_unique_id,
                                                        messageId: data1.message_id,
                                                        type: 'video'
                                                    }
                                                    await saver.saveFile2(fileDetails2)
                                                }
                                                return;
                                            }
                                            const data2 = await ctx.reply(`${ctx.message.caption}\n\n#video #file${result} #size${video.file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                chat_id: config.LOG_CHANNEL,
                                                parse_mode:'HTML',
                                                disable_web_page_preview: true,
                                                disable_notification: true,
                                                reply_markup:{
                                                    inline_keyboard:[
                                                        [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${video.file_unique_id}`}]
                                                    ]
                                                }
                                            })
                                            if(ctx.chat.type == 'private') {
                                                var exstension = video.file_name;
                                                var regex = /\.[A-Za-z0-9]+$/gm
                                                var vidtext = exstension.replace(regex, '');
                                                fileDetails2 = {
                                                    file_name: vidtext,
                                                    userId:ctx.from.id,
                                                    file_id: video.file_id,
                                                    caption: ctx.message.caption,
                                                    file_size: video.file_size,
                                                    uniqueId: video.file_unique_id,
                                                    messageId: data2.message_id,
                                                    type: 'video'
                                                }
                                                await saver.saveFile2(fileDetails2)
                                            }
                                        }
                                    })
                                }
                            }catch(error){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }
                        }
                    })
                }
            }
        }
    }

})

//photo files
bot.on('photo', async(ctx, next) => {
    await new Promise((resolve, reject) =>{
        setTimeout(()=>{
            return resolve("Result");
        }, 2_000);
    });
    await next();
  
    if(ctx.chat.type == 'private') {
        photo = ctx.message.photo
    }

    if(ctx.from.id == config.ADMIN || ctx.from.id == config.ADMIN1 || ctx.from.id == config.ADMIN2 || ctx.from.id == config.ADMIN3 || ctx.from.id == config.ADMIN4){
        if(photo[1].file_name == undefined){
            if(ctx.chat.type == 'private'){
                try{
                    var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                    var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                    //console.log(member);
                    if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                        await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                    }else{
                        await saver.checkFile(`${photo[1].file_unique_id}`).then(async res => {
                            let result = `${photo[1].file_unique_id}`.replace(/-/g, '_');
                            //console.log(res);
                            if(res == true) {
                                await ctx.reply(`File already exists. #file${result}`)
                            }else{
                                await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                                if(ctx.message.caption == undefined){
                                    const data1 = await ctx.reply(`#photo #file${result} #size${photo[1].file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                        chat_id: config.LOG_CHANNEL,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true,
                                        disable_notification: true,
                                        reply_markup:{
                                            inline_keyboard:[
                                                [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${photo[1].file_unique_id}`}]
                                            ]
                                        }
                                    })
                                    if(ctx.chat.type == 'private') {
                                        fileDetails1 = {
                                            file_name: today2(ctx),
                                            userId:ctx.from.id,
                                            file_id: photo[1].file_id,
                                            caption: ctx.message.caption,
                                            file_size: photo[1].file_size,
                                            uniqueId: photo[1].file_unique_id,
                                            messageId: data1.message_id,
                                            type: 'photo'
                                        }
                                        await saver.saveFile(fileDetails1)
                                    }
                                    return;
                                }
                                const data2 = await ctx.reply(`${ctx.message.caption}\n\n#photo #file${result} #size${photo[1].file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                    chat_id: config.LOG_CHANNEL,
                                    parse_mode:'HTML',
                                    disable_web_page_preview: true,
                                    disable_notification: true,
                                    reply_markup:{
                                        inline_keyboard:[
                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${photo[1].file_unique_id}`}]
                                        ]
                                    }
                                })
                                if(ctx.chat.type == 'private') {
                                    fileDetails1 = {
                                        file_name: today2(ctx),
                                        userId:ctx.from.id,
                                        file_id: photo[1].file_id,
                                        caption: ctx.message.caption,
                                        file_size: photo[1].file_size,
                                        uniqueId: photo[1].file_unique_id,
                                        messageId: data2.message_id,
                                        type: 'photo'
                                    }
                                    await saver.saveFile(fileDetails1)
                                }
                            }
                        })
                    }
                }catch(error){
                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                }
            }
        }else{
            if(ctx.chat.type == 'private'){
                try{
                    var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                    var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                    //console.log(member);
                    if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                        await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                    }else{
                        await saver.checkFile(`${photo[1].file_unique_id}`).then(async res => {
                            let result = `${photo[1].file_unique_id}`.replace(/-/g, '_');
                            //console.log(res);
                            if(res == true) {
                                await ctx.reply(`File already exists. #file${result}`)
                            }else{
                                await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                    parse_mode: 'HTML',
                                    disable_web_page_preview: true,
                                    reply_to_message_id: ctx.message.message_id
                                })
                                if(ctx.chat.type == 'private') {
                                    var exstension2 = photo[1].file_name;
                                    var regex2 = /\.[A-Za-z0-9]+$/gm
                                    var photext2 = exstension2.replace(regex2, '');
                                    filename2 = {
                                        file_name: photext2
                                    }
                                }
                                if(ctx.message.caption == undefined){
                                    const data1 = await ctx.reply(`#photo #file${result} #size${photo[1].file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                        chat_id: config.LOG_CHANNEL,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true,
                                        disable_notification: true,
                                        reply_markup:{
                                            inline_keyboard:[
                                                [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${photo[1].file_unique_id}`}]
                                            ]
                                        }
                                    })
                                    if(ctx.chat.type == 'private') {
                                        var exstension = photo[1].file_name;
                                        var regex = /\.[A-Za-z0-9]+$/gm
                                        var photext = exstension.replace(regex, '');
                                        fileDetails2 = {
                                            file_name: photext,
                                            userId:ctx.from.id,
                                            file_id: photo[1].file_id,
                                            caption: ctx.message.caption,
                                            file_size: photo[1].file_size,
                                            uniqueId: photo[1].file_unique_id,
                                            messageId: data1.message_id,
                                            type: 'photo'
                                        }
                                        await saver.saveFile2(fileDetails2)
                                    }
                                    return;
                                }
                                const data2 = await ctx.reply(`${ctx.message.caption}\n\n#photo #file${result} #size${photo[1].file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                    chat_id: config.LOG_CHANNEL,
                                    parse_mode:'HTML',
                                    disable_web_page_preview: true,
                                    disable_notification: true,
                                    reply_markup:{
                                        inline_keyboard:[
                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${photo[1].file_unique_id}`}]
                                        ]
                                    }
                                })
                                if(ctx.chat.type == 'private') {
                                    var exstension = photo[1].file_name;
                                    var regex = /\.[A-Za-z0-9]+$/gm
                                    var photext = exstension.replace(regex, '');
                                    fileDetails2 = {
                                        file_name: photext,
                                        userId:ctx.from.id,
                                        file_id: photo[1].file_id,
                                        caption: ctx.message.caption,
                                        file_size: photo[1].file_size,
                                        uniqueId: photo[1].file_unique_id,
                                        messageId: data2.message_id,
                                        type: 'photo'
                                    }
                                    await saver.saveFile2(fileDetails2)
                                }
                            }
                        })
                    }
                }catch(error){
                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                }
            }
        }
    }else{
        var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
        var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
        //console.log(member);
        if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
            const profile2 = await bot.telegram.getUserProfilePhotos(ctx.from.id)
            await saver.checkBan(`${ctx.from.id}`).then(async res => {
                //console.log(res);
                if(res == true) {
                    if(ctx.chat.type == 'private') {
                        await ctx.reply(`${messagebanned(ctx)}`)
                    }
                }else{
                    if(ctx.chat.type == 'private') {
                        try{
                            var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                            var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                            //console.log(member);
                            if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }else{
                                if(!profile2 || profile2.total_count == 0)
                                    return await ctx.reply(`<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,{
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true
                                    })
                                    await ctx.replyWithPhoto(profile2.photos[0][0].file_id,{caption: `<a href="tg://user?id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a> \n\n${welcomejoin(ctx)}`,
                                        parse_mode:'HTML',
                                        disable_web_page_preview: true
                                    })
                            }
                        }catch(error){
                            await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                        }
                    }
                }
            })
        }else{
            if(ctx.chat.type == 'private') {
                photo = ctx.message.photo
            }
            
            if(photo[1].file_name == undefined){
                if(ctx.chat.type == 'private'){
                    await saver.checkBan(`${ctx.from.id}`).then(async res => {
                        let result = `${photo[1].file_unique_id}`.replace(/-/g, '_');
                        //console.log(res);
                        if(res == true) {
                            await ctx.reply(`${messagebanned(ctx)}`)
                        }else{
                            try{
                                var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                                var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                                //console.log(member);
                                if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                                }else{
                                    await saver.checkFile(`${photo[1].file_unique_id}`).then(async res => {
                                        let result = `${photo[1].file_unique_id}`.replace(/-/g, '_');
                                        //console.log(res);
                                        if(res == true) {
                                            await ctx.reply(`File already exists. #file${result}`)
                                        }else{
                                            await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                                parse_mode: 'HTML',
                                                disable_web_page_preview: true,
                                                reply_to_message_id: ctx.message.message_id
                                            })
                                            if(ctx.message.caption == undefined){
                                                const data1 = await ctx.reply(`#photo #file${result} #size${photo[1].file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                    chat_id: config.LOG_CHANNEL,
                                                    parse_mode:'HTML',
                                                    disable_web_page_preview: true,
                                                    disable_notification: true,
                                                    reply_markup:{
                                                        inline_keyboard:[
                                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${photo[1].file_unique_id}`}]
                                                        ]
                                                    }
                                                })
                                                if(ctx.chat.type == 'private') {
                                                    fileDetails1 = {
                                                        file_name: today2(ctx),
                                                        userId:ctx.from.id,
                                                        file_id: photo[1].file_id,
                                                        caption: ctx.message.caption,
                                                        file_size: photo[1].file_size,
                                                        uniqueId: photo[1].file_unique_id,
                                                        messageId: data1.message_id,
                                                        type: 'photo'
                                                    }
                                                    await saver.saveFile(fileDetails1)
                                                }
                                                return;
                                            }
                                            const data2 = await ctx.reply(`${ctx.message.caption}\n\n#photo #file${result} #size${photo[1].file_size} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                chat_id: config.LOG_CHANNEL,
                                                parse_mode:'HTML',
                                                disable_web_page_preview: true,
                                                disable_notification: true,
                                                reply_markup:{
                                                    inline_keyboard:[
                                                        [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${photo[1].file_unique_id}`}]
                                                    ]
                                                }
                                            })
                                            if(ctx.chat.type == 'private') {
                                                fileDetails1 = {
                                                    file_name: today2(ctx),
                                                    userId:ctx.from.id,
                                                    file_id: photo[1].file_id,
                                                    caption: ctx.message.caption,
                                                    file_size: photo[1].file_size,
                                                    uniqueId: photo[1].file_unique_id,
                                                    messageId: data2.message_id,
                                                    type: 'photo'
                                                }
                                                await saver.saveFile(fileDetails1)
                                            }
                                        }
                                    })
                                }
                            }catch(error){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }
                        }
                    })
                }
            }else{
                if(ctx.chat.type == 'private'){
                    await saver.checkBan(`${ctx.from.id}`).then(async res => {
                        //console.log(res);
                        if(res == true) {
                            await ctx.reply(`${messagebanned(ctx)}`)
                        }else{
                            try{
                                var botStatus = await bot.telegram.getChatMember(channelId, ctx.botInfo.id)
                                var member = await bot.telegram.getChatMember(channelId, ctx.from.id)
                                //console.log(member);
                                if(member.status == 'restricted' || member.status == 'left' || member.status == 'kicked'){
                                    await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                                }else{
                                    await saver.checkFile(`${photo[1].file_unique_id}`).then(async res => {
                                        let result = `${photo[1].file_unique_id}`.replace(/-/g, '_');
                                        //console.log(res);
                                        if(res == true) {
                                            await ctx.reply(`File already exists. #file${result}`)
                                        }else{
                                            await ctx.reply(`✔️ Thank you for sending.\nSearch #file${result}`,{
                                                parse_mode: 'HTML',
                                                disable_web_page_preview: true,
                                                reply_to_message_id: ctx.message.message_id
                                            })
                                            if(ctx.chat.type == 'private') {
                                                var exstension2 = photo[1].file_name;
                                                var regex2 = /\.[A-Za-z0-9]+$/gm
                                                var photext2 = exstension2.replace(regex2, '');
                                                filename2 = {
                                                    file_name: photext2
                                                }
                                            }
                                            if(ctx.message.caption == undefined){
                                                const data1 = await ctx.reply(`#photo #file${result} #size${photo[1].file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                    chat_id: config.LOG_CHANNEL,
                                                    parse_mode:'HTML',
                                                    disable_web_page_preview: true,
                                                    disable_notification: true,
                                                    reply_markup:{
                                                        inline_keyboard:[
                                                            [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${photo[1].file_unique_id}`}]
                                                        ]
                                                    }
                                                })
                                                if(ctx.chat.type == 'private') {
                                                    var exstension = photo[1].file_name;
                                                    var regex = /\.[A-Za-z0-9]+$/gm
                                                    var photext = exstension.replace(regex, '');
                                                    fileDetails2 = {
                                                        file_name: photext,
                                                        userId:ctx.from.id,
                                                        file_id: photo[1].file_id,
                                                        caption: ctx.message.caption,
                                                        file_size: photo[1].file_size,
                                                        uniqueId: photo[1].file_unique_id,
                                                        messageId: data1.message_id,
                                                        type: 'photo'
                                                    }
                                                    await saver.saveFile2(fileDetails2)
                                                }
                                                return;
                                            }
                                            const data2 = await ctx.reply(`${ctx.message.caption}\n\n#photo #file${result} #size${photo[1].file_size} \n${filename2.file_name} \n<b>sendFrom : </b><a href="tg://openmessage?user_id=${ctx.from.id}">${first_name(ctx)} ${last_name(ctx)}</a>`, {
                                                chat_id: config.LOG_CHANNEL,
                                                parse_mode:'HTML',
                                                disable_web_page_preview: true,
                                                disable_notification: true,
                                                reply_markup:{
                                                    inline_keyboard:[
                                                        [{text: `View File`, url: `https://t.me/${config.BOTUSERNAME}?start=${photo[1].file_unique_id}`}]
                                                    ]
                                                }
                                            })
                                            if(ctx.chat.type == 'private') {
                                                var exstension = photo[1].file_name;
                                                var regex = /\.[A-Za-z0-9]+$/gm
                                                var photext = exstension.replace(regex, '');
                                                fileDetails2 = {
                                                    file_name: photext,
                                                    userId:ctx.from.id,
                                                    file_id: photo[1].file_id,
                                                    caption: ctx.message.caption,
                                                    file_size: photo[1].file_size,
                                                    uniqueId: photo[1].file_unique_id,
                                                    messageId: data2.message_id,
                                                    type: 'photo'
                                                }
                                                await saver.saveFile2(fileDetails2)
                                            }
                                        }
                                    })
                                }
                            }catch(error){
                                await ctx.reply(`${messagebotnoaddgroup(ctx)}`)
                            }
                        }
                    })
                }
            }
        }
    }

})
