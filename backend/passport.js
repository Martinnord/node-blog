const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const { ExtractJwt } = require('passport-jwt')
const constants = require('./config/main')
const User = require('./models/user.model')

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
