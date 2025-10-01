import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        required: true,
        min: [18, 'Age must be at least 18 years old!'],
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: 'Course',
    }
})

// Create Model

const Student = mongoose.model('Student', studentSchema);

export default Student;
