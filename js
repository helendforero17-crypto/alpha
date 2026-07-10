window.addEventListener('load', () => {
    console.log("Página cargada, esperando 3 segundos para mostrar oferta...");
    
    setTimeout(() => {
        const popup = document.getElementById('popup-oferta');
        if (popup) {
            popup.style.display = 'flex'; 
            console.log("Intentando mostrar el popup");
        } else {
            console.error("No se encontró el elemento con ID 'popup-oferta'");
        }
    }, 3000);
});

function cerrarPopup() {
    document.getElementById('popup-oferta').style.display = 'none';
}