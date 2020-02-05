import React from 'react';
import NavBar from '../components/NavBar';

import './Styles/BlastDetail.css';

const volList = [
  {
    id: 0,
    name: 'O578',
    year: 2019,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Confirmar presencia de arenisca'
  },
  {
    id: 1,
    name: 'F561',
    year: 2020,
    processStatus: 'Caracterizar Voladura',
    type: 'Contorno Footwall',
    comment: 'Confirmar datos con planeación'
  },
  {
    id: 2,
    name: 'W392',
    year: 2020,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Se requiere rediseño'
  },
  {
    id: 3,
    name: 'M838',
    year: 2019,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Confirmar Cambio de Footwall'
  },
  {
    id: 4,
    name: 'O570',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Contorno Footwall',
    comment: 'Random no cubre toda el area'
  },
  {
    id: 5,
    name: 'E794',
    year: 2019,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Confirmar en turno nocturno para entrega'
  },
  {
    id: 6,
    name: 'S015',
    year: 2019,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Pendiente Revisión de Perfiles de Cargue'
  },
  {
    id: 7,
    name: 'X912',
    year: 2020,
    processStatus: 'Crear Estructuras',
    type: 'Contorno Footwall',
    comment: 'Pendiente levantar pata del talud'
  },
  {
    id: 8,
    name: 'W363',
    year: 2019,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Contorno Footwall',
    comment: 'Pendiente definición de cargue especial'
  },
  {
    id: 9,
    name: 'S632',
    year: 2020,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Pendiente Revisión de Perfiles de Cargue'
  },
  {
    id: 10,
    name: 'F518',
    year: 2020,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Contorno Footwall',
    comment: 'Confirmar Cambio de Footwall'
  },
  {
    id: 11,
    name: 'M674',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Contorno Footwall',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 12,
    name: 'S017',
    year: 2020,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Pendiente Revisión de Perfiles de Cargue'
  },

  {
    id: 13,
    name: 'S497',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Falta Random'
  },
  {
    id: 14,
    name: 'N023',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 15,
    name: 'E980',
    year: 2019,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Confirmar en turno nocturno para entrega'
  },
  {
    id: 16,
    name: 'S008',
    year: 2020,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 60°',
    comment: 'Definir utilización de globos'
  },
  {
    id: 17,
    name: 'E187',
    year: 2020,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 60°',
    comment: 'Definir utilización de globos'
  },
  {
    id: 18,
    name: 'P911',
    year: 2019,
    processStatus: 'Caracterizar Voladura',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Falta definición del plan de taladro'
  },
  {
    id: 19,
    name: 'X597',
    year: 2019,
    processStatus: 'Autorizar Geotecnia',
    type: 'Contorno Footwall',
    comment: 'Canal hacia el highwall'
  },
  {
    id: 20,
    name: 'F921',
    year: 2019,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Pendiente Revisión de Perfiles de Cargue'
  },
  {
    id: 21,
    name: 'O039',
    year: 2020,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Contorno Footwall',
    comment: 'Confirmar si se garantiza la cabeza del manto'
  },
  {
    id: 22,
    name: 'M099',
    year: 2020,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 60°',
    comment: 'Revisar ampliación del patrón'
  },
  {
    id: 23,
    name: 'E634',
    year: 2020,
    processStatus: 'Autorizar Geotecnia',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Material acumulado al norte'
  },
  {
    id: 24,
    name: 'S396',
    year: 2020,
    processStatus: 'Autorizar Geotecnia',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Pendiente revisión de pared norte'
  },
  {
    id: 25,
    name: 'F341',
    year: 2019,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Confirmar deckings en la parte superior'
  },
  {
    id: 26,
    name: 'M930',
    year: 2019,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Confirmar deckings en la parte superior'
  },
  {
    id: 27,
    name: 'W531',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 60°',
    comment: 'Revisar ampliación del patrón'
  },
  {
    id: 28,
    name: 'E320',
    year: 2020,
    processStatus: 'Autorizar Geotecnia',
    type: 'Optimización 60°',
    comment: 'Pendiente Conciliación de la pared'
  },
  {
    id: 29,
    name: 'F385',
    year: 2019,
    processStatus: 'Crear Estructuras',
    type: 'Optimización 60°',
    comment: 'Pendiente definición de corredor sur'
  },
  {
    id: 30,
    name: 'W224',
    year: 2019,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Pendiente Revisión de Perfiles de Cargue'
  },
  {
    id: 31,
    name: 'X969',
    year: 2019,
    processStatus: 'Crear Malla con Guía',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Falta Random'
  },
  {
    id: 32,
    name: 'M367',
    year: 2019,
    processStatus: 'Caracterizar Voladura',
    type: 'Contorno Footwall',
    comment: 'Falta definición del plan de taladro'
  },
  {
    id: 33,
    name: 'P865',
    year: 2020,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Confirmar en turno nocturno para entrega'
  },
  {
    id: 34,
    name: 'N958',
    year: 2019,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Se requiere rediseño'
  },
  {
    id: 35,
    name: 'X102',
    year: 2019,
    processStatus: 'Crear Estructuras',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Pendiente definición de corredor sur'
  },
  {
    id: 36,
    name: 'M593',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Falta Random'
  },
  {
    id: 37,
    name: 'X914',
    year: 2019,
    processStatus: 'Autorizar Geotecnia',
    type: 'Optimización 60°',
    comment: 'Material acumulado al norte'
  },
  {
    id: 38,
    name: 'X646',
    year: 2019,
    processStatus: 'Autorizar Geotecnia',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Pendiente Conciliación de la pared'
  },
  {
    id: 39,
    name: 'F737',
    year: 2020,
    processStatus: 'Crear Estructuras',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Pendiente levantar pata del talud'
  },
  {
    id: 40,
    name: 'P777',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 41,
    name: 'F748',
    year: 2020,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Contorno Footwall',
    comment: 'Confirmar presencia de arenisca'
  },
  {
    id: 42,
    name: 'O798',
    year: 2019,
    processStatus: 'Caracterizar Voladura',
    type: 'Contorno Footwall',
    comment: 'Confirmar datos con planeación'
  },
  {
    id: 43,
    name: 'F410',
    year: 2020,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Contorno Footwall',
    comment: 'Confirmar presencia de arenisca'
  },
  {
    id: 44,
    name: 'P778',
    year: 2019,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Confirmar Cambio de Footwall'
  },
  {
    id: 45,
    name: 'O698',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 60°',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 46,
    name: 'O855',
    year: 2020,
    processStatus: 'Autorizar Geotecnia',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Canal hacia el highwall'
  },
  {
    id: 47,
    name: 'A567',
    year: 2019,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 60°',
    comment: 'Falta Formato de entrega de Area'
  },
  {
    id: 48,
    name: 'M057',
    year: 2020,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Pendiente Revisión de Perfiles de Cargue'
  },
  {
    id: 49,
    name: 'F564',
    year: 2020,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 60°',
    comment: 'Pendiente definición de cargue especial'
  },
  {
    id: 50,
    name: 'F774',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Sin estructuras'
  },
  {
    id: 51,
    name: 'M753',
    year: 2019,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Confirmar deckings en la parte superior'
  },
  {
    id: 52,
    name: 'W387',
    year: 2020,
    processStatus: 'Caracterizar Voladura',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Confirmar datos con planeación'
  },
  {
    id: 53,
    name: 'E126',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Confirmar si se garantiza la cabeza del manto'
  },
  {
    id: 54,
    name: 'X556',
    year: 2020,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Contorno Footwall',
    comment: 'Revisar ampliación del patrón'
  },
  {
    id: 55,
    name: 'M989',
    year: 2020,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Confirmar diseño de cargue especial'
  },
  {
    id: 56,
    name: 'N738',
    year: 2019,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 60°',
    comment: 'Confirmar deckings en la parte superior'
  },
  {
    id: 57,
    name: 'O902',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 60°',
    comment: 'Revisar ampliación del patrón'
  },
  {
    id: 58,
    name: 'S411',
    year: 2020,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Pendiente definición de cargue especial'
  },
  {
    id: 59,
    name: 'W367',
    year: 2020,
    processStatus: 'Caracterizar Voladura',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Definir manto objetivo'
  },
  {
    id: 60,
    name: 'F004',
    year: 2019,
    processStatus: 'Caracterizar Voladura',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Confirmar datos con planeación'
  },
  {
    id: 61,
    name: 'A330',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 60°',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 62,
    name: 'A155',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Area en mal estado. Sin random'
  },
  {
    id: 63,
    name: 'P732',
    year: 2020,
    processStatus: 'Caracterizar Voladura',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Falta definición del plan de taladro'
  },
  {
    id: 64,
    name: 'E507',
    year: 2019,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Confirmar presencia de arenisca'
  },
  {
    id: 65,
    name: 'O104',
    year: 2020,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Pendiente definición de cargue especial'
  },
  {
    id: 66,
    name: 'P684',
    year: 2019,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Confirmar en turno nocturno para entrega'
  },
  {
    id: 67,
    name: 'O979',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Contorno Footwall',
    comment: 'Falta Random'
  },
  {
    id: 68,
    name: 'S178',
    year: 2019,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Confirmar diseño de cargue especial'
  },
  {
    id: 69,
    name: 'F741',
    year: 2019,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Pendiente Revisión de Perfiles de Cargue'
  },
  {
    id: 70,
    name: 'A498',
    year: 2019,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Pendiente definición de cargue especial'
  },
  {
    id: 71,
    name: 'F437',
    year: 2020,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 60°',
    comment: 'Confirmar autorización de entrega'
  },
  {
    id: 72,
    name: 'N247',
    year: 2020,
    processStatus: 'Caracterizar Voladura',
    type: 'Optimización 60°',
    comment: 'Confirmar datos con planeación'
  },
  {
    id: 73,
    name: 'F648',
    year: 2019,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Confirmar diseño de cargue especial'
  },
  {
    id: 74,
    name: 'F169',
    year: 2019,
    processStatus: 'Autorizar Geotecnia',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Pendiente revisión de pared norte'
  },
  {
    id: 75,
    name: 'E933',
    year: 2019,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Falta Formato de entrega de Area'
  },
  {
    id: 76,
    name: 'W436',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Contorno Footwall',
    comment: 'Revisar ampliación del patrón'
  },
  {
    id: 77,
    name: 'P841',
    year: 2020,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 78,
    name: 'A134',
    year: 2019,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Contorno Footwall',
    comment: 'Confirmar deckings en la parte superior'
  },
  {
    id: 79,
    name: 'N058',
    year: 2019,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Confirmar diseño de cargue especial'
  },
  {
    id: 80,
    name: 'O089',
    year: 2020,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Pendiente definición de cargue especial'
  },
  {
    id: 81,
    name: 'M279',
    year: 2020,
    processStatus: 'Crear Estructuras',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Pendiente levantar pata del talud'
  },
  {
    id: 82,
    name: 'A895',
    year: 2019,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Contorno Footwall',
    comment: 'Confirmar presencia de arenisca'
  },
  {
    id: 83,
    name: 'X664',
    year: 2020,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Falta Formato de entrega de Area'
  },
  {
    id: 84,
    name: 'A973',
    year: 2020,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Confirmar presencia de arenisca'
  },
  {
    id: 85,
    name: 'M726',
    year: 2020,
    processStatus: 'Validar Diseño de Cargue',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Definir utilización de globos'
  },
  {
    id: 86,
    name: 'P336',
    year: 2020,
    processStatus: 'Crear Estructuras',
    type: 'Contorno Footwall',
    comment: 'Pendiente levantar pata del talud'
  },
  {
    id: 87,
    name: 'S738',
    year: 2019,
    processStatus: 'Caracterizar Voladura',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Definir manto objetivo'
  },
  {
    id: 88,
    name: 'X142',
    year: 2019,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Confirmar diseño de cargue especial'
  },
  {
    id: 89,
    name: 'W270',
    year: 2020,
    processStatus: 'Caracterizar Voladura',
    type: 'Contorno Footwall',
    comment: 'Definir manto objetivo'
  },
  {
    id: 90,
    name: 'O775',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 70° Tercer Nivel',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 91,
    name: 'X524',
    year: 2020,
    processStatus: 'Crear Estructuras',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Pendiente definición de corredor sur'
  },
  {
    id: 92,
    name: 'M761',
    year: 2019,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Optimización 60°',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 93,
    name: 'M392',
    year: 2019,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Confirmar Cambio de Footwall'
  },
  {
    id: 94,
    name: 'O420',
    year: 2020,
    processStatus: 'Entregar Perfiles a Voladura',
    type: 'Contorno Footwall',
    comment: 'Confirmar autorización de entrega'
  },
  {
    id: 95,
    name: 'X006',
    year: 2020,
    processStatus: 'Caracterizar Voladura',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Falta definición del plan de taladro'
  },
  {
    id: 96,
    name: 'F211',
    year: 2019,
    processStatus: 'Diseñar Cargue de Precorte/Buffer',
    type: 'Contorno Footwall',
    comment: 'Pendiente definición de cargue especial'
  },
  {
    id: 97,
    name: 'X521',
    year: 2020,
    processStatus: 'Validar Diseño de Perforación',
    type: 'Contorno Footwall',
    comment: 'Confirmar si se necesita nuevo polígono'
  },
  {
    id: 98,
    name: 'M912',
    year: 2019,
    processStatus: 'Autorizar Geotecnia',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Canal hacia el highwall'
  },
  {
    id: 99,
    name: 'S422',
    year: 2020,
    processStatus: 'Cargar Voladura a Modular',
    type: 'Optimización 60°',
    comment: 'Falta Formato de entrega de Area'
  },
  {
    id: 100,
    name: 'F878',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Optimización 70° Primer Nivel',
    comment: 'Falta Random'
  },
  {
    id: 101,
    name: 'S476',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Optimización 70° Segundo Nivel',
    comment: 'Falta Random'
  },
  {
    id: 102,
    name: 'N076',
    year: 2020,
    processStatus: 'Crear Malla con Guía',
    type: 'Optimización 70° Cuarto Nivel',
    comment: 'Falta Random'
  }
];

const BlastDetail = (props) => {
  const blast = volList.find((vol) => vol.id === parseInt(props.match.params.blastId));

  return (
    <>
      <NavBar />
      <div className="BlastDetail__Container">
        <h1>Vista Detallada de Una Voladura</h1>
        <h2>{blast.name}</h2>
        <p>El id de la voladura es {blast.id}</p>
        <p>{blast.processStatus}</p>
        <p>{blast.type}</p>
        <p>{blast.comment}</p>
      </div>
    </>
  );
};

export default BlastDetail;
