'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, io } = app;
    // 模板
    router.get('/view/index', controller.home.index);
    router.get('/view/zhihuindex', controller.home.zhihuindex);

    // api
    router.post('/api/savetest', controller.test.savetest);
    router.post('/api/gettestlist', controller.test.gettestlist);
    router.post('/api/querylist', controller.test.querylist);
    router.post('/api/login', controller.test.login);

    //知乎
    router.post('/api/zhihu/getlist', controller.zhihu.getlist);
    router.post('/api/zhihu/getarticlebody', controller.zhihu.getarticlebody);
    router.post('/api/zhihu/getbeforelist', controller.zhihu.getbeforelist);

    // 爬虫
    router.post('/api/spider', controller.spider.spider);

    // 创建房间
    router.post('/api/nsp/createroom', controller.nsp.createroom);
    router.post('/api/nsp/joinroom', controller.nsp.joinroom);
    // io
    io.of('/').route('exchange', io.controller.nsp.exchange);
};
