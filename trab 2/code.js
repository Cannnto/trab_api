//cep{
document.querySelector('#enviar_cep').addEventListener('click',armazenar_cep)        

       function armazenar_cep(){    
              cep = document.querySelector('#cep').value 
              localStorage.setItem('cep',cep)
              resultado()
       }
       async function resultado(){
              try{
                     let cep_ = localStorage.getItem("cep")    
                     let url= "https://brasilapi.com.br/api/cep/v1/"+cep_
                     
                     let response = await fetch(url)
                     let js = await response.json()
                     let resposta = document.querySelector('.resposta_cep')
                     if(js.message == undefined){
                            resposta.innerHTML += 'Olá! Aqui estão alguns de seus dados:<br> Estado: <strong>'+JSON.stringify(js.state)+'</strong><br> Cidade: <strong>'+JSON.stringify(js.city)+'</strong><br> Bairro: <strong>'+JSON.stringify(js.neighborhood)+'</strong><br> Rua: <strong>'+JSON.stringify(js.street)+"</strong>";
                     }}
              catch(error){
                     console.error('erro encontrado')
              }
       }
       resultado()
//}

//car{
document.querySelector('#enviar_car').addEventListener('click',armazenar_car)        

       function armazenar_car(){    
              car = document.querySelector('#car').value 
              localStorage.setItem('car',car)
       }
       async function resultado_car(){
              try{
                     let car = localStorage.getItem("car")    
                     let url_car= "https://brasilapi.com.br/api/fipe/preco/v1/"+car
                     let response = await fetch(url_car)
                     let js = await response.json()
                     let resposta = document.querySelector('.resposta_car')
                     if(car.message == undefined){
                            resposta.innerHTML += "Dados do veiculo: <br> Marca: <strong>" +JSON.stringify(js[0].marca)+"</strong><br> Modelo: <strong>"+JSON.stringify(js[0].modelo)+"</strong><br> Preco: <strong>"+JSON.stringify(js[0].valor)+"</strong>";
                     }}
              catch(error){
                     console.error('erro encontrado')
              }
       }
       resultado_car()
//}
//estado{
       document.querySelector('#enviar_estado').addEventListener('click',armazenar_estado)        

       function armazenar_estado(){    
              estado = document.querySelector('#estado').value 
              localStorage.setItem('estado',estado)
       }
       async function resultado_estado(){
              try{
                     let estado = localStorage.getItem("estado")    
                     let url_estado= "https://brasilapi.com.br/api/ibge/uf/v1/"+estado
                     let response = await fetch(url_estado)
                     let js = await response.json()
                     let resposta = document.querySelector('.resposta_estado')
                     if(estado.message == undefined){
                            resposta.innerHTML += `Dados do estado: <br>Nome: <strong>${JSON.stringify(js.nome)}</strong> <br> Id: <strong>${JSON.stringify(js.id)}</strong> <br> Região: <strong>${JSON.stringify(js.regiao.nome)}</strong>`;
                     }}
              catch(error){
                     console.error('erro encontrado')
              }
       }
       resultado_estado()
//}

//feriado1{

document.addEventListener('DOMContentLoaded',function a(){

       fetch('https://brasilapi.com.br/api/feriados/v1/2024')
       .then (response => response.json())
       .then (database =>{
              let aside = document.querySelector('#aside')
              let result =  `<div class = 'feriados'> <h1> Feriados do ano de 2024 </h1><br>${JSON.stringify(database[1].name)}:${JSON.stringify(database[1].date)}<br>${JSON.stringify(database[3].name)}:${JSON.stringify(database[3].date)}<br>${JSON.stringify(database[11].name)}:${JSON.stringify(database[11].date)}</div>`
              console.log(database)
              result = result.replaceAll('"'," ")
              console.log (result)
              aside.innerHTML += result
       })
})









//}










aux=1
function aside(){
       let aside = document.querySelector('#aside')
       aux++
       if(aux%2==0){
              aside.style.left = 0
       }
       else{
              aside.style.left = '-50vw'
       }
}




function myFunction(x) {
       x.classList.toggle("change");
     }




