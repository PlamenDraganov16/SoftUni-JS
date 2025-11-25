export default function UncontrolledLogin() {

  const inputHandler = (event) => {
    console.log(event.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Convert formData to object
    const data = Object.fromEntries(formData);

    console.log(data);
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

      <form onSubmit={submitHandler}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            onInput={inputHandler}
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