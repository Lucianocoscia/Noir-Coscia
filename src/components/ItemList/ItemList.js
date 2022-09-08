import Item from '../Item/Item'

const ItemList = ({lista}) => {
    console.log(lista);
  return (
    <div className='grid_productos'>
        {lista.map((product) =>(
            <Item
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
            />
        ))}
    </div>
  )
}

export default ItemList