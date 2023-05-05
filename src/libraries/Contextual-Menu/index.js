
// * This Process will disable the default context menu to display the 

const init_Custom_Context_Menu = () => {

    document.addEventListener('contextmenu', function (event) {

        // event.preventDefault(); 
        
        const mousePosition = { x: event.clientX, y: event.clientY }

        console.log(`Mouse position:`);
        console.log(mousePosition);

    });

}

export default init_Custom_Context_Menu