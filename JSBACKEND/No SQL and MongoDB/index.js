import mongoose from 'mongoose';
import Student from './models/Student.js';
import Course from './models/Course.js';

// Connect to DB
const atlasUrl = 'mongodb+srv://pacopeisa1997_db_user:F7jCJLsI5o6wL1Tj@cluster0.rewmoz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const localhostUrl = 'mongodb://localhost:27017';
try {
    await mongoose.connect(localhostUrl, { dbName: 'studentsDb' });
    console.log('MongoDB Connected!')
} catch (err) {
    console.log('Cannot connect', err.message);
}

//console.log(students);

// Create a Student method #1
//const createdStudent = await Student.create({name:'Peshko', age: 22});

// Create a Student method #2
//created on memore level
// const newStudent = new Student({name:'Peshko2', age: 26});
// await newStudent.save();

// Read all students
// const allStudents = await Student.find();

// Read filtered Students
// const allStudentsTwo = await Student.find({age:22});

// Read by id

// const studentElite = await Student.findById('68dac37d085678ae6e013de5')
// console.log(studentElite)

// Update specific student
// await Student.findByIdAndUpdate('68dac37d085678ae6e013de5', {name: 'Misho', age: 21});

// Update the first that meets the criteria
// await Student.findOneAndUpdate({age: 21}, {name: 'Zhoro', age: 44});

// UpdateMany (Not recommended)

// await Student.updateMany({age: 19}, {age: 18})

// Delete
// await Student.findByIdAndDelete('68dac37d085678ae6e013dde');

// Get all students with age above 30 gte greater than or equal / gt greater than
// const oldStudents = await Student.find({age: {$gte: 25}});
// console.log(oldStudents)

// Get specific students by name
// const peshoLikeStudents = await Student.find({name: {$in: ['Pesho', 'Peshko2', 'Peter']}});
// console.log(peshoLikeStudents)

// Complex query with mongoose

// const complexResult = await Student.find()
//     .where({name: 'Peter'})
//     .and({age:19});
// console.log(complexResult)

//mongodb sort students 
// const sortedStudents = await Student.find({}, {}, {sort: {age: 1}});
// console.log(sortedStudents)

//mongoose sort style
// const sortedStudents = await Student.find().sort({age:1});
// console.log(sortedStudents);

// const secondStudentsPage = await Student.find().sort({name: 1}).skip(5).limit(5);
// console.log(secondStudentsPage);

// Create cource

// await Course.create({name: 'Biology'});

// Create new student with course ref

// await Student.create({
//     name: 'Ivcho',
//     age: 29,
//     course: '68dd0666c899476e1ca26dc3'
// });

// Retrieve student with course

const studentInCourse = await Student.findOne().exists('course').populate('course');
console.log(studentInCourse.course.name)

