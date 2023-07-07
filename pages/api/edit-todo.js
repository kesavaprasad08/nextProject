import { MongoClient, ObjectId } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "PUT") {

    const data = {$set:{title:req.body.title, description:req.body.title,status:req.body.status}};
    // const reqBody =await JSON.stringify(data);
    // const data = JSON.stringify(req.body); 
    // console.log(data)    
    const filter =await {_id:new ObjectId(req.body.id)}
    const options = { upsert: true };
    const id = req.body.id;

    const client = await MongoClient.connect(
      "mongodb+srv://kesav:rollno1212@cluster0.cedis9y.mongodb.net/todos?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.updateOne(filter,data);

    client.close();

    res.status(201).json({ message: "Todo inserted!" });
  }
}

export default handler;
