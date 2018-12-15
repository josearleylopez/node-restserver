const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

const { verificaTokenUrl } = require('../middlewares/autenticacion');

app.get('/imagen/:tipo/:img', verificaTokenUrl, (req, res) => {
    let tipo = req.params.tipo;
    let img = req.params.img;

    let pathImagen = path.resolve(__dirname, `../../uploads/${tipo}/${img}`);

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        let noPathImagen = path.resolve(__dirname, '../assets/no-image.jpg');
        res.sendFile(noPathImagen);
    }



});


module.exports = app;