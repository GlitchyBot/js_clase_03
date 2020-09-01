var dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo', 'Nada'];


function diasdeSemana () {
    
    for(var i = 0; i <= 7; i++) {
        if (i == 7) {
            alert('No existe un octavo dia');
        }     
        else if(i % 2 == 0) {
            console.log(dias[i] + " es par.");
        } else {
        console.log(dias[i])
    }
  }  
}