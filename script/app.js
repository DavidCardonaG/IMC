import {data} from '../data/data.js';

let persona = document.getElementById('main');
let fragment = document.createElement('fragment');

document.addEventListener('DOMContentLoaded', () => {
    loadPerson(data);
})
const loadPerson = data => {

    data.forEach( person =>{
        const {name,altura,peso} = person;
        persona.innerHTML =`NOMBRE: ${name}
        ALTURA: ${altura}CM,
        PESO: ${peso} KG`
        const clone = persona.cloneNode(true);
       fragment.appendChild(clone);


})
 items.appendChild(fragment);
}

localStorage.setItem("usuario", JSON.stringify(data));
JSON.parse(localStorage.getItem("usuario"));




function graficar(ctx){
    const{name,altura,peso} = data;
    console.log(data);
    const chart = new Chart(ctx,{
        type: 'bar',
        data:{
            labels:[20,40,60,80,100,120],
            datasets:[{
                label: 'Peso',
                data: [89,45,12],
                bordercolor: 'black',
                backgroundColor: 'red'
            }, 
            {
                label: 'altura',
                data:[ 20,35,74],
                bordercolor: 'orange',
                backgroundColor: 'orange'
            },
            {
                label: 'name',
                data: [65,82,42],
                bordercolor: 'green',
                backgroundColor: 'green'
            }
        ]
        }
    })

}
function getChars(){
    const ctx = document.getElementById('myChart').getContext('2d');
    graficar(ctx);

}
getChars();
