var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
var Messages = require('./boite_de_messagerieModel');

router.get('/', function (req,res){
    Messages.getMessages(function(err,rows){
        if(err){
            res.status(400).json(err);
        }else{
            res.json(rows)
        }
    });
});

router.post('/', function (req){
    Messages.createMessages(req.body,(err,rows) => {});
});

router.put('/', function (req, res){
    Messages.updateMessages(req.body,(err,count) => {});
});  

router.delete('/', function (req, res){
    Messages.deleteMessages(req.body,(err,count) => {});
});

module.exports = router;