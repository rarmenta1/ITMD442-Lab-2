var express = require('express');
var router = express.Router();
const contactsRepo = require('../src/contactsMemoryRepository');



/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = contactsRepo.findAll();
  res.render('contacts', {title: 'Express Contacts', contacts: data });
});

/* GET create contacts form. */
router.get('/add', function(req, res, next) {
  res.render('contacts_add', {title: 'Add a contact' });
});

/* POST create contacts. */
router.post('/add', function(req, res, next) {
  //console.log(req.body);
  if (req.body.firstName.trim() === '' || req.body.lastName.trim() === '')  {
      res.render('contacts_add', { title: 'Add a contact', msg: 'Contact text can NOT be empty!'});
  } else  {
    contactsRepo.create({firstName: req.body.firstName.trim(), lastName: req.body.lastName.trim(), email: req.body.email, notes: req.body.notes, date: req.body.date})

    res.redirect('/contacts');
  }
});

/* GET single contacts. */
router.get('/:uuid', function(req, res, next) {
  const contact = contactsRepo.findById(req.params.uuid);
  if(contact) {
    res.render('contact', {title: 'Contact Information', contact: contact });
  } else {
    res.redirect('/contacts');
  }
});


module.exports = router;
