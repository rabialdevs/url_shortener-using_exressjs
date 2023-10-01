const { getUserId} = require('../service/auth')

async function restrictedLoginToUserOnly(req, res, next) { 
    const token = req.cookies?.sessionId;
    if (!token) return res.redirect("login");
    const user = getUserId(token);
    if (!user) return res.redirect("login");
    req.user = user;
    next();

}

async function cheakAuth(req, res,next) {
    const token = req.cookies?.sessionId;
    // if (!token) return res.redirect("login");
    const user = getUserId(token);
    // if (!user) return res.redirect("login");
    req.user = user;
    next();
  }





module.exports = { restrictedLoginToUserOnly,cheakAuth };