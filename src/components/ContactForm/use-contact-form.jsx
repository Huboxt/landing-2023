import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useContactForm = (validate) => {
    // const { status } = this.state;

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (ev, captchaToken, onCaptchaReset) => {
        ev.preventDefault();
        const errors = validate(values);
    
        if (errors.email) {
            setErrors(validate(values));
            return;
        }
        if (!captchaToken) {
            return;
        }
        setErrors({});
        setIsSubmitting(true);
        const data = new FormData();
        data.append('name', values.name);
        data.append('email', values.email);
        data.append('message', `${values.services ? 'Services: ' + values.services : ''} ${values.ProjectBudget ? 'ProjectBudget: ' + values.ProjectBudget : ''} Message: ${values.message}`);
        data.append('g-recaptcha-response', captchaToken);
        const xhr = new XMLHttpRequest();
        xhr.open('post', 'https://formspree.io/f/mgerzjow');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            setIsSubmitting(false);
            if (xhr.status === 200) {
                setValues({});
                onCaptchaReset?.();
                toast.success("Success! Your message has been successfully delivered to our team.");
            } else {
                onCaptchaReset?.();
                toast.error("Something went wrong. Please try again.");
            }
        };
        xhr.send(data);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        setErrors(values => ({ ...values, [event.target.name]: null }));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        isSubmitting,
    };
};

export default useContactForm;
