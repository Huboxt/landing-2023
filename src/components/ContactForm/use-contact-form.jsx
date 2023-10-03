import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const useContactForm = (validate) => {
    // const { status } = this.state;

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        const errors = validate(values);
    
        if (errors.email) {
            setErrors(validate(values));
            return;
        }
        setErrors({});
        setIsSubmitting(true);
        const data = new FormData();
        data.append('name', values.name);
        data.append('email', values.email);
        data.append('message', `${values.services ? 'Services: ' + values.services : ''} ${values.ProjectBudget ? 'ProjectBudget: ' + values.ProjectBudget : ''} Message: ${values.message}`);
        const xhr = new XMLHttpRequest();
        xhr.open('post', 'https://formspree.io/f/mgerzjow');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                setValues({});
                toast.success("Success! Your message has been successfully delivered to our team.");
            } else {
                // this.setState({ status: "ERROR" });
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
