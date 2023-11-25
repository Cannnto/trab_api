    document.querySelector('#select').addEventListener('change',tabela)
  
    let table = document.querySelector('#table')
    let resposta = document.querySelector('.resposta')
    




    function tabela(){

        if(select.value == 0){
            table.innerHTML = ''
            resposta.innerHTML = ''
            table.style.display = "none"
            resposta.style.display ='none'
        }
        if(select.value == 1){
            table.innerHTML = ''
            resposta.innerHTML = ''
            _9397()
            table.style.display = "flex"
            resposta.style.display ='flex'
        }
        if(select.value == 2){
            table.innerHTML = ''
            resposta.innerHTML = ''
            _9398()
            table.style.display = "flex"
            resposta.style.display ='flex'

        }
        if(select.value == 3){
            table.innerHTML = ''
            resposta.innerHTML = ''
            _9399()
            table.style.display = "flex"
            resposta.style.display ='flex'
        }
    }
    
    
    
    
    
    
    async function _9397(){
        try{
            let url = `http://www.ipeadata.gov.br/api/odata4/Metadados`
            let response = await fetch(url)
            let js = await response.json()
            js = js.value[9397]
            let aux_= `<div class='mensagem'>${js.SERCOMENTARIO}</div>`
            let sercodigo = js.SERCODIGO
            let urlval = `http://www.ipeadata.gov.br/api/odata4/Metadados('${sercodigo}')/Valores`
                fetch(urlval)
                .then(response => response.json())
                .then(database => {
                    console.log(database.value)
                    let aux='<tr> <th>SERCODIGO</th> <th>VALDATA</th> <th>VALVALOR</th> <th>NIVNOME</th> <th>TERCODIGO</th> </tr>'
                    for (let i = 0; i < database.value.length; i++) {       
                        aux +=`
                        <tr>
                        <td>${database.value[i].SERCODIGO}</td>
                        <td>${database.value[i].VALDATA}</td>
                        <td>${database.value[i].VALVALOR}</td>
                        <td>${database.value[i].NIVNOME}</td>
                        <td>${database.value[i].TERCODIGO}</td>
                        </tr>
                        `

                    }
                    table.innerHTML +=aux
                    resposta.innerHTML+= aux_
                })
        }
        catch(error){
            console.error('Erro Encontrado')
        }        
    }
    async function _9398(){
        try{
            let url = `http://www.ipeadata.gov.br/api/odata4/Metadados`
            let response = await fetch(url)
            let js = await response.json()
            js = js.value[9398]
            let aux_= `<div class='mensagem'>${js.SERCOMENTARIO}</div>`
            let sercodigo = js.SERCODIGO
            let urlval = `http://www.ipeadata.gov.br/api/odata4/Metadados('${sercodigo}')/Valores`
                fetch(urlval)
                .then(response => response.json())
                .then(database => {
                    let aux='<tr> <th>SERCODIGO</th> <th>VALDATA</th> <th>VALVALOR</th> <th>NIVNOME</th> <th>TERCODIGO</th> </tr>'
                    for (let i = 0; i < database.value.length; i++) {       
                        aux +=`
                        <tr>
                        <td>${database.value[i].SERCODIGO}</td>
                        <td>${database.value[i].VALDATA}</td>
                        <td>${database.value[i].VALVALOR}</td>
                        <td>${database.value[i].NIVNOME}</td>
                        <td>${database.value[i].TERCODIGO}</td>
                        </tr>
                        `

                    }
                    table.innerHTML +=aux
                    resposta.innerHTML+= aux_
                })
        }
        catch(error){
            console.error('Erro Encontrado')
        }        
    }
    async function _9399(){
        try{
            let url = `http://www.ipeadata.gov.br/api/odata4/Metadados`
            let response = await fetch(url)
            let js = await response.json()
            js = js.value[9399]
            let aux_= `<div class='mensagem'>${js.SERCOMENTARIO}</div>`
            let sercodigo = js.SERCODIGO
            let urlval = `http://www.ipeadata.gov.br/api/odata4/Metadados('${sercodigo}')/Valores`
                fetch(urlval)
                .then(response => response.json())
                .then(database => {
                    let aux='<tr> <th>SERCODIGO</th> <th>VALDATA</th> <th>VALVALOR</th> <th>NIVNOME</th> <th>TERCODIGO</th> </tr>'
                    for (let i = 0; i < database.value.length; i++) {       
                        aux +=`
                        <tr>
                        <td>${database.value[i].SERCODIGO}</td>
                        <td>${database.value[i].VALDATA}</td>
                        <td>${database.value[i].VALVALOR}</td>
                        <td>${database.value[i].NIVNOME}</td>
                        <td>${database.value[i].TERCODIGO}</td>
                        </tr>
                        `

                    }
                    table.innerHTML +=aux
                    resposta.innerHTML+= aux_
                })
        }
        catch(error){
            console.error('Erro Encontrado')
        }        
    }






    aux=1
    function aside(){
        let aside = document.querySelector('#aside')
        aux++
        if(aux%2==0){
                aside.style.left = 0
                aside.style.position = 'fixed'
            }
        else{
                aside.style.left = '-50vw'
        }
    }




function myFunction(x) {
       x.classList.toggle("change");
     }
