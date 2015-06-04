http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    var html = "<h1>Demo page</h1>";
    var client = new someClient();
    getSomeData(client, function (someData) {
        html += "<p>" + someData + "</p>";
        getSomeOtherData(client, function (someOtherData) {
            html += "<p>" + someOtherData + "</p>";
            getMoreData(client, function (moreData) {
                html += "<p>" + moreData + "</p>";
                res.write(html);
                res.end();
            });
        });
    });
});