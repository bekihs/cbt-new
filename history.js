const STORAGE_KEY = "cbtEntries";
const LANG_KEY = "cbtLanguage";

const TEXT = {
  en: {
    historyTitle: "Past Entries",
    historySubtitle: "Everything you've saved on this device.",
    newEntryLink: "← New entry",
    deleteLabel: "Delete",
    noneSelected: "None selected.",
    noFeelingsRecorded: "No feelings recorded.",
    situation: "Situation",
    feeling: "How You Felt",
    behindFeeling: "What sits behind this feeling:",
    needBehindFeeling: "Need behind this feeling:",
    selectedNeed: "Selected need:",
    whatGivesNeed: "What will give you this need:",
    noNeedSelected: "No need selected",
    notFilled: "Not filled in",
    untitled: "Untitled entry",
    followUpScheduled: " · follow-up scheduled",
    physicalSensations: "Physical Sensations",
    unhelpfulThought: "Unhelpful Thought",
    firstThought: "(Your first thought)",
    interpretation: "Interpretation",
    pastExperiences: "Past Experiences",
    underlyingBeliefs: "Underlying Beliefs",
    consequence: "Consequence / Behavior",
    evidenceFor: "Evidence That Supports the Thought",
    evidenceAgainst: "Evidence Against the Thought",
    distortions: "Cognitive Distortions",
    noDistortions: "No thinking traps selected.",
    balancedThought: "Balanced Alternative Thought",
    newEmotionBehavior: "New Emotion & Behavior",
    nextAction: "What You'll Do Differently",
    changed: "How You Feel Now",
    needs: "Needs"
  },
  he: {
    historyTitle: "רשומות קודמות",
    historySubtitle: "הכל שאתה שומר במכשיר הזה.",
    newEntryLink: "← רשומה חדשה",
    deleteLabel: "מחק",
    noneSelected: "לא נבחרו.",
    noFeelingsRecorded: "לא נרשמו רגשות.",
    situation: "המצב",
    feeling: "איך הרגשת",
    behindFeeling: "מה עומד מאחורי הרגש הזה:",
    needBehindFeeling: "הצורך שמאחורי הרגש:",
    selectedNeed: "הצורך שנבחר:",
    whatGivesNeed: "מה ייתן לך את הצורך הזה:",
    noNeedSelected: "לא נבחר צורך",
    notFilled: "לא מולא",
    untitled: "רשומה ללא כותרת",
    followUpScheduled: " · נקבע מעקב",
    physicalSensations: "תחושות גופניות",
    unhelpfulThought: "מחשבה לא מועילה",
    firstThought: "(המחשבה הראשונה)",
    interpretation: "פירוש",
    pastExperiences: "חוויות מהעבר",
    underlyingBeliefs: "אמונות בסיסיות",
    consequence: "תוצאה / התנהגות",
    evidenceFor: "ראיות התומכות במחשבה",
    evidenceAgainst: "ראיות נגד המחשבה",
    distortions: "עיוותי חשיבה",
    noDistortions: "לא נבחרו מלכודות חשיבה.",
    balancedThought: "מחשבה חלופית מאוזנת",
    newEmotionBehavior: "רגש והתנהגות חדשים",
    nextAction: "מה תעשה אחרת",
    changed: "איך אתה מרגיש עכשיו",
    needs: "צרכים"
  }
};

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
    if (dict[key]) el.textContent = dict[key];
  });

  const selector = document.getElementById("language-select");
  if (selector) selector.value = lang;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}

function levelBarHtml(value) {
  return `<div class="level-slider" style="pointer-events:none">
    <div class="track"></div>
    <div class="fill" style="width:${value}%"></div>
  </div>`;
}

function emotionChipsHtml(list) {
  if (!list?.length) return `<span class="r-empty">${t("noneSelected")}</span>`;
  return list
    .map((e) => `<span class="review-chip" style="background:${e.color || "#8b91a5"};border-color:${e.color || "#8b91a5"};color:#fff">${escapeHtml(e.emotion)} ${e.intensity}%</span>`)
    .join("");
}

function textCardHtml(title, text) {
  return `
    <div class="timeline-item">
      <div class="timeline-node"></div>
      <div class="review-card">
        <div class="r-title">${title}</div>
        ${text ? `<div class="r-text">${escapeHtml(text)}</div>` : `<span class="r-empty">Not filled in.</span>`}
      </div>
    </div>
  `;
}

function needsSummaryHtml(entry) {
  if (!entry.feelings?.length) {
    return `<span class="r-empty">${t("noFeelingsRecorded")}</span>`;
  }

  return entry.feelings.map(({ feeling, behind, needs, selectedNeed, whatWillGive }) => {
    const labels = needs?.length
      ? needs.map((need) => NEEDS.find((item) => item.value === need)?.label || need).join(", ")
      : t("noNeedSelected");
    const selectedLabel = NEEDS.find((item) => item.value === selectedNeed)?.label || t("noNeedSelected");

    return `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="review-card">
          <div class="r-title">${escapeHtml(feeling)}</div>
          <div class="summary-row"><strong>${t("behindFeeling")}</strong> ${escapeHtml(behind || t("notFilled"))}</div>
          <div class="summary-row"><strong>${t("needBehindFeeling")}</strong> ${escapeHtml(labels)}</div>
          <div class="summary-row"><strong>${t("selectedNeed")}</strong> ${escapeHtml(selectedLabel)}</div>
          <div class="summary-row"><strong>${t("whatGivesNeed")}</strong> ${escapeHtml(whatWillGive || t("notFilled"))}</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderEntry(entry) {
  const wrap = document.createElement("div");
  wrap.className = "entry-card";

  const heading = escapeHtml(entry.title || t("untitled"));
  const dateStr = escapeHtml(entry.date || "");
  const followUpNote = entry.followedUp ? escapeHtml(t("followUpScheduled")) : "";

  const distortionsHtml = entry.distortions?.length
    ? entry.distortions.map((d) => `<span class="review-chip">${escapeHtml(d)}</span>`).join("")
    : `<span class="r-empty">${t("noDistortions")}</span>`;

  const timelineHtml = entry.type === "needs"
    ? [
        textCardHtml(t("situation"), entry.situation),
        needsSummaryHtml(entry),
      ].join("")
    : [
        textCardHtml("Situation", entry.situation),
        `<div class="timeline-item">
          <div class="timeline-node"></div>
          <div class="review-card">
            <div class="r-title">${t("feeling")}</div>
            ${emotionChipsHtml(entry.initialEmotions)}
          </div>
        </div>`,
        textCardHtml(t("physicalSensations"), entry.physicalSensations),
        `<div class="timeline-item">
          <div class="timeline-node"></div>
          <div class="review-card">
            <div class="r-title">${t("unhelpfulThought")} <span class="r-sub">${t("firstThought")}</span></div>
            <div class="r-text">${escapeHtml(entry.automaticThought) || "(no thought recorded)"}</div>
            <div class="level-row"><span class="level-value">Level: <b>${entry.level ?? 0}</b>/100</span></div>
            ${levelBarHtml(entry.level ?? 0)}
          </div>
        </div>`,
        textCardHtml(t("interpretation"), entry.interpretation),
        textCardHtml(t("pastExperiences"), entry.pastExperiences),
        textCardHtml(t("underlyingBeliefs"), entry.beliefs),
        textCardHtml(t("consequence"), entry.consequence),
        textCardHtml(t("evidenceFor"), entry.evidenceFor),
        textCardHtml(t("evidenceAgainst"), entry.evidenceAgainst),
        `<div class="timeline-item">
          <div class="timeline-node"></div>
          <div class="review-card">
            <div class="r-title">${t("distortions")}</div>
            ${distortionsHtml}
          </div>
        </div>`,
        textCardHtml(t("balancedThought"), entry.balancedThought),
        textCardHtml(t("newEmotionBehavior"), entry.newEmotionBehavior),
        textCardHtml(t("nextAction"), entry.nextAction),
        `<div class="timeline-item">
          <div class="timeline-node"></div>
          <div class="review-card">
            <div class="r-title">${t("changed")}</div>
            ${emotionChipsHtml(entry.finalEmotions)}
          </div>
        </div>`,
      ].join("");

  wrap.innerHTML = `
    <div class="entry-header">
      <h3>${heading}</h3>
      <button class="delete-btn" data-id="${entry.id}">${t("deleteLabel")}</button>
    </div>
    <div class="meta">${dateStr}${followUpNote}</div>
    <div class="timeline">${timelineHtml}</div>
  `;

  return wrap;
}

function deleteEntry(id) {
  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  const next = entries.filter((e) => e.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  render();
}

function render() {
  const container = document.getElementById("entries");
  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").reverse();

  if (!entries.length) {
    container.innerHTML = '<p class="empty-state">No entries yet.</p>';
    return;
  }

  container.innerHTML = "";
  entries.forEach((entry) => container.appendChild(renderEntry(entry)));

  container.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", () => deleteEntry(Number(btn.dataset.id)));
  });
}

const languageSelect = document.getElementById("language-select");
if (languageSelect) {
  languageSelect.addEventListener("change", (event) => applyLanguage(event.target.value));
}

applyLanguage(localStorage.getItem(LANG_KEY) || "en");
render();
