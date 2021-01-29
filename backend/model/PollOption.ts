import { DataTypes, Model } from 'sequelize'
const sequelize = require('../config/database')

class PollOption extends Model {}

PollOption.init(
    {
        pollId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAnswer: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        createAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        modelName: 'PollOption',
    }
)

module.exports = PollOption