var express = require('express')
    , bodyParser = require('body-parser')
    , app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// usuarios
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
let usuarios = [
    { id: 1, nome: 'Carlos Lima' },
    { id: 2, nome: 'Pedro Soares' },
    { id: 3, nome: 'Ricardo V3' },
    { id: 4, nome: 'Michael Carlos' },
    { id: 5, nome: 'Pedrinho Lima' },
    { id: 6, nome: 'Miriana Felip' },
    { id: 7, nome: 'Sofhia Caitano' },
    { id: 8, nome: 'Alex DD Silva' },
    { id: 9, nome: 'Abner henrique' },
    { id: 10, nome: 'Carlinho Soares' },
];
let ID = 10;
app.route('/api/usuarios/:id?')
    .get((req, res) => {
        if (!req.params.id) {
            res.json(usuarios);
        } else {
            let usuario = usuarios.filter((u) => {
                return u.id == req.params.id;
            });
            res.json(usuario);
        }
    })
    .post((req, res) => {
        ID++;
        usuarios.push({ id: ID, nome: req.body.nome });
        res.json({ id: ID, nome: req.body.nome });
    })
    .put((req, res) => {
        let index = usuarios.findIndex((u) => { return u.id == req.params.id; });
        usuarios[index].nome = req.body.nome;
        res.json(usuarios[index]);
    })
    .delete((req, res) => {
        let index = usuarios.findIndex((u)=>{ return u.id == req.params.id; });
        delete usuarios.splice(index, 1);
        res.json({}).status(204);
    });
    
app.listen(3000, function () {
    console.log('server is run in 3000');
});