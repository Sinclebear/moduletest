const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

app.use(serve(__dirname))
app.use(serve(__dirname + '/public'))

app.listen(3000);