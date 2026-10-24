/**
 * Small, defensive localStorage helpers used by Skillora's demo features.
 * These helpers keep the prototype working without a backend.
 */
export function readStore(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeStore(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function enrollCourse(courseId) {
  const id = Number(courseId);
  if (!Number.isFinite(id)) return false;

  const enrolled = readStore('skillora-enrolled', []);
  if (!Array.isArray(enrolled)) return false;

  if (!enrolled.includes(id)) {
    return writeStore('skillora-enrolled', [...enrolled, id]);
  }
  return true;
}
