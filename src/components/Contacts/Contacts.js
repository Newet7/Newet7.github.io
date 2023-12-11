import React from "react";
import "./Contacts.css";
import imgTelegram from "../../images/Telegram.svg"; // Путь к изображению внутри сборки

function Contacts() {
  return (
    <contacts className="contacts" id="contacts">
      <div className="section">
        <ul className="contacts__list">
          <li className="contacts__item">
            <a href="mailto:Newet777@gmail.com" withIcon>
              Newet777@gmail.com
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://t.me/newet7" withIcon>
              <img src={imgTelegram} alt="Telegram" />
              Telegram
            </a>
          </li>
          <li className="contacts__item">
            <a href="https://github.com/Newet7" getInfo={""} withIcon>
              Github
            </a>
          </li>
        </ul>
      </div>
    </contacts>
  );
}

export default Contacts;
