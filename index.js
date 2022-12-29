const display =document.querySelector("#display");
const buttom=document.querySelectorAll("button");
/*recorrer todos los buttons*/
/*item:recorrer todos los botonotes*/
/*onclick: funcion especifico a un boton*/
buttom.forEach((item)=>{
    item.onclick=()=>{ /*para reconocer a quien le he dado onclick*/
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
            /*inner text: texto interior*/
        let string = display.innerText.toString();/*cadenas de caracteres tos es hacia string*/
        display.innerText=string.substr(0,string,length-2)
        /* extrae el ultimo caracter,El substring()método devuelve la 
        parte del stringíndice desde el inicio hasta el índice final y excluyendolo, o hasta el final de la cadena si no se proporciona un índice final.*/
        //borra ese caracter alfinal, uno por uno
        }else if(display.innerText!=""&& item.id=="equal"){
            //let cadena="2+2":4 
            //eval:operaciones aritméticas si es positivo, negativo.
            display.innerText=eval(display.innerText);
        }else if(display.innerText==""&& item.id=="equal"){
            display.innerText="Null";
            //establecer tiempo de espera, un un determiando tiempo
            setTimeout(()=>(display.innerText=""),2000);//limpiarse durante un determinado tiempo

        }else{
            display.innerText+=item.id;
            //para poder presionar += ejercicios de asignacion
        }
    };
});

const themeToggleBtn=document.querySelector(".theme-toggler");
const calculator=document.querySelector(".calculator");

let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")//classlist a toda la clase de dark
    themeToggleBtn.classList.toggle("active")//toggle activa todas las clases
    isDark=!isDark;
}

