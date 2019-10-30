const Koa = require('koa')
const app = new Koa()

app.use(async(ctx) => {
    if (ctx.url === '/index') {
        ctx.cookies.set('name', 'hwl', {
            domain: '127.0.0.1',
            path: '/index',
            maxAge: 1000 * 60 * 60 * 24,
            expires: new Date('2019-12-31'),
            httpOnly: false,
            overwrite: false
        })
        ctx.body = 'cookie is ok';
    } else {
        let co = ctx.cookies.get('name');
        if (co) {
            ctx.body = co;
        } else {
            ctx.body = 'cookie is none'
        }
    }
})

app.listen(3000, () => {
    console.log('[demo koa-cookie')
})