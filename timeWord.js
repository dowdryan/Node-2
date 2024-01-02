function getRandomTime() {
  // Generate random hours (0 to 23)
  const randomHours = Math.floor(Math.random() * 24);

  // Generate random minutes (0 to 59)
  const randomMinutes = Math.floor(Math.random() * 60);

  // Format hours and minutes with leading zeros if needed
  const formattedHours = randomHours < 10 ? `0${randomHours}` : `${randomHours}`;
  const formattedMinutes = randomMinutes < 10 ? `0${randomMinutes}` : `${randomMinutes}`;

  // Return the random time in "HH:mm" format
  return `${formattedHours}:${formattedMinutes}`;
}


function timeWord(time) {
  let [hour, minute] = time.split(":").map(Number)

  // Checks for invalid inputs
  if (isNaN(hour) || isNaN(minute)) return console.error("Error: NaN")
  if ((hour < 0 || hour > 23) || (minute < 0 || minute > 59)) return console.log("Invalid Time")
  

  const hours = [
    "Twelve", "One", "Two", "Three", "Four", "Five", "Six", 
    "Seven", "Eight", "Nine", "Ten", "Eleven"]
  const minutes = [
    "O'Clock", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve",
    "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
    "Eighteen", "Nineteen", "Twenty"]

  // Puts Hours into text
  function getHoursText(hour) {
    // console.log("Hour: " + hours[hour] + " AM")
    // console.log("Hour: " + hours[hour] + " PM")
    if (hour >= 0 && hour < 12) return hours[hour]
    else if (hour > 11 && hour <= 23) {
      hour = hour - 12
      return hours[hour] 
    } 
  }

  // Puts Minutes into text
  function getMinutesText(minute) {
    const ones = minute % 10;
    if (minute >= 0 && minute <= 20) return minutes[minute];
    else if (minute > 20 && minute <= 29) return "Twenty " + (ones > 0 ? minutes[ones] : "")
    else if (minute > 30 && minute <= 39) return "Thirty " + (ones > 0 ? minutes[ones] : "")
    else if (minute > 40 && minute <= 49) return "Fourty " + (ones > 0 ? minutes[ones] : "")
    else if (minute > 50 && minute <= 59) return "Fifty " + (ones > 0 ? minutes[ones] : "")
    else return
  }

  if (hour === 0 && minute === 0) console.log("00:00 | Midnight");
  else if (hour === 12 && minute === 0) console.log("12:00 | Noon");
  else {
    let time = ((hour < 10 ? "0" : "") + hour + ":" + (minute < 10 ? "0" : "") + minute);
    let period = (hour < 12 ? "AM" : "PM");
    console.log(time + " | " + getHoursText(hour) + " " + getMinutesText(minute) + " " + period);
  }
}


// const midnight = "00:00"
// const noon = "12:00"
// const twelveOneAm = "00:01"
// const nineTenAm = "09:10"
// const twelveOnePm = "12:01"
// const elevenFiftyNineAm = "11:59"
// const elevenFiftyNinePm = "23:59"
// const notNum = "ab:cd"
// const invalidTime = "99:99"


// timeWord(midnight) // 00:00 | Midnight
// timeWord(noon) // 12:00 | Noon
// timeWord(twelveOneAm) // 00:01 | Twelve One AM
// timeWord(nineTenAm) // 09:10 | Nine Ten AM
// timeWord(twelveOnePm) // 12:01 | Twelve One PM
// timeWord(elevenFiftyNineAm) // 11:59 | Eleven Fifty Nine AM
// timeWord(elevenFiftyNinePm) // 23:59 | Eleven Fifty Nine PM
// timeWord(notNum) // Error: NaN
// timeWord(invalidTime) // Invalid Time

module.exports = { timeWord }
