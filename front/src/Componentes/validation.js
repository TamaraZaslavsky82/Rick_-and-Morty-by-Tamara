const regexUser = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const regexPassword = /^(?=.*?[a-z])(?=.*[0-9]).{6,10}$/;

 function validation(userData){
    const errors = {}
    if(!regexUser.test(userData.username)) errors.username = 'Debe ingresar un email'
    else if(!regexPassword.test(userData.regexPassword)) errors.password = 'Debe tener al menos un numero'
    else if (userData.username.length > 35) errors.username= 'El nombre de usuario no puede tener mas de 35 caracteres'

    else if(!regexPassword.test(userData.password)) errors.password = 'Debe tener al menos un numero'
    else if (userData.password.length < 6 && userData.password.length > 10) errors.password = 'La contraseña debe tener una longitud de entre 6 y 10 caracteres'

    return errors
    
    
}
export default validation;