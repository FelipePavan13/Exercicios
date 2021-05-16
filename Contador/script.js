function count () {
    let initNumber = Number(document.getElementById('numeroInicio').value);
    let endNumber = Number(document.getElementById('numeroFim').value);
    let step = Number(document.getElementById('numeroPasso').value);
    let html = document.getElementById('contador')
    html.innerHTML = ''

    if (initNumber < endNumber) {
        while (initNumber <= endNumber) {
            html.innerHTML += `${initNumber} `
            initNumber += step;
        }
    } else if (initNumber > endNumber) {
        while (initNumber >= endNumber) {
            html.innerHTML += `${initNumber} `
            initNumber -= step;
        }
    } else {
        alert('Contagem inválida')
    }
}