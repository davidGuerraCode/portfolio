export const projectsData = [
  {
    name: 'Resort Beach Rooms',
    link: 'https://react-beach-rooms.netlify.app/',
    images: ['beach-rooms.png'],
    description: (
      <p>
        Este proyecto lo empecé a través de una serie de videos tutoriales, algo
        viejos ya, pero con los cuales aprendí muchas cosas, sin embargo, mi
        meta principal era implementar siempre que pudiera los, para ese
        entonces, nuevos hooks de React.
        <br />
        Hacer esto me permitió colocar en practica hooks como useState,
        useEffect, la creacion de hooks personalizados así como también, lo
        importante de saber cuando usar correctamente reactMemo. Sin duda es un
        proyecto en cual aprendí un poco mas sobre React y lo genial que son los
        hooks!
      </p>
    ),
    technologiesUsed: ['React', 'CSS', 'Contentfull', 'React-Router', 'Hooks'],
  },
  {
    name: 'Developers Registration Form',
    link: 'https://signup-dev-form.netlify.app/',
    images: ['signup-dev-form.png'],
    description: (
      <p>
        Formulario de registro pensado para la captación de desarrolladores
        interesados en contactar con potenciales clientes. Este proyecto fue una
        colaboración que realicé con la compañía Imuko.
        <br />
        Los principales desafíos que enfrente fueron el manejo del estado y
        cumplir con las validaciones de cada campo. Debido a la cantidad de
        campos que necesitaba el formulario, decidimos dividirlo en 3 secciones
        cada una sus propias validaciones y dependientes una de la anterior, acá
        es donde las cosas se complicaron un poco porque debía tener en cuenta
        que todo los campos mandatorios de una sección estuviesen validos para
        poder habilitar la sección siguiente.
      </p>
    ),
    technologiesUsed: ['React', 'CSS', 'Contenfull', 'React-Router', 'Hooks'],
  },
  {
    name: 'Coronavirus Tracker',
    link: 'https://coronapp.netlify.app/',
    images: ['corona-app.png'],
    description:
      'Es un proyecto súper simple el cual empecé cuando recién empezó toda esta locura de la pandemia. Me sirvió mucho para mantener la mente ocupada y seguir practicando mas mis habilidades de React. El desafío que tuvo este proyecto fué conseguir una API con datos confiables, además de esto, para manejo del estado decidí hacerlo usando finite-state machine, el cual es un concepto bastante interesante.',
    technologiesUsed: ['React', 'Hooks', 'CSS', 'Xstate'],
  },
];
