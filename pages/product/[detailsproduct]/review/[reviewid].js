import { useRouter } from "next/router"


function Review (){
    const router = useRouter()
    const {reviewid, detailsproduct} = router.query
    return<h1>Review {reviewid} for product {detailsproduct}</h1>
}
export default Review