function $(e) {
	return document.querySelector(e);
};
function initFirebase() {
  var config = {
    apiKey: "AIzaSyDbc6UggYWiOu3NVjmpCCtNlP84RX5zjAk",
    authDomain: "comunidad-84bd9.firebaseapp.com",
    databaseURL: "https://comunidad-84bd9.firebaseio.com",
    projectId: "comunidad-84bd9",
    storageBucket: "comunidad-84bd9.appspot.com",
    messagingSenderId: "187824824052"
  };
  firebase.initializeApp(config);
}
function login() {
	let AUTH = firebase.auth();
	$("#btnLogin").addEventListener('click', e => {
		let email = $('#email').value;
		let pass = $('#password').value;
    	let promise = AUTH.signInWithEmailAndPassword(email, pass);
    	promise.catch(e => alert(e.message));
	});
	$("#btnSingUp").addEventListener('click', e => {
		let email = $('#email').value;
		let pass = $('#password').value;
    	let promise = AUTH.createUserWithEmailAndPassword(email, pass);
    	promise.catch(e => alert(e.message));
	});
	AUTH.onAuthStateChanged(firebaseUser =>{
    if (firebaseUser) {
      console.log(firebaseUser);
      window.location.href = "dashboard.html";
    }
    else{
      alert("No logeado");
    }
  });
	
}
function dashboard() {
	let AUTH = firebase.auth();
	AUTH.onAuthStateChanged(firebaseUser=>{
		$('#user').innerHTML=firebaseUser.email;
	});
	let dbRef = firebase.database().ref();
	/*dbRef.child('reclamo').on('value', snap=>{
		//var countKey Object.keys(snap.val()).length;
		const countKey = Object.keys(snap.val()).length
		//console.log( countKey );
		for (var i = countKey - 1; i >= 0; i--) {
			console.log(snap.val());
		}
	});*/

	//console.log(countKey);
	dbRef.child('orden').on('child_added', snap=>{
		console.log(snap.val().reclamo.key);
		/*console.log({"reclamo": snap.val()});
		alert("22");*/
		let div = $('#card-deck');
		div.appendChild(document.createElement('div')).id=snap.key;
		$('#'+snap.key).className="card";
		$('#'+snap.key).appendChild(document.createElement('div')).id = snap.key+'card-block-top';
		$('#'+snap.key+"card-block-top").className = 'card-block';
		$('#'+snap.key+"card-block-top").appendChild(document.createElement('h6')).id = snap.key+'card-title';
		$('#'+snap.key+"card-title").innerHTML= snap.key;
		$('#'+snap.key).appendChild(document.createElement('iframe')).id = snap.key+'iframe';
		$('#'+snap.key+'iframe').setAttribute('src', 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDXwrgz9MVf2wmkjFQWXkmcJ_bTAqJTgTg&q='+snap.val().coordenadas);
		$('#'+snap.key+'iframe').setAttribute('width', document.querySelector('.card').scrollWidth);
		$('#'+snap.key+'iframe').setAttribute('height', 180);
		$('#'+snap.key+'iframe').setAttribute('allowfullscreen', '');
		$('#'+snap.key+'iframe').setAttribute('frameborder', 0);
		$('#'+snap.key+'iframe').style.border = 0;
		/*document.querySelector('#ver').addEventListener('click', e=>{
		  document.querySelector('#hidden').classList.remove("hidden-xs-up");
		});*/
		$('#'+snap.key).appendChild(document.createElement('div')).id = snap.key+'card-block-down';
		$('#'+snap.key+"card-block-down").className = 'card-block';
		$('#'+snap.key+"card-block-down").appendChild(document.createElement('p')).id = snap.key+'card-text';
		$('#'+snap.key+"card-text").className = "card-text";
		$('#'+snap.key+"card-text").innerHTML = 'Fecha: '+snap.val().fecha;
		$('#'+snap.key).appendChild(document.createElement('div')).id = snap.key+"card-footer";
		$('#'+snap.key+"card-footer").className = 'card-footer';
		$('#'+snap.key+"card-footer").appendChild(document.createElement('button')).id = snap.key+'button';
		$('#'+snap.key+'button').className = "btn btn-secondary btn-sm";
		$('#'+snap.key+'button').innerHTML = "Ver";
	});
}