const EMOTION_CATEGORIES = [
  {
    name: "Happy",
    items: [
      ["Interested", "מעוניין"], ["Curious", "סקרן"], ["Inspired", "מלא השראה"],
      ["Hopeful", "מלא תקווה"], ["Confident", "בטוח בעצמו"], ["Successful", "מצליח"],
      ["Respected", "מוערך"], ["Valued", "יקר ערך"], ["Loving", "אוהב"],
      ["Thankful", "אסיר תודה"], ["Joyful", "עליז"], ["Content", "שבע רצון"],
      ["Free", "חופשי"], ["Playful", "שובב"], ["Courageous", "אמיץ"],
      ["Creative", "יצירתי"], ["Proud", "גאה"], ["Optimistic", "אופטימי"],
    ],
  },
  {
    name: "Sad",
    items: [
      ["Lonely", "בודד"], ["Isolated", "מבודד"], ["Abandoned", "נטוש"],
      ["Vulnerable", "פגיע"], ["Fragile", "שביר"], ["Despairing", "מיואש"],
      ["Grieving", "שרוי באבל"], ["Powerless", "חסר אונים"], ["Guilty", "אשם"],
      ["Ashamed", "מתבייש"], ["Remorseful", "מתחרט"], ["Depressed", "מדוכא"],
      ["Empty", "ריק"], ["Inferior", "נחות"], ["Hurt", "פגוע"],
      ["Disappointed", "מאוכזב"], ["Embarrassed", "נבוך"],
    ],
  },
  {
    name: "Disgusted",
    items: [
      ["Disapproving", "מגנה"], ["Judgmental", "שיפוטי"], ["Appalled", "נחרד"],
      ["Revolted", "סולד"], ["Nauseated", "בחילה"], ["Detestable", "מתועב"],
      ["Repelled", "נדחה"], ["Hesitant", "מהסס"], ["Horrified", "אחוז אימה"],
      ["Avoidant", "נמנע"],
    ],
  },
  {
    name: "Angry",
    items: [
      ["Betrayed", "נבגד"], ["Resentful", "רוחש טינה"], ["Humiliated", "מושפל"],
      ["Disrespected", "לא מכובד"], ["Ridiculed", "מבוזה"], ["Bitter", "מריר"],
      ["Indignant", "נזעם"], ["Violated", "מופר"], ["Mad", "זועם"],
      ["Furious", "רותח מזעם"], ["Jealous", "מקנא"], ["Provoked", "מגורה"],
      ["Hostile", "עוין"], ["Frustrated", "מתוסכל"], ["Infuriated", "משתולל"],
      ["Annoyed", "מוטרד"], ["Withdrawn", "מסתגר"], ["Numb", "קהה רגש"],
      ["Skeptical", "ספקן"], ["Dismissive", "מזלזל"],
    ],
  },
  {
    name: "Fearful",
    items: [
      ["Scared", "מפוחד"], ["Helpless", "חסר ישע"], ["Frightened", "נבהל"],
      ["Anxious", "חרד"], ["Overwhelmed", "המום"], ["Worried", "מודאג"],
      ["Insecure", "חסר ביטחון"], ["Inadequate", "לא מספיק טוב"], ["Weak", "חלש"],
      ["Worthless", "חסר ערך"], ["Insignificant", "חסר משמעות"], ["Rejected", "דחוי"],
      ["Excluded", "מוחרג"], ["Persecuted", "נרדף"], ["Threatened", "מאוים"],
      ["Nervous", "עצבני"], ["Exposed", "חשוף"],
    ],
  },
  {
    name: "Stressed",
    items: [
      ["Bored", "משועמם"], ["Indifferent", "אדיש"], ["Apathetic", "חסר עניין"],
      ["Busy", "עסוק"], ["Pressured", "תחת לחץ"], ["Rushed", "ממהר"],
      ["Stressed", "בלחץ"], ["Out of control", "חסר שליטה"], ["Tired", "עייף"],
      ["Sleepy", "מנומנם"], ["Unfocused", "לא מרוכז"],
    ],
  },
  {
    name: "Surprised",
    items: [
      ["Startled", "נבהל בפתאומיות"], ["Shocked", "בהלם"], ["Dismayed", "נסער"],
      ["Confused", "מבולבל"], ["Perplexed", "תמה"], ["Disillusioned", "מפוכח"],
      ["Amazed", "המום לטובה"], ["Astonished", "נדהם"], ["Awestruck", "נפעם"],
      ["Excited", "נרגש"], ["Eager", "להוט"], ["Energetic", "נמרץ"],
    ],
  },
];

const EMOTION_MAP = new Map(EMOTION_CATEGORIES.flatMap((c) => c.items));

const COLOR_PALETTE = ["#3ecf8e", "#4fa8e0", "#ef6fa0", "#f2b134", "#9b7fe0", "#3fc1d6", "#ef7d5b", "#e05656"];
const BASIC_EMOTION_HEBREW = {
  Happy: "שמח",
  Sad: "עצוב",
  Disgusted: "נגעל",
  Angry: "כועס",
  Fearful: "מפחד",
  Stressed: "לחוץ",
  Surprised: "מופתע"
};

function buildMixedEmotions() {
  const cols = EMOTION_CATEGORIES.map((c) => [
    [c.name, BASIC_EMOTION_HEBREW[c.name]],
    ...c.items.filter(([emotion]) => emotion !== c.name),
  ]);
  const mixed = [];
  let i = 0;
  while (cols.some((c) => c.length)) {
    const col = cols[i % cols.length];
    if (col.length) mixed.push(col.shift());
    i++;
  }
  return mixed.map(([en, he], idx) => ({ en, he, color: COLOR_PALETTE[idx % COLOR_PALETTE.length] }));
}

const MIXED_EMOTIONS = buildMixedEmotions();
const EMOTION_COLOR = new Map(MIXED_EMOTIONS.map((e) => [e.en, e.color]));

const DISTORTIONS = [
  ["All-or-Nothing Thinking", "Seeing things in black-and-white categories, with no middle ground."],
  ["Overgeneralization", "Seeing a single negative event as part of a never-ending pattern."],
  ["Mental Filter", "Dwelling on a single negative detail while ignoring everything positive."],
  ["Discounting the Positive", "Insisting your positive qualities or achievements don't count."],
  ["Mind Reading", "Assuming you know what others are thinking without checking."],
  ["Fortune Telling", "Predicting that things will turn out badly."],
  ["Catastrophizing", "Blowing things out of proportion, expecting the worst-case outcome."],
  ["Minimization", "Shrinking the importance of good things that happen."],
  ["Emotional Reasoning", "Assuming your negative feelings reflect the way things really are."],
  ["Should Statements", "Criticizing yourself or others with \"shoulds,\" \"musts,\" or \"oughts.\""],
  ["Labeling", "Attaching a global negative label to yourself or others instead of describing the behavior."],
  ["Personalization", "Blaming yourself for something you weren't entirely responsible for."],
  ["Blame", "Blaming other people or circumstances, overlooking your own part."],
];

const DISTORTION_HEBREW = {
  "All-or-Nothing Thinking": ["חשיבה של הכול או כלום", "ראיית מצבים בקיצוניות, בלי להכיר באפשרויות שבאמצע."],
  Overgeneralization: ["הכללת יתר", "הסקת מסקנה כללית מאירוע שלילי אחד, כאילו הוא מייצג דפוס קבוע."],
  "Mental Filter": ["מסנן מנטלי", "התמקדות בפרט שלילי אחד והתעלמות מהדברים החיוביים או החשובים האחרים."],
  "Discounting the Positive": ["ביטול החיובי", "הקטנה או דחייה של הישגים ותכונות חיוביות כאילו הם אינם נחשבים."],
  "Mind Reading": ["קריאת מחשבות", "הנחה שאתה יודע מה אחרים חושבים או מרגישים, בלי לבדוק איתם."],
  "Fortune Telling": ["חיזוי העתיד", "ציפייה שהדברים יסתיימו בצורה שלילית, כאילו התוצאה כבר ידועה."],
  Catastrophizing: ["חשיבה קטסטרופלית", "העצמת הסכנה או הקושי וציפייה לתוצאה הגרועה ביותר האפשרית."],
  Minimization: ["הקטנה", "הפחתה מחשיבותם של דברים טובים, של הצלחות או של רגשות לגיטימיים."],
  "Emotional Reasoning": ["היגיון רגשי", "הנחה שאם אתה מרגיש משהו, הוא בהכרח משקף את המציאות."],
  "Should Statements": ["משפטי 'צריך'", "ביקורת על עצמך או על אחרים באמצעות ציפיות נוקשות כמו 'צריך', 'חייב' או 'אסור'."],
  Labeling: ["תיוג", "הדבקת תווית שלילית כוללת לאדם במקום לתאר התנהגות או מצב מסוים."],
  Personalization: ["ייחוס אישי", "האשמת עצמך באירוע שלא היית אחראי לו לחלוטין או שלא היה בשליטתך."],
  Blame: ["האשמה", "האשמת אחרים או הנסיבות תוך התעלמות מהחלק שלך ומהאפשרות להשפיע על המצב."]
};

const STORAGE_KEY = "cbtEntries";
const LANG_KEY = "cbtLanguage";
const FEELINGS_DRAFT_KEY = "cbtFeelingsDraft";
const CBT_DRAFT_KEY = "cbtDraft";
const APP_DATA_KEYS = [STORAGE_KEY, LANG_KEY, FEELINGS_DRAFT_KEY, CBT_DRAFT_KEY, "cbtNeedsDraft", "cbtNeedsReturnToStep"];
const totalSteps = 7;
let currentStep = 1;
let followedUp = false;

const TEXT = {
  en: {
    appSubtitle: "Work through a difficult thought, step by step.",
    step1Title: "The Situation",
    step1Subtitle: "What happened?",
    title: "Title",
    optionalText: "(optional)",
    date: "Date",
    situation: "Situation or event",
    situationHint: "Where were you, who was there, what happened?",
    titlePlaceholder: "e.g. Meeting with my manager",
    situationPlaceholder: "Describe the situation",
    step2Title: "How You Felt",
    step2Subtitle: "Select every emotion that applies, then set its intensity.",
    step3Title: "Thoughts",
    step3Subtitle: "Look closer at what went through your mind.",
    physicalSensations: "Physical sensations",
    physicalSensationsHint: "What did you notice in your body?",
    automaticThought: "Unhelpful thought",
    automaticThoughtPlaceholder: "e.g. I'll never be good enough at my job",
    beliefLevel: "How much do you believe it?",
    levelLabel: "Level",
    interpretation: "Interpretation",
    interpretationHint: "How did you interpret what happened? What meaning did it have for you?",
    pastExperiences: "Past experiences",
    pastExperiencesHint: "What past experiences influence this interpretation?",
    beliefs: "Underlying beliefs",
    consequence: "Consequence / behavior",
    consequenceHint: "What did you do (or want to do) as a result?",
    step4Title: "Challenge",
    step4Subtitle: "Question the evidence, and spot any thinking traps.",
    evidenceFor: "Evidence that supports the thought",
    evidenceAgainst: "Evidence against the thought",
    cognitiveDistortions: "Cognitive distortions",
    distortionsHint: "Select any thinking traps you notice in this thought.",
    step5Title: "Changing",
    step5Subtitle: "Create a balanced, realistic alternative thought.",
    balancedThought: "Balanced alternative thought",
    balancedThoughtPlaceholder: "e.g. I'm still learning and improving. One mistake doesn't define my abilities",
    newEmotionBehavior: "New emotion & behavior",
    newEmotionBehaviorHint: "Holding the balanced thought, how do you feel and act now?",
    nextAction: "What will you do differently?",
    step6Title: "Changed",
    step6Subtitle: "Notice how you feel and respond after the change.",
    exerciseReview: "Exercise Review",
    savedOnDevice: "Saved on this device.",
    thoughtRecord: "Thought Record",
    back: "Back",
    next: "Next",
    historyLink: "View past entries →",
    needsLink: "Feelings & needs flow →",
    needsTitle: "Feelings & Needs",
    followUp: "❤ Follow Up",
    seeResults: "See Results",
    feelingsElaborate: "Feelings elaborate",
    stepNames: ["Situation", "Feelings", "Feelings elaborate", "Thoughts", "Challenge", "Changing", "Changed"],
    stepOf: "Step",
    of: "of",
    pastEntries: "Past Entries",
    historySubtitle: "Everything you've saved on this device.",
    newEntryLink: "← New entry",
    mainCbtLink: "← Back to the main CBT form",
    needsAppSubtitle: "Trace what is underneath the feeling and what may help.",
    needsStep1Title: "The Situation",
    needsStep1Subtitle: "Start with the basics, then choose the emotions you want to explore.",
    needsTitlePlaceholder: "e.g. Conversation with my partner",
    needsSituationHint: "What happened, and what was the trigger?",
    needsSelectFeelingLabel: "Select the feelings you want to explore",
    needsSelectFeelingHint: "Choose each emotion that is present for you right now.",
    needsStep2Title: "What sits behind this feeling?",
    needsStep2Subtitle: "For each selected feeling, notice what is underneath it and name the need behind it.",
    needsStep3Title: "What would meet this need?",
    needsStep3Subtitle: "For each feeling, choose the need that fits and describe what would help.",
    needsStep4Title: "Feelings again",
    needsStep4Subtitle: "A quick review of the emotions you explored and what they point to.",
    mainCbtForm: "Back to the main CBT form",
    saveMessage: "Please choose at least one feeling to continue.",
    saveMessage2: "Please answer the reflection for each selected feeling before continuing.",
    saveMessage3: "Please choose a need and describe what would satisfy it for each feeling."
  },
  he: {
    appSubtitle: "עבור דרך מחשבה קשה, צעד אחר צעד.",
    step1Title: "המצב",
    step1Subtitle: "מה קרה?",
    title: "כותרת",
    optionalText: "(לא חובה)",
    date: "תאריך",
    situation: "המצב או האירוע",
    situationHint: "היכן היית, מי היה שם ומה קרה?",
    titlePlaceholder: "למשל: פגישה עם המנהל",
    situationPlaceholder: "תאר את המצב",
    step2Title: "איך הרגשת?",
    step2Subtitle: "בחר את כל הרגשות הרלוונטיים ואז קבע את עוצמתם.",
    step3Title: "מחשבות",
    step3Subtitle: "הסתכלו מקרוב על מה שעבר לכם בראש.",
    physicalSensations: "תחושות גופניות",
    physicalSensationsHint: "מה שמתם לב אליו בגוף?",
    automaticThought: "מחשבה לא מועילה",
    automaticThoughtPlaceholder: "למשל: אני לעולם לא אהיה מספיק טוב בעבודה",
    beliefLevel: "עד כמה אתה מאמין בזה?",
    levelLabel: "רמת האמונה",
    interpretation: "פירוש",
    interpretationHint: "איך פירשת את מה שקרה? איזו משמעות הייתה לזה עבורך?",
    pastExperiences: "חוויות מהעבר",
    pastExperiencesHint: "אילו חוויות עבר משפיעות על הפירוש הזה?",
    beliefs: "אמונות בסיסיות",
    consequence: "תוצאה / התנהגות",
    consequenceHint: "מה עשית (או רצית לעשות) כתוצאה מכך?",
    step4Title: "אתגר",
    step4Subtitle: "שאל את עצמך שאלות לגבי הראיות וחשוף מלכודות חשיבה.",
    evidenceFor: "ראיות התומכות במחשבה",
    evidenceAgainst: "ראיות נגד המחשבה",
    cognitiveDistortions: "עיוותי חשיבה",
    distortionsHint: "בחר את מלכודות החשיבה שאתה מזהה במחשבה הזו.",
    step5Title: "שינוי",
    step5Subtitle: "צור מחשבה מאוזנת ומציאותית יותר.",
    balancedThought: "מחשבה חלופית מאוזנת",
    balancedThoughtPlaceholder: "למשל: אני עדיין לומד ומשתפר. טעות אחת לא מגדירה את היכולות שלי",
    newEmotionBehavior: "רגש והתנהגות חדשים",
    newEmotionBehaviorHint: "כשיש לך את המחשבה המאוזנת, איך אתה מרגיש ומה אתה עושה עכשיו?",
    nextAction: "מה תעשה אחרת?",
    step6Title: "מה השתנה",
    step6Subtitle: "שים לב איך אתה מרגיש ופועל אחרי השינוי.",
    exerciseReview: "סקירת התרגיל",
    savedOnDevice: "נשמר במכשיר זה.",
    thoughtRecord: "רשומת מחשבה",
    back: "חזרה",
    next: "הבא",
    historyLink: "צפה ברשומות קודמות ←",
    needsLink: "זרימת רגשות וצרכים ←",
    needsTitle: "רגשות וצרכים",
    followUp: "❤ מעקב",
    seeResults: "הצג תוצאות",
    feelingsElaborate: "פיתוח רגשות",
    stepNames: ["המצב", "רגשות", "פיתוח רגשות", "מחשבות", "אתגר", "שינוי", "מה השתנה"],
    stepOf: "שלב",
    of: "מתוך",
    pastEntries: "רשומות קודמות",
    historySubtitle: "הכל שאתה שמרת במכשיר הזה.",
    newEntryLink: "← רשומה חדשה",
    mainCbtLink: "← חזרה לטופס ה-CBT הראשי",
    needsAppSubtitle: "עקוב אחרי מה שמסתתר מאחורי הרגש ומה עשוי לעזור.",
    needsStep1Title: "המצב",
    needsStep1Subtitle: "התחל ביסודות, ואז בחר את הרגשות שברצונך לחקור.",
    needsTitlePlaceholder: "למשל: שיחה עם בן/בת הזוג",
    needsSituationHint: "מה קרה ומה היה הגורם?",
    needsSelectFeelingLabel: "בחר את הרגשות שברצונך לחקור",
    needsSelectFeelingHint: "בחר כל רגש שמרגיש לך נכון עכשיו.",
    needsStep2Title: "מה עומד מאחורי הרגש הזה?",
    needsStep2Subtitle: "עבור כל רגש שנבחר, חשוב להבחין במה שמסתתר מתחתיו ולזהות את הצרכים שמאחוריו.",
    needsStep3Title: "מה יספק את הצורך הזה?",
    needsStep3Subtitle: "עבור כל רגש, בחר את הצורך המתאים ותאר מה יכול לעזור.",
    needsStep4Title: "רגשות שוב",
    needsStep4Subtitle: "סקירה קצרה של הרגשות שחקרת ומה הם מצביעים עליהם.",
    saveMessage: "בחר לפחות רגש אחד כדי להמשיך.",
    saveMessage2: "ענה על השאלה לגבי כל רגש נבחר לפני שתמשיך.",
    saveMessage3: "בחר צורך ותאר מה יספק אותו עבור כל רגש.",
    noFeelings: "עדיין לא נבחרו רגשות.",
    behindLabel: "מה עומד מאחורי הרגש הזה?",
    needsBehindLabel: "מהו הצורך שמאחורי הרגש הזה?",
    needHint: "החזק Ctrl/Cmd כדי לבחור יותר מאחד.",
    emotionLabel: "רגש",
    selectNeedLabel: "בחר צורך",
    chooseNeed: "בחר צורך",
    whatWillGiveLabel: "מה ייתן לך את הצורך הזה?",
    noNeedSelected: "לא נבחר צורך בשלב הקודם",
    feelingReviewTitle: "מה עומד מאחורי הרגש:",
    needsReviewTitle: "צרכים שמאחורי הרגש:",
    selectedNeedTitle: "הצורך שנבחר:",
    whatWillGiveReview: "מה ייתן לך את הצורך הזה:",
    notFilled: "לא מולא",
    noNeedsSelected: "לא נבחרו צרכים"
  }
};

const state = {
  level: 50,
  intensities: { before: new Map(), after: new Map() },
  distortions: new Set(),
};

function renderLevelBarHtml(value) {
  return `<div class="level-slider" style="pointer-events:none">
    <div class="track"></div>
    <div class="fill" style="width:${value}%"></div>
  </div>`;
}

function initLevelSlider() {
  const input = document.getElementById("level");
  const fill = document.getElementById("level-fill");
  const value = document.getElementById("level-value");
  input.value = state.level;
  const update = () => {
    state.level = Number(input.value);
    fill.style.width = `${state.level}%`;
    value.textContent = state.level;
  };
  input.addEventListener("input", update);
  update();
}

function renderEmotionGrid(containerId, group) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  const grid = document.createElement("div");
  grid.className = "emotion-grid";
  const lang = localStorage.getItem(LANG_KEY) || "en";

  MIXED_EMOTIONS.forEach(({ en, he, color }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = lang === "he" ? he : en;
    btn.style.setProperty("--c", color);
    if (state.intensities[group].has(en)) btn.classList.add("selected");
    btn.addEventListener("pointerdown", (event) => {
      event.preventDefault();
    });
    btn.addEventListener("click", () => {
      const map = state.intensities[group];
      if (map.has(en)) {
        map.delete(en);
        btn.classList.remove("selected");
      } else {
        map.set(en, 50);
        btn.classList.add("selected");
      }
      renderIntensityList(group);
      saveDraft();
    });
    grid.appendChild(btn);
  });

  container.appendChild(grid);
}

function renderIntensityList(group) {
  const listId = group === "before" ? "intensity-before" : "intensity-after";
  const container = document.getElementById(listId);
  container.innerHTML = "";
  state.intensities[group].forEach((value, emotion) => {
    const he = EMOTION_MAP.get(emotion);
    const color = EMOTION_COLOR.get(emotion);
    const label = (localStorage.getItem(LANG_KEY) || "en") === "he" ? he : emotion;
    const chip = document.createElement("div");
    chip.className = "intensity-chip";
    chip.style.background = color;
    chip.innerHTML = `
      <span>${label}</span>
      <input type="range" min="0" max="100" value="${value}">
      <span class="pct">${value}%</span>
    `;
    const range = chip.querySelector("input[type=range]");
    const pct = chip.querySelector(".pct");
    range.addEventListener("input", () => {
      state.intensities[group].set(emotion, Number(range.value));
      pct.textContent = `${range.value}%`;
    });
    container.appendChild(chip);
  });
}

function renderDistortions() {
  const container = document.getElementById("distortion-list");
  container.innerHTML = "";
  const lang = localStorage.getItem(LANG_KEY) || "en";
  DISTORTIONS.forEach(([name, desc]) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    const hebrew = DISTORTION_HEBREW[name];
    const label = lang === "he" ? hebrew?.[0] || name : name;
    const description = lang === "he" ? hebrew?.[1] || desc : desc;
    chip.innerHTML = `${label}<span class="d-desc">${description}</span>`;
    chip.addEventListener("click", () => {
      if (state.distortions.has(name)) {
        state.distortions.delete(name);
        chip.classList.remove("selected");
      } else {
        state.distortions.add(name);
        chip.classList.add("selected");
      }
    });
    container.appendChild(chip);
  });
}

function t(key) {
  const lang = localStorage.getItem(LANG_KEY) || "en";
  return (TEXT[lang] && TEXT[lang][key]) || TEXT.en[key] || key;
}

function applyLanguage(lang) {
  const dict = TEXT[lang] || TEXT.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", lang === "he");
  localStorage.setItem(LANG_KEY, lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key]) el.placeholder = dict[key];
  });

  const selector = document.getElementById("language-select");
  if (selector) selector.value = lang;
  renderEmotionGrid("emotions-before", "before");
  renderEmotionGrid("emotions-after", "after");
  renderIntensityList("before");
  renderIntensityList("after");
  renderDistortions();
}

function renderProgress() {
  const fill = document.getElementById("progress-fill");
  const label = document.getElementById("progress-label");
  fill.style.width = `${(currentStep / totalSteps) * 100}%`;
  label.textContent = `${t("stepOf")} ${currentStep} ${t("of")} ${totalSteps}`;
}

function renderStepTracker() {
  const tracker = document.getElementById("step-tracker");
  if (!tracker) return;
  const names = TEXT[localStorage.getItem(LANG_KEY) || "en"].stepNames || [];
  tracker.innerHTML = names.map((name, index) => {
    const step = index + 1;
    return `<button type="button" class="step-track-item${step === currentStep ? " active" : ""}" data-step="${step}">
      <span class="step-track-number">${step}</span><span class="step-track-name">${name}</span>
    </button>`;
  }).join("");
  tracker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      saveDraft();
      const step = Number(button.dataset.step);
      if (step === 3) {
        openFeelingsFlow();
        return;
      }
      currentStep = step;
      showStep(currentStep);
    });
  });
}

function openFeelingsFlow() {
  const feelings = [...state.intensities.before.keys()];
  localStorage.setItem(FEELINGS_DRAFT_KEY, JSON.stringify(feelings));
  localStorage.setItem("cbtNeedsReturnToStep", "4");
  window.location.href = "needs.html";
}

function emotionChipsHtml(list) {
  if (!list.length) return `<span class="r-empty">None selected.</span>`;
  return list
    .map((e) => `<span class="review-chip" style="background:${e.color};border-color:${e.color};color:#fff">${e.emotion} ${e.intensity}%</span>`)
    .join("");
}

function textCardHtml(title, text) {
  return `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="review-card">
        <div class="r-title">${title}</div>
        ${text ? `<div class="r-text">${text}</div>` : `<span class="r-empty">Not filled in.</span>`}
      </div>
    </div>
  `;
}

function renderReview(entry) {
  const timeline = document.getElementById("review-timeline");

  const distortionsHtml = entry.distortions.length
    ? entry.distortions.map((d) => `<span class="review-chip">${d}</span>`).join("")
    : `<span class="r-empty">No thinking traps selected.</span>`;

  timeline.innerHTML = [
    textCardHtml("Situation", entry.situation),
    `<div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="review-card">
        <div class="r-title">How You Felt</div>
        ${emotionChipsHtml(entry.initialEmotions)}
      </div>
    </div>`,
    textCardHtml("Physical Sensations", entry.physicalSensations),
    `<div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="review-card">
        <div class="r-title">Unhelpful Thought <span class="r-sub">(Your first thought)</span></div>
        <div class="r-text">${entry.automaticThought || "(no thought recorded)"}</div>
        <div class="level-row"><span class="level-value">Level: <b>${entry.level}</b>/100</span></div>
        ${renderLevelBarHtml(entry.level)}
      </div>
    </div>`,
    textCardHtml("Interpretation", entry.interpretation),
    textCardHtml("Past Experiences", entry.pastExperiences),
    textCardHtml("Underlying Beliefs", entry.beliefs),
    textCardHtml("Consequence / Behavior", entry.consequence),
    textCardHtml("Evidence That Supports the Thought", entry.evidenceFor),
    textCardHtml("Evidence Against the Thought", entry.evidenceAgainst),
    `<div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="review-card">
        <div class="r-title">Cognitive Distortions</div>
        ${distortionsHtml}
      </div>
    </div>`,
    textCardHtml("Balanced Alternative Thought", entry.balancedThought),
    textCardHtml("New Emotion &amp; Behavior", entry.newEmotionBehavior),
    textCardHtml("What You'll Do Differently", entry.nextAction),
    `<div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="review-card">
        <div class="r-title">How You Feel Now</div>
        ${emotionChipsHtml(entry.finalEmotions)}
      </div>
    </div>`,
  ].join("");
}

function showStep(step) {
  if (step === 3) {
    openFeelingsFlow();
    return;
  }
  document.querySelectorAll(".step").forEach((el) => {
    el.hidden = Number(el.dataset.step) !== step;
  });
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnFeelingsElaborate = document.getElementById("btn-feelings-elaborate");

  if (step > totalSteps) {
    document.querySelector(".progress-track").hidden = true;
    document.getElementById("progress-label").hidden = true;
    btnPrev.hidden = true;
    btnNext.textContent = t("followUp");
    if (btnFeelingsElaborate) btnFeelingsElaborate.style.display = "none";
  } else {
    document.querySelector(".progress-track").hidden = false;
    document.getElementById("progress-label").hidden = false;
    btnPrev.hidden = false;
    btnPrev.style.visibility = step === 1 ? "hidden" : "visible";
    btnPrev.textContent = t("back");
    btnNext.textContent = step === totalSteps ? t("seeResults") : t("next");
    if (btnFeelingsElaborate) {
      const showElaborationButton = step === 2;
      btnFeelingsElaborate.style.display = showElaborationButton ? "inline-flex" : "none";
      btnFeelingsElaborate.textContent = t("feelingsElaborate");
    }
    renderProgress();
  }
  renderStepTracker();

  const stepHash = `#step${step}`;
  if (window.location.hash !== stepHash && step <= totalSteps) {
    history.replaceState(null, "", stepHash);
  }
}

function mapToList(map) {
  return [...map.entries()].map(([emotion, intensity]) => ({
    emotion,
    intensity,
    color: EMOTION_COLOR.get(emotion),
  }));
}

function val(id) {
  return document.getElementById(id).value.trim();
}

function collectEntry() {
  return {
    id: Date.now(),
    title: val("title"),
    date: document.getElementById("date").value,
    situation: val("situation"),
    initialEmotions: mapToList(state.intensities.before),
    physicalSensations: val("physicalSensations"),
    automaticThought: val("automaticThought"),
    level: state.level,
    interpretation: val("interpretation"),
    pastExperiences: val("pastExperiences"),
    beliefs: val("beliefs"),
    consequence: val("consequence"),
    evidenceFor: val("evidenceFor"),
    evidenceAgainst: val("evidenceAgainst"),
    distortions: [...state.distortions],
    balancedThought: val("balancedThought"),
    newEmotionBehavior: val("newEmotionBehavior"),
    nextAction: val("nextAction"),
    finalEmotions: mapToList(state.intensities.after),
    followedUp: false,
  };
}

function saveEntry(entry) {
  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function saveDraft() {
  localStorage.setItem(CBT_DRAFT_KEY, JSON.stringify(collectEntry()));
}

function resetAppFromHome(event) {
  event.preventDefault();
  APP_DATA_KEYS.forEach((key) => localStorage.removeItem(key));
  window.location.href = "index.html#step1";
}

function restoreDraft() {
  const draft = JSON.parse(localStorage.getItem(CBT_DRAFT_KEY) || "null");
  if (!draft) return;
  ["title", "date", "situation", "physicalSensations", "automaticThought", "interpretation", "pastExperiences", "beliefs", "consequence", "evidenceFor", "evidenceAgainst", "balancedThought", "newEmotionBehavior", "nextAction"].forEach((id) => {
    const input = document.getElementById(id);
    if (input && draft[id] !== undefined) input.value = draft[id];
  });
  state.level = Number(draft.level ?? 50);
  state.intensities.before = new Map((draft.initialEmotions || []).map((item) => [item.emotion, item.intensity]));
  state.intensities.after = new Map((draft.finalEmotions || []).map((item) => [item.emotion, item.intensity]));
  state.distortions = new Set(draft.distortions || []);
}

function markLastEntryFollowedUp() {
  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  if (!entries.length) return;
  entries[entries.length - 1].followedUp = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

document.getElementById("btn-next").addEventListener("click", () => {
  if (currentStep === totalSteps) {
    const entry = collectEntry();
    saveEntry(entry);
    localStorage.removeItem(CBT_DRAFT_KEY);
    renderReview(entry);
    currentStep = totalSteps + 1;
    showStep(currentStep);
    return;
  }

  if (currentStep > totalSteps) {
    if (!followedUp) {
      followedUp = true;
      document.getElementById("btn-next").textContent = "✓ Follow-up scheduled";
      document.getElementById("btn-next").disabled = true;
      markLastEntryFollowedUp();
    }
    return;
  }

  if (currentStep === 2) {
    saveDraft();
    openFeelingsFlow();
    return;
  }

  saveDraft();
  currentStep++;
  showStep(currentStep);
});

document.getElementById("btn-feelings-elaborate").addEventListener("click", () => {
  saveDraft();
  openFeelingsFlow();
});

document.getElementById("btn-prev").addEventListener("click", () => {
  if (currentStep <= 1) return;
  saveDraft();
  currentStep--;
  showStep(currentStep);
});

document.getElementById("cbt-form").addEventListener("input", saveDraft);
document.getElementById("cbt-form").addEventListener("change", saveDraft);
document.getElementById("home-link").addEventListener("click", resetAppFromHome);

window.addEventListener("hashchange", () => {
  const match = /^#step(\d+)$/i.exec(window.location.hash || "");
  if (match) {
    const step = Number(match[1]);
    if (step >= 1 && step <= totalSteps) {
      currentStep = step;
      showStep(currentStep);
    }
  }
});

const languageSelect = document.getElementById("language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
}

const savedLang = localStorage.getItem(LANG_KEY) || "en";
applyLanguage(savedLang);
restoreDraft();
if (!document.getElementById("date").value) document.getElementById("date").valueAsDate = new Date();
initLevelSlider();
renderEmotionGrid("emotions-before", "before");
renderEmotionGrid("emotions-after", "after");
renderDistortions();
renderIntensityList("before");
renderIntensityList("after");
const hashMatch = /^#step(\d+)$/i.exec(window.location.hash || "");
if (hashMatch) {
  const hashStep = Number(hashMatch[1]);
  if (hashStep >= 1 && hashStep <= totalSteps) currentStep = hashStep;
}
showStep(currentStep);
