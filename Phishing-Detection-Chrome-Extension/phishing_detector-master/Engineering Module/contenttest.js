function predict(data, weight) {
    var f = 0;
    weight = [3.33346292e-01, -1.11200396e-01, -7.77821806e-01, 1.11058590e-01, 3.89430647e-01, 1.99992062e+00, 4.44366975e-01, -2.77951957e-01, -6.00531647e-05, 3.33200243e-01, 2.66644002e+00, 6.66735991e-01, 5.55496098e-01, 5.57022408e-02, 2.22225591e-01, -1.66678858e-01];
    for (var j = 0; j < data.length; j++) {
        f += data[j] * weight[j];
    }
    return f > 0 ? 1 : -1;
}

function isIPInURL(url){
    var reg =/\d{1,3}[\.]{1}\d{1,3}[\.]{1}\d{1,3}[\.]{1}\d{1,3}/;
    if(reg.exec(url)==null){
        console.log("NP");
        return -1;
    }
    else{
        console.log("P");
        return 1;
    }
}

function isLongURL(url){
    if(url.length<54){
        console.log("NP");
        return -1;
    } 
    else if(url.length>=54 && url.length<=75){
        console.log("Maybe");
        return 0;
    }
    else{
        console.log("P");
        return 1;
    }
}
// Add other detection functions similarly

function detectPhishing(url) {
    var testdata = [
        isIPInURL(url),
        isLongURL(url),
        // Add other detection functions here
    ];

    var prediction = predict(testdata);

    if (prediction === 1) {
        console.log("Warning: Phishing detected!!");
    } else if (prediction === -1) {
        console.log("No phishing detected");
    }
}


function runPhishingDetection(url) {
    if (url) {
        detectPhishing(url);
    } else {
        console.log("Invalid URL input");
    }
}

// Retrieve the URL from command-line arguments
const url = process.argv[2];

runPhishingDetection(url);

//node "c:\Users\Akshay Thakur\Phishing-Detection-Chrome-Extension\phishing_detector-master\Engineering Module\contenttest.js" "https://syringeoniondeluge.com/api/users?token=L3d3Ynk5cDMyNz9rZXk9MGYyMmMxZmQ2MDlmMTNjYjc5NDdjOGNhYmZlMWE5MGQmc3VibWV0cmljPTIyMzIwNzgw"

