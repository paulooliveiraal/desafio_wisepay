module.exports = app => {
    const controller = require ('../controllers/numberController')();

    app.route('/number')
        .get(controller.soma);
}