const User = require('../models/user')
const {setUserId}=require('../service/auth')
const {v4:uuidv4} = require('uuid')
async function handelUserSignup(req, res) {
  try {
    const { name, email, password } = req.body;
    const user=await User.create({
      name:name,
      email:email,
      password:password,
    });

    return res.redirect('/')
  } catch (error) {
    console.log(error);
    
  }


}


async function handelsignIn(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email,password });
    if (!user) {
      return res.render('login', {
        error: 'Invalid email or password'
      })
    }
        const sessionId = uuidv4();
        // console.log(sessionId);
        setUserId(sessionId, user);
        res.cookie("sessionId", sessionId);
    return res.redirect("/")

  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  handelUserSignup,
  handelsignIn,
};