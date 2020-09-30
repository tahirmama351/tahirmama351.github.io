function getSecondsToday() {
     let now = new Date()
     let todaySocond = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds()
     return todaySocond;
}
console.log(getSecondsToday()) 