const express = require("express");
const { data_produk } = require("./models");


const port = 8000;

const app = express();
app.use(express.json());

app.get("/produk", (req, res) => {
  data_produk.findAll().then((produk) => {
    res.status(200).json(produk);
  });
});

app.get("/produk/:id", (req, res) => {
  data_produk.findOne({
    where: { id: req.params.id },
  }).then((produk) => {
    res.status(200).json(produk);
  });
});

app.post("/produk", (req, res) => {
  data_produk.create({
    kategori_id: req.body.kategori_id,
    kode_produk: req.body.kode_produk,
    nama_produk: req.body.nama_produk,
    deskripsi_produk: req.body.deskripsi_produk,
    warna_produk: req.body.warna_produk,
    harga_produk: req.body.harga_produk,
  })
    .then((produk) => {
      res.status(201).json(produk);
    })
    .catch((err) => {
      res.status(422).json("Produk Gagal dibuat");
    });
});

app.put("/produk/:id", (req, res) => {
  data_produk.update(
    {
      kategori_id: req.body.kategori_id,
      kode_produk: req.body.kode_produk,
      nama_produk: req.body.nama_produk,
      deskripsi_produk: req.body.deskripsi_produk,
      warna_produk: req.body.warna_produk,
      harga_produk: req.body.harga_produk,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(() => {
      res.status(200).json({ message: "Produk telah diupdate" });
    })
    .catch((err) => {
      res.status(422).json("Produk gagal diupdate");
    });
});

app.delete("/produk/:id", (req, res) => {
  data_produk.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(422).json("Produk gagal dihapus");
    });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
