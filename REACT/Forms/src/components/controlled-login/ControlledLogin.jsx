import { useState } from "react"

export default function ControlledLogin() {
    const [email, setEmail] = useState('Initial');
    const [password, setPassword] = useState('');

    // setTimeout(() => {
    //     console.log('set pesho')
    //     setEmail('pesho@abv.bg');
    // }, 2000)

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(email)
        console.log(password)

    }

    return (
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-6">Controlled Login</h2>

            <form onSubmit={submitHandler}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={emailChangeHandler}
                        name="username"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={passwordChangeHandler}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </div>
    )
}