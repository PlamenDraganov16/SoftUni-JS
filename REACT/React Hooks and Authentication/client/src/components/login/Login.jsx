import { useContext } from "react";
import useControlledForm from "../../hooks/useControlledForm";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router";

export default function Login() {
    const { onLogin } = useContext(UserContext)
    const navigate = useNavigate();
    const { values, changeHandler, submitHandler } = useControlledForm({ email: '', password: '' }, async (values) => {
        const { email, password } = values;

        const response = await fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();

        onLogin(result);
        navigate('/');
    });

    return (
        <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-4" onSubmit={submitHandler}>
                <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={changeHandler}
                        className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={changeHandler}
                        className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">Login</button>
            </form>
        </div>
    );
}
