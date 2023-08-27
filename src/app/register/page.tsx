import React from 'react'
import Navbar from '../(site)/components/Navbar/navbar';
import BannerCta from '../(site)/components/banner-cta';
import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <>
        <BannerCta 
            callContent="Summer courses are here!"
            actionContent="Take me"
            url="/courses"
            closable
        />
        <Navbar />

        {/* Form */}
        <main className="w-full px-5 py-4 flex justify-center items-center">
            <RegisterForm />
        </main>
    </>
  )
}

export default Register;