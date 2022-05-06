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

function showResult(){

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
function challenge2(){
  parametro1 = document.getElementById("studentTime").value
  parametro2 = document.getElementById("studentLimit").value
  a = parametro1.split(",").map(value => parseInt(value))
  b = a.length
    
    lateStudents = a.filter(function e(value){
     
       return value > 0 
     
    })

  c = lateStudents.length

  if ( c  >= parametro2 ){
    console.log("Aula cancelada")

  }
  else {
    console.log("Aula normal")
  }
}
function challenge3 (){
  numeroX = document.getElementById("N").value
  arrX = document.getElementById("vetorSoma").value
  arr = arrX.split(",").map(value => parseInt(value))
  orderedHypothesis = arr.order(arr => Math.abs(arr.result - numeroX))
 



}

    
    
    
  
  
  
   
       


    

