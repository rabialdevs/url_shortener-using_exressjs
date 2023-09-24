const Url = require('../models/url.js');
const shortid = require('shortid');

async function handelGenerateNewShortUrl(req, res) {
  const  body  = req.body;
  const shortId = shortid();
  if (!body == '') {
       await Url.create({
         shortUrl: shortId,
         redirectUrl:body.url,
         visitHistory: [],
       });
       res.status(201).json({ shortUrl: shortId });

      };
      return res.status(401).json({ error: 'url must not be empty' })
      
}
async function getOriginalUrl(req, res) {
  const  shortUrl  = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    { shortUrl } ,
    {
      $push: {
        visitHistory: {
          timestamp:Date.now()
        },
      },
    }
  );
  console.log(shortUrl);
  console.log(entry);
  if (!entry.redirectUrl=='') {
    res.json(entry.redirectUrl);
  } else {
    res.status(404).json({ error: 'url not found' });
  }
}

async function getAnalyticsShortById(req, res) { 
  const  shortUrl  = req.params.shortId;
  const entry = await Url.findOne({ shortUrl });
  if (entry.visitHistory.length>-1) {
    res.json({visitHistory: entry.visitHistory,totalVisits: entry.visitHistory.length});
  } else {
    res.status(404).json({ error: 'url not found' });
  }

}



















module.exports = {
  handelGenerateNewShortUrl,
  getOriginalUrl,
  getAnalyticsShortById,
};