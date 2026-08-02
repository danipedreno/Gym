// ===== Catálogo de ejercicios predefinidos por material =====
// Nombres en inglés (estándar en cualquier box), con alias de búsqueda en
// español en EXERCISE_ALIASES para que "peso muerto" encuentre "Deadlift".
const CATALOG = {
  kettlebell: [
    'Kettlebell Swing (Two-Hand)',
    'Kettlebell Swing (One-Hand)',
    'Kettlebell Clean',
    'Kettlebell Snatch',
    'Kettlebell Goblet Squat',
    'Kettlebell Front Squat',
    'Kettlebell Turkish Get-Up',
    'Kettlebell Windmill',
    'Kettlebell Overhead Press',
    'Kettlebell Push Press',
    'Kettlebell Thruster',
    'Kettlebell Clean and Press',
    'Kettlebell Clean and Jerk',
    'Kettlebell Cluster',
    'Kettlebell Renegade Row',
    'Kettlebell Row',
    "Kettlebell Farmer's Carry",
    'Kettlebell Halo',
    'Kettlebell Figure 8',
    'Kettlebell Deadlift',
    'Kettlebell Single-Leg Deadlift',
    'Kettlebell High Pull',
    'Kettlebell Around the Body',
    'Double Kettlebell Front Squat',
    'Double Kettlebell Clean',
  ],
  dumbbell: [
    'Dumbbell Bench Press',
    'Dumbbell Shoulder Press',
    'Dumbbell Row',
    'Dumbbell Single-Arm Row',
    'Dumbbell Romanian Deadlift',
    'Dumbbell Deadlift',
    'Dumbbell Goblet Squat',
    'Dumbbell Lunge',
    'Dumbbell Bulgarian Split Squat',
    'Dumbbell Thruster',
    'Dumbbell Snatch',
    'Dumbbell Clean',
    "Dumbbell Farmer's Carry",
    'Dumbbell Curl',
    'Dumbbell Tricep Extension',
    'Dumbbell Lateral Raise',
    'Dumbbell Fly',
  ],
  barbell: [
    'Barbell Back Squat',
    'Barbell Front Squat',
    'Barbell Deadlift',
    'Barbell Sumo Deadlift',
    'Barbell Bench Press',
    'Barbell Overhead Press',
    'Barbell Push Press',
    'Barbell Bent-Over Row',
    'Barbell Clean',
    'Barbell Power Clean',
    'Barbell Clean and Jerk',
    'Barbell Snatch',
    'Barbell Power Snatch',
    'Barbell Hip Thrust',
    'Barbell Good Morning',
    'Barbell Romanian Deadlift',
    'Barbell Thruster',
    'Barbell Zercher Squat',
  ],
};

const EXERCISE_ALIASES = {
  'Kettlebell Deadlift': 'peso muerto',
  'Kettlebell Single-Leg Deadlift': 'peso muerto a una pierna',
  'Kettlebell Overhead Press': 'press militar press de hombros military press',
  'Kettlebell Clean': 'cargada',
  'Kettlebell Clean and Press': 'cargada y press',
  'Kettlebell Clean and Jerk': 'cargada y envion dos tiempos',
  'Kettlebell Snatch': 'arrancada',
  'Kettlebell Row': 'remo',
  'Kettlebell Renegade Row': 'remo renegado',
  "Kettlebell Farmer's Carry": 'paseo del granjero carry',
  'Kettlebell Goblet Squat': 'sentadilla copa',
  'Kettlebell Front Squat': 'sentadilla frontal',
  'Kettlebell Turkish Get-Up': 'levantamiento turco',
  'Kettlebell Windmill': 'molino',
  'Kettlebell Swing (Two-Hand)': 'balanceo dos manos',
  'Kettlebell Swing (One-Hand)': 'balanceo una mano',
  'Kettlebell High Pull': 'tiron alto',
  'Kettlebell Push Press': 'empuje de pie',
  'Kettlebell Thruster': 'empuje sentadilla',
  'Double Kettlebell Front Squat': 'doble kettlebell sentadilla frontal',
  'Double Kettlebell Clean': 'doble kettlebell cargada',

  'Dumbbell Bench Press': 'press banca',
  'Dumbbell Shoulder Press': 'press de hombros',
  'Dumbbell Row': 'remo',
  'Dumbbell Single-Arm Row': 'remo a una mano',
  'Dumbbell Romanian Deadlift': 'peso muerto rumano',
  'Dumbbell Deadlift': 'peso muerto',
  'Dumbbell Goblet Squat': 'sentadilla copa',
  'Dumbbell Lunge': 'zancada',
  'Dumbbell Bulgarian Split Squat': 'zancada bulgara',
  'Dumbbell Thruster': 'empuje sentadilla',
  'Dumbbell Snatch': 'arrancada',
  'Dumbbell Clean': 'cargada',
  "Dumbbell Farmer's Carry": 'paseo del granjero carry',
  'Dumbbell Curl': 'curl biceps',
  'Dumbbell Tricep Extension': 'extension de triceps',
  'Dumbbell Lateral Raise': 'elevacion lateral',
  'Dumbbell Fly': 'aperturas',

  'Barbell Back Squat': 'sentadilla trasera sentadilla',
  'Barbell Front Squat': 'sentadilla frontal',
  'Barbell Deadlift': 'peso muerto',
  'Barbell Sumo Deadlift': 'peso muerto sumo',
  'Barbell Bench Press': 'press banca',
  'Barbell Overhead Press': 'press militar press de hombros military press',
  'Barbell Push Press': 'empuje de pie',
  'Barbell Bent-Over Row': 'remo inclinado remo',
  'Barbell Clean': 'cargada',
  'Barbell Power Clean': 'cargada de potencia',
  'Barbell Clean and Jerk': 'cargada y envion dos tiempos',
  'Barbell Snatch': 'arrancada',
  'Barbell Power Snatch': 'arrancada de potencia',
  'Barbell Hip Thrust': 'empuje de cadera',
  'Barbell Good Morning': 'buenos dias',
  'Barbell Romanian Deadlift': 'peso muerto rumano',
  'Barbell Thruster': 'empuje sentadilla',
  'Barbell Zercher Squat': 'sentadilla zercher',
};

const PERCENTAGES = [90, 80, 70, 60, 50, 40];
// Tamaños reales de kettlebell disponibles en el box.
const STANDARD_KB_KG = [8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52];
// Tamaños reales de dumbbell disponibles en el box.
const STANDARD_DB_KG = [2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20];

// ===== Almacenamiento (localStorage) =====
const Store = {
  read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

const KEY_CUSTOM = 'gymrm.customExercises';
const KEY_RMS = 'gymrm.rms';
const KEY_RM_HISTORY = 'gymrm.rmHistory';
const KEY_BODYWEIGHT = 'gymrm.bodyWeight';

function getCustomExercises() {
  return Store.read(KEY_CUSTOM, { kettlebell: [], dumbbell: [], barbell: [] });
}
function addCustomExercise(equipment, name) {
  const custom = getCustomExercises();
  if (!custom[equipment].includes(name)) {
    custom[equipment].push(name);
    Store.write(KEY_CUSTOM, custom);
  }
}
function getExerciseList(equipment) {
  const custom = getCustomExercises()[equipment] || [];
  return [...CATALOG[equipment], ...custom];
}

function stripAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

// Coincide aunque las palabras estén en otro orden ("swing kettlebell" encuentra "Kettlebell Swing"),
// sin acentos, y también por los alias en español de EXERCISE_ALIASES
// (así "peso muerto" encuentra "Deadlift", aunque el nombre mostrado siga en inglés).
function matchesQuery(name, query) {
  const words = stripAccents(query.trim().toLowerCase()).split(/\s+/).filter(Boolean);
  if (!words.length) return true;
  const haystack = stripAccents(`${name} ${EXERCISE_ALIASES[name] || ''}`.toLowerCase());
  return words.every((w) => haystack.includes(w));
}

function getRms() {
  return Store.read(KEY_RMS, {});
}
function rmKey(equipment, exercise) {
  return `${equipment}::${exercise}`;
}
function getRm(equipment, exercise) {
  return getRms()[rmKey(equipment, exercise)];
}
function saveRm(equipment, exercise, value) {
  const rms = getRms();
  const now = new Date().toISOString();
  rms[rmKey(equipment, exercise)] = {
    equipment,
    exercise,
    rm: value,
    updatedAt: now,
  };
  Store.write(KEY_RMS, rms);

  // Guarda también en el histórico para poder ver la evolución del RM en Progreso,
  // en vez de perder el valor anterior cada vez que se actualiza.
  const history = Store.read(KEY_RM_HISTORY, []);
  history.push({ equipment, exercise, rm: value, date: now });
  Store.write(KEY_RM_HISTORY, history);
}
function getRmHistory(equipment, exercise) {
  return Store.read(KEY_RM_HISTORY, [])
    .filter((h) => h.equipment === equipment && h.exercise === exercise)
    .map((h) => ({ weight: h.rm, date: h.date }));
}
// El RM guardado más reciente antes del actual: lo que se muestra como "Anterior".
function getPreviousRm(equipment, exercise) {
  const history = Store.read(KEY_RM_HISTORY, [])
    .filter((h) => h.equipment === equipment && h.exercise === exercise)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return history[1] || null;
}
function deleteRm(key) {
  const rms = getRms();
  delete rms[key];
  Store.write(KEY_RMS, rms);
}

function getExerciseHistory(equipment, exercise) {
  return getRmHistory(equipment, exercise).sort((a, b) => new Date(a.date) - new Date(b.date));
}
function groupByDayBest(entries) {
  const byDay = new Map();
  entries.forEach((entry) => {
    const day = entry.date.slice(0, 10);
    const existing = byDay.get(day);
    if (!existing || entry.weight > existing.weight) byDay.set(day, entry);
  });
  return Array.from(byDay.values());
}

// ===== Cálculo de pesos =====
// Un RM alto en kettlebell puede lograrse con dos pesas iguales (ej. 64kg = 2x32kg
// a doble kettlebell), así que las combinaciones "dobles" también cuentan como disponibles.
const KETTLEBELL_CONFIGS = [
  ...STANDARD_KB_KG.map((w) => ({ weight: w, label: `${w} kg` })),
  ...STANDARD_KB_KG.map((w) => ({ weight: w * 2, label: `2×${w} kg` })),
].sort((a, b) => a.weight - b.weight);

function nearestKettlebell(weight) {
  return KETTLEBELL_CONFIGS.reduce((best, cfg) =>
    Math.abs(cfg.weight - weight) < Math.abs(best.weight - weight) ? cfg : best
  , KETTLEBELL_CONFIGS[0]);
}
function nearestDumbbell(weight) {
  const w = STANDARD_DB_KG.reduce((best, size) =>
    Math.abs(size - weight) < Math.abs(best - weight) ? size : best
  , STANDARD_DB_KG[0]);
  return { weight: w, label: `${w} kg` };
}
function roundToHalf(weight) {
  return Math.round(weight * 2) / 2;
}

function calcPercentages(rm, equipment) {
  return PERCENTAGES.map((pct) => {
    const exact = (rm * pct) / 100;
    const rounded = roundToHalf(exact);
    let nearest = null;
    if (equipment === 'kettlebell') nearest = nearestKettlebell(exact);
    else if (equipment === 'dumbbell') nearest = nearestDumbbell(exact);
    return { pct, exact, rounded, nearest };
  });
}

// ===== Estado de la pantalla "Registrar" =====
let currentEquipment = 'kettlebell';
let selectedExercise = null;

// Buscador tipo rueda: input de texto + lista scrollable con TODOS los
// ejercicios del material actual (o los que coincidan con lo escrito), con
// scroll-snap y el ítem central resaltado como guía; tocar cualquiera lo elige
// sin tener que centrarlo. Incluye una fila para añadir el término escrito
// como ejercicio nuevo si no existe.
function wireExerciseSearch({ inputId, resultsId, getEquipment, onSelect }) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  let rafPending = false;

  function updateActiveRow() {
    rafPending = false;
    const rows = results.querySelectorAll('.search-result:not(.search-result-add)');
    if (!rows.length) return;
    const containerRect = results.getBoundingClientRect();
    const centerY = containerRect.top + containerRect.height / 2;
    let closest = null;
    let closestDist = Infinity;
    rows.forEach((row) => {
      const r = row.getBoundingClientRect();
      const dist = Math.abs((r.top + r.height / 2) - centerY);
      if (dist < closestDist) { closestDist = dist; closest = row; }
    });
    rows.forEach((row) => row.classList.toggle('active', row === closest));
  }

  function render(query) {
    const equipment = getEquipment();
    const list = getExerciseList(equipment).filter((name) => matchesQuery(name, query));
    results.innerHTML = '';

    list.forEach((name) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'search-result';
      row.textContent = name;
      row.addEventListener('mousedown', (e) => e.preventDefault()); // evita perder el foco antes del click
      row.addEventListener('click', () => {
        // El nombre elegido se queda en el propio input (donde se buscó), en vez
        // de moverse a otro sitio: así el usuario no pierde de vista qué escribió.
        input.value = name;
        results.classList.add('hidden');
        onSelect(name);
      });
      results.appendChild(row);
    });

    const trimmed = query.trim();
    if (trimmed && !list.some((n) => n.toLowerCase() === trimmed.toLowerCase())) {
      const addRow = document.createElement('button');
      addRow.type = 'button';
      addRow.className = 'search-result search-result-add';
      addRow.innerHTML = `<svg class="icon icon-sm"><use href="#icon-plus-circle"/></svg> Añadir "${trimmed}"`;
      addRow.addEventListener('mousedown', (e) => e.preventDefault());
      addRow.addEventListener('click', () => {
        addCustomExercise(equipment, trimmed);
        input.value = trimmed;
        results.classList.add('hidden');
        onSelect(trimmed);
      });
      results.appendChild(addRow);
    }

    results.classList.toggle('hidden', list.length === 0 && !trimmed);
    results.scrollTop = 0;
    updateActiveRow();
  }

  results.addEventListener('scroll', () => {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(updateActiveRow);
  });

  input.addEventListener('input', () => render(input.value));
  input.addEventListener('focus', () => {
    // Si ya hay un ejercicio elegido, seleccionar el texto entero para que
    // escribir de nuevo lo sustituya directo, sin tener que borrarlo a mano.
    input.select();
    render(input.value);
  });
  input.addEventListener('blur', () => {
    setTimeout(() => results.classList.add('hidden'), 150);
  });

  return { render };
}

function currentExercise() {
  return selectedExercise;
}

// Si el usuario ya ha escrito algo a mano, elegir un ejercicio no debe borrárselo:
// solo se autorrellena con el valor guardado mientras el campo siga "limpio".
let rmInputDirty = false;

// El input tiene texto alineado a la derecha para que "KG" quede pegado al
// número; sin un ancho ajustado al contenido, el hueco reservado para dígitos
// que no están ahí desplaza visualmente el bloque entero fuera del centro.
function autosizeRmInput() {
  const rmInput = document.getElementById('rm-input');
  const len = (rmInput.value || rmInput.placeholder || '0').length;
  rmInput.style.width = `${len + 0.4}ch`;
}

// keepValue evita borrar lo que el usuario ya haya escrito a mano: cambiar de
// material solo debe olvidar el ejercicio elegido (pertenece al material
// anterior), no el número que ya estaba tecleando.
function resetRmEntry({ keepValue = false } = {}) {
  selectedExercise = null;
  const rmInput = document.getElementById('rm-input');
  if (!keepValue) {
    rmInputDirty = false;
    rmInput.value = '';
  }
  document.getElementById('exercise-search').value = '';
  document.getElementById('rm-updated-hint').textContent = '';
  document.getElementById('rm-error-hint').classList.add('hidden');
  autosizeRmInput();
}

function refreshRmField() {
  const exercise = currentExercise();
  if (!exercise) return;
  const stored = getRm(currentEquipment, exercise);
  const rmInput = document.getElementById('rm-input');
  const hint = document.getElementById('rm-updated-hint');
  document.getElementById('rm-error-hint').classList.add('hidden');
  if (stored) {
    if (!rmInputDirty) rmInput.value = stored.rm;
    const d = new Date(stored.updatedAt);
    hint.textContent = `Guardado el ${d.toLocaleDateString('es-ES')}`;
  } else {
    if (!rmInputDirty) rmInput.value = '';
    hint.textContent = 'Aún no has guardado un RM para este ejercicio.';
  }
  autosizeRmInput();
}

// Confirmación de guardado: solo un check animado a pantalla completa, sin
// texto. classList.remove+reflow+add para que reinicie la animación si se
// guarda otra vez mientras el anterior check todavía se estaba desvaneciendo.
let saveSuccessTimer = null;
function showSaveSuccess() {
  const overlay = document.getElementById('save-success-overlay');
  clearTimeout(saveSuccessTimer);
  overlay.classList.remove('hidden', 'show');
  void overlay.offsetWidth;
  overlay.classList.add('show');
  saveSuccessTimer = setTimeout(() => {
    overlay.classList.remove('show');
    setTimeout(() => overlay.classList.add('hidden'), 200);
  }, 1100);
}

// Reutilizable: se usa tanto en Registrar (ya no) como en el detalle de Mis RMs.
function renderPercentGrid(rm, equipment, gridElId) {
  const grid = document.getElementById(gridElId);
  grid.innerHTML = '';

  if (!rm || rm <= 0) {
    grid.innerHTML = '<p class="pct-empty">Introduce tu RM para ver los pesos</p>';
    return;
  }

  calcPercentages(rm, equipment).forEach(({ pct, rounded, nearest }, i) => {
    const tile = document.createElement('div');
    // Sin "hero": aquí las seis tiles son igual de protagonistas (el 90% no es
    // menos importante que el resto), así que todas llevan color del ciclo.
    tile.className = 'pct-tile';
    tile.style.animationDelay = `${i * 40}ms`;
    // En kettlebell/dumbbell no existen pesos intermedios: el número grande es la
    // pesa real que hay que coger, y el valor teórico exacto queda como dato secundario.
    tile.innerHTML = nearest
      ? `
        <div class="pct-tile-label">${pct}%</div>
        <div class="pct-tile-value">${nearest.label}</div>
        <div class="pct-tile-sub">Teórico: ${rounded} kg</div>
      `
      : `
        <div class="pct-tile-label">${pct}%</div>
        <div class="pct-tile-value">${rounded} kg</div>
      `;
    grid.appendChild(tile);
  });
}

function onEquipmentChange(equipment) {
  currentEquipment = equipment;
  document.querySelectorAll('#equipment-selector .material-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.equipment === equipment);
  });
  document.getElementById('exercise-results').classList.add('hidden');
  resetRmEntry({ keepValue: true });
}

function initRegistrarTab() {
  document.querySelectorAll('#equipment-selector .material-btn').forEach((btn) => {
    btn.addEventListener('click', () => onEquipmentChange(btn.dataset.equipment));
  });

  wireExerciseSearch({
    inputId: 'exercise-search',
    resultsId: 'exercise-results',
    getEquipment: () => currentEquipment,
    onSelect: (name) => {
      selectedExercise = name;
      refreshRmField();
    },
  });

  document.getElementById('rm-input').addEventListener('input', () => {
    rmInputDirty = true;
    document.getElementById('rm-error-hint').classList.add('hidden');
    autosizeRmInput();
  });

  document.getElementById('save-rm-btn').addEventListener('click', () => {
    const exercise = currentExercise();
    const rmInput = document.getElementById('rm-input');
    const value = parseFloat(rmInput.value);
    const errorHint = document.getElementById('rm-error-hint');

    if (!exercise) {
      errorHint.textContent = 'Elige un ejercicio antes de guardar el RM.';
      errorHint.classList.remove('hidden');
      return;
    }
    if (!value || value <= 0) {
      errorHint.textContent = 'Introduce un RM válido, mayor que 0.';
      errorHint.classList.remove('hidden');
      rmInput.focus();
      return;
    }

    errorHint.classList.add('hidden');
    saveRm(currentEquipment, exercise, value);
    rmInputDirty = false;
    // El valor se deja puesto explícitamente (no solo confiando en que
    // refreshRmField lo recupere de lo guardado): así nunca se puede borrar
    // justo al guardar, pase lo que pase con el resto del estado.
    rmInput.value = value;
    autosizeRmInput();
    refreshRmField();
    showSaveSuccess();
  });

  resetRmEntry();
}

// ===== Expandir/colapsar filas con animación de alto =====
// height:0 -> scrollHeight -> 'auto' al abrir; scrollHeight fijo -> 0 al cerrar
// (no se puede animar directamente desde/hacia 'auto', por eso el paso intermedio).
function toggleItemExpand(item) {
  const detail = item.querySelector('.item-detail');
  if (!item.classList.contains('expanded')) {
    item.classList.add('expanded');
    detail.style.height = detail.scrollHeight + 'px';
    const onEnd = (e) => {
      if (e.propertyName !== 'height') return;
      detail.style.height = 'auto';
      detail.removeEventListener('transitionend', onEnd);
    };
    detail.addEventListener('transitionend', onEnd);
  } else {
    detail.style.height = detail.scrollHeight + 'px';
    requestAnimationFrame(() => {
      item.classList.remove('expanded');
      detail.style.height = '0px';
    });
  }
}

// ===== Tab: Mis RMs (pantalla estrella, flujo de buscador) =====
// Filtro de material multi-selección (OR): con todos activos o ninguno, se ve todo.
let rmsFilterEquipment = new Set(['kettlebell', 'dumbbell', 'barbell']);
let rmsDetailEquipment = null;
let rmsDetailExercise = null;

function showRmDetail(equipment, exercise) {
  rmsDetailEquipment = equipment;
  rmsDetailExercise = exercise;

  document.getElementById('rms-search-card').classList.add('hidden');
  document.getElementById('rms-search-results').classList.add('hidden');
  document.getElementById('rms-detail-card').classList.remove('hidden');

  document.getElementById('rms-detail-exercise').textContent = exercise;
  document.getElementById('rms-detail-icon-wrap').innerHTML = `<svg class="icon"><use href="#icon-${equipment}"/></svg>`;

  const stored = getRm(equipment, exercise);
  document.getElementById('rms-current-value').textContent = stored ? `${stored.rm} kg` : '— kg';

  const previousHint = document.getElementById('rms-previous-hint');
  const previous = getPreviousRm(equipment, exercise);
  if (previous) {
    previousHint.textContent = `Anterior: ${previous.rm} kg · ${fmtShortDate(previous.date)}`;
    previousHint.classList.remove('hidden');
  } else {
    previousHint.classList.add('hidden');
  }

  renderPercentGrid(stored ? stored.rm : 0, equipment, 'rms-pct-grid');

  const points = groupByDayBest(getExerciseHistory(equipment, exercise));
  renderTrendChart(points, {
    wrapEl: document.getElementById('rms-progress-chart-wrap'),
    emptyEl: document.getElementById('rms-progress-empty'),
    statsEl: document.getElementById('rms-progress-stats'),
    ariaLabel: `Evolución del RM en ${exercise}`,
    statsMode: 'best',
  });
}

function closeRmDetail() {
  rmsDetailEquipment = null;
  rmsDetailExercise = null;
  document.getElementById('rms-detail-card').classList.add('hidden');
  document.getElementById('rms-search-card').classList.remove('hidden');
  document.getElementById('rms-search').focus();
  renderRmsSearchResults(document.getElementById('rms-search').value);
}

function renderRmsSearchResults(query) {
  const results = document.getElementById('rms-search-results');
  const allRms = getRms();

  const matches = Object.values(allRms)
    .filter((data) => rmsFilterEquipment.size === 0 || rmsFilterEquipment.has(data.equipment))
    .filter((data) => matchesQuery(data.exercise, query))
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  results.innerHTML = '';
  matches.slice(0, 15).forEach((data) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'rm-list-row';
    // Resumen rápido de todas las franjas de porcentaje, para no tener que entrar
    // al detalle solo para ver los pesos de referencia.
    const topPercents = calcPercentages(data.rm, data.equipment);
    const metaCols = topPercents.map(({ pct, rounded, nearest }) => `
      <div class="rm-list-meta-col">
        <span class="rm-list-meta-label">${pct}%</span>
        <span class="rm-list-meta-value">${nearest ? nearest.label : `${rounded} kg`}</span>
      </div>
    `).join('');
    row.innerHTML = `
      <div class="rm-list-body">
        <div class="rm-list-header">
          <span class="rm-list-icon-wrap"><svg class="icon"><use href="#icon-${data.equipment}"/></svg></span>
          <span class="rm-list-name">${data.exercise}</span>
        </div>
        <div class="rm-list-meta">${metaCols}</div>
        <div class="rm-list-value">${data.rm} kg</div>
      </div>
    `;
    row.addEventListener('mousedown', (e) => e.preventDefault());
    row.addEventListener('click', () => {
      document.getElementById('rms-search').value = '';
      results.classList.add('hidden');
      showRmDetail(data.equipment, data.exercise);
    });
    results.appendChild(row);
  });
  results.classList.toggle('hidden', matches.length === 0);

  document.getElementById('rms-empty').classList.toggle('hidden', Object.keys(allRms).length > 0);
}

function openRmEditModal() {
  const stored = getRm(rmsDetailEquipment, rmsDetailExercise);
  document.getElementById('rm-edit-input').value = stored ? stored.rm : '';
  document.getElementById('rm-edit-error').classList.add('hidden');

  // Se clona el botón de eliminar para que cada apertura del popup empiece con el
  // estado de "doble toque" limpio, sin arrastrar el armado de una apertura anterior.
  const deleteBtn = document.getElementById('rm-edit-delete-btn');
  const freshBtn = deleteBtn.cloneNode(true);
  deleteBtn.replaceWith(freshBtn);
  let armed = false;
  freshBtn.addEventListener('click', () => {
    if (!armed) {
      armed = true;
      freshBtn.classList.add('btn-danger-armed');
      freshBtn.textContent = '¿Seguro? Toca de nuevo';
      setTimeout(() => {
        armed = false;
        freshBtn.classList.remove('btn-danger-armed');
        freshBtn.innerHTML = '<svg class="icon icon-sm"><use href="#icon-trash"/></svg> Eliminar este RM';
      }, 3000);
    } else {
      deleteRm(rmKey(rmsDetailEquipment, rmsDetailExercise));
      closeRmEditModal();
      closeRmDetail();
    }
  });

  document.getElementById('rm-edit-modal').classList.remove('hidden');
  document.getElementById('rm-edit-input').focus();
}
function closeRmEditModal() {
  document.getElementById('rm-edit-modal').classList.add('hidden');
}

function initRmsTab() {
  document.querySelectorAll('#rms-filter-equipment .material-circle-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const equipment = btn.dataset.equipment;
      if (rmsFilterEquipment.has(equipment)) rmsFilterEquipment.delete(equipment); else rmsFilterEquipment.add(equipment);
      btn.classList.toggle('active', rmsFilterEquipment.has(equipment));
      renderRmsSearchResults(document.getElementById('rms-search').value);
    });
  });

  const searchInput = document.getElementById('rms-search');
  searchInput.addEventListener('input', () => renderRmsSearchResults(searchInput.value));

  document.getElementById('rms-back-btn').addEventListener('click', closeRmDetail);
  document.getElementById('rms-edit-btn').addEventListener('click', openRmEditModal);
  document.getElementById('rm-edit-cancel').addEventListener('click', closeRmEditModal);
  document.getElementById('rm-edit-modal').addEventListener('click', (e) => {
    if (e.target.id === 'rm-edit-modal') closeRmEditModal();
  });
  document.getElementById('rm-edit-input').addEventListener('input', () => {
    document.getElementById('rm-edit-error').classList.add('hidden');
  });
  document.getElementById('rm-edit-save').addEventListener('click', () => {
    const value = parseFloat(document.getElementById('rm-edit-input').value);
    const errorHint = document.getElementById('rm-edit-error');
    if (!value || value <= 0) {
      errorHint.textContent = 'Introduce un RM válido, mayor que 0.';
      errorHint.classList.remove('hidden');
      return;
    }
    saveRm(rmsDetailEquipment, rmsDetailExercise, value);
    closeRmEditModal();
    showRmDetail(rmsDetailEquipment, rmsDetailExercise);
  });

  renderRmsSearchResults('');
}

// ===== WOD Destacado: entreno completo de 3 bloques, fijado arriba del buscador =====
const FEATURED_WOD = {
  blocks: [
    {
      color: 'c0',
      icon: 'timer',
      title: 'Calentamiento y Core Inteligente',
      badge: "EMOM 6'",
      items: [
        { main: 'Minutos impares 1, 3, 5', sub: '12 sentadillas libres + 20s plancha abdominal activa.' },
        { main: 'Minutos pares 2, 4, 6', sub: '8 flexiones + 30s plancha lateral, 15s por lado.' },
      ],
    },
    {
      color: 'c1',
      icon: 'dumbbell',
      title: 'Fuerza y Estabilidad Progresiva',
      items: [
        { main: '12 pesos muertos con KB o barra' },
        { main: '10 press militar con mancuernas' },
        { main: '12 remos con mancuernas', sub: 'torso a 45°' },
      ],
      rounds: [
        { n: 1, pct: '50%' },
        { n: 2, pct: '60%' },
        { n: 3, pct: '70%' },
        { n: 4, pct: '80%' },
      ],
      note: 'Ronda 4: si pesa mucho, baja a 8-10 reps en muerto y remos, y a 8 en press militar.',
    },
    {
      color: 'c2',
      icon: 'flame',
      title: 'El Work Out del Día',
      badge: "AMRAP 15'",
      items: [
        { main: '15 wall ball shots', sub: 'sentadilla profunda + lanzamiento' },
        { main: '18 ring rows', sub: 'pecho a las anillas, cuerpo tenso' },
        { main: '15 kettlebell swings americanos', genders: [{ icon: 'female', text: '12-16 kg' }, { icon: 'male', text: '20-24 kg' }] },
        { main: '9 burpees', sub: 'pecho al suelo y salto vertical' },
      ],
    },
  ],
};

// Cada ejercicio es un objeto { main, sub?, genders? }: sub es una nota (antes
// entre paréntesis o tras ":", ahora en línea aparte y en peso más ligero) y
// genders sustituye "en mujeres / en hombres" por icono + cifra.
function renderWodItem(item) {
  const subLine = item.genders
    ? `<span class="wod-item-sub wod-item-genders">${item.genders.map((g) => `
        <span class="wod-gender"><svg class="icon icon-sm"><use href="#icon-${g.icon}"/></svg>${g.text}</span>
      `).join('')}</span>`
    : item.sub
      ? `<span class="wod-item-sub">${item.sub}</span>`
      : '';
  return `<li><span class="wod-item-main">${item.main}</span>${subLine}</li>`;
}

// La progresión de carga (50/60/70/80%) es el dato clave del Bloque 2, así
// que ocupa el sitio del badge en vez de un texto "4 Rondas" aparte.
function renderRoundsPills(rounds) {
  return `
    <div class="wod-progress-row">
      ${rounds.map((r) => `
        <div class="wod-progress-pill">
          <span class="wod-progress-n">Ronda ${r.n}</span>
          <span class="wod-progress-pct">${r.pct}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderFeaturedWod() {
  const body = document.getElementById('featured-wod-body');
  body.innerHTML = `<div class="wod-blocks">${FEATURED_WOD.blocks.map((block) => `
    <div class="wod-block ${block.color}">
      <div class="wod-block-head">
        <svg class="icon"><use href="#icon-${block.icon}"/></svg>
        <span class="wod-block-title">${block.title}${block.badge ? ` <span class="wod-block-badge-inline">${block.badge}</span>` : ''}</span>
      </div>
      ${block.rounds ? renderRoundsPills(block.rounds) : ''}
      <ul class="wod-block-list">${block.items.map(renderWodItem).join('')}</ul>
      ${block.note ? `<p class="wod-block-note">${block.note}</p>` : ''}
    </div>
  `).join('')}</div>`;
}

// ===== Tab: WOD Heroes =====
// 25 WODs para entrenar en casa, sin material
// (fuente: https://www.zonawod.com/crossfit-en-casa-25-wods-mejorar-fisico/).
const WOD_HEROES = [
  {
    name: '600 Reps',
    format: '2 rondas',
    movements: ['100 dobles saltos de comba', '80 sentadillas al aire', '60 flexiones', '40 burpees', '20 zancadas con peso'],
  },
  {
    name: 'Muerte por Flexiones',
    format: 'E2MOM',
    movements: ['6 flexiones (suben 2 cada ronda)', '30 dobles saltos de comba'],
  },
  {
    name: 'AMRAP 15',
    format: 'AMRAP 15 minutos',
    movements: ['5 HSPU', '10 burpees', '15 abdominales', '20 zancadas'],
  },
  {
    name: '150 Sentadillas',
    format: 'Por tiempo',
    movements: ['150 sentadillas al aire', '7 burpees cada minuto'],
  },
  {
    name: 'Chipper Casero',
    format: 'Acumulativo',
    movements: ['30 dobles saltos / 60 jumping jacks', 'HSPU estricto', 'Flexiones soltando manos', 'Burpees', 'Thrusters', 'Sentadillas a una pierna', 'Abdominales en V', 'Zancadas alternas', 'Sentadillas con salto', 'Devil press'],
  },
  {
    name: 'Bárbara en Casa',
    format: '5 rondas (descanso 3\' entre rondas)',
    movements: ['20 remos invertidos', '30 flexiones', '40 abdominales', '50 sentadillas al aire'],
  },
  {
    name: 'New',
    format: 'Por tiempo · 6 rondas',
    movements: ['60 dobles saltos de comba', '30 zancadas alternas', '15 burpees'],
  },
  {
    name: 'AMRAP 18',
    format: 'AMRAP 18 minutos',
    movements: ['50 dobles saltos de comba', '25 fondos en silla', '50 dobles saltos de comba', '25 zancadas alternas con salto', '7 burpees cada 3 minutos'],
  },
  {
    name: 'Escalera x2',
    format: '2 rondas, escalera 10-1',
    movements: ['10-9-8-7-6-5-4-3-2-1 flexiones soltando manos', '10-9-8-7-6-5-4-3-2-1 abdominales en V', '15 sentadillas al aire entre rondas'],
  },
  {
    name: 'EMOM 21',
    format: 'EMOM 21 minutos',
    movements: ['8 HSPU', '25 sentadillas al aire', '40 shoulder taps'],
  },
  {
    name: 'Por Parejas',
    format: 'Por parejas',
    movements: ['Formato a dúo, alternando series (ver detalle en la fuente original)'],
  },
  {
    name: 'Chipper de Dobles',
    format: 'Por tiempo',
    movements: ['50 double unders', '40 flexiones en diamante', '50 double unders', '30 burpees', '50 double unders', '20 V-ups', '50 double unders', '10 escalada de pared', '50 double unders'],
  },
  {
    name: 'Core WOD',
    format: 'Series (plancha 20" si se rompe)',
    movements: ['50 hollow rock', '50 arch rock', '50 straight leg sit up'],
  },
  {
    name: 'AMRAP 20',
    format: 'AMRAP 20 minutos',
    movements: ['20 sentadillas al aire', '20 abdominales', '10/7 HSPU'],
  },
  {
    name: 'Descendente HSPU',
    format: 'Por tiempo',
    movements: ['100 sentadillas al aire + 5 HSPU', '75 sentadillas al aire + 10 HSPU', '50 sentadillas al aire + 15 HSPU', '25 sentadillas al aire + 20 HSPU'],
  },
  {
    name: 'Double AMRAP',
    format: '2 AMRAP de 7\' (descanso 2\')',
    movements: ['AMRAP 7\': 30 saltos dobles + 10 burpees', 'Descanso 2 minutos', 'AMRAP 7\': 30 saltos dobles + 10 flexiones'],
  },
  {
    name: 'Larguest Lunge',
    format: 'Series (10 burpees + 10 sentadillas con salto entre series)',
    movements: ['20 zancadas alternas', '40 zancadas alternas', '60 zancadas alternas', '80 zancadas alternas', '100 zancadas alternas'],
  },
  {
    name: 'Fat Amy',
    format: 'Por tiempo',
    movements: ['Detalle no especificado en la fuente original'],
  },
  {
    name: 'EMOM 30',
    format: 'EMOM 30 minutos',
    movements: ['45" posición de pino', '25 sentadillas al aire', '45" toques al hombro en plancha', '25 puente de glúteos', 'Descanso'],
  },
  {
    name: 'Creciente',
    format: 'Por tiempo',
    movements: ['10 HSPU + 15 burpees', '20 flexiones + 15 burpees', '30 abdominales + 15 burpees', '40 zancadas + 15 burpees', '50 sentadillas al aire + 15 burpees'],
  },
  {
    name: 'Open 21.4 Remix',
    format: 'AMRAP 12 minutos',
    movements: ['20 sentadillas a una pierna alternas', '20 shoulder taps', '20 hand release push-ups'],
  },
  {
    name: 'Escalera Doble Unders',
    format: 'Por tiempo',
    movements: ['100 dobles saltos + 50 sentadillas', '80 dobles saltos + 40 sentadillas', '60 dobles saltos + 30 sentadillas', '40 dobles saltos + 20 sentadillas', '20 dobles saltos + 10 sentadillas'],
  },
  {
    name: '4 Rounds',
    format: '4 rondas',
    movements: ['Carrera 400m', '16 flexiones', '20 zancadas inversas', '12 burpees'],
  },
  {
    name: 'GTOH',
    format: '5 rondas',
    movements: ['15 ground to overhead', '30 step ups'],
  },
  {
    name: 'AMRAP 13',
    format: 'AMRAP 13 minutos',
    movements: ['45 dobles saltos de comba', '30 sentadillas al aire', '15 abdominales en V'],
  },
  {
    name: 'Incredible Hulk',
    format: 'AMRAP 20 minutos',
    movements: [
      '5 pesos muertos (52/34 kg)',
      '5 cargadas colgantes (52/34 kg)',
      '5 sentadillas frontales (52/34 kg)',
      '5 push press (52/34 kg)',
      '5 sentadillas traseras (52/34 kg)',
    ],
  },
  {
    name: 'Jack',
    format: 'AMRAP 20 minutos',
    movements: ['10 push press (52/38 kg)', '10 swings con kettlebell (24/16 kg)', '10 saltos al cajón (60/50 cm)'],
  },
  {
    name: 'Christina',
    format: 'AMRAP 20 minutos',
    movements: [
      '9 dominadas',
      '9 cargadas en sentadilla (43/30 kg)',
      '9 swings con kettlebell (25/16 kg)',
      '9 toes-to-bar',
      '9 push press (52/20 kg)',
      '9 burpees',
    ],
  },
  {
    name: 'Optimus Prime',
    format: 'AMRAP 7 minutos',
    movements: ['Balón medicinal (9/6 kg): máximas repeticiones', 'Al final de cada minuto: 5 pesos muertos (100/70 kg)'],
  },
  {
    name: 'Nicole',
    format: 'AMRAP 20 minutos',
    movements: ['Carrera 400m', 'Máximas dominadas sin soltarse (se repite el ciclo)'],
  },
];

function renderWodList() {
  const container = document.getElementById('wod-list');
  const empty = document.getElementById('wod-empty');
  const query = document.getElementById('wod-search').value;
  const wods = WOD_HEROES.filter((w) => matchesQuery(w.name, query));

  container.innerHTML = '';
  empty.classList.toggle('hidden', wods.length > 0);

  wods.forEach((wod, i) => {
    const item = document.createElement('div');
    item.className = 'item';
    item.style.animationDelay = `${i * 30}ms`;
    item.innerHTML = `
      <div class="item-top">
        <div>
          <div class="item-title">${wod.name}</div>
          <div class="wod-format">${wod.format}</div>
        </div>
        <svg class="icon icon-sm item-chevron"><use href="#icon-chevron"/></svg>
      </div>
      <div class="item-detail">
        <div class="item-detail-inner">
          <ul class="wod-movements">
            ${wod.movements.map((m) => `<li>${m}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
    item.querySelector('.item-top').addEventListener('click', () => toggleItemExpand(item));
    container.appendChild(item);
  });
}

function initWodsTab() {
  const search = document.getElementById('wod-search');
  const clearBtn = document.getElementById('wod-search-clear');
  search.addEventListener('input', () => {
    clearBtn.classList.toggle('hidden', !search.value);
    renderWodList();
  });
  clearBtn.addEventListener('click', () => {
    search.value = '';
    clearBtn.classList.add('hidden');
    renderWodList();
    search.focus();
  });
  renderWodList();

  const featuredItem = document.getElementById('featured-wod-item');
  featuredItem.querySelector('.item-top').addEventListener('click', () => toggleItemExpand(featuredItem));
  renderFeaturedWod();
}

// ===== Tab: Peso (peso corporal + composición) =====
function fmtShortDate(iso) {
  const d = new Date(iso);
  return `${d.getDate()}/${d.getMonth() + 1}`;
}

// Dibuja un gráfico de líneas + tarjetas de estadística a partir de puntos {weight, date}.
// Se reutiliza tanto para el progreso de un ejercicio (RM + series) como para el peso corporal.
function renderTrendChart(points, { wrapEl, emptyEl, statsEl, unit = 'kg', ariaLabel, statsMode = 'best', onDotClick }) {
  wrapEl.innerHTML = '';
  statsEl.innerHTML = '';

  if (!points.length) {
    emptyEl.classList.remove('hidden');
    return;
  }
  emptyEl.classList.add('hidden');

  const weights = points.map((p) => p.weight);
  const realMin = Math.min(...weights);
  const realMax = Math.max(...weights);
  const span = realMax - realMin || 10;
  const padY = span * 0.2;
  const minW = realMin - padY;
  const maxW = realMax + padY;

  const W = 300, padL = 30, padR = 10;
  const innerW = W - padL - padR;
  // Solo se rotan las fechas si de verdad no caben en horizontal (poco
  // espacio entre puntos): con pocos registros se quedan rectas y legibles.
  const spacing = points.length > 1 ? innerW / (points.length - 1) : innerW;
  const rotateLabels = spacing < 26;
  const H = 150, padT = 16, padB = rotateLabels ? 32 : 24;
  const innerH = H - padT - padB;

  const xAt = (i) => (points.length === 1 ? padL + innerW / 2 : padL + (i / (points.length - 1)) * innerW);
  const yAt = (w) => padT + innerH - ((w - minW) / (maxW - minW)) * innerH;

  const linePoints = points.map((p, i) => `${xAt(i)},${yAt(p.weight)}`).join(' ');
  const dots = points
    .map((p, i) => `<circle class="chart-dot" data-idx="${i}" style="animation-delay:${0.7 + i * 0.05}s" cx="${xAt(i)}" cy="${yAt(p.weight)}" r="4" fill="var(--accent)"/>`)
    .join('');
  // Círculo invisible más grande encima de cada punto: solo para que el dedo
  // tenga un blanco decente al tocar (el punto visible es muy pequeño).
  const dotHitAreas = points
    .map((p, i) => `<circle class="chart-dot-hit" data-idx="${i}" cx="${xAt(i)}" cy="${yAt(p.weight)}" r="13" fill="transparent"/>`)
    .join('');

  // Tooltip oculto por punto: al tocar el punto se ve cuánto pesaba ese día.
  // No hace falta si tocar un punto ya abre un popup de edición (onDotClick).
  const tooltips = onDotClick
    ? ''
    : points
        .map((p, i) => {
          const label = `${p.weight} ${unit}`;
          const boxW = Math.max(34, label.length * 5.6 + 10);
          const tx = Math.min(Math.max(xAt(i), padL + boxW / 2), W - padR - boxW / 2);
          const ty = Math.max(yAt(p.weight) - 14, 11);
          return `
            <g class="chart-tooltip hidden" data-idx="${i}">
              <rect x="${tx - boxW / 2}" y="${ty - 11}" width="${boxW}" height="16" fill="var(--ink)"/>
              <text x="${tx}" y="${ty}" font-size="9" font-weight="700" fill="var(--paper)" text-anchor="middle">${label}</text>
            </g>
          `;
        })
        .join('');

  // Todas las fechas, no solo primera/media/última: si hay muchos puntos se
  // rotan para que quepan sin solaparse.
  const dateLabels = points
    .map((p, i) => {
      const x = xAt(i);
      const y = H - 6;
      const transform = rotateLabels ? ` transform="rotate(-40 ${x} ${y})"` : '';
      const anchor = rotateLabels ? 'end' : 'middle';
      return `<text x="${x}" y="${y}" font-size="8" fill="var(--text-dim)" text-anchor="${anchor}"${transform}>${fmtShortDate(p.date)}</text>`;
    })
    .join('');

  wrapEl.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" class="chart-svg" role="img" aria-label="${ariaLabel}">
      <text x="4" y="${yAt(realMax) + 3}" font-size="9" fill="var(--text-dim)">${Math.round(realMax)}</text>
      <text x="4" y="${yAt(realMin) + 3}" font-size="9" fill="var(--text-dim)">${Math.round(realMin)}</text>
      ${points.length > 1 ? `<polyline class="chart-line" pathLength="1" points="${linePoints}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
      ${dots}
      ${dateLabels}
      ${dotHitAreas}
      ${tooltips}
    </svg>
  `;

  // Tocar un punto abre su popup de edición si se ha dado onDotClick; si no,
  // muestra su peso en un tooltip (tocar otro cambia cuál se ve, uno a la vez).
  wrapEl.querySelectorAll('.chart-dot, .chart-dot-hit').forEach((el) => {
    el.addEventListener('click', () => {
      const idx = el.dataset.idx;
      if (onDotClick) {
        onDotClick(points[Number(idx)]);
      } else {
        wrapEl.querySelectorAll('.chart-tooltip').forEach((t) => t.classList.toggle('hidden', t.dataset.idx !== idx));
      }
    });
  });

  const first = points[0];
  const last = points[points.length - 1];

  const statTile = (label, valueText, subText) => `
    <div class="pct-tile">
      <div class="pct-tile-label">${label}</div>
      <div class="pct-tile-value">${valueText}</div>
      <div class="pct-tile-sub">${subText}</div>
    </div>
  `;

  if (statsMode === 'diff') {
    const diff = last.weight - first.weight;
    const sign = diff > 0 ? '+' : '';
    statsEl.innerHTML =
      statTile('Primero', `${first.weight} ${unit}`, fmtShortDate(first.date)) +
      statTile('Último', `${last.weight} ${unit}`, fmtShortDate(last.date)) +
      statTile('Diferencia', `${sign}${diff.toFixed(1)} ${unit}`, 'desde el primero');
  } else {
    const best = points.reduce((a, b) => (b.weight > a.weight ? b : a));
    statsEl.innerHTML =
      statTile('Primero', `${first.weight} ${unit}`, fmtShortDate(first.date)) +
      statTile('Mejor', `${best.weight} ${unit}`, fmtShortDate(best.date)) +
      statTile('Último', `${last.weight} ${unit}`, fmtShortDate(last.date));
  }
}

function getBodyWeightHistory() {
  return Store.read(KEY_BODYWEIGHT, [])
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));
}
// dateStr es "YYYY-MM-DD" (del <input type="date">): permite apuntar un peso de cualquier
// fecha pasada, no solo el de hoy. El mediodía evita líos de zona horaria al comparar días.
function addBodyWeight(weight, dateStr) {
  const history = Store.read(KEY_BODYWEIGHT, []);
  const iso = new Date(`${dateStr}T12:00:00`).toISOString();
  const dayKey = iso.slice(0, 10);
  const idx = history.findIndex((h) => h.date.slice(0, 10) === dayKey);
  const entry = { weight, date: iso };
  if (idx >= 0) history[idx] = entry; else history.push(entry);
  Store.write(KEY_BODYWEIGHT, history);
}
// originalIso identifica la entrada a editar (su fecha actual, antes del cambio):
// como la fecha es lo único "único" en el historial, no sirve buscar por índice
// una vez que la lista se ha vuelto a ordenar en getBodyWeightHistory().
function updateBodyWeightEntry(originalIso, weight, dateStr) {
  const history = Store.read(KEY_BODYWEIGHT, []);
  const idx = history.findIndex((h) => h.date === originalIso);
  if (idx < 0) return;
  history.splice(idx, 1);
  Store.write(KEY_BODYWEIGHT, history);
  addBodyWeight(weight, dateStr);
}
function deleteBodyWeightEntry(originalIso) {
  const history = Store.read(KEY_BODYWEIGHT, []).filter((h) => h.date !== originalIso);
  Store.write(KEY_BODYWEIGHT, history);
}
function renderBodyWeightChart() {
  renderTrendChart(getBodyWeightHistory(), {
    wrapEl: document.getElementById('bodyweight-chart-wrap'),
    emptyEl: document.getElementById('bodyweight-empty'),
    statsEl: document.getElementById('bodyweight-stats'),
    ariaLabel: 'Evolución de tu peso corporal',
    statsMode: 'diff',
    onDotClick: openBwEditModal,
  });
}

// ===== Popup para editar/eliminar un registro de peso desde la gráfica =====
let bwEditOriginalIso = null;

function openBwEditModal(point) {
  bwEditOriginalIso = point.date;
  document.getElementById('bw-edit-weight').value = point.weight;
  document.getElementById('bw-edit-date').value = point.date.slice(0, 10);
  document.getElementById('bw-edit-error').classList.add('hidden');

  // Se clona el botón de eliminar para que cada apertura del popup empiece con el
  // estado de "doble toque" limpio, sin arrastrar el armado de una apertura anterior.
  const deleteBtn = document.getElementById('bw-edit-delete-btn');
  const freshBtn = deleteBtn.cloneNode(true);
  deleteBtn.replaceWith(freshBtn);
  let armed = false;
  freshBtn.addEventListener('click', () => {
    if (!armed) {
      armed = true;
      freshBtn.classList.add('btn-danger-armed');
      freshBtn.textContent = '¿Seguro? Toca de nuevo';
      setTimeout(() => {
        armed = false;
        freshBtn.classList.remove('btn-danger-armed');
        freshBtn.innerHTML = '<svg class="icon icon-sm"><use href="#icon-trash"/></svg> Eliminar este registro';
      }, 3000);
    } else {
      deleteBodyWeightEntry(bwEditOriginalIso);
      closeBwEditModal();
      renderBodyWeightChart();
      renderCompositionGrid();
    }
  });

  document.getElementById('bw-edit-modal').classList.remove('hidden');
  document.getElementById('bw-edit-weight').focus();
}
function closeBwEditModal() {
  document.getElementById('bw-edit-modal').classList.add('hidden');
  bwEditOriginalIso = null;
}

// ===== Perfil (para calcular la composición corporal) =====
const KEY_PROFILE = 'gymrm.profile';
function getProfile() { return Store.read(KEY_PROFILE, null); }
function saveProfile(p) { Store.write(KEY_PROFILE, p); }

function calcBMI(weightKg, heightCm) {
  const h = heightCm / 100;
  return weightKg / (h * h);
}
// 5 tramos (no los 4 clásicos de la OMS) para que "Normal" quede justo en el
// centro del indicador de puntos.
const BMI_ZONES = ['Muy bajo peso', 'Bajo peso', 'Normal', 'Sobrepeso', 'Obesidad'];
function bmiZoneIndex(bmi) {
  if (bmi < 16) return 0;
  if (bmi < 18.5) return 1;
  if (bmi < 25) return 2;
  if (bmi < 30) return 3;
  return 4;
}
function bmiCategory(bmi) {
  return BMI_ZONES[bmiZoneIndex(bmi)];
}
// Fórmula de Deurenberg (1991): estima el % de grasa corporal a partir del IMC, la edad y el sexo.
// Es una aproximación (sin pliegues ni bioimpedancia), no un dato clínico.
function calcBodyFatPct(bmi, age, sex) {
  const sexFactor = sex === 'male' ? 1 : 0;
  return 1.2 * bmi + 0.23 * age - 10.8 * sexFactor - 5.4;
}
// Fórmula de Watson (1980) para el agua corporal total, también una estimación.
function calcTBW(weightKg, heightCm, age, sex) {
  if (sex === 'male') return 2.447 - 0.09156 * age + 0.1074 * heightCm + 0.3362 * weightKg;
  return -2.097 + 0.1069 * heightCm + 0.2466 * weightKg;
}

const BUILD_LABELS = { slim: 'Delgada', medium: 'Media', robust: 'Robusta' };
const FREQUENCY_LABELS = { '1-2': '1-2 días/sem', '3-4': '3-4 días/sem', '5-6': '5-6 días/sem', '7': 'Todos los días' };

function refreshProfileSummary() {
  const profile = getProfile();
  const summary = document.getElementById('profile-summary');
  if (profile) {
    const sexLabel = profile.sex === 'male' ? 'Hombre' : 'Mujer';
    const namePart = profile.name ? `${profile.name} · ` : '';
    summary.textContent = `${namePart}${sexLabel} · ${profile.age} años · ${profile.heightCm} cm · ${BUILD_LABELS[profile.build]} · ${FREQUENCY_LABELS[profile.frequency]}`;
  } else {
    summary.textContent = 'Sin completar todavía. Hace falta para calcular tu composición corporal.';
  }
}

function renderCompositionGrid() {
  const grid = document.getElementById('composition-grid');
  const hint = document.getElementById('composition-hint');
  const profile = getProfile();
  const history = getBodyWeightHistory();
  const latest = history[history.length - 1];

  grid.innerHTML = '';

  if (!profile || !latest) {
    hint.textContent = !profile
      ? 'Completa tu perfil arriba para ver tu IMC, grasa corporal y agua corporal.'
      : 'Apunta tu peso más abajo para ver tu composición corporal.';
    hint.classList.remove('hidden');
    return;
  }
  hint.classList.add('hidden');

  const bmi = calcBMI(latest.weight, profile.heightCm);
  const bodyFat = calcBodyFatPct(bmi, profile.age, profile.sex);
  const tbw = calcTBW(latest.weight, profile.heightCm, profile.age, profile.sex);

  const tile = (icon, label, value, sub, hero, extra) => `
    <div class="pct-tile${hero ? ' hero' : ''}">
      <div class="pct-tile-label"><svg class="icon"><use href="#icon-${icon}"/></svg> ${label}</div>
      <div class="pct-tile-value">${value}</div>
      ${sub ? `<div class="pct-tile-sub">${sub}</div>` : ''}
      ${extra || ''}
    </div>
  `;

  // 5 puntos en vez de una barra por tramos: el activo se agranda, y la
  // categoría va al lado de los puntos (no encima, como una barra normal).
  const bmiGaugeDots = (val) => {
    const activeIdx = bmiZoneIndex(val);
    const dots = BMI_ZONES
      .map((_, i) => `<span class="bmi-gauge-dot${i === activeIdx ? ' active' : ''}"></span>`)
      .join('');
    return `
      <div class="bmi-gauge-row">
        <div class="bmi-gauge-dots">${dots}</div>
        <span class="bmi-gauge-label">${BMI_ZONES[activeIdx]}</span>
      </div>
    `;
  };

  grid.innerHTML =
    tile('scale', 'IMC', bmi.toFixed(1), null, true, bmiGaugeDots(bmi)) +
    tile('chart', '% Grasa', `${bodyFat.toFixed(1)}%`, 'Fórmula de Deurenberg') +
    tile('droplet', 'Agua', `${tbw.toFixed(1)} L`, 'Fórmula de Watson');
}

// El perfil se edita en un popup abierto desde el icono de la cabecera,
// visible en cualquier pestaña (no solo en Peso).
function openProfileModal() {
  const profile = getProfile();
  document.getElementById('profile-name').value = profile?.name || '';
  document.getElementById('profile-age').value = profile?.age || '';
  document.getElementById('profile-height').value = profile?.heightCm || '';
  document.querySelectorAll('#profile-sex .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.sex === (profile?.sex || 'male')));
  document.querySelectorAll('#profile-build .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.build === (profile?.build || 'medium')));
  document.querySelectorAll('#profile-frequency .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.frequency === (profile?.frequency || '3-4')));
  document.getElementById('profile-error-hint').classList.add('hidden');
  document.getElementById('profile-modal').classList.remove('hidden');
}
function closeProfileModal() {
  document.getElementById('profile-modal').classList.add('hidden');
}

function initProfileModal() {
  ['profile-sex', 'profile-build', 'profile-frequency'].forEach((groupId) => {
    document.querySelectorAll(`#${groupId} .seg-btn`).forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll(`#${groupId} .seg-btn`).forEach((b) => b.classList.toggle('active', b === btn));
      });
    });
  });

  document.getElementById('profile-btn').addEventListener('click', openProfileModal);
  document.getElementById('profile-cancel-btn').addEventListener('click', closeProfileModal);
  document.getElementById('profile-modal').addEventListener('click', (e) => {
    if (e.target.id === 'profile-modal') closeProfileModal();
  });

  document.getElementById('save-profile-btn').addEventListener('click', () => {
    const name = document.getElementById('profile-name').value.trim();
    const age = parseInt(document.getElementById('profile-age').value, 10);
    const heightCm = parseFloat(document.getElementById('profile-height').value);
    const sex = document.querySelector('#profile-sex .seg-btn.active')?.dataset.sex;
    const build = document.querySelector('#profile-build .seg-btn.active')?.dataset.build;
    const frequency = document.querySelector('#profile-frequency .seg-btn.active')?.dataset.frequency;
    const errorHint = document.getElementById('profile-error-hint');

    if (!age || age <= 0 || !heightCm || heightCm <= 0) {
      errorHint.textContent = 'Introduce una edad y una altura válidas.';
      errorHint.classList.remove('hidden');
      return;
    }
    errorHint.classList.add('hidden');
    saveProfile({ name, age, heightCm, sex, build, frequency });
    refreshProfileSummary();
    renderCompositionGrid();
    closeProfileModal();
  });

  refreshProfileSummary();
}

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

// Igual que autosizeRmInput: sin esto, el ancho reservado por el CSS deja un
// hueco a la izquierda de los dígitos cortos y el peso deja de estar pegado
// al borde izquierdo del módulo.
function autosizeBwInput() {
  const bwInput = document.getElementById('bodyweight-input');
  const len = (bwInput.value || bwInput.placeholder || '0').length;
  bwInput.style.width = `${len + 0.4}ch`;
}

function initPesoTab() {
  refreshProfileSummary();

  const dateInput = document.getElementById('bodyweight-date');
  dateInput.value = todayIso();

  // Se prellena con el último peso apuntado: normalmente casi no cambia de un
  // día para otro, así que rara vez hay que escribirlo entero de cero.
  const history = getBodyWeightHistory();
  if (history.length) {
    document.getElementById('bodyweight-input').value = history[history.length - 1].weight;
  }
  autosizeBwInput();

  document.getElementById('bodyweight-input').addEventListener('input', () => {
    document.getElementById('bodyweight-error-hint').classList.add('hidden');
    autosizeBwInput();
  });

  document.getElementById('save-bodyweight-btn').addEventListener('click', () => {
    const input = document.getElementById('bodyweight-input');
    const errorHint = document.getElementById('bodyweight-error-hint');
    const value = parseFloat(input.value);

    if (!value || value <= 0) {
      errorHint.textContent = 'Introduce un peso válido, mayor que 0.';
      errorHint.classList.remove('hidden');
      input.focus();
      return;
    }
    if (!dateInput.value) {
      errorHint.textContent = 'Elige una fecha.';
      errorHint.classList.remove('hidden');
      return;
    }

    errorHint.classList.add('hidden');
    addBodyWeight(value, dateInput.value);
    // No se vacía: el peso recién guardado sigue siendo "el último", así que
    // se queda como referencia para la próxima vez.
    dateInput.value = todayIso();
    renderBodyWeightChart();
    renderCompositionGrid();
    showSaveSuccess();
  });

  document.getElementById('bw-edit-cancel').addEventListener('click', closeBwEditModal);
  document.getElementById('bw-edit-modal').addEventListener('click', (e) => {
    if (e.target.id === 'bw-edit-modal') closeBwEditModal();
  });
  document.getElementById('bw-edit-weight').addEventListener('input', () => {
    document.getElementById('bw-edit-error').classList.add('hidden');
  });
  document.getElementById('bw-edit-save').addEventListener('click', () => {
    const value = parseFloat(document.getElementById('bw-edit-weight').value);
    const editDate = document.getElementById('bw-edit-date').value;
    const errorHint = document.getElementById('bw-edit-error');
    if (!value || value <= 0) {
      errorHint.textContent = 'Introduce un peso válido, mayor que 0.';
      errorHint.classList.remove('hidden');
      return;
    }
    if (!editDate) {
      errorHint.textContent = 'Elige una fecha.';
      errorHint.classList.remove('hidden');
      return;
    }
    updateBodyWeightEntry(bwEditOriginalIso, value, editDate);
    closeBwEditModal();
    renderBodyWeightChart();
    renderCompositionGrid();
  });

  renderBodyWeightChart();
  renderCompositionGrid();
}

// ===== Tab: Timer (countdown + cronómetro) =====
let timerMode = 'countdown';
let timerDurationSec = 30;
let timerRemainingMs = 0;
let timerElapsedMs = 0;
let timerRunning = false;
let timerRafId = null;
let timerLastTick = null;
let audioCtx = null;

// Devuelve mm:ss y, por separado, las centésimas (2 dígitos) para mostrarlas
// más pequeñas al lado, como en un crono real en vez de redondear al segundo.
function fmtClockParts(ms) {
  const clamped = Math.max(0, ms);
  const totalSec = Math.floor(clamped / 1000);
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  const centis = Math.floor((clamped % 1000) / 10);
  return {
    main: `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`,
    centis: String(centis).padStart(2, '0'),
  };
}

// Pitido generado con Web Audio, sin archivos de sonido: funciona offline sin nada que cachear.
function playBeep() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.25, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.4);
  } catch (e) {
    // Sin audio disponible (ej. autoplay bloqueado): el timer sigue funcionando igual.
  }
}

function updateTimerDisplay() {
  const mainEl = document.getElementById('timer-display-main');
  const msEl = document.getElementById('timer-display-ms');
  if (timerMode === 'countdown') {
    // timerRemainingMs > 0 cubre tanto "corriendo" como "en pausa"; solo cuando
    // vale 0 (nunca empezado, o terminado) se muestra la duración elegida entera.
    const totalMs = timerDurationSec * 1000;
    const remaining = timerRemainingMs > 0 ? timerRemainingMs : totalMs;
    const parts = fmtClockParts(remaining);
    mainEl.textContent = parts.main;
    msEl.textContent = parts.centis;
  } else {
    const parts = fmtClockParts(timerElapsedMs);
    mainEl.textContent = parts.main;
    msEl.textContent = parts.centis;
  }
}

// El selector de tiempo vive dentro del propio círculo: se ve la rueda solo
// mientras no hay ninguna cuenta atrás en marcha ni en pausa (timerRemainingMs
// a 0); en cuanto corre o queda pausada a mitad, se ve el reloj congelado.
function updateSetupVisibility() {
  const showPicker = timerMode === 'countdown' && !timerRunning && timerRemainingMs <= 0;
  document.getElementById('countdown-setup').classList.toggle('hidden', !showPicker);
  document.getElementById('timer-display').classList.toggle('hidden', showPicker);
}

function timerTick() {
  const now = performance.now();
  const delta = now - timerLastTick;
  timerLastTick = now;

  if (timerMode === 'countdown') {
    timerRemainingMs = Math.max(0, timerRemainingMs - delta);
    updateTimerDisplay();
    if (timerRemainingMs <= 0) {
      stopTimer();
      playBeep();
      const display = document.getElementById('timer-display');
      display.classList.add('finished');
      setTimeout(() => {
        display.classList.remove('finished');
      }, 1800);
      return;
    }
  } else {
    timerElapsedMs += delta;
    updateTimerDisplay();
  }
  timerRafId = requestAnimationFrame(timerTick);
}

// Cuenta atrás a pantalla completa antes de arrancar. Cada paso relanza la
// animación desde cero quitando y volviendo a poner la clase (si no, con el
// mismo texto no reinicia).
function playCountdownIntro(onDone) {
  const overlay = document.getElementById('countdown-intro');
  const textEl = document.getElementById('countdown-intro-text');
  const steps = [
    { text: '3', duration: 700 },
    { text: '2', duration: 700 },
    { text: '1', duration: 700 },
    { text: '¡Ya!', duration: 500 },
  ];

  overlay.classList.remove('hidden');
  let i = 0;
  function showStep() {
    if (i >= steps.length) {
      overlay.classList.add('hidden');
      onDone();
      return;
    }
    const step = steps[i];
    textEl.textContent = step.text;
    textEl.classList.remove('pop');
    void textEl.offsetWidth;
    textEl.classList.add('pop');
    i++;
    setTimeout(showStep, step.duration);
  }
  showStep();
}

function startTimer() {
  if (timerRunning) return;
  if (timerMode === 'countdown' && timerRemainingMs <= 0) {
    timerRemainingMs = timerDurationSec * 1000;
  }
  timerRunning = true;
  timerLastTick = performance.now();
  timerRafId = requestAnimationFrame(timerTick);
  document.getElementById('timer-display').classList.add('running');
  document.getElementById('timer-toggle-btn').textContent = 'Pausar';
  updateSetupVisibility();
}

function stopTimer() {
  timerRunning = false;
  if (timerRafId) cancelAnimationFrame(timerRafId);
  document.getElementById('timer-display').classList.remove('running');
  document.getElementById('timer-toggle-btn').textContent = 'Empezar';
  updateSetupVisibility();
}

function resetTimer() {
  stopTimer();
  timerRemainingMs = 0;
  timerElapsedMs = 0;
  updateSetupVisibility();
  updateTimerDisplay();
}

// La altura de fila depende de --timer-num-size (responsive, clamp con vw),
// así que se mide en el DOM en vez de fijarla a un número: así nunca se
// desincroniza del valor real que aplica el CSS en cada pantalla.
let WHEEL_ITEM_HEIGHT = 36;

function measureWheelItemHeight() {
  const item = document.querySelector('.wheel-item');
  if (item) WHEEL_ITEM_HEIGHT = item.getBoundingClientRect().height;
}

// La pestaña Timer puede no ser la activa al cargar la página (display: none),
// así que medir en ese momento da 0. Se vuelve a medir y a reposicionar la
// rueda cada vez que la pestaña se muestra de verdad.
function resyncTimerWheels() {
  measureWheelItemHeight();
  if (!WHEEL_ITEM_HEIGHT) return;
  scrollWheelTo('wheel-minutes', Math.floor(timerDurationSec / 60), false);
  scrollWheelTo('wheel-seconds', timerDurationSec % 60, false);
}

function buildWheel(containerId, count, formatFn) {
  const col = document.getElementById(containerId);
  col.innerHTML = '';
  for (let v = 0; v < count; v++) {
    const item = document.createElement('div');
    item.className = 'wheel-item';
    item.textContent = formatFn(v);
    item.dataset.value = String(v);
    col.appendChild(item);
  }
}

function scrollWheelTo(containerId, value, smooth) {
  const col = document.getElementById(containerId);
  col.scrollTo({ top: value * WHEEL_ITEM_HEIGHT, behavior: smooth ? 'smooth' : 'auto' });
  col.querySelectorAll('.wheel-item').forEach((it, i) => it.classList.toggle('active', i === value));
}

function initWheelScroll(containerId, onSettled) {
  const col = document.getElementById(containerId);
  let debounceTimer = null;
  col.addEventListener('scroll', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const index = Math.round(col.scrollTop / WHEEL_ITEM_HEIGHT);
      col.querySelectorAll('.wheel-item').forEach((it, i) => it.classList.toggle('active', i === index));
      onSettled(index);
    }, 100);
  });
}

function initTimerTab() {
  buildWheel('wheel-minutes', 21, (v) => String(v).padStart(2, '0'));
  buildWheel('wheel-seconds', 60, (v) => String(v).padStart(2, '0'));
  measureWheelItemHeight();

  let pickedMinutes = 0;
  let pickedSeconds = 30;

  function applyPicked() {
    timerDurationSec = pickedMinutes * 60 + pickedSeconds;
    updateTimerDisplay();
  }

  initWheelScroll('wheel-minutes', (v) => { pickedMinutes = v; applyPicked(); });
  initWheelScroll('wheel-seconds', (v) => { pickedSeconds = v; applyPicked(); });

  scrollWheelTo('wheel-minutes', 0, false);
  scrollWheelTo('wheel-seconds', 30, false);
  timerDurationSec = 30;

  function setTimerMode(mode) {
    if (timerMode === mode) return;
    timerMode = mode;
    document.querySelectorAll('#timer-mode-selector .timer-mode-label').forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
    resetTimer();
  }

  document.querySelectorAll('#timer-mode-selector .timer-mode-label').forEach((btn) => {
    btn.addEventListener('click', () => setTimerMode(btn.dataset.mode));
  });

  // Swipe horizontal sobre el timer para alternar countdown/cronómetro: el
  // selector de arriba ya insinúa con transparencia que se puede deslizar.
  const swipeArea = document.getElementById('timer-swipe-area');
  let swipeStartX = null;
  let swipeStartY = null;
  swipeArea.addEventListener('touchstart', (e) => {
    swipeStartX = e.touches[0].clientX;
    swipeStartY = e.touches[0].clientY;
  }, { passive: true });
  swipeArea.addEventListener('touchend', (e) => {
    if (swipeStartX === null) return;
    const dx = e.changedTouches[0].clientX - swipeStartX;
    const dy = e.changedTouches[0].clientY - swipeStartY;
    swipeStartX = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      setTimerMode(timerMode === 'countdown' ? 'stopwatch' : 'countdown');
    }
  }, { passive: true });

  document.getElementById('timer-toggle-btn').addEventListener('click', () => {
    if (timerRunning) {
      stopTimer();
      return;
    }
    // Reanudar tras una pausa no debe repetir la cuenta atrás: solo se muestra
    // al arrancar de cero (nada corriendo todavía, o ya terminado).
    const isResume = timerMode === 'countdown' ? timerRemainingMs > 0 : timerElapsedMs > 0;
    if (isResume) startTimer(); else playCountdownIntro(startTimer);
  });
  document.getElementById('timer-reset-btn').addEventListener('click', resetTimer);

  updateSetupVisibility();
  updateTimerDisplay();
  initRoundsTracker();
}

// ===== "Rondas": contador de series completas durante un WOD =====
// Progresivo, no independiente: tocar el 5 rellena también 1-4 (llevas 5
// rondas hechas). Tocar el número que ya está en la punta de lo rellenado
// lo destoca uno hacia atrás (deshacer la última ronda marcada).
const ROUND_ROWS = [[1, 2, 3], [4, 5, 6, 7], [8, 9, 10]];
let roundsFilled = 0;

function renderRoundsGrid(prevFilled = roundsFilled) {
  const grid = document.getElementById('rounds-grid');
  const lo = Math.min(prevFilled, roundsFilled) + 1;
  const hi = Math.max(prevFilled, roundsFilled);

  grid.innerHTML = ROUND_ROWS.map((row) => `
    <div class="rounds-row">
      ${row.map((n) => {
        const filled = n <= roundsFilled;
        const changed = n >= lo && n <= hi;
        const delay = changed ? `${(n - lo) * 40}ms` : '0ms';
        return `<button type="button" class="round-dot c${(n - 1) % 6}${filled ? ' filled' : ''}${changed ? ' pop' : ''}" style="animation-delay:${delay}" data-round="${n}">${n}</button>`;
      }).join('')}
    </div>
  `).join('');

  grid.querySelectorAll('.round-dot').forEach((btn) => {
    btn.addEventListener('click', () => {
      const n = Number(btn.dataset.round);
      const prev = roundsFilled;
      roundsFilled = n === roundsFilled ? n - 1 : n;
      renderRoundsGrid(prev);
    });
  });
}

function initRoundsTracker() {
  document.getElementById('rounds-reset-btn').addEventListener('click', () => {
    const prev = roundsFilled;
    roundsFilled = 0;
    renderRoundsGrid(prev);
  });
  renderRoundsGrid(0);
}

// ===== Navegación entre pestañas =====
function initNav() {
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
      if (btn.dataset.tab === 'tab-rms') renderRmsSearchResults(document.getElementById('rms-search').value);
      if (btn.dataset.tab === 'tab-wods') renderWodList();
      if (btn.dataset.tab === 'tab-progreso') { renderBodyWeightChart(); renderCompositionGrid(); }
      if (btn.dataset.tab === 'tab-timer') resyncTimerWheels();
    });
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initProfileModal();
  initRegistrarTab();
  initRmsTab();
  initWodsTab();
  initPesoTab();
  initTimerTab();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
