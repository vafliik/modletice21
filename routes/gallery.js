const express = require('express');
const router = express.Router();
const path = require('path');

let images = [
  { name: '14', tags: 'venek dum' },
  { name: '21', tags: 'venek dum' },
  { name: '34', tags: 'venek pristresek dum' },
  { name: '2', tags: 'venek dum' },
  { name: '3', tags: 'vnitrek veranda' },
  { name: '4', tags: 'vnitrek veranda' },
  { name: '5', tags: 'vnitrek obyvak pokoj' },
  { name: '6', tags: 'vnitrek obyvak pokoj' },
  { name: '7', tags: 'venek' },
  { name: '8', tags: 'venek zahrada' },
  { name: '9', tags: 'vnitrek balkon' },
  { name: '10', tags: 'vnitrek loznice pokoj' },
  { name: '11', tags: 'venek' },
  { name: '12', tags: 'venek' },
  { name: '13', tags: 'venek' },
  { name: '15', tags: 'vnitrek' },
  { name: '16', tags: 'vnitrek veranda' },
  { name: '17', tags: 'venek' },
  { name: '18', tags: 'venek balkon' },
  { name: '1', tags: 'venek' },
  { name: '19', tags: 'vnitrek loznice pokoj' },
  { name: '20', tags: 'vnitrek veranda' },
  { name: '22', tags: 'venek dum' },
  { name: '23', tags: 'vnitrek koupelna' },
  { name: '24', tags: 'vnitrek' },
  { name: '25', tags: 'venek dum' },
  // {name: '26', tags: 'venek'},
  { name: '28', tags: 'venek' },
  { name: '29', tags: 'venek pristresek' },
  { name: '30', tags: 'venek zahrada' },
  { name: '31', tags: 'venek garaz' },
  { name: '32', tags: 'venek' },
  { name: '33', tags: 'vnitrek pokoj' },
  { name: '35', tags: 'vnitrek koupelna' },
  // {name: '36', tags: 'venek dum'},
  { name: '37', tags: 'venek zahrada' },
  { name: '38', tags: 'venek zahrada pristresek' },
  { name: '39', tags: 'venek zahrada' },
  { name: '40', tags: 'venek zahrada' },
  { name: '41', tags: 'vnitrek obyvak pokoj' },
  { name: '42', tags: 'vnitrek kuchyn' },
  { name: '43', tags: 'vnitrek garaz' },
  { name: '44', tags: 'venek' },
  { name: '45', tags: 'venek veranda dum' },
  { name: '46', tags: 'vnitrek koupelna' },
  { name: '47', tags: 'vnitrek pokoj' },
  { name: '48', tags: 'vnitrek obyvak pokoj' },
  { name: '49', tags: 'vnitrek koupelna' },
  { name: '50', tags: 'venek zahrada' },
  { name: '51', tags: 'vnitrek kuchyn' },
  { name: '52', tags: 'vnitrek podkrovi pokoj' },
  { name: '53', tags: 'vnitrek obyvak pokoj' },
  { name: '54', tags: 'venek zahrada' },
  { name: '55', tags: 'venek zahrada' },
  { name: '56', tags: 'vnitrek kuchyn' },
  { name: '57', tags: 'vnitrek garaz' },
]

let categories = [
  { filter: 'dum', title: 'Dům' },
  { filter: 'zahrada', title: 'Zahrada' },
  { filter: 'pokoj', title: 'Pokoje' },
  { filter: 'veranda', title: 'Veranda' },
  { filter: 'obyvak', title: 'Obývák' },
  { filter: 'kuchyn', title: 'Kuchyň' },
  { filter: 'koupelna', title: 'Koupelny' },
  { filter: 'garaz', title: 'Garáž' },
  { filter: 'venek', title: 'Okolí' },
]

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('gallery', { menuId: 'gallery', page: 'Fotogalerie', images: images, categories: categories });
});


/* GET image by id. */
router.get('/image/:id', function (req, res, next) {
  var id = req.params.id;

  if (req.header('accept').includes("webp")) {
    var extension = '.webp'
    console.log('--> accepts webp ->' + extension)
  } else {
    var extension = '.png'
    console.log('--> does not webp ->' + extension)
  }
  res.sendFile(path.join(__dirname, '../public/images/gallery/', id + extension))
});

//TODO Refactor
/* GET slider image by id. */
router.get('/slider/:id', function (req, res, next) {
  var id = req.params.id;

  if (req.header('accept').includes("webp")) {
    var extension = '.webp'
    console.log('--> accepts webp ->' + extension)
  } else {
    var extension = '.png'
    console.log('--> does not webp ->' + extension)
  }
  res.sendFile(path.join(__dirname, '../public/images/main-slider', 'image-' + id + extension))
});

module.exports = router;
