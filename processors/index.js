const Queue = require("bull")
const path = require("path")
const { REDIS_PORT, REDIS_URI } = require("../config/redisCredentials");


const emailQueue = new Queue('emailQueue',{
    redis:{ 
      port:REDIS_PORT,
       host:REDIS_URI
    }
  })

  emailQueue.process(path.join(__dirname,'emailQueueProcessor.js'))

  emailQueue.on('completed',(job)=>{
    console.log(`Completed #${job.id} Job`)
  })