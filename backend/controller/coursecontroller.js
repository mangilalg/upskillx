import Course from '../models/coursemodel.js'

const coursecontroller = {

    async getAllCourse(req, res) {

        try {
         let allcoursesdata = await Course.find({});
         res.json(allcoursesdata)
      }
      catch(err) {
        res.status(500).json({message:err.message})
      }
    },

    async getCourseid(req, res) {
        try{
           let coursesid = await Course.findById(req.params.cid);
           res.json(coursesid)
        }
        catch(err) {
            res.status(500).json({message:err.message});
        }
    },

        async createCourses(req, res) {
            let {name, poster, duration, price, description } = req.body;
            
            let newCourses = new Course({
            name, 
            poster, 
            duration, 
            price, 
            description
            })

        try{
        //  let course = new Course(req.body); 
          let Savedcourse = await newCourses.save();
           res.json(Savedcourse)
        }
        catch(err) {
            res.status(500).json({message:err.message});  //frontend ko ..
        }
    },


    async updateCourse(req, res) {
        try{
            let updatecourse = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true});
            res.json(updatecourse)
        }
        catch(err) {
            res.status(500).json({message:err.message});
        }
    },

  async deleteCourse(req, res) {
      try{
         let deletecourse = await Course.findByIdAndDelete(req.params.id);
         res.json(deletecourse)
      }
      catch(err) {
          res.status(500).json({message:err.message});
      }
  },
      
}

export default coursecontroller;