const jwt = require('jsonwebtoken')
const constants = require('../config/main')

const authenticate = async accessToken => {
  try {
    const user = await User.findOne({ accessToken })
    if (!user) {
      throw new Error('No user matching token found')
    }

    jwt.verify(accessToken, constants.JWT_SECRET, (err, decoded) => {
      if (decoded !== undefined) {
      } else {
        throw new Error('Invalid token')
      }
    })

    return { user, accessToken, token }
  } catch (err) {
    throw err
  }
}

module.exports = {
  authenticate
}
