import ReviewForm from "~/components/ReviewForm/ReviewForm";
import { ReviewLayout } from "./Review.style";
import ReturnBlock from "~/components/ReturnLink/Return";
import { Link } from "react-router-dom";

export default function ReviewPage() {
    return (
        <ReviewLayout>
            <Link to='/' style={{ 
                textDecoration:'none', 
                width:'400px', 
                padding:'80px 2.5% 15px' 
            }}>
                <ReturnBlock backmessage="Back to homepage" />
            </Link>
            <ReviewForm />
        </ReviewLayout>
    );
}