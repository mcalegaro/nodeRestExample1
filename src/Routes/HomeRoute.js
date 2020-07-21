const HomeController = require('../Controllers/HomeController');

module.exports = (app) => {
   app.post('/', HomeController.post);
   app.put('/:id', HomeController.put);
   app.delete('/:id', HomeController.delete);
   app.get('/', HomeController.get);
   app.get('/:id', HomeController.getById);
}