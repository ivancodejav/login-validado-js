document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const cedulaInput = document.getElementById('cedula');
    const passwordInput = document.getElementById('password');

    const emailError = document.getElementById('emailError');
    const nombreError = document.getElementById('nombreError');
    const apellidoError = document.getElementById('apellidoError');
    const cedulaError = document.getElementById('cedulaError');
    const passwordError = document.getElementById('passwordError');

    const showHideButton = document.getElementById('show-hide');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            alert('Formulario válido. Enviar datos o procesar login.');
            loginForm.reset();
            clearAllErrors();
        }
    });

    showHideButton.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showHideButton.textContent = 'Ocultar';
        } else {
            passwordInput.type = 'password';
            showHideButton.textContent = 'Mostrar';
        }
    });

    function validateForm() {
        let valid = true;

        // Email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailError, 'Ingresa un email válido');
            valid = false;
        } else {
            clearError(emailError);
        }

        if (!/^[a-zA-ZÀ-ÿ\s]{2,20}$/.test(nombreInput.value.trim())) {
            showError(nombreError, 'Nombre válido de 2 a 20 letras');
            valid = false;
        } else {
            clearError(nombreError);
        }

        if (!/^[a-zA-ZÀ-ÿ\s]{2,20}$/.test(apellidoInput.value.trim())) {
            showError(apellidoError, 'Apellido válido de 2 a 20 letras');
            valid = false;
        } else {
            clearError(apellidoError);
        }

        if (!/^[a-zA-Z0-9]{5,15}$/.test(cedulaInput.value.trim())) {
            showError(cedulaError, 'Cédula válida de 5 a 15 caracteres (números o letras)');
            valid = false;
        } else {
            clearError(cedulaError);
        }

        // Password mínimo 6 caracteres
        if (passwordInput.value.trim().length < 6) {
            showError(passwordError, 'Contraseña mínimo 6 caracteres');
            valid = false;
        } else {
            clearError(passwordError);
        }

        return valid;
    }

    function showError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    function clearError(element) {
        element.textContent = '';
        element.style.display = 'none';
    }

    function clearAllErrors() {
        [emailError, nombreError, apellidoError, cedulaError, passwordError].forEach(clearError);
    }
});
