const amqp = require('amqplib/callback_api');

let messages = [
  "El punk ha mort", 
  "El Front End és més fàcil", 
  "La terra és plana", 
  "La curiositat va natar el gat", 
  "L'Angular no mola", 
  "El Vue no té futur", 
  "Aquest missatge, potser, és diferent a l'anterior", 
  "Qui fa el que pot,..."
];
let randomNumber = Math.floor( Math.random() * messages.length);
let randomMessage = messages[randomNumber];

amqp.connect('amqp://localhost', function(error, connection) {
  if (error) {
    throw error;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    let queue = 'node_queue';
    let msg = randomMessage;

    channel.assertQueue(queue, {
      durable: true
    });
    channel.sendToQueue(queue, Buffer.from(msg), {
      persistent: true
    });
    console.log("Sent '%s'", msg);
  });
  setTimeout(function() {
    connection.close();
    process.exit(0)
  }, 500);
});