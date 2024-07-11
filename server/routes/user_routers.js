import express from "express";
import {getOtherUsersControllor, loginControllor, logoutControllor, registerControllor } from "../controller/usercontroller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router= express.Router();

router.post('/register',registerControllor)
router.post('/login',loginControllor)
router.get('/logout',logoutControllor)
router.get('/other',(isAuthenticated,getOtherUsersControllor))

export default router;