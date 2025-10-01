import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');

const studentsDb = client.db('SoftUni-test');
const studentsCollection = studentsDb.collection('Students');

const students = await studentsCollection.find().toArray();

console.log(students);