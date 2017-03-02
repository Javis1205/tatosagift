export function ADDCART(data){
  return {
    type: "ADDCART",
    noidung: data.VALUE,
    ID:data.ID,
  }
}
export function MENU_SIDE(data){
  return {
    type: "MENU_SIDE",
    noidung: data.VALUE,
  }
}
export function DELCART(data){
  return {
    type: "DELCART",
    noidung: data.VALUE,
    num:data.NUM,
  }
}
export function COST(data){
  return {
    type: "COST",
    noidung: data.VALUE,
  }
}
