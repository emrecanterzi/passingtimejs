/**
 * @param {Date} date - date object to calculate how much time has passed
 * @param {Boolean} returnMilisec - Returns ms when true, returns elapsed time as string if false
 * globalNS.method1(5, 10);
 * @example <caption>returnMilisec false version</caption>
 * const passingtimejs = require("passingtimejs");
 * passingtimejs(new Date(2022,0,19)) // return "1 year ago"
 *
 *  @example <caption>returnMilisec true version</caption>
 * const passingtimejs = require("passingtimejs");
 * passingtimejs(new Date(2022,0,19),true) // return ms as a number like 56640384000000
 * @returns {({time:String}| {time:Number})} how much time has passed
 *
 */
const passingtimejs = (date, returnMilisec) => {
  const now = new Date();
  let [nowDay, nowMonth, nowYear] = now.toLocaleDateString().split(".");
  let [nowHour, nowMinute, nowSecond] = now.toLocaleTimeString().split(":");
  let [day, month, year] = date.toLocaleDateString().split(".");
  let [hour, minute, second] = date.toLocaleTimeString().split(":");

  // conver variables to number
  nowYear = Number(nowYear);
  nowMonth = Number(nowMonth);
  nowDay = Number(nowDay);
  nowHour = Number(nowHour);
  nowMinute = Number(nowMinute);
  nowSecond = Number(nowSecond);

  if (nowYear > year) {
    return returnMilisec
      ? (nowYear - year) * 1000 * 60 * 60 * 24 * 30 * 12
      : `${nowYear - year} year ago`;
  } else if (nowMonth > month) {
    return returnMilisec
      ? (nowMonth - month) * 1000 * 60 * 60 * 24 * 30
      : `${nowMonth - month} month ago`;
  } else if (nowDay > day) {
    return returnMilisec
      ? (nowDay - day) * 1000 * 60 * 60 * 24
      : `${nowDay - day} day ago`;
  } else if (nowHour > hour) {
    return returnMilisec
      ? (nowHour - hour) * 1000 * 60 * 60
      : `${nowHour - hour} hour ago`;
  } else if (nowMinute > minute) {
    return returnMilisec
      ? (nowMinute - minute) * 1000 * 60
      : `${nowMinute - minute} minute ago`;
  } else if (nowSecond > second) {
    return returnMilisec
      ? (nowSecond - second) * 1000
      : `${nowSecond - second} second ago`;
  }
};

module.exports = passingtimejs;
