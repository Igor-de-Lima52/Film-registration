<<<<<<< HEAD
const createUsers = `
  CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  avatar VARCHAR NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`

=======
const createUsers = `
  CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  avatar VARCHAR NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`

>>>>>>> 6a4760d (Back-end finished)
module.exports = createUsers;