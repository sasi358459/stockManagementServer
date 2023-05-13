const { Server } = require("socket.io");
const {environment} = require('./environment');
const path = require('path');
const {getAllReports,reportGeneration,updateCategories,chatEmitted,chattingUsers,createUserCollection,
  postProduct,getAllProducts,deleteProducts,editProducts,updateLogin,getAllUsers} = require('./controller/controller.js');
const express = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const hostingServer =http.createServer(express);
const io = new Server(hostingServer,{
  cors: {
    origin: '*',
  }
});

const init = async () => {
  express.use(
    cors({
      origin: '*',
    })
  );
  express.use(bodyParser.urlencoded({ extended: false }));
  express.use(bodyParser.json());
  mongoose.set("strictQuery", true);
  dbConnect();
};

async function dbConnect() {
  try {
    const url = environment.mongoDBUrl
      ? environment.mongoDBUrl
      : "mongodb+srv://sasi358459:Sasi358459@cluster0.h2vvopf.mongodb.net/?";
    const dbConnect = await mongoose.connect(url, {});
    if (dbConnect) {
      console.log("mongo connected");
      setRoutes();
      await hostServer();
    }
  } catch (err) {
    console.log(err);
  }
}
function setRoutes() {
  express.get("/getAllUser",getAllUsers);
  express.get("/getAllReports/:id",getAllReports);
  express.get("/getAllProducts/:id",getAllProducts);
  express.post("/login", createUserCollection);
  express.put("/updateUser/:id", updateLogin);
  express.post("/products", postProduct);
  express.put(
    "/editProducts/:productsId/:productItemIndex",
    editProducts
  );
  express.delete(
    "/deleteProducts/:productsId/:productItemIndex",
    deleteProducts
  );
  express.put('/updateCategories/:id',updateCategories)
  express.post('/reports/:id',reportGeneration)
}

async function hostServer() {
  const port = environment.PORT ? environment.PORT : 3000;
  hostingServer.listen(port, () => {
    console.log(`server started at ${port}`);
  });
  await socketConnection();
}

async function socketConnection() {
  io.on("connection", (socket) => {
    console.log("user is connected");
    socket.on('message',(data)=>{
      chatEmitted(data).then((value=>{
        socket.emit('notification',value)
      }))
    }) 
    
    socket.on('chatting-users',(usersInChat)=>{
      chattingUsers(usersInChat).then((value)=>{
        socket.emit('notification',{error:false,message:'Users Connected',body:value})
      })
    })

  });
}
init();