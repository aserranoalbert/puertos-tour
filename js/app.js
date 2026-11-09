const PUERTOS = [
  {
    slug: 'tourmalet',
    nombre: 'Col du Tourmalet',
    cordillera: 'Pirineos',
    altitud: 2115,
    categoria: 'HC',
    primeraVez: 1910,
    ascensiones: 'Más de 90',
    longitud: '19 km',
    pendiente: '7,4 %',
    imagen: 'images/tourmalet.jpg',
    resumen:
      'El coloso de los Pirineos y el puerto más veces ascendido en la historia del Tour. Un gigante que corona a 2115 metros.',
    historia:
      'En 1910, cuando el Tour aún era una aventura casi suicida, el organizador Henri Desgrange decidió meter a los corredores en los Pirineos. Octave Lapize fue el primero en coronar el Tourmalet, entre senderos sin asfaltar, y al pasar junto a los organizadores les gritó: «¡Asesinos!». Desde entonces, el Tourmalet se convirtió en el símbolo del ciclismo heroico. En su cima, una estatua de Jacques Goddet, histórico director de la carrera, vigila el paso de cada generación.',
    episodios: [
      '1910: Octave Lapize corona por primera vez y llama «asesinos» a los organizadores.',
      '1969: Eddy Merckx sentencia el Tour atacando en sus rampas.',
      '2010: El Tour celebra el centenario de los Pirineos con final en la cima.',
    ],
    credito: {
      autor: 'Hugo LUC',
      licencia: 'CC BY-SA 4.0',
      url: 'https://commons.wikimedia.org/wiki/File:View_from_the_top_of_the_Tourmalet_pass_at_stage_14_of_TDF_2024.jpg',
    },
  },
  {
    slug: 'alpe-dhuez',
    nombre: "Alpe d'Huez",
    cordillera: 'Alpes (Oisans)',
    altitud: 1860,
    categoria: 'HC',
    primeraVez: 1952,
    ascensiones: 'Más de 30',
    longitud: '13,8 km',
    pendiente: '8,1 %',
    imagen: 'images/alpe-dhuez.jpg',
    resumen:
      'Las 21 curvas más famosas del ciclismo. Una pared numerada donde cada pedalada tiene nombre propio.',
    historia:
      'Fausto Coppi estrenó el palmarés de Alpe d\'Huez en 1952, en la primera llegada en alto de la historia del Tour. Desde entonces, sus 21 curvas numeradas se han convertido en un escenario mítico: en cada una hay una placa con el nombre de un ganador. La montaña es famosa también por la «curva holandesa», donde decenas de miles de aficionados neerlandeses convierten la ascensión en una fiesta naranja. Sus rampas, constantes en torno al 8 %, han decidido muchos Tours.',
    episodios: [
      '1952: Fausto Coppi gana la primera llegada en alto de la historia del Tour.',
      '1986: Bernard Hinault y Greg LeMond suben juntos, en una imagen icónica.',
      '1997: Marco Pantani establece un récord de ascensión aún hoy discutido.',
    ],
    credito: {
      autor: 'DimiTalen',
      licencia: 'CC0',
      url: 'https://commons.wikimedia.org/wiki/File:View_of_Alpe_d%27Huez_from_Pic_Blanc,_Oz,_2026.jpg',
    },
  },
  {
    slug: 'ventoux',
    nombre: 'Mont Ventoux',
    cordillera: 'Provenza',
    altitud: 1910,
    categoria: 'HC',
    primeraVez: 1951,
    ascensiones: 'Más de 15',
    longitud: '21,8 km',
    pendiente: '5,2 %',
    imagen: 'images/ventoux.jpg',
    resumen:
      'El «Gigante de la Provenza». Una montaña calva, blanca y ventosa que ha escrito las páginas más duras del Tour.',
    historia:
      'El Mont Ventoux no se parece a nada: una montaña caliza, pelada y barrida por el mistral donde el calor se convierte en un enemigo más. Su historia está marcada por la tragedia de Tom Simpson, que murió en sus rampas en 1967, y por gestas legendarias como el duelo entre Poulidor y Anquetil en 1965 o el ataque de Merckx en 1970, que terminó con el belga recibiendo oxígeno en la cima. Cada ascensión al Ventoux es una cita con la historia y con el sufrimiento.',
    episodios: [
      '1965: Duelo épico entre Raymond Poulidor y Jacques Anquetil.',
      '1967: Muerte de Tom Simpson, que marcó para siempre la carrera.',
      '1970: Eddy Merckx gana en la cima y acaba con oxígeno.',
    ],
    credito: {
      autor: 'Celeda',
      licencia: 'CC BY-SA 4.0',
      url: 'https://commons.wikimedia.org/wiki/File:Ombre_du_Mont_Ventoux_sur_lui_m%C3%AAme.jpg',
    },
  },
  {
    slug: 'galibier',
    nombre: 'Col du Galibier',
    cordillera: 'Alpes',
    altitud: 2642,
    categoria: 'HC',
    primeraVez: 1911,
    ascensiones: 'Más de 60',
    longitud: '12,3 km',
    pendiente: '6,9 %',
    imagen: 'images/galibier.jpg',
    resumen:
      'Uno de los puertos asfaltados más altos de Europa. El techo habitual del Tour y hogar del monumento a Henri Desgrange.',
    historia:
      'El Galibier fue durante décadas el punto más alto que podía alcanzar el Tour. En 1911, Émile Georget lo coronó en una etapa dantesca y, al llegar arriba, dijo: «No me pararé hasta la cima». A sus 2642 metros, el aire falta y el frío aprieta incluso en julio. En la vertiente sur, junto al túnel, un monumento recuerda a Henri Desgrange, fundador del Tour. Ganar en el Galibier es sinónimo de leyenda: lo saben Pantani y muchos otros que allí decidieron la carrera.',
    episodios: [
      '1911: Émile Georget corona el puerto en una etapa épica.',
      '1947: Primera llegada en alto, con victoria de Fermo Camellini.',
      '1998: Marco Pantani ataca en el Galibier y sentencia el Tour.',
    ],
    credito: {
      autor: 'Stephan Brunker',
      licencia: 'CC BY-SA 3.0',
      url: 'https://commons.wikimedia.org/wiki/File:Galibier.jpg',
    },
  },
  {
    slug: 'izoard',
    nombre: "Col d'Izoard",
    cordillera: 'Alpes (Altos Alpes)',
    altitud: 2360,
    categoria: 'HC',
    primeraVez: 1922,
    ascensiones: 'Más de 35',
    longitud: '31,5 km',
    pendiente: '4,8 %',
    imagen: 'images/izoard.jpg',
    resumen:
      'La «Casse Déserte»: un paisaje lunar de rocas oscuras que parece de otro planeta, en el corazón de los Altos Alpes.',
    historia:
      'El Izoard es famoso por su vertiente sur, que atraviesa la Casse Déserte, un desierto de piedra negra y agujas rocosas donde la carretera serpentea como en otro mundo. Allí se han vivido algunos de los momentos más bellos del ciclismo, con Coppi y Bartali como grandes protagonistas: un monumento les recuerda en la cima. El Izoard no es el puerto más duro, pero sí uno de los más espectaculares, y el Tour lo busca una y otra vez para convertir la etapa en una postal.',
    episodios: [
      '1922: El Tour corona el Izoard por primera vez.',
      '1949: Fausto Coppi firma una de sus grandes cabalgadas.',
      '2017: Final en alto con victoria de Warren Barguil.',
    ],
    credito: {
      autor: 'Pline',
      licencia: 'CC BY-SA 4.0',
      url: 'https://commons.wikimedia.org/wiki/File:Col-d%27Izoard-Queyras-DSC_0130.jpg',
    },
  },
  {
    slug: 'aubisque',
    nombre: "Col d'Aubisque",
    cordillera: 'Pirineos',
    altitud: 1709,
    categoria: 'HC',
    primeraVez: 1910,
    ascensiones: 'Más de 70',
    longitud: '18,6 km',
    pendiente: '4,8 %',
    imagen: 'images/aubisque.jpg',
    resumen:
      'El puerto donde nació la leyenda de los «forzados de la carretera». Un clásico de los Pirineos desde 1910.',
    historia:
      'El Aubisque estuvo en la primera gran etapa pirenaica de 1910, junto al Tourmalet. En 1926, el periodista Albert Londres siguió la carrera y, al ver a los corredores destrozados en sus rampas, escribió que eran «los forzados de la carretera», una frase que definió para siempre el ciclismo heroico. Con sus carreteras colgadas sobre el circo de Lescun y el vértigo del paso por el Soulor, el Aubisque sigue siendo una de las ascensiones más salvajes y bellas de los Pirineos.',
    episodios: [
      '1910: Forma parte de la primera etapa pirenaica de la historia.',
      '1926: Albert Londres acuña aquí «los forzados de la carretera».',
      '2018: El Tour corona el Aubisque camino de Laruns.',
    ],
    credito: {
      autor: 'Agence Rol',
      licencia: 'Dominio público',
      url: 'https://commons.wikimedia.org/wiki/File:Tour_de_France_1930_Col_Aubisque_Cycliste.jpg',
    },
  },
];

const app = document.getElementById('app');

function plantillaInicio() {
  const tarjetas = PUERTOS.map(
    (p) => `
    <a class="tarjeta" href="#/puerto/${p.slug}">
      <div class="tarjeta-img" style="background-image:url('${p.imagen}')">
        <span class="etiqueta">${p.categoria}</span>
      </div>
      <div class="tarjeta-cuerpo">
        <h2>${p.nombre}</h2>
        <p class="tarjeta-meta">${p.cordillera} · ${p.altitud} m</p>
        <p class="tarjeta-resumen">${p.resumen}</p>
        <span class="tarjeta-enlace">Descubrir →</span>
      </div>
    </a>`
  ).join('');

  return `
    <section class="hero">
      <h1>Puertos míticos del Tour</h1>
      <p>Seis montañas que han escrito la historia de la carrera más dura del mundo.</p>
    </section>
    <section class="grid" id="puertos">${tarjetas}</section>`;
}

function plantillaDetalle(p) {
  const episodios = p.episodios.map((e) => `<li>${e}</li>`).join('');
  return `
    <a class="volver" href="#/">← Volver a los puertos</a>
    <section class="detalle-hero" style="background-image:url('${p.imagen}')">
      <div class="detalle-hero-overlay">
        <span class="etiqueta">${p.categoria} · ${p.cordillera}</span>
        <h1>${p.nombre}</h1>
        <p>${p.resumen}</p>
      </div>
    </section>
    <section class="stats">
      <div><strong>${p.altitud} m</strong><span>altitud</span></div>
      <div><strong>${p.longitud}</strong><span>longitud</span></div>
      <div><strong>${p.pendiente}</strong><span>pendiente media</span></div>
      <div><strong>${p.primeraVez}</strong><span>primera vez en el Tour</span></div>
      <div><strong>${p.ascensiones}</strong><span>ascensiones</span></div>
    </section>
    <section class="bloque">
      <h2>La montaña</h2>
      <p>${p.historia}</p>
    </section>
    <section class="bloque">
      <h2>Episodios para la historia</h2>
      <ul class="episodios">${episodios}</ul>
    </section>
    <p class="credito">
      Foto: <a href="${p.credito.url}" target="_blank" rel="noopener">${p.credito.autor}</a>,
      ${p.credito.licencia}, vía Wikimedia Commons.
    </p>`;
}

function render() {
  const hash = location.hash || '#/';
  const match = hash.match(/^#\/puerto\/([\w-]+)/);
  if (match) {
    const puerto = PUERTOS.find((p) => p.slug === match[1]);
    if (puerto) {
      app.innerHTML = plantillaDetalle(puerto);
      document.title = `${puerto.nombre} · Puertos Míticos`;
    } else {
      app.innerHTML = '<p class="vacio">Puerto no encontrado.</p>';
    }
  } else {
    app.innerHTML = plantillaInicio();
    document.title = 'Puertos Míticos · Tour de Francia';
  }
  window.scrollTo(0, 0);
}

document.getElementById('creditos').innerHTML = PUERTOS.map(
  (p) =>
    `<a href="${p.credito.url}" target="_blank" rel="noopener">${p.nombre}</a>: ${p.credito.autor} (${p.credito.licencia})`
).join(' · ');

window.addEventListener('hashchange', render);
render();
