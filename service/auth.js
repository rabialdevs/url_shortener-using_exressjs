// const userIdToSessionMap = new Map();
const jwt = require('jsonwebtoken')
const secret ="@#%aNonYmOus@89A!&34";
function setUserId(user) {
  // userIdToSessionMap.set(id, user);
  return jwt.sign({
    _id: user._id,
    email: user.email,
  
  },secret)



  
}
function getUserId(token) {
  // return userIdToSessionMap.get(id);
  if (!token) return null;
  return jwt.verify(token,secret);
}

module.exports = {
  setUserId,
  getUserId
}

