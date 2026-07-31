# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/JS (sin build tools ni framework) — elegido explícitamente para no depender de Node.js ni del SDK de Android en la máquina de desarrollo; se instala en Android como PWA (WebAPK vía Chrome "Añadir a pantalla de inicio").

## Users

Usuario único: el propio dueño del proyecto, entrenando en el gimnasio con kettlebell, dumbbell y barbell. Usa el móvil durante el entrenamiento para consultar y apuntar datos rápidamente.

## Product Purpose

Llevar un registro personal de entrenamiento de fuerza: qué ejercicio se hace, con qué material, y a qué peso. Calcula automáticamente los pesos de trabajo a partir del RM (repetición máxima) guardado por ejercicio, a 90/80/70/60/50%, para no tener que hacer cuentas en el gimnasio.

## Positioning

A diferencia de apps de rutinas genéricas o generadores de rutina por IA, esta app no prescribe entrenamientos: es una libreta rápida centrada en el cálculo de porcentajes de RM por ejercicio y material, pensada para usarse en segundos entre series.

## Operating Context

Se usa en el gimnasio, normalmente con una sola mano, entre series, con conexión a internet no garantizada (debe funcionar offline). Datos de sesiones anteriores deben consultarse rápido para decidir el peso de la siguiente serie.

## Capabilities and Constraints

- Selección de material: Kettlebell, Dumbbell o Barbell.
- Catálogo de ejercicios predefinido por material (incluye Thruster, Cluster, Goblet Squat, Kettlebell Clean, Kettlebell Swing, etc.) más ejercicios personalizados añadidos por el usuario.
- RM guardado por combinación ejercicio+material.
- Calculadora de porcentajes (90/80/70/60/50%) en vivo; redondeo a tamaños estándar de kettlebell cuando el material es kettlebell.
- Registro de series (peso, reps, series, notas) con historial por fecha.
- Persistencia: localStorage del navegador (sin backend, sin cuentas, sin sincronización entre dispositivos por ahora).
- Sin autenticación — nota abierta: no cerrar la puerta a soporte multiusuario/cuentas más adelante si el proyecto crece, aunque hoy es de un solo usuario.

## Evidence on Hand

Ninguna (sin capturas, datos reales ni assets de marca aportados todavía).

## Product Principles

- Rapidez de uso en el gimnasio por encima de cualquier otra consideración.
- Cero dependencias de build/backend: debe poder abrirse y modificarse como archivos estáticos.
- El material (kettlebell/dumbbell/barbell) es un eje de primera clase, no un detalle secundario.
- Offline-first: nunca debe bloquear el registro de una serie por falta de red.
- Simplicidad sobre generalidad: no prescribe rutinas ni sustituye el criterio del usuario.

## Accessibility & Inclusion

Ninguna necesidad específica establecida todavía.
