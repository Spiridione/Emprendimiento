
// src/constants.ts

/**
 * Información del profesional MV Spiridione Puzzar.
 */
export const EXPERT_INFO = {
  name: "MV Spiridione Puzzar",
  specialty: "Experto en estadística",
  phone: "04120293045",
  email: "spuzzar@gmail.com",
  whatsappUrl: "https://wa.me/584120293045", // Assuming 58 is the country code for Venezuela
  software: [
    "SAS",
    "R",
    "SPSS",
    "Stata",
    "Statgraphics",
    "Python",
  ],
};

/**
 * Descripción de los servicios por nivel académico.
 */
export const SERVICES_BY_LEVEL = [
  {
    level: "Pregrado",
    title: "Asesoría Estadística para Tesis de Pregrado",
    description: "Ofrecemos soporte integral para estudiantes de pregrado, guiándolos en la formulación de hipótesis, selección de métodos estadísticos, análisis de datos y la interpretación de resultados para sus proyectos de tesis. Aseguramos claridad y rigor metodológico.",
    image: "https://picsum.photos/600/400?random=1",
    imageAlt: "Estudiante de pregrado trabajando en su tesis con gráficos estadísticos."
  },
  {
    level: "Maestría",
    title: "Soporte Estadístico para Investigaciones de Maestría",
    description: "Para estudiantes de maestría, proporcionamos asesoramiento avanzado en diseños experimentales, modelado estadístico complejo y el uso de software especializado. Ayudamos a transformar datos en conocimientos significativos para sus publicaciones y defensas.",
    image: "https://picsum.photos/600/400?random=2",
    imageAlt: "Investigador de maestría revisando análisis de datos en una pantalla de computadora."
  },
  {
    level: "Posgrado",
    title: "Consultoría Estadística para Estudios de Posgrado",
    description: "Nuestros servicios para posgrado incluyen técnicas estadísticas avanzadas, análisis multivariante, meta-análisis y validación de modelos. Nos enfocamos en proyectos de alto impacto, garantizando la robustez estadística necesaria para publicaciones científicas y proyectos de investigación.",
    image: "https://picsum.photos/600/400?random=3",
    imageAlt: "Profesional de posgrado consultando un informe de análisis de datos."
  },
  {
    level: "Doctorado",
    title: "Asesoría Doctoral en Métodos Estadísticos Avanzados",
    description: "Para candidatos a doctorado, ofrecemos experticia en el diseño de estudios longitudinales, análisis de series temporales, minería de datos y estadística bayesiana. Brindamos una colaboración profunda para abordar las preguntas de investigación más desafiantes y novedosas.",
    image: "https://picsum.photos/600/400?random=4",
    imageAlt: "Científico doctoral discutiendo modelos estadísticos complejos con un asesor."
  },
];

/**
 * Pasos del proceso de trabajo.
 */
export const WORK_PROCESS_STEPS = [
  {
    title: "Contacto Inicial y Evaluación",
    description: "Comunícate con nosotros para discutir tu proyecto. Realizaremos una evaluación gratuita de tus necesidades y te proporcionaremos una propuesta detallada."
  },
  {
    title: "Diseño Metodológico y Planificación",
    description: "Una vez aceptada la propuesta, trabajaremos en conjunto para diseñar la metodología estadística más adecuada, seleccionar el software y planificar las fases del análisis."
  },
  {
    title: "Análisis de Datos y Reporte Preliminar",
    description: "Ejecutamos los análisis estadísticos utilizando el software especializado y te entregamos un reporte preliminar con los primeros hallazgos."
  },
  {
    title: "Interpretación y Redacción",
    description: "Colaboramos en la interpretación de los resultados y en la redacción de la sección metodológica y de resultados de tu tesis, asegurando coherencia y rigor."
  },
  {
    title: "Revisiones y Soporte Final",
    description: "Ofrecemos revisiones para asegurar que el trabajo cumpla con tus expectativas y las exigencias académicas, hasta la entrega final del proyecto."
  },
];

/**
 * Esquema de pagos detallado.
 */
export const PAYMENT_SCHEMA = [
  {
    step: "Pago inicial",
    percentage: "50%",
    description: "Al comenzar el proyecto, para asegurar el compromiso y el inicio de la asesoría."
  },
  {
    step: "Primera Cuota",
    percentage: "25%",
    description: "Al entregar los primeros tres capítulos de tu tesis (marco teórico, metodología y resultados preliminares)."
  },
  {
    step: "Pago Final",
    percentage: "25%",
    description: "Al completar y entregar el trabajo final, incluyendo todas las revisiones y el soporte."
  },
];

/**
 * Preguntas Frecuentes (FAQ).
 */
export const FAQ_ITEMS = [
  {
    question: "¿Qué tipo de asesoría estadística ofrecen?",
    answer: "Ofrecemos asesoría integral para tesis de pregrado, maestría, posgrado y doctorado, cubriendo desde el diseño metodológico hasta el análisis de datos e interpretación de resultados. Nos especializamos en una amplia gama de métodos estadísticos y software."
  },
  {
    question: "¿Qué software estadístico manejan?",
    answer: `Somos expertos en el uso de software como ${EXPERT_INFO.software.join(', ')}, garantizando que tu análisis se realice con las herramientas más adecuadas y eficientes.`
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer: "Nuestro proceso inicia con una consulta para entender tus necesidades, seguida de una propuesta personalizada. Luego, trabajamos en el diseño metodológico, análisis de datos, interpretación de resultados y redacción de tu tesis, con revisiones continuas hasta la entrega final."
  },
  {
    question: "¿Cuáles son los tiempos de entrega?",
    answer: "Los tiempos de entrega varían según la complejidad y el alcance de cada proyecto. Una vez evaluado tu caso, te proporcionaremos un cronograma detallado y realista en nuestra propuesta inicial."
  },
  {
    question: "¿Cómo se garantiza la confidencialidad de mi información?",
    answer: "La confidencialidad es una de nuestras máximas prioridades. Toda la información y los datos proporcionados por nuestros clientes son tratados con la más estricta discreción y seguridad, bajo acuerdos de confidencialidad si así lo requieres."
  },
  {
    question: "¿Ofrecen revisiones del trabajo entregado?",
    answer: "Sí, nuestro servicio incluye revisiones. Nos comprometemos a que el trabajo final cumpla plenamente tus expectativas y las exigencias académicas. Las revisiones se realizan hasta tu completa satisfacción, dentro de los términos acordados."
  },
  {
    question: "¿Cuál es el esquema de pagos?",
    answer: "Manejamos un esquema de pagos flexible: un 50% inicial al comenzar, 25% al entregar los primeros tres capítulos de la tesis, y el 25% restante al finalizar el proyecto. Esto distribuye la inversión a lo largo del desarrollo de tu trabajo."
  },
  {
    question: "¿Cómo puedo hacer seguimiento al progreso de mi tesis?",
    answer: "Puedes hacer seguimiento del progreso de tu tesis a través de actualizaciones periódicas vía email o comunicación directa por WhatsApp, según tu preferencia. Te mantendremos informado en cada etapa del proceso."
  },
  {
    question: "¿Pueden ayudarme si solo necesito revisión de una sección específica?",
    answer: "Absolutamente. Ofrecemos servicios modulares que se adaptan a tus necesidades específicas, ya sea la revisión de la metodología, el análisis de una sección de datos o la interpretación de resultados ya obtenidos."
  },
  {
    question: "¿Es posible tener una reunión inicial para discutir mi proyecto?",
    answer: "Sí, te invitamos a contactarnos para agendar una reunión inicial gratuita (virtual o presencial, según disponibilidad). En esta sesión, podemos discutir en detalle tus requerimientos y cómo podemos ayudarte."
  },
];
    