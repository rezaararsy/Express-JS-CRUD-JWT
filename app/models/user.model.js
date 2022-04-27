module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        nik: {
            type: Sequelize.STRING
        },
        no_hp: {
            type: Sequelize.STRING
        }
    });

    return User;
};