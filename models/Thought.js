const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {

        },
        createdAt: {

        },
        username: {

        },
        reactions: 
        [
            {
                // Array of nested documents created with the reactionSchema
            }
        ]      
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
    }
);

thoughtSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;