const STORAGE_KEY = "cbtEntries";
const LANG_KEY = "cbtLanguage";

const TEXT = {
  en: {
    historyTitle: "Past Entries",
    historySubtitle: "Everything you've saved on this device.",
    newEntryLink: "← New entry",
    deleteLabel: "Delete"
  },
  he: {
    historyTitle: "רשומות קודמות",
    historySubtitle: "הכל שאתה שומר במכשיר הזה.",
    newEntryLink: "← רשומה חדשה",
    deleteLabel: "מחק"
  }
};

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
  if (!list?.length) return `<span class="r-empty">None selected.</span>`;
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
    return `<span class="r-empty">No feelings recorded.</span>`;
  }

  return entry.feelings.map(({ feeling, behind, needs, selectedNeed, whatWillGive }) => {
    const labels = needs?.length
      ? needs.map((need) => NEEDS.find((item) => item.value === need)?.label || need).join(", ")
      : "No need selected";
    const selectedLabel = NEEDS.find((item) => item.value === selectedNeed)?.label || "No need selected";

    return `
      <div class="timeline-item">
        <div class="timeline-node"></div>
        <div class="review-card">
          <div class="r-title">${escapeHtml(feeling)}</div>
          <div class="summary-row"><strong>What sits behind this feeling:</strong> ${escapeHtml(behind || "Not filled in")}</div>
          <div class="summary-row"><strong>Need behind this feeling:</strong> ${escapeHtml(labels)}</div>
          <div class="summary-row"><strong>Selected need:</strong> ${escapeHtml(selectedLabel)}</div>
          <div class="summary-row"><strong>What will give you this need:</strong> ${escapeHtml(whatWillGive || "Not filled in")}</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderEntry(entry) {
  const wrap = document.createElement("div");
  wrap.className = "entry-card";

  const heading = escapeHtml(entry.title || "Untitled entry");
  const dateStr = escapeHtml(entry.date || "");
  const followUpNote = entry.followedUp ? " &middot; follow-up scheduled" : "";

  const distortionsHtml = entry.distortions?.length
    ? entry.distortions.map((d) => `<span class="review-chip">${escapeHtml(d)}</span>`).join("")
    : `<span class="r-empty">No thinking traps selected.</span>`;

  const timelineHtml = entry.type === "needs"
    ? [
        textCardHtml("Situation", entry.situation),
        needsSummaryHtml(entry),
      ].join("")
    : [
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
            <div class="r-text">${escapeHtml(entry.automaticThought) || "(no thought recorded)"}</div>
            <div class="level-row"><span class="level-value">Level: <b>${entry.level ?? 0}</b>/100</span></div>
            ${levelBarHtml(entry.level ?? 0)}
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
