const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    fatherName: {
        type: String,
        required: [true, 'Please enter father name']
    },
    dob: {
        type: Date,
        required: [true, 'Please enter date of birth']
    },
    branch: {
        type: String,
        required: [true, 'Please enter branch']
    },
    rollNo: {
        type: String,
        required: [true, 'Please enter roll number'],
        unique: true
    },
    section: {
        type: String,
        required: [true, 'Please enter section']
    },
    address: {
        type: String,
        required: [true, 'Please enter address']
    },
    mobileNo: {
        type: String,
        required: [true, 'Please enter mobile number']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Password must be at least 6 characters'],
        select: false
    }
}, {
    timestamps: true
});

// Encrypt password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Compare password method
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
