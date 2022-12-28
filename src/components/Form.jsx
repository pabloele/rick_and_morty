import React from 'react'
import styles from './Form.module.css'
import { validate } from './validation'


export default function Form() {
    const [userData,setUserData] = React.useState({
        username:'',
        password:''
    })

    const [errors,setErrors] = React.useState({
        username:'',
        password:''
    })

    function handleInputChange(e) {
      
        setUserData(
            {
                ...userData,
                [e.target.name]:e.target.value
            }
        )

        let arraycito = { ...userData,  [e.target.name]:e.target.value };
        let errores = validate(arraycito);
        console.log(errores)
        setErrors(errores);
        
    }
        return (
            <div className={styles.divLog}>

                    <label>Username</label>
                    <input name='username' value={userData.username} onChange={(e)=>handleInputChange(e)}/>
                    {errors.username !== '' && <p className={styles.danger}>{errors.username}</p>}
                    
                    <label>Password</label> 
                    <input name='password' value={userData.password} onChange={(e)=>handleInputChange(e)}/>
                    {errors.password !== '' && <p className={styles.danger}>{errors.password}</p>}

            <button />

            </div>
        )
}
