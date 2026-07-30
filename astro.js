// Lacuna — chart math + cast data.
const D2R = Math.PI / 180, R2D = 180 / Math.PI;
const norm = d => ((d % 360) + 360) % 360;

export const SIGNS = [
  { name: 'Aries', glyph: '\u2648' }, { name: 'Taurus', glyph: '\u2649' },
  { name: 'Gemini', glyph: '\u264A' }, { name: 'Cancer', glyph: '\u264B' },
  { name: 'Leo', glyph: '\u264C' }, { name: 'Virgo', glyph: '\u264D' },
  { name: 'Libra', glyph: '\u264E' }, { name: 'Scorpio', glyph: '\u264F' },
  { name: 'Sagittarius', glyph: '\u2650' }, { name: 'Capricorn', glyph: '\u2651' },
  { name: 'Aquarius', glyph: '\u2652' }, { name: 'Pisces', glyph: '\u2653' },
];

export const ELEMENTS = {
  fire: { label: 'fire', tint: '#FBB6C2', deep: '#E86BA9' },
  earth: { label: 'earth', tint: '#BEE6AE', deep: '#5E9B57' },
  air: { label: 'air', tint: '#AFD6F2', deep: '#4C86BE' },
  water: { label: 'water', tint: '#CBB8F2', deep: '#8A6FD1' },
};

const C = (i, name, archetype, element, file, lines) => ({
  index: i, sign: SIGNS[i].name, glyph: SIGNS[i].glyph, name, archetype, element,
  img: `characters/${file}.png`, ...lines,
});

export const CAST = [
  C(0, 'Odysseus', 'The Initiator', 'fire', '01_Aries_Odysseus', {
    sun: 'you begin things. the first step is always yours to take.',
    node: "you're learning to move before you feel ready.",
    saturn: 'your trial is patience with a plan that outlasts your appetite for starting.',
    mc: 'the world meets you mid-stride, already sailing.' }),
  C(1, 'Penelope', 'The Preserver', 'earth', '02_Taurus_Penelope', {
    sun: 'you keep what matters intact while everything else drifts.',
    node: "you're learning that staying is also a kind of voyage.",
    saturn: 'your trial is loyalty without martyrdom.',
    mc: 'the world meets you as the one who held the loom.' }),
  C(2, 'Sinon', 'The Curious Youth', 'air', '03_Gemini_Sinon', {
    sun: 'you carry the message, and the message changes you.',
    node: "you're learning to follow a question all the way to its answer.",
    saturn: 'your trial is staying curious about the hard things, not just the delightful ones.',
    mc: 'the world meets you as the letter arriving.' }),
  C(3, 'Eumaeus', 'The Keeper of Home', 'water', '04_Cancer_Eumaeus', {
    sun: 'you make places where people can put their weapons down.',
    node: "you're learning that tending is not the same as hiding.",
    saturn: 'your trial is welcoming without disappearing into the welcome.',
    mc: 'the world meets you at the door, lamp already lit.' }),
  C(4, 'Antinous', 'The Counterfeit King', 'fire', '05_Leo_Antinous', {
    sun: 'you know exactly how to be looked at.',
    node: "you're learning the difference between a crown and a self.",
    saturn: 'your trial is earning the room you already command.',
    mc: 'the world meets you already seated at the head of the table.' }),
  C(5, 'Athena', 'Applied Wisdom', 'earth', '06_Virgo_Athena', {
    sun: 'you turn knowing into doing, quietly and well.',
    node: "you're learning to lend your clarity instead of guarding it.",
    saturn: 'your trial is helping without correcting.',
    mc: "the world meets you as the counsel it didn't know to ask for." }),
  C(6, 'Eurylochus', 'The Counterweight', 'air', '07_Libra_Eurylochus', {
    sun: "you're the second voice that keeps the ship honest.",
    node: "you're learning to object early and out loud.",
    saturn: 'your trial is disagreeing without waiting for permission.',
    mc: 'the world meets you with your arms crossed, thinking.' }),
  C(7, 'Circe', 'The Transformer', 'water', '08_Scorpio_Circe', {
    sun: 'nothing leaves your hands in the shape it arrived.',
    node: "you're learning to change things on purpose, and let them go.",
    saturn: "your trial is power that doesn't need to prove itself.",
    mc: 'the world meets you at the threshold of a becoming.' }),
  C(8, 'Telemachus', 'The Seeker', 'fire', '09_Sagittarius_Telemachus', {
    sun: 'you go looking. the search is the inheritance.',
    node: "you're learning to leave the harbor without a map.",
    saturn: 'your trial is finishing the journey you started for someone else.',
    mc: 'the world meets you at the moment of departure.' }),
  C(9, 'Agamemnon', 'The Institution', 'earth', '10_Capricorn_Agamemnon', {
    sun: 'you build the structure everyone else stands on.',
    node: "you're learning to carry authority instead of wearing it.",
    saturn: 'your trial is command that serves something beyond command.',
    mc: 'the world meets you as the throne, before the person.' }),
  C(10, 'Polyphemus', 'The Outsider', 'air', '11_Aquarius_Polyphemus', {
    sun: "you see it differently, and you're not sorry.",
    node: "you're learning that the edge of the circle is still the circle.",
    saturn: 'your trial is belonging without shrinking.',
    mc: "the world meets you as the one who wasn't invited and came anyway." }),
  C(11, 'Calypso', 'The Dissolver', 'water', '12_Pisces_Calypso', {
    sun: 'you soften the edges of things until they can move again.',
    node: "you're learning to let go of what you could keep forever.",
    saturn: 'your trial is love that opens its hands.',
    mc: 'the world meets you as the island that changes people.' }),
];

const DEPTH = [
  ['starts the thing no one else will start.', 'leaves before the ending gets difficult.'],
  ['holds the thread through twenty years of nothing.', 'mistakes endurance for a personality.'],
  ['asks the question nobody else thought to ask.', 'runs with an idea before he has checked it.'],
  ['makes a room safe just by being in it.', 'hides inside the care he gives.'],
  ['commands the room without asking for it.', 'wants the crown more than the work.'],
  ['sees the useful move and makes it.', 'helps in ways that sound like correction.'],
  ['names the thing everyone else is avoiding.', 'waits too long to say it out loud.'],
  ['changes whatever she touches, on purpose.', 'tests people to see what they would survive.'],
  ['leaves to find something worth returning with.', 'keeps searching to avoid arriving.'],
  ['builds what outlasts him.', 'confuses the structure with himself.'],
  ['sees what the circle cannot see from inside.', 'makes an identity out of being left out.'],
  ['softens whatever has gone rigid.', 'keeps what she loves by never letting it leave.'],
];
const STORIES = [
  "he says yes to the sea before the map is finished. every version of the story needs him to move first, and he pays for it in years. what he learns, slowly, is that cleverness gets you out of the cave \u2014 but only patience gets you home.",
  "she does not travel, and she is not still. twenty years of unweaving is its own odyssey, conducted at a loom in a room full of men who want her to give up. she survives by making waiting into a skill; the trick is remembering she chose it.",
  "he is the one who asks. curiosity moves him the way the sea moves everyone else \u2014 he walks toward whatever he does not yet understand, carrying letters, questions, other people's news. his openness is completely real, which is exactly why people hand him the things that matter.",
  "he keeps the fire, the animals and the door for years, for a king everyone else has written off as dead. nobody sings about the one who stayed and kept the house warm. he is the only reason there is a home left to come back to.",
  "he sits in another man's hall, eats another man's food, and behaves as though it was always his. the unsettling part is how convincing he is \u2014 presence really is most of authority. he never learns the difference, and that is precisely the lesson he leaves behind.",
  "she is wisdom that shows up and does something. she does not hover above the plot; she puts on a disguise, walks in, and tells you exactly which move to make next. her risk is that clarity handed over too freely stops feeling like help.",
  "he is the one who says wait \u2014 usually right, almost never listened to. every crew needs the voice that counts the risk out loud before the door opens. his tragedy is timing: he objects a beat too late, or a beat too quietly, and the ship sails anyway.",
  "she turns men into pigs, which is either a curse or an accurate diagnosis. nothing enters her house and leaves in the shape it arrived in. the version of her worth becoming is the one who transforms on purpose \u2014 and then opens the door.",
  "he leaves home not knowing what he is looking for, only that staying is worse. the search is what makes him into someone who can be told the truth. by the time his father returns, the boy who left has become someone worth returning to.",
  "he is the structure itself \u2014 the command, the fleet, the office that outranks whoever is standing in it. he is magnificent and he is disastrous, because he mistakes the throne for himself. what survives him is the institution, which may have been the point.",
  "he lives outside the walls, keeps his own hours, answers to nobody, and is very nearly happy. then the clever ones arrive, take what they want, and name him the monster on the way out. the outsider's real work is belonging without going small.",
  "she offers the sweetest thing in the whole poem: stay, never age, never grieve. she is not cruel \u2014 she is love that cannot open its hands. the moment she lets him go is the most heroic act on the island.",
];

/* placement-specific opener, written around the traveler it lands on */
export const OPENERS = {
  sun: (c) => `${c.name.toLowerCase()} is not a role you are trying on \u2014 it is the setting you boot up in. you do not have to reach for this one; you have to aim it.`,
  node: (c) => `${c.name.toLowerCase()} is the direction, not the departure point. it will feel like effort long before it feels like you, and that discomfort is the whole signal.`,
  saturn: (c) => `${c.name.toLowerCase()}'s weight is the one you keep being handed. the same lesson arrives in new costumes until you stop performing it and start meaning it.`,
  mc: (c) => `the world meets ${c.name.toLowerCase()} first, whether or not that is who you feel like on the inside. it is the silhouette you cast before you speak.`,
};

const MODALITIES = ['cardinal', 'fixed', 'mutable'];
CAST.forEach(c => {
  c.core = DEPTH[c.index][0];
  c.shadow = DEPTH[c.index][1];
  c.story = STORIES[c.index];
  c.modality = MODALITIES[c.index % 3];
});

export const CITIES = [
  ['Seoul, South Korea', 37.57, 126.98, 'Asia/Seoul'],
  ['Tokyo, Japan', 35.68, 139.69, 'Asia/Tokyo'],
  ['Shanghai, China', 31.23, 121.47, 'Asia/Shanghai'],
  ['Hong Kong', 22.32, 114.17, 'Asia/Hong_Kong'],
  ['Singapore', 1.35, 103.82, 'Asia/Singapore'],
  ['Bangkok, Thailand', 13.76, 100.5, 'Asia/Bangkok'],
  ['Mumbai, India', 19.08, 72.88, 'Asia/Kolkata'],
  ['Delhi, India', 28.61, 77.21, 'Asia/Kolkata'],
  ['Dubai, UAE', 25.2, 55.27, 'Asia/Dubai'],
  ['Istanbul, Türkiye', 41.01, 28.98, 'Europe/Istanbul'],
  ['Moscow, Russia', 55.76, 37.62, 'Europe/Moscow'],
  ['Berlin, Germany', 52.52, 13.4, 'Europe/Berlin'],
  ['Paris, France', 48.86, 2.35, 'Europe/Paris'],
  ['Madrid, Spain', 40.42, -3.7, 'Europe/Madrid'],
  ['Rome, Italy', 41.9, 12.5, 'Europe/Rome'],
  ['Athens, Greece', 37.98, 23.73, 'Europe/Athens'],
  ['Amsterdam, Netherlands', 52.37, 4.9, 'Europe/Amsterdam'],
  ['Stockholm, Sweden', 59.33, 18.07, 'Europe/Stockholm'],
  ['London, UK', 51.51, -0.13, 'Europe/London'],
  ['Dublin, Ireland', 53.35, -6.26, 'Europe/Dublin'],
  ['Lisbon, Portugal', 38.72, -9.14, 'Europe/Lisbon'],
  ['Lagos, Nigeria', 6.52, 3.38, 'Africa/Lagos'],
  ['Cairo, Egypt', 30.04, 31.24, 'Africa/Cairo'],
  ['Nairobi, Kenya', -1.29, 36.82, 'Africa/Nairobi'],
  ['Johannesburg, South Africa', -26.2, 28.05, 'Africa/Johannesburg'],
  ['New York, NY, USA', 40.71, -74.01, 'America/New_York'],
  ['Boston, MA, USA', 42.36, -71.06, 'America/New_York'],
  ['Atlanta, GA, USA', 33.75, -84.39, 'America/New_York'],
  ['Miami, FL, USA', 25.76, -80.19, 'America/New_York'],
  ['Toronto, Canada', 43.65, -79.38, 'America/Toronto'],
  ['Chicago, IL, USA', 41.88, -87.63, 'America/Chicago'],
  ['Houston, TX, USA', 29.76, -95.37, 'America/Chicago'],
  ['Denver, CO, USA', 39.74, -104.99, 'America/Denver'],
  ['Phoenix, AZ, USA', 33.45, -112.07, 'America/Phoenix'],
  ['Los Angeles, CA, USA', 34.05, -118.24, 'America/Los_Angeles'],
  ['San Francisco, CA, USA', 37.77, -122.42, 'America/Los_Angeles'],
  ['Seattle, WA, USA', 47.61, -122.33, 'America/Los_Angeles'],
  ['Vancouver, Canada', 49.28, -123.12, 'America/Vancouver'],
  ['Mexico City, Mexico', 19.43, -99.13, 'America/Mexico_City'],
  ['Bogotá, Colombia', 4.71, -74.07, 'America/Bogota'],
  ['Lima, Peru', -12.05, -77.04, 'America/Lima'],
  ['São Paulo, Brazil', -23.55, -46.63, 'America/Sao_Paulo'],
  ['Buenos Aires, Argentina', -34.6, -58.38, 'America/Argentina/Buenos_Aires'],
  ['Sydney, Australia', -33.87, 151.21, 'Australia/Sydney'],
  ['Melbourne, Australia', -37.81, 144.96, 'Australia/Melbourne'],
  ['Auckland, New Zealand', -36.85, 174.76, 'Pacific/Auckland'],
  ['Honolulu, HI, USA', 21.31, -157.86, 'Pacific/Honolulu'],
];

/* Live city lookup — any place on earth, with its IANA timezone.
   Falls back to the built-in list when offline. */
export async function searchCities(q) {
  const query = q.trim();
  if (query.length < 2) return [];
  const lc = query.toLowerCase();
  const local = CITIES.filter(c => c[0].toLowerCase().includes(lc));
  // the first comma-separated token is the place name; the rest is region context
  const name = query.split(',')[0].trim() || query;
  let remote = [];
  try {
    const url = 'https://geocoding-api.open-meteo.com/v1/search?count=10&language=en&format=json&name='
      + encodeURIComponent(name);
    const r = await fetch(url);
    if (r.ok) {
      const j = await r.json();
      remote = (j.results || []).map(p => [
        [p.name, p.admin1, p.country].filter(Boolean).join(', '),
        p.latitude, p.longitude, p.timezone,
      ]).filter(c => c[3]);
      // if the user typed extra context ("paris, texas"), prefer rows that contain it
      const rest = query.slice(name.length).replace(/[,\s]+/g, ' ').trim().toLowerCase();
      if (rest) {
        const hit = remote.filter(c => c[0].toLowerCase().includes(rest));
        if (hit.length) remote = hit.concat(remote.filter(c => !hit.includes(c)));
      }
    }
  } catch (e) { /* offline — local list carries it */ }
  const seen = new Set();
  return remote.concat(local)
    .filter(c => !seen.has(c[0]) && seen.add(c[0]))
    .slice(0, 10);
}

// best-effort resolve of free text to one city (used when the user never picked)
export async function resolveCity(q) {
  const hits = await searchCities(q);
  return hits[0] || null;
}

/* ---------- time ---------- */
function tzOffsetMinutes(utcMs, tz) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, hour12: false, year: 'numeric', month: '2-digit',
    day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit',
  });
  const p = {};
  for (const { type, value } of dtf.formatToParts(new Date(utcMs))) p[type] = value;
  const asUTC = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour % 24, +p.minute, +p.second);
  return (asUTC - Math.floor(utcMs / 1000) * 1000) / 60000;
}

// Local wall clock + IANA zone -> julian day (UT). DST handled by the browser's tzdata.
export function toJulianDay(y, m, d, hour, minute, tz) {
  let guess = Date.UTC(y, m - 1, d, hour, minute, 0);
  if (y < 100) guess = new Date(guess).setUTCFullYear(y);
  if (tz) {
    for (let i = 0; i < 2; i++) guess -= tzOffsetMinutes(guess, tz) * 60000;
  }
  return guess / 86400000 + 2440587.5;
}

/* ---------- planets (JPL approximate elements) ---------- */
const EL = {
  earth: [1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0,
    0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0.0],
  saturn: [9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448,
    -0.00125060, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794],
};

function helio(key, T) {
  const e0 = EL[key];
  const a = e0[0] + e0[6] * T, e = e0[1] + e0[7] * T, I = (e0[2] + e0[8] * T) * D2R;
  const L = norm(e0[3] + e0[9] * T), wbar = e0[4] + e0[10] * T, O = e0[5] + e0[11] * T;
  const w = (wbar - O) * D2R, Om = O * D2R;
  let M = norm(L - wbar); if (M > 180) M -= 360;
  let E = M + (e * R2D) * Math.sin(M * D2R);
  for (let i = 0; i < 8; i++) {
    const dM = M - (E - e * R2D * Math.sin(E * D2R));
    E += dM / (1 - e * Math.cos(E * D2R));
  }
  const Er = E * D2R;
  const xp = a * (Math.cos(Er) - e), yp = a * Math.sqrt(1 - e * e) * Math.sin(Er);
  const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(Om), sO = Math.sin(Om),
    cI = Math.cos(I), sI = Math.sin(I);
  return {
    x: (cw * cO - sw * sO * cI) * xp + (-sw * cO - cw * sO * cI) * yp,
    y: (cw * sO + sw * cO * cI) * xp + (-sw * sO + cw * cO * cI) * yp,
    z: (sw * sI) * xp + (cw * sI) * yp,
  };
}

export function sunLongitude(jd) {
  const T = (jd - 2451545.0) / 36525;
  const e = helio('earth', T);
  return norm(Math.atan2(-e.y, -e.x) * R2D);
}

export function saturnLongitude(jd) {
  const T = (jd - 2451545.0) / 36525;
  const e = helio('earth', T), s = helio('saturn', T);
  return norm(Math.atan2(s.y - e.y, s.x - e.x) * R2D);
}

export function northNodeLongitude(jd) {
  const T = (jd - 2451545.0) / 36525;
  return norm(125.0445222 - 1934.1362608 * T + 0.0020708 * T * T + T * T * T / 450000);
}

export function midheavenLongitude(jd, lonEast) {
  const T = (jd - 2451545.0) / 36525;
  const gmst = norm(280.46061837 + 360.98564736629 * (jd - 2451545.0)
    + 0.000387933 * T * T - T * T * T / 38710000);
  const theta = norm(gmst + lonEast) * D2R;
  const eps = (23.439291 - 0.0130042 * T) * D2R;
  let mc = Math.atan2(Math.sin(theta), Math.cos(theta) * Math.cos(eps)) * R2D;
  mc = norm(mc);
  // keep MC in the same semicircle as RAMC
  if (Math.abs(norm(mc - theta * R2D)) > 90 && Math.abs(norm(theta * R2D - mc)) > 90) mc = norm(mc + 180);
  return mc;
}

export const signOf = lon => Math.floor(norm(lon) / 30);
export const degInSign = lon => norm(lon) % 30;

/* Saturn return: transiting Saturn within orb of natal Saturn. */
export function saturnReturn(natalLon, natalJd, nowJd) {
  const orb = 5, step = 6;
  const diff = jd => { const d = Math.abs(norm(saturnLongitude(jd) - natalLon)); return d > 180 ? 360 - d : d; };
  const windows = [];
  let open = null;
  for (let jd = natalJd + 27 * 365.25; jd < natalJd + 95 * 365.25; jd += step) {
    const inOrb = diff(jd) <= orb;
    if (inOrb && open === null) open = jd;
    else if (!inOrb && open !== null) { windows.push([open, jd]); open = null; }
  }
  if (open !== null) windows.push([open, natalJd + 95 * 365.25]);
  // merge windows closer than 2 years apart (retrograde triple passes = one return)
  const merged = [];
  for (const w of windows) {
    const last = merged[merged.length - 1];
    if (last && w[0] - last[1] < 730) last[1] = w[1];
    else merged.push([w[0], w[1]]);
  }
  const toDate = jd => new Date((jd - 2440587.5) * 86400000);
  const ord = ['first', 'second', 'third', 'fourth'];
  for (let i = 0; i < merged.length; i++) {
    const [s, e] = merged[i];
    if (nowJd >= s && nowJd <= e) {
      return { active: true, ordinal: ord[i] || 'next', start: toDate(s), end: toDate(e),
        progress: Math.max(0, Math.min(1, (nowJd - s) / (e - s))) };
    }
    if (nowJd < s) return { active: false, ordinal: ord[i] || 'next', start: toDate(s), end: toDate(e), progress: 0 };
  }
  return null;
}

export function computeChart({ date, time, city }) {
  const [y, m, d] = date.split('-').map(Number);
  const hasTime = !!time && !!city;
  const [hh, mm] = (time || '12:00').split(':').map(Number);
  const jd = toJulianDay(y, m, d, hh, mm, city ? city[3] : null);
  const out = {
    sun: sunLongitude(jd),
    node: northNodeLongitude(jd),
    saturn: saturnLongitude(jd),
    mc: hasTime ? midheavenLongitude(jd, city[2]) : null,
  };
  const wrap = (key, lon) => lon == null ? null : {
    key, lon, sign: signOf(lon), deg: degInSign(lon), char: CAST[signOf(lon)],
  };
  const nowJd = Date.now() / 86400000 + 2440587.5;
  return {
    jd,
    saturnReturn: saturnReturn(out.saturn, jd, nowJd),
    sun: wrap('sun', out.sun),
    node: wrap('node', out.node),
    saturn: wrap('saturn', out.saturn),
    mc: wrap('mc', out.mc),
  };
}

/* ---------- the quiz ----------
   4 elements × 3 modalities = the 12 signs, so a quiz that scores
   element + modality lands on exactly one traveler. */
const SIGN_BY = {
  'cardinal|fire': 0, 'fixed|earth': 1, 'mutable|air': 2, 'cardinal|water': 3,
  'fixed|fire': 4, 'mutable|earth': 5, 'cardinal|air': 6, 'fixed|water': 7,
  'mutable|fire': 8, 'cardinal|earth': 9, 'fixed|air': 10, 'mutable|water': 11,
};

export const QUIZ = [
  { q: 'the ship leaves at dawn. you—', a: [
    { t: 'packed last night', m: 'cardinal' },
    { t: 'will go, but you\u2019re bringing your own bed', m: 'fixed' },
    { t: 'decide at the dock', m: 'mutable' }] },
  { q: 'a stranger offers you a map to somewhere unnamed.', a: [
    { t: 'take it. leave now', e: 'fire' },
    { t: 'ask them forty questions first', e: 'air' },
    { t: 'ask who else has gone', e: 'water' },
    { t: 'check whether the roads are real', e: 'earth' }] },
  { q: 'what wrecks you fastest?', a: [
    { t: 'being told to wait', e: 'fire' },
    { t: 'losing what you built', e: 'earth' },
    { t: 'being misunderstood', e: 'air' },
    { t: 'someone leaving', e: 'water' }] },
  { q: 'the crew is arguing. you—', a: [
    { t: 'call the vote', m: 'cardinal' },
    { t: 'hold your position', m: 'fixed' },
    { t: 'reframe the question', m: 'mutable' }] },
  { q: 'your gift is closest to—', a: [
    { t: 'nerve', e: 'fire' },
    { t: 'endurance', e: 'earth' },
    { t: 'perception', e: 'air' },
    { t: 'feeling', e: 'water' }] },
  { q: 'an island offers you rest forever. no one would blame you.', a: [
    { t: 'stay a while. it\u2019s beautiful here', e: 'water' },
    { t: 'leave before dark', e: 'fire' },
    { t: 'stay, and build something', e: 'earth' },
    { t: 'stay if there\u2019s someone to talk to', e: 'air' }] },
  { q: 'a door you can\u2019t open.', a: [
    { t: 'force it', m: 'cardinal' },
    { t: 'wait it out', m: 'fixed' },
    { t: 'find a window', m: 'mutable' }] },
  { q: 'the thing you\u2019re secretly proud of—', a: [
    { t: 'you started', e: 'fire' },
    { t: 'you stayed', e: 'earth' },
    { t: 'you noticed', e: 'air' },
    { t: 'you forgave', e: 'water' }] },
  { q: 'someone tells you the truth about yourself.', a: [
    { t: 'you defend', m: 'fixed' },
    { t: 'you adapt', m: 'mutable' },
    { t: 'you act on it', m: 'cardinal' }] },
  { q: 'what should the story say about you?', a: [
    { t: 'that she burned bright', e: 'fire' },
    { t: 'that she held', e: 'earth' },
    { t: 'that she understood', e: 'air' },
    { t: 'that she loved', e: 'water' }] },
  { q: 'the last stretch home.', a: [
    { t: 'sprint', m: 'cardinal' },
    { t: 'the same steady pace', m: 'fixed' },
    { t: 'the scenic route', m: 'mutable' }] },
];

export function resolveQuiz(answers) {
  const el = { fire: 0, earth: 0, air: 0, water: 0 };
  const mo = { cardinal: 0, fixed: 0, mutable: 0 };
  answers.forEach((ai, qi) => {
    const opt = QUIZ[qi] && QUIZ[qi].a[ai];
    if (!opt) return;
    if (opt.e) el[opt.e] += 1;
    if (opt.m) mo[opt.m] += 1;
  });
  const rank = o => Object.keys(o).sort((a, b) => o[b] - o[a]);
  const er = rank(el), mr = rank(mo);
  const pick = (e, m) => CAST[SIGN_BY[m + '|' + e]];
  const wrap = (key, ch) => ({ key, lon: null, sign: ch.index, deg: null, char: ch });
  const sun = pick(er[0], mr[0]);
  let node = pick(er[1], mr[1] || mr[0]);
  if (node.index === sun.index) node = pick(er[1], mr[2] || mr[1]);
  if (node.index === sun.index) node = pick(er[2], mr[1]);
  let sat = pick(er[3], mr[2]);
  if (sat.index === sun.index || sat.index === node.index) sat = pick(er[3], mr[0]);
  return {
    quiz: true, jd: null, saturnReturn: null, mc: null,
    scores: { el, mo },
    sun: wrap('sun', sun), node: wrap('node', node), saturn: wrap('saturn', sat),
  };
}

export const PLACEMENTS = {
  sun: { title: 'the self · sun', symbol: '\u2609', blurb: 'who you already are' },
  node: { title: 'the call · north node', symbol: '\u260A', blurb: "the traveler you're becoming" },
  saturn: { title: 'the trial · saturn', symbol: '\u2644', blurb: 'the weight that shapes you' },
  mc: { title: 'the arrival · midheaven', symbol: '\u2191', blurb: 'how the world meets you' },
};
