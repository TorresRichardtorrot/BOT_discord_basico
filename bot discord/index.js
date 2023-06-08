require('dotenv').config();
const axios = require('axios')
const { Client,GatewayIntentBits } = require('discord.js');

const client = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});

client.on('ready',()=>{
    console.log('** Bot listo **')
})

client.on('messageCreate',async(message)=>{
    if(message.content ==='ping'){
        message.reply({
            content:'pong'
        })
        
    }else if(message.content === 'hola'){
        message.reply({
            content:'Bienvenido a nuestro canal',
        })
    }else if(message.content === 'dime una frase'){
        let resp = await axios.get('https://api.quotable.io/random');
        const quote = resp.data.content;

        message.reply({
            content:quote,
         })
    }
})

client.login(process.env.DISCORD_BOT_ID)