import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {gProvider} = useContext(AuthContext)

    const handleGoogle =()=>{
        console.log('ki obsta')
        gProvider()
        .then(result=>{
            const user = result.user
            console.log(user)
        })
        .catch(error=>console.log(error.message))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center p-4'>
                <button onClick={handleGoogle} className="btn btn-circle ">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;