const leadersModel = (sequelize, DataTypes) => {
    const Leaders = sequelize.define('Leaders', {
        unselected: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        selected: {
            type: DataTypes.ARRAY(DataTypes.TEXT)
        },
        current: {
            type: DataTypes.STRING
        },
        nextweek: {
            type: DataTypes.STRING
        },
        nextDrawDate: {
            type: DataTypes.DATE
        }
    }, { freezeTableName: true });

    return Leaders;
};

export default leadersModel;
