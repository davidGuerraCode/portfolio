import React from 'react';
import {
  SiHtml5,
  SiReact,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGnubash,
  SiNetlify,
  SiFirebase,
} from 'react-icons/si';

import { DiNodejs, DiGit } from 'react-icons/di';

import { Header } from '../../components/Portfolio/components/Header';
import { Card } from '../../components/Portfolio/components/Card';
import {
  Testimony,
  testimonies,
} from '../../components/Portfolio/components/Testimony';

const AboutMe = () => {
  const testimony = testimonies.map(
    ({ testimony, awesomePerson, workAt, position }, idx) => {
      return (
        <Testimony
          key={idx}
          testimony={testimony}
          awesomePerson={awesomePerson}
          workAt={workAt}
          position={position}
        />
      );
    }
  );

  return (
    <>
      <Header />
      <div className="flex flex-column justify-center items-center ma3">
        <div className="content">
          {/* <h1 className="about-title">Sobre mí</h1> */}
          <img src="aboutMe.svg" alt="main-cover" className="cover-img" />
          <div className="f1 tc mv4">
            <span>
              Hola! Me llamo <br /> David Vásquez
            </span>
          </div>
          <div className="about-me">
            <p>
              Soy un entusiasta y apasionado de todo lo que tenga que ver con
              programación y tecnología en general. Nacido y radicado, aún, en
              un país del que tal vez has escuchado en alguna ocasión,{' '}
              <strong>Venezuela</strong> 🇻🇪.
            </p>
            <br />
            <p>
              Mi gran interés por la tecnología fué lo que al final me llevó a
              la programación, el hecho de poder construir solo con una
              computadora y una idea en mente,{' '}
              <strong>
                piezas de tecnología que fueran útilies para las demás personas
              </strong>
              , es algo que siempre me ha parecido increíble y es, por lejos, lo
              que más me encanta de hacer lo que hago.
            </p>
            <br />
            <p>
              He sido autodidacta al 100% si bien en la universiadad pude
              escribir mis primeras líneas de código, todo lo que sé hasta ahora
              y, lo que sigo aprendiendo, ha sido por mi{' '}
              <strong>dedicación, motivación e interés</strong> por perfeccionar
              mis conocimientos sobre desarrollo y adquirir otros nuevos.
              Aprender cosas nuevas es algo que me encanta hacer.
            </p>
            <br />
            <blockquote>
              <q>
                La perfección no se logra cuando no hay nada más que agregar,
                sino cuando no hay nada más que quitar.
              </q>
              <br />
              <span className="f4">- Antoine de Saint Exupéry</span>
            </blockquote>
          </div>
          <div className="subtitle">
            <h2>
              <span className="emoji-icon">👽</span> Habilidades
            </h2>
          </div>
          <div className="mt3">
            <Card title="HTML">
              <div className="flex justify-around justify-start-ns mt4">
                <div className="tc mr3">
                  <div className="leguage-icon">
                    <SiHtml5 />
                  </div>
                  <span className="lenguage-label">HTML</span>
                </div>
                <div className="tc">
                  <div className="leguage-icon">
                    <SiReact />
                  </div>
                  <span className="lenguage-label">JSX</span>
                </div>
              </div>
            </Card>
            <Card title="CSS">
              <div className="flex justify-around justify-start-ns mt4">
                <div className="tc mr3">
                  <div className="leguage-icon">
                    <SiCss3 />
                  </div>
                  <span className="lenguage-label">CSS</span>
                </div>
                <div className="tc mr3">
                  <div className="leguage-icon">
                    <SiSass />
                  </div>
                  <span className="lenguage-label">SASS</span>
                </div>
                <div className="tc">
                  <div className="leguage-icon">
                    <SiBootstrap />
                  </div>
                  <span className="lenguage-label">Bootstrap</span>
                </div>
              </div>
            </Card>
            <Card title="Javascript">
              <div className="flex justify-around justify-start-ns mt4">
                <div className="tc mr3">
                  <div className="leguage-icon">
                    <SiReact />
                  </div>
                  <span className="lenguage-label">React</span>
                </div>
                <div className="tc mr3">
                  <div className="leguage-icon">
                    <SiJavascript />
                  </div>
                  <span className="lenguage-label">
                    Javascript<sup>(ES6)</sup>
                  </span>
                </div>
                <div className="tc">
                  <div className="leguage-icon">
                    <SiTypescript />
                  </div>
                  <span className="lenguage-label">Typescript</span>
                </div>
              </div>
            </Card>
            <Card title="Backend">
              {/* <div className="flex flex-column flex-row-l justify-center mt4"> */}
              <div className="flex flex-wrap justify-around">
                <div className="tc pa1 mt4">
                  <div className="leguage-icon">
                    <DiNodejs />
                  </div>
                  <span className="lenguage-label">
                    NodeJs <sup>(Express)</sup>
                  </span>
                </div>
                <div className="tc pa1 mt4">
                  <div className="leguage-icon">
                    <SiMongodb />
                  </div>
                  <span className="lenguage-label">
                    MongoDB <sup>(Mongoose)</sup>
                  </span>
                </div>
                <div className="tc pa1 mt4">
                  <div className="leguage-icon">
                    <SiFirebase />
                  </div>
                  <span className="lenguage-label">Firebase</span>
                </div>
                <div className="tc pa1 mt4">
                  <div className="leguage-icon">
                    <SiPostgresql />
                  </div>
                  <span className="lenguage-label">PostgreSQL</span>
                </div>
              </div>
            </Card>
            <Card title="Herramientas">
              <div className="flex justify-around justify-start-ns mt4">
                <div className="tc mr3">
                  <div className="leguage-icon">
                    <DiGit />
                  </div>
                  <span className="lenguage-label">
                    Git <sup>(Github/Gitlab)</sup>
                  </span>
                </div>
                <div className="tc mr3">
                  <div className="leguage-icon">
                    <SiGnubash />
                  </div>
                  <span className="lenguage-label">
                    Command Line <sup>(Bash)</sup>
                  </span>
                </div>
                <div className="tc">
                  <div className="leguage-icon">
                    <SiNetlify />
                  </div>
                  <span className="lenguage-label">Netlify</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className="w-80 mt4">
          <div className="f3 tc b">
            He tenido la oportunidad de trabajar con personas geniales
          </div>
          {testimony.length > 0 && (
            <div className="flex flex-column flex-row-l justify-center justify-space-between-m mt3">
              {testimony}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
