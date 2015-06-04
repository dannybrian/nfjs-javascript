http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    async.series({
            someData: async.apply(getSomeDate, client),
            someOtherData: async.apply(getSomeOtherDate, client),
            moreData: async.apply(getMoreData, client)
        },
        function (err, results) {
            var html = "<h1>Demo page</h1>";
            html += "<p>" + results.someData + "</p>";
            html += "<p>" + results.someOtherData + "</p>";
            html += "<p>" + results.moreData + "</p>";
            res.write(html);
            res.end();
        });
});