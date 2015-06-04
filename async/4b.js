// a promise-ified XHR request

function get(url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

// use it:
get('story.json').then(function (response) {
    console.log("Success!", response);
}, function (error) {
    console.error("Failed!", error);
});

// and instead of this:
get('story.json').then(function (response) {
    return JSON.parse(response);
}).then(function (response) {
    console.log("Yey JSON!", response);
});

// we can do this:
get('story.json').then(JSON.parse).then(function (response) {
    console.log("Yey JSON!", response);
});

// or:
function getJSON(url) {
    return get(url).then(JSON.parse);
}