'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      photo: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      metaId: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      googleId: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },

      verifyToken: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  },
};
