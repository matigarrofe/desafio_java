//SWITCH
let cerveza
let speed
let fernet
let vino
let usuario
let seleccion


let nombre = prompt("Ingrese su nombre por favor.")
alert(`Hola ${nombre} Como estas?`)
let edad = parseInt(prompt(`Que edad tienes?`))
if (edad >= 18) {
    alert(`${nombre} Bienvenido, puedes acceder al club`)
    usuario = prompt('Que bebida deseas tomar?')
    switch (usuario) {
        case 'cerveza':
            seleccion = cerveza
            break;
        case 'speed':
            seleccion = speed
            break;
        case 'fernet':
            seleccion = fernet
            break;
        case 'vino':
            seleccion = vino
            break;
        default:
            alert('Bebida sin stock')
            break;
    }

} else {
    alert(`Usted tiene ${edad} años, es menor de edad`)
}