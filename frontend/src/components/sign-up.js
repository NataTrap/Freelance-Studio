export class SignUp {
    constructor(openNewRoute) {
        if (localStorage.getItem('access-token')) {
            return this.openNewRoute('/')
        }
        this.openNewRoute = openNewRoute
        this.nameElement =  document.getElementById('name');
        this.lastNameElement =  document.getElementById('last-name');
        this.emailElement =  document.getElementById('email');
        this.passwordElement =  document.getElementById('password');
        this.passwordRepeatElement =  document.getElementById('repeat-password');
        this.agreeElement =  document.getElementById('agree');
        this.commonErrorElement = document.getElementById('common-error');
        document.getElementById('process-button').addEventListener('click', this.signUp.bind(this));
    }

    validateForm () {
        let isValid = true;

        if (this.nameElement.value) {
            this.nameElement.classList.remove('is-invalid');
        } else {
            this.nameElement.classList.add('is-invalid');
            isValid = false
        }
        if (this.lastNameElement.value) {
            this.lastNameElement.classList.remove('is-invalid');
        } else {
            this.lastNameElement.classList.add('is-invalid');
            isValid = false
        }


        if (this.emailElement.value && this.emailElement.value.match(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/)) {
            this.emailElement.classList.remove('is-invalid');
        } else {
            this.emailElement.classList.add('is-invalid');
            isValid = false
        }
        if (this.passwordElement.value && this.passwordElement.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
            this.passwordElement.classList.remove('is-invalid');
        } else {
            this.passwordElement.classList.add('is-invalid');
            isValid = false
        }
        if (this.passwordRepeatElement.value && this.passwordRepeatElement.value === this.passwordElement.value) {
            this.passwordRepeatElement.classList.remove('is-invalid');
        } else {
            this.passwordRepeatElement.classList.add('is-invalid');
            isValid = false
        }
        if (this.agreeElement.checked) {
            this.agreeElement.classList.remove('is-invalid');
        } else {
            this.agreeElement.classList.add('is-invalid');
            isValid = false
        }
        return isValid
    }

    async signUp() {
        this.commonErrorElement.style.display = 'none'
        if ( this.validateForm()) {
            const response = await fetch('http://localhost:3000/api/signup',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    name: this.nameElement.value,
                    lastName: this.lastNameElement.value,
                    email: this.emailElement.value,
                    password: this.passwordElement.value,
                })
            });
            const result = await response.json()
            console.log(result)

            if (result.error || !result.accessToken || !result.refreshToken || !result.id || !result.name) {
                this.commonErrorElement.style.display = 'block'
                return;
            }

            localStorage.setItem("accessToken", result.accessToken);
            localStorage.setItem("refreshToken", result.refreshToken);
            localStorage.setItem("userInfo", JSON.stringify({id: result.id, name: result.name}));

            this.openNewRoute('/');
        }

    }
}