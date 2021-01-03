const router = require('express').Router();
module.exports = router;

router.get('/vrHouse', function (req, res) {
    // if (req.url === '/vrHouse') return res.redirect(301, 'https://boevr.cn/static/vrHouse/index.html');
    if (req.url === '/vrHouse') return res.redirect(301, 'http://127.0.0.1/static/vrHouse/index.html');
});

router.get('/rtmp', function (req, res) {
    // if (req.url === '/rtmp') return res.redirect(301, 'https://boevr.cn/static/rtmp/index.html');
    if (req.url === '/rtmp') return res.redirect(301, 'http://127.0.0.1/static/rtmp/index.html');
});