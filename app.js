const express = require("express");
const scrapper = require("./modules/namescraper");

const app = express();

app.use('/api/:term', (req, res) => {
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

app.use('/', (req, res) => {
    res.send('Currently running on localhost');
});
const PORT = process.env.PORT || 3001;
console.log('Listening on PORT : ', PORT);
app.listen(PORT);