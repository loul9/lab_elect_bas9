/**
 * LAB ELECTRONICA BASICA DE ARTEFACTOS - Script Principal
 * Desarrollado para Educación Básica Primaria en Colombia.
 * Sin dependencias de compilación ni backend. Funciona como sitio estático.
 */

// Componentes y modelos GLB locales empaquetados dentro de assets/models/.
const COMPONENTS_DATA = [
  {
    id: "protoboard",
    nombre: "Protoboard (Tabla de Pruebas)",
    icon: "🎛️",
    descripcion: "Es una tabla llena de orificios conectados internamente con láminas de metal. Nos permite armar y probar circuitos fácilmente sin tener que soldar los cables.",
    ejemplo: "Ejemplo: Se usa en talleres de inventores y prototipos de robótica.",
    modelName: "Protoboard",
    modelUrl: "./assets/models/protoboard.glb",
    colorHex: "#fff0f3"
  },
  {
    id: "bateria",
    nombre: "Batería / Pila (Bajo Voltaje)",
    icon: "🔋",
    descripcion: "Es la fuente de energía del circuito. Almacena química que se convierte en electricidad de bajo voltaje (ej. 1.5V o 9V) para mover los electrones.",
    ejemplo: "Ejemplo: Pilas de la linterna, del control remoto o juguetes.",
    modelName: "Batería 9V",
    modelUrl: "./assets/models/bateria.glb",
    colorHex: "#ffb3c1"
  },
  {
    id: "cables",
    nombre: "Cables Conectores (Jumper)",
    icon: "🔌",
    descripcion: "Son hilos de cobre cubiertos con plástico de colores. Funcionan como las 'carreteras' o tuberías por donde viaja la corriente eléctrica.",
    ejemplo: "Ejemplo: Los cables dentro de los cargadores de celular.",
    modelName: "Cables de Conexión",
    modelUrl: "./assets/models/cables.glb",
    colorHex: "#ff4d6d"
  },
  {
    id: "interruptor",
    nombre: "Interruptor (Switch)",
    icon: "🔘",
    descripcion: "Es un puente de control. Cuando está abierto, corta el camino de la corriente (apaga). Cuando se cierra, permite el paso continuo (enciende).",
    ejemplo: "Ejemplo: El botón para encender el bombillo del salón o la alcoba.",
    modelName: "Interruptor",
    modelUrl: "./assets/models/interruptor.glb",
    colorHex: "#590d22"
  },
  {
    id: "resistencia",
    nombre: "Resistencia (Resistor)",
    icon: "⚡",
    descripcion: "Funciona como un 'freno' para la electricidad. Reduce y regula el flujo de corriente para proteger componentes sensibles como el LED.",
    ejemplo: "Ejemplo: En el control de velocidad de un ventilador.",
    modelName: "Resistencia",
    modelUrl: "./assets/models/resistor.glb",
    colorHex: "#a4133c"
  },
  {
    id: "led",
    nombre: "LED (Diodo Emisor de Luz)",
    icon: "💡",
    descripcion: "Es un pequeño bombillito de semiconductor que transforma la energía eléctrica en luz brillante sin calentarse. Tiene sentido de conexión (polaridad).",
    ejemplo: "Ejemplo: La pantalla del televisor, luces de navidad o linternas.",
    modelName: "LED",
    modelUrl: "./assets/models/led.glb",
    colorHex: "#ff4d6d"
  },
  {
    id: "motor",
    nombre: "Motor Pequeño DC",
    icon: "⚙️",
    descripcion: "Transforma la energía eléctrica en movimiento giratorio. Al pasar corriente, hace girar un eje a gran velocidad.",
    ejemplo: "Ejemplo: Las hélices de un ventilador de mano o las ruedas de un carro de juguete.",
    modelName: "Motor DC",
    modelUrl: "./assets/models/motor.glb",
    colorHex: "#800f2f"
  },
  {
    id: "zumbador",
    nombre: "Zumbador (Buzzer)",
    icon: "🔔",
    descripcion: "Es un componente que convierte impulsos eléctricos en un sonido o pitido de alerta.",
    ejemplo: "Ejemplo: El timbre del colegio o la alarma del reloj.",
    modelName: "Zumbador",
    modelUrl: "./assets/models/buzzer.glb",
    colorHex: "#c9184a"
  },
  {
    id: "capacitor",
    nombre: "Condensador / Capacitor",
    icon: "🧲",
    descripcion: "Es como una pequeña 'tanque de reserva' de energía. Guarda electricidad por un momento y la libera rápidamente cuando se necesita.",
    ejemplo: "Ejemplo: El flash de las cámaras fotográficas.",
    modelName: "Condensador",
    modelUrl: "./assets/models/capacitor.glb",
    colorHex: "#ff758f"
  },
  {
    id: "transistor",
    nombre: "Transistor",
    icon: "🔀",
    descripcion: "Es el 'cerebro' básico de la electrónica. Funciona como un interruptor automático impulsado por electricidad o como un amplificador de señal.",
    ejemplo: "Ejemplo: Se encuentra por millones dentro de los microprocesadores de computadores y celulares.",
    modelName: "Transistor",
    modelUrl: "./assets/models/transistor.glb",
    colorHex: "#590d22"
  }
];

// Generador de modelos procedurales glTF/GLB minimalistas en base64 DataURI
// Garantiza disponibilidad inmediata offline y estática
function generateProceduralGltf(colorHex, name) {
  // Convierte hex a valores RGB 0-1
  const r = parseInt(colorHex.slice(1,3), 16) / 255;
  const g = parseInt(colorHex.slice(3,5), 16) / 255;
  const b = parseInt(colorHex.slice(5,7), 16) / 255;

  // JSON Estructura glTF 2.0 de un cubo coloreado estilizado
  const gltf = {
    "asset": { "version": "2.0", "generator": "LabElectronicaProcedural" },
    "scenes": [{ "nodes": [0] }],
    "nodes": [{ "mesh": 0, "name": name }],
    "meshes": [{
      "primitives": [{
        "attributes": { "POSITION": 0, "NORMAL": 1 },
        "indices": 2,
        "material": 0
      }]
    }],
    "materials": [{
      "pbrMetallicRoughness": {
        "baseColorFactor": [r, g, b, 1.0],
        "metallicFactor": 0.3,
        "roughnessFactor": 0.4
      },
      "name": "MaterialComponente"
    }],
    "buffers": [{
      "uri": generateBufferURI(),
      // byteLength es obligatorio en glTF 2.0; sin él algunos visores rechazan el modelo.
      "byteLength": 648
    }],
    "bufferViews": [
      { "buffer": 0, "byteOffset": 0, "byteLength": 288, "target": 34962 },
      { "buffer": 0, "byteOffset": 288, "byteLength": 288, "target": 34962 },
      { "buffer": 0, "byteOffset": 576, "byteLength": 72, "target": 34963 }
    ],
    "accessors": [
      { "bufferView": 0, "byteOffset": 0, "componentType": 5126, "count": 24, "type": "VEC3", "max": [1, 1, 1], "min": [-1, -1, -1] },
      { "bufferView": 1, "byteOffset": 0, "componentType": 5126, "count": 24, "type": "VEC3", "max": [1, 1, 1], "min": [-1, -1, -1] },
      { "bufferView": 2, "byteOffset": 0, "componentType": 5123, "count": 36, "type": "SCALAR", "max": [23], "min": [0] }
    ]
  };

  return "data:model/gltf+json;charset=utf-8," + encodeURIComponent(JSON.stringify(gltf));
}

// Genera datos binarios simples para el cubo glTF (posiciones, normales e índices)
function generateBufferURI() {
  const positions = new Float32Array([
    // Front
    -0.8,-0.8, 0.8,  0.8,-0.8, 0.8,  0.8, 0.8, 0.8, -0.8, 0.8, 0.8,
    // Back
    -0.8,-0.8,-0.8, -0.8, 0.8,-0.8,  0.8, 0.8,-0.8,  0.8,-0.8,-0.8,
    // Top
    -0.8, 0.8,-0.8, -0.8, 0.8, 0.8,  0.8, 0.8, 0.8,  0.8, 0.8,-0.8,
    // Bottom
    -0.8,-0.8,-0.8,  0.8,-0.8,-0.8,  0.8,-0.8, 0.8, -0.8,-0.8, 0.8,
    // Right
     0.8,-0.8,-0.8,  0.8, 0.8,-0.8,  0.8, 0.8, 0.8,  0.8,-0.8, 0.8,
    // Left
    -0.8,-0.8,-0.8, -0.8,-0.8, 0.8, -0.8, 0.8, 0.8, -0.8, 0.8,-0.8
  ]);

  const normals = new Float32Array([
     0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,
     0, 0,-1,  0, 0,-1,  0, 0,-1,  0, 0,-1,
     0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,
     0,-1, 0,  0,-1, 0,  0,-1, 0,  0,-1, 0,
     1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0,
    -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0
  ]);

  const indices = new Uint16Array([
    0,1,2, 0,2,3,    4,5,6, 4,6,7,    8,9,10, 8,10,11,
    12,13,14, 12,14,15, 16,17,18, 16,18,19, 20,21,22, 20,22,23
  ]);

  const totalBytes = positions.byteLength + normals.byteLength + indices.byteLength;
  const buffer = new ArrayBuffer(totalBytes);
  const floatView = new Float32Array(buffer, 0, (positions.length + normals.length));
  floatView.set(positions, 0);
  floatView.set(normals, positions.length);

  const uintView = new Uint16Array(buffer, positions.byteLength + normals.byteLength, indices.length);
  uintView.set(indices, 0);

  let binaryStr = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binaryStr += String.fromCharCode(bytes[i]);
  }
  return "data:application/octet-stream;base64," + btoa(binaryStr);
}

// INICIALIZACIÓN AL CARGAR EL DOM
document.addEventListener("DOMContentLoaded", () => {
  setupViewerEvents();
  renderCatalogCards();
  setupXRButtons();
  setupCircuitInteractiveTaller();
  
  // Cargar el primer modelo por defecto (Protoboard)
  loadComponentModel(COMPONENTS_DATA[0]);

  if (window.location.protocol === "file:") {
    showStatusMessage("Abriste la página como archivo local (file://), y el navegador bloquea la carga de los modelos GLB. Desde esta carpeta ejecuta `python3 -m http.server 8000` y abre http://localhost:8000; en Windows usa `py -m http.server 8000`.", "warning", 0);
  }

  // Si falla la conexión al CDN, evita dejar el indicador de carga activo sin explicación.
  setTimeout(() => {
    if (!customElements.get("model-viewer")) {
      showStatusMessage("El visor 3D no se pudo cargar. Revisa la conexión a internet para acceder a la biblioteca model-viewer; puedes continuar con el catálogo y la simulación.", "warning", 0);
    }
  }, 8000);
});

// RENDERING DEL CATÁLOGO DE COMPONENTES
function renderCatalogCards() {
  const container = document.getElementById("components-grid");
  if (!container) return;

  container.innerHTML = COMPONENTS_DATA.map((comp, idx) => `
    <article class="component-card ${idx === 0 ? 'active' : ''}" 
             data-id="${comp.id}" 
             tabindex="0" 
             role="button"
             aria-pressed="${idx === 0}"
             aria-label="Seleccionar ${comp.nombre} para ver en 3D">
      <div class="component-card-header">
        <div class="component-badge-icon" aria-hidden="true">${comp.icon}</div>
        <h3>${comp.nombre}</h3>
      </div>
      <p>${comp.descripcion}</p>
      <div class="component-example">${comp.ejemplo}</div>
    </article>
  `).join('');

  // Event Listeners para selección
  const cards = container.querySelectorAll(".component-card");
  cards.forEach(card => {
    const handleSelect = () => {
      cards.forEach(c => {
        c.classList.remove("active");
        c.setAttribute("aria-pressed", "false");
      });
      card.classList.add("active");
      card.setAttribute("aria-pressed", "true");
      const compId = card.getAttribute("data-id");
      const compData = COMPONENTS_DATA.find(c => c.id === compId);
      if (compData) {
        loadComponentModel(compData);
      }
    };

    card.addEventListener("click", handleSelect);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect();
      }
    });
  });
}

// CARGA DE MODELO EN EL VISOR 3D
function loadComponentModel(component) {
  setViewerSource(component.modelUrl, component.nombre, `Representación 3D de ${component.nombre}`);
}

let statusTimer = null;

function setViewerSource(source, label, altText) {
  const viewer = document.getElementById("main-viewer");
  const nameBadge = document.getElementById("active-model-name");
  if (!viewer) return;

  if (nameBadge) nameBadge.textContent = label;
  viewer.alt = altText;
  viewer.src = source;
  showStatusMessage(`Cargando ${label}…`, "info", 0);
}

function setupViewerEvents() {
  const viewer = document.getElementById("main-viewer");
  if (!viewer) return;
  viewer.addEventListener("load", () => {
    showStatusMessage("La representación 3D está lista. Puedes girarla y acercarla.", "success");
  });
  viewer.addEventListener("error", () => {
    if (window.location.protocol === "file:") {
      showStatusMessage("El navegador bloqueó el archivo GLB porque abriste index.html directamente. Usa un servidor local (localhost) o publica la página con HTTPS.", "error", 0);
    } else {
      showStatusMessage("No se pudo mostrar este modelo. Comprueba que el archivo GLB esté en assets/models/ y que el visor model-viewer se haya cargado.", "error", 0);
    }
  });
}

// CONFIGURACIÓN DE BOTONES RA Y RV
function setupXRButtons() {
  const btnAR = document.getElementById("btn-ar");
  const btnVR = document.getElementById("btn-vr");
  const viewer = document.getElementById("main-viewer");

  // REALIDAD AUMENTADA
  if (btnAR) {
    btnAR.addEventListener("click", () => {
      // Intenta activar la experiencia RA de model-viewer sólo al hacer clic
      if (viewer && typeof viewer.activateAR === "function" && viewer.canActivateAR) {
        try {
          const activation = viewer.activateAR();
          if (activation && typeof activation.catch === "function") {
            activation.catch(() => {
              showStatusMessage("No se pudo iniciar RA. Comprueba la compatibilidad del dispositivo, los permisos y que el sitio esté publicado con HTTPS.", "warning");
            });
          }
        } catch (error) {
          showStatusMessage("No se pudo iniciar RA. Comprueba la compatibilidad del dispositivo, los permisos y que el sitio esté publicado con HTTPS.", "warning");
        }
      } else {
        showStatusMessage("La Realidad Aumentada requiere un dispositivo y navegador compatibles, además de un modelo que pueda abrirse en RA. Puedes seguir explorando en 3D.", "warning");
      }
    });
  }

  // REALIDAD VIRTUAL
  if (btnVR) {
    btnVR.addEventListener("click", async () => {
      // Comprueba compatibilidad WebXR
      if ('xr' in navigator) {
        try {
          const supported = await navigator.xr.isSessionSupported('immersive-vr');
          if (supported) {
            showStatusMessage("Este dispositivo detecta WebXR immersive-vr, pero esta versión no incluye un motor de renderizado inmersivo y no abrirá una sesión RV. Puedes explorar el modelo en el visor 3D.", "warning");
          } else {
            showStatusMessage("Tu navegador o dispositivo no admite el modo RV inmersivo (immersive-vr). Puedes seguir explorando y rotando el modelo 3D en la pantalla.", "warning");
          }
        } catch (e) {
          showStatusMessage("No se pudo comprobar la compatibilidad con RV. Revisa que uses HTTPS y un navegador compatible.", "warning");
        }
      } else {
        showStatusMessage("WebXR no está disponible en este navegador o requiere conexión segura HTTPS. Puedes interactuar libremente con el visor 3D normal.", "warning");
      }
    });
  }
}

// LÓGICA DEL TALLER INTERACTIVO DE CIRCUITO EN SERIE
function setupCircuitInteractiveTaller() {
  const btnToggleSwitch = document.getElementById("btn-toggle-switch");
  const btnResetCircuit = document.getElementById("btn-reset-circuit");
  const feedbackBox = document.getElementById("circuit-feedback");
  const slotSwitch = document.getElementById("slot-switch");
  const slotLed = document.getElementById("slot-led");
  const stepCards = [...document.querySelectorAll(".step-card")];
  const progress = document.getElementById("circuit-progress");
  const wires = document.querySelectorAll(".wire");

  let completedSteps = 0;
  let isClosed = false;

  function updateStepProgress() {
    stepCards.forEach((card, index) => {
      const isComplete = index < completedSteps;
      const isCurrent = index === completedSteps;
      card.disabled = !isCurrent;
      card.classList.toggle("active", isCurrent);
      card.classList.toggle("completed", isComplete);
      card.setAttribute("aria-pressed", String(isComplete));

      const number = card.querySelector(".step-number");
      if (number) number.textContent = isComplete ? "✓" : String(index + 1);
    });
    if (progress) {
      progress.textContent = `${completedSteps} de ${stepCards.length} pasos completados.`;
    }
    if (btnToggleSwitch) btnToggleSwitch.disabled = completedSteps !== stepCards.length;
  }

  const stepFeedback = [
    "Paso 1 listo. Ahora coloca una resistencia de 1 kΩ en serie entre el positivo de la pila y el LED.",
    "Paso 2 listo. Ahora orienta el LED: pata larga hacia el positivo y pata corta hacia el interruptor.",
    "Paso 3 listo. Ahora conecta el interruptor en serie para que el recorrido pueda volver al polo negativo.",
    "Montaje completo. Cierra el interruptor para completar el circuito y encender el LED."
  ];

  stepCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      if (index !== completedSteps) return;
      completedSteps += 1;
      updateStepProgress();
      if (feedbackBox) feedbackBox.textContent = stepFeedback[index];
    });
  });

  updateStepProgress();

  if (btnToggleSwitch) {
    btnToggleSwitch.addEventListener("click", () => {
      if (completedSteps !== stepCards.length) return;
      isClosed = !isClosed;
      btnToggleSwitch.setAttribute("aria-pressed", String(isClosed));

      if (isClosed) {
        btnToggleSwitch.textContent = "🔘 Clic para Abrir Interruptor";
        if (slotSwitch) slotSwitch.textContent = "🔘 Interruptor (Cerrado)";
        if (slotLed) {
          slotLed.textContent = "💡 LED (¡ENCENDIDO! ⚡)";
          slotLed.classList.add("active-glow");
        }
        wires.forEach(w => w.classList.add("active"));

        if (feedbackBox) {
          feedbackBox.textContent = "🎉 ¡Circuito cerrado! La corriente pasa por la resistencia de 1 kΩ y el LED, y vuelve a la pila por el interruptor.";
          feedbackBox.style.color = "#ffb3c1";
        }
      } else {
        btnToggleSwitch.textContent = "🔘 Clic para Cerrar Interruptor";
        if (slotSwitch) slotSwitch.textContent = "🔘 Interruptor (Abierto)";
        if (slotLed) {
          slotLed.textContent = "💡 LED (Apagado)";
          slotLed.classList.remove("active-glow");
        }
        wires.forEach(w => w.classList.remove("active"));

        if (feedbackBox) {
          feedbackBox.textContent = "Interruptor abierto: el circuito está interrumpido y el LED se apaga.";
          feedbackBox.style.color = "#fff0f3";
        }
      }
    });
  }

  if (btnResetCircuit) {
    btnResetCircuit.addEventListener("click", () => {
      completedSteps = 0;
      isClosed = false;
      if (btnToggleSwitch) btnToggleSwitch.textContent = "🔘 Clic para Cerrar Interruptor";
      if (btnToggleSwitch) btnToggleSwitch.setAttribute("aria-pressed", "false");
      if (slotSwitch) slotSwitch.textContent = "🔘 Interruptor (Abierto)";
      if (slotLed) {
        slotLed.textContent = "💡 LED (Apagado)";
        slotLed.classList.remove("active-glow");
      }
      wires.forEach(w => w.classList.remove("active"));
      updateStepProgress();
      if (feedbackBox) {
        feedbackBox.textContent = "Completa los cuatro pasos para habilitar el interruptor.";
        feedbackBox.style.color = "#fff0f3";
      }
    });
  }
}

// MOSTRAR MENSAJES EN PANTALLA
function showStatusMessage(message, type = "info", duration = 6000) {
  const statusBox = document.getElementById("status-message");
  if (!statusBox) return;

  statusBox.textContent = message;
  statusBox.className = `status-box ${type}`;
  statusBox.classList.remove("hidden");

  if (duration > 0) {
    if (statusTimer) clearTimeout(statusTimer);
    statusTimer = setTimeout(() => {
      statusBox.classList.add("hidden");
      statusTimer = null;
    }, duration);
  } else if (statusTimer) {
    clearTimeout(statusTimer);
    statusTimer = null;
  }
}
