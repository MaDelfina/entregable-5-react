import Item from "./Item";

const ItemList = ({ListProducts}) => {

  console.log(ListProducts);

  return (
    <>
        {ListProducts.map(product => <Item key={product.id} product={product} />)}
    </>
  ) 
}
export default ItemList