export function validate(entry){
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const errores =  {
        username:'',
        password:''
    }

   
    if (!entry.username) errores.username = "El nombre de usuario no puede estar vacío";
    if (entry.password.length > 35) errores.password = "El password no puede tener más de 35 caracteres";
    if (entry.username && !regexEmail.test(entry.username)) errores.username = "El nombre de usuario tiene que ser un mail";

    return errores;
}