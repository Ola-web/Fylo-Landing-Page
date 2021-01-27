const validation = () => {
    const input = document.getElementById('input').value
    const result = document.getElementById('result')

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.match(pattern)) {
        result.textContent = 'Your email is correct'
        result.style.color = '#00ff00'

    } else {
        result.textContent = 'Please check your email'
        result.style.color = '#ff0000'
    }
    if (input === "") {
        result.textContent = ""
    }
}
const validation1 = () => {
    const input1 = document.getElementById('input1').value
    const text = document.getElementById('text')

    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input1.match(pattern)) {
        text.textContent = 'Your email is correct'
        text.style.color = '#00ff00'

    } else {
        text.textContent = 'Please check your email'
        text.style.color = '#ffffff'
    }
    if (input1 === "") {
        text.textContent = ""
    }
}






