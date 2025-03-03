const jwt = require("jsonwebtoken");
const { confsecretList } = require('../config/secret.js');

// פונקצית מידל וואר שבודקת טוקן
// middleware
exports.auth = async(req,res,next) => {
  let token = req.header("x-api-key")
  if(!token){
    return res.status(401).json({msg:"You need to send token to this endpoint url 66666"})
  }
  try{
    // מנסה לפענח את הטוקן ויכיל את כל המטען/מידע שבתוכו
    // ובמיוחד את האי די
    let tokenData = jwt.verify(token, confsecretList.TOKEN_SECRET);
    // דואג להעיבר את המאפיין של הטוקן דאטא לפונקציה הבאה בשרשור
    // שאנחנו מזמנים בנקסט ככה שתיהיה חשופה למידע
    // במקרה הזה האיי די שפענחנו מהטוקן
    req.tokenData = tokenData
    // next() -> אם הכל בסדר לעבור לפונקציה הבאה שרשור
    next()
  }
  catch(err){
    console.log(err); // Log the error to understand the issue
   return res.status(401).json({msg:"Token not valid or expired 77777777"})
  }
}