


  let form = document.querySelector("#login_button>a");
  form.addEventListener("click", function (event){
    let username = document.querySelector("#username").value;
   let password = document.querySelector("#pass").value;
  event.preventDefault();

  
    if(username == "Saurabh" && password == 123){
      window.location.assign="dashboard.html";
   
  }
  else
  console.log("error");
  })