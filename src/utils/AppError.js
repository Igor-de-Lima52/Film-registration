<<<<<<< HEAD
class AppError{
  message;
  statusCode;

  constructor(message, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode;
  }
}

=======
class AppError{
  message;
  statusCode;

  constructor(message, statusCode = 400){
    this.message = message;
    this.statusCode = statusCode;
  }
}

>>>>>>> 6a4760d (Back-end finished)
module.exports = AppError;