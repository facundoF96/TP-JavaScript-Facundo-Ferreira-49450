console.log("INTRODUCCION A JAVASCRIPT");

console.log("Ejercicio 2:");

const script1 = ()=>{
  let a = 5;
  let b = 10;
  let c = a + b;

  console.log("a es: " + a);
  console.log("b es: " + b);
  console.log("la suma de a y b es: " + c);

};
script1();

console.log("----+-----+-----+-----+----");

console.log("Ejercicio 3:");

const script2 = ()=>{
  let nombre = prompt("¿Cual es tu nombre?");

  console.log("Hola, " + nombre);
};
script2();

console.log("----+-----+-----+-----+----");

console.log("OPERADORES LOGICOS Y CONDICIONALES");

console.log("Ejercicio 1:");

const script3 = ()=>{
  let a = 321;
  let b = 123;
  let c;
  
  if(a > b){
    c = a;
  }else{
    c = b;
  }

  console.log("a es: " + a);
  console.log("b es: " + b);
  console.log("El mayor de los numeros es: " + c);
};
script3();

console.log("----+-----+-----+-----+----");

console.log("Ejercicio 2:");

const script4 = ()=>{
  let numero = prompt("Ingresa un numero y te dire si es par o impar");

  if (numero % 2 === 0) {
    console.log("El número " + numero + " es par");
  } else {
    console.log("El número " + numero +" es impar");
  }
};
script4();

console.log("----+-----+-----+-----+----");

console.log("OPERADORES DE ASIGNACION Y BUCLES");

console.log("Ejercicio 1:");

const script5 = ()=>{
  let variable = 10;

  while(variable != 0){
    console.log(variable);
    variable--;
  }
};
script5();

console.log("----+-----+-----+-----+----");

console.log("Ejercicio 2:");

const script6 = ()=>{
  let numeroPedido;

  do{
    numeroPedido = prompt("ingrese un numero mayor que 100");
  }while(numeroPedido <= 100);
  console.log("Felicidades, ingresaste un numero mayor a 100: " + numeroPedido)

};
script6();

console.log("----+-----+-----+-----+----");

console.log("OPERADORES DE ASIGNACION Y BUCLES");

console.log("Ejercicio 1:");

const script7 = ()=>{

  const esPar = (numeroS7)=>{
    if (numeroS7 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log("el numero 2 es par: " + esPar(2));
  console.log("el numero 3 es par: " + esPar(3));
  console.log("el numero 4 es par: " + esPar(4));
  console.log("el numero 5 es par: " + esPar(5));

};
script7();

console.log("----+-----+-----+-----+----");

console.log("Ejercicio 2:");

const script8 = ()=>{

  const convertirCelciusAFarenheit = (celcius)=>{
    let farenheit = (celcius * 1.8) + 32;
    return farenheit;
  }

  console.log("25°C son equivalentes a " + convertirCelciusAFarenheit(25) + "°F");
  console.log("30°C son equivalentes a " + convertirCelciusAFarenheit(30) + "°F");
  console.log("40°C son equivalentes a " + convertirCelciusAFarenheit(40) + "°F");
  console.log("50°C son equivalentes a " + convertirCelciusAFarenheit(50) + "°F");

};
script8();

console.log("----+-----+-----+-----+----");

console.log("OBJETOS EN JAVASCRIPT");

console.log("Ejercicio 1:");

const script9 = ()=>{
  let persona = {
    nombre: "Facundo Ferreira",
    edad: 22,
    ciudad: "San Carlos",

    mostrarDatos: function(){
      console.log("nombre: " + this.nombre);
      console.log("edad: " + this.edad);
      console.log("ciudad: " + this.ciudad);
    },
    
    actualizarCiudad: function(){
      persona.ciudad = "Mendoza";
    },
  }

  console.log("DATOS ANTES DE ACTUALIZARSE: ");
  persona.mostrarDatos();
  persona.actualizarCiudad();
  console.log("DATOS DESPUES DE ACTUALIZARSE: ");
  persona.mostrarDatos();
};
script9();

console.log("----+-----+-----+-----+----");

console.log("Ejercicio 2:");

const script10 = ()=>{
  let libro1 = {
    titulo: "El ingenioso caballero Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    año: 1605,

    antiguo: function(){
      if((2024 - libro1.año)  > 10){
        return true;
      }else{
        return false;
      }
    }
  }

  let libro2 = {
    titulo: "La Espada Leal",
    autor: "George R. R. Martin",
    año: 2016,

    antiguo: function(){
      if((2024 - libro2.año)  > 10){
        return true;
      }else{
        return false;
      }
    }
  }

  console.log("El libro " + libro1.titulo + " es antiguo: " + libro1.antiguo());
  console.log("El libro " + libro2.titulo + " es antiguo: " + libro2.antiguo());
};
script10();

console.log("----+-----+-----+-----+----");

console.log("ARRAYS");

console.log("Ejercicio 1:");

const script11 = ()=>{
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numerosMultiplicados = numeros.map(numero => numero * 2);
  
  console.log("Array original: " + numeros);
  console.log("Array multiplicado por 2: " + numerosMultiplicados);
};
script11();

console.log("----+-----+-----+-----+----");

console.log("Ejercicio 2:");

const script12 = ()=>{
  let pares = [];

  for(let i = 0; i <= 20; i++){
    if (i % 2 === 0 && i != 0) {
      pares.push(i);
    }
  }

  console.log("Primeros 10 numeros pares:");
  console.log(pares);
};
script12();

console.log("----+-----+-----+-----+----");

console.log("INTRODUCCION AL DOM");

console.log("Ejercicio 1:");

const script13 = ()=>{
  const button = document.getElementById("boton");
  const parrafos = document.querySelectorAll(".parrafo");

  const cambiarColorTexto = ()=>{
    parrafos.forEach(parrafo  =>{
      if(parrafo.classList.contains("pAzul")){
        parrafo.classList.remove("pAzul");
      } else{
        parrafo.classList.add("pAzul");
      }
    });
  };

  button.addEventListener("click", ()=>{
    cambiarColorTexto();
  });
};
script13();

console.log("PROBAR FUNCIONALIDAD TOCANDO EL BOTON")

console.log("----+-----+-----+-----+----");

console.log("Ejercicio 2:");

const script14 = ()=>{

  const botonAlerta= document.getElementById("botonAlerta");

  botonAlerta.addEventListener("click", ()=>{
    const textoIngresado = document.getElementById("textoIngresado").value;
    alert("Has ingresado: " + textoIngresado);
  });

};
script14();

console.log("PROBAR FUNCIONALIDAD CON EL FORMULARIO Y EL BOTON DE ALERTA");

console.log("----+-----+-----+-----+----");

console.log("EVENTOS EN DOM");

console.log("Ejercicio 1:");

console.log("Tocar los elementos de la lista para probar su funcionalidad");

const script15 = ()=>{
  const elemento1 = document.getElementById("elem1");
  const elemento2 = document.getElementById("elem2");
  const elemento3 = document.getElementById("elem3");
  const elemento4 = document.getElementById("elem4");
  const elemento5 = document.getElementById("elem5");

  elemento1.addEventListener("click", ()=>{
    console.log(elemento1.textContent);
  });

  elemento2.addEventListener("click", ()=>{
    console.log(elemento2.textContent);
  });

  elemento3.addEventListener("click", ()=>{
    console.log(elemento3.textContent);
  });

  elemento4.addEventListener("click", ()=>{
    console.log(elemento4.textContent);
  });

  elemento5.addEventListener("click", ()=>{
    console.log(elemento5.textContent);
  });
};
script15();

console.log("----+-----+-----+-----+----");

console.log("Ejercicio 2:");

console.log("PROBAR FUNCIONALIDAD HABILITANDO Y DESHABILITANDO EL CAMPO");

const script16 = ()=>{
  const campoTxt = document.getElementById("campoDH");
  const botonDeshabil = document.getElementById("deshabilitar");
  const botonHabil = document.getElementById("habilitar");

  botonDeshabil.addEventListener("click", ()=>{
    campoTxt.disabled = true;
  });

  botonHabil.addEventListener("click", ()=>{
    campoTxt.disabled = false;
  });
};
script16();

console.log("----+-----+-----+-----+----");

console.log("INTRODUCCION AL DOM");

console.log("Ejercicio 2:");

console.log("PROBAR FUNCIONALIDAD INTRODUCIENDO EMAIL, GUARDANDOLO Y LUEGO BORRANDOLO");

const script17 = ()=>{
  const formCorreo = document.getElementById("formCorreo");
  const emailInput = document.getElementById("email");
  const mostrarCorreo = document.getElementById("mostrarCorreo");
  const eliminarCorreo = document.getElementById("eliminarCorreo");

  const guardarCorreo = (correo) => {
    localStorage.setItem("correo", correo);
    mostrarEnDom(correo);
  };

  const mostrarEnDom = (correo) => {
    mostrarCorreo.innerHTML = `<p>Correo guardado: ${correo}</p>`;
    eliminarCorreo.style.display = "block";
  };

  const eliminarCorreoGuardado = () => {
    localStorage.removeItem("correo");
    mostrarCorreo.innerHTML = "";
  };

  const correoGuardado = localStorage.getItem("correo");

  if (correoGuardado) {
    mostrarEnDom(correoGuardado);
  }

  formCorreo.addEventListener("enviar", (e) => {
    e.preventDefault();
    const correo = emailInput.value;
    guardarCorreo(correo);
    emailInput.value = "";
  });

  eliminarCorreo.addEventListener("click", eliminarCorreoGuardado);
};
script17();

console.log("----+-----+-----+-----+----");