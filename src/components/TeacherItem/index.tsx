import React from "react";

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/36803487?s=460&u=ee7254c0df98c20bc2e54642f739bab2344ab011&v=4"
          alt="Gabriel Lopes"
        />
        <div>
          <strong>Gabriel Lopes</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quae
        assumendat.
        <br />
        <br />
        magni quis? Harum non explicabo dignissimos dolorem similique modi!
        Ipsam perferendis dolor eius?
      </p>

      <footer>
        <p>
          Preço / Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
