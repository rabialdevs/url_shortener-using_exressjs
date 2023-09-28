const urlRoutes = require('express').Router(); 
const {
  handelGenerateNewShortUrl,
  getOriginalUrl,
  getAnalyticsShortById,
  getAllUrls,
} = require("../controllers/url");
urlRoutes.post('/url',handelGenerateNewShortUrl);
urlRoutes.get("/url/:shortId", getOriginalUrl);
urlRoutes.get("/analytics/:shortId", getAnalyticsShortById);
urlRoutes.get('/test', getAllUrls);








module.exports = urlRoutes;


