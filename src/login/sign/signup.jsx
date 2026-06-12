const Sign =()=>{
    return(
        <>
         <div id="login-main">
            <div id="login-head">
            <h4>sign up</h4>
            <p>welcome! Create your account and start exploring.</p>
            </div>
         <form  id="logi-form">
          <label htmlFor="username">Full Name</label>
          <input type="text" placeholder="Full Name" name="username" /> 
           <label htmlFor="email">Email </label>
            <input type="email" placeholder="Email" name="email" />
           <label htmlFor="password">password</label>
            <input type="password" placeholder="Password" name="password" />
             <label htmlFor="confirm"> confirm password</label>
            <input type="password" placeholder="Confirm Password"  name="confirm"/> 
            <button>Sign Up</button>
            </form>

         </div>
        </>
    )
}
export default Sign;