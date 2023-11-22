import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const url = `mongodb+srv://${process.env.DB_DATABASE}:${process.env.DB_PASSWORD}@cluster0.ehrl3hp.mongodb.net/?retryWrites=true&w=majority`;

const options = { useNewUrlParser: true };

let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
