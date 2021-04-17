const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
require("dotenv").config();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let ObjectId = require("mongodb").ObjectID;

// mongo db information

const uri = `mongodb+srv://nodemongo:${process.env.DB_PASS}@cluster0.vewnd.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const MongoClient = require("mongodb").MongoClient;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const admininfoCollection = client.db("cleanDB").collection("admininfo");
  const serviceCollection = client.db("cleanDB").collection("service");
  const orderCollection = client.db("cleanDB").collection("orders");
  const reviewCollection = client.db("cleanDB").collection("reviews");
    
  app.post("/createAdmin", (req, res) => {
    const newAdmin = req.body;
    
    
    admininfoCollection.insertOne(newAdmin)
    .then((result) => {
      res.send(result.insertedCount > 0);
    });
  });

  app.post('/addService', (req, res) => {
    const service = req.body;

    serviceCollection.insertOne(service)
    .then((result) => {
      res.send(result.insertedCount > 0 )
    })
  })

  // get all service 
   app.get('/service', (req, res) => {
        serviceCollection.find({})
        .toArray((err, documents) => {
            res.send(documents);
        });
    });

   // delete service 
   app.delete('/delete-service/:id', (req, res) => {
      // console.log(req.params.id);

    serviceCollection.deleteOne({_id: ObjectId(req.params.id)})
    .then((err, result) => {
        if(err){
        console.log('server response ', result)
      }
    })
   })

   // change service status 

   app.put('/change-status', (req, res) => {
    const status = req.body.status;
    const id = req.body._id;
    // console.log(id);
    orderCollection.updateOne(
      {_id: ObjectId(id)},
      {$set: {status: status}}
      )
    .then(result => {
      res.send(result.modifiedCount > 0)
    })
   })



 // get product by key
    app.get('/order/:id', (req, res) => {

      console.log(req.body)

        serviceCollection.find({ key: req.params.key })
        .toArray((err, documents) => {
            res.send(documents[0]);
        });
    });

    // post order
    app.post('/add-orders', (req, res) => {
      const order = req.body;
      // console.log(order)
      orderCollection.insertOne(order)
      .then((result) => {
        res.send(result.insertedCount > 0)
      })
    })

    // get all orders 

    app.get('/orders', (req, res) => {
      orderCollection.find({})
      .toArray((err, order) => {
        res.send(order);
      })
    })



    // change order status
    app.post('/setOrderStatus', (req, res) => {
      const data = req.body;
      console.log(data);
    })

    // add review
    app.post('/add-review', (req, res) => {
      const reviewData = req.body;
      reviewCollection.insertOne(reviewData)
      .then((result) => {
        res.send(result.insertedCount > 0 )
      })
    } )

    // get all review
    app.get('/reviews', (req, res) => {
      reviewCollection.find({})
      .toArray((err, documents) =>  {
        res.send(documents)
      })
    })
  
 
});

app.get("/", (req, res) => {
  res.send("<h3> backend server working </h3>");
});

app.listen(process.env.PORT || port);
