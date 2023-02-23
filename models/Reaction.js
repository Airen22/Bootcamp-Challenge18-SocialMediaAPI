const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {

        },
        reactionBody: {

        },
        username: {

        },
        createdAt: {

        }   
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;