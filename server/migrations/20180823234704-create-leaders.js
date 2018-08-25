module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('Leaders', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        unselected: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
        selected: {
            type: Sequelize.ARRAY(Sequelize.TEXT)
        },
        current: {
            type: Sequelize.STRING
        },
        nextweek: {
            type: Sequelize.STRING
        },
        nextDrawDate: {
            type: Sequelize.DATE
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }),
    down: queryInterface => queryInterface.dropTable('Leaders')
};
