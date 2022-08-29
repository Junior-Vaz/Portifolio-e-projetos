//Eventos Listeners
var a = document.getElementById('iver')
a.addEventListener('click',Calcular)

//Variaveis 
var atual = document.getElementById('iatual') //resultado
var veloc = document.getElementById('ivel')
var mult = document.getElementById('iMulta')
var multa = document.getElementById('iMulta1')

//função para calcular limites
function Calcular(){
    var RecV = Number(veloc.value)
    atual.innerHTML = `${RecV} Km/hs`

    //condição caso ultrapassar limites
    if (RecV > 90) {
        var aviso = document.getElementById('iaviso')
        aviso.innerHTML = 'Você ultrapassou a velocidade <strong>PERMITIDA</strong> portando será <strong>MULTADO!</strong>'
        
    }
    else{
        var aviso = document.getElementById('iaviso')
        aviso.innerHTML = 'Nenhuma infração.'
    }
    //condições com valores de multas caso ultrapassar 90km
    
            if(RecV > 90 && RecV <150){
            mult.style.transition = '0.5s'
            mult.innerHTML = `<strong>Multa de R$ 100,00</strong> por Excesso de Velocidade de ${RecV} Km/hr`
            mult.style.background = 'rgb(2, 0, 121)'
            mult.style.borderRadius = '10px'
            mult.style.padding = '10px'
            }else{
                if(RecV > 150 && RecV <200){
                    multa.style.transition = '0.5s'
                    multa.innerHTML = `<strong>Multa de R$ 210,00</strong> por Excesso extremo de valocidade de ${RecV} Km/Hr`
                    multa.style.background = 'rgb(2, 0, 121)'
                    multa.style.borderRadius = '10px'
                    multa.style.padding = '10px'
                    }             
            }if(RecV < 90){
                mult.innerHTML = 'Sem multa ou infrações a mostrar'
                mult.style.background = 'rgb(2, 0, 121)'
                mult.style.borderRadius = '10px'
                mult.style.padding = '10px'
                mult.style.transition = '0.5s'

                multa.style.transition = '0.5s'
                multa.innerHTML = 'Sem multa ou infrações a mostrar'
                multa.style.background = 'rgb(2, 0, 121)'
                multa.style.borderRadius = '10px'
                multa.style.padding = '10px'
                }

                    }     
