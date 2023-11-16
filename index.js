require('dotenv').config()
const discord=require('discord.js')
const client=new discord.Client({
    intents:['GuildMembers',
    'Guilds',
    'GuildInvites',
]
})
client.login({token:process.env.LOGINTOKEN})
client.on('guildMemberAdd',(member)=>{
    member.roles.add('1160843235112001568')
})