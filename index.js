
let a
let b
let c
let sqrt

sqrt = Math.sqrt
write = console.log
pow = Math.pow

document.getElementById(`but1`).onclick = function(){
    a = document.getElementById(`in1`).value
    b = document.getElementById(`in2`).value

    c = sqrt(pow(a, 2) + pow(b, 2))

    document.getElementById(`c`).innerHTML = `c = ` + String(c)
}
