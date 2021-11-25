import {useLocation} from "react-router";

const Success = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            Payment Successful!
        </div>
    )
}

export default Success
