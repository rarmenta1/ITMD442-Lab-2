var express = require('express');
var router = express.Router();

let data = [
  {text: 'This is contact 1 text', id: 'a593c7cf-889d-4e81-bf0a-76cfd2d9810d'},
  {text: 'This is contact 2 text', id: '7054c36e-d85e-41d3-8fd8-a996e0cac276'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contacts', {title: 'Express Contacts', contacts: data });
});

/* GET create contacts form. */
router.get('/add', function(req, res, next) {
  res.render('contacts_add', {title: 'Add a contact' });
});

/* POST create contacts. */
router.post('/add', function(req, res, next) {
  //console.log(req.body);
  if (req.body.contactsText.trim() === '')  {
      res.render('contacts_add', { title: 'Add a contact', msg: 'Contact text can NOT be empty!'});
  } else  {
    res.send('contact created');
  }
});


module.exports = router;
