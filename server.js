const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('dist'))

let items = [];

app.get('/api/items', (req, res) => {
    res.send(items);
});

app.put('/api/items/:id', (req, res) => {
    let id = req.params.id;
    let itemsMap = items.map(item => { return item.id; });
    let index = itemsMap.indexOf(id);
    let item = items[index];

    item.quantity = parseInt(req.body.quantity);

    res.send(item);
});

app.post('/api/items', (req, res) => {
    let item = {
        art: req.body.art,
        shape: req.body.shape,
        detailShape: req.body.detailShape,
        title: req.body.title,
        printSize: req.body.printSize,
        id: req.body.id,
        price: req.body.price,
        ashthorp: req.body.ashthorp,
        geo: req.body.geo,
        infra: req.body.infra,
        gmunk: req.body.gmunk,
        lostboy: req.body.lostboy,
        quantity: req.body.quantity,
    };

    items.push(item);
    res.send(item);
});

app.delete('/api/items/:id', (req, res) => {
    let id = req.params.id;
    
    items = items.filter(i => {
        return i.id != id
    })

    res.sendStatus(200);
});

app.listen(3000, () => console.log('Server listening on port 3000!'))
