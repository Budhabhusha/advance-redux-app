import { uiActions } from "./ui-slice"
import cartActions from './cart-slice'

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        'https://new-react-redux-2bd30-default-rtdb.firebaseio.com/cart.json'
      );

      if (!response.ok) {
        throw new Error('Could not fetch cart data!');
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      console.log("cartData",cartData)
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  };
};

export const sendCartData = (cart) =>{
    return async(dispatch)=>{
      dispatch(uiActions.showNotification({
        status:'pending',
        title:'Sending.....',
        message: 'Sending cart deta!'
      }))
  
      const sendReqest = async ()=>{
        const response = await fetch("https://new-react-redux-2bd30-default-rtdb.firebaseio.com/cart.json", {
          method: "PUT",
          body: JSON.stringify(cart),
        });
  
        if(!response.ok){
          throw new Error('Sending data failed...')
        }
      }
      try{
       await sendReqest()
        dispatch(uiActions.showNotification({
          status:'success',
          title:'Success!',
          message: 'Sending cart deta successfully'
        }))
      }catch{
        dispatch(uiActions.showNotification({
          status:'error',
          title:'Error!',
          message: 'Sending cart deta failed...'
        }))
      }
    }
  }
  