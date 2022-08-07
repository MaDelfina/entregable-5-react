// import { useEffect, useState } from "react"
// import { customFetch } from "../CustomFetch"
// import { productos } from "../productos/productos";
// import ItemList from "./ItemList"

// const ItemListContainer = () => {

//   console.log(productos);
  
//   const [ListProducts, SetListProducts] = useState([])
  
//     useEffect(() => {
//     customFetch(productos)
//     .then(data => SetListProducts(data))
//   }, [])

//   console.log(ListProducts);

//   return (
//       <>
//         <ItemList ListProducts={ListProducts} />
//       </>
//     )
//   }
//   export default ItemListContainer
