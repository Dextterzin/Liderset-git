const onekg = document.querySelector("#onekg-btn")
const twokg = document.querySelector("#twokg-btn")
const threekg = document.querySelector("#threekg-btn")
const fivekg = document.querySelector("#fivekg-btn")
const sevenkg = document.querySelector("#sevenkg-btn")
const result = document.querySelector(".p")



const teste = () => {
    const one = onekg.value
    const two = twokg.value
    const three = threekg.value
    const five = fivekg.value
    const seven = sevenkg.value

    const oneV = one * 85
    const twoV = two * 120
    const threeV = three * 152
    const fiveV = five * 203
    const sevenV = seven * 249

    const list = [oneV, twoV, threeV, fiveV, sevenV]

    let tot = 0
    for(c in list) {
        tot += list[c]
    }

    result.classList.add("pp")
    result.innerHTML = `O valor total é ${tot}`

}