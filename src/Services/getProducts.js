import data from './data'
// import { products } from './data'

function getProducts (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(data) 
        }, 2000);
    })
}

export default getProducts 

// setTimeout con fetch / ver como poder utilizarlo, revisar funcion con Mati
// setTimeout(() => {
//     fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
//     .then(response => response.json())
//     .then(data => resolve(data))
//     .catch(err=>reject(err))
    
// }, 2000);

