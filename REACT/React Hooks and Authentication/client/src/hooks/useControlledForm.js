import { useState } from "react";

export default function useControlledForm(initialValues, onSubmit) {
    const [values, setValues] = useState(initialValues);

    // TODO Handle checkbox change
    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const submitHandler = async (e) => {
        // prevent refresh
        e.preventDefault();

        // Call submit callback
        await onSubmit(values);

        // Clean up form inputs
        setValues(initialValues);
    }

    return {
        values,
        changeHandler,
        submitHandler,
    }
}
