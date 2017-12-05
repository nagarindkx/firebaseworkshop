function saveUserProfile(){
    var db = firebase.firestore();
    var currentUser = firebase.auth().currentUser;
    var userFullname = document.getElementById("userFullname").value;
    var userTelephone = document.getElementById("userTelephone").value;
    db.collection("profiles").doc(currentUser.uid).set({
        userFullname: userFullname,
        userTelephone: userTelephone
    }).then(function(){
        console.log("Add userProfile Complete");
    });
}

function readUserProfile() {
    var db=firebase.firestore();
    var currentUser = firebase.auth().currentUser;
    db.doc('profiles/' + currentUser.uid).get().then(
        function(documentSnapshot){
            //console.log(documentSnapshot.get('userFullname'));
            document.getElementById('userProfileResult').innerHTML= 
                documentSnapshot.data().userFullname + " " +
                documentSnapshot.data().userTelephone
        }
    );
}

function addFriend(){
    var db = firebase.firestore();
    //console.log("Call from database.js --> uid =" + firebase.auth().currentUser.uid);
    var currentUser = firebase.auth().currentUser;
    var fullname = document.getElementById("txtfullname").value;
    var age = document.getElementById("txtage").value;
    db.collection("friends").add({
        userId: currentUser.uid, 
        fullname: fullname,
        age : age
    }).then(function(docRef){
        console.log("Add with ID: " + docRef.id);               
    }).catch(function(error){
        console.log(error);
    });
}

function showTable(){
    // Not Work
}