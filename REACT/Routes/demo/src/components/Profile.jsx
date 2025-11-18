import { Navigate } from "react-router";

export default function Profile({
    user
}) {

    // if (!username) {
    //     return <Navigate to='/login' />
    // }


    return (
        <>
            <h2>Profile</h2>

            <strong>{user.username}</strong>
        </>
    );
}