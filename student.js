const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: { type: Number },
    classesEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Class' }]
});
module.exports = mongoose.model("Student", studentSchema);
