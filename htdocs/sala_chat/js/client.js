/**
 * @author Diego Alonso Molina (Full Stack Developer)
 * @github https://github.com/DiegusNueva/conexion-js-websocket-php
 */

// Funciones de utilidad
const $ = id => { return document.getElementById(id) }
const log = msg => {
    $("log").innerHTML += "<br>" + msg
    // Cada vez que escribimos un mensaje, hacemos scroll vertical
    $("log").scrollTop = $("log").scrollHeight
}
const onkey = event => { if (event.keyCode == 13) { send() } }

// Variable global para instanciar el WebSocket

let socket

// Funciones del WebSocket

const init = () => {
    let host = "ws://localhost:9000"
    try {
        socket = new WebSocket(host)
        socket.onopen = function (msg) {
            log("Bienvenido/a - estado: " + this.readyState)
        }
        socket.onmessage = function (msg) {
            log("Recibido: " + msg.data)
        }
        socket.onclose = function (msg) {
            log("Desconectado - estado: " + this.readyState)
        }
    } catch (ex) {
        log(ex)
    }
}

const send = () => {
    let txt, msg
    txt = $("msg")
    msg = txt.value
    //txt = document.getEelementById("msg")
    if (!msg) {
        alert("El mensaje no puede estar vacío")
        return
    }
    txt.value = ""
    txt.focus()
    try {
        socket.send(msg)
        log('Enviado: ' + msg)
    } catch (ex) {
        log(ex)
    }
}

const quit = () => {
    if (socket != null) {
        log("¡Hasta la próxima!")
        socket.close()
        socket = null
    }

}

const reconnect = () => {
    quit()
    init()
}
