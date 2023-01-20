// $(".input_text").focus(function(){
//     $(this).prev('.fa').addclass('glowIcon')
// })
// $(".input_text").focusout(function(){
//     $(this).prev('.fa').removeclass('glowIcon')
// })


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