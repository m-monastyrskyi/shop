import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import { signInWithGoogle } from '../../firebase/firebase.utils'

import './SignIn.style.scss'

const SignIn = () => {
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )

    const handleSubmit = e => {
        e.preventDefault()
        setEmail( '' )
        setPassword( '' )
    }


    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with Your email and password</span>
            <form onSubmit={ handleSubmit }>
                <FormInput
                    handleChange={ e => setEmail( e.target.value ) }
                    name="email"
                    type="email"
                    label="email"
                    value={ email }
                />

                <FormInput
                    handleChange={ e => setPassword( e.target.value ) }
                    name="password"
                    type="password"
                    label="password"
                    value={ password }
                />
                <div className="buttons">
                    <CustomButton type="submit"> Sign in</CustomButton>
                    <CustomButton
                        isGoogleSignIn
                        onClick={ signInWithGoogle }>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>

        </div>
    )
}

export default SignIn