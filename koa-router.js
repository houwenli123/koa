const Koa = require('koa');
const Router = require('koa-router')
const app = new Koa();
const router = new Router({
    prefix: '/hwl' //路由前缀
});

router.get('/', function(ctx, next) {
    ctx.body = '我是首页'
}).get('/todo', (ctx, next) => {
    ctx.body = '我是Todo页面'
})

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('starting at port 3000')
})