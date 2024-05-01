const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Trip extends Model {}

Trip.init(
    {
        trip_budget: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        group_size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'travellers',
                key: 'id',
            },
            unique: false,
        },
        location_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'locations',
                key: 'id',
            },
            unique: false,
        },
    },
    {
        sequelize,
        modelName: 'trip',
    },
);

module.exports = Trip;