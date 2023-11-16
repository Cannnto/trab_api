    document.addEventListener('DOMContentLoaded',function a(){
        let aux1 = document.querySelector('#paises')
        let aux2 = document.querySelector('.resultado')
        let aux=''
        let aux_=0
        
        fetch('paises.json')
        .then (response => response.json())
        .then (database =>{
            {
            //selct com todos os paises
                for(let i=0;i<database.length;i++){
                    aux+='<option value="'+i+'" id='+'option'+' >'+database[i].nome_pais+'</option>'
                }   
                aux1.innerHTML += aux 
            }
            {   
            //elementos de cada pais
                document.querySelector('#paises').addEventListener('click',a)
                function a(){
                    aux_++
                    aux=''
              
                    if((document.querySelector('.resultado').contains(document.querySelector('.paises_text'))) == true){
                    aux_=0
                    }   
                    console.log(aux_)
                    if(aux_%2 == 0){
                            aux+= 'pais'+(database[document.querySelector('#paises').value].gentilico)+'<br>'+
                            (database[document.querySelector('#paises').value].nome_pais)+'<br>'+
                            (database[document.querySelector('#paises').value].nome_pais_int)+'<br>'+
                            (database[document.querySelector('#paises').value].sigla)
                            aux2.innerHTML ='<div class="paises_text">'+aux+'</div>'
                    }
                    if(aux_%2 == 1){
                        aux2.innerHTML=null
                    }
                }
            }
        }) 
        .catch(error => console.error("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"))
    })