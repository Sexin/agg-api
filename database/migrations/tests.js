'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        const { INTEGER, DATE, STRING, TEXT } = Sequelize;
        await queryInterface.createTable('tests', {
            id: {type: INTEGER, primaryKey: true, autoIncrement: true},
            name: STRING(20),
            desc: TEXT,
            fullname: STRING(20),
            created_at: DATE,
            updated_at: DATE
        })
    },
     
    down: async (queryInterface) => {
        await queryInterface.dropTable('tests');
        await queryInterface.removeColumn('fullname');
    }
}