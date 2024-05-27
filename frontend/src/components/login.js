export class Login{
    constructor(openNewRoute) {

        if (localStorage.getItem('access-token')) {
            return this.openNewRoute('/')
        }
        this.openNewRoute = openNewRoute
        this.emailElement =  document.getElementById('email');
        this.passwordElement =  document.getElementById('password');
        this.rememberMeElement =  document.getElementById('remember-me');
        console.log(this.rememberMeElement.checked)
        this.commonErrorElement = document.getElementById('common-error');
       document.getElementById('process-button').addEventListener('click', this.login.bind(this));
    }



    validateForm () {
        let isValid = true
        if (this.emailElement.value && this.emailElement.value.match(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/)) {
            this.emailElement.classList.remove('is-invalid');
        } else {
            this.emailElement.classList.add('is-invalid');
            isValid = false
        }
        if (this.passwordElement.value) {
            this.passwordElement.classList.remove('is-invalid');
        } else {
            this.passwordElement.classList.add('is-invalid');
            isValid = false
        }
        return isValid
    }

   async login() {
       this.commonErrorElement.style.display = 'none'
        if ( this.validateForm()) {
            const response = await fetch('http://localhost:3000/api/login',{
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    email: this.emailElement.value,
                    password: this.passwordElement.value,
                    rememberMe: this.rememberMeElement.checked,
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