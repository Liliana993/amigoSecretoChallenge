// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creo el array vacío para almacenar los amigos y los amigos que ya han sido sorteados
let amigos = [];
let amigosSorteados = [];

function borrarContenido(){
    amigos = [];
    amigosSorteados = [];

    //limpiamos la lista de amigos dentro del html
    let contenido = document.querySelector('#listaAmigos')
    contenido.innerHTML = '';
    //limpiamos el resultado del sorteo
    let result = document.querySelector('#resultado')
    result.innerHTML = '';
}

function mensajeAdicional(mensaje){
let mensajeEl = document.getElementById('mensaje');
mensajeEl.textContent = mensaje;
//agregamos un setTimeout para que el mensaje desaparezca
setTimeout(()=>{
    mensajeEl.textContent = '';
}, 2500)
} 


function agregarAmigo(){
    const amigo = document.querySelector('#amigo').value;
    if( amigo == null || amigo.length == 0 || /^\s+$/.test(amigo )){
        mensajeAdicional('Por favor introduce un nombre válido para continuar con el juego');
        return false;
    }
    if(amigos.includes(amigo)){
        mensajeAdicional('Ese nombre ya fue agregado a la lista 🤔');
        return false;
    }
    if(amigo.match(/\d/)){
        mensajeAdicional('El nombre no puede contener numeros 🤨');
        return false;
    }

    //añadimos el nombre del amigo ingresado dentro de la lista
    //agrego los nombres dentro del array
    amigos.push(amigo);
    //despues de agregar el nombre dentro del array limpiamos el input
    document.getElementById('amigo').value = '';
    mostrarAmigos();
    }

function mostrarAmigos(){
    let listaAmi = document.getElementById('listaAmigos');
    listaAmi.innerHTML = '';

    //creamos un bucle para recorrer el array y agregar cada nombre con un <li>
    for(let i = 0; i < amigos.length; i++){
        //se crea un elemento li dentro de la lista con cada nombre ingresado
        let etiqueta = document.createElement('li');
        etiqueta.textContent = amigos[i];
        //agregamos los li elementos a la lista
        listaAmi.appendChild(etiqueta);
    }
}

function sortearAmigo(){
//primero validamos si nuestro array se encuentra vacío
if(amigos.length == 0){
    mensajeAdicional('No Hay amigos para sortear😕');
    return false;
}

//validar que ya se sortearon todos los nombres de la lista amigos
if(amigosSorteados.length == amigos.length){
    mensajeAdicional('Ya se han sorteado todos los amigos 😉');
    amigosSorteados = [];
}

//mediante el bucle do while seleccionamos un nombre de manera aleatoria
let inicio;
do{
    inicio = Math.floor(Math.random() * amigos.length);
}while(amigosSorteados.includes(inicio));

//mostramos el nombre del amigo sorteado y limpiar el resultado
let item = document.getElementById('resultado');
item.textContent = amigos[inicio];


//añadimos el amigo sorteado a la lista de amigosSorteados
amigosSorteados.push(inicio);
}

function cambiarTextoBoton() {
    var boton = document.querySelector('button-draw');
    boton.value = 'Reinciar';
}

//borrarContenido();