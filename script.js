var url = "logins.csv";
var username = getColumn(url, 0);
var password = getColumn(url, 1);
var page = getColumn(url, 4);
var inputusername;
var inputpassword;
function getlogin(){
inputusername = document.getElementById("username").value
inputpassword = document.getElementById("password").value
console.info(inputpassword);
console.info(inputusername);
for(var i = 0; i<password.length;i++){
    if(username[i]==inputusername){
        console.info(i)
        if(password[i]==inputpassword){
    console.log(i)
        if(i==0){
            location.replace("KQ4QDS.html");
        }
        else if(i==1){
            location.replace("bb's n burgers.html");
        }
        else if(i==2){
            console.log("laurel run")
            location.replace("geraldine.html");
        }
        
        else{
    inputusername="";
        inputpassword="";}}
    }
}



}
