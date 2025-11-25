import { useState } from "react"

const initialValues = {
    name: '',
    email: '',
    password: '',
    country: 'uk',
    gender: 'male',
    coding: false,
    sports: false,
    music: false,
    bio: '',
}

function validate(values) {
    let errors = {};

    // validate name field
    if (values.name.length < 5) {
        errors['name'] = 'full name should be at least 5 characters long';
    }

    if (!values.name) {
        errors['name'] = 'name is required';
    }



    return errors;
}

export default function ValidatedForm() {

    const [data, setData] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {


        setData((state) => ({
            ...state,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };



    const submitAction = () => {
        const errors = validate(data);
        setErrors(errors);

        if (Object.keys(errors).length > 0) {
            return;
        }

        console.log('submit');
    }

    const inputClass = (field) => {
        return `${errors[field] ? 'border-red-500' : 'border-gray-300'} w-full px-3 py-2 border rounded-lg`
    }
    const errorText = (field) => {
        return errors[field] && (
            <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
        )
    }

    return (
        <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg space-y-6" action={submitAction}>

            <h2 className="text-2xl font-bold text-center">Registration Form</h2>

            {/* <!-- Full Name --> */}
            <div>
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={changeHandler}
                    className={inputClass('name')}
                    placeholder="Enter full name"

                />
                {errorText('name')}
            </div>

            {/* <!-- Email --> */}
            <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={changeHandler}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter email"
                />
            </div>

            {/* <!-- Password --> */}
            <div>
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={changeHandler}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter password"
                />
            </div>

            {/* <!-- Gender (Radio Buttons) --> */}
            <div>
                <label className="block text-gray-700 mb-1">Gender</label>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="gender" value='male' checked={data.gender === 'male'} onChange={changeHandler} className="accent-blue-600" />
                        <span>Male</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="gender" value='female' checked={data.gender === 'female'} onChange={changeHandler} className="accent-blue-600" />
                        <span>Female</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input type="radio" name="gender" value='other' checked={data.gender === 'other'} onChange={changeHandler} className="accent-blue-600" />
                        <span>Other</span>
                    </label>
                </div>
            </div>

            {/* <!-- Country (Select Box) --> */}
            <div>
                <label className="block text-gray-700 mb-1">Country</label>
                <select name="country" onChange={changeHandler} value={data.country} className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                    <option value='usa'>USA</option>
                    <option value='germany'>Germany</option>
                    <option value='uk'>UK</option>
                    <option value='india'>India</option>
                    <option value='other'>Other</option>
                </select>
            </div>

            {/* <!-- Bio (Textarea) --> */}
            <div>
                <label className="block text-gray-700 mb-1">Bio</label>
                <textarea
                    name="bio"
                    onChange={changeHandler}
                    value={data.bio}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows="4"
                    placeholder="Write a short bio..."
                ></textarea>
            </div>

            {/* <!-- File Upload --> */}
            <div>
                <label className="block text-gray-700 mb-1">Profile Picture</label>
                <input
                    type="file"
                    className="w-full text-gray-700"
                />
            </div>

            {/* <!-- Terms Checkbox --> */}
            <div className="space-y-2">

                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="coding"
                        onChange={changeHandler}
                        checked={data.coding}
                        className="accent-blue-600"
                    />
                    <span>Coding</span>
                </label>

                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="music"
                        onChange={changeHandler}
                        checked={data.music}
                        className="accent-blue-600"
                    />
                    <span>Music</span>
                </label>

                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        name="sports"
                        onChange={changeHandler}
                        checked={data.sports}
                        className="accent-blue-600"
                    />
                    <span>Sports</span>
                </label>

            </div>

            {/* <!-- Submit --> */}
            <button
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Register
            </button>

        </form>
    )
}