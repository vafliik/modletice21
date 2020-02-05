const express = require('express');
const router = express.Router();


let images = [
  { name: '34', tags: '*venek pristresek dum' },
  { name: '2', tags: '*venek dum' },
  { name: '21', tags: '*venek dum' },
  { name: '12', tags: '*venek' },
  { name: '14', tags: '*venek dum' },
  { name: '16', tags: '*vnitrek veranda' },
  { name: '5', tags: '*vnitrek obyvak' },
  { name: '52', tags: '*vnitrek podkrovi pokoj' },
]

let categories = [
  { filter: 'dum', title: 'Dům' },
  { filter: 'zahrada', title: 'Zahrada' },
  { filter: 'pokoj', title: 'Pokoje' },
  { filter: 'obyvak', title: 'Obývák' },
  { filter: 'kuchyn', title: 'Kuchyň' },
  { filter: 'koupelna', title: 'Koupelny' },
  { filter: 'venek', title: 'Okolí' },
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { menuId: 'home', page: 'Úvod', images: images, categories: categories });
});

module.exports = router;
