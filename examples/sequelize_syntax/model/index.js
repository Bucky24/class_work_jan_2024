const User = require('./User');
const Cart = require('./Cart');

User.hasMany(Cart, {
    foreignKey: 'user_id',
});

Cart.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = {
    User,
    Cart,
};