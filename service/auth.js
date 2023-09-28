const userIdToSessionMap = new Map();
function setUserId(id, user) {
  userIdToSessionMap.set(id, user);
  
}
function getUserId(id) {
  return userIdToSessionMap.get(id);
}

module.exports = {
  setUserId,
  getUserId
}