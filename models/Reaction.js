const { Schema, model } = require('mongoose');
const format_date = require('../utils/helpers');

const reactionSchema = new Schema(
    {
        reactionID: {
          type: Schema.Types.ObjectId,
        },
        reactionBody: {
          type: String,
          required: true,
          maxLength: 280
        },
        username: {
          type: String,
          required: true
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: timestamp=> format_date(timestamp)
        }   
    },
    {
        toJSON: {
          virtuals: true,
          getters: true,
        },
        id: false,
      }
);

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;