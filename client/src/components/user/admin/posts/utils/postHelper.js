import React from 'react';



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
                    {props.error && props.touched ?
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