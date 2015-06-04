var moreDataParser = function (moreData) {
   // date parsing logic
};

var someDataParser = function (someData) {
   // some data parsing logic

   getMoreData(client, moreDataParser);
};

var createServerCallback = function (req, res) {
   // create server logic

   getSomeData(client, someDataParser);

   // etc ...
};

http.createServer(createServerCallback);
