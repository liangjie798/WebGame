(() => {
  const {
    loreSources: publicLoreSources,
    evidence: publicEvidence,
    missions: publicMissions,
  } = window.APP_DATA;

  const loreList = document.querySelector("#lore-list");
  const adaptationList = document.querySelector("#adaptation-list");
  const evidenceList = document.querySelector("#evidence-list");
  const missionMap = document.querySelector("#mission-map");

  function renderLore() {
    loreList.innerHTML = publicLoreSources
      .map(
        (item) => `
          <article class="lore-card">
            <p class="eyebrow">Source</p>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
            <a href="${item.url}" target="_blank" rel="noreferrer">查看公开来源</a>
          </article>
        `
      )
      .join("");
  }

  function renderAdaptation() {
    adaptationList.innerHTML = publicLoreSources
      .map(
        (item) => `
          <article class="adapt-card">
            <h3>${item.title}</h3>
            <p>${item.use || "作为整体叙事氛围与谜题灵感使用。"}</p>
          </article>
        `
      )
      .join("");
  }

  function renderEvidence() {
    evidenceList.innerHTML = publicEvidence
      .map(
        (item) => `
          <article class="evidence-item">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
          </article>
        `
      )
      .join("");
  }

  function renderMissionMap() {
    missionMap.innerHTML = publicMissions
      .map(
        (mission, index) => `
          <article class="map-card">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <strong>${mission.title}</strong>
            <p>${mission.objective}</p>
          </article>
        `
      )
      .join("");
  }

  renderLore();
  renderAdaptation();
  renderEvidence();
  renderMissionMap();
})();
