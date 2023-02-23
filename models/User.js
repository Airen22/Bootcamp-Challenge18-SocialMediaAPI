const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
    username: {

    },
    email: {
        
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]},
    {
        toJSON: {
            virtuals: true,
        },
        Id: false,
    }
);

userSchema
    .virtual('freindCount')
    .get(function () {
        return this.friends.length;
    });

const User = model('user', userSchema);

module.exports = User;
