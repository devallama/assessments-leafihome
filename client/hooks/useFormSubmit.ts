import React, { useState } from 'react';

const useFormSubmit = (endpoint: string) => {
    const [submitted, setSubmitted] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setSubmitted(true);

        const formData = new FormData(event.target as HTMLFormElement);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
        };
        let response: Response;

        try {
            response = await fetch(endpoint, options);
        } catch (error) {
            setError(true);

            return;
        }

        if (response.ok) {
            setSuccess(true);
        } else {
            setError(true);
        }
    };

    return { handleSubmit, submitted, success, error };
};

export default useFormSubmit;
