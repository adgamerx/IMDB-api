const express = require("express");
const scrapper = require("./modules/namescraper");
const searchById = require("./modules/idresp")

const app = express();

app.use('/api/title/:term', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let term = (req.params.term).toLowerCase();

    scrapper.serach(term).then((data) => {
        if (data === null) {
            return res.json({
                error: 'Try different Keyword'
            })

        } else {
            return res.send(data);
        }
    })
})

app.use('/api/id/:id', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    let id= (req.params.id);

    searchById.searchById(id).then((data) => {
        if (data === null) {
            return res.json({
                error: 'Try different Keyword'
            })

        } else {
            return res.send(data);
        }
    })
})

app.use('/', (req, res) => {
    res.send('<b>Api working fine...<b>');
});
const PORT = process.env.PORT || 3000;
console.log('Listening on PORT : ', PORT);
app.listen(PORT);