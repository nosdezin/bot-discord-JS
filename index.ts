import DiscordJS, { Intents, Message } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('O bot está pronto');    
})

client.on('messageCreate', (message) => {
    if(message.content === 'Olá'){
        message.reply({
            content: 'Fala fiote'
        })
    }
})
client.on('channelCreate', (canal) => {
    console.log(`Canal criado: ${canal.name}`)  
})

client.login(process.env.TOKEN)