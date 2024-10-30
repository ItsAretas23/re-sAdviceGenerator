const fetchAdvice = async() => {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    console.log(data);
     document.getElementById('Title').innerHTML = `ADVICE # ${ data.slip.id}`
    document.getElementById('Text').innerHTML  = `"${data.slip.advice}"`
}

fetchAdvice()