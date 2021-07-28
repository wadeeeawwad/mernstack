const JokeController = require('../controllers/jokes.controller');
 
module.exports = app => {
    app.get('/api/jokes', JokeController.findAlljokes);
    app.get('/api/jokes/:id', JokeController.findOneSinglejoke);
    app.put('/api/jokes/:id', JokeController.updateExistingjoke);
    app.post('/api/jokes', JokeController.createNewjoke);
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingjoke);
}