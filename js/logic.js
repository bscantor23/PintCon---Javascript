
class ControladorLogica { //Clase ControladorLogica
    
    constructor(){ //Constructor de la clase
        //Se establecen los vectores inicialmente como nulos
        this.cartas = null; //Guarda en un vector los id de las cartas
        this.imagenes = null; //Guarda en un vector los id de las imagenes utilizadas en la dificultad
        
        //Se establecen los contadores y enteros iniciales
        this.contadorCartas = 1; //Guarda como conteo la posición del momento del vector cartas 
        this.contadorImagen = 0; //Guarda como conteo la posición del momento del vector idImagenes
        this.numeroAleatorio = 0; //Guarda un número aleatorio que varía en cuanto a la utilidad de los vectores
        
        //Se establecen los booleanos inicialmente como false
        this.idExist = false; //Establece si existe la duplicidad de cartas
        
        //Se establece un nuevo objeto de la clase Random
        this.aleatorio = 0; //Guarda un objeto Random
    }
    
    // Retorna un número aleatorio entre min (incluido) y max (excluido)
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    //Establece el vector de cartas con un parámetro que identifica la dificultad
    getCartas(dificultad){
        
        switch(dificultad){ 
            
            case 1: //Dificultad Fácil
                console.log("Dificultad Fácil")
                
                this.cartas = new Array(12); //Establece un vector cartas con 9 posiciones que se usan en el tablero
                this.imagenes = new Array(6); //Establece un vector idImagenes con 6 posiciones que se usan en el tablero
                
                for(let i=0;i<6;i++){ //Ciclo que permite generar un vector IdImagenes aleatorio
                    
                    do{
                        this.idExist = false; //Inicialmente no existe una duplicidad
                       
                        //Genera un id de imagen aleatorio dentro del limite de la cantidad de imagenes (10)
                        this.numeroAleatorio = this.getRandomInt(0,9);
                        
                        for(let j=0;j<6;j++){ //Ciclo que reconoce si hay duplicidad del id generado
                            if(this.imagenes[j] == null){ //Si encuentra que no hay datos siguientes
                                break; //Sale del Ciclo
                            }
                            if(this.imagenes[j] == this.numeroAleatorio){ //Si encuentra alguna duplicidad
                                this.idExist = true; //Reconoce como verdadera la duplicidad
                            }
                        }
                        
                    }while(this.idExist == true); //Valida si un id generado ya existe en el vector idImagenes
                    
                    this.imagenes[i] = this.numeroAleatorio; //Guarda el id en el vector idImagenes
                    console.log("id imagen "+i+": "+this.imagenes[i]);
                }
                
                console.log("\n");

                while(this.contadorCartas <= 12) { //Ciclo que reconoce que se haya generado los espacios del vector cartas
                    
                    this.idExist = false; //Inicialmente no existe en la posición aleatoria algún dato
                    
                    do{
                        //Genera una posición aleatoria dentro de los limites de la cantidad de cartas del tablero (9)
                        this.numeroAleatorio = this.getRandomInt(0,12);
                        
                        if(this.cartas[this.numeroAleatorio] == null){ //Si encuentra que la posición no tiene datos
                            console.log("posicion: "+this.numeroAleatorio+" para id:"+this.imagenes[this.contadorImagen]);
                            
                            //Se guarda en la posición aleatoria el id de la posición del momento del vector idImagenes
                            this.cartas[this.numeroAleatorio] = this.imagenes[this.contadorImagen]; 
                            
                            this.idExist = true; //Reconoce como verdadero que ya existe en la posición aleatoria el dato.
                        }
                        
                    //Valida que la posición aleatoria generada se guarde en algún espacio del vector cartas     
                    }while(this.idExist == false); 
                    
                    //Si el contadorCartas es par implica que se han generado una pareja de cartas
                    if(this.contadorCartas % 2 == 0){
                        console.log("Contador: "+ this.contadorCartas+"\n");
                        this.contadorImagen++; //Se empieza a generar una nueva pareja de cartas 
                    }
                    this.contadorCartas++; //Se autoincrementa el contador
                }
        
                console.log("\n");
                
                //Imprime el vector de cartas generado con imagenes y posiciones aleatoriamente
                for (let i = 0; i < 12; i++) { 
                    if(i % 3 == 0 ){
                        console.log(this.cartas[i]+"\n");
                    }else{
                        console.log(this.cartas[i]+" ");
                    }  
                }
                
                console.log("\n");
                
                return this.cartas; //Retorna el vector cartas 
          
        }
    }
}
