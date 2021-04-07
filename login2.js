function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "kavi") {
        //window.open = "D:/Projectout/videoavi.html";
       // window.location = "file:///D:/Projectout/videoavi.html";
        return true;
     }
    else {
        alert("login failed");
		return false;
    }


}