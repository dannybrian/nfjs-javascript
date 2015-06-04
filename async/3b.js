// making it easier on ourselves with a parallel function
function parallel(actions, callback) {
    var results = [];

    function finished(result) {
        results.push(result);
        if (results.length === actions.length) {
            callback(results);
        }
    }

    actions.forEach(function (action) {
        action(finished);
    });

}

parallel([
    function (cb) {
            twitter.getTweetsFor("danny", cb);
    },
    function (cb) {
            stackOverflow.getAnswersFor("danny", cb);
    },
    function (cb) {
            fourSquare.getCheckinsFor("danny", cb);
    }
  ],
    function (results) {
        console.log("tweets = ", results[0]);
        console.log("answers = ", results[1]);
        console.log("checkins = ", results[2]);
    }
);