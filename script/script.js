function calcularIMC() {
    let nombre = document.getElementById('nombre').value;
    let alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    let alturaEnMetros = alturaEnCentimetros / 100;
    let pesoEnKilos = parseInt(document.getElementById('peso').value);
  
    let imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    let  clasificacion;
    
    if (imc < 18.5) {
      clasificacion = 'ESTAS POR DEBAJO DEL PESO';
    } else if (imc < 25) {
      clasificacion = 'ESTAS SALUDABLE';
    } else if(imc < 30){
      clasificacion = 'TIENES SOBRE PESO';
    } else if (imc < 40){
      clasificacion = 'ESTAS OBESO';
    }else{
      clasificacion = 'TIENES OBESIDAD EXTREMA'
    }
   
    let result = 'Hola' + ' ' + nombre + 'tu IMC es '  + imc + ' y tu ' + clasificacion;
    alert(result);
  }






  