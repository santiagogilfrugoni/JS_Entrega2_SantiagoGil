//Declaro variables de datos personales
let user;
let password;
let phoneNumber;
let name;
let lastName;
let email;
let birthDay;

//Variable de cierre
let close = 0; 
//Variable para el menu principal
let menu;

//Funcion Login
function login(){1
    
    let loginEmail = prompt("Ingresa tu correo electronico");
    let passwordEmail = prompt ("Ingresa tu contraseña");
        if(loginEmail==email && passwordEmail==password){
            alert("Registro existo");
            return 1;
            }else{
                alert("Error! \nEl correo o la contraseña que ingresó son incorrectos \nIngrese los datos nuevamente");
                return 0;
            }
    }    

//Menu de bienvenida    

while(close == 0){
    menu = parseInt(prompt("Bienvenido! Ingresa: \n1 para registrarte \n2 para inicar sesion \n0 para cerrar"));
    switch (menu){
        case 0:
            close = 1;
            break;
    
        case 1:
            phoneNumber = prompt("Ingresa tu numero de celular");
            name = prompt("Ingresa tu nombre");
            lastName = prompt("Ingresa tu apellido");
            email =prompt("Ingresa tu direccion de correo electronico")
            birthDay = prompt("Ingresa tu fecha de nacimiento \n(Formato DD/MM/AAA)");
            password = prompt("Ingresa tu contraseña")
            alert ("Tu registro fue realizado con exito! \nLos datos son los siguientes:\n Nombre: "+name+"\nApellido: "+lastName+"\nCelular: "+phoneNumber+"\nEmail: "+email+"\nFecha de nacimiento: "+birthDay+"\nContraseña: "+password);
            break;
    
        case 2:
            do{
                let loginSucced = login();
            }while(loginSucced == 0){
                    loginSucced = login();
                }
            break;
        default:
            alert("No ingresaste un numero valido");
            break;
    
    }

}

