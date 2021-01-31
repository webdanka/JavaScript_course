const num = Number(266219);

function SplitNumber(number) {
  let counts = number.toString().split('');
  let countsArray = counts.map(Number);
  let numberResult = 1;

  for(let i = 0; i <= countsArray.length - 1; i++) {
   numberResult *= countsArray[i];
  }

  numberResult = numberResult ** 3;
  console.log(String(numberResult).slice(0,2));
  
}

SplitNumber(num);



