export const iniRightClickListener = () => {

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault(); // desactiva la opción por defecto del clic derecho
        const mouseX = event.clientX; // obtiene la ubicación del mouse en el eje X
        const mouseY = event.clientY; // obtiene la ubicación del mouse en el eje Y
        console.log(`Mouse position: x=${mouseX} y=${mouseY}`); // muestra la ubicación del mouse en la consola
    });


}
