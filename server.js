const mongoose = require('mongoose');

// const app = require('./app');

//  U1XmmpMOEwO9HXnj

const DB_HOST = "mongodb+srv://Oksana:U1XmmpMOEwO9HXnj@cluster0.oglybn2.mongodb.net/contacts-reader?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
.then(() => 
// app.listen(3000)
console.log('Alles good')
)
.catch(error => {
  console.log(error.message);
  process.exit(1)
});
