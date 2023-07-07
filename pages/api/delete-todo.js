import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  if (req.method === "DELETE") {

    // const data = {$set:{title:req.body.title, description:req.body.title,status:req.body.status}};
    // const reqBody =await JSON.stringify(data);
    // const data = JSON.stringify(req.body); 
    // console.log(data)    
    const filter =await {_id:new ObjectId(req.body)}
    // const options = { upsert: true };
    // const id = req.id;

    const client = await MongoClient.connect(
      "mongodb+srv://kesav:rollno1212@cluster0.cedis9y.mongodb.net/todos?retryWrites=true&w=majority"
    );
    const db = client.db();

    const todosCollection = db.collection("todos");

    const result = await todosCollection.deleteOne(filter);

    client.close();

    res.status(201).json({ message: "Todo deleted!" });
  }
}

export default handler;
