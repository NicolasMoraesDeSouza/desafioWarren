function reverseNum(num) {
	return (
    parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  )
}

function mostraResultado(){

  for (let i = 10; i < 1000000;  i++ ) {
    a = reverseNum(i)
    b = a + i
    mod = b % 2
    if(mod != 0){
      
      
      console.log(b)

  
    }
    else{
      
    }
  }
        
}


    
    
    
  
  
  
   
       


    

