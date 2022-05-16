'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_produks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kategori_id: {
        type: Sequelize.STRING
      },
      kode_produk: {
        type: Sequelize.STRING
      },
      nama_produk: {
        type: Sequelize.STRING
      },
      deskripsi_produk: {
        type: Sequelize.TEXT
      },
      warna_produk: {
        type: Sequelize.STRING
      },
      harga_produk: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data_produks');
  }
};