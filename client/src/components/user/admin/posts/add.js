import React, { Component } from 'react';
import { Formik } from 'formik';
import AdminLayout from '../../../../hoc/adminLayout';

import {
    FormElement
} from './utils/postHelper';

class AddPosts extends Component {
    state = {
        editorState:'',
        editorContentHtml:'',
        success: false
    }

    render(){
        return (
            <AdminLayout>

                <h4>Add a post</h4>

                <Formik 
                   initialValues={{
                    name: "",
                    author:"",
                    pages:"",
                    rating:'',
                    price:""
                   }}
                   onSubmit={(values)=>{

                   }}
                >
                    { ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit
                    }) =>(
                        <form onSubmit={handleSubmit}>
                            <FormElement 
                                elData={{element:'input', type:'text', value:values.name }}
                                placeholder="The title of the book"
                                name="name"
                                onHandleChange={(e) => handleChange(e)}
                                onHandleBlur={(e) => handleBlur(e)}
                                errors={errors.name}
                                touched={touched.name}
                            />
                        </form>
                    )}
                </Formik>

            </AdminLayout>
        )
    }
}

export default AddPosts;