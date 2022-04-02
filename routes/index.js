var express = require('express');
var router = express.Router();
var twilio = require('twilio');

const accountSid = 'AC7a4719a31bc134c09f9df65e8cc5de47';
const authToken = '067ab6f1dee8dd67829797d6792b6a44';

router.post('/sms', function(req, res, next) {
  const msg = req.body.message;
  const number = req.body.number;
  const client = twilio(accountSid, authToken);
    client.messages
      .create({
         body: msg,
         from: '+14705237952',
         to: '+91'+ number
       })
      .then((message) =>{
        if(message.status==200){
          res.status(200);
          res.send({status:200,message:'Message Send'});
        }
      }).catch((error)=>{
        res.status(300);
        res.send({status:204,message:'Message Cannot send'});
        console.log(error);
      });

});

module.exports = router;
