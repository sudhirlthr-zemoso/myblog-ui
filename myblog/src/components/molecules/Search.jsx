import React from 'react';
import InputField from '../atoms/InputField'

export default function Search(props){
    const {value, onChange , children} = props
    
    return(
        <form>
            {children}
            <InputField
                onChange={onChange}
                value={value}
                placeholder="Search blog by title"
            />
        </form>
    );
}