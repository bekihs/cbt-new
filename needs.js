const STORAGE_KEY = "cbtEntries";
const LANG_KEY = "cbtLanguage";
const FEELINGS_DRAFT_KEY = "cbtFeelingsDraft";

const TEXT = {
  en: {
    needsAppSubtitle: "Trace what is underneath the feeling and what may help.",
    needsStep1Title: "The Situation",
    needsStep1Subtitle: "Start with the basics, then choose the emotions you want to explore.",
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
    mainCbtLink: "← Back to the main CBT form",
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
    needsStep1Title: "המצב",
    needsStep1Subtitle: "התחל ביסודות, ואז בחר את הרגשות שברצונך לחקור.",
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
    mainCbtLink: "← חזרה לטופס ה-CBT הראשי",
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

const NEEDS = [
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
  { value: "comfort", label: "Comfort / ease" }
];

const FEELINGS = [
  "Angry", "Anxious", "Ashamed", "Betrayed", "Bored", "Confused", "Content",
  "Depressed", "Disappointed", "Embarrassed", "Excited", "Frustrated", "Guilty",
  "Happy", "Hopeful", "Hurt", "Insecure", "Interested", "Jealous", "Lonely",
  "Nervous", "Overwhelmed", "Powerless", "Proud", "Rejected", "Sad", "Scared",
  "Stressed", "Tired", "Vulnerable", "Worried"
];

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

function applyLanguage(lang) {
  const dict = TEXT[lang] || TEXT.en;
  document.documentElement.lang = lang;
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
}

function renderProgress() {
  const fill = document.getElementById("needs-progress-fill");
  const label = document.getElementById("needs-progress-label");
  fill.style.width = `${(currentStep / totalSteps) * 100}%`;
  label.textContent = `${t("stepOf")} ${currentStep} ${t("of")} ${totalSteps}`;
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
    chip.textContent = feeling;
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

  container.innerHTML = state.selectedFeelings.map((feeling) => {
    const detail = getDetail(feeling);
    const needOptions = NEEDS.map((need) => `
      <option value="${need.value}" ${detail.needs.includes(need.value) ? "selected" : ""}>${need.label}</option>
    `).join("");

    return `
      <div class="needs-card">
        <div class="needs-card-header">${feeling}</div>
        <div class="field">
          <label>${t("behindLabel")}</label>
          <div class="wrap-input"><textarea data-feeling="${feeling}" data-field="behind" placeholder="${t("writeBehindPrompt")}">${escapeHtml(detail.behind)}</textarea></div>
        </div>
        <div class="field">
          <label>${t("needsBehindLabel")}</label>
          <span class="hint">${t("needHint")}</span>
          <div class="wrap-input needs-select-wrap">
            <select multiple size="8" data-feeling="${feeling}" data-field="needs">
              ${needOptions}
            </select>
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

  container.querySelectorAll("select[data-field='needs']").forEach((el) => {
    el.addEventListener("change", (event) => {
      const detail = getDetail(event.target.dataset.feeling);
      detail.needs = [...event.target.selectedOptions].map((option) => option.value);
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

  container.innerHTML = state.selectedFeelings.map((feeling) => {
    const detail = getDetail(feeling);
    const visibleNeeds = NEEDS.filter((need) => detail.needs.includes(need.value));
    const needOptions = visibleNeeds.length
      ? visibleNeeds.map((need) => `
          <option value="${need.value}" ${detail.selectedNeed === need.value ? "selected" : ""}>${need.label}</option>
        `).join("")
      : '<option value="">No need selected in the previous step</option>';

    return `
      <div class="needs-card">
        <div class="needs-card-header">${feeling}</div>
        <div class="field">
          <label>${t("emotionLabel")}</label>
          <div class="wrap-input"><input type="text" value="${escapeHtml(feeling)}" readonly></div>
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
  container.innerHTML = state.selectedFeelings.map((feeling) => {
    const detail = getDetail(feeling);
    const needLabel = NEEDS.find((need) => need.value === detail.selectedNeed)?.label || t("noNeedSelected");
    const needList = detail.needs.length
      ? detail.needs.map((need) => NEEDS.find((item) => item.value === need)?.label || need).join(", ")
      : t("noNeedsSelected");

    return `
      <div class="needs-card summary-card">
        <div class="needs-card-header">${feeling}</div>
        <div class="summary-row"><strong>${t("feelingReviewTitle")}</strong> ${escapeHtml(detail.behind || t("notFilled"))}</div>
        <div class="summary-row"><strong>${t("needsReviewTitle")}</strong> ${escapeHtml(needList)}</div>
        <div class="summary-row"><strong>${t("selectedNeedTitle")}</strong> ${escapeHtml(needLabel)}</div>
        <div class="summary-row"><strong>${t("whatWillGiveReview")}</strong> ${escapeHtml(detail.whatWillGive || t("notFilled"))}</div>
      </div>
    `;
  }).join("");
}

function showStep(step) {
  document.querySelectorAll(".needs-step").forEach((el) => {
    el.hidden = Number(el.dataset.step) !== step;
  });

  const prevBtn = document.getElementById("needs-btn-prev");
  const nextBtn = document.getElementById("needs-btn-next");

  prevBtn.hidden = step === 1;
  prevBtn.textContent = t("back");
  nextBtn.textContent = step === totalSteps ? "Finish" : t("next");
  renderProgress();
}

function validateCurrentStep() {
  if (currentStep === 1 && !state.selectedFeelings.length) {
    alert(t("saveMessage"));
    return false;
  }

  if (currentStep === 2) {
    const hasMissingFeeling = state.selectedFeelings.some((feeling) => {
      const detail = getDetail(feeling);
      return !detail.behind.trim() || !detail.needs.length;
    });

    if (hasMissingFeeling) {
      alert(t("saveMessage2"));
      return false;
    }
  }

  if (currentStep === 3) {
    const hasMissingNeed = state.selectedFeelings.some((feeling) => {
      const detail = getDetail(feeling);
      return !detail.selectedNeed || !detail.whatWillGive.trim();
    });

    if (hasMissingNeed) {
      alert(t("saveMessage3"));
      return false;
    }
  }

  return true;
}

function collectNeedsEntry() {
  return {
    id: Date.now(),
    type: "needs",
    title: document.getElementById("needs-title").value.trim(),
    date: document.getElementById("needs-date").value,
    situation: document.getElementById("needs-situation").value.trim(),
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
  if (!validateCurrentStep()) return;

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
    localStorage.removeItem("cbtNeedsReturnToStep");
    window.location.href = `index.html#step${returnToStep}`;
    return;
  }

  currentStep += 1;
  showStep(currentStep);
}

function handlePrev() {
  if (currentStep <= 1) return;
  currentStep -= 1;
  showStep(currentStep);
}

document.getElementById("needs-btn-next").addEventListener("click", handleNext);
document.getElementById("needs-btn-prev").addEventListener("click", handlePrev);

const languageSelect = document.getElementById("language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
}

const savedFeelingsDraft = JSON.parse(localStorage.getItem(FEELINGS_DRAFT_KEY) || "[]");
if (Array.isArray(savedFeelingsDraft) && savedFeelingsDraft.length) {
  state.selectedFeelings = savedFeelingsDraft;
}

const savedLang = localStorage.getItem(LANG_KEY) || "en";
applyLanguage(savedLang);
document.getElementById("needs-date").valueAsDate = new Date();
renderEmotionPicker();
renderStepTwo();
renderStepThree();
renderStepFour();
showStep(currentStep);
