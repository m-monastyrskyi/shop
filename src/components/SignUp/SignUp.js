import React, { useState } from 'react'
import FormInput from '../FormInput'
import CustomButton from '../CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './SignUp.styles.scss'

const SignUp = () => {
    const [ displayName, setDisplayName ] = useState( '' )
    const [ email, setEmail ] = useState( '' )
    const [ password, setPassword ] = useState( '' )
    const [ confirmPassword, setConfirmPassword ] = useState( '' )

    const handleSubmit = async e => {
        e.preventDefault()
        if ( password !== confirmPassword ) {
            alert( 'Password don\'t match' )
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword( email, password )

            createUserProfileDocument( user, { displayName } )
                .then( () => {
                    setDisplayName( '' )
                    setEmail( '' )
                    setPassword( '' )
                    setConfirmPassword( '' )
                } )
        } catch ( err ) {
            console.log( err.message )
        }
    }

    return (
        <div className={ 'sign-up' }>
            <h2 className="title">
                I don't have an account
            </h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form' onSubmit={ handleSubmit }>
                <FormInput
                    type='text'
                    name='displayName'
                    value={ displayName }
                    onChange={ e => setDisplayName( e.target.value ) }
                    label='Display name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={ email }
                    onChange={ e => setEmail( e.target.value ) }
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={ password }
                    onChange={ e => setPassword( e.target.value ) }
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={ confirmPassword }
                    onChange={ e => setConfirmPassword( e.target.value ) }
                    label='Confirm password'
                    required
                />
                <CustomButton type='submit'> Sign Up </CustomButton>
            </form>
        </div>
    )
}

export default SignUp