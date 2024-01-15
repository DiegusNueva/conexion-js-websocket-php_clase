/**
 * @author Diego Alonso Molina (Full Stack Developer)
 * @github https://github.com/DiegusNueva/conexion-js-websocket-php
 */

// Funciones de utilidad
const $ = id => { return document.getElementById(id) }
const log = msg =>{
    $("log").innerHTML += "<br>" + msg
    // Cada vez que escribimos un mensaje, hacemos scroll vertical
    $("log").scrollTop = $("log").scrollHeight
}
const onkey = event => { if (event.keyCode == 13) { send() } }

// Variable global para instanciar el WebSocket

let socket