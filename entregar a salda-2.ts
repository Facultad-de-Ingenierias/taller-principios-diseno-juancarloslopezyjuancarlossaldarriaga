//Juancarlos Saldarriaga y JuanCarlos Lopez
//Utilizando DRY para:
//en este ejemplo vemos como el profesor saca las notas de sus estudiantes
//pero repetia codigo sacando cada nota del estudiante, y sobretodo para cada estudiante
function notadejuan(juan){
    function Notas1(x) {
      return x.flip();
    }
  
    function Notas2(x) {
      return x.flip();
    }
  
    function Notas3(x) {
      return x.flip();
    }
  
    function definitiva(x){
      return (Notas1+Notas2+Notas3/3)
    }
  }
  function notadesac(sac){
    function Notas1(x) {
      return x.flip();
    }
    
    function Notas2(x) {
      return x.flip();
    }
    
    function Notas3(x) {
      return x.flip();
    }
    
    function definitiva(x){
      return (Notas1+Notas2+Notas3/3)
    }
  }
  function notadepedro(pedro){
    function Notas1(x) {
      return x.flip();
    }
  
    function Notas2(x) {
      return x.flip();
    }
  
    function Notas3(x) {
      return x.flip();
    }
  
    function definitiva(x){
      return (Notas1+Notas2+Notas3/3)
    }
  }
  
  
  ___________________________________
  //solucion, un metodo que hace todo el proceso sin duplicidad de codigo,
  //tanto en la nota como en los estudiantes
  
  function notaEstudiante(NombreEstudiante,Nota1,Nota2,Nota3){
  
    function Notas(Nota1,Nota2,Nota3){
      return (Nota1.flip,Nota2.flip,Nota3.flip)
      definitiva()
    }
  
    function definitiva(){
      return (Nota1.flip,Nota2.flip,Nota3.flip/3)
    }
  }