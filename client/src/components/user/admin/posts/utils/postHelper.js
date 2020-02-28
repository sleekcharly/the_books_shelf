import React from 'react';
import * as Yup from 'yup';

// Do the yup form validation
export const BookSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    author:Yup.string()
        .required('Required'),
    pages: Yup.number()
        .required('Required'),
    rating: Yup.number()
        .required('Required'),
    price: Yup.number()
        .required('Required'),
});

export const FormElement = (props) => {
    let template = null;

    switch(props.elData.element){
        case 'input':
            template = <div className="row">
                <div className="twelve columns">
                    <input 
                        type={props.elData.type}
                        name={props.name}
                        onChange={ (e) => props.onHandleChange(e)}
                        onBlur={ (e) => props.onHandleBlur(e)}
                        value={props.elData.value}
                        placeholder={props.placeholder}
                        className="u-full-width"
                    />
                    {props.errors && props.touched ?
                        <div className="error_label">{props.errors}</div>
                    : null}
                </div>
            </div>
        break;

        case 'select':
            template = <div className="row">
                <div className="twelve columns">
                    <select 
                        name={props.name}
                        onChange={ (e) => props.onHandleChange(e)}
                        onBlur={ (e) => props.onHandleBlur(e)}
                        value={props.elData.value}
                        className="u-full-width"
                    >
                        {props.children}
                    </select>
                    {props.errors && props.touched ?
                        <div className="error_label">{props.errors}</div>
                    : null}
                </div>
            </div>
        break;
        default:
            template = null;
    }

    return template
}