import Koa from "koa";

const app = new Koa()
app.use((ctx: { type: string; body: string; }) => {
    ctx.body = 'Hello Web';
 });

app.listen(3000).on('error',console.log)