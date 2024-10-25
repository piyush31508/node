require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRouter = require('./routes/product');
const cors = require('cors');
const path = require('path');
// console.log('env', process.env.DB_PASSWORD);
const server = express();

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Connected  to the database');
}


// Middleware
server.use(cors());
server.use(express.json())
server.use('/products', productRouter.router);
server.use(express.static(path.resolve(__dirname, process.env.DIR)));
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,`build`,`index.html`));
})

server.listen(process.env.PORT,()=> {
    console.log('listening on 8000')
});