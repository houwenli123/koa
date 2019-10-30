const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();

let home = new Router();
home.get('/hwl', async(ctx) => {
    ctx.body = ctx.query;
}).get('/todo', (ctx) => {
    ctx.body = ctx.query;
})
let about = new Router();
home.get('/hwl', async(ctx) => {
        ctx.body = ctx.query;
    }).get('/todo', (ctx) => {
        ctx.body = ctx.query;
    })
    //装载路由
var router = new Router({
    prefix: '/zyl'
});
router.use('/home', home.routes(), home.allowedMethods());
router.use('/about', about.routes(), about.allowedMethods());

//加载路由中间件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log('starting at port 3000')
})