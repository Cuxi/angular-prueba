window.onload = function () {
    document.getElementById("opcion1").onclick = function () {
        document.getElementById("bienvenida").style.display = "none";
        document.getElementById("seccion2").style.display = "none";
        document.getElementById("seccion1").style.display = "block";
		document.getElementById("seccion3").style.display = "none";
        //this.className = this.className + " activo"
    }

    document.getElementById("opcion2").onclick = function () {
        document.getElementById("bienvenida").style.display = "none";
        document.getElementById("seccion1").style.display = "none";
        document.getElementById("seccion2").style.display = "block";
		document.getElementById("seccion3").style.display = "none";
        //this.className = this.className + " activo"
    }
	document.getElementById("opcion3").onclick = function () {
        document.getElementById("bienvenida").style.display = "none";
        document.getElementById("seccion1").style.display = "none";
        document.getElementById("seccion2").style.display = "none";
		document.getElementById("seccion3").style.display = "block";
        //this.className = this.className + " activo"
    }
    document.getElementById("login-boton").onclick = function () {
        var usuario = document.getElementById("login-usuario").value;
        var pass = document.getElementById("login-pass").value;
        alert("Se ha logueado correctamente\n\n�Bienvenido " + usuario + "!");
		document.getElementById("frm_login").style.display = "none";
		document.getElementById("user_logon").style.display = "inline-block";
    }
}
