/** Validaciones*/

/*Padres*/
const validarNombre = () => {
   const nombreInput = document.getElementById('nombre');
   if (nombreInput.value.trim() == "") {
      // error de required
      document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
      nombreInput.classList.add('is-invalid');
   } else if (nombreInput.value.trim().length < 3) {
      // error de minLength
      document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 3 caracteres";
      nombreInput.classList.add('is-invalid');
   } else {
      document.getElementById('error-nombre').innerHTML = "";
      nombreInput.classList.remove('is-invalid');
   }
}

/*Redes */
const validarRedes = () => {
   const nombreInputR = document.getElementById('nombreRedes');
   if (nombreInputR.value.trim() == "") {
      // error de required
      document.getElementById('error-redes').innerHTML = "Se necesita una red";
      nombreInputR.classList.add('is-invalid');
   } else if (nombreInputR.value.trim().length < 6) {
      // error de minLength
      document.getElementById('error-redes').innerHTML = "Asegurese que sea la correcta";
      nombreInputR.classList.add('is-invalid');
   } else {
      document.getElementById('error-redes').innerHTML = "";
      nombreInputR.classList.remove('is-invalid');
   }
}

/**Telefono */
const validarTel = () => {
   const nombreInputT = document.getElementById('tel');
   if (nombreInputT.value.trim() == "") {
      // error de required
      document.getElementById('error-tel').innerHTML = "Se requiere un numero";
      nombreInputT.classList.add('is-invalid');
   } else if (nombreInputT.value.trim().length < 6) {
      // error de minLength
      document.getElementById('error-tel').innerHTML = "El nombre debe tener al menos 6 caracteres";
      nombreInputT.classList.add('is-invalid');
   } else {
      document.getElementById('error-tel').innerHTML = "";
      nombreInputT.classList.remove('is-invalid');
   }
}

/**Bebé */
const validarBebe = () => {
   const nombreInputB = document.getElementById('nombreBebe');
   if (nombreInputB.value.trim() == "") {
      // error de required
      document.getElementById('error-bebe').innerHTML = "El nombre es requerido";
      nombreInputB.classList.add('is-invalid');
   } else if (nombreInputB.value.trim().length < 3) {
      // error de minLength
      document.getElementById('error-bebe').innerHTML = "El nombre debe tener al menos 3 caracteres";
      nombreInputB.classList.add('is-invalid');
   } else {
      document.getElementById('error-bebe').innerHTML = "";
      nombreInputB.classList.remove('is-invalid');
   }
}

/**Fecha */
const validarFecha = () => {
   const nombreInputF = document.getElementById('fecha');
   if (nombreInputF.value.trim() == "") {
      // error de required
      document.getElementById('error-fecha').innerHTML = "Ponga fecha de nacimiento";
      nombreInputF.classList.add('is-invalid');
   } else if (nombreInputF.value.trim().length < 3) {
      // error de minLength
      document.getElementById('error-error').innerHTML = "Asegurese sea la correcta";
      nombreInputF.classList.add('is-invalid');
   } else {
      document.getElementById('error-nombre').innerHTML = "";
      nombreInputF.classList.remove('is-invalid');
   }
}

/*--------------------------------------------------------------------------------------------------------------*/

/** Formulario con datos*/

const enviarFormulario = () => {
   let formularioCorrecto = true;

   const nombreInput = document.getElementById('nombre');
   if (nombreInput.value.trim() == "") {
      // error de required
      document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
      formularioCorrecto = false;
   } else if (nombreInput.value.trim().length < 3) {
      // error de minLength
      document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 3 caracteres";
      formularioCorrecto = false;
   } else {
      document.getElementById('error-nombre').innerHTML = "";
   }

   const nombreInputR = document.getElementById('nombreRedes');
   if (nombreInputR.value.trim() == "") {
      // error de required
      document.getElementById('error-redes').innerHTML = "Se requiere red social";
      formularioCorrecto = false;
   } else if (nombreInputR.value.trim().length < 3) {
      // error de minLength
      document.getElementById('error-redes').innerHTML = "Asegurese que sea la correcta";
      formularioCorrecto = false;
   } else {
      document.getElementById('error-redes').innerHTML = "";
   }

   const nombreInputT = document.getElementById('tel');
   if (nombreInputT.value.trim() == "") {
      // error de required
      document.getElementById('error-tel').innerHTML = "Se necesita un numero";
      formularioCorrecto = false;
   } else if (nombreInputT.value.trim().length < 5) {
      // error de minLength
      document.getElementById('error-tel').innerHTML = "Faltan caracteres";
      formularioCorrecto = false;
   } else {
      document.getElementById('error-tel').innerHTML = "";
   }

   const nombreInputB = document.getElementById('nombreBebe');
   if (nombreInputB.value.trim() == "") {
      // error de required
      document.getElementById('error-bebe').innerHTML = "El nombre es requerido";
      formularioCorrecto = false;
   } else if (nombreInputB.value.trim().length < 3) {
      // error de minLength
      document.getElementById('error-bebe').innerHTML = "El nombre debe tener al menos 3 caracteres";
      formularioCorrecto = false;
   } else {
      document.getElementById('error-bebe').innerHTML = "";
   }

   const nombreInputF = document.getElementById('fecha');
   if (nombreInputF.value.trim() == "") {
      // error de required
      document.getElementById('error-fecha').innerHTML = "Debe seleccionar la fecha";
      formularioCorrecto = false;
   } else {
      document.getElementById('error-fecha').innerHTML = "";
   }

   /**Lee por consola */
   const consola = document.getElementById("notificaciones");
   if (formularioCorrecto) {
     console.log("Nombre:", nombreInput.value);
     console.log("Red Social:", nombreInputR.value);
     console.log("Telefono:", nombreInputT.value);
     console.log("Nombre Bebe:", nombreInputB.value);
     console.log("Nacimiento:", nombreInputF.value);
   } else {
     console.log("Formulario incorrecto")
   }

}




const inicializarJs = () => {
   const boton = document.getElementById("enviar-btn");
   boton.addEventListener('click', function (e) {
      enviarFormulario();
   });

   document.getElementById('nombre').addEventListener('blur', function (e) {
      validarNombre();
   })
}

window.addEventListener('load', inicializarJs);