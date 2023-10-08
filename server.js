const app = require('./app');

const mongoose = require('mongoose');

const DB_HOST = "mongodb+srv://Kseniya:Mo25101981@cluster0.jihsow2.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
.then(() => {
  app.listen(3000, () => {
    console.log("Database connection successful")
  })
  
})