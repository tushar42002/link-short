import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const Form = () => {

  let navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({})

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify({email: userDetail.email, password: userDetail.password})
    });

    let json = await response.json();

    if(json.success){
      localStorage.setItem('id', json.id)

      navigate('/')
      alert('log in successfull')

    }else {
      navigate('/form')
      alert('try again somthing is wrong')
    } 
  }



  const handleSignup = async (e) => {
    e.preventDefault();

    if(userDetail.password === userDetail.cpassword){
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({name: userDetail.name, email: userDetail.email, password: userDetail.password})
      });
  
      let json = await response.json();
  
      if(json.success){
        localStorage.setItem('id', json.id)
  
        navigate('/')
        alert('log in successfull')
  
      }else {
        navigate('/form')
        alert('try again somthing is wrong')
      } 
    }else{
      alert('password does not match')
    }
  }

  console.log(userDetail);

  const onChange = (e) => {
    setUserDetail({...userDetail, [e.target.name]:e.target.value })
  }




  return (
    <div className='container mt-5 w-50'>

      {/* // < !--Pills navs-- > */}
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            id="tab-login"
            data-mdb-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true">Login</a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            id="tab-register"
            data-mdb-toggle="pill"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false">Register</a>
        </li>
      </ul>

      {/* ------------------------------------------ log in --------------------------- */}

      
      <div className="tab-content">
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
          <form onSubmit={ handleLogin }>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input type="email" id="loginName" onChange={onChange} name='email' value={userDetail.email} className="form-control" />
              <label className="form-label" htmlFor="loginName">Email or username</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <input type="password" id="loginPassword" onChange={onChange} name='password' value={userDetail.password} className="form-control" />
              <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>

            {/* <!-- 2 column grid layout --> */}
            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check mb-3 mb-md-0">
                  <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                  <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-4">Log in</button>

            {/* <!-- Register buttons --> */}
            <div className="text-center">
              <p>Not a member? <a href="#!">Register</a></p>
            </div>
          </form>
        </div>



{/* ------------------------------------------- registeration ------------------------------- */}


        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
          <form>

            {/* <!-- Name input --> */}
            <div className="form-outline mb-3">
              <input type="text" name='fname' id="registerName" className="form-control" />
              <label className="form-label" htmlFor="registerName">Name</label>
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-3">
              <input type="email" name='email' id="registerEmail" className="form-control" />
              <label className="form-label" htmlFor="registerEmail">Email</label>
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <input type="password" name='password' id="registerPassword" className="form-control" />
              <label className="form-label" htmlFor="registerPassword">Password</label>
            </div>

            {/* <!-- Repeat Password input --> */}
            <div className="form-outline mb-3">
              <input type="password" name='cpassword' id="registerRepeatPassword" className="form-control" />
              <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
            </div>
            

            {/* <!-- Checkbox --> */}
            <div className="form-check d-flex justify-content-center mb-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                aria-describedby="registerCheckHelpText"
              />
              <label className="form-check-label" htmlFor="registerCheck">  I have read and agree to the terms
              </label>
            </div>

            {/* <!-- Submit button --> */}
            <button type="submit" className="btn btn-primary btn-block mb-3">Sign up</button>
          </form>
        </div>
      </div>
      {/* <!--Pills content-- > */}

    </div>
  )
}
