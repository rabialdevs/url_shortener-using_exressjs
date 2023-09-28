const express = require('express');
const router = express.Router();
const { handelUserSignup, handelsignIn } = require("../controllers/user");



router.post('/', handelUserSignup)
router.post("/login", handelsignIn);



module.exports = router;