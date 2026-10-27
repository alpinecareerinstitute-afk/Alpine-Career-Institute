/* 📚 QUESTION BANK
   Format: ['Sawal?', 'SAHI jawab', 'galat 1', 'galat 2', 'galat 3']
   Pehla option hamesha sahi jawab likhna. Website options ko khud shuffle kar deti hai.
   Naya sawal jodne ke liye bas ek line copy karke badal do.
   Maths ke sawal neeche GEN mein khud banate hain (har baar naye numbers), isliye wo kabhi repeat nahi hote. */
const BANK = {
  9: { Science: [
    ['Most abundant gas in Earth\'s atmosphere?', 'Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
    ['Basic unit of life?', 'Cell', 'Tissue', 'Organ', 'Atom'],
    ['Speed is equal to?', 'Distance / time', 'Time / distance', 'Distance × time', 'Mass / volume'],
    ['Which of these is a mixture?', 'Air', 'Water', 'Gold', 'Oxygen'],
    ['Which organelle is the powerhouse of the cell?', 'Mitochondria', 'Nucleus', 'Ribosome', 'Golgi body'],
    ['SI unit of acceleration?', 'm/s²', 'm/s', 'kg·m/s', 'm²/s'],
    ['Conversion of a solid directly into gas is called?', 'Sublimation', 'Evaporation', 'Condensation', 'Melting'],
    ['Which tissue carries water in plants?', 'Xylem', 'Phloem', 'Parenchyma', 'Collenchyma'],
    ['Newton\'s first law is also known as the law of?', 'Inertia', 'Momentum', 'Gravitation', 'Action and reaction'],
    ['Atomic number of an atom is the number of its?', 'Protons', 'Neutrons', 'Protons + neutrons', 'Neutrons + electrons'],
    ['Sound cannot travel through?', 'Vacuum', 'Water', 'Steel', 'Air'],
    ['Chemical symbol of sodium?', 'Na', 'S', 'So', 'N'],
    ['SI unit of force?', 'Newton', 'Joule', 'Watt', 'Pascal'],
    ['Who proposed the nuclear model of the atom?', 'Rutherford', 'Thomson', 'Bohr', 'Dalton'],
    ['Which of these is a unit of pressure?', 'Pascal', 'Newton', 'Joule', 'Watt']
  ]},
  10: { Science: [
    ['Ohm\'s law is?', 'V = IR', 'V = I / R', 'V = I + R', 'V = R / I'],
    ['pH of a neutral solution?', '7', '0', '10', '14'],
    ['Which lens corrects myopia?', 'Concave', 'Convex', 'Cylindrical', 'Plano'],
    ['Rusting of iron is an example of?', 'Oxidation', 'Neutralisation', 'Decomposition', 'Sublimation'],
    ['Number of chambers in the human heart?', '4', '2', '3', '5'],
    ['Acid present in our stomach?', 'Hydrochloric acid', 'Sulphuric acid', 'Nitric acid', 'Acetic acid'],
    ['SI unit of resistance?', 'Ohm', 'Ampere', 'Volt', 'Watt'],
    ['Splitting of white light into colours is called?', 'Dispersion', 'Reflection', 'Scattering', 'Diffraction'],
    ['Gas released when zinc reacts with dilute HCl?', 'Hydrogen', 'Oxygen', 'Carbon dioxide', 'Nitrogen'],
    ['Which hormone ripens fruits?', 'Ethylene', 'Auxin', 'Cytokinin', 'Abscisic acid'],
    ['Focal length of a plane mirror?', 'Infinity', 'Zero', '10 cm', '1 m'],
    ['Chemical formula of baking soda?', 'NaHCO₃', 'Na₂CO₃', 'NaOH', 'CaCO₃'],
    ['Father of Genetics?', 'Mendel', 'Darwin', 'Lamarck', 'Pasteur'],
    ['Loss of water vapour from leaves is called?', 'Transpiration', 'Respiration', 'Digestion', 'Excretion'],
    ['Which metal is liquid at room temperature?', 'Mercury', 'Sodium', 'Iron', 'Zinc']
  ]},
  11: {
    Physics: [
      ['Dimensional formula of force?', '[MLT⁻²]', '[ML²T⁻²]', '[MLT⁻¹]', '[ML⁻¹T⁻²]'],
      ['Which of these is a scalar quantity?', 'Work', 'Force', 'Velocity', 'Momentum'],
      ['Acceleration due to gravity on Earth (approx.)?', '9.8 m/s²', '8.9 m/s²', '10.8 m/s²', '98 m/s²'],
      ['Newton\'s second law?', 'F = ma', 'F = m / a', 'F = a / m', 'F = mv'],
      ['Kinetic energy formula?', '½mv²', 'mv²', '½mv', 'mgh'],
      ['Escape velocity of Earth (approx.)?', '11.2 km/s', '7.9 km/s', '9.8 km/s', '15.2 km/s'],
      ['SI unit of power?', 'Watt', 'Joule', 'Newton', 'Pascal'],
      ['Momentum equals?', 'Mass × velocity', 'Mass × acceleration', 'Mass / velocity', 'Force × velocity'],
      ['At the highest point of a projectile, vertical velocity is?', 'Zero', 'Maximum', 'Equal to horizontal velocity', 'Equal to g'],
      ['SI unit of pressure?', 'Pascal', 'Newton', 'Joule', 'Watt'],
      ['Time period of a simple pendulum depends on?', 'Length of the string', 'Mass of the bob', 'Amplitude', 'Colour of the bob'],
      ['SI unit of work?', 'Joule', 'Watt', 'Newton', 'Pascal']
    ],
    Chemistry: [
      ['Avogadro number?', '6.022 × 10²³', '6.022 × 10²⁴', '6.022 × 10²²', '6.62 × 10⁻³⁴'],
      ['Atomic number of oxygen?', '8', '6', '7', '16'],
      ['Number of electrons in Na⁺?', '10', '11', '12', '9'],
      ['Shape of the methane (CH₄) molecule?', 'Tetrahedral', 'Planar', 'Linear', 'Pyramidal'],
      ['Noble gases belong to group?', '18', '1', '17', '16'],
      ['Molar mass of water (approx.)?', '18 g/mol', '16 g/mol', '20 g/mol', '10 g/mol'],
      ['IUPAC name of CH₃OH?', 'Methanol', 'Ethanol', 'Methanal', 'Methane'],
      ['Maximum electrons in the shell n = 2?', '8', '2', '18', '32'],
      ['Hybridisation of carbon in ethene (C₂H₄)?', 'sp²', 'sp', 'sp³', 'sp³d'],
      ['PV = constant at constant temperature is?', 'Boyle\'s law', 'Charles\' law', 'Gay-Lussac\'s law', 'Avogadro\'s law'],
      ['Lightest element?', 'Hydrogen', 'Helium', 'Lithium', 'Oxygen'],
      ['Which has the highest electronegativity?', 'Fluorine', 'Oxygen', 'Chlorine', 'Nitrogen']
    ],
    Biology: [
      ['Site of protein synthesis?', 'Ribosome', 'Nucleus', 'Lysosome', 'Golgi body'],
      ['Basic unit of classification?', 'Species', 'Genus', 'Family', 'Order'],
      ['Number of chromosomes in a human body cell?', '46', '23', '44', '48'],
      ['Pigment that captures light in photosynthesis?', 'Chlorophyll', 'Haemoglobin', 'Melanin', 'Carotene only'],
      ['Which organelle has its own DNA?', 'Mitochondria', 'Golgi body', 'Lysosome', 'Ribosome'],
      ['Father of taxonomy?', 'Carl Linnaeus', 'Darwin', 'Mendel', 'Pasteur'],
      ['Male reproductive part of a flower?', 'Stamen', 'Pistil', 'Sepal', 'Petal'],
      ['Haemoglobin is found in?', 'Red blood cells', 'White blood cells', 'Platelets', 'Plasma'],
      ['Enzyme in saliva that digests starch?', 'Amylase', 'Pepsin', 'Lipase', 'Trypsin'],
      ['Blood groups were discovered by?', 'Karl Landsteiner', 'Watson', 'Mendel', 'Fleming'],
      ['DNA stands for?', 'Deoxyribonucleic acid', 'Diribonucleic acid', 'Deoxyribose nitric acid', 'Dinucleic acid'],
      ['Cell division that forms gametes?', 'Meiosis', 'Mitosis', 'Budding', 'Binary fission']
    ]
  },
  12: {
    Physics: [
      ['SI unit of capacitance?', 'Farad', 'Henry', 'Weber', 'Tesla'],
      ['SI unit of magnetic flux?', 'Weber', 'Tesla', 'Henry', 'Farad'],
      ['Coulomb force between two charges varies as?', '1 / r²', '1 / r', 'r²', 'r'],
      ['Which phenomenon proves light is a transverse wave?', 'Polarisation', 'Reflection', 'Refraction', 'Diffraction'],
      ['Energy of a photon?', 'E = hν', 'E = h / ν', 'E = ν / h', 'E = hν²'],
      ['SI unit of inductance?', 'Henry', 'Farad', 'Weber', 'Ohm'],
      ['Speed of light in vacuum?', '3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁵ m/s'],
      ['Which does NOT obey Ohm\'s law?', 'Semiconductor diode', 'Copper wire', 'Nichrome wire', 'Aluminium wire'],
      ['A p-n junction diode conducts easily in?', 'Forward bias', 'Reverse bias', 'Both equally', 'Neither'],
      ['A transformer works on the principle of?', 'Mutual induction', 'Self induction', 'Photoelectric effect', 'Electrolysis'],
      ['Mass-energy relation?', 'E = mc²', 'E = mc', 'E = m / c²', 'E = m²c'],
      ['de Broglie wavelength?', 'λ = h / p', 'λ = hp', 'λ = p / h', 'λ = h / p²']
    ],
    Chemistry: [
      ['Unit of rate constant for a first-order reaction?', 's⁻¹', 'mol L⁻¹ s⁻¹', 'L mol⁻¹ s⁻¹', 'mol s⁻¹'],
      ['Functional group of alcohols?', '–OH', '–CHO', '–COOH', '–NH₂'],
      ['Which is a strong acid?', 'HCl', 'CH₃COOH', 'H₂CO₃', 'HCN'],
      ['IUPAC name of CH₃CHO?', 'Ethanal', 'Methanal', 'Ethanol', 'Propanal'],
      ['Silver mirror test for aldehydes uses?', 'Tollens\' reagent', 'Lucas reagent', 'Benedict\'s reagent only', 'Grignard reagent'],
      ['Atoms per unit cell in simple cubic lattice?', '1', '2', '4', '6'],
      ['Aluminium is extracted by?', 'Hall–Héroult process', 'Mond process', 'Bessemer process', 'Cupellation'],
      ['Which is a colligative property?', 'Osmotic pressure', 'Density', 'Viscosity', 'Surface tension'],
      ['Faraday constant (approx.)?', '96500 C/mol', '9650 C/mol', '965000 C/mol', '6500 C/mol'],
      ['Polymer of ethene?', 'Polythene', 'PVC', 'Teflon', 'Nylon'],
      ['Molecular formula of glucose?', 'C₆H₁₂O₆', 'C₁₂H₂₂O₁₁', 'C₆H₁₂O₅', 'C₅H₁₀O₅'],
      ['Catalyst used in Haber\'s process?', 'Iron', 'Platinum', 'Nickel', 'Vanadium pentoxide']
    ],
    Biology: [
      ['DNA replication is?', 'Semi-conservative', 'Conservative', 'Dispersive', 'Random'],
      ['Double helix model of DNA was given by?', 'Watson and Crick', 'Mendel', 'Darwin', 'Hershey and Chase'],
      ['Sex chromosomes of a human female?', 'XX', 'XY', 'XO', 'YY'],
      ['Fertilisation in humans occurs in the?', 'Fallopian tube', 'Uterus', 'Ovary', 'Vagina'],
      ['Hormone that lowers blood sugar?', 'Insulin', 'Glucagon', 'Adrenaline', 'Thyroxine'],
      ['HIV mainly attacks?', 'T-helper cells', 'Red blood cells', 'Platelets', 'Neurons'],
      ['Mendel experimented on?', 'Pea plant', 'Fruit fly', 'Mouse', 'Maize'],
      ['Technique to amplify DNA?', 'PCR', 'ELISA', 'Western blot', 'Chromatography'],
      ['Pioneer species on a bare rock?', 'Lichens', 'Shrubs', 'Trees', 'Grasses'],
      ['Bt cotton is resistant to?', 'Bollworm', 'Locusts', 'Aphids only', 'Rust fungus'],
      ['Functional unit of the kidney?', 'Nephron', 'Neuron', 'Alveolus', 'Villus'],
      ['Which gas is mainly responsible for global warming?', 'Carbon dioxide', 'Oxygen', 'Nitrogen', 'Helium']
    ]
  }
};

/* 🧮 MATHS: sawal khud bante hain (har baar naye numbers) */
const ri = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pk = a => a[ri(0, a.length - 1)];
const xp = k => k === 1 ? 'x' : k === 0 ? '1' : `x^${k}`;
const opts = (c, f = String) => {
  const s = new Set([c]); let g = 0;
  while (s.size < 4 && g++ < 80) { const v = c + pk([-3, -2, -1, 1, 2, 3, 4, 5, 10, -10]); if (c > 0 && v <= 0) continue; s.add(v); }
  return [f(c), ...[...s].filter(x => x !== c).slice(0, 3).map(f)];
};
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const nCr = (n, r) => { let x = 1; for (let i = 1; i <= r; i++) x = x * (n - r + i) / i; return Math.round(x); };
const MGEN = {
  9: [
    () => { const p = pk([5, 10, 20, 25, 50]), n = pk([40, 60, 80, 120, 200, 400]); return [`What is ${p}% of ${n}?`, ...opts(p * n / 100)]; },
    () => { const r = ri(5, 20); return [`Square root of ${r * r}?`, ...opts(r)]; },
    () => { const l = ri(4, 15), b = ri(3, 12); return [`Area of a rectangle of length ${l} cm and breadth ${b} cm (in cm²)?`, ...opts(l * b)]; },
    () => { const x = ri(2, 15), a = ri(2, 6), b = ri(1, 10); return [`Solve: ${a}x + ${b} = ${a * x + b}. What is x?`, ...opts(x)]; },
    () => { const a = ri(30, 80), b = ri(30, 80); return [`Two angles of a triangle are ${a}° and ${b}°. The third angle is?`, ...opts(180 - a - b, x => x + '°')]; },
    () => { const s = ri(3, 20); return [`Perimeter of a square of side ${s} cm (in cm)?`, ...opts(4 * s)]; },
    () => { const a = ri(6, 15), b = ri(2, 5); return [`Value of ${a}² − ${b}²?`, ...opts(a * a - b * b)]; }
  ],
  10: [
    () => { const a = ri(2, 10), d = ri(2, 7), n = ri(5, 15); return [`In an AP with first term ${a} and common difference ${d}, the ${n}th term is?`, ...opts(a + (n - 1) * d)]; },
    () => { const n = ri(10, 40); return [`Sum of the first ${n} natural numbers?`, ...opts(n * (n + 1) / 2)]; },
    () => { const k = ri(2, 12); return [`Distance between (0, 0) and (${3 * k}, ${4 * k})?`, ...opts(5 * k)]; },
    () => { const p = ri(1, 9), q = ri(1, 9); return [`Sum of the roots of x² − ${p + q}x + ${p * q} = 0?`, ...opts(p + q)]; },
    () => { const r = ri(2, 9), b = r + ri(1, 5), t = r + b, d = gcd(r, t), e = gcd(b, t); return [`A bag has ${r} red and ${b} blue balls. Probability of drawing a red ball?`, `${r / d}/${t / d}`, `${b / e}/${t / e}`, `${r}/${b}`, `${b}/${r}`]; },
    () => { const a = ri(2, 9); return [`If x = ${a}, the value of x² + 2x + 1?`, ...opts((a + 1) ** 2)]; }
  ],
  11: [
    () => { const a = ri(10, 40), b = ri(10, 40), c = ri(2, 9); return [`If n(A) = ${a}, n(B) = ${b} and n(A∩B) = ${c}, then n(A∪B)?`, ...opts(a + b - c)]; },
    () => { const n = ri(5, 9), r = ri(2, 3); let v = 1; for (let i = 0; i < r; i++) v *= n - i; return [`Value of ${n}P${r}?`, ...opts(v)]; },
    () => { const n = ri(5, 10), r = ri(2, 3); return [`Value of ${n}C${r}?`, ...opts(nCr(n, r))]; },
    () => { const k = ri(2, 8); return [`Value of log₂ ${2 ** k}?`, ...opts(k)]; },
    () => { const a = ri(2, 9), n = ri(3, 6); return [`d/dx of ${a}x^${n} is?`, `${a * n}${xp(n - 1)}`, `${a}${xp(n - 1)}`, `${a * n}${xp(n)}`, `${a * n + a}${xp(n - 1)}`]; },
    () => { const a = ri(1, 5), r = ri(2, 3), n = ri(4, 6); return [`Geometric progression with first term ${a} and ratio ${r}: the ${n}th term?`, ...opts(a * r ** (n - 1))]; }
  ],
  12: [
    () => { const a = ri(1, 9), b = ri(1, 9), c = ri(1, 9), d = ri(1, 9); return [`Determinant of the matrix [[${a}, ${b}], [${c}, ${d}]]?`, ...opts(a * d - b * c)]; },
    () => { const n = ri(1, 5); return [`∫ x^${n} dx = ?`, `x^${n + 1}/${n + 1} + C`, `x^${n}/${n} + C`, `${n + 1}x^${n} + C`, `x^${n + 1} + C`]; },
    () => { const a = ri(2, 9), n = ri(2, 5); return [`d/dx of ${a}x^${n} is?`, `${a * n}${xp(n - 1)}`, `${a}${xp(n - 1)}`, `${a * n}${xp(n)}`, `${a * n + a}${xp(n - 1)}`]; },
    () => { const v = () => ri(1, 5), a = [v(), v(), v()], b = [v(), v(), v()]; return [`Dot product of vectors (${a}) and (${b})?`, ...opts(a[0] * b[0] + a[1] * b[1] + a[2] * b[2])]; },
    () => { const p = ri(2, 5), q = ri(p + 1, 7); return [`If P(A) = 1/${p} and P(B) = 1/${q} are independent events, then P(A∩B)?`, `1/${p * q}`, `1/${p + q}`, `1/${p}`, `${p}/${q}`]; }
  ]
};

/* ============================================================
   TABLE SE BANNE WALE SAWAL
   Data ek table mein likha hai, usse har baar naye sawal + naye galat options khud bante hain.
   Naya data jodna ho to bas table mein ek line ['Naam', 'Jawab'] jod do.
   ============================================================ */
const _sh = a => { const x = [...a]; for (let i = x.length - 1; i > 0; i--) { const j = ri(0, i); [x[i], x[j]] = [x[j], x[i]]; } return x; };
const three = a => _sh([...new Set(a)]).slice(0, 3);
/* rows: [A, B]. fq(A) = sawal jiska jawab B. rq(B) = sawal jiska jawab A (zaroori nahi). */
const T = (rows, fq, rq) => {
  const f = () => { const r = pk(rows); return [fq(r[0]), r[1], ...three(rows.map(x => x[1]).filter(b => b !== r[1]))]; };
  const g = () => { const r = pk(rows); return [rq(r[1]), r[0], ...three(rows.filter(x => x[1] !== r[1]).map(x => x[0]))]; };
  return rq ? [f, g] : [f];
};
const cap = s => s[0].toUpperCase() + s.slice(1);
const lc = s => /^(Golgi|DNA|PCR)/.test(s) ? s : s.toLowerCase();

const UNITS_B = [['Force', 'newton'], ['Work', 'joule'], ['Power', 'watt'], ['Pressure', 'pascal'], ['Frequency', 'hertz'], ['Electric current', 'ampere'], ['Electric charge', 'coulomb'], ['Potential difference', 'volt'], ['Electrical resistance', 'ohm'], ['Temperature', 'kelvin'], ['Mass', 'kilogram'], ['Length', 'metre'], ['Time', 'second']];
const UNITS_A = [...UNITS_B, ['Capacitance', 'farad'], ['Inductance', 'henry'], ['Magnetic flux', 'weber'], ['Magnetic field strength', 'tesla'], ['Energy', 'joule'], ['Amount of substance', 'mole'], ['Luminous intensity', 'candela']];
const unitQ = rows => T(rows, a => `SI unit of ${a.toLowerCase()}?`, b => `${cap(b)} is the SI unit of?`);

const FORM = [['speed', 'distance / time'], ["Newton's second law", 'F = ma'], ["Ohm's law", 'V = IR'], ['kinetic energy', '½mv²'], ['density', 'mass / volume'], ['the first equation of motion', 'v = u + at'], ['the second equation of motion', 's = ut + ½at²'], ['pressure', 'force / area'], ['power', 'work / time'], ['work done by a force', 'W = F d cosθ'], ['momentum', 'p = mv'], ['centripetal force', 'mv² / r'], ["Newton's law of gravitation", 'F = Gm₁m₂ / r²'], ["Coulomb's law", 'F = kq₁q₂ / r²'], ['capacitance', 'C = Q / V'], ['electric power', 'P = VI'], ['the lens formula', '1/v − 1/u = 1/f'], ['the mirror formula', '1/v + 1/u = 1/f'], ["Snell's law", 'n₁ sin i = n₂ sin r'], ['the photoelectric equation', 'hν = φ + KEmax'], ['gravitational potential energy', 'mgh'], ['the energy of a photon', 'E = hν'], ['the de Broglie wavelength', 'λ = h / p'], ['mass-energy equivalence', 'E = mc²']];
const FORM_B = FORM.slice(0, 9).concat([FORM[20]]);
const formQ = rows => T(rows, a => `Formula for ${a}?`, b => `Which of these is given by ${b}?`);
const CONST = [['Speed of light in vacuum', '3 × 10⁸ m/s'], ['Acceleration due to gravity on Earth', '9.8 m/s²'], ["Planck's constant", '6.626 × 10⁻³⁴ J s'], ['Charge of an electron', '1.6 × 10⁻¹⁹ C'], ['Universal gravitational constant G', '6.67 × 10⁻¹¹ N m² kg⁻²'], ['Avogadro number', '6.022 × 10²³ per mole'], ['Mass of an electron', '9.1 × 10⁻³¹ kg'], ["Boltzmann's constant", '1.38 × 10⁻²³ J/K']];
const constQ = T(CONST, a => `Approximate value of: ${a}?`, b => `${b} is the approximate value of?`);

const SCI_PHY = [['discovered the nucleus of an atom', 'Rutherford'], ['discovered the electron', 'J. J. Thomson'], ['discovered the neutron', 'James Chadwick'], ['gave the three laws of motion', 'Isaac Newton'], ['gave the principle of buoyancy', 'Archimedes'], ['gave the law V = IR', 'Georg Ohm'], ['discovered electromagnetic induction', 'Michael Faraday'], ['proposed the theory of relativity', 'Albert Einstein'], ['gave the laws of planetary motion', 'Kepler'], ['proposed the heliocentric model of the solar system', 'Copernicus'], ['discovered X-rays', 'Wilhelm Röntgen'], ['discovered radioactivity', 'Henri Becquerel']];
const SCI_CHEM = [['proposed the atomic theory of matter', 'John Dalton'], ['proposed the first periodic table', 'Mendeleev'], ['gave the law relating the pressure and volume of a gas', 'Robert Boyle'], ['proposed that equal volumes of gases contain equal numbers of molecules', 'Avogadro'], ['gave the law of conservation of mass', 'Lavoisier'], ['proposed the model of atom with energy levels', 'Niels Bohr']];
const SCI_BIO = [['first observed and named the cell', 'Robert Hooke'], ['discovered the nucleus in the cell', 'Robert Brown'], ['gave the laws of inheritance', 'Gregor Mendel'], ['proposed the theory of natural selection', 'Charles Darwin'], ['proposed the double helix model of DNA', 'Watson and Crick'], ['discovered penicillin', 'Alexander Fleming'], ['developed the smallpox vaccine', 'Edward Jenner'], ['discovered the ABO blood groups', 'Karl Landsteiner'], ['discovered the circulation of blood', 'William Harvey'], ['developed the rabies vaccine', 'Louis Pasteur']];
const sciQ = rows => T(rows, a => `Who ${a}?`);

const EL = [[1, 'H', 'Hydrogen'], [2, 'He', 'Helium'], [3, 'Li', 'Lithium'], [4, 'Be', 'Beryllium'], [5, 'B', 'Boron'], [6, 'C', 'Carbon'], [7, 'N', 'Nitrogen'], [8, 'O', 'Oxygen'], [9, 'F', 'Fluorine'], [10, 'Ne', 'Neon'], [11, 'Na', 'Sodium'], [12, 'Mg', 'Magnesium'], [13, 'Al', 'Aluminium'], [14, 'Si', 'Silicon'], [15, 'P', 'Phosphorus'], [16, 'S', 'Sulphur'], [17, 'Cl', 'Chlorine'], [18, 'Ar', 'Argon'], [19, 'K', 'Potassium'], [20, 'Ca', 'Calcium'], [21, 'Sc', 'Scandium'], [22, 'Ti', 'Titanium'], [23, 'V', 'Vanadium'], [24, 'Cr', 'Chromium'], [25, 'Mn', 'Manganese'], [26, 'Fe', 'Iron'], [27, 'Co', 'Cobalt'], [28, 'Ni', 'Nickel'], [29, 'Cu', 'Copper'], [30, 'Zn', 'Zinc'], [35, 'Br', 'Bromine'], [47, 'Ag', 'Silver'], [50, 'Sn', 'Tin'], [53, 'I', 'Iodine'], [74, 'W', 'Tungsten'], [78, 'Pt', 'Platinum'], [79, 'Au', 'Gold'], [80, 'Hg', 'Mercury'], [82, 'Pb', 'Lead'], [92, 'U', 'Uranium']];
const elQ = list => [
  ...T(list.map(e => [e[2], e[1]]), a => `Chemical symbol of ${a.toLowerCase()}?`, b => `Which element has the symbol ${b}?`),
  ...T(list.map(e => [e[2], String(e[0])]), a => `Atomic number of ${a.toLowerCase()}?`, b => `Which element has atomic number ${b}?`)
];
const COMPOUNDS = [['Water', 'H₂O'], ['Carbon dioxide', 'CO₂'], ['Common salt', 'NaCl'], ['Baking soda', 'NaHCO₃'], ['Caustic soda', 'NaOH'], ['Quicklime', 'CaO'], ['Slaked lime', 'Ca(OH)₂'], ['Limestone', 'CaCO₃'], ['Ammonia', 'NH₃'], ['Hydrochloric acid', 'HCl'], ['Sulphuric acid', 'H₂SO₄'], ['Nitric acid', 'HNO₃'], ['Glucose', 'C₆H₁₂O₆'], ['Hydrogen peroxide', 'H₂O₂'], ['Ozone', 'O₃'], ['Bleaching powder', 'CaOCl₂'], ['Methane', 'CH₄'], ['Ethanol', 'C₂H₅OH'], ['Acetic acid', 'CH₃COOH'], ['Washing soda', 'Na₂CO₃·10H₂O']];
const compQ = T(COMPOUNDS, a => `Chemical formula of ${a.toLowerCase()}?`, b => `${b} is the formula of?`);
const HC = [['CH₄', 'methane'], ['C₂H₆', 'ethane'], ['C₃H₈', 'propane'], ['C₄H₁₀', 'butane'], ['C₅H₁₂', 'pentane'], ['C₆H₁₄', 'hexane'], ['C₂H₄', 'ethene'], ['C₂H₂', 'ethyne'], ['C₂H₅OH', 'ethanol'], ['CH₃OH', 'methanol'], ['CH₃COOH', 'ethanoic acid']];
const hcQ = T(HC, a => `Name of the compound ${a}?`, b => `Formula of ${b}?`);
const GRP = [['Group 1', 'alkali metals'], ['Group 2', 'alkaline earth metals'], ['Group 17', 'halogens'], ['Group 18', 'noble gases']];
const grpQ = T(GRP, a => `${a} of the periodic table is known as?`, b => `${cap(b)} belong to which group?`);
const FG = [['Alcohol', '–OH'], ['Aldehyde', '–CHO'], ['Carboxylic acid', '–COOH'], ['Amine', '–NH₂'], ['Ketone', '>C=O (carbonyl)'], ['Ether', 'C–O–C'], ['Ester', '–COO– (ester linkage)']];
const fgQ = T(FG, a => `Functional group of ${a.toLowerCase()}s?`, b => `The functional group ${b} is present in?`);
const PROC = [['Haber process', 'manufacture of ammonia'], ['Contact process', 'manufacture of sulphuric acid'], ['Ostwald process', 'manufacture of nitric acid'], ['Hall–Héroult process', 'extraction of aluminium'], ['Solvay process', 'manufacture of sodium carbonate'], ['Mond process', 'purification of nickel']];
const procQ = T(PROC, a => `The ${a} is used for?`, b => `Which process is used for ${b}?`);
const GASL = [["Boyle's law", 'P ∝ 1/V at constant temperature'], ["Charles' law", 'V ∝ T at constant pressure'], ["Gay-Lussac's law", 'P ∝ T at constant volume'], ["Avogadro's law", 'equal volumes of gases have equal numbers of molecules']];
const gasQ = T(GASL, a => `${a} states that?`, b => `Which law states: ${b}?`);

const ORG = [['Mitochondria', 'releases energy (ATP) for the cell'], ['Ribosome', 'makes proteins'], ['Nucleus', 'controls cell activities and holds DNA'], ['Chloroplast', 'carries out photosynthesis'], ['Lysosome', 'digests waste material'], ['Cell wall', 'gives shape and protection to plant cells'], ['Cell membrane', 'controls what enters and leaves the cell'], ['Golgi apparatus', 'packs and dispatches materials'], ['Vacuole', 'stores water and wastes'], ['Endoplasmic reticulum', 'transports materials inside the cell']];
const orgQ = T(ORG, a => `Main function of the ${lc(a)}?`, b => `Which cell part ${b}?`);
const NUTR = [['Vitamin A', 'night blindness'], ['Vitamin B1', 'beri-beri'], ['Vitamin C', 'scurvy'], ['Vitamin D', 'rickets'], ['Vitamin K', 'delayed blood clotting'], ['Vitamin B12', 'pernicious anaemia'], ['Iodine', 'goitre'], ['Iron', 'anaemia']];
const nutQ = T(NUTR, a => `Deficiency of ${a} causes?`, b => `${cap(b)} is caused by the deficiency of?`);
const ORGAN = [['Heart', 'pumps blood'], ['Lungs', 'exchange of oxygen and carbon dioxide'], ['Kidneys', 'filter blood and remove urea'], ['Liver', 'produces bile'], ['Small intestine', 'absorbs digested food'], ['Brain', 'controls body activities'], ['Stomach', 'churns food and digests proteins']];
const organQ = T(ORGAN, a => `Main function of the ${a.toLowerCase()}?`, b => `Which organ's job is: ${b}?`);
const PLANT = [['Xylem', 'transports water and minerals'], ['Phloem', 'transports food'], ['Stomata', 'allow gas exchange and transpiration'], ['Roots', 'absorb water and minerals'], ['Chlorophyll', 'traps sunlight for photosynthesis']];
const plantQ = T(PLANT, a => `Function of ${lc(a)} in plants?`, b => `Which plant part or pigment: ${b}?`);
const DIS = [['Malaria', 'a protozoan (Plasmodium)'], ['Tuberculosis', 'a bacterium'], ['Polio', 'a virus'], ['Ringworm', 'a fungus'], ['Dengue', 'a virus'], ['Cholera', 'a bacterium'], ['AIDS', 'HIV, a virus']];
const disQ = T(DIS, a => `${a} is caused by?`);
const HORM = [['Pancreas', 'insulin'], ['Thyroid gland', 'thyroxine'], ['Adrenal gland', 'adrenaline'], ['Pituitary gland', 'growth hormone'], ['Testes', 'testosterone'], ['Ovary', 'oestrogen']];
const hormQ = T(HORM, a => `Which hormone is secreted by the ${a.toLowerCase()}?`, b => `${cap(b)} is secreted by the?`);
const MITO = [['Prophase', 'chromosomes condense and become visible'], ['Metaphase', 'chromosomes line up at the equator of the cell'], ['Anaphase', 'sister chromatids separate and move to opposite poles'], ['Telophase', 'nuclear envelope re-forms around each set of chromosomes']];
const mitoQ = T(MITO, a => `What happens in ${a} of mitosis?`, b => `In which phase of mitosis do ${b}?`);
const GENE = [['Down syndrome', 'an extra copy of chromosome 21'], ['Turner syndrome', 'absence of one X chromosome (XO)'], ['Klinefelter syndrome', 'an extra X chromosome (XXY)'], ['Sickle-cell anaemia', 'a mutation in the haemoglobin gene'], ['Haemophilia', 'a defective gene on the X chromosome'], ['Phenylketonuria', 'lack of the enzyme phenylalanine hydroxylase']];
const geneQ = T(GENE, a => `${a} is caused by?`);
const BIOT = [['Restriction enzyme', 'cuts DNA at specific sites'], ['DNA ligase', 'joins DNA fragments'], ['PCR', 'makes many copies of a DNA segment'], ['Gel electrophoresis', 'separates DNA fragments by size'], ['Plasmid', 'a vector used to carry foreign DNA']];
const biotQ = T(BIOT, a => `What does ${lc(a)} do or mean?`, b => `Which biotechnology tool or term: ${b}?`);

const GEOM = [['Area of a triangle', '½ × base × height'], ['Area of a circle', 'πr²'], ['Circumference of a circle', '2πr'], ['Volume of a cylinder', 'πr²h'], ['Volume of a cone', '⅓πr²h'], ['Volume of a sphere', '4/3 πr³'], ['Surface area of a sphere', '4πr²'], ['Curved surface area of a cone', 'πrl'], ['Area of a trapezium', '½ × (a + b) × h'], ['Volume of a cube', 'a³'], ['Total surface area of a cube', '6a²'], ['Area of an equilateral triangle', '√3/4 × a²']];
const geomQ = T(GEOM, a => `${a}?`, b => `Which of these equals ${b}?`);
const TRIG = [['sin 30°', '1/2'], ['cos 60°', '1/2'], ['tan 45°', '1'], ['sin 90°', '1'], ['cos 0°', '1'], ['sin 0°', '0'], ['cos 90°', '0'], ['sin 45°', '1/√2'], ['cos 30°', '√3/2'], ['tan 60°', '√3'], ['tan 30°', '1/√3'], ['sin 60°', '√3/2']];
const trigQ = T(TRIG, a => `Value of ${a}?`);
const CALC = [['Derivative of sin x', 'cos x'], ['Derivative of cos x', '−sin x'], ['Derivative of eˣ', 'eˣ'], ['Derivative of ln x', '1/x'], ['Derivative of tan x', 'sec² x'], ['∫ cos x dx', 'sin x + C'], ['∫ sin x dx', '−cos x + C'], ['∫ eˣ dx', 'eˣ + C'], ['∫ (1/x) dx', 'ln|x| + C'], ['∫ sec² x dx', 'tan x + C']];
const calcQ = T(CALC, a => `${a} = ?`);
const IDEN = [['sin 2θ', '2 sin θ cos θ'], ['1 + tan²θ', 'sec²θ'], ['1 + cot²θ', 'cosec²θ'], ['sin(A + B)', 'sin A cos B + cos A sin B'], ['cos(A + B)', 'cos A cos B − sin A sin B'], ['sin²θ + cos²θ', '1']];
const idenQ = T(IDEN, a => `${a} = ?`);

/* nayi Maths generators (numbers har baar naye) */
const frac = (n, d) => { const g = gcd(n, d); return `${n / g}/${d / g}`; };
MGEN[9].push(
  () => { const p = pk([1000, 2000, 5000, 10000]), r = pk([4, 5, 8, 10]), t = ri(2, 5); return [`Simple interest on ₹${p} at ${r}% per year for ${t} years (in ₹)?`, ...opts(p * r * t / 100)]; },
  () => { const m = ri(10, 40), off = _sh([-4, -1, 0, 2, 3]); return [`Mean of ${off.map(o => m + o).join(', ')}?`, ...opts(m)]; },
  () => { const g = pk([2, 3, 4, 5, 6]), k1 = pk([2, 3, 4]), k2 = pk([5, 7]); return pk([0, 1]) ? [`HCF of ${g * k1} and ${g * k2}?`, ...opts(g)] : [`LCM of ${g * k1} and ${g * k2}?`, ...opts(g * k1 * k2)]; },
  () => { const a = ri(2, 12); return [`Volume of a cube of side ${a} cm (in cm³)?`, ...opts(a ** 3)]; },
  () => { const k = ri(1, 6); return [`Circumference of a circle of radius ${7 * k} cm (π = 22/7), in cm?`, ...opts(44 * k)]; },
  () => { const a = ri(3, 12), b = ri(2, 9); return [`Value of ${a}² + ${b}²?`, ...opts(a * a + b * b)]; }
);
MGEN[10].push(
  () => { const a = ri(2, 9), d = ri(2, 6), n = 2 * ri(3, 8); return [`Sum of the first ${n} terms of an AP with a = ${a}, d = ${d}?`, ...opts(n * (2 * a + (n - 1) * d) / 2)]; },
  () => { const a = ri(1, 6), b = ri(1, 6), c = ri(1, 6), d = ri(1, 6), ok = `(${a + c}, ${b + d})`; return [`Midpoint of (${2 * a}, ${2 * b}) and (${2 * c}, ${2 * d})?`, ok, `(${a + c + 1}, ${b + d})`, `(${a + c}, ${b + d + 2})`, `(${a + c + 2}, ${b + d + 1})`]; },
  () => { const m = ri(1, 5); return [`Volume of a cone of radius 7 cm and height ${3 * m} cm (π = 22/7), in cm³?`, ...opts(154 * m)]; },
  () => { const k = ri(1, 4); return [`Surface area of a sphere of radius ${7 * k} cm (π = 22/7), in cm²?`, ...opts(616 * k * k)]; },
  () => { const k = ri(1, 4), f = 6 - k; return [`A die is thrown once. Probability of getting a number greater than ${k}?`, frac(f, 6), ...three([1, 2, 3, 4, 5].filter(n => n !== f).map(n => frac(n, 6)))]; }
);
MGEN[11].push(
  () => { const n = ri(3, 9); return [`Number of subsets of a set with ${n} elements?`, ...opts(2 ** n)]; },
  () => { const n = ri(6, 10), r = ri(2, 3); let v = 1; for (let i = 0; i < r; i++) v *= n - i; return [`Value of ${n}! / ${n - r}!?`, ...opts(v)]; },
  () => { const a = ri(1, 4), r = ri(2, 3), n = ri(3, 5); return [`Sum of the first ${n} terms of a GP with a = ${a}, r = ${r}?`, ...opts(a * (r ** n - 1) / (r - 1))]; },
  () => { const m = ri(1, 6), d = ri(1, 5), a = ri(0, 5), b = ri(0, 5); return [`Slope of the line through (${a}, ${b}) and (${a + d}, ${b + m * d})?`, ...opts(m)]; }
);
MGEN[12].push(
  () => { const x = ri(3, 6), y = ri(3, 6), z = ri(1, 2); return [`P(A) = ${x / 10}, P(B) = ${y / 10}, P(A∩B) = ${z / 10}. Then P(A∪B)?`, ...opts(x + y - z, v => (v / 10).toFixed(1))]; },
  () => { const a = ri(2, 6), b = ri(1, 9), c = ri(1, 5); return [`If f(x) = ${a}x² + ${b}x, then f′(${c}) = ?`, ...opts(2 * a * c + b)]; },
  () => { const k = ri(2, 9); return [`∫₀^${k} 2x dx = ?`, ...opts(k * k)]; },
  () => { const k = ri(1, 9); return [`Magnitude of the vector (${3 * k}, ${4 * k}, 0)?`, ...opts(5 * k)]; }
);

/* ===== GEN: har class aur subject ke liye sawal banane wale functions ===== */
const GEN = { 9: {}, 10: {}, 11: {}, 12: {} };
const SCI_ALL = [...SCI_PHY, ...SCI_CHEM, ...SCI_BIO];
GEN[9].Maths = [...MGEN[9], ...geomQ];
GEN[9].Science = [...unitQ(UNITS_B), ...formQ(FORM_B), ...elQ(EL.slice(0, 20)), ...orgQ, ...plantQ, ...disQ, ...sciQ([...SCI_PHY.slice(0, 5), ...SCI_CHEM.slice(0, 2), ...SCI_BIO.slice(0, 2)])];
GEN[10].Maths = [...MGEN[10], ...geomQ, ...trigQ];
GEN[10].Science = [...unitQ(UNITS_B), ...formQ(FORM.slice(0, 11)), ...elQ(EL.slice(0, 30)), ...compQ, ...hcQ, ...grpQ, ...orgQ, ...nutQ, ...organQ, ...hormQ, ...disQ, ...sciQ(SCI_ALL)];
GEN[11].Maths = [...MGEN[11], ...trigQ, ...idenQ, ...calcQ.slice(0, 2)];
GEN[11].Physics = [...unitQ(UNITS_A), ...formQ(FORM), ...constQ, ...sciQ(SCI_PHY)];
GEN[11].Chemistry = [...elQ(EL), ...compQ, ...hcQ, ...grpQ, ...gasQ, ...fgQ, ...sciQ([...SCI_CHEM, ...SCI_PHY.slice(0, 3)])];
GEN[11].Biology = [...orgQ, ...nutQ, ...organQ, ...plantQ, ...mitoQ, ...hormQ, ...sciQ(SCI_BIO)];
GEN[12].Maths = [...MGEN[12], ...calcQ, ...idenQ];
GEN[12].Physics = [...unitQ(UNITS_A), ...formQ(FORM), ...constQ, ...sciQ(SCI_PHY)];
GEN[12].Chemistry = [...elQ(EL), ...compQ, ...hcQ, ...fgQ, ...procQ, ...gasQ, ...sciQ(SCI_CHEM)];
GEN[12].Biology = [...geneQ, ...biotQ, ...hormQ, ...disQ, ...mitoQ, ...nutQ, ...sciQ(SCI_BIO)];
