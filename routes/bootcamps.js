 const express = require('express');
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } = require('../controllers/bootcamps');

// include other resource routers
const courseRouter = require('./courses');


//where we initialize the router
 const router = express.Router();

 // Re-route into other resource routers
router.use('/:bootcampId/courses', courseRouter);




router
.route('/')
.get(getBootcamps)
.post(createBootcamp);

router
.route('/:id')
.get(getBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp);

 module.exports = router;