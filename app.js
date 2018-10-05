const express = require('express');
const app = express();

// const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
// app.use(awsServerlessExpressMiddleware.eventContext())
// app.get('/', (req, res) => {
//   res.json(req.apiGateway.event)
// })

app.get('/hello', (req, res) => {
    var name = 'world';
    if(req.query.name && req.query.name != "") {
        name = req.query.name;
    }

    res.json({
        "message": "Hello " + name + "!"
    });
});

app.listen(3000, () => {
    console.log('App started on port 3000.');
});

module.exports = app;