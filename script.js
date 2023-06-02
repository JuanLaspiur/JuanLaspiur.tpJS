let spanTotalPagar = document.getElementById("spanTotalPagar");
let cantidadPersonas = document.getElementById("cantidad");
let categoria = document.getElementById("categoria").value;
let porcentaje;

let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");

 function obtenerValor() {
  
    spanTotalPagar.innerHTML = (cantidadPersonas.value * 300 * (obtenerPorcentaje()));
   
   }


 function obtenerPorcentaje(){
        
   if(categoria == "1"){
    return porcentaje = 0.8;
    } else if(categoria == "2"){ 
     return porcentaje = 0.5;    

    } else if(categoria == "3"){
      return porcentaje = 0.15;  

    }


 }

 function borrar(){

location.reload();
 


 }

 var defau = document.getElementById("estudiante");

 defau.style.backgroundColor = "#0D6EFD";
 defau.style.width = "100%";
 defau.style.height ="100%" ;
 defau.style.paddingTop ="20%";
 defau.style.boxShadow =  "2px 2px 6px rgba(0, 0, 0, 0.3)";







 function seleccionar() {
   var selectElement = document.getElementById("categoria").value;
   var azul = document.getElementById("estudiante");
   var verde = document.getElementById("trainee");
   var amarillo = document.getElementById("junior");




   if(selectElement == "1"){

   azul.style.backgroundColor = "#0D6EFD";
   azul.style.width = "100%";
   azul.style.height ="100%" ;
   azul.style.paddingTop ="20%";
   azul.style.boxShadow =  "2px 2px 6px rgba(0, 0, 0, 0.3)";

   verde.style.backgroundColor = "#FFFFFF";
   amarillo.style.backgroundColor = "#FFFFFF";

} else if(selectElement == "2"){

      verde.style.backgroundColor = "#198754";
      verde.style.width = "100%";
      verde.style.height ="100%" ;
      verde.style.paddingTop ="20%";
      verde.style.boxShadow =  "2px 2px 6px rgba(0, 0, 0, 0.3)";  
      
      amarillo.style.backgroundColor = "#FFFFFF";
      azul.style.backgroundColor = "#FFFFFF";


   }else if(selectElement == "3"){
      amarillo.style.backgroundColor = "rgb(255, 204, 0)";  
      amarillo.style.width = "100%";
      amarillo.style.height ="100%" ;
      amarillo.style.paddingTop ="20%";
      amarillo.style.boxShadow =  "2px 2px 6px rgba(0, 0, 0, 0.3)"; 
      amarillo.style.border = "none";
      
      verde.style.backgroundColor = "#FFFFFF";
      azul.style.backgroundColor = "#FFFFFF";
   }



}



function seleccionarOpcion(opcion) {
  var seleccionarElemento = document.getElementById("categoria");
  seleccionarElemento.value = opcion;
  seleccionar(); 


  

  
}
