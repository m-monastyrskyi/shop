import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './SignUp.styles.scss'
import { toast } from 'react-toastify'

const SignUp = () => {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        if ( password !== confirmPassword ) {
            toast.error('Password don\'t match')
            setLoading(false)
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            createUserProfileDocument(user, { displayName })
                .then(() => {
                    toast.success(`Account for ${email} successfully created`)
                   // setLoading(false)
                })
        } catch ( err ) {
            toast.error(err.message)
            setLoading(false)
        }
    }

    return (
        <div className={'sign-up'}>
            <h2 className="title">
                I don't have an account
            </h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    label='Display name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    label='Confirm password'
                    required
                />
                <CustomButton loading={loading} type='submit'> Sign Up </CustomButton>
            </form>
        </div>
    )
}

export default SignUp