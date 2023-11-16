require('dotenv').config()
const express=require('express')
const app=express()
const discord=require('discord.js')
const client=new discord.Client({
    intents:['GuildMembers',
]
})
client.login(process.env.LOGINTOKEN)
client.on('guildMemberAdd',(member)=>{
    member.roles.add('1160843235112001568').then(()=>{console.log('new member!')}).catch((err)=>{console.log(err)})
    console.log('invite!')
})
app.listen(8080)
app.route('/').get((req,res)=>{
    res.send('bot working!')
})