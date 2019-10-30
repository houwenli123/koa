const Koa = require('koa')
const KoaView = require('koa-views')
const path = require('path')

const app = new Koa()

//加载模板引擎
app.use(KoaView(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

app.use(async(ctx) => {
    let title = 'hello ejs';
    await ctx.render('index', { title })
})
app.listen(3000, () => {
    console.log('[demo] server is staring')
})