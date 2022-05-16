const { data_produk } = require("./models");

data_produk.create({
    kategori_id: "100010",
    kode_produk: "200020",
    nama_produk: "Apple Watch 7 Series 7 - 41mm/45mm - Nike Garansi Resmi iBox",
    deskripsi_produk:
      "BODY Dimensions 45 x 38 x 10.7 mm (1.77 x 1.50 x 0.42 in) Weight 32 g (41mm), 38.8 g (45mm) (1.13 oz)",
    warna_produk: "Hitam",
    harga_produk: "7499000",
  })
  .then((products) => {
    console.log(products);
  });
