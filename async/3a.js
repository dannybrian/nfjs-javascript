var tweets, answers, checkins;

getTweetsFor("danny", function (err, results) {
    tweets = result;
    somethingFinished();
});

stackOverflow.getAnswersFor("danny", function (err, results) {
    answers = result;
    somethingFinished();
});

fourSquare.getCheckinsBy("danny", function (err, results) {
    checkins = result;
    somethingFinished();
});

var finished = 0;

function somethingFinished() {
    if (++finished === 3) {
        ui.show(tweets, answers, checkins);
    }
}