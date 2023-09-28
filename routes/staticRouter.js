const express = require('express');
const router = express.Router();
const Url = require("../models/url.js");
router.get('/', async(req, res) => {
  const allUrls = await Url.find({});

  
  res.render('home',{allUrls: allUrls});
})











module.exports=router;