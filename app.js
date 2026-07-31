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
  'Kettlebell Overhead Press': 'press militar press de hombros',
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
  'Barbell Overhead Press': 'press militar press de hombros',
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

const PERCENTAGES = [90, 80, 70, 60, 50];
// Tamaños reales de kettlebell disponibles en el box.
const STANDARD_KB_KG = [8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52];
// Tamaños reales de dumbbell disponibles en el box.
const STANDARD_DB_KG = [2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20];

const EQUIPMENT_LABEL = { kettlebell: 'Kettlebell', dumbbell: 'Dumbbell', barbell: 'Barbell' };

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

// Buscador combobox reutilizable: input de texto + lista de resultados filtrados,
// con una fila para añadir el término escrito como ejercicio nuevo si no existe.
function wireExerciseSearch({ inputId, resultsId, getEquipment, onSelect }) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);

  function render(query) {
    const equipment = getEquipment();
    const list = getExerciseList(equipment).filter((name) => matchesQuery(name, query));
    results.innerHTML = '';

    list.slice(0, 8).forEach((name) => {
      const row = document.createElement('button');
      row.type = 'button';
      row.className = 'search-result';
      row.textContent = name;
      row.addEventListener('mousedown', (e) => e.preventDefault()); // evita perder el foco antes del click
      row.addEventListener('click', () => {
        // El input se vacía (no se rellena con lo elegido) para poder buscar de nuevo
        // sin tener que borrar nada; lo elegido se muestra en otro sitio (ver onSelect).
        input.value = '';
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
        input.value = '';
        results.classList.add('hidden');
        onSelect(trimmed);
      });
      results.appendChild(addRow);
    }

    results.classList.toggle('hidden', list.length === 0 && !trimmed);
  }

  input.addEventListener('input', () => render(input.value));
  input.addEventListener('focus', () => render(input.value));
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

function resetRmEntry() {
  selectedExercise = null;
  rmInputDirty = false;
  const rmInput = document.getElementById('rm-input');
  rmInput.value = '';
  document.getElementById('rm-selected-exercise').textContent = 'Elige un ejercicio abajo';
  document.getElementById('rm-updated-hint').textContent = '';
  document.getElementById('rm-error-hint').classList.add('hidden');
}

function refreshRmField() {
  const exercise = currentExercise();
  if (!exercise) return;
  const stored = getRm(currentEquipment, exercise);
  const rmInput = document.getElementById('rm-input');
  const hint = document.getElementById('rm-updated-hint');
  document.getElementById('rm-selected-exercise').textContent = exercise;
  document.getElementById('rm-error-hint').classList.add('hidden');
  if (stored) {
    if (!rmInputDirty) rmInput.value = stored.rm;
    const d = new Date(stored.updatedAt);
    hint.textContent = `Guardado el ${d.toLocaleDateString('es-ES')}`;
  } else {
    if (!rmInputDirty) rmInput.value = '';
    hint.textContent = 'Aún no has guardado un RM para este ejercicio.';
  }
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
    tile.className = i === 0 ? 'pct-tile hero' : 'pct-tile';
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
  document.querySelectorAll('#equipment-selector .seg-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.equipment === equipment);
  });
  document.getElementById('exercise-search').value = '';
  document.getElementById('exercise-results').classList.add('hidden');
  resetRmEntry();
}

function initRegistrarTab() {
  document.querySelectorAll('#equipment-selector .seg-btn').forEach((btn) => {
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
    refreshRmField();

    const toast = document.getElementById('rm-saved-toast');
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 1800);
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
let rmsFilterEquipment = 'all';
let rmsDetailEquipment = null;
let rmsDetailExercise = null;

function showRmDetail(equipment, exercise) {
  rmsDetailEquipment = equipment;
  rmsDetailExercise = exercise;

  document.getElementById('rms-search-card').classList.add('hidden');
  document.getElementById('rms-search-results').classList.add('hidden');
  document.getElementById('rms-detail-card').classList.remove('hidden');

  document.getElementById('rms-detail-exercise').textContent = exercise;
  document.getElementById('rms-detail-equipment-label').textContent = EQUIPMENT_LABEL[equipment];
  document.getElementById('rms-detail-badge').className = `badge badge-${equipment}`;

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
    .filter((data) => rmsFilterEquipment === 'all' || data.equipment === rmsFilterEquipment)
    .filter((data) => matchesQuery(data.exercise, query))
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  results.innerHTML = '';
  matches.slice(0, 15).forEach((data) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'search-result rm-list-row';
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
      <span class="rm-list-arrow"><svg class="icon"><use href="#icon-chevron"/></svg></span>
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
  document.querySelectorAll('#rms-filter-equipment .seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      rmsFilterEquipment = btn.dataset.equipment;
      document.querySelectorAll('#rms-filter-equipment .seg-btn').forEach((b) =>
        b.classList.toggle('active', b.dataset.equipment === rmsFilterEquipment)
      );
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

// ===== Tab: WOD Heroes =====
// Pesos y distancias convertidos a kg/km/m a partir de los WOD Hero oficiales
// (fuente: https://anabelavila.com/crossfit/wods/heroes/).
const WOD_HEROES = [
  {
    name: 'JT',
    format: 'Por tiempo · 21-15-9',
    movements: ['Flexiones de pino (HSPU)', 'Fondos en anillas', 'Flexiones'],
  },
  {
    name: 'Michael',
    format: '3 rondas por tiempo',
    movements: ['Carrera 800m', '50 extensiones lumbares', '50 abdominales'],
  },
  {
    name: 'Murph',
    format: 'Por tiempo (chaleco opcional 9kg)',
    movements: ['Carrera 1.6km', '100 dominadas', '200 flexiones', '300 sentadillas', 'Carrera 1.6km'],
  },
  {
    name: 'Chad',
    format: 'Por tiempo',
    movements: ['1000 step-ups (cajón 50cm, con 20kg)'],
  },
  {
    name: 'Daniel',
    format: 'Por tiempo',
    movements: ['50 dominadas', 'Carrera 400m', '21 thrusters 43kg', 'Carrera 800m', '21 thrusters 43kg', 'Carrera 400m', '50 dominadas'],
  },
  {
    name: 'Josh',
    format: 'Por tiempo · 21-15-9',
    movements: ['Sentadilla overhead 43kg', 'Dominadas (42-30-18)'],
  },
  {
    name: 'Jason',
    format: 'Por tiempo · 100-75-50-25',
    movements: ['Sentadillas', 'Muscle-ups (5-10-15-20)'],
  },
  {
    name: 'Badger',
    format: '3 rondas por tiempo',
    movements: ['30 squat clean 43kg', '30 dominadas', 'Carrera 800m'],
  },
  {
    name: 'Joshie',
    format: '3 rondas por tiempo, cada brazo',
    movements: ['21 dumbbell snatch 18kg (brazo derecho)', '21 L pull-ups', 'Repetir con el brazo izquierdo'],
  },
  {
    name: 'Nate',
    format: 'AMRAP 20 minutos',
    movements: ['2 muscle-ups', '4 flexiones de pino (HSPU)', '8 kettlebell swings 32kg'],
  },
  {
    name: 'Randy',
    format: 'Por tiempo',
    movements: ['75 power snatch 34kg'],
  },
  {
    name: 'Tommy V',
    format: 'Por tiempo · 21-15-9',
    movements: ['Thrusters 52kg', 'Subidas de cuerda 4.5m (12-9-6)'],
  },
  {
    name: 'Griff',
    format: 'Por tiempo',
    movements: ['Carrera 800m', 'Carrera 400m hacia atrás', 'Carrera 800m', 'Carrera 400m hacia atrás'],
  },
  {
    name: 'DT',
    format: '5 rondas por tiempo',
    movements: ['12 peso muerto 70kg', '9 cargada colgada (hang power clean) 70kg', '6 push jerk 70kg'],
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
}

// ===== Tab: Peso (peso corporal + composición) =====
function fmtShortDate(iso) {
  const d = new Date(iso);
  return `${d.getDate()}/${d.getMonth() + 1}`;
}

// Dibuja un gráfico de líneas + tarjetas de estadística a partir de puntos {weight, date}.
// Se reutiliza tanto para el progreso de un ejercicio (RM + series) como para el peso corporal.
function renderTrendChart(points, { wrapEl, emptyEl, statsEl, unit = 'kg', ariaLabel, statsMode = 'best' }) {
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

  const W = 300, H = 150, padL = 30, padR = 10, padT = 16, padB = 24;
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;

  const xAt = (i) => (points.length === 1 ? padL + innerW / 2 : padL + (i / (points.length - 1)) * innerW);
  const yAt = (w) => padT + innerH - ((w - minW) / (maxW - minW)) * innerH;

  const linePoints = points.map((p, i) => `${xAt(i)},${yAt(p.weight)}`).join(' ');
  const dots = points
    .map((p, i) => `<circle class="chart-dot" style="animation-delay:${0.7 + i * 0.05}s" cx="${xAt(i)}" cy="${yAt(p.weight)}" r="3.5" fill="var(--accent)"/>`)
    .join('');

  const labelIdxs = points.length > 2
    ? [0, Math.floor((points.length - 1) / 2), points.length - 1]
    : points.map((_, i) => i);
  const dateLabels = labelIdxs
    .map((i) => `<text x="${xAt(i)}" y="${H - 6}" font-size="9" fill="var(--text-dim)" text-anchor="middle">${fmtShortDate(points[i].date)}</text>`)
    .join('');

  wrapEl.innerHTML = `
    <svg viewBox="0 0 ${W} ${H}" class="chart-svg" role="img" aria-label="${ariaLabel}">
      <text x="4" y="${yAt(realMax) + 3}" font-size="9" fill="var(--text-dim)">${Math.round(realMax)}</text>
      <text x="4" y="${yAt(realMin) + 3}" font-size="9" fill="var(--text-dim)">${Math.round(realMin)}</text>
      ${points.length > 1 ? `<polyline class="chart-line" pathLength="1" points="${linePoints}" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
      ${dots}
      ${dateLabels}
    </svg>
  `;

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
function renderBodyWeightChart() {
  renderTrendChart(getBodyWeightHistory(), {
    wrapEl: document.getElementById('bodyweight-chart-wrap'),
    emptyEl: document.getElementById('bodyweight-empty'),
    statsEl: document.getElementById('bodyweight-stats'),
    ariaLabel: 'Evolución de tu peso corporal',
    statsMode: 'diff',
  });
}

// ===== Perfil (para calcular la composición corporal) =====
const KEY_PROFILE = 'gymrm.profile';
function getProfile() { return Store.read(KEY_PROFILE, null); }
function saveProfile(p) { Store.write(KEY_PROFILE, p); }

function calcBMI(weightKg, heightCm) {
  const h = heightCm / 100;
  return weightKg / (h * h);
}
function bmiCategory(bmi) {
  if (bmi < 18.5) return 'Bajo peso';
  if (bmi < 25) return 'Normal';
  if (bmi < 30) return 'Sobrepeso';
  return 'Obesidad';
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
    summary.textContent = `${sexLabel} · ${profile.age} años · ${profile.heightCm} cm · ${BUILD_LABELS[profile.build]} · ${FREQUENCY_LABELS[profile.frequency]}`;
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

  const tile = (label, value, sub, hero) => `
    <div class="pct-tile${hero ? ' hero' : ''}">
      <div class="pct-tile-label">${label}</div>
      <div class="pct-tile-value">${value}</div>
      ${sub ? `<div class="pct-tile-sub">${sub}</div>` : ''}
    </div>
  `;

  grid.innerHTML =
    tile('IMC', bmi.toFixed(1), bmiCategory(bmi), true) +
    tile('% Grasa (estimado)', `${bodyFat.toFixed(1)}%`, 'Fórmula de Deurenberg') +
    tile('Agua corporal (estimado)', `${tbw.toFixed(1)} L`, 'Fórmula de Watson');
}

function initProfileForm() {
  ['profile-sex', 'profile-build', 'profile-frequency'].forEach((groupId) => {
    document.querySelectorAll(`#${groupId} .seg-btn`).forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll(`#${groupId} .seg-btn`).forEach((b) => b.classList.toggle('active', b === btn));
      });
    });
  });

  document.getElementById('edit-profile-btn').addEventListener('click', () => {
    document.getElementById('profile-form').classList.toggle('hidden');
  });

  const profile = getProfile();
  if (profile) {
    document.getElementById('profile-age').value = profile.age;
    document.getElementById('profile-height').value = profile.heightCm;
    document.querySelectorAll('#profile-sex .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.sex === profile.sex));
    document.querySelectorAll('#profile-build .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.build === profile.build));
    document.querySelectorAll('#profile-frequency .seg-btn').forEach((b) => b.classList.toggle('active', b.dataset.frequency === profile.frequency));
  } else {
    document.getElementById('profile-form').classList.remove('hidden');
  }

  document.getElementById('save-profile-btn').addEventListener('click', () => {
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
    saveProfile({ age, heightCm, sex, build, frequency });
    refreshProfileSummary();
    document.getElementById('profile-form').classList.add('hidden');
    renderCompositionGrid();
  });

  refreshProfileSummary();
}

function shiftDateInputBy(days) {
  const dateInput = document.getElementById('bodyweight-date');
  const current = dateInput.value ? new Date(`${dateInput.value}T00:00:00`) : new Date();
  current.setDate(current.getDate() + days);
  dateInput.value = current.toISOString().slice(0, 10);
}

function initPesoTab() {
  initProfileForm();

  document.getElementById('bodyweight-date').value = new Date().toISOString().slice(0, 10);
  document.getElementById('bodyweight-date-prev').addEventListener('click', () => shiftDateInputBy(-1));
  document.getElementById('bodyweight-date-next').addEventListener('click', () => shiftDateInputBy(1));
  document.getElementById('bodyweight-date-today').addEventListener('click', () => {
    document.getElementById('bodyweight-date').value = new Date().toISOString().slice(0, 10);
  });

  document.getElementById('bodyweight-input').addEventListener('input', () => {
    document.getElementById('bodyweight-error-hint').classList.add('hidden');
  });

  document.getElementById('save-bodyweight-btn').addEventListener('click', () => {
    const input = document.getElementById('bodyweight-input');
    const dateInput = document.getElementById('bodyweight-date');
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
    input.value = '';
    dateInput.value = new Date().toISOString().slice(0, 10);
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

const TIMER_RING_CIRCUMFERENCE = 659.73;

// El anillo se va rellenando a medida que pasa el tiempo (no al revés),
// para que se sienta como una barra de progreso hacia la meta, no una cuenta que se vacía.
function updateTimerRing(progress) {
  const ring = document.getElementById('timer-ring-progress');
  const clamped = Math.min(1, Math.max(0, progress));
  ring.style.strokeDashoffset = String(TIMER_RING_CIRCUMFERENCE * (1 - clamped));
}

function updateTimerDisplay() {
  const mainEl = document.getElementById('timer-display-main');
  const msEl = document.getElementById('timer-display-ms');
  const label = document.getElementById('timer-ring-label');
  if (timerMode === 'countdown') {
    const totalMs = timerDurationSec * 1000;
    const remaining = timerRunning ? timerRemainingMs : totalMs;
    const parts = fmtClockParts(remaining);
    mainEl.textContent = parts.main;
    msEl.textContent = parts.centis;
    label.textContent = 'Restante';
    updateTimerRing(totalMs > 0 ? 1 - remaining / totalMs : 0);
  } else {
    const parts = fmtClockParts(timerElapsedMs);
    mainEl.textContent = parts.main;
    msEl.textContent = parts.centis;
    label.textContent = 'Transcurrido';
    updateTimerRing((timerElapsedMs % 60000) / 60000);
  }
}

function updateSetupVisibility() {
  document.getElementById('countdown-setup').classList.toggle('hidden', timerMode === 'stopwatch' || timerRunning);
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
      const ring = document.getElementById('timer-ring-progress');
      display.classList.add('finished');
      ring.classList.add('finished');
      setTimeout(() => {
        display.classList.remove('finished');
        ring.classList.remove('finished');
      }, 1800);
      return;
    }
  } else {
    timerElapsedMs += delta;
    updateTimerDisplay();
  }
  timerRafId = requestAnimationFrame(timerTick);
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

const WHEEL_ITEM_HEIGHT = 40;

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

  let pickedMinutes = 0;
  let pickedSeconds = 30;

  function applyPicked() {
    timerDurationSec = pickedMinutes * 60 + pickedSeconds;
    document.querySelectorAll('.chip[data-seconds]').forEach((c) => c.classList.remove('active'));
    updateTimerDisplay();
  }

  initWheelScroll('wheel-minutes', (v) => { pickedMinutes = v; applyPicked(); });
  initWheelScroll('wheel-seconds', (v) => { pickedSeconds = v; applyPicked(); });

  scrollWheelTo('wheel-minutes', 0, false);
  scrollWheelTo('wheel-seconds', 30, false);
  timerDurationSec = 30;

  document.querySelectorAll('.chip[data-seconds]').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip[data-seconds]').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      const secs = parseInt(chip.dataset.seconds, 10);
      pickedMinutes = Math.floor(secs / 60);
      pickedSeconds = secs % 60;
      timerDurationSec = secs;
      scrollWheelTo('wheel-minutes', pickedMinutes, true);
      scrollWheelTo('wheel-seconds', pickedSeconds, true);
      updateTimerDisplay();
    });
  });

  document.querySelectorAll('#timer-mode-selector .seg-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      timerMode = btn.dataset.mode;
      document.querySelectorAll('#timer-mode-selector .seg-btn').forEach((b) => b.classList.toggle('active', b === btn));
      resetTimer();
    });
  });

  document.getElementById('timer-toggle-btn').addEventListener('click', () => {
    if (timerRunning) stopTimer(); else startTimer();
  });
  document.getElementById('timer-reset-btn').addEventListener('click', resetTimer);

  updateSetupVisibility();
  updateTimerDisplay();
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
    });
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initRegistrarTab();
  initRmsTab();
  initWodsTab();
  initPesoTab();
  initTimerTab();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
