const express = require('express');
const router = express.Router();


let images = [
  { name: '34', tags: 'venek pristresek dum' },
  { name: '5', tags: 'vnitrek obyvak pokoj' },
  { name: '40', tags: 'venek zahrada' },
  { name: '8', tags: 'venek zahrada' },
  { name: '2', tags: 'venek dum' },
  { name: '3', tags: 'vnitrek veranda' },
  { name: '21', tags: 'venek dum' },
  { name: '4', tags: 'vnitrek veranda' },
  { name: '11', tags: 'venek' },
  { name: '6', tags: 'vnitrek obyvak pokoj' },
  { name: '12', tags: 'venek' },
  { name: '9', tags: 'vnitrek veranda' },
  { name: '14', tags: 'venek dum' },
  { name: '15', tags: 'vnitrek' },
  { name: '16', tags: 'vnitrek veranda' },
  { name: '27', tags: 'venek veranda' },
  { name: '19', tags: 'vnitrek loznice pokoj' },
  { name: '30', tags: 'venek zahrada' },
  { name: '23', tags: 'vnitrek koupelna' },
  { name: '31', tags: 'venek garaz' },
  { name: '33', tags: 'vnitrek pokoj' },
  { name: '37', tags: 'venek zahrada' },
  { name: '35', tags: 'vnitrek koupelna' },
  { name: '38', tags: 'venek zahrada pristresek' },
  { name: '43', tags: 'vnitrek garaz' },
  { name: '39', tags: 'venek zahrada' },
  { name: '42', tags: 'vnitrek kuchyn' },
  { name: '44', tags: 'venek' },
  { name: '46', tags: 'vnitrek koupelna' },
  { name: '45', tags: 'venek veranda dum' },
  { name: '47', tags: 'vnitrek pokoj' },
  { name: '48', tags: 'vnitrek obyvak pokoj' },
  { name: '49', tags: 'vnitrek koupelna' },
  { name: '50', tags: 'venek zahrada' },
  { name: '52', tags: 'vnitrek podkrovi pokoj' },
  { name: '55', tags: 'venek zahrada' },
  { name: '56', tags: 'vnitrek kuchyn' },
  { name: '57', tags: 'vnitrek garaz' },
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
