function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username.trim() === "" || password.trim() === "") {
        document.getElementById("errorMessage").innerHTML = "Por favor, preencha todos os campos.";
        return false;
    }
    if (username == "niterra" && password == "nit123"){
      window.location.href = "plataformanit.html"     
        return false;
    }
    if (username == "toyota" && password == "toy123"){
      window.location.href = "plataformatoy.html"     
        return false;
    }
    document.getElementById("errorMessage").innerHTML = "Usuário ou senha incorretos.";
    return false; 
}

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

document.getElementById('olho').addEventListener('mousedown', function() {
  document.getElementById('password').type = 'text';
});

document.getElementById('olho').addEventListener('mouseup', function() {
  document.getElementById('password').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function() {
  document.getElementById('password').type = 'password';
});