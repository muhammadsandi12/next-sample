import { useRouter } from "next/router"
function DetailsProduct(){
    const router = useRouter()
    const detailsProduct = router.query.detailsproduct
    return<h1>Details Product Page {detailsProduct}</h1>
}
export default DetailsProduct