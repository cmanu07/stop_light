
const butZi = document.querySelector('.but-day')
const butNoapte = document.querySelector('.but-night')
const culoriSemafor = ['but-rosu', 'but-galben', 'but-verde']


//modul NIGHT
let intervalNoapte
const functCulGalbenN = () => {
    document.querySelector('.but-galben').classList.toggle('but-inactiv')
}
const modNoapte = () => {
    clearInterval(intervalNoapte)
    clearInterval(intervalZi)
    intervalNoapte = setInterval(functCulGalbenN, 1000)
    document.querySelector('.but-rosu').classList.add('but-inactiv')
    document.querySelector('.but-verde').classList.add('but-inactiv')
}

butNoapte.addEventListener('click', modNoapte)


//modul DAY
let stareCuloare
let intervalZi
const modZi = () => {
    clearInterval(intervalNoapte)
    clearInterval(intervalZi)
    stareCuloare = 0
    secventeInterval()
}
const secventeInterval = () => {
    let secventa = [
        [1,0,0, 1100],
        [1,1,0, 3500],
        [0,0,1, 1100],
        [0,1,0, 3500]
    ]
    const schimbaCul = () => {
        for (let i = 0; i<=2; i += 1) {
            if (secventa[stareCuloare][i] === 1)
                document.querySelector(`.${culoriSemafor[i]}`).classList.remove('but-inactiv')
            else document.querySelector(`.${culoriSemafor[i]}`).classList.add('but-inactiv')
        }
        stareCuloare++
        if (stareCuloare == 4) stareCuloare = 0
        intervalZi = setTimeout(schimbaCul, secventa[stareCuloare][3])
    }
    setTimeout(schimbaCul, 10)
}

butZi.addEventListener('click', modZi)