'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_produk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_produk.init({
    kategori_id: DataTypes.STRING,
    kode_produk: DataTypes.STRING,
    nama_produk: DataTypes.STRING,
    deskripsi_produk: DataTypes.TEXT,
    warna_produk: DataTypes.STRING,
    harga_produk: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'data_produk',
  });
  return data_produk;
};