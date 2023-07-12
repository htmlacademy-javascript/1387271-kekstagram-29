// Функция 1  проверки длины строки
const controlStringLenght = (str,length)=>str.length <= length;

// Функция 2  для проверки, является ли строка палиндромом.
const checkPalindrome = (string) => {
  const totalString = string.toLowerCase().replaceAll(' ', '');
  const revString = totalString.split('');
  const reverseStr = revString.reverse().join('');
  return totalString === reverseStr;
};

controlStringLenght('bcv',3);
checkPalindrome('njgjn');

const checkTime = (startWorkday,endWorkday,start,proceed)=>{
  const parseTime = (time)=> {
    const parts = time.split(':').map(Number);
    const [hours, minutes] = parts;
    const minutesPerHour = 60;

    return hours * minutesPerHour + minutes;
  };
  return (parseTime(startWorkday) <= parseTime(start) && (parseTime(start) + proceed) <= parseTime(endWorkday));
};
//checkTime('08:00', '17:30', '14:00', 90);
checkTime('8:0', '10:0', '8:0', 120);
checkTime('08:00', '14:30', '14:00', 90);
checkTime('8:00', '17:30', '08:00', 900);
export {controlStringLenght};

