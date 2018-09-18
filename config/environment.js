const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/origin-coffee';
const port = process.env.PORT || 4000;

module.exports = {
  dbUri,
  port
};
