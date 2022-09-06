import { getPages } from "./js/getPages.js";
import { getTable } from "./js/getTable.js";

window.addEventListener("DOMContentLoaded", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const button = document.getElementById("button");
  const logout = document.getElementById("logout");

  if (localStorage.getItem("User")) {
    getPages("table");
    getTable();
  }
  logout.addEventListener("click", () => {
    localStorage.clear();
    getPages("form");
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const validateEmail =
      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    const validatePassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    const data = {
      email: email.value,
      password: password.value,
    };
    if (data.email == false || data.password == false) {
      console.log("debes completar los datos");
    }
    if (data.email !== "" && !validateEmail.test(data.email)) {
      console.log("email incorrecto");
    }
    if (data.password !== "" && !validatePassword.test(data.password)) {
      console.log("contraseña incorrecta");
    }
    if (data.email !== "rql@gmail.com" || data.password !== "Rqlsistemas123*") {
      alert("Credenciales invalidas");
    } else {
      alert("logeado correctamente");
      localStorage.setItem("User", JSON.stringify(data));
      getPages("table");
      getTable();
    }
  });
});
