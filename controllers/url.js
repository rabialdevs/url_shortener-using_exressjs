const Url = require("../models/url.js");
const shortid = require("shortid");

async function handelGenerateNewShortUrl(req, res) {
  const body = req.body;
  console.log(body.url);
  const shortId = shortid();
  if (!body == "") {
    await Url.create({
      shortUrl: shortId,
      redirectUrl: body.url,
      visitHistory: [],
    });
    return res.status(201).render("home", { shortUrl: shortId });
  }
  return res.status(401).json({ error: "url must not be empty" });
}
async function getOriginalUrl(req, res) {
  const shortUrl = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    { shortUrl },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  // console.log(shortUrl);
  console.log(entry);
  if (entry.redirectUrl) {
     return res.redirect(entry.redirectUrl);
  } else {
    res.status(404).json({ error: "url not found" });
  }
}

async function getAnalyticsShortById(req, res) {
  const shortUrl = req.params.shortId;
  const entry = await Url.findOne({ shortUrl });
  if (entry.visitHistory.length > -1) {
    res.json({
      visitHistory: entry.visitHistory,
      totalVisits: entry.visitHistory.length,
    });
  } else {
    res.status(404).json({ error: "url not found" });
  }
}

async function getAllUrls(req, res) {
  const entries = await Url.find({});
  // res.json(entries);
  // res.render('home', { entries })
  // return res.end(
  //   `<html>
  //   <head>
  //   <body>
  //   <ol>
  //   ${entries.map((entry) => {
  //     return `<li>${entry.shortUrl}-${entry.redirectUrl}-${entry.visitHistory.length}</li>`;
  //   })}
  //   </ol>
  //   </body>
  //   </head>
  //   </html>`
  // );
}

module.exports = {
  handelGenerateNewShortUrl,
  getOriginalUrl,
  getAnalyticsShortById,
  getAllUrls,
};
