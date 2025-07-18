import Enrolled from "../models/Enrolled.js"

const EnrolledController = { 

    async getEnrolled(req,res) {
        try{
            // let {id} = req.body;
            let id = req.user.id;
            let enrolled = await Enrolled.find({userId: id}).populate('courseId')
            res.json(enrolled)
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
    },


    async createEnrolled(req,res) {
        try{
            // let {userId,courseId} = req.body;
            let {courseId} = req.body;
            let userId = req.user.id;
            let enrolled = new Enrolled({userId, courseId})
            await enrolled.save()
            res.json(enrolled) 
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
    }
}

export default EnrolledController;