import DiscordJS, { Intents } from 'discord.js'
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
    if(message.content === 'luiz'){
        message.reply({
            content: 'luiz gay',
        })
    }
})

client.login(process.env.TOKEN)

// para executar o bot escreva no terminal: 'ts-node index.ts'