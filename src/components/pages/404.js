import ErrorMassage from "../errorMassage/ErrorMassage"
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <>
            <ErrorMassage/>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px',}}>Page doesn`t exist</p>
            <Link style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main Page</Link>
        </>
    )
}

export default Page404;