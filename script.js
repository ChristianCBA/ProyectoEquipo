function cerrarPagina() {
    // Intenta cerrar la ventana
    if (window.close) {
        window.close();
    }
    // Si no se cierra, muestra un mensaje
    setTimeout(function() {
        if (!window.closed) {
            alert('Por razones de seguridad, el navegador no permite cerrar esta pestaña automáticamente. Puede cerrarla manualmente.');
        }
    }, 200);
}
