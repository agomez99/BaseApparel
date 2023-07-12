function isValidEmailFormat(emailAddress) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailAddress) && emailAddress !== "";
  }
  
  function signUp() {
    const email = document.getElementById("email").value;
    const errorDisplay = document.getElementById("error-display");
    const successDisplay = document.getElementById("success-display");
  
    if (!isValidEmailFormat(email)) {
      errorDisplay.classList.add("visible");
      errorDisplay.textContent = "Please provide a valid email";
      document.getElementById("email").style.border = "1px solid red";
      return;
    }
  
    errorDisplay.classList.remove("visible");
    errorDisplay.textContent = "";
  
    console.log("Signed up with email:", email);
  
    document.getElementById("email").value = "";
  
    const message = "Successfully signed up newsletter for ";
    successDisplay.style.fontWeight = "bold";
    successDisplay.textContent = message + email;
    successDisplay.classList.add("visible");
  }
  
  function clearError() {
    const errorDisplay = document.getElementById("error-display");
    const successDisplay = document.getElementById("success-display");
  
    errorDisplay.textContent = "";
    successDisplay.textContent = "";
    document.getElementById("email").style = "";
  }
  