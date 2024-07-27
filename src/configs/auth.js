<<<<<<< HEAD
module.exports = {
  jwt: {
    secret: "default",
    expiresIn: "1d"
  }
=======
module.exports = {
  jwt: {
    secret: process.env.AUTH_SECRET || "default",
    expiresIn: "1d"
  }
>>>>>>> 6a4760d (Back-end finished)
}