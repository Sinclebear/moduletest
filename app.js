const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve(__dirname)) // root html load
app.use(serve(__dirname + '/public')) // module js load

app.listen(3000);