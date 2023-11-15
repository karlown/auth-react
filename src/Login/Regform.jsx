import React, { useState } from "react";
import "./Login.css";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailForm = document.querySelector("#email");
    const passwordForm = document.querySelector("#password");
    const data = {
      mail: mailForm.value,
      password: passwordForm.value,
    };

    const log = JSON.stringify(data);
    console.log(log);
    SendData(log)

    const isRegisterSuccessful = true;

    if (isRegisterSuccessful) {
      document.querySelector(".auth-form-container").style.display = "none";
      setTimeout(() => alert('Вы создали аккаунт!'), 10)
      const logoutButton = document.createElement("button");
      logoutButton.textContent = "Logout";
      logoutButton.className = "log-btn"
      logoutButton.onclick = () => {
        setTimeout(() => alert('Вы вышли из аккаунта!'), 10)
        logoutButton.style.display = "none";
        document.querySelector(".auth-form-container").style.display = "flex";
      };
      logoutButton.addEventListener("click", () => {
        props.onFormSwitch("register");
      });
      document.body.appendChild(logoutButton);
    } else {
      console.error("Ошибка регистрации,повторите еще раз...");
    }
  };

  const SendData = async (log) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", { //отправка формы  сюда
      method: "POST",
      body: log,
    });
    if (!response.ok) {
      throw new Error(`Ошибка по адресу ${response.url}, статус ошибки ${response.status}`);
    }
    return await response.json();
  };

  return (
    <div className="auth-form-container">
      <h2 className="form-item">Регистрация</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="form-item" type="email">
          почта
        </label>
        <input
          className="form-item"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@mail.ru"
          id="email"
          name="email"
        />
        <label className="form-item" type="password">
          пароль
        </label>
        <input
         className="form-item"
         value={pass}
         onChange={(e) => setPass(e.target.value)}
         type="password"
         placeholder="********"
         id="password"
         name="password"
         minLength={8}
        />
        <button type="submit">Создать аккаунт</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Уже есть аккаунт?
      </button>
    </div>
  );
};
export default Register;