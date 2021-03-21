function queDiaEs(horas,minutos) {
    const d = new Date();
    const minutosAnterior = d.getMinutes();
    const horasAnterior = d.getHours();
    let re = pasarAHoras(minutosAnterior,minutos);
    let h = horasAnterior + horas;
    if (re.hay) {
        h=h+1
    }
    let m = re.minutos
    dia(h,m)
}
function pasarAHoras(ma,m) {
    var minutos = ma + m
    if (minutos>=60) {
        minutos=minutos-60
    var hayHoras = true
    } else {
    var hayHoras = false
    }
    return {
        minutos:minutos,
        hay:hayHoras
    }
}
function dia(h,m) {
    let D = new Date()
    let d = D.getDate()
    if (h>=24) {
        h=h-24
        D=D.setDate(d+1)
    }
    if (h>=12) {
        h=h-12
        a='PM'
    }else{
        a='AM'
    }
    D=D.setMinutes(m)
    D = new Date(D)
    D=D.setHours(h)
    D = new Date(D)
    D = new Date(D)
    let DIA = cortar(D);
    console.log(DIA);
    DIA=DIA+' '+a
    document.getElementById('txt').innerHTML=DIA
}
function cortar(D) {
    let dia = D.toString()
    let largo = dia.length
    dia = dia.slice(3,24)
    return dia
}
function dioClick() {
    let h = document.getElementById('horas').value
    let m = document.getElementById('minutos').value
    if (!h) {
        h=0
    }else{
        h = parseInt(h)
    }
    if (!m) {
        m=0
    }else{
        m = parseInt(m)
    }
    queDiaEs(h,m)
}
document.getElementById('enviar').addEventListener('click',dioClick)