const { User } = require('../models');

const users = [
    {
        username: 'Aidan',
        email: 'test@test.com',
        password: 'pass123',
        location: 'Philadelphia',
    },
    {
        username: 'Joey',
        email: 'test2@test.com',
        password: 'pass123',
        location: 'Philadelphia',

    },
    {
        username: 'Molly',
        email: 'test3@test.com',
        password: 'pass123',
        location: 'Chalfont',
    },
    {
        username: 'Nazik',
        email: 'test4@test.com',
        password: 'pass123',
        location: 'Chalfont',
    },
];

const seedUser = () => User.bulkCreate(users, {individualHooks: true});

module.exports = seedUser;