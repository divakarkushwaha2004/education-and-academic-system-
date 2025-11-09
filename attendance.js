const attendanceSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    date: { type: String, required: true },
    status: { type: String, enum: ['present', 'absent', 'late'], required: true }
});
module.exports = mongoose.model('Attendance', attendanceSchema);
