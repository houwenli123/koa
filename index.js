const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const app = new Koa();
app.use(bodyParser())
app.use(async(ctx) => {
    //当请求时GET请求时，显示表单让用户填写
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
            <h1>Koa2 request post demo</h1>
            <form method="POST"  action="/">
                <p>userName</p>
                <input name="userName" /> <br/>
                <p>age</p>
                <input name="age" /> <br/>
                <p>webSite</p>
                <input name='webSite' /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
        //当请求时POST请求时
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        // let postData = await parsePostData(ctx);
        let postData = ctx.request.body;
        ctx.body = postData
    } else {
        //其它请求显示404页面
        ctx.body = '<h1>404!</h1>';
    }
})

function parsePostData(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postdata = "";
            ctx.req.on('data', (data) => {
                postdata += data
            })

            ctx.req.addListener('end', function() {
                let parseData = parseQueryStr(postdata);
                resolve(parseData)
            })
        } catch (error) {
            reject(error)
        }
    })
}

function parseQueryStr(queryStr) {
    let querydata = {};
    let queryStrList = queryStr.split('&');
    for (let [index, queryValue] of queryStrList.entries()) {
        let itemList = queryValue.split("=");
        querydata[itemList[0]] = decodeURIComponent(itemList[1]);
    }
    return querydata;
}
app.listen(3000, () => {
    console.log('[demo] server is starting at port 3000');
})