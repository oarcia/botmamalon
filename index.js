const {Client,RichEmbed}=require('discord.js');
const client = new Client();

client.on('ready',()=>{
    console.log(`Mi Bot esta despierto:${client.user.tag}`);
    if(client.user.presence.status === 'dnd'){
        console.log('el bot esta invernando',client.user.presence.status);
    }else{
        console.log('el bot esta activo o pilas');
    }
    const testChannel = client.channels.find(channel => channel.name === 'canal de gamers uaem');
        console.log('el bot cherry esta activo');
});
client.on('message',async message =>{
    console.log(message);
    if(message.content === 'ping'){
        message.reply('pong');
    }
    if(message.content === 'hola'){
        message.channel.send(`hola ${message.author} saludos chavos`);
    }
    if(message.content.includes('jotillo')){
        message.channel.send(`Oye ${message.author} no se permiten decir groserias`)
    }
    if(message.content === 'cherrybit'){
        message.channel.send('https://cherrybit.com.mx');
        message.channel.send('https://github.com/oarcia/workshopUaem');
    }
      if(message.content === '!pretty'){
        const embed = new RichEmbed()//son mensajes concatenado bonitos
            .setTitle('Pretty Message')//pones el mensaje esto muestras
            .setColor('#f46611')//este el color 
            .setAuthor('Cherryman','https://www.pngfind.com/pngs/m/142-1428832_homero-png-homer-wearing-a-dress-transparent-png.png')
        //    .addField('Visit de Url ','https://cherrybit.com.mx')
        //    .addField('Sommethin one','lorem Ipsum')
        //    .addField('Sommethin one','lorem Ipsum')
        message.channel.send(embed);
    };
      if(message.content === '!clear'){
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('message deleted')
    };
    
});
client.login('NjUwMDA0NzA4MjUyOTc1MTEz.XeFCQg.cyJokYM043FEsNcPrvwRdReiYno');

