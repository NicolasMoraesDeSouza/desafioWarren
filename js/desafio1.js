function reverseNum(num) {
  
  return (
  parseFloat(
    num
      .toString()
      .split('')
      .reverse()
      .join('')
  ) * Math.sign(num)
)
let result = []

  for (let i = 1; i < 100000;  i++ ) {
    if ( (i + (reverseNum(i)) % 2) != 0 ){
      result.push(i)
      document.getElementById("numero").innerHTML = verificaN(n1)
    
    
    
  }
  console.log(result)
   
       
}

    
}
