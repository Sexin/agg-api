'use strict';

const Controller = require('egg').Controller;

class SpiderController extends Controller {
    async index() {
        const { ctx } = this;
        await ctx.render('index.ejs', 456)
    }
    async spider() {
        const { ctx } = this;
        const result = await ctx.service.spider.spiderpage();
        ctx.body = result;
    }

    // 爬
    async spiderguanghua() {
        const { ctx } = this;
        const result = await ctx.service.spider.spiderguanghuapage();
        ctx.body = result;
    }
}

module.exports = SpiderController;
