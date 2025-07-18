// import { Router } from 'express';
// import passport from 'passport';  // ✅ Import passport
// import usercontroller from '../controller/usercontroller.js';
// import jwt from 'jsonwebtoken'

// let router = Router();

// router.get('/', usercontroller.getAllUser);
// router.get('/:id', usercontroller.getUserById);

// router.post('/login', usercontroller.loginUser);

// // Google Auth Routes
// router.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));  //profile or email le lenge

// router.get("/auth/google/callback", passport.authenticate("google", { failureRedirect: "/login" }), 
//     (req, res) => {
//         console.log("Google Auth Successful! Redirecting...");
//         const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn:'30d'}); 
//         res.redirect(`http://localhost:5500/login?token=${token}`); // Redirect to frontend after login
//     }
// );

// router.post('/signup', usercontroller.createUser);
// router.put('/:id', usercontroller.updatedUser);
// router.delete('/:id', usercontroller.deletedUser);

// export default router;/

import { Router } from 'express';
import passport from 'passport';
import usercontroller from '../controller/usercontroller.js';
import jwt from 'jsonwebtoken';

const router = Router();


router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get("/auth/google/callback", 
    passport.authenticate("google", { failureRedirect: "/login" }),
    async (req, res) => {
      if (!req.user) {
        return res.status(401).json({ message: "Authentication failed" });
      }
  
      let token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: "30d" });
  
      console.log("Generated Token:", token);  // ✅ Debugging
      res.redirect(`http://localhost:5173/login?token=${token}`);
    }
  );

// Other routes
router.get('/', usercontroller.getAllUser);
router.get('/:id', usercontroller.getUserById);
router.post('/login', usercontroller.loginUser);
router.post('/signup', usercontroller.createUser);
router.put('/:id', usercontroller.updatedUser);
router.delete('/:id', usercontroller.deletedUser);

export default router;

