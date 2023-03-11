'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Patahi Airport',
        cityId: 16, // cityId must be associated with any city present in cities table
        address: 'patahi Chowk, mfp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jay prakash Narayan Airport Airport',
        cityId: 17,
        address: 'Sheikhpura, Patna',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda International Airport',
        cityId: 18,
        address: 'Devanahalli, Bengaluru',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        cityId: 19,
        address: 'New Delhi, 110037',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

  }
};