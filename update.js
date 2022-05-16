const { Product } = require("./models");

Product.update(
  {
    harga_produk: "7000000",
  },
  {
    where: {
      id: 1,
    },
  }
)
  .then(() => {
    console.log("Produk telah diupdate");
    process.exit();
  })
  .catch((err) => {
    console.log("Produk gagal diupdate");
  });
