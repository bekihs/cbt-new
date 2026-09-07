const STORAGE_KEY = "cbtEntries";
const LANG_KEY = "cbtLanguage";
const FEELINGS_DRAFT_KEY = "cbtFeelingsDraft";
const NEEDS_DRAFT_KEY = "cbtNeedsDraft";
const APP_DATA_KEYS = [STORAGE_KEY, LANG_KEY, FEELINGS_DRAFT_KEY, NEEDS_DRAFT_KEY, "cbtDraft", "cbtNeedsReturnToStep"];

const TEXT = {
  en: {
    needsAppSubtitle: "Trace what is underneath the feeling and what may help.",
    needsStep1Title: "Selected feelings",
    needsStep1Subtitle: "These are the feelings you chose. Explore what sits underneath each one.",
    title: "Title",
    optionalText: "(optional)",
    date: "Date",
    situation: "Situation or event",
    needsSituationHint: "What happened, and what was the trigger?",
    needsTitlePlaceholder: "e.g. Conversation with my partner",
    situationPlaceholder: "Describe the situation",
    needsSelectFeelingLabel: "Select the feelings you want to explore",
    needsSelectFeelingHint: "Choose each emotion that is present for you right now.",
    needsStep2Title: "What sits behind this feeling?",
    needsStep2Subtitle: "For each selected feeling, notice what is underneath it and name the need behind it.",
    needsStep3Title: "What would meet this need?",
    needsStep3Subtitle: "For each feeling, choose the need that fits and describe what would help.",
    needsStep4Title: "Feelings again",
    needsStep4Subtitle: "A quick review of the emotions you explored and what they point to.",
    back: "Back",
    next: "Next",
    mainCbtLink: "← Back to regular flow",
    needsTitle: "Feelings & Needs",
    finish: "Finish",
    selectedNeedCount: "selected",
    stepNames: ["Situation", "Feelings", "Feelings elaborate", "Thoughts", "Challenge", "Changing", "Changed"],
    needsStepNames: ["Selected feelings", "Behind the feeling", "Choose a need", "Review"],
    stepOf: "Step",
    of: "of",
    saveMessage: "Please choose at least one feeling to continue.",
    saveMessage2: "Please answer the reflection for each selected feeling before continuing.",
    saveMessage3: "Please choose a need and describe what would satisfy it for each feeling.",
    noFeelings: "No feelings selected yet.",
    noFeelingsDraft: "No feelings were selected in the regular flow.",
    behindLabel: "What sits behind this feeling?",
    needsBehindLabel: "What is the need behind this feeling?",
    needHint: "Hold Ctrl/Cmd to select more than one need.",
    emotionLabel: "Emotion",
    selectNeedLabel: "Select need",
    chooseNeed: "Choose one need",
    whatWillGiveLabel: "What will give you this need?",
    noNeedSelected: "No need selected in the previous step",
    feelingReviewTitle: "What sits behind this feeling:",
    needsReviewTitle: "Needs behind the feeling:",
    selectedNeedTitle: "Selected need:",
    whatWillGiveReview: "What will give you this need:",
    notFilled: "Not filled in",
    noNeedsSelected: "No needs selected",
    writeBehindPrompt: "Write what sits behind this feeling...",
    describeNeedPrompt: "Describe the change, action, or support that would satisfy this need"
  },
  he: {
    needsAppSubtitle: "עקוב אחרי מה שמסתתר מאחורי הרגש ומה עשוי לעזור.",
    needsStep1Title: "רגשות נבחרים",
    needsStep1Subtitle: "אלו הרגשות שבחרת. חקור מה עומד מאחורי כל אחד מהם.",
    title: "כותרת",
    optionalText: "(לא חובה)",
    date: "תאריך",
    situation: "המצב או האירוע",
    needsSituationHint: "מה קרה ומה היה הגורם?",
    needsTitlePlaceholder: "למשל: שיחה עם בן/בת הזוג",
    situationPlaceholder: "תאר את המצב",
    needsSelectFeelingLabel: "בחר את הרגשות שברצונך לחקור",
    needsSelectFeelingHint: "בחר כל רגש שמרגיש לך נכון עכשיו.",
    needsStep2Title: "מה עומד מאחורי הרגש הזה?",
    needsStep2Subtitle: "עבור כל רגש שנבחר, חשוב להבחין במה שמסתתר מתחתיו ולזהות את הצרכים שמאחוריו.",
    needsStep3Title: "מה יספק את הצורך הזה?",
    needsStep3Subtitle: "עבור כל רגש, בחר את הצורך המתאים ותאר מה יכול לעזור.",
    needsStep4Title: "רגשות שוב",
    needsStep4Subtitle: "סקירה קצרה של הרגשות שחקרת ומה הם מצביעים עליהם.",
    back: "חזרה",
    next: "הבא",
    mainCbtLink: "← חזרה לזרימה הרגילה",
    needsTitle: "רגשות וצרכים",
    finish: "סיום",
    selectedNeedCount: "נבחרו",
    stepNames: ["המצב", "רגשות", "פיתוח רגשות", "מחשבות", "אתגר", "שינוי", "מה השתנה"],
    needsStepNames: ["רגשות נבחרים", "מאחורי הרגש", "בחירת צורך", "סקירה"],
    stepOf: "שלב",
    of: "מתוך",
    saveMessage: "בחר לפחות רגש אחד כדי להמשיך.",
    saveMessage2: "ענה על השאלה לגבי כל רגש נבחר לפני שתמשיך.",
    saveMessage3: "בחר צורך ותאר מה יספק אותו עבור כל רגש.",
    noFeelings: "עדיין לא נבחרו רגשות.",
    noFeelingsDraft: "לא נבחרו רגשות בזרימת ה-CBT הראשית.",
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
    noNeedsSelected: "לא נבחרו צרכים",
    writeBehindPrompt: "כתוב מה עומד מאחורי הרגש הזה...",
    describeNeedPrompt: "תאר את השינוי, הפעולה או התמיכה שיספקו צורך זה"
  }
};

const NEEDS = {
  en: [
    { value: "connection", label: "Connection / love" },
    { value: "understanding", label: "Understanding" },
    { value: "acceptance", label: "Acceptance" },
    { value: "safety", label: "Safety / security" },
    { value: "autonomy", label: "Autonomy / choice" },
    { value: "honesty", label: "Honesty / authenticity" },
    { value: "peace", label: "Peace / calm" },
    { value: "rest", label: "Rest / recovery" },
    { value: "play", label: "Play / joy" },
    { value: "nourishment", label: "Nourishment / care" },
    { value: "meaning", label: "Meaning / purpose" },
    { value: "contribution", label: "Contribution / impact" },
    { value: "competence", label: "Competence / mastery" },
    { value: "support", label: "Support / encouragement" },
    { value: "recognition", label: "Recognition / appreciation" },
    { value: "comfort", label: "Comfort / ease" },
    { value: "privacy", label: "Privacy / space" },
    { value: "trust", label: "Trust / reliability" },
    { value: "fairness", label: "Fairness / justice" },
    { value: "expression", label: "Expression / voice" },
    { value: "freedom", label: "Freedom / independence" },
    { value: "structure", label: "Structure / order" },
    { value: "spirituality", label: "Spirituality / meaning" }
  ],
  he: [
    { value: "connection", label: "חיבור / אהבה" },
    { value: "understanding", label: "הבנה" },
    { value: "acceptance", label: "קבלה" },
    { value: "safety", label: "ביטחון / תחושת ביטחון" },
    { value: "autonomy", label: "אוטונומיה / בחירה" },
    { value: "honesty", label: "יושר / אותנטיות" },
    { value: "peace", label: "שקט / רוגע" },
    { value: "rest", label: "מנוחה / התאוששות" },
    { value: "play", label: "משחק / שמחה" },
    { value: "nourishment", label: "הזנה / טיפול" },
    { value: "meaning", label: "משמעות / מטרה" },
    { value: "contribution", label: "תרומה / השפעה" },
    { value: "competence", label: "מיומנות / שליטה" },
    { value: "support", label: "תמיכה / עידוד" },
    { value: "recognition", label: "הכרה / הערכה" },
    { value: "comfort", label: "נוחות / רווחה" },
    { value: "privacy", label: "פרטיות / מרחב" },
    { value: "trust", label: "אמון / מהימנות" },
    { value: "fairness", label: "הוגנות / צדק" },
    { value: "expression", label: "ביטוי / קול" },
    { value: "freedom", label: "חירות / עצמאות" },
    { value: "structure", label: "סדר / ארגון" },
    { value: "spirituality", label: "רוחניות / משמעות" }
  ]
};

function getNeedsList(lang = localStorage.getItem(LANG_KEY) || "en") {
  return NEEDS[lang] || NEEDS.en;
}

function getNeedLabel(value, lang = localStorage.getItem(LANG_KEY) || "en") {
  return getNeedsList(lang).find((need) => need.value === value)?.label || value;
}

const FEELINGS = [
  "Angry", "Anxious", "Ashamed", "Betrayed", "Bored", "Confused", "Content",
  "Depressed", "Disappointed", "Embarrassed", "Excited", "Frustrated", "Guilty",
  "Happy", "Hopeful", "Hurt", "Insecure", "Interested", "Jealous", "Lonely",
  "Nervous", "Overwhelmed", "Powerless", "Proud", "Rejected", "Sad", "Scared",
  "Stressed", "Tired", "Vulnerable", "Worried"
];

const FEELING_HEBREW = {
  Happy: "שמח", Sad: "עצוב", Disgusted: "נגעל", Angry: "כועס", Fearful: "מפחד",
  Stressed: "לחוץ", Surprised: "מופתע",
  Anxious: "חרד", Ashamed: "מתבייש", Betrayed: "נבגד",
  Bored: "משועמם", Confused: "מבולבל", Content: "שבע רצון", Depressed: "מדוכא",
  Disappointed: "מאוכזב", Embarrassed: "נבוך", Excited: "נרגש", Frustrated: "מתוסכל",
  Guilty: "אשם", Happy: "שמח", Hopeful: "מלא תקווה", Hurt: "פגוע", Insecure: "חסר ביטחון",
  Interested: "מעוניין", Jealous: "מקנא", Lonely: "בודד", Nervous: "עצבני",
  Overwhelmed: "המום", Powerless: "חסר אונים", Proud: "גאה", Rejected: "דחוי",
  Sad: "עצוב", Scared: "מפוחד", Stressed: "לחוץ", Tired: "עייף", Vulnerable: "פגיע",
  Worried: "מודאג", Curious: "סקרן", Inspired: "מלא השראה", Successful: "מצליח",
  Respected: "מוערך", Valued: "יקר ערך", Loving: "אוהב", Thankful: "אסיר תודה",
  Joyful: "עליז", Free: "חופשי", Playful: "שובב", Courageous: "אמיץ",
  Creative: "יצירתי", Optimistic: "אופטימי", Interested: "מעוניין", Lonely: "בודד",
  Isolated: "מבודד", Abandoned: "נטוש", Fragile: "שביר", Despairing: "מיואש",
  Grieving: "שרוי באבל", Inferior: "נחות", Remorseful: "מתחרט", Empty: "ריק",
  Disapproving: "מגנה", Judgmental: "שיפוטי", Appalled: "נחרד", Revolted: "סולד", Nauseated: "בחילה",
  Detestable: "מתועב", Repelled: "נדחה", Hesitant: "מהסס", Horrified: "אחוז אימה",
  Avoidant: "נמנע", Resentful: "רוחש טינה", Humiliated: "מושפל", Disrespected: "לא מכובד",
  Ridiculed: "מבוזה", Bitter: "מריר", Indignant: "נזעם", Violated: "מופר",
  Mad: "זועם", Furious: "רותח מזעם", Provoked: "מגורה", Hostile: "עוין",
  Infuriated: "משתולל", Annoyed: "מוטרד", Withdrawn: "מסתגר", Numb: "קהה רגש",
  Skeptical: "ספקן", Dismissive: "מזלזל", Helpless: "חסר ישע", Frightened: "נבהל",
  Overwhelmed: "המום", Worried: "מודאג", Inadequate: "לא מספיק טוב", Weak: "חלש",
  Worthless: "חסר ערך", Insignificant: "חסר משמעות", Excluded: "מוחרג", Persecuted: "נרדף",
  Threatened: "מאוים", Nervous: "עצבני", Exposed: "חשוף", Busy: "עסוק",
  Pressured: "תחת לחץ", Rushed: "ממהר", "Out of control": "חסר שליטה", Sleepy: "מנומנם",
  Unfocused: "לא מרוכז", Startled: "נבהל בפתאומיות", Shocked: "בהלם", Dismayed: "נסער",
  Perplexed: "תמה", Disillusioned: "מפוכח", Amazed: "המום לטובה", Astonished: "נדהם",
  Awestruck: "נפעם", Eager: "להוט", Energetic: "נמרץ", Excited: "נרגש",
  Indifferent: "אדיש", Apathetic: "חסר עניין", Stressed: "בלחץ", Tired: "עייף"
};

const totalSteps = 4;
let currentStep = 1;

const state = {
  selectedFeelings: [],
  details: new Map(),
};

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getDetail(feeling) {
  if (!state.details.has(feeling)) {
    state.details.set(feeling, {
      feeling,
      behind: "",
      needs: [],
      selectedNeed: "",
      whatWillGive: "",
    });
  }
  return state.details.get(feeling);
}

function t(key) {
  const lang = localStorage.getItem(LANG_KEY) || "en";
  return (TEXT[lang] && TEXT[lang][key]) || TEXT.en[key] || key;
}

function getFeelingLabel(feeling, lang = localStorage.getItem(LANG_KEY) || "en") {
  return lang === "he" ? FEELING_HEBREW[feeling] || feeling : feeling;
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

  renderStepTwo();
  renderStepThree();
  renderStepFour();
  renderStepTracker();
  renderInnerStepTracker();
}

function renderProgress() {
  const fill = document.getElementById("needs-progress-fill");
  const label = document.getElementById("needs-progress-label");
  fill.style.width = `${(currentStep / totalSteps) * 100}%`;
  label.textContent = `${t("stepOf")} ${currentStep} ${t("of")} ${totalSteps}`;
}

function renderStepTracker() {
  const tracker = document.getElementById("needs-step-tracker");
  if (!tracker) return;
  const names = TEXT[localStorage.getItem(LANG_KEY) || "en"].stepNames || [];
  tracker.innerHTML = names.map((name, index) => {
    const step = index + 1;
    return `<button type="button" class="step-track-item${step === 3 ? " active" : ""}" data-step="${step}">
      <span class="step-track-number">${step}</span><span class="step-track-name">${name}</span>
    </button>`;
  }).join("");
  tracker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      saveNeedsDraft();
      const step = Number(button.dataset.step);
      if (step === 3) {
        currentStep = 1;
        showStep(currentStep);
        return;
      }
      window.location.href = `index.html#step${step}`;
    });
  });
}

function renderInnerStepTracker() {
  const tracker = document.getElementById("inner-step-tracker");
  if (!tracker) return;
  const names = (TEXT[localStorage.getItem(LANG_KEY) || "en"].needsStepNames || []);
  tracker.innerHTML = names.map((name, index) => {
    const step = index + 1;
    return `<button type="button" class="inner-step-item${step === currentStep ? " active" : ""}" data-step="${step}">
      <span class="inner-step-number">${step}</span><span>${name}</span>
    </button>`;
  }).join("");
  tracker.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      saveNeedsDraft();
      currentStep = Number(button.dataset.step);
      if (currentStep === 2) renderStepTwo();
      if (currentStep === 3) renderStepThree();
      if (currentStep === 4) renderStepFour();
      showStep(currentStep);
    });
  });
}

function saveNeedsDraft() {
  localStorage.setItem(NEEDS_DRAFT_KEY, JSON.stringify({
    selectedFeelings: state.selectedFeelings,
    details: [...state.details.entries()],
    title: document.getElementById("needs-title")?.value || "",
    date: document.getElementById("needs-date")?.value || "",
    situation: document.getElementById("needs-situation")?.value || "",
  }));
}

function resetAppFromHome(event) {
  event.preventDefault();
  APP_DATA_KEYS.forEach((key) => localStorage.removeItem(key));
  window.location.href = "index.html#step1";
}

function restoreNeedsDraft() {
  const draft = JSON.parse(localStorage.getItem(NEEDS_DRAFT_KEY) || "null");
  if (!draft) return;
  if (Array.isArray(draft.selectedFeelings) && draft.selectedFeelings.length) state.selectedFeelings = draft.selectedFeelings;
  if (Array.isArray(draft.details)) state.details = new Map(draft.details);
  ["needs-title", "needs-date", "needs-situation"].forEach((id) => {
    const input = document.getElementById(id);
    const key = id.replace("needs-", "");
    if (input && draft[key]) input.value = draft[key];
  });
}

function renderEmotionPicker() {
  const container = document.getElementById("needs-emotions");
  if (!container) return;
  container.innerHTML = "";

  if (!state.selectedFeelings.length) {
    container.innerHTML = `<div class="empty-state">${t("noFeelingsDraft")}</div>`;
    return;
  }

  const list = document.createElement("div");
  list.className = "chip-grid";

  state.selectedFeelings.forEach((feeling) => {
    const chip = document.createElement("div");
    chip.className = "chip selected";
    chip.textContent = getFeelingLabel(feeling);
    list.appendChild(chip);
  });

  container.appendChild(list);
}

function renderStepTwo() {
  const container = document.getElementById("step-two-content");
  if (!container) return;
  if (!state.selectedFeelings.length) {
    container.innerHTML = `<div class="empty-state">${t("noFeelings")}</div>`;
    return;
  }

  const lang = localStorage.getItem(LANG_KEY) || "en";

  container.innerHTML = state.selectedFeelings.map((feeling) => {
    const detail = getDetail(feeling);
    const needCheckboxes = getNeedsList(lang).map((need) => `
      <label class="needs-checkbox">
        <input type="checkbox" value="${need.value}" data-feeling="${feeling}" data-field="needs" ${detail.needs.includes(need.value) ? "checked" : ""}>
        <span>${need.label}</span>
      </label>
    `).join("");
    
    const selectedCount = detail.needs.length;
    const label = selectedCount ? `${selectedCount} ${t("selectedNeedCount")}` : t("chooseNeed");

    return `
      <div class="needs-card">
        <div class="needs-card-header">${escapeHtml(getFeelingLabel(feeling, lang))}</div>
        <div class="field">
          <label>${t("behindLabel")}</label>
          <div class="wrap-input"><textarea data-feeling="${feeling}" data-field="behind" placeholder="${t("writeBehindPrompt")}">${escapeHtml(detail.behind)}</textarea></div>
        </div>
        <div class="field">
          <label>${t("needsBehindLabel")}</label>
          <div class="needs-select-box">
            <button type="button" class="needs-select-toggle" data-feeling="${feeling}" aria-expanded="false">
              <span class="toggle-label">${label}</span>
              <span class="toggle-icon">▼</span>
            </button>
            <div class="needs-checkbox-grid" data-feeling="${feeling}" hidden>
              ${needCheckboxes}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll("textarea[data-field='behind']").forEach((el) => {
    el.addEventListener("input", (event) => {
      const detail = getDetail(event.target.dataset.feeling);
      detail.behind = event.target.value;
    });
  });

  container.querySelectorAll(".needs-select-toggle").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      const feeling = btn.dataset.feeling;
      const grid = container.querySelector(`.needs-checkbox-grid[data-feeling="${feeling}"]`);
      if (grid) {
        grid.hidden = !grid.hidden;
        btn.setAttribute("aria-expanded", !grid.hidden);
        btn.classList.toggle("open", !grid.hidden);
      }
    });
  });

  container.querySelectorAll("input[type='checkbox'][data-field='needs']").forEach((el) => {
    el.addEventListener("change", (event) => {
      const detail = getDetail(event.target.dataset.feeling);
      const allChecked = container.querySelectorAll(`input[type='checkbox'][data-feeling="${event.target.dataset.feeling}"][data-field='needs']:checked`);
      detail.needs = [...allChecked].map((checkbox) => checkbox.value);
      
      const feeling = event.target.dataset.feeling;
      const btn = container.querySelector(`.needs-select-toggle[data-feeling="${feeling}"]`);
      if (btn) {
        const count = detail.needs.length;
        btn.querySelector(".toggle-label").textContent = count ? `${count} ${t("selectedNeedCount")}` : t("chooseNeed");
      }
      
      renderStepThree();
      renderStepFour();
    });
  });
}

function renderStepThree() {
  const container = document.getElementById("step-three-content");
  if (!container) return;
  if (!state.selectedFeelings.length) {
    container.innerHTML = `<div class="empty-state">${t("noFeelings")}</div>`;
    return;
  }

  const lang = localStorage.getItem(LANG_KEY) || "en";

  container.innerHTML = state.selectedFeelings.map((feeling) => {
    const detail = getDetail(feeling);
    const visibleNeeds = getNeedsList(lang).filter((need) => detail.needs.includes(need.value));
    const needOptions = visibleNeeds.length
      ? visibleNeeds.map((need) => `
          <option value="${need.value}" ${detail.selectedNeed === need.value ? "selected" : ""}>${need.label}</option>
        `).join("")
      : `<option value="">${t("noNeedSelected")}</option>`;

    return `
      <div class="needs-card">
        <div class="needs-card-header">${escapeHtml(getFeelingLabel(feeling, lang))}</div>
        <div class="field">
          <label>${t("emotionLabel")}</label>
          <div class="wrap-input"><input type="text" value="${escapeHtml(getFeelingLabel(feeling, lang))}" readonly></div>
        </div>
        <div class="field">
          <label>${t("selectNeedLabel")}</label>
          <div class="wrap-input">
            <select data-feeling="${feeling}" data-field="selectedNeed">
              <option value="">${t("chooseNeed")}</option>
              ${needOptions}
            </select>
          </div>
        </div>
        <div class="field">
          <label>${t("whatWillGiveLabel")}</label>
          <div class="wrap-input"><textarea data-feeling="${feeling}" data-field="whatWillGive" placeholder="${t("describeNeedPrompt")}">${escapeHtml(detail.whatWillGive)}</textarea></div>
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll("select[data-field='selectedNeed']").forEach((el) => {
    el.addEventListener("change", (event) => {
      const detail = getDetail(event.target.dataset.feeling);
      detail.selectedNeed = event.target.value;
      renderStepFour();
    });
  });

  container.querySelectorAll("textarea[data-field='whatWillGive']").forEach((el) => {
    el.addEventListener("input", (event) => {
      const detail = getDetail(event.target.dataset.feeling);
      detail.whatWillGive = event.target.value;
      renderStepFour();
    });
  });
}

function renderStepFour() {
  const container = document.getElementById("step-four-content");
  if (!container) return;
  const lang = localStorage.getItem(LANG_KEY) || "en";

  container.innerHTML = state.selectedFeelings.map((feeling) => {
    const detail = getDetail(feeling);
    const needLabel = getNeedLabel(detail.selectedNeed, lang) || t("noNeedSelected");
    const needList = detail.needs.length
      ? detail.needs.map((need) => getNeedLabel(need, lang)).join(", ")
      : t("noNeedsSelected");

    return `
      <div class="needs-card summary-card">
        <div class="needs-card-header">${escapeHtml(getFeelingLabel(feeling, lang))}</div>
        <div class="summary-row"><strong>${t("feelingReviewTitle")}</strong> ${escapeHtml(detail.behind || t("notFilled"))}</div>
        <div class="summary-row"><strong>${t("needsReviewTitle")}</strong> ${escapeHtml(needList)}</div>
        <div class="summary-row"><strong>${t("selectedNeedTitle")}</strong> ${escapeHtml(needLabel)}</div>
        <div class="summary-row"><strong>${t("whatWillGiveReview")}</strong> ${escapeHtml(detail.whatWillGive || t("notFilled"))}</div>
      </div>
    `;
  }).join("");
}

function showStep(step) {
  const steps = document.querySelectorAll(".needs-step");
  if (!steps.length) return;

  steps.forEach((el) => {
    el.hidden = Number(el.dataset.step) !== step;
  });

  const prevBtn = document.getElementById("needs-btn-prev");
  const nextBtn = document.getElementById("needs-btn-next");

  if (prevBtn) {
    prevBtn.hidden = step === 1;
    prevBtn.textContent = t("back");
  }

  if (nextBtn) {
    nextBtn.textContent = step === totalSteps ? t("finish") : t("next");
    nextBtn.disabled = false;
  }

  renderProgress();
  renderStepTracker();
  renderInnerStepTracker();
}

function collectNeedsEntry() {
  const titleInput = document.getElementById("needs-title");
  const dateInput = document.getElementById("needs-date");
  const situationInput = document.getElementById("needs-situation");

  return {
    id: Date.now(),
    type: "needs",
    title: titleInput ? titleInput.value.trim() : "",
    date: dateInput ? dateInput.value : "",
    situation: situationInput ? situationInput.value.trim() : "",
    feelings: state.selectedFeelings.map((feeling) => {
      const detail = getDetail(feeling);
      return {
        feeling,
        behind: detail.behind,
        needs: detail.needs,
        selectedNeed: detail.selectedNeed,
        whatWillGive: detail.whatWillGive,
      };
    }),
    createdAt: new Date().toISOString(),
  };
}

function saveNeedsEntry() {
  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  entries.push(collectNeedsEntry());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function handleNext() {
  saveNeedsDraft();
  if (currentStep === 1) {
    renderStepTwo();
  }

  if (currentStep === 2) {
    renderStepThree();
  }

  if (currentStep === 3) {
    renderStepFour();
  }

  if (currentStep === totalSteps) {
    saveNeedsEntry();
    const returnToStep = Number(localStorage.getItem("cbtNeedsReturnToStep") || "6");
    localStorage.removeItem("cbtFeelingsDraft");
    localStorage.removeItem(NEEDS_DRAFT_KEY);
    localStorage.removeItem("cbtNeedsReturnToStep");
    window.location.href = `index.html#step${returnToStep}`;
    return;
  }

  currentStep += 1;
  showStep(currentStep);
}

function handlePrev() {
  if (currentStep <= 1) {
    saveNeedsDraft();
    window.location.href = "index.html#step2";
    return;
  }
  saveNeedsDraft();
  currentStep -= 1;
  showStep(currentStep);
}

document.getElementById("needs-btn-next").addEventListener("click", handleNext);
document.getElementById("needs-btn-prev").addEventListener("click", handlePrev);

const languageSelect = document.getElementById("language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

restoreNeedsDraft();

const savedFeelingsDraft = JSON.parse(localStorage.getItem(FEELINGS_DRAFT_KEY) || "[]");
if (Array.isArray(savedFeelingsDraft) && savedFeelingsDraft.length) {
  state.selectedFeelings = savedFeelingsDraft;
}

const savedLang = localStorage.getItem(LANG_KEY) || "en";
applyLanguage(savedLang);
const needsDate = document.getElementById("needs-date");
if (needsDate) needsDate.valueAsDate = new Date();
renderEmotionPicker();
renderStepTwo();
renderStepThree();
renderStepFour();
showStep(currentStep);

document.getElementById("needs-form").addEventListener("input", saveNeedsDraft);
document.getElementById("needs-form").addEventListener("change", saveNeedsDraft);
document.getElementById("home-link").addEventListener("click", resetAppFromHome);
