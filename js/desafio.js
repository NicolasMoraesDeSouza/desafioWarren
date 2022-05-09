/* Função para reverter número*/
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

/* Função que faz o cálculo e mostra no console*/
function showResult(){

  for (let i = 10; i < 10000;  i++ ) {
    a = reverseNum(i)
    b = a + i
    mod = b % 2
    if(mod != 0){ 
      
      var values = values + "," + b;

    }
    else{
      
    }
  }
  document.getElementById("result").innerHTML = values
        
}
/* Função que separa o numero com vírgula, faz o cálculo pra definir se a aula vai ser cancelada ou não e imprime no console*/
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
/* Ainda não finalizado */
function challenge3 (){
  numeroX = document.getElementById("N").value
  arrX = document.getElementById("vetorSoma").value
  arr = arrX.split(",").map(value => parseInt(value))
  orderedHypothesis = arr.order(arr => Math.abs(arr.result - numeroX))
 



}

    
    
    
  
  
  
   
       


    

