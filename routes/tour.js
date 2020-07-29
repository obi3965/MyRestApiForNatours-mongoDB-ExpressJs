const express = require('express')

const tourControllers = require('../controllers/tourControllers')



const router = express.Router()

router
  .route('/')
   .get(tourControllers.allTour)
   .post(tourControllers.createTour)

  
  // router
  // .route('/:id')
  // .get(productControllers,singleTour)
  // .patch(productControllers,updateTour)
  // .delete(productControllers,deleteTour)

module.exports = router
