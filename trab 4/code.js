let any = document.querySelector('#any')
let race = document.querySelector('#race')
let all = document.querySelector('#all')






/*const Promise1 = new Promise((resolve, reject) => {
           resolve(fetch('https://deividfortuna.github.io/fipe/'))
        })*/

        function promessa1 (){
            return new Promise((resolve, reject) =>{
                fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas')
                .then((response) => response.json())
                .then((a) =>{
                    b = a
                    resolve(b)
                })
                
            })
        }

        function promessa2 (){
            return new Promise((resolve, reject) =>{
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((a) =>{
                    b = a
                    resolve(b)
                })
                
            })
        }

        function promessa3 (){
            return new Promise((resolve, reject) =>{
                fetch('https://swapi.dev/api/films/')
                .then((response) => response.json())
                .then((a) =>{
                    b = a
                    resolve(b)
                })
                
            })
        }

        const btn = document.querySelectorAll('.btn')
        let i = 0
    
        btn[0].addEventListener('click', function any(){
            if(i == 0){
            document.querySelector('.promise_container').style.display = 'block'
            Promise.any([promessa1(), promessa2(), promessa3()])
            .then((value) => {
                const promise_container = document.querySelector('.promise_container')
                promise_container.innerHTML += `<p class='promise_p'>${JSON.stringify(value)}</p>`
                i++
            })
            }
        })

        btn[1].addEventListener('click', function all(){
            if(i == 0){
            document.querySelector('.promise_container').style.display = 'block'
            Promise.all([promessa1(), promessa2(), promessa3()])
            .then((value) => {
                const promise_container = document.querySelector('.promise_container')
                promise_container.innerHTML += `<p class='promise_p'>${JSON.stringify(value[0])}</p>
                <p class='promise_p'>${JSON.stringify(value[1])}</p>
                <p class='promise_p'>${JSON.stringify(value[2])}</p>`
                i++
            })
            }
        })

        btn[2].addEventListener('click', function race(){
            if(i == 0){
            document.querySelector('.promise_container').style.display = 'block'
            Promise.race([promessa1(), promessa2(), promessa3()])
            .then((value) => {
                const promise_container = document.querySelector('.promise_container')
                promise_container.innerHTML += `<p class='promise_p'>${JSON.stringify(value)}</p>`
                i++
            })
            }
        })
    
    btn[3].addEventListener('click', function reset(){
        i = 0
        document.querySelector('.promise_container').innerHTML = ''
        document.querySelector('.promise_container').style.display = 'none'
    })





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