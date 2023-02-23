const { connect, connection } = require('mongoose');

connect('mongodb+srv://erinpeifer:Hoverv!sits0ur@cluster0.2fdaloq.mongodb.net/SocialMediaAPI', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
