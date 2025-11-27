// Configuración de EmailJS
const EMAIL_CONFIG = {
    serviceId: 'service_5i394rd',
    templateId: 'template_pk4g5bc',
    publicKey: 'dCQKS6ZGwA3CpfMmG',
    destinatario: 'josuecotzojay305@gmail.com'
};

// Datos del plan de pagos
const PLAN_PAGOS = {
    deudaInicial: 13000,
    deudaTarjetaInicial: 8000,
    deudaExternaInicial: 5000,
    fases: [
        {
            id: 1,
            nombre: "Fin de Noviembre",
            fecha: new Date(2025, 10, 29), // 29 Nov 2025
            pagos: { externa: 2500, tarjeta: 1000 },
            deudaDespues: { externa: 2500, tarjeta: 7000 },
            montoTotal: 3500
        },
        {
            id: 2,
            nombre: "Primera Quincena Diciembre",
            fecha: new Date(2025, 11, 15), // 15 Dic 2025
            pagos: { externa: 2500, tarjeta: 2900 },
            deudaDespues: { externa: 0, tarjeta: 4100 },
            montoTotal: 5400
        },
        {
            id: 3,
            nombre: "Segunda Quincena Diciembre",
            fecha: new Date(2025, 11, 31), // 31 Dic 2025
            pagos: { externa: 0, tarjeta: 2400 },
            deudaDespues: { externa: 0, tarjeta: 1700 },
            montoTotal: 2400
        },
        {
            id: 4,
            nombre: "Primera Quincena Enero",
            fecha: new Date(2026, 0, 15), // 15 Ene 2026
            pagos: { externa: 0, tarjeta: 1700 },
            deudaDespues: { externa: 0, tarjeta: 0 },
            montoTotal: 1700
        }
    ]
};

// Mensajes de recordatorio para no gastar en estupideces
const MENSAJES_RECORDATORIO = [
    "Cada gasto innecesario te aleja de tu libertad financiera.",
    "Antes de comprar, pregúntate: ¿Lo necesito o solo lo quiero?",
    "Q1 ahorrado es Q1 menos de deuda. Piénsalo.",
    "No gastes en estupideces. Tu yo del futuro te lo agradecerá.",
    "Ese antojo de hoy puede costarte semanas de trabajo extra.",
    "La libertad financiera está a solo 4 pagos de distancia.",
    "¿Vale la pena ese gasto? Tu meta es enero sin deudas.",
    "Evita los gastos hormiga. Se acumulan más rápido de lo que crees.",
    "Cada quetzal cuenta. Mantén el enfoque en tu objetivo.",
    "No te endeudes más. Estás tan cerca de ser libre.",
    "Ese café/comida fuera puede esperar. Tu deuda no.",
    "Piensa en los Q2,700 libres que tendrás en febrero.",
    "Un mes de sacrificio = años de tranquilidad financiera.",
    "No compres por impulso. Respira, piensa, decide.",
    "Tu futuro yo te está mirando. No lo decepciones."
];

// Formatear moneda
function formatMoney(amount) {
    return `Q${amount.toLocaleString('es-GT')}`;
}

// Formatear fecha
function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-GT', options);
}

// Obtener fase actual basada en la fecha
function getFaseActual() {
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    for (let i = 0; i < PLAN_PAGOS.fases.length; i++) {
        const fase = PLAN_PAGOS.fases[i];
        if (hoy <= fase.fecha) {
            return { fase, index: i };
        }
    }

    // Si ya pasaron todas las fases
    return { fase: null, index: -1, completado: true };
}

// Calcular deuda actual basada en las fases completadas
function calcularDeudaActual() {
    const { index, completado } = getFaseActual();

    if (completado) {
        return { tarjeta: 0, externa: 0, total: 0 };
    }

    if (index === 0) {
        return {
            tarjeta: PLAN_PAGOS.deudaTarjetaInicial,
            externa: PLAN_PAGOS.deudaExternaInicial,
            total: PLAN_PAGOS.deudaInicial
        };
    }

    // Tomar la deuda después de la fase anterior completada
    const faseAnterior = PLAN_PAGOS.fases[index - 1];
    return {
        tarjeta: faseAnterior.deudaDespues.tarjeta,
        externa: faseAnterior.deudaDespues.externa,
        total: faseAnterior.deudaDespues.tarjeta + faseAnterior.deudaDespues.externa
    };
}

// Calcular total pagado
function calcularTotalPagado() {
    const deudaActual = calcularDeudaActual();
    return PLAN_PAGOS.deudaInicial - deudaActual.total;
}

// Actualizar fecha actual
function actualizarFechaActual() {
    const fechaElement = document.getElementById('fecha-actual');
    const hoy = new Date();
    fechaElement.textContent = formatDate(hoy);
}

// Actualizar mensaje de recordatorio
function actualizarMensajeRecordatorio() {
    const mensajeElement = document.getElementById('mensaje-recordatorio');
    const randomIndex = Math.floor(Math.random() * MENSAJES_RECORDATORIO.length);
    mensajeElement.textContent = MENSAJES_RECORDATORIO[randomIndex];
}

// Actualizar progreso general
function actualizarProgresoGeneral() {
    const deudaActual = calcularDeudaActual();
    const totalPagado = calcularTotalPagado();
    const porcentaje = Math.round((totalPagado / PLAN_PAGOS.deudaInicial) * 100);

    document.getElementById('deuda-actual').textContent = formatMoney(deudaActual.total);
    document.getElementById('total-pagado').textContent = formatMoney(totalPagado);
    document.getElementById('porcentaje-progreso').textContent = `${porcentaje}%`;

    // Animar barra de progreso
    setTimeout(() => {
        document.getElementById('barra-progreso').style.width = `${porcentaje}%`;
    }, 300);
}

// Actualizar tarjetas de deudas individuales
function actualizarDeudasIndividuales() {
    const deudaActual = calcularDeudaActual();

    // Tarjeta de crédito
    const tarjetaElement = document.getElementById('deuda-tarjeta');
    tarjetaElement.textContent = formatMoney(deudaActual.tarjeta);
    const porcentajeTarjeta = (deudaActual.tarjeta / PLAN_PAGOS.deudaTarjetaInicial) * 100;
    document.getElementById('barra-tarjeta').style.width = `${porcentajeTarjeta}%`;

    // Deuda externa
    const externaElement = document.getElementById('deuda-externa');
    externaElement.textContent = formatMoney(deudaActual.externa);
    const porcentajeExterna = (deudaActual.externa / PLAN_PAGOS.deudaExternaInicial) * 100;
    document.getElementById('barra-externa').style.width = `${porcentajeExterna}%`;

    // Marcar como liquidada si es 0
    if (deudaActual.externa === 0) {
        document.querySelector('.card-deuda.externa').classList.add('liquidada');
    }
    if (deudaActual.tarjeta === 0) {
        document.querySelector('.card-deuda.tarjeta').classList.add('liquidada');
    }
}

// Actualizar timeline de fases
function actualizarTimeline() {
    const { index: faseActualIndex, completado } = getFaseActual();

    PLAN_PAGOS.fases.forEach((fase, index) => {
        const faseElement = document.getElementById(`fase-${fase.id}`);

        if (completado || index < faseActualIndex) {
            faseElement.classList.add('completed');
            faseElement.classList.remove('active');
        } else if (index === faseActualIndex) {
            faseElement.classList.add('active');
            faseElement.classList.remove('completed');
        } else {
            faseElement.classList.remove('completed', 'active');
        }
    });
}

// Actualizar countdown del próximo pago
function actualizarCountdown() {
    const { fase, completado } = getFaseActual();
    const section = document.getElementById('proximo-pago-section');

    if (completado || !fase) {
        section.innerHTML = `
            <h2>Próximo Pago</h2>
            <div class="proximo-pago-card" style="background: linear-gradient(135deg, rgba(0, 200, 83, 0.2), rgba(0, 242, 96, 0.2)); border-color: var(--success);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">🎉</div>
                <p style="font-size: 1.5rem; font-weight: 800; color: var(--success);">¡LIBRE DE DEUDAS!</p>
                <p style="color: var(--text-secondary);">Has completado tu plan exitosamente</p>
            </div>
        `;
        return;
    }

    const ahora = new Date();
    const diferencia = fase.fecha - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('dias').textContent = Math.max(0, dias);
    document.getElementById('horas').textContent = Math.max(0, horas);
    document.getElementById('minutos').textContent = Math.max(0, minutos);

    document.getElementById('proximo-fase').textContent = fase.nombre;
    document.getElementById('proximo-monto').textContent = formatMoney(fase.montoTotal);

    // Marcar como urgente si faltan menos de 3 días
    const card = document.querySelector('.proximo-pago-card');
    if (dias < 3 && dias >= 0) {
        card.classList.add('urgente');
    } else {
        card.classList.remove('urgente');
    }
}

// Cambiar mensaje de recordatorio cada cierto tiempo
function iniciarRotacionMensajes() {
    actualizarMensajeRecordatorio();
    setInterval(actualizarMensajeRecordatorio, 30000); // Cada 30 segundos
}

// Actualizar countdown cada minuto
function iniciarCountdown() {
    actualizarCountdown();
    setInterval(actualizarCountdown, 60000); // Cada minuto
}

// Inicializar la aplicación
function init() {
    actualizarFechaActual();
    iniciarRotacionMensajes();
    actualizarProgresoGeneral();
    actualizarDeudasIndividuales();
    actualizarTimeline();
    iniciarCountdown();

    console.log('💰 Control de Deudas iniciado');
    console.log('🎯 Meta: Libre de deudas para el 15 de Enero 2025');
}

// Ejecutar cuando cargue la página
window.addEventListener('load', init);

// Actualizar fecha a medianoche
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
    const randomIndex = Math.floor(Math.random() * MENSAJES_RECORDATORIO.length);
    return MENSAJES_RECORDATORIO[randomIndex];
}

// Formatear fecha corta
function formatFechaCorta(date) {
    const opciones = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('es-GT', opciones);
}

// Enviar email de recordatorio
async function enviarRecordatorioEmail() {
    const deudaActual = calcularDeudaActual();
    const totalPagado = calcularTotalPagado();
    const porcentaje = Math.round((totalPagado / PLAN_PAGOS.deudaInicial) * 100);
    const { fase, completado } = getFaseActual();

    const hoy = new Date();
    const fechaHoy = formatDate(hoy);

    let proximoPago = 'Plan completado';
    let fechaProximo = '-';

    if (!completado && fase) {
        proximoPago = formatMoney(fase.montoTotal);
        fechaProximo = formatFechaCorta(fase.fecha);
    }

    const templateParams = {
        to_email: EMAIL_CONFIG.destinatario,
        fecha: fechaHoy,
        mensaje_motivacional: getMensajeAleatorio(),
        deuda_actual: formatMoney(deudaActual.total),
        progreso: porcentaje,
        proximo_pago: proximoPago,
        fecha_proximo: fechaProximo
    };

    try {
        const response = await emailjs.send(
            EMAIL_CONFIG.serviceId,
            EMAIL_CONFIG.templateId,
            templateParams
        );
        console.log('✅ Email enviado exitosamente:', response.status);
        guardarUltimoEnvio();
        mostrarNotificacionExito();
        return true;
    } catch (error) {
        console.error('❌ Error al enviar email:', error);
        return false;
    }
}

// Guardar fecha del último envío en localStorage
function guardarUltimoEnvio() {
    const hoy = new Date().toDateString();
    localStorage.setItem('ultimoEmailEnviado', hoy);
}

// Verificar si ya se envió email hoy
function yaSeEnvioHoy() {
    const ultimoEnvio = localStorage.getItem('ultimoEmailEnviado');
    const hoy = new Date().toDateString();
    return ultimoEnvio === hoy;
}

// Mostrar notificación de éxito en la página
function mostrarNotificacionExito() {
    const notif = document.createElement('div');
    notif.className = 'notificacion-email';
    notif.innerHTML = '📧 Recordatorio enviado a tu email';
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

// Verificar y enviar email diario automáticamente
function verificarEnvioAutomatico() {
    if (!yaSeEnvioHoy()) {
        console.log('📧 Enviando recordatorio diario...');
        enviarRecordatorioEmail();
    } else {
        console.log('📧 Ya se envió el recordatorio de hoy');
    }
}

// Agregar botón para enviar email manualmente
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
            📧 Enviar recordatorio ahora
        </button>
        <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
            Se envía automáticamente una vez al día
        </p>
    `;
    footer.insertBefore(btnContainer, footer.firstChild);

    document.getElementById('btn-enviar-email').addEventListener('click', async function() {
        this.disabled = true;
        this.textContent = '📧 Enviando...';
        await enviarRecordatorioEmail();
        this.textContent = '📧 Enviar recordatorio ahora';
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
    `;
    document.head.appendChild(style);
}

// Inicializar sistema de emails cuando carga la página
window.addEventListener('load', () => {
    initEmailJS();
    agregarEstilosEmail();
    agregarBotonEmail();

    // Esperar 2 segundos después de cargar para enviar el email automático
    setTimeout(verificarEnvioAutomatico, 2000);
});
