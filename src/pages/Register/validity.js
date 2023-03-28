const validName = /^[a-zA-Z]+$/;
const validPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const validity = (props)=>{
    const errors = {};
    if(!validName.test(props.firstname)){
        errors.firstname = true;
    }
    if(!validName.test(props.lastname)){
        errors.lastname = true;
    }
    if(!validPassword.test(props.password)){
        errors.password = true;
    }
    if(!validEmail.test(props.email)){
        errors.email = true;
    }

    if(Object.keys(errors).length === 0) return null;
    return errors;
}