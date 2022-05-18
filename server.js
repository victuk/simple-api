const express = require('express');
const app = express();

const indexRouter = require('./router/index');
const aboutRouter = require('./router/about');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/', indexRouter);
app.use('/about', aboutRouter);

let port = 3000;
app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
});
