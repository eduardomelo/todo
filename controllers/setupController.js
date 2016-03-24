var Todos = require('../models/todoModel');

module.exports = function(app) {
    
    app.get('/api/setupTodos', function(req, res) {
        var starterTodos = [
            {
                userName: 'Eduardo',
                todo: 'Comprar leite',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'Eduardo',
                todo: 'Comprar queijo',
                isDone: false,
                hasAttachment: false
            },
            {
                userName: 'Eduardo',
                todo: 'Comprar óvos',
                isDone: false,
                hasAttachment: false
            }
        ];
        /*
        Todos.create(starterTodos, function(err, 
        results) {
            res.send(results);
        });
        */
    });
}