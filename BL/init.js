// Declaring Element
const username = document.getElementById(`username`)
const registerForm = document.getElementById(`registerForm`)
const logoutForm = document.getElementById(`logoutForm`)
const startSection = document.getElementById(`start`)
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const rewardImage = document.getElementById('imgReward')

const player = new Player()
let default_options = ['😍', '😂', '😱']
box1.textContent = default_options[0]
box2.textContent = default_options[1]
box3.textContent = default_options[2]

function dice() {
    let gacha = []
    for(let i = 0; i < default_options.length; i++) {
        const roll = default_options[~~(Math.random() * default_options.length)]
        console.log(roll)
        gacha.push(roll)
    }
    return gacha
}

function reward() {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand').then(x => x.json()).then(result => {
        // console.log('hasil reward buat anda : ', result)
        
        // Set nama reward
        let text = document.createElement('h1')
        text.textContent = result.name
        
        // Set img
        let img = new Image(200, 200)
        img.src = result.image_link
        
        // Set element
        rewardImage.appendChild(img)
        rewardImage.appendChild(text)
    })
}

function winner() {
    if(box1.textContent === box2.textContent && box1.textContent === box3.textContent ) {
        // console.log(`win`)
        location.href = '#reward'
        reward()
    } else {
        console.log(`lose`)
    }
}

function start() {
    // selama
    const rolling = setInterval(function() {
        // console.log(dice())

        const result = dice()
        console.log(`acak gambar ...`, dice()) 
        box1.textContent = result[0]
        box2.textContent = result[1]
        box3.textContent = result[2]
    }, 100)
    
    // ketika 
    setTimeout(function(){
        clearInterval(rolling)
        winner()
    }, 1000)
}

onload = function () {
    const token = sessionStorage.getItem(`token`)

    if(token && token !== null) {
        registerForm.style.display = 'none'
        logoutForm.style.display = 'block'
    } else {
        registerForm.style.display = 'block'
        logoutForm.style.display = 'none'
    }
}

function register() {

    // Call Setter
    player.username = username.value
    player.register
    
    // // Call Getter
    // console.log(player.username)

}

function logout () {
    player.logout
}