var promise1 = new Promise(function (resolve, reject) {
    var options = {
        method: "GET",
        succes: function (data) {
            resolve(data);
        },
        error: function (error) {
            reject(error);
        },
        url: "http://ws.audioscrobbler"
    }
    $ajax(options);
});
promise1.then(function (data) {
    console.log("resolved data is ", data);
});

async function getDataFromLastFM() {
    console.log("starting async");
    var options = {
        method: "GET",
        url: "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=67a4460a101c4fe553e93913e8437352&format=json"

    }
    try {
        var result = await $ajax(options);
        console.log("ending async ", result);
    } catch (error) {
        console.log(error);
    }
}
getDataFromLastFM()