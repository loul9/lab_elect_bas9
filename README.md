# LAB ELECTRONICA BASICA DE ARTEFACTOS

**Proyecto Educativo Interactivo para Educación Básica Primaria en Colombia**  
Laboratorio estático para explorar componentes y circuitos educativos de bajo voltaje. Incluye diez modelos GLB locales preintegrados, una vista 3D y un taller interactivo para montar un circuito seguro con LED.

---

## 📁 Estructura del Proyecto

```text
lab_electronica_basica/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    └── models/       # Diez modelos GLB usados directamente por el catálogo.
        ├── bateria.glb
        ├── buzzer.glb
        ├── cables.glb
        ├── capacitor.glb
        ├── interruptor.glb
        ├── led.glb
        ├── motor.glb
        ├── protoboard.glb
        ├── resistor.glb
        └── transistor.glb
```

---

## 🎨 Paleta de Colores Utilizada
El diseño cumple estrictamente con la paleta de colores requerida:
- `#590d22`
- `#800f2f`
- `#a4133c`
- `#c9184a`
- `#ff4d6d`
- `#ff758f`
- `#ff8fa3`
- `#ffb3c1`
- `#ffccd5`
- `#fff0f3`

---

## Ejecutar localmente

1. Descomprime el ZIP.
2. Abre una terminal dentro de la carpeta `lab-electronica-basica` e inicia un servidor estático:
   ```bash
   python3 -m http.server 8000
   ```
   En Windows puedes usar `py -m http.server 8000`.
3. Abre `http://localhost:8000` en el navegador.

No abras `index.html` con doble clic (`file://`): los navegadores bloquean por seguridad la carga de los archivos `.glb`. Usa `localhost` como se indica arriba o publica el sitio con HTTPS. El visor 3D requiere además conexión a internet para cargar `model-viewer` desde su CDN.

## Probar y publicar

- En computador: usa mouse o trackpad para girar y acercar; navega con `Tab`, `Enter` y la barra espaciadora.
- En teléfono: abre el sitio desde su URL HTTPS publicada; rota con gestos táctiles y prueba RA si el equipo, navegador y modelo son compatibles. No se solicita cámara al cargar la página.
- La biblioteca `model-viewer` se descarga desde Google CDN; el visor 3D necesita conexión a internet para obtenerla. El contenido de texto y el circuito no dependen de servicios de backend.
- Para publicar en GitHub Pages: crea un repositorio, sube todos los archivos, incluida la carpeta `assets/models/`, y selecciona la rama principal y la carpeta raíz desde **Settings → Pages**. Pages sirve el sitio por HTTPS; eso no garantiza compatibilidad con RA o WebXR.
- Para crear el ZIP de nuevo:
  - macOS/Linux: `zip -r lab-electronica-basica.zip lab-electronica-basica/`
  - Windows PowerShell: `Compress-Archive -Path .\lab-electronica-basica\* -DestinationPath .\lab-electronica-basica.zip`

## Qué hace cada modo

- **Visor 3D:** las diez tarjetas seleccionan archivos `.glb` que vienen dentro de `assets/models/`; no hay que importarlos manualmente. El protoboard empieza a cargar al abrir la página; los demás modelos se cargan al elegir su tarjeta.
- **RA:** solo se intenta cuando la persona pulsa **Ver en RA**. La opción depende del navegador, sistema operativo, permisos, HTTPS y de que el modelo pueda abrirse en el proveedor de RA del dispositivo.
- **RV:** el botón comprueba si el navegador anuncia `immersive-vr`. Esta entrega aún no incluye un motor WebXR que renderice una escena en el visor; si el modo está disponible, la página lo informa y conserva el visor 3D normal. No afirma iniciar una sesión.
- Los navegadores, dispositivos, permisos y formatos compatibles varían; verifica RA/RV en el equipo de destino antes de una actividad de aula.

---

## Actualizar los modelos 3D

Los diez modelos adjuntos se copiaron a `assets/models/` y ya están enlazados desde `COMPONENTS_DATA` en `script.js`. No se descargan de plataformas ni dependen de URLs externas. La biblioteca `model-viewer` sí se obtiene de Google CDN, por lo que la conexión a internet sigue siendo necesaria para mostrar el visor.

### Reemplazar una representación inicial

1. Agrega el archivo propio a `assets/models/`, por ejemplo `led-v2.glb`.
2. Cambia la propiedad `modelUrl` del objeto `led` en el arreglo `COMPONENTS_DATA` de `script.js`:

```javascript
modelUrl: "./assets/models/led-v2.glb"
```

3. Incluye el modelo junto al resto del sitio al publicar. Conserva la ruta relativa.

El sitio no incluye un importador en pantalla: los modelos que ve el alumnado son los archivos integrados en `assets/models/`.

## Comprobaciones realizadas antes de entregar

- Los diez archivos se verificaron como GLB/glTF 2.0 y se comprobó que la longitud declarada coincide con los bytes del archivo.
- El catálogo apunta a los diez archivos locales con rutas relativas.
- El botón de RV ya no anuncia un inicio que no sucede; informa que la sesión inmersiva aún no está implementada.
- El taller controla el avance de los cuatro pasos; solo permite cerrar el interruptor después de completar el montaje, e incluye una resistencia de 1 kΩ en serie.
- Se eliminaron el importador de modelos y sus controles del sitio.
- Prueba en el navegador el visor y la simulación; el equipo y navegador destino determinan la compatibilidad de RA/RV.

## Seguridad para el aula

El laboratorio simula circuitos educativos de bajo voltaje. No manipules la corriente de la red eléctrica ni conectes el circuito a un tomacorriente. Los experimentos físicos se realizan solo con materiales de bajo voltaje y supervisión adulta.

---

## Atribución y licencias

Los diez archivos GLB fueron suministrados para este proyecto; los adjuntos no incluían información de autoría o licencia. Antes de publicar o redistribuir el sitio, confirma que su uso está autorizado y añade la atribución exigida. Haz lo mismo con cada modelo nuevo que agregues a `assets/models/`. El contenido educativo es un recurso de apoyo para el aula; no sustituye la supervisión docente.
