const { JsonWebTokenError } = require("jsonwebtoken")

const jwt = require('jsonwebtoken')
const keyGenerate = require('./key-generate')

const secret = keyGenerate(64)
console.log(secret)

const token = jwt.sign({
  client: {
    name: 'mamanager'
  }
}, secret)

console.log(token)

try {
  jwt.verify(token, secret)
  console.log("Succesful authentication")
} catch (err) {
  console.log(err)
}

