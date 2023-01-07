function generatePassword(length) {
    // Arreglo con los caracteres permitidos para la contraseña
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    // Inicializamos la contraseña en vacío
    let password = '';

    // Generamos la contraseña mediante un ciclo que se repita tantas veces como indique la longitud deseada
    for (let i = 0; i < length; i++) {
        // Elegimos un carácter aleatorio del arreglo
        const characterIndex = Math.floor(Math.random() * characters.length);
        // Añadimos el carácter elegido a la contraseña
        password += characters[characterIndex];
    }

    // Retornamos la contraseña generada
    return password;
}