const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const LocalStrategy = require('passport-local').Strategy
const constants = require('./config/main')
const User = require('./models/user.model')

// JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromHeader('authorization'),
      secretOrKey: `${constants.JWT_SECRET}`
    },
    async (payload, done) => {
      try {
        // Find the user specified in token
        const user = await User.findById(payload.sub)

        // Handle if user don't exist
        if (!user) {
          return done(null, false)
        }

        // Otherwise, return user
        done(null, user)
      } catch (err) {
        done(err, false)
      }
    }
  )
)

// Local Strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      // Find user by username
      const user = await User.findOne({ username })

      // No user found
      if (!user) {
        return done(null, false)
      }
      console.log('user', user)

      // Check if password correct
      const isMatch = user.isValidPassword(password)

      // Handle if password is not correct
      if (!isMatch) {
        return done(null, false)
      }

      // Return user
      done(null, user)
    } catch (err) {
      done(err, false)
    }
  })
)
