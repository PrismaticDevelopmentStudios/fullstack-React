const express = require('express');
const cors = require('cors');
const PORT = 5000;
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const morgan = require('morgan'); 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use(cors());

// Databse Declaration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mhc22Lde55s',
    database: 'logins'
});
console.log('Connected to logins DB');

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Express App</h1><br><h2>Running on PORT ' + PORT +  '</h2><style>h1, h2{margin: 0;}</style>');
});

app.get('/keychain', (req, res) => {
    db.query('SELECT * FROM sites', (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

app.post('/save', (req, res) => {
    var sql = 'INSERT INTO sites (website, account, password) VALUES ("' + req.body.formData.website + '","' + req.body.formData.account + '","' + req.body.formData.password  + '");'
    console.log(sql);
    db.query(sql, function (err, results) {
        if (err) throw err
        console.log(results)
    });
    console.log(req.body.formData)
    res.send(req.body);
});

app.post('/edit', (req, res) => {
    db.query('UPDATE sites SET website="' + req.body.data.website + '", account="' + req.body.data.account + '"', (err) => {
        if (err) throw err;
        res.send('Successful update')
    });
});

app.listen(PORT, function(err) {
    if (err) console.error
    console.log('Server running on PORT', PORT)
});
