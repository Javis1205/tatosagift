export function ADDCART(data){
  return {
    type: "ADDCART",
    noidung: data.VALUE,
  }
}
export function MENU_SIDE(data){
  return {
    type: "MENU_SIDE",
    noidung: data.VALUE,
  }
}
