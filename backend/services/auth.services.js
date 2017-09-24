// const passport = require('passport')
// const LocalStrategy = require('passport-local')
//
// const user = require('../models/user.model')
//
// const localStrategy = new LocalStrategy(async (username, password, done) => {
//   try {
//     const user = await user.findOne({ username })
//
//     if (!user) {
//       return done(e, false)
//     } else if (user.password !== password) {
//       return done(null, false)
//     }
//
//     return done(null, user)
//   } catch (e) {
//     return done(e, false)
//   }
// })
//
// passport.use(localStrategy)
//
// module.exports = {
//   localStrategy
// }
