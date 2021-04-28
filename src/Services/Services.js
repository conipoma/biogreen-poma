const getProduct = new Promise ((resolve, reject) => {
    
    fetch('https://raw.githubusercontent.com/conipoma/biogreen-poma/main/src/components/Item/Item.json')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err=>reject(err))
})

module.exports = {
    getProduct
}