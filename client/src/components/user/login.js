import React, { Component } from 'react'
import { Formik } from 'formik'; // for form handling
import * as Yup from 'yup'; // for form input validation

// redux stuff
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/user_actions';

// create the user login schema with yup
const LoginSchema = Yup.object().shape({
    password: Yup.string()
    .min(6, 'Too short !!')
    .required('Required !!'),
    email: Yup.string()
    .email('Invalid email')
    .required('Required !!')
})

class Login extends Component {

    state = {
        success: false,
        validation: false
    }

    //determine auth and set state success
    static getDerivedStateFromProps(props, state){
        const auth = props.user.auth;
        if(auth){
            return {
                success: auth ? true : false
            }
        }
        return null;
    };

    // redirect to admin page once authenticated
    componentDidUpdate(){
        if(this.state.success){
            this.props.history.push('/admin')
        }
    }

    render() {
        return (
            <div className="container form_container">
                <h1>Welcome back</h1>
                <hr/>
                <h4>Sign in here:</h4>

                <Formik 
                    initialValues={{
                        email: 'charles@email.com',
                        password: 'testing123'
                    }}
                    validationSchema={LoginSchema}
                    onSubmit={ values => {
                        this.props.dispatch(loginUser(values))
                            .then (response => {
                                if(!this.props.user.auth){
                                    this.setState({
                                        validation: true
                                    })
                                }
                            })
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="twelve columns">
                                    <input 
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Enter your email"
                                        className="u-full-width"
                                    />
                                    {errors.email && touched.email ?
                                        <div className="error_label">
                                            {errors.email}
                                        </div>
                                    : null
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="twelve columns">
                                    <input 
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                        placeholder="Enter your password"
                                        className="u-full-width"
                                    />
                                    {errors.password && touched.password ?
                                        <div className="error_label">
                                            {errors.password}
                                        </div>
                                    : null
                                    }
                                </div>
                            </div>

                            <button type="submit">
                                Login
                            </button>
                            <br/>
                            {
                                this.state.validation ?
                                    <div className="error_label">
                                       Error, please try again. 
                                    </div>
                                : null
                            }
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Login)
