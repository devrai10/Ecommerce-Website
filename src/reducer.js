export const initialState = {
    basket:[{
      id:"2344",
      title:"app ipad pro",
      price:445.99,
      rating:4,
      image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-wifi-spacegray-202003?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583544727993"  
    },
],
    user:null,
    
};

export const getBasketTotal=(basket)=>
basket?.reduce((amount,item)=>item.price + amount,0);


const reducer=(state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logiv for adding item
            return{
                ...state,
                basket: [...state.basket,action.item]
        
        };
            
        case 'REMOVE_ITEM_FROM_BASKET':
           
            let newBasket=[...state.basket];
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id);
            if(index>=0){
                    newBasket.splice(index,1);


            }
            
            return{
            ...state, basket : newBasket};    
        

            default:
                return state;
    }
}

export default reducer;