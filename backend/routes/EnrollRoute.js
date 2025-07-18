import {Router} from 'express'

import EnrolledController from '../controller/EnrollController.js'

let router = Router()

router.get('/getEnrolled', EnrolledController.getEnrolled)
router.post('/createEnrolled', EnrolledController.createEnrolled)


export default router;