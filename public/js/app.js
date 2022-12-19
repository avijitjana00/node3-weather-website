console.log('client side javscript file is loaded')


// fetch('https://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) =>{
//         console.log(data)
//     })
// })

// //fether weather data
// fetch('http://localhost:7000/weather?address=!').then((response) =>{
//     response.json().then((data) =>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
//messageOne.textContent = 'From Javascript'

const messageTwo = document.querySelector('#message-2') 


weatherForm.addEventListener('submit',(e) =>{
    e.preventDefault()
    const location = search.value;
    messageOne.textContent = 'Loading.......'
    messageTwo.textContent = ''
    
//fether weather data
fetch('http://localhost:7000/weather?address=' + location).then((response) =>{
    response.json().then((data) =>{
        if(data.error){
           messageOne.textContent = data.error
        }else{
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
        }
    })
})
})