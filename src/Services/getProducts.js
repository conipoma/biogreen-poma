import data from './data'
// import { products } from './data'

function getProducts (){
    return new Promise((resolve) => {
        setTimeout(() => {
           resolve(data) 
        }, 2000);
    })
}

export default getProducts 


// FUNCION QUE DEBO CONSULTAR A MATI
    // const getProducts = new Promise ((resolve, reject) => {
    //     fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
    //     .then(response => response.json())
    //     .then(data => resolve(data))
    //     .catch(err=>reject(err))
    
    // })
    
    // module.exports = {
    //     getProducts
    // }


