const sequelize = require('./config/connection');

const { User, Cart } = require('./model');

sequelize.sync({ force: true }).then(async () => {
    // CRUD
    // Create
    const result = await User.create({
        username: 'test',
        password: 'changeme',
    });
    await User.create({
        username: 'test2',
        password: 'changeme',
    });

    await Cart.create({
        amount: 10,
        user_id: 1,
    });

    // Read
    const results = await User.findAll({
        where: {
            username: 'test',
        },
    });

    //console.log(results);

    const result2 = await User.findOne({
        include: [Cart],
        where: {
            id: 1,
        },
    });
    console.log(result2.get({ plain: true }));
    await result2.update({
        username: 'test3',
    });
    // Update
    await User.update(
        {
            username: 'test4',
        },
        {
            where: {
                id: 1,
            },
        },
    );

    // Delete
    await result2.destroy();
    await User.destroy({
        where: {
            id: 1,
        },
    });
    process.exit(0);
});
