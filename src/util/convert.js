
export function convertSecondsToTimeObject(seconds) {  
  if(seconds === 0) {
    return {hours:"00", minutes:"00", seconds: "00"};
  }

  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let hours = Math.floor(minutes / 60);
  minutes %= 60;  

  let m = "";
  let s = "";
  let h = "";

  if(hours !== 0) {
    if(hours < 10) {
      h += `0${hours}`;
    }else{
      h += `${hours}`;
    }
  }else{
    h += "00";
  }

  if(minutes !== 0) {
    if(minutes < 10) {
      m += `0${minutes}`;
    }else{
      m += `${minutes}`;
    }
  }else{
    m += `00`
  }

  if(seconds !== 0) {
    if(seconds < 10) {
      s += `0${seconds}`
    }else{
      s += `${seconds}`;
    }
  }else {
    s += `00`;
  }

  return {hours: h, minutes: m, seconds: s};
}