const mongoose =require('mongoose');
const Schema = mongoose.Schema
const loginSchema = new Schema({
  userName : {
    type : String
  },
  password :{
    type : String
  },
  secretKey : [],
  categories:[],
  productsId : {
    type : String
  },
  chatId : {
    type:String
},
  reportId:{
  type:String
},
  entryId:{
  type:String
}
})

const productSchema = new Schema({
  productName : {
    type : String
  },
  sellingPrice : {
    type : String
  },
  receivedPrice : {
    type : String
  },
  quantity : {
    type : Number
  },
  category : {
    type : String
  }
})

const productsArray = new Schema({
  products : [
    productSchema
  ]
})

const chatsSchema =new Schema({
  userName : {
    type : String
  },
  chats :[]
})

const fromSchema = new Schema({
  from : {
    type : String
  },
  fromTime :{
    type : String
  }
})

const toSchema = new Schema({
  to : {
    type : String
  },
  toTime : {
    type : String
  }
})

const chatHistory = new Schema({
      from : loginSchema,
      to : loginSchema,
      message:{
        type : String
      },
      time:{
        type : String
      }
})


const soldData = new Schema({
  category:{
    type:String
  },
  productName:{
    type:String
  },
  soldCount:{
    type:Number
  },
  receivedPrice:{
    type:Number
  },
  soldPrice:{
    type:Number
  },
  profit:{
    type:Number
  }
})

const entry = new Schema({
  serialNo:{
    type:Number
  },
  date:{
    type:String
  },
  Model:{
    type:String
  },
  customerName:{
    type:String
  },
  description:{
    type:String
  },
  contactNo:{
    type:String
  },
  status:{
    type:String
  },
  price:{
    type:String
  }
})

const entryList = new Schema({
  lists : []
})
const reports = new Schema({
  date : {
    type:String
  },
  soldData : []
})

const chatCollection = new Schema({
  chatsArchive : [chatHistory]
})

const reportsCollection = new Schema({
  reportsArchive: [reports]
})

 const LoginSchema = mongoose.model('Users',loginSchema);
 const ProductsSchema = mongoose.model('Products',productsArray)
 const ProductItemSchema = mongoose.model('ProductItemSchema',productSchema)
 const chatsArchive = mongoose.model('chatsArchive',chatCollection)
 const chatItem = mongoose.model('chatItem',chatsSchema)
 const chatItemHistory = mongoose.model('chatItemHistory',chatHistory)
 const reportsCollections = mongoose.model('reportsCollection',reportsCollection)
 const entryCollection = mongoose.model('entryCollection',entryList)

 module.exports = {reportsCollections,LoginSchema,ProductsSchema,ProductItemSchema,chatsArchive,chatItem,chatItemHistory,entryCollection}