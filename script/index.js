
// let bagItems=[];
// onLoad();


// function onLoad() {
//     displayItemsOnHomePage();
//     displayBagIcon();
// }

// function addToBag(itemId){
//     bagItems.push(itemId);    
//     displayBagIcon();    
// }
// function displayBagIcon() {
//     let bagItemCountElement=document.querySelector('.bag-item-count');   
//     if(bagItems.length==0) { 
//         bagItemCountElement.style.visibility= "hidden";
//     }else{ 
//         bagItemCountElement.style.visibility= "visible";
//         bagItemCountElement.innerText= bagItems.length;        
//     }
// }
//--------------------------------


let bagItems;
onLoad();


function onLoad() {

    let bagItemsStr = localStorage.getItem( 'bagItems' );
    bagItems = bagItemsStr ? JSON.parse( bagItemsStr ) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId){
    bagItems.push(itemId);  
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();    
}
function displayBagIcon() {
    let bagItemCountElement=document.querySelector('.bag-item-count');   
    if(bagItems.length==0) { 
        bagItemCountElement.style.visibility= "hidden";
    }else{ 
        bagItemCountElement.style.visibility= "visible";
        bagItemCountElement.innerText= bagItems.length;        
    }
}

localStorage.setItem('bagItems', JSON.stringify(bagItems));

function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector(`.items-container`);

    if(itemsContainerElement == null){ //means home page not to be load
        return;
    }

    let innerHTML='';
    items.forEach(item => {
        innerHTML+=`
        <div class="item-container">
            <img class="item-image" src=${item.image} alt=${item.item_name}>
            <div class="stars">
                <span>${item.rating.stars} ⭐ | </span>
                <span>${item.rating.count}</span>
            </div>

            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
                            
            <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">${item.original_price}</span>
                <span class="discount">${item.discount_percentage}% OFF</span>
            </div>
            
            <button class="btn-add-bag" onclick="addToBag(${item.id})"> Add to Bag</button>
        </div>    
    `
    });

    itemsContainerElement.innerHTML= innerHTML;

    

}