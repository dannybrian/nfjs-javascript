// messy but typical browser async example

var form = document.querySelector('form');
form.onsubmit = function (submitEvent) {
    var name = document.querySelector('input').value;
    request({
            uri: "http://example.com/upload",
            body: name,
            method: "POST"
        },
        function (err, response, body) {
            var statusMessage = document.querySelector('.status');
            if (err) return statusMessage.value = err;
            statusMessage.value = body;
        }
    )
}