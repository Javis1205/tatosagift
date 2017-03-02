function cloneObject(obj){
  return JSON.parse(JSON.stringify(obj));
}
let newState = {
  Items:{
    cost:0,
    isnull:true,
    value:0,
    isOpenMenu:false,
    Product:{

    }
  }
}
function addCart(newState,id){
  let when = newState.Items.value;
  newState.Items.Product[when-1] = id;
}
export default function reducers(state,action){
  switch (action.type) {
    case "DELCART":
      console.log("DELCART"+action.noidung);
      newState = cloneObject(state)
      let id = action.noidung;
      for(i=0;i<newState.Items.value;i++){
          console.log("vong lap fp");
        if(newState.Items.Product[i] == action.noidung){
          console.log("Doi tuong giong nhau");
          delete newState.Items.Product[i];
          let r = i;
          if(r != newState.Items.value - 1){
            for(q=r+1;q<newState.Items.value;q++){
              let b = newState.value - 1;
              let plus = newState.Items.Product[q]
              newState.Items.Product[q-1] = plus;
              if(q==newState.Items.value-1){
                delete newState.Items.Product[b];
              }
            }
          }
          break;
        }
      }
      newState.Items.value = action.num;
      return newState;
      break;
    case "COST":
      newState = cloneObject(state)
      newState.Items.cost = action.noidung;
      return newState;
      break;
    case "ADDCART":
      newState = cloneObject(state)
      newState.Items.value = action.noidung;
      addCart(newState,action.ID);
      newState.Items.isnull = false;
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
