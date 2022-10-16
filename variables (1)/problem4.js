

//Given stored username and password and input username and password, Print if the user can login or not.
let user_name="yogi123"
let password=1234
//input credentials
let name="yogi123"
let pass=1234
//process
if (name==user_name){
  if (pass==password){
    console.log("login succesfull");
  }else{
    console.log("incorrect password");
  }
}else{
  console.log("user name doesn`t exist");
}