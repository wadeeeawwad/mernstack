const Joke = require('../models/jokes.model');
 //A.M
module.exports.findAlljokes = (req, res) => {
    Joke.find()
        .then(allDajokes => res.json({ jokes: allDajokes }))
        .catch(err => res.json({ message: 'Something  findAlljokes went wrong', error: err }));
}
 
module.exports.findOneSinglejoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSinglejoke => res.json({ joke: oneSinglejoke }))
        .catch(err => res.json({ message: 'Something findOneSinglejoke went wrong', error: err }));
}
 
module.exports.createNewjoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedjoke => res.json({ joke: newlyCreatedjoke }))
        .catch(err => res.json({ message: 'Something createNewjoke went wrong', error: err }));
}
 
module.exports.updateExistingjoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedjoke => res.json({ joke: updatedjoke }))
        .catch(err => res.json({ message: 'Something updateExistingjoke went wrong', error: err }));
}
 
module.exports.deleteAnExistingjoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something deleteOne went wrong', error: err }));
}