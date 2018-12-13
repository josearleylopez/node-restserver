// *****PUERTO*****

process.env.PORT = process.env.PORT || 3000;


// *****ENTORNO*****
process.env.NODE_ENV = process.env.NOVE_ENV || 'dev';


// *****BASE DE DATOS*****
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    urlDB = 'mongodb://jall:jall1319@ds249605.mlab.com:49605/cafe';
}

process.env.URLDB = urlDB;