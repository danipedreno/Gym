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
function toggleItemExpand(item) {
  const detail = item.querySelector('.item-detail');
  if (!item.classList.contains('expanded')) {
    item.classList.add('expanded');
    detail.style.maxHeight = detail.scrollHeight + 'px';
    const onEnd = (e) => {
      if (e.propertyName !== 'max-height') return;
      detail.style.maxHeight = 'none';
      detail.removeEventListener('transitionend', onEnd);
    };
    detail.addEventListener('transitionend', onEnd);
  } else {
    detail.style.maxHeight = detail.scrollHeight + 'px';
    requestAnimationFrame(() => {
      item.classList.remove('expanded');
      detail.style.maxHeight = '0px';
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
const FEATURED_WODS = [
  {
    blocks: [
      {
        color: 'c0',
        icon: 'timer',
        illus: 'warmup',
        title: 'Calentamiento',
        badge: "EMOM 6'",
        items: [
          { main: 'Minutos impares 1, 3, 5', sub: '12 sentadillas libres + 20s plancha abdominal activa.' },
          { main: 'Minutos pares 2, 4, 6', sub: '8 flexiones + 30s plancha lateral, 15s por lado.' },
        ],
      },
      {
        color: 'c1',
        icon: 'dumbbell',
        illus: 'strength',
        title: 'Fuerza y Estabilidad Progresiva',
        items: [
          { main: '12 pesos muertos con KB' },
          { main: '10 press militar con mancuernas' },
          { main: '12 remos con mancuernas' },
        ],
        rounds: [
          { n: 1, pct: '50%' },
          { n: 2, pct: '60%' },
          { n: 3, pct: '70%' },
          { n: 4, pct: '80%', marker: '*' },
        ],
        note: '*Si pesa mucho, baja a 8-10 reps en muerto y remos, y a 8 en press militar.',
      },
      {
        color: 'c2',
        icon: 'flame',
        illus: 'wod',
        title: 'El Work Out del Día',
        badge: "AMRAP 15'",
        items: [
          { main: '15 wall ball shots' },
          { main: '18 ring rows' },
          { main: '15 kettlebell swings', genders: [{ icon: 'female', text: '12-16 kg' }, { icon: 'male', text: '20-24 kg' }] },
          { main: '9 burpees' },
        ],
      },
    ],
  },
  {
    blocks: [
      {
        color: 'c3',
        icon: 'timer',
        illus: 'strength',
        title: 'Calentamiento',
        badge: "EMOM 6'",
        items: [
          { main: 'Minutos impares 1, 3, 5', sub: '10 Zancadas alternas paso atrás + 20s Plancha de Oso (rodillas a 2 cm del suelo).' },
          { main: 'Minutos pares 2, 4, 6', sub: '10 Puentes de Glúteo en suelo + 20s Plancha Hollow.' },
        ],
      },
      {
        color: 'c2',
        icon: 'dumbbell',
        illus: 'wod',
        title: 'Fuerza y Estabilidad Progresiva',
        items: [
          { main: '12 Sentadillas Goblet con KB o Sentadilla Trasera' },
          { main: '10 Floor Press con Mancuernas' },
          { main: '10 Dominadas asistidas / Jalón al Pecho' },
        ],
        rounds: [
          { n: 1, pct: '50%' },
          { n: 2, pct: '60%' },
          { n: 3, pct: '70%' },
          { n: 4, pct: '80%', marker: '*' },
        ],
        note: '*Ajusta a 8-10 reps en sentadillas y 8 en press/jalón si pesa mucho.',
      },
      {
        color: 'c1',
        icon: 'flame',
        illus: 'warmup',
        title: 'El WOD Estrella',
        badge: "AMRAP 15'",
        items: [
          { main: '12 Step-ups con Mancuernas / Salto a Cajón' },
          { main: '15 Push-ups Release', sub: 'Levanta las manos del suelo medio segundo antes de empujar.' },
          { main: '18 Abdominales Sit-ups' },
          { main: '200m Remadora / Carrera / 45s Comba' },
        ],
      },
    ],
  },
  {
    blocks: [
      {
        color: 'c4',
        icon: 'timer',
        illus: 'wod',
        title: 'Calentamiento',
        badge: "EMOM 6'",
        items: [
          { main: 'Minutos impares 1, 3, 5', sub: '10 Sentadillas Cossack alternando lados + 20s Plancha en codos con toques de hombro.' },
          { main: 'Minutos pares 2, 4, 6', sub: '12 Good Mornings sin peso (bisagra de cadera) + 30s Superman Hold.' },
        ],
      },
      {
        color: 'c0',
        icon: 'dumbbell',
        illus: 'warmup',
        title: 'Fuerza y Estabilidad Progresiva',
        items: [
          { main: '12 Zancadas traseras con Mancuernas (6 por pierna)' },
          { main: '10 Press Inclinado con Mancuernas o Push-Press' },
          { main: '12 Remos al Mentón con KB (Upright Rows)' },
        ],
        rounds: [
          { n: 1, pct: '50%' },
          { n: 2, pct: '60%' },
          { n: 3, pct: '70%' },
          { n: 4, pct: '80%', marker: '*' },
        ],
        note: '*Ajusta a 8-10 reps en zancadas y remos, y a 8 en press si pesa mucho.',
      },
      {
        color: 'c3',
        icon: 'flame',
        illus: 'strength',
        title: 'El WOD Estrella',
        badge: "AMRAP 15'",
        items: [
          { main: '12 Kettlebell Snatches alternos', sub: '6 por brazo: tirón explosivo directo arriba.' },
          { main: '15 Jumping Lunges / Zancadas dinámicas' },
          { main: '18 Ring Rows / Remos en Anillas' },
          { main: '12 Burpees sobre la Kettlebell' },
        ],
      },
    ],
  },
];

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
          <span class="wod-progress-n">Ronda ${r.n}${r.marker || ''}</span>
          <span class="wod-progress-pct">${r.pct}</span>
        </div>
      `).join('')}
    </div>
  `;
}

// Ilustraciones abstractas de fondo, una por tipo de bloque: figuras
// geométricas con trazo fino en "currentColor" (heredan el color del
// bloque), pensadas para leerse como textura, no como icono — de ahí la
// opacidad baja en cada forma.
// Collage de formas planas y sólidas (no trazo fino de fondo): cápsulas,
// círculos y bloques con borde negro, cada una de un color distinto de la
// paleta — como un mini bento propio, no una textura. Coordenadas escritas
// directamente en el lado derecho del viewBox de 300 (el texto va arriba a
// la izquierda, así que el collage no le compite por espacio).
// Cada <rect>/<circle>/<polygon> anima por separado (--d = retraso, --rot =
// rotación final), así entran una a una, no todo el grupo de golpe.
// viewBox 300×600 (no 300×300): el hueco real de cada tarjeta es alto y
// estrecho, no cuadrado — con un viewBox cuadrado el SVG solo ocupaba una
// caja centrada más pequeña y las formas no caían donde parecía en el
// código. Todas las formas se agrupan en el tercio inferior (y: 380-580)
// para no pelearse con el texto, que empieza arriba.
const WOD_ILLUSTRATIONS = {
  // Calentamiento (teal): Frame 26 — teal+rosa+naranja, los tones teal se funden con el fondo.
  warmup: `<svg class="wod-block-illus" viewBox="0 0 663 663" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
<rect width="26.7906" height="182.58" transform="matrix(-4.37114e-08 1 1 4.37114e-08 359.977 243.427)" fill="#002E50"/>
<circle cx="33.3161" cy="33.3161" r="33.3161" transform="matrix(0.866025 0.5 0.5 -0.866025 393.562 269.017)" fill="#FC5100"/>
<circle cx="53.7243" cy="53.7243" r="53.7243" transform="matrix(-0.866025 0.5 0.5 0.866025 133.672 195.628)" fill="#FC5100"/>
<path d="M87.1453 222.49C112.841 207.655 145.698 216.459 160.534 242.155L67.4808 295.879C52.6453 270.183 61.4494 237.326 87.1453 222.49Z" fill="#1F4764"/>
<path d="M456.876 259.936C459.459 267.391 462.198 274.84 465.048 282.282C487.655 341.33 517.17 400.03 530.103 459.563C532.758 481.914 528.263 508.988 515.031 531.637C478.939 599.633 379.321 613.847 321.489 566.004C287.717 551.762 254.143 537.103 220.385 522.834C213.4 519.882 206.406 516.945 199.402 514.033C227.122 455.597 254.843 397.162 282.562 338.726C289.248 342.308 295.946 345.867 302.651 349.408C328.598 363.113 354.663 376.567 380.649 390.187C390.271 355.149 402.061 320.002 411.574 284.971C413.663 277.28 415.641 269.595 417.463 261.918C430.601 261.257 443.738 260.596 456.876 259.936Z" fill="#FC5100"/>
<path d="M283.258 338.938H60.841L102.415 606.471H324.832L283.258 338.938Z" fill="#BFC851"/>
<path d="M310.758 192.75L366.246 224.786V288.859L310.758 320.895L255.27 288.859V224.786L310.758 192.75Z" fill="#1F4764"/>
<path d="M558.311 192.75L613.799 224.786V288.859L558.311 320.895L502.822 288.859V224.786L558.311 192.75Z" fill="#1F4764"/>
</svg>`,
  // Fuerza (amarillo): Frame 27 — oliva/lima + navys oscuros contrastan sobre amarillo.
  strength: `<svg class="wod-block-illus" viewBox="0 0 663 663" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
<path d="M57.8376 500.258C5.09927 445.335 65.7858 339.408 145.384 360.803C149.181 361.466 152.979 362.132 156.776 362.798C216.183 373.219 275.484 384.068 334.821 394.772C342.024 396.072 349.229 397.37 356.433 398.664C345.257 443.366 334.079 488.068 322.902 532.77C315.936 530.522 308.97 528.277 302.003 526.033C254.63 510.779 207.234 495.62 159.892 480.241C170.645 496.225 181.398 512.209 192.158 528.187L192.219 528.166L220.845 570.712C229.774 583.982 220.265 601.841 204.271 601.841H71.8513C84.682 586.891 99.399 573.793 115.572 562.839C96.3269 541.979 77.0712 521.127 57.8376 500.258Z" fill="#FC5100"/>
<path d="M605.162 500.258C657.901 445.335 597.214 339.408 517.616 360.803C513.819 361.466 510.021 362.132 506.224 362.798C446.817 373.219 387.516 384.068 328.179 394.772C320.976 396.072 313.771 397.37 306.567 398.664C317.743 443.366 328.921 488.068 340.098 532.77C347.064 530.522 354.03 528.277 360.997 526.033C408.37 510.779 455.766 495.62 503.108 480.241C492.355 496.225 481.602 512.209 470.842 528.187L470.781 528.166L442.155 570.712C433.226 583.982 442.735 601.841 458.729 601.841H591.149C578.318 586.891 563.601 573.793 547.428 562.839C566.673 541.979 585.929 521.127 605.162 500.258Z" fill="#FC5100"/>
<circle cx="328.993" cy="203.541" r="46.0243" fill="#FC5100"/>
<path d="M328.993 157.517C303.575 157.517 282.969 178.123 282.969 203.541L375.017 203.541C375.017 178.123 354.412 157.517 328.993 157.517Z" fill="#1F4764"/>
<path d="M514.355 466.113C497.579 488.747 473.166 503.291 446.482 508.409C440.432 515.744 432.991 521.906 424.512 526.497C366.488 557.917 296.523 557.917 238.5 526.497C230.021 521.906 222.579 515.745 216.529 508.409C189.843 503.293 165.426 488.749 148.648 466.113L148.625 346.654L303.318 385.244H359.686L514.379 346.654L514.355 466.113Z" fill="#FED4BE"/>
<path d="M204.641 388.484L453.36 388.484L449.338 263.341H208.662L204.641 388.484Z" fill="#F0F424"/>
<path d="M201.019 249.874C211.63 247.18 222.809 248.672 231.881 254.076C240.966 259.476 247.202 268.347 249.431 278.681C250.331 282.848 251.242 287.011 252.161 291.173C254.893 303.553 257.686 315.918 260.465 328.286C265.445 314.326 270.651 300.387 275.347 286.401C276.741 282.249 278.09 278.093 279.374 273.932C284.753 274.418 290.133 274.902 295.512 275.388C296.031 279.712 296.613 284.043 297.241 288.377C301.04 314.602 306.485 340.975 309.308 367.112C310.058 391.083 294.388 416.158 270.322 425.865C262.565 429.102 254.118 430.882 245.721 431.088C225.249 431.631 205.511 416.712 200.498 396.547C191.896 367.978 184.013 339.227 175.771 310.566C174.593 306.47 173.408 302.376 172.212 298.284C169.241 288.139 170.49 277.368 175.899 268.288C181.295 259.211 190.408 252.568 201.019 249.874Z" fill="#FC5100"/>
<path d="M463.157 249.874C452.546 247.18 441.367 248.672 432.295 254.076C423.21 259.476 416.973 268.347 414.745 278.681C413.845 282.848 412.934 287.011 412.015 291.173C409.283 303.553 406.49 315.918 403.71 328.286C398.731 314.326 393.525 300.387 388.829 286.401C387.435 282.249 386.086 278.093 384.801 273.932C379.422 274.418 374.043 274.902 368.664 275.388C368.145 279.712 367.563 284.043 366.935 288.377C363.136 314.602 357.69 340.975 354.867 367.112C354.118 391.083 369.787 416.158 393.854 425.865C401.61 429.102 410.057 430.882 418.454 431.088C438.926 431.631 458.665 416.712 463.677 396.547C472.279 367.978 480.163 339.227 488.405 310.566C489.583 306.47 490.768 302.376 491.964 298.284C494.935 288.139 493.685 277.368 488.277 268.288C482.881 259.211 473.767 252.568 463.157 249.874Z" fill="#FC5100"/>
<path d="M351.063 267.37C367.566 267.371 380.287 281.915 378.089 298.271L375.07 320.718C382.937 330.381 387.654 342.711 387.654 356.143C387.654 387.155 362.513 412.296 331.501 412.296C300.489 412.296 275.348 387.155 275.348 356.143C275.348 342.712 280.064 330.384 287.929 320.721L284.911 298.271C282.713 281.915 295.433 267.371 311.936 267.37H351.063ZM311.936 286.291C306.884 286.292 302.99 290.744 303.663 295.75L305.116 306.563C312.982 302.368 321.964 299.991 331.501 299.99C341.037 299.99 350.017 302.368 357.883 306.562L359.337 295.75C360.01 290.744 356.115 286.292 351.063 286.291H311.936Z" fill="#1F4764"/>
<circle cx="289.884" cy="273.04" r="25.5287" fill="#FC5100"/>
<circle cx="25.5287" cy="25.5287" r="25.5287" transform="matrix(-1 -6.79865e-09 -6.79865e-09 1 399.824 247.512)" fill="#FC5100"/>
</svg>`,
  // WOD del Día (navy): Frame 26 — naranja y rosa explotan sobre el fondo oscuro.
  wod: `<svg class="wod-block-illus" viewBox="0 0 663 663" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
<circle cx="222.628" cy="231.969" r="28.2535" transform="rotate(-69.3195 222.628 231.969)" fill="#FC5100"/>
<path d="M196.195 221.991C190.684 236.59 198.051 252.891 212.65 258.402L232.606 205.536C218.007 200.025 201.705 207.393 196.195 221.991Z" fill="#1F4764"/>
<path d="M174.831 310.668C179.951 289.151 199.718 274.367 221.805 275.537L312.006 280.316L273.044 485.893L125.028 519.989L174.831 310.668Z" fill="#FFB4ED"/>
<path d="M423.897 261.84C426.34 258.84 427.525 254.718 427.399 250.605C427.261 246.479 425.823 242.699 423.193 239.873C420.564 237.047 416.897 235.341 412.791 234.907C408.698 234.486 404.501 235.371 401.334 237.593C401.334 237.593 401.334 237.593 401.334 237.593C398.656 239.478 395.978 241.364 393.301 243.249C371.266 258.763 349.232 274.277 327.198 289.792L344.63 282.147C312.685 280.264 280.74 278.38 248.795 276.496C245.525 276.303 242.256 276.11 238.987 275.918C227.442 275.215 216.731 279.21 209.28 287.937C201.825 296.611 198.241 309.304 199.245 322.31C200.25 335.317 205.74 347.309 214.438 354.736C223.141 362.215 234.338 364.518 245.638 362.052C245.638 362.052 245.638 362.052 245.638 362.052C248.839 361.36 252.04 360.667 255.241 359.975C286.518 353.209 317.795 346.443 349.073 339.678L362.658 336.739L366.505 332.034C383.563 311.171 400.621 290.309 417.678 269.446C419.751 266.911 421.824 264.376 423.897 261.84Z" fill="#FC5100"/>
<path d="M348.349 607.868C329.834 598.551 311.319 589.234 292.804 579.918C295.907 572.74 299.008 565.562 302.108 558.382C323.313 509.272 344.452 460.129 365.699 411.041C363.99 413.558 362.403 419.257 363.351 424.505C364.222 429.791 366.666 433.857 369.761 436.785C372.865 439.696 377.249 442.003 382.999 442.428C388.712 442.945 394.861 440.667 397.857 438.546C395.499 440.584 393.14 442.621 390.781 444.657C342.027 486.74 293.051 528.535 244.151 570.427C238.214 575.512 232.279 580.599 226.345 585.689C203.139 555.602 179.932 525.515 156.725 495.429C163.154 490.982 169.582 486.533 176.008 482.083C228.946 445.424 281.808 408.668 334.893 372.2C337.462 370.436 340.031 368.671 342.6 366.908C364.418 348.596 405.177 350.168 425.236 369.569C447.406 386.59 454.686 425.613 440.526 448.693C413.767 495.008 386.9 541.268 360.098 587.562C356.18 594.33 352.264 601.098 348.349 607.868Z" fill="#FC5100"/>
<path d="M434.383 628.528C434.383 608.265 420.536 590.626 400.852 585.815L317.034 565.328C304.391 562.238 292.196 571.811 292.196 584.826L292.196 628.528L434.383 628.528Z" fill="#F3F3EB"/>
<path d="M143.696 579.283C116.265 546.549 120.563 497.776 153.297 470.345L205.963 426.211L305.3 544.751L252.634 588.885C219.901 616.316 171.127 612.017 143.696 579.283Z" fill="#276268"/>
<circle cx="479.869" cy="123.042" r="98.973" fill="#1F4764"/>
<circle cx="173.276" cy="243.227" r="35.8496" transform="rotate(-44.5868 173.276 243.227)" fill="#1F4764"/>
<circle cx="423.136" cy="235.922" r="28.0736" fill="#FC5100"/>
</svg>`,
};

// Página a pantalla completa, no desplegable: 3 tarjetas (una por bloque) en
// una fila con scroll horizontal + snap, para deslizar de una a otra como en
// un carrusel de stories. Los puntos de arriba marcan en cuál se está.
function renderFeaturedWod(wod) {
  const swipe = document.getElementById('featured-wod-swipe');
  swipe.innerHTML = wod.blocks.map((block) => `
    <div class="wod-block ${block.color}">
      ${WOD_ILLUSTRATIONS[block.illus] || ''}
      <div class="wod-block-content">
        <div class="wod-block-head">
          <svg class="icon"><use href="#icon-${block.icon}"/></svg>
          <span class="wod-block-title">${block.title}${block.badge ? ` <span class="wod-block-badge-inline">${block.badge}</span>` : ''}</span>
        </div>
        ${block.rounds ? renderRoundsPills(block.rounds) : ''}
        <ul class="wod-block-list">${block.items.map(renderWodItem).join('')}</ul>
        ${block.note ? `<p class="wod-block-note">${block.note}</p>` : ''}
      </div>
    </div>
  `).join('');

  const dots = document.getElementById('featured-wod-dots');
  dots.innerHTML = wod.blocks.map((_, i) => `<span class="featured-wod-dot${i === 0 ? ' active' : ''}"></span>`).join('');
}

// Solo se recuerda cuál era el índice anterior para no relanzar la animación
// de la ilustración en cada tick de scroll, solo cuando el bloque activo
// cambia de verdad (al deslizar a uno nuevo, "carga" y se anima).
let featuredWodActiveIndex = -1;
function updateFeaturedWodActive() {
  const swipe = document.getElementById('featured-wod-swipe');
  if (!swipe.clientWidth) return;
  const index = Math.round(swipe.scrollLeft / swipe.clientWidth);
  document.querySelectorAll('.featured-wod-dot').forEach((d, i) => d.classList.toggle('active', i === index));
  if (index === featuredWodActiveIndex) return;
  featuredWodActiveIndex = index;
  const block = swipe.querySelectorAll('.wod-block')[index];
  const illus = block && block.querySelector('.wod-block-illus');
  if (!illus) return;
  illus.classList.remove('in-view');
  void illus.getBoundingClientRect();
  illus.classList.add('in-view');
}

function openFeaturedWodPage(wodIndex) {
  const swipe = document.getElementById('featured-wod-swipe');
  renderFeaturedWod(FEATURED_WODS[wodIndex] || FEATURED_WODS[0]);
  document.getElementById('featured-wod-page').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  swipe.scrollLeft = 0;
  featuredWodActiveIndex = -1;
  updateFeaturedWodActive();
}
function closeFeaturedWodPage() {
  document.getElementById('featured-wod-page').classList.add('hidden');
  document.body.style.overflow = '';
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
  container.innerHTML = '';

  WOD_HEROES.forEach((wod, i) => {
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
  renderWodList();

  document.querySelectorAll('[data-wod]').forEach(btn =>
    btn.addEventListener('click', () => openFeaturedWodPage(parseInt(btn.dataset.wod)))
  );
  document.getElementById('featured-wod-back').addEventListener('click', closeFeaturedWodPage);
  let dotsDebounce = null;
  document.getElementById('featured-wod-swipe').addEventListener('scroll', () => {
    clearTimeout(dotsDebounce);
    dotsDebounce = setTimeout(updateFeaturedWodActive, 50);
  }, { passive: true });
}

// ===== Tab: Peso (peso corporal + composición) =====
function fmtShortDate(iso) {
  const d = new Date(iso);
  return `${d.getDate()}/${d.getMonth() + 1}`;
}

// Dibuja un gráfico de líneas + tarjetas de estadística a partir de puntos {weight, date}.
// Se reutiliza tanto para el progreso de un ejercicio (RM + series) como para el peso corporal.
function renderTrendChart(points, { wrapEl, emptyEl, statsEl, unit = 'kg', ariaLabel, statsMode = 'best', onDotClick, endpointColors }) {
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
  // Los extremos pueden llevar el mismo color que sus tiles de Primero/Último
  // en vez del naranja de acento genérico, para que se identifiquen a
  // simple vista con la fila de estadísticas de abajo.
  const dotFill = (i) => {
    if (endpointColors) {
      if (i === 0) return endpointColors.first;
      if (i === points.length - 1) return endpointColors.last;
    }
    return 'var(--accent)';
  };
  const dots = points
    .map((p, i) => `<circle class="chart-dot" data-idx="${i}" style="animation-delay:${0.7 + i * 0.05}s" cx="${xAt(i)}" cy="${yAt(p.weight)}" r="4" fill="${dotFill(i)}"/>`)
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

  const statTile = (icon, label, valueText, subText, colorClass = '') => `
    <div class="pct-tile ${colorClass}">
      <div class="pct-tile-label"><svg class="icon"><use href="#icon-${icon}"/></svg> ${label}</div>
      <div class="pct-tile-value">${valueText}</div>
      <div class="pct-tile-sub">${subText}</div>
    </div>
  `;

  if (statsMode === 'diff') {
    const diff = last.weight - first.weight;
    const sign = diff > 0 ? '+' : '';
    statsEl.innerHTML =
      statTile('calendar', 'Primero', `${first.weight} ${unit}`, fmtShortDate(first.date), 'c-teal') +
      statTile('chart', 'Último', `${last.weight} ${unit}`, fmtShortDate(last.date), 'c-pink') +
      statTile('scale', 'Diferencia', `${sign}${diff.toFixed(1)} ${unit}`, 'desde el primero', 'c-olive');
  } else {
    const best = points.reduce((a, b) => (b.weight > a.weight ? b : a));
    statsEl.innerHTML =
      statTile('calendar', 'Primero', `${first.weight} ${unit}`, fmtShortDate(first.date)) +
      statTile('target', 'Mejor', `${best.weight} ${unit}`, fmtShortDate(best.date)) +
      statTile('chart', 'Último', `${last.weight} ${unit}`, fmtShortDate(last.date));
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
    endpointColors: { first: 'var(--teal)', last: 'var(--pink)' },
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

function openProfileEditForm() {
  const profile = getProfile();
  document.getElementById('profile-name').value = profile?.name || '';
  document.getElementById('profile-age').value = profile?.age || '';
  document.getElementById('profile-height').value = profile?.heightCm || '';
  document.querySelectorAll('#profile-sex .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.sex === (profile?.sex || 'male')));
  document.querySelectorAll('#profile-build .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.build === (profile?.build || 'medium')));
  document.querySelectorAll('#profile-frequency .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.frequency === (profile?.frequency || '3-4')));
  document.getElementById('profile-error-hint').classList.add('hidden');
  document.getElementById('profile-edit-form').classList.remove('hidden');
  document.getElementById('profile-edit-toggle').textContent = 'Cerrar';
}
function closeProfileEditForm() {
  document.getElementById('profile-edit-form').classList.add('hidden');
  document.getElementById('profile-edit-toggle').textContent = 'Editar';
}

function initProfileModal() {
  ['profile-sex', 'profile-build', 'profile-frequency'].forEach((groupId) => {
    document.querySelectorAll(`#${groupId} .seg-btn`).forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll(`#${groupId} .seg-btn`).forEach((b) => b.classList.toggle('active', b === btn));
      });
    });
  });

  const openPesoPage = () => {
    document.getElementById('peso-page').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    refreshProfileSummary();
    renderBodyWeightChart();
    renderCompositionGrid();
  };
  document.getElementById('profile-btn').addEventListener('click', openPesoPage);

  document.getElementById('profile-edit-toggle').addEventListener('click', () => {
    const form = document.getElementById('profile-edit-form');
    if (form.classList.contains('hidden')) openProfileEditForm();
    else closeProfileEditForm();
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
    closeProfileEditForm();
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

// ===== Panel: Peso & Composición =====
function initPesoPage() {
  const close = () => {
    document.getElementById('peso-page').classList.add('hidden');
    document.body.style.overflow = '';
    closeProfileEditForm();
  };
  document.getElementById('peso-back-btn').addEventListener('click', close);
}

// ===== Tab: Loader (calculadora de discos) =====
const LOADER_BAR = 20;
const LOADER_PLATES = [25, 20, 15, 10, 5];
// Colores de marca: acento/naranja, navy, amarillo, teal, sage
const PLATE_FILL = { 25: '#002E50', 20: '#4A5328', 15: '#276268', 10: '#F3F343', 5: '#F4BFED' };
const PLATE_INK  = { 25: '#fff',    20: '#fff',    15: '#fff',    10: '#14120f', 5: '#14120f' };

function calcPlatesPerSide(kg) {
  const plateTotal = kg - LOADER_BAR;
  if (plateTotal < 0) return null;
  if (plateTotal % 10 !== 0) return null;
  let rem = plateTotal / 2;
  const out = [];
  for (const p of LOADER_PLATES) { while (rem >= p) { out.push(p); rem -= p; } }
  return rem === 0 ? out : null;
}

function roundToLoadable(kg) {
  if (kg <= LOADER_BAR) return LOADER_BAR;
  return LOADER_BAR + Math.max(0, Math.round((kg - LOADER_BAR) / 10) * 10);
}

function buildBarbellSVG(plates) {
  if (!plates.length) return '';
  const VW = { 5: 699, 10: 729, 15: 779, 20: 849, 25: 849 };
  const PH = { 5: 110, 10: 110, 15: 110, 20: 110, 25: 110 };
  const FC = { 5: '#F4BFED', 10: '#F3F343', 15: '#276268', 20: '#4A5328', 25: '#002E50' };
  const SK = 'stroke="#1B1A17" stroke-width="40"';

  // Body fill path (D-shape side + left arc)
  const BD = {
    5:  'M433 0C477.488 0 515.07 32.5851 545.527 79.4795C576.545 127.237 603.716 195.019 626.233 276.988C671.347 441.212 699 666.953 699 915.5C699 1164.05 671.347 1389.79 626.233 1554.01C603.716 1635.98 576.545 1703.76 545.527 1751.52C515.07 1798.41 477.488 1831 433 1831L285.5 1831C241.062 1831 203.546 1798.39 173.157 1751.5C142.204 1703.75 115.088 1635.97 92.6172 1554C47.5965 1389.78 20 1164.04 20 915.5C20 666.955 47.5965 441.218 92.6172 276.998C115.088 195.031 142.204 127.251 173.157 79.4951C203.431 32.7873 240.78 0.246 285 0Z',
    10: 'M463 0C507.488 0 545.07 32.5851 575.527 79.4795C606.545 127.237 633.716 195.019 656.233 276.988C701.347 441.212 729 666.953 729 915.5C729 1164.05 701.347 1389.79 656.233 1554.01C633.716 1635.98 606.545 1703.76 575.527 1751.52C545.07 1798.41 507.488 1831 463 1831H285.5C242.062 1831 204.546 1798.39 174.157 1751.5C143.204 1703.75 116.088 1635.97 93.6172 1554C48.5965 1389.78 21 1164.04 21 915.5C21 666.955 48.5965 441.218 93.6172 276.998C116.088 195.031 143.204 127.251 174.157 79.4951C204.431 32.7873 241.78 0.246 286 0Z',
    15: 'M513 0C557.488 0 595.07 32.5851 625.527 79.4795C656.545 127.237 683.716 195.019 706.233 276.988C751.347 441.212 779 666.953 779 915.5C779 1164.05 751.347 1389.79 706.233 1554.01C683.716 1635.98 656.545 1703.76 625.527 1751.52C595.07 1798.41 557.488 1831 513 1831L336.5 1831C292.062 1831 254.546 1798.39 224.157 1751.5C193.204 1703.75 166.088 1635.97 143.617 1554C98.5965 1389.78 71 1164.04 71 915.5C71 666.955 98.5965 441.218 143.617 276.998C166.088 195.031 193.204 127.251 224.157 79.4951C254.431 32.7873 291.78 0.246 336 0Z',
    20: 'M583 0C627.488 0 665.07 32.5851 695.527 79.4795C726.545 127.237 753.716 195.019 776.233 276.988C821.347 441.212 849 666.953 849 915.5C849 1164.05 821.347 1389.79 776.233 1554.01C753.716 1635.98 726.545 1703.76 695.527 1751.52C665.07 1798.41 627.488 1831 583 1831H265.5C221.062 1831 183.546 1798.39 153.157 1751.5C122.204 1703.75 95.0884 1635.97 72.6172 1554C27.5965 1389.78 0 1164.04 0 915.5C0 666.955 27.5965 441.218 72.6172 276.998C95.0884 195.031 122.204 127.251 153.157 79.4951C183.431 32.7873 220.78 0.246 265 0Z',
    25: 'M583 0C627.488 0 665.07 32.5851 695.527 79.4795C726.545 127.237 753.716 195.019 776.233 276.988C821.347 441.212 849 666.953 849 915.5C849 1164.05 821.347 1389.79 776.233 1554.01C753.716 1635.98 726.545 1703.76 695.527 1751.52C665.07 1798.41 627.488 1831 583 1831H265.5C221.062 1831 183.546 1798.39 153.157 1751.5C122.204 1703.75 95.0884 1635.97 72.6172 1554C27.5965 1389.78 0 1164.04 0 915.5C0 666.955 27.5965 441.218 72.6172 276.998C95.0884 195.031 122.204 127.251 153.157 79.4951C183.431 32.7873 220.78 0.246 265 0Z',
  };

  // Depth edge stroke path
  const ED = {
    5:  'M266 20 433 20C568.862 20 679 420.929 679 915.5C679 1410.07 568.862 1811 433 1811L268 1811',
    10: 'M265 20H463C598.862 20 709 420.929 709 915.5C709 1410.07 598.862 1811 463 1811H267',
    15: 'M255 20L513 20C648.862 20 759 420.929 759 915.5C759 1410.07 648.862 1811 513 1811L257 1811',
    20: 'M265 20H583C718.862 20 829 420.929 829 915.5C829 1410.07 718.862 1811 583 1811H267',
    25: 'M265 20H583C718.862 20 829 420.929 829 915.5C829 1410.07 718.862 1811 583 1811H267',
  };

  // Inner ring + hole center (20/25 have a perspective offset)
  const IC = { 5: [265.5,915.5], 10: [265.5,915.5], 15: [265.5,915.5], 20: [245.5,895.5], 25: [245.5,895.5] };
  // 5kg inner ring has explicit fill; others are transparent (concentric ring effect)
  const IRF = { 5: true, 10: false, 15: false, 20: false, 25: false };

  const items = plates.map(sz => {
    const h = PH[sz], w = Math.round(VW[sz] * h / 1831), c = FC[sz];
    const [icx, icy] = IC[sz];
    const irFill = IRF[sz] ? `fill="${c}"` : 'fill="none"';
    return `<svg viewBox="0 0 ${VW[sz]} 1831" height="${h}" width="${w}" xmlns="http://www.w3.org/2000/svg">` +
      `<path fill-rule="evenodd" clip-rule="evenodd" d="${BD[sz]}" fill="${c}"/>` +
      `<path d="${ED[sz]}" ${SK} fill="none"/>` +
      `<ellipse cx="265.5" cy="915.5" rx="245.5" ry="895.5" fill="${c}" ${SK}/>` +
      `<ellipse cx="${icx}" cy="${icy}" rx="116.5" ry="664.5" ${irFill} ${SK}/>` +
      `<ellipse cx="${icx}" cy="${icy}" rx="44.5" ry="155.5" fill="#1B1A17"/>` +
      `</svg>`;
  }).join('');

  return `<div style="display:flex;align-items:center;justify-content:center;gap:6px;padding:12px 0">${items}</div>`;
}

function renderLoader(baseKg, pct) {
  const target = roundToLoadable(baseKg * pct / 100);
  const plates = calcPlatesPerSide(target) || [];
  const barChip = `<span class="loader-chip loader-chip-bar">Barra · 20 kg</span>`;
  if (plates.length === 0) {
    document.getElementById('loader-plate-summary').innerHTML = barChip;
  } else {
    const groups = {};
    plates.forEach(p => { groups[p] = (groups[p] || 0) + 1; });
    document.getElementById('loader-plate-summary').innerHTML = barChip +
      LOADER_PLATES.filter(p => groups[p]).map(p =>
        `<span class="loader-chip" style="background:${PLATE_FILL[p]};color:${PLATE_INK[p]}">${p} kg × ${groups[p] * 2}</span>`
      ).join('');
  }
  const allPlates = [...plates, ...plates].sort((a, b) => b - a);
  document.getElementById('loader-barbell-wrap').innerHTML = buildBarbellSVG(allPlates);
}

function autosizeLoaderInput() {
  const input = document.getElementById('loader-weight-input');
  if (!input) return;
  const len = Math.max(input.value.length || input.placeholder.length, 1);
  input.style.width = `${len + 0.4}ch`;
}

function initLoaderTab() {
  const input = document.getElementById('loader-weight-input');
  const pctBtns = [...document.querySelectorAll('.loader-pct-btn')];
  let activePct = 100;

  const noTeFlipesModal = document.getElementById('no-te-flipes-modal');
  document.getElementById('no-te-flipes-ok').addEventListener('click', () => {
    noTeFlipesModal.classList.add('hidden');
    input.value = '';
    autosizeLoaderInput();
    document.getElementById('loader-result').classList.add('hidden');
  });

  const update = () => {
    autosizeLoaderInput();
    const base = parseFloat(input.value) || 0;
    if (base > 520) { noTeFlipesModal.classList.remove('hidden'); return; }
    if (base < LOADER_BAR) { document.getElementById('loader-result').classList.add('hidden'); return; }
    document.getElementById('loader-result').classList.remove('hidden');
    renderLoader(base, activePct);
  };

  autosizeLoaderInput();
  input.addEventListener('input', update);
  pctBtns.forEach(btn => btn.addEventListener('click', () => {
    pctBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activePct = parseInt(btn.dataset.pct);
    update();
  }));
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
let wakeLock = null;

async function requestWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try { wakeLock = await navigator.wakeLock.request('screen'); } catch (_) {}
}
function releaseWakeLock() {
  if (wakeLock) { wakeLock.release(); wakeLock = null; }
}
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && timerRunning) requestWakeLock();
});

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
  requestWakeLock();
}

function stopTimer() {
  timerRunning = false;
  if (timerRafId) cancelAnimationFrame(timerRafId);
  document.getElementById('timer-display').classList.remove('running');
  document.getElementById('timer-toggle-btn').textContent = 'Empezar';
  updateSetupVisibility();
  releaseWakeLock();
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
      closeFeaturedWodPage();
      document.getElementById('peso-page').classList.add('hidden');
      document.body.style.overflow = '';
      closeProfileEditForm();
      document.querySelectorAll('.nav-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.tab').forEach((t) => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
      if (btn.dataset.tab === 'tab-rms') renderRmsSearchResults(document.getElementById('rms-search').value);
      if (btn.dataset.tab === 'tab-wods') renderWodList();
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
  initPesoPage();
  initPesoTab();
  initLoaderTab();
  initTimerTab();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
