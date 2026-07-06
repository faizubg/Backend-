const mongoose = require('mongoose');
const { stackTraceLimit } = require('../utils/errorResponse');
const { type } = require('node:os');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    strim: true,
    required: [true, 'Please add a course title']
  },
  description: {
    type: String,
    required: [true, 'Please add a course description']
  },
  Weeks: {
    type: String,
    required: [true, 'Please add the number of weeks']
  },
  Tuition: {
    type: Number,
    required: [true, 'Please add the tuition fee']
  },
  MinimumSkill: {
    type: String,
    required: [true, 'Please add the minimum skill level'],
    enum: ['beginner', 'intermediate', 'advanced']
  },
  ScholarshipAvailable: {
    type: Boolean,
    required: [true, 'Please add the number of available scholarships'],
    default: false
  },
  CreatedAt: {
    type: Number,
    required: [true, 'Please add the creation timestamp'],
    default: Date.now
  },
    bootcamp: {
        type: mongoose.Schema.ObjectId,
        ref: 'Bootcamp',
        required: true
    }
});

module.exports = mongoose.model('Course', courseSchema);