import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  filename: String,
  mimetype: String,
  size: Number,
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});
//hellooo
const Resume = mongoose.models.Resume || mongoose.model('Resume', resumeSchema);
export default Resume;
