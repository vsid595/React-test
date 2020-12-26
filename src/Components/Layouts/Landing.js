import React from 'react'
import './bg_style.css';

const Landing = () => {
    return (
        <div>
            <div className="card text-center" id="bg">
                <div className="card-body" style={{ marginTop: 80 }}>
                    <h2 className="card-title" style={{ color: '#023e8a' }}>Welcome to Developer's Community</h2>
                    <p className="card-text" style={{ marginTop: 60 }}></p>


                    {/* <div className="buttons">
                        <Link to='/register' className='btn btn-primary'>
                            Register
                                </Link>
                        <Link to='/login' className='btn btn-success' style={{ marginLeft: 30 }}>
                            Login
                                </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Landing