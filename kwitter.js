const firebaseConfig = {
    apiKey: "AIzaSyDyxxHQpZfYnni0c3amNo_H7gDL5_Gqi88",
    authDomain: "project93-516ed.firebaseapp.com",
    projectId: "project93-516ed",
    storageBucket: "project93-516ed.appspot.com",
    messagingSenderId: "916404747543",
    appId: "1:916404747543:web:9c393ced24269df5334b52",
    measurementId: "G-XCT1PFWP7G"
  };
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; 
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; 
row = name_with_tag + message_with_tag +like_button + span_with_tag; 
document.getElementById("output").innerHTML += row;
//End code
 } });  }); }
getData();

function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="kwitter_page.html";
}
function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}
function updateLike(message_id){
 button_id = message_id;
 likes=document.getElementById(button_id).value;
 update_likes=Number(likes)+1;
 console.log(update_likes);
 firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}