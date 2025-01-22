// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creo el array vacío para almacenar los amigos
let amigos = [];
let amigo;

function agregarAmigo(){
    //tomo el valor del input
    const amigo = document.querySelector('#amigo').value;
    if( amigo == null || amigo.length == 0 || /^\s+$/.test(amigo )){
        alert('Por favor introduce un nombre válido para continuar con el juego.')
        return false
    }else{
        //agrego los nombres dentro del array
        amigos.push(amigo);
    //Recorremos nuestro array con foreach
        amigos.forEach((amigo)=>{
            console.log(amigo);
        })
    }
}