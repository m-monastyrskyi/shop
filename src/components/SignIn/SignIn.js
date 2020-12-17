import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import { googleSignInStart } from '../../redux/user/user.actions'

import './SignIn.style.scss'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingGoogle, setLoadingGoogle] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                toast.success('Successfully signed in')
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message, { autoClose: 4000 })
            })
    }

    const handleSignInWithGoogle = e => {
        e.preventDefault()
        setLoadingGoogle(true)

        signInWithGoogle()
            .then(() => {
                setLoadingGoogle(false)
                toast.success('Successfully signed in')
            })
            .catch(err => {
                setLoadingGoogle(false)
                toast.error(err.message)
            })
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
                    <CustomButton type="submit" loading={loading}>Sign in</CustomButton>
                    <CustomButton
                        type='button'
                        loading={loadingGoogle}
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