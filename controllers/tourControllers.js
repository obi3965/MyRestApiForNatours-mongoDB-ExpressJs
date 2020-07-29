const Tour = require ('../models/tourModel');



exports.allTour = async (req, res, next) => {
    try {
        let allTours = await Tour.find({})
        res.status(200).json({
            status:'Page created',
            data:{
               tour:allTours
            }
            
        })
    } catch (error) {
      res.status(404).json({
      status: 'Page Not Found' + error,
      message: error
    });  
    }
    
  };


  exports.createTour = async (req, res) => {
    try {
      // const newTour = new Tour({})
      // newTour.save()
  
      const newTour = await Tour.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };


//   exports.updateUser = async (req,res)=>{
//     let id = req.params.id
//     try {
//         let updatedUser = await User.findByIdAndUpdate({_id: id}, req.body,{
//             new:true
//         })
//         res.status(200).json({
//             updateUsers:updatedUser
//         })
//     } catch (error) {
//         res.status(500).json(error)
//     }
//   }

//   exports.deleteUser = async(req,res) =>{
      
//     let id = req.params.id
//     try {
//         let deleteUser = await User.findOneAndDelete({_id: id})
//         res.status(200).json({
//             status:'user Deleted',
//             deletedUser: deleteUser

//         })
//     } catch (error) {
//         res.status(500).json({
//             status:'fail to delete user',
//               message:error
//         })
//     }
//   }


//   exports.getProfile = async (req,res)=>{
     
//       try {
//           let userProfile = await User.findById(req.params.id)
//           if(!userProfile){
//               res.status(404).json({
//                   status:'user profile not found',
//                   message:error
//               })
//           }
//           return res.status(200).json({
//             status:'user profile is here',
//             userProfiles:userProfile
//         })
//       } catch (error) {
//           res.status(500).json({
//               status:'user profile not found',
//               message: error
//           })
//       }
//   }