import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import './SignIn.style.scss'
import { useDispatch } from 'react-redux'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(emailSignInStart({ email, password }))
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with Your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    handleChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    label="email"
                    value={email}
                />

                <FormInput
                    handleChange={e => setPassword(e.target.value)}
                    name="password"
                    type="password"
                    label="password"
                    value={password}
                />

                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton
                        type='button'
                        isGoogleSignIn
                        onClick={() => dispatch(googleSignInStart())}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn