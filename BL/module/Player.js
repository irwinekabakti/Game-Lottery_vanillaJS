class Player {
    constructor() {
        this._username = ''
    }

    generateToken() {
        const random = ~~[Math.random() * 10000]
        const token = this.username + random.toString()
        // console.log(token)        
        return token

    }

    // SETTER METHOD
    set username(_username) {
        return this._username = _username
    }

    // GETTER METHOD
    get username() {
        return this._username
    }

    get register() {
        sessionStorage.setItem(`token`, this.generateToken())
        registerForm.style.display = 'none'
        logoutForm.style.display = 'block'
        setTimeout(function () {
            location.href = `#start`
        }, 300)
    }

    get logout() {
        sessionStorage.removeItem(`token`)
        location.reload()
    }
}