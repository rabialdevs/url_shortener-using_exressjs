const bodyParser = require("body-parser");
const urlRoutes = require('express').Router(); 
const {
  handelGenerateNewShortUrl,
  getOriginalUrl,
  getAnalyticsShortById,
} = require("../controllers/url");
urlRoutes.post('/url', bodyParser.json(), handelGenerateNewShortUrl);
urlRoutes.get("/:shortId", getOriginalUrl);
urlRoutes.get("/analytics/:shortId", getAnalyticsShortById);









module.exports = urlRoutes;


