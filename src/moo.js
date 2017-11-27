const moment = require("moment");

let tweetTime = "Sun Nov 12 14:29:22 +0000 2017";
// Strip off first 4 chars for date
tweetTime = tweetTime.slice(4);
// Remove timezone info
let tweetYear = tweetTime.slice(-4);
tweetTime = tweetTime.slice(0, -11);
tweetTime = tweetTime + " " + tweetYear;
console.log(tweetTime);
let ts = moment(tweetTime, "MMM D HH:mm:ss YYYY");
console.log(ts);
let day = ts.startOf("day")
console.log(day);
