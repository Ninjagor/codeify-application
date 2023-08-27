"use client";

import React, { useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';


const RegisterForm = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors} } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
            </form>
        </>
    )
}

export default RegisterForm;