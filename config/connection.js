const { connect, connection } = require('mongoose');
require('dotenv').config();

connect(`mongodb+srv://erinpeifer:${process.env.MongoURI}.mongodb.net/SocialMediaAPI`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
