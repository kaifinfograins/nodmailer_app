
const sendUserCreationEmail = require("../mail/sendAccountCreationEmail")




const emailQueueProcessor = async (job,done)=>{
    console.log(job.data.user)
    try {
        const{name,email} = job.data.user

      await sendUserCreationEmail({
        name,
        email
      })

        done()
    } catch (error) {
        console.log(error)
        throw error;    
    }
    

}

module.exports = emailQueueProcessor;