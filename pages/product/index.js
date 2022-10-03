import Link from "next/link"

function Product({productId = 100}){
    return(
        <div>
            <Link href='/'>
                Home
            </Link>
            <Link href="/product/1">
            <h2>Product 1</h2>
            </Link>
            <Link href="/product/2">
            <h2>Product 2</h2>
            </Link>
            <Link href= {`/product/${productId}`}>
            <h2>Product {productId} </h2>
            
            </Link>


        </div>

    )
}
export default Product