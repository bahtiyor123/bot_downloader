// index.js
const { Api } = require("telegram")
const { betterConsoleLog } = require("telegram/Helpers")
const express  = require('express')
const app = express()
const {Snake,} = require("tgsnake")
 //importing the modules.
const bot = new Snake({ 
  apiHash : "3b887a6b3eea92a12cd983f8c85d6373", 
  apiId : 14544133, 
 
}) 


const port = process.env.PORT||5100
async function start () {
  app.listen(port,() => console.log('Server is working'))
  await bot.run()


  setInterval(async () => {
    const result = await bot.client.invoke(
      new Api.account.UpdateStatus({
        offline: false,
      })
    )
  
    console.log(result)
  },3000)
  

}


start()

app.get('/',(req,res) => {
  res.send('working')
})




bot.on('message',  async ctx => {
   if(ctx.from.id === 5139030360n) {
      if(ctx.text == 'isOK') {  
          ctxp.reply('sdsd')
      }
     try {
      const arr = ctx.text.split('MyCustomId')
      await ctx.telegram.sendDocument('testelyorBot',arr[0],{download:true,caption:arr[1],fileName:`${arr[2]}.mp4`},)
      
     }
     catch(e) {
       console.log(e)
     }
  
   }
})
