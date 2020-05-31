const mongoose = require('mongoose');
const router = require('express').Router();
let PhoneBook = require('../models/phonebook.model');


router.route('/').get((req, res) => {
    PhoneBook.find()
    .then(phonebook => res.json(phonebook))
    .catch(err => res.status(400).json('Error retreiving data ---' + err));
});


router.route('/add').post((req, res) => {
    const fullname = req.body.fullname;
    const phonenumber = req.body.phonenumber;
    const email_id = req.body.email_id;
    const dob = Date.parse(req.body.dob);


    const newPhoneBook = new PhoneBook({
        fullname,
        phonenumber,
        email_id,
        dob,
    });

    newPhoneBook.save()
    .then(() => res.json('Phone number added !!!'))
    .catch((err) => res.status(400).json('Error saving data ---'+ err));
});

router.route('/:id').get((req, res) =>{
    PhoneBook.findById(req.params.id)
    .then(phonebooks => res.json(phonebooks))
    .then(err => res.status(400).json('Error ---'+ err));
});


router.route('/:id').delete((req, res) => {
    PhoneBook.findByIdAndDelete(req.params.id)
    .then(() => res.json('Data deleted'))
    .catch(err => res.status(400).json('Error ---'+ err));
});



router.route('/update/:id').put((req, res) => {
    PhoneBook.findByIdAndUpdate(req.params.id)
    .then(phonebooks => {
        phonebooks.fullname = req.body.fullname;
        phonebooks.phonenumber = req.body.phonenumber;
        phonebooks.email_id = req.body.email_id;
        phonebooks.dob = Date.parse(req.body.dob);


        phonebooks.save()
        .then(() => res.json('Data updated!!!'))
        .catch(err => res.status(400).json('Error updating data ---'));
    })
    .catch(err => res.status(400).json('Error ---'+ err));
});

module.exports = router;