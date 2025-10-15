import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true, // This is database index
        lowercase: true, // Sanitize email to lower case
        trim: true, // Sanitize
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please fill a valid email address'],
    },
    age: {
        type: Number,
        required: [true, 'Age is required!'],
        min: [18, 'Age cannot be less than 18!'],
        max: [120, 'Age cannot be larger than 120!'],
        validate: {
            validator: function (value) {
                if (this.type === 'Teacher') return value >= 22;

                return true;
            },
            message: `Teacher age should be at least 22! {VALUE} is too low`,
        },
    },
    type: {
        type: String,
        required: true,
        enum: {
            values: ['student', 'teacher'],
            message: 'Invalid user type!',
        },
    },
    password: {
        type: String,
        required: true,
        minLength: [8, 'Password should be at least 8 characters long!'],
    },
});

// userSchema.path('password').validate(function () {

// });

const User = model('User', userSchema);

export default User;

