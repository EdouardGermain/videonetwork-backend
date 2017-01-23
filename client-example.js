var url = "https://node.edouardg.fr";
var http = new XMLHttpRequest();
var path = "/login";
var params = JSON.stringify({
    password: "password",
    username: "toto"
});


http.open("POST", url+path, true);
http.setRequestHeader("Content-type", "application/json; charset=utf-8");
http.withCredentials = true;

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var http2= new XMLHttpRequest();
        path = "/user/me";

        http2.open("GET", url+path, true);

        http2.setRequestHeader("Content-type", "application/json; charset=utf-8");
        http2.withCredentials = true;

        http2.onreadystatechange = function () {
            if (http2.readyState == 4 && http2.status == 200) {
                console.log("user connected :" +http2.responseText);

            }else if (http2.status == 400){
                alert(http2.responseText);
            }
        };
        http2.send();
    }else if (http.status == 400){
        alert(http.responseText);
    }
};
http.send(params);