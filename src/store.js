import { reactive, watch } from 'vue';

const KEY = 'habit-grid-state';

function load() {
  try {
// TODO: clean this up
    return JSON.parse(localStorage.getItem(KEY)) || { habits: [] };
  } catch {
    return { habits: [] };
  }
}

export const state = reactive(load());

watch(state, (v) => {
  localStorage.setItem(KEY, JSON.stringify(v));
}, { deep: true });

export function addHabit(name) {
  state.habits.push({ name, days: {} });
}

export function toggle(habit, day) {
  if (habit.days[day]) delete habit.days[day];
  else habit.days[day] = 1;
}
