// Configuracion de EmailJS
const EMAIL_CONFIG = {
    serviceId: 'service_5i394rd',
    templateId: 'template_f2qjy0e',
    publicKey: 'dCQKS6ZGwA3CpfMmG',
    destinatario: 'josuecotzojay305@gmail.com'
};

// Datos personales
const DATOS_PERSONALES = {
    pesoInicial: 97, // kg
    pesoInicialLb: 215,
    estatura: 1.70, // metros
    pesoMeta: 78, // kg (promedio de 77-79)
    pesoMetaLb: 172 // lb (promedio de 170-175)
};

// Plan semanal de entrenamiento
const PLAN_SEMANAL = {
    0: { // Domingo
        nombre: "Domingo",
        tipo: "Recuperacion",
        icono: "🏊",
        actividad: "Iglesia + Natacion opcional o descanso total",
        horario: "7:00 am - Iglesia / Tarde libre",
        calorias: "1,900 - 2,000",
        esCardio: false
    },
    1: { // Lunes
        nombre: "Lunes",
        tipo: "Cardio",
        icono: "🏃",
        actividad: "Correr 6K",
        horario: "5:45 - 6:30 am",
        calorias: "2,200 - 2,300",
        esCardio: true
    },
    2: { // Martes
        nombre: "Martes",
        tipo: "Fuerza",
        icono: "🏋️",
        actividad: "Fuerza en casa + Iglesia (7-9pm)",
        horario: "5:45 - 6:25 am",
        calorias: "1,900 - 2,000",
        esCardio: false
    },
    3: { // Miercoles
        nombre: "Miercoles",
        tipo: "Cardio",
        icono: "🏃",
        actividad: "Correr 5-6K + Ensayo banda (7-10pm)",
        horario: "5:45 - 6:30 am",
        calorias: "2,200",
        esCardio: true
    },
    4: { // Jueves
        nombre: "Jueves",
        tipo: "Deporte",
        icono: "🏀",
        actividad: "Basquet + Iglesia (7-9pm)",
        horario: "5:45 - 6:45 am",
        calorias: "2,200",
        esCardio: true
    },
    5: { // Viernes
        nombre: "Viernes",
        tipo: "Fuerza",
        icono: "🏋️",
        actividad: "Fuerza en casa - Noche libre",
        horario: "5:45 - 6:25 am",
        calorias: "1,900 - 2,000",
        esCardio: false
    },
    6: { // Sabado
        nombre: "Sabado",
        tipo: "Cardio Suave",
        icono: "🏃",
        actividad: "Correr suave o Basquet - Tarde libre",
        horario: "6:30 - 7:30 am",
        calorias: "~2,100",
        esCardio: true
    }
};

// Horarios detallados por dia
const HORARIOS_DIA = {
    0: { // Domingo
        nombre: "Domingo",
        actividades: [
            { hora: "7:00 am", actividad: "Despertar", icono: "⏰", tipo: "despertar" },
            { hora: "8:00 am - 12:00 pm", actividad: "Iglesia", icono: "⛪", tipo: "iglesia" },
            { hora: "12:00 - 1:00 pm", actividad: "Almuerzo", icono: "🍽️", tipo: "comida" },
            { hora: "Tarde", actividad: "Natacion opcional o descanso", icono: "🏊", tipo: "ejercicio" },
            { hora: "6:30 - 7:00 pm", actividad: "Cena", icono: "🥗", tipo: "comida" },
            { hora: "10:00 pm", actividad: "Prepararse para dormir", icono: "🌙", tipo: "preparar" },
            { hora: "10:30 pm", actividad: "Dormir", icono: "😴", tipo: "sueno" }
        ]
    },
    1: { // Lunes
        nombre: "Lunes",
        actividades: [
            { hora: "5:30 am", actividad: "Despertar", icono: "⏰", tipo: "despertar" },
            { hora: "5:45 - 6:30 am", actividad: "Correr 6K", icono: "🏃", tipo: "ejercicio" },
            { hora: "6:30 - 7:00 am", actividad: "Ducha + Desayuno", icono: "🍳", tipo: "comida" },
            { hora: "8:00 am - 2:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "2:00 - 3:00 pm", actividad: "Almuerzo", icono: "🍽️", tipo: "comida" },
            { hora: "3:00 - 5:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "6:30 pm", actividad: "Cena", icono: "🥗", tipo: "comida" },
            { hora: "10:00 pm", actividad: "Prepararse para dormir", icono: "🌙", tipo: "preparar" },
            { hora: "10:30 pm", actividad: "Dormir", icono: "😴", tipo: "sueno" }
        ]
    },
    2: { // Martes
        nombre: "Martes",
        actividades: [
            { hora: "5:30 am", actividad: "Despertar", icono: "⏰", tipo: "despertar" },
            { hora: "5:45 - 6:25 am", actividad: "Fuerza en casa", icono: "🏋️", tipo: "ejercicio" },
            { hora: "6:30 - 7:00 am", actividad: "Ducha + Desayuno", icono: "🍳", tipo: "comida" },
            { hora: "8:00 am - 2:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "2:00 - 3:00 pm", actividad: "Almuerzo", icono: "🍽️", tipo: "comida" },
            { hora: "3:00 - 5:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "6:00 pm", actividad: "Cena ligera", icono: "🥗", tipo: "comida" },
            { hora: "7:00 - 9:00 pm", actividad: "Iglesia", icono: "⛪", tipo: "iglesia" },
            { hora: "10:00 pm", actividad: "Prepararse para dormir", icono: "🌙", tipo: "preparar" },
            { hora: "10:30 pm", actividad: "Dormir", icono: "😴", tipo: "sueno" }
        ]
    },
    3: { // Miercoles
        nombre: "Miercoles",
        actividades: [
            { hora: "5:30 am", actividad: "Despertar", icono: "⏰", tipo: "despertar" },
            { hora: "5:45 - 6:30 am", actividad: "Correr 5-6K", icono: "🏃", tipo: "ejercicio" },
            { hora: "6:30 - 7:00 am", actividad: "Ducha + Desayuno", icono: "🍳", tipo: "comida" },
            { hora: "8:00 am - 2:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "2:00 - 3:00 pm", actividad: "Almuerzo", icono: "🍽️", tipo: "comida" },
            { hora: "3:00 - 5:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "6:00 pm", actividad: "Cena ligera", icono: "🥗", tipo: "comida" },
            { hora: "7:00 - 10:00 pm", actividad: "Ensayo banda", icono: "🎵", tipo: "banda" },
            { hora: "10:30 pm", actividad: "Dormir", icono: "😴", tipo: "sueno" }
        ]
    },
    4: { // Jueves
        nombre: "Jueves",
        actividades: [
            { hora: "5:30 am", actividad: "Despertar", icono: "⏰", tipo: "despertar" },
            { hora: "5:45 - 6:45 am", actividad: "Basquet", icono: "🏀", tipo: "ejercicio" },
            { hora: "7:00 am", actividad: "Ducha + Desayuno", icono: "🍳", tipo: "comida" },
            { hora: "8:00 am - 2:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "2:00 - 3:00 pm", actividad: "Almuerzo", icono: "🍽️", tipo: "comida" },
            { hora: "3:00 - 5:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "6:00 pm", actividad: "Cena", icono: "🥗", tipo: "comida" },
            { hora: "7:00 - 9:00 pm", actividad: "Iglesia", icono: "⛪", tipo: "iglesia" },
            { hora: "10:00 pm", actividad: "Prepararse para dormir", icono: "🌙", tipo: "preparar" },
            { hora: "10:30 pm", actividad: "Dormir", icono: "😴", tipo: "sueno" }
        ]
    },
    5: { // Viernes
        nombre: "Viernes",
        actividades: [
            { hora: "5:30 am", actividad: "Despertar", icono: "⏰", tipo: "despertar" },
            { hora: "5:45 - 6:25 am", actividad: "Fuerza en casa", icono: "🏋️", tipo: "ejercicio" },
            { hora: "6:30 - 7:00 am", actividad: "Ducha + Desayuno", icono: "🍳", tipo: "comida" },
            { hora: "8:00 am - 2:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "2:00 - 3:00 pm", actividad: "Almuerzo", icono: "🍽️", tipo: "comida" },
            { hora: "3:00 - 5:00 pm", actividad: "Trabajo", icono: "💼", tipo: "trabajo" },
            { hora: "6:30 pm", actividad: "Cena", icono: "🥗", tipo: "comida" },
            { hora: "Noche", actividad: "Libre", icono: "🎉", tipo: "libre" },
            { hora: "10:30 pm", actividad: "Dormir", icono: "😴", tipo: "sueno" }
        ]
    },
    6: { // Sabado
        nombre: "Sabado",
        actividades: [
            { hora: "6:30 - 7:30 am", actividad: "Correr suave o Basquet", icono: "🏃", tipo: "ejercicio" },
            { hora: "7:30 - 8:30 am", actividad: "Ducha + Desayuno", icono: "🍳", tipo: "comida" },
            { hora: "Manana/Tarde", actividad: "Libre / Estudios de ingles", icono: "📚", tipo: "libre" },
            { hora: "2:00 - 3:00 pm", actividad: "Almuerzo", icono: "🍽️", tipo: "comida" },
            { hora: "6:30 pm", actividad: "Cena", icono: "🥗", tipo: "comida" },
            { hora: "10:00 pm", actividad: "Prepararse para dormir", icono: "🌙", tipo: "preparar" },
            { hora: "10:30 pm", actividad: "Dormir", icono: "😴", tipo: "sueno" }
        ]
    }
};

// Resultados esperados por mes
const RESULTADOS_ESPERADOS = [
    { mes: 1, perdida: "5-7", pesoEsperado: "90-92" },
    { mes: "2-3", perdida: "4-5", pesoEsperado: "85-88" },
    { mes: "4-5", perdida: "3-4", pesoEsperado: "81-85" },
    { mes: "Final", perdida: "Meta", pesoEsperado: "77-79" }
];

// Mensajes motivacionales para fitness
const MENSAJES_MOTIVACIONALES = [
    "Cada entrenamiento te acerca a tu mejor version.",
    "El dolor de hoy es la fuerza de manana.",
    "No te rindas. Los resultados llegan con constancia.",
    "Tu cuerpo puede hacerlo. Convence a tu mente.",
    "Un dia a la vez. Un entrenamiento a la vez.",
    "El sudor de hoy es el exito de manana.",
    "No entrenes hasta que duela, entrena hasta que funcione.",
    "La disciplina supera a la motivacion.",
    "Cada paso cuenta. Cada repeticion importa.",
    "Tu unica competencia eres tu de ayer.",
    "El ejercicio es una celebracion de lo que tu cuerpo puede hacer.",
    "Hazlo por ti. Por tu salud. Por tu futuro.",
    "Los cambios no suceden de la noche a la manana, pero suceden.",
    "Confia en el proceso. Los resultados vendran.",
    "Hoy es un buen dia para ser mejor que ayer."
];

// Obtener peso actual desde localStorage o usar el inicial
function getPesoActual() {
    const pesoGuardado = localStorage.getItem('pesoActual');
    return pesoGuardado ? parseFloat(pesoGuardado) : DATOS_PERSONALES.pesoInicial;
}

// Guardar peso actual en localStorage
function guardarPesoActual(peso) {
    localStorage.setItem('pesoActual', peso.toString());
    localStorage.setItem('ultimaActualizacionPeso', new Date().toISOString());
}

// Calcular IMC
function calcularIMC(peso, estatura) {
    return (peso / (estatura * estatura)).toFixed(1);
}

// Formatear fecha
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-GT', options);
}

// Obtener dia de la semana (0-6)
function getDiaSemana() {
    return new Date().getDay();
}

// Obtener entrenamiento de hoy
function getEntrenamientoHoy() {
    const dia = getDiaSemana();
    return PLAN_SEMANAL[dia];
}

// Obtener proximo entrenamiento
function getProximoEntrenamiento() {
    const ahora = new Date();
    const horaActual = ahora.getHours();
    const minutoActual = ahora.getMinutes();
    const diaActual = ahora.getDay();

    // Hora del entrenamiento (5:45 am)
    const horaEntreno = 5;
    const minutoEntreno = 45;

    let diasHastaProximo = 0;
    let proximoDia = diaActual;

    // Si ya paso la hora del entrenamiento de hoy, el proximo es manana
    if (horaActual > horaEntreno || (horaActual === horaEntreno && minutoActual >= minutoEntreno)) {
        diasHastaProximo = 1;
        proximoDia = (diaActual + 1) % 7;
    }

    // Calcular fecha y hora del proximo entrenamiento
    const proximoEntreno = new Date(ahora);
    proximoEntreno.setDate(proximoEntreno.getDate() + diasHastaProximo);
    proximoEntreno.setHours(horaEntreno, minutoEntreno, 0, 0);

    return {
        fecha: proximoEntreno,
        entrenamiento: PLAN_SEMANAL[proximoDia]
    };
}

// Actualizar fecha actual
function actualizarFechaActual() {
    const fechaElement = document.getElementById('fecha-actual');
    const hoy = new Date();
    fechaElement.textContent = formatDate(hoy);
}

// Actualizar mensaje motivacional
function actualizarMensajeMotivacional() {
    const mensajeElement = document.getElementById('mensaje-recordatorio');
    const randomIndex = Math.floor(Math.random() * MENSAJES_MOTIVACIONALES.length);
    mensajeElement.textContent = MENSAJES_MOTIVACIONALES[randomIndex];
}

// Actualizar progreso de peso
function actualizarProgresoPeso() {
    const pesoActual = getPesoActual();
    const pesoPerdido = DATOS_PERSONALES.pesoInicial - pesoActual;
    const pesoAPerder = DATOS_PERSONALES.pesoInicial - DATOS_PERSONALES.pesoMeta;
    const porcentaje = Math.round((pesoPerdido / pesoAPerder) * 100);

    document.getElementById('peso-actual').textContent = `${pesoActual} kg`;
    document.getElementById('peso-perdido').textContent = `${pesoPerdido.toFixed(1)} kg`;
    document.getElementById('porcentaje-progreso').textContent = `${Math.max(0, porcentaje)}%`;

    // Actualizar IMC
    const imc = calcularIMC(pesoActual, DATOS_PERSONALES.estatura);
    document.getElementById('imc-actual').textContent = imc;

    // Animar barra de progreso
    setTimeout(() => {
        document.getElementById('barra-progreso').style.width = `${Math.max(0, Math.min(100, porcentaje))}%`;
    }, 300);
}

// Actualizar entrenamiento de hoy
function actualizarEntrenamientoHoy() {
    const entreno = getEntrenamientoHoy();

    document.getElementById('dia-nombre').textContent = entreno.nombre;
    document.getElementById('entrenamiento-tipo').textContent = entreno.tipo;
    document.getElementById('entrenamiento-icono').textContent = entreno.icono;
    document.getElementById('entrenamiento-detalle').textContent = entreno.actividad;
    document.getElementById('calorias-dia').textContent = entreno.calorias + ' kcal';

    // Marcar el dia actual en el plan semanal
    const dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const diaActual = getDiaSemana();

    dias.forEach((dia, index) => {
        const diaElement = document.getElementById(`dia-${dia}`);
        if (diaElement) {
            if (index === diaActual) {
                diaElement.classList.add('dia-activo');
            } else {
                diaElement.classList.remove('dia-activo');
            }
        }
    });
}

// Actualizar horario del dia
function actualizarHorarioDia() {
    const diaActual = getDiaSemana();
    const horarioDia = HORARIOS_DIA[diaActual];

    // Actualizar titulo
    document.getElementById('horario-titulo').textContent = `Horario de ${horarioDia.nombre}`;

    // Generar timeline
    const timeline = document.getElementById('horario-timeline');
    timeline.innerHTML = '';

    horarioDia.actividades.forEach(actividad => {
        const item = document.createElement('div');
        item.className = `horario-item ${actividad.tipo}`;
        item.innerHTML = `
            <span class="horario-hora">${actividad.hora}</span>
            <span class="horario-actividad">${actividad.actividad}</span>
            <span class="horario-icono">${actividad.icono}</span>
        `;
        timeline.appendChild(item);
    });
}

// Actualizar countdown del proximo entrenamiento
function actualizarCountdown() {
    const { fecha, entrenamiento } = getProximoEntrenamiento();
    const ahora = new Date();
    const diferencia = fecha - ahora;

    if (diferencia <= 0) {
        document.getElementById('horas').textContent = '0';
        document.getElementById('minutos').textContent = '0';
        return;
    }

    const horas = Math.floor(diferencia / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('proximo-entreno-nombre').textContent = `${entrenamiento.nombre} - ${entrenamiento.tipo}`;
}

// Iniciar rotacion de mensajes
function iniciarRotacionMensajes() {
    actualizarMensajeMotivacional();
    setInterval(actualizarMensajeMotivacional, 30000); // Cada 30 segundos
}

// Iniciar countdown
function iniciarCountdown() {
    actualizarCountdown();
    setInterval(actualizarCountdown, 60000); // Cada minuto
}

// Agregar funcionalidad para actualizar peso manualmente
function agregarBotonActualizarPeso() {
    const seccionProgreso = document.querySelector('.progreso-general');
    const btnContainer = document.createElement('div');
    btnContainer.className = 'actualizar-peso-container';
    btnContainer.innerHTML = `
        <button id="btn-actualizar-peso" class="btn-actualizar-peso">
            Actualizar Peso
        </button>
    `;
    seccionProgreso.appendChild(btnContainer);

    document.getElementById('btn-actualizar-peso').addEventListener('click', function() {
        const nuevoPeso = prompt('Ingresa tu peso actual (kg):', getPesoActual());
        if (nuevoPeso !== null && !isNaN(parseFloat(nuevoPeso))) {
            guardarPesoActual(parseFloat(nuevoPeso));
            actualizarProgresoPeso();
            mostrarNotificacion('Peso actualizado correctamente');
        }
    });
}

// Mostrar notificacion
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.className = 'notificacion';
    notif.textContent = mensaje;
    notif.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #00c853, #00e676);
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        font-weight: 600;
        box-shadow: 0 4px 15px rgba(0, 200, 83, 0.4);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

// Inicializar la aplicacion
function init() {
    actualizarFechaActual();
    iniciarRotacionMensajes();
    actualizarProgresoPeso();
    actualizarEntrenamientoHoy();
    actualizarHorarioDia();
    iniciarCountdown();
    agregarBotonActualizarPeso();

    console.log('💪 Control de Peso iniciado');
    console.log('🎯 Meta: 77-79 kg (170-175 lb)');
}

// Ejecutar cuando cargue la pagina
window.addEventListener('load', init);

// Actualizar a medianoche
function programarActualizacionDiaria() {
    const ahora = new Date();
    const manana = new Date(ahora);
    manana.setDate(manana.getDate() + 1);
    manana.setHours(0, 0, 0, 0);

    const tiempoHastaManana = manana - ahora;

    setTimeout(() => {
        init();
        programarActualizacionDiaria();
    }, tiempoHastaManana);
}

programarActualizacionDiaria();

// ============================================
// SISTEMA DE NOTIFICACIONES POR EMAIL
// ============================================

// Inicializar EmailJS
function initEmailJS() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAIL_CONFIG.publicKey);
        console.log('📧 EmailJS inicializado');
    }
}

// Obtener mensaje motivacional aleatorio
function getMensajeAleatorio() {
    const randomIndex = Math.floor(Math.random() * MENSAJES_MOTIVACIONALES.length);
    return MENSAJES_MOTIVACIONALES[randomIndex];
}

// Formatear fecha corta
function formatFechaCorta(date) {
    const opciones = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('es-GT', opciones);
}

// Enviar email de recordatorio
async function enviarRecordatorioEmail() {
    const pesoActual = getPesoActual();
    const pesoPerdido = DATOS_PERSONALES.pesoInicial - pesoActual;
    const pesoAPerder = DATOS_PERSONALES.pesoInicial - DATOS_PERSONALES.pesoMeta;
    const porcentaje = Math.round((pesoPerdido / pesoAPerder) * 100);
    const entreno = getEntrenamientoHoy();

    const hoy = new Date();
    const fechaHoy = formatDate(hoy);

    const templateParams = {
        to_email: EMAIL_CONFIG.destinatario,
        fecha: fechaHoy,
        mensaje_motivacional: getMensajeAleatorio(),
        deuda_actual: `${pesoActual} kg (Perdido: ${pesoPerdido.toFixed(1)} kg)`,
        progreso: porcentaje,
        proximo_pago: `${entreno.nombre}: ${entreno.actividad}`,
        fecha_proximo: entreno.calorias + ' kcal'
    };

    try {
        const response = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateId,
            templateParams
        );
        console.log('✅ Email enviado exitosamente:', response.status);
        guardarUltimoEnvio();
        mostrarNotificacion('Recordatorio enviado a tu email');
        return true;
    } catch (error) {
        console.error('❌ Error al enviar email:', error);
        return false;
    }
}

// Guardar fecha del ultimo envio en localStorage
function guardarUltimoEnvio() {
    const hoy = new Date().toDateString();
    localStorage.setItem('ultimoEmailEnviado', hoy);
}

// Verificar si ya se envio email hoy
function yaSeEnvioHoy() {
    const ultimoEnvio = localStorage.getItem('ultimoEmailEnviado');
    const hoy = new Date().toDateString();
    return ultimoEnvio === hoy;
}

// Verificar y enviar email diario automaticamente
function verificarEnvioAutomatico() {
    if (!yaSeEnvioHoy()) {
        console.log('📧 Enviando recordatorio diario...');
        enviarRecordatorioEmail();
    } else {
        console.log('📧 Ya se envio el recordatorio de hoy');
    }
}

// Agregar boton para enviar email manualmente
function agregarBotonEmail() {
    const footer = document.querySelector('.footer');
    const btnContainer = document.createElement('div');
    btnContainer.style.cssText = 'margin-bottom: 1rem;';
    btnContainer.innerHTML = `
        <button id="btn-enviar-email" style="
            background: linear-gradient(135deg, #4facfe, #667eea);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 0.9rem;
            transition: transform 0.2s, box-shadow 0.2s;
        ">
            Enviar recordatorio ahora
        </button>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
            Se envia automaticamente una vez al dia
        </p>
    `;
    footer.insertBefore(btnContainer, footer.firstChild);

    document.getElementById('btn-enviar-email').addEventListener('click', async function() {
        this.disabled = true;
        this.textContent = 'Enviando...';
        await enviarRecordatorioEmail();
        this.textContent = 'Enviar recordatorio ahora';
        this.disabled = false;
    });
}

// Agregar estilos para animaciones
function agregarEstilosEmail() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        #btn-enviar-email:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
        }
        .btn-actualizar-peso {
            background: linear-gradient(135deg, #00c853, #00e676);
            color: #000;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
            font-size: 0.9rem;
            transition: transform 0.2s, box-shadow 0.2s;
            margin-top: 1rem;
        }
        .btn-actualizar-peso:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(0, 200, 83, 0.4);
        }
        .actualizar-peso-container {
            text-align: center;
            margin-top: 1rem;
        }
    `;
    document.head.appendChild(style);
}

// Inicializar sistema de emails cuando carga la pagina
window.addEventListener('load', () => {
    initEmailJS();
    agregarEstilosEmail();
    agregarBotonEmail();

    // Esperar 2 segundos despues de cargar para enviar el email automatico
    setTimeout(verificarEnvioAutomatico, 2000);
});
