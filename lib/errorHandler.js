function errorHandler(error, req, res) {
  console.log('An error occurred');
  console.log(error);
  res.status(500).json({ message: 'A server error occurred. Please try again later.' });
}

module.exports = errorHandler;
