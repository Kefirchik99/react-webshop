import { Link } from "react-router-dom"
import './index.css'

export const ReturnButton = () => {
    return (
        <div className="returnButton">
            <Link to='/'>
                <h3>HOME</h3>
            </Link>
        </div>
    )
}