// Get Id From Index.html
let getText = document.getElementById('textarea')
let getWord = document.getElementById('word')
let getChar = document.getElementById('char')

getText.addEventListener('input', function () {
    var value = this.value
    document.getElementById('char').innerHTML = value.length

    value = value.trim()
    let words = value.split(' ')
    let clean = words.filter(function (elm) {
        return elm != ''
    })
    document.getElementById('word').innerHTML=clean.length
})