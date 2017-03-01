function cloneObject(obj){
  return JSON.parse(JSON.stringify(obj));
}
let newState = {
  Items:{
    isnull:true,
    value:0,
    isOpenMenu:false,
    Product:{

    }
  }
}
function addCart(newState,id){
  let when = newState.Items.value;
  let item = 'item'+ when.toString();
  newState.Items.Product[item] = id;
}
export default function reducers(state,action){
  switch (action.type) {
    case "ADDCART":
      newState = cloneObject(state)
      newState.Items.value = action.noidung;
      addCart(newState,action.id);
      newState.Items.isnull = false;
      console.log(newState);
      return newState;
      break;
    case "DELCART":
      newState = cloneObject(state)
      newState.Items.value = action.noidung;
      if(newState.Items.value==0){
        newState.Items.isnull = true;
      };
      return newState;
      break;
    case "MENU_SIDE":
      newState = cloneObject(state)
      newState.Items.isOpenMenu = action.noidung;
      return newState;
      break;
    default: return state || newState;

  }
}
