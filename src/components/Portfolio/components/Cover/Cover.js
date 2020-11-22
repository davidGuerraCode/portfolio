import React from 'react';

const Cover = () => {
  return (
    <div className="flex flex-column justify-center items-center ma3 custom-height">
      <div className="content">
        <img src="cover.svg" alt="main-cover" className="cover-img" />
        <div className="mv4 f4">
          <p>
            ¡Hola! Me llamo David, y soy un{' '}
            <span className="decorator">desarrollador web</span>. Dedico la
            mayor parte de mi tiempo a desarrollar proyectos con los que coloco
            en práctica lo que sé y por supuesto aprendo mucho más.{' '}
          </p>
          <p>
            Creando mi propia ruta. ¡Siempre buscando cosas divertidas para
            hacer y aprender!
          </p>
          <br />
          <p> Tienes algo en mente para desarrollar?</p>
          <br />
          <div>
            <a
              href="mailto:davidv968@gmail.com?subject=Hey!"
              className="btn primary">
              Hablemos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
