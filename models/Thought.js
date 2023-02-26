const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const { format_date } = require('../utils/helpers');


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280
        },

        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            get: timestamp => format_date(timestamp)
          },
        reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;