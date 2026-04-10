(() => {
  const { characters: archiveCharacters, focusNames: archiveFocusNames } = window.APP_DATA;

  const characterGrid = document.querySelector("#character-grid");
  const profileSheet = document.querySelector("#profile-sheet");
  const filterButtons = [...document.querySelectorAll(".filter-btn")];
  const searchInput = document.querySelector("#character-search");
  const archiveResult = document.querySelector("#archive-result");
  const statTotal = document.querySelector("#stat-total");
  const statSports = document.querySelector("#stat-sports");
  const statOutsider = document.querySelector("#stat-outsider");
  const statFocus = document.querySelector("#stat-focus");

  const state = {
    activeFilter: "all",
    selectedName: archiveCharacters[0]?.name ?? "",
    keyword: "",
  };

  function isSportsMember(character) {
    return character.role.includes("体育部");
  }

  function isFocusCharacter(character) {
    return archiveFocusNames.includes(character.name);
  }

  function matchesKeyword(character) {
    if (!state.keyword.trim()) {
      return true;
    }

    const keyword = state.keyword.trim().toLowerCase();
    const source = [
      character.name,
      character.role,
      character.school,
      character.dorm,
      character.summary,
      ...(character.clues || []),
    ]
      .join(" ")
      .toLowerCase();

    return source.includes(keyword);
  }

  function matchesFilter(character) {
    if (state.activeFilter === "sports") {
      return isSportsMember(character);
    }

    if (state.activeFilter === "outsider") {
      return !isSportsMember(character);
    }

    if (state.activeFilter === "focus") {
      return archiveFocusNames.includes(character.name);
    }

    return true;
  }

  function relatedCharacters(character) {
    return archiveCharacters.filter((item) => {
      if (item.name === character.name) {
        return false;
      }

      const source = `${character.summary} ${(character.clues || []).join(" ")}`;
      const reverse = `${item.summary} ${(item.clues || []).join(" ")}`;
      return source.includes(item.name) || reverse.includes(character.name);
    });
  }

  function relevanceLabel(character) {
    if (isFocusCharacter(character)) {
      return "高";
    }

    if (!isSportsMember(character)) {
      return "中";
    }

    return "一般";
  }

  function renderStats() {
    statTotal.textContent = String(archiveCharacters.length);
    statSports.textContent = String(archiveCharacters.filter(isSportsMember).length);
    statOutsider.textContent = String(archiveCharacters.filter((item) => !isSportsMember(item)).length);
    statFocus.textContent = String(archiveCharacters.filter(isFocusCharacter).length);
  }

  function renderGrid() {
    const filtered = archiveCharacters.filter(
      (character) => matchesFilter(character) && matchesKeyword(character)
    );

    if (!filtered.find((item) => item.name === state.selectedName)) {
      state.selectedName = filtered[0]?.name ?? "";
    }

    archiveResult.textContent = `当前显示 ${filtered.length} / ${archiveCharacters.length} 人`;

    if (filtered.length === 0) {
      characterGrid.innerHTML =
        '<article class="empty-card"><strong>没有匹配结果</strong><p>试试换一个筛选条件，或者减少搜索关键词。</p></article>';
      return;
    }

    characterGrid.innerHTML = filtered
      .map(
        (character) => `
          <article class="character-card ${character.name === state.selectedName ? "selected" : ""}" data-name="${character.name}">
            <p class="character-meta">${character.role}</p>
            <h3>${character.name}</h3>
            <div class="tag-list">
              ${character.clues.slice(0, 3).map((item) => `<span class="tag">${item}</span>`).join("")}
            </div>
            <p class="character-detail"><strong>宿舍：</strong>${character.dorm}</p>
            <p class="character-detail"><strong>摘要：</strong>${character.summary}</p>
          </article>
        `
      )
      .join("");

    [...document.querySelectorAll(".character-card")].forEach((card) => {
      card.addEventListener("click", () => {
        state.selectedName = card.dataset.name;
        renderGrid();
        renderProfile();
      });
    });
  }

  function renderProfile() {
    const character = archiveCharacters.find((item) => item.name === state.selectedName);

    if (!character) {
      profileSheet.innerHTML = "<p class='muted-copy'>当前筛选下没有可显示的档案。</p>";
      return;
    }

    const related = relatedCharacters(character);

    profileSheet.innerHTML = `
      <article class="profile-card-main">
        <div class="profile-hero">
          <div class="profile-avatar">${character.name.slice(0, 1)}</div>
          <div>
            <p class="eyebrow">Selected Character</p>
            <h3>${character.name}</h3>
            <p class="character-meta">${character.role}</p>
          </div>
        </div>
        <div class="tag-list">
          ${character.clues.map((item) => `<span class="tag">${item}</span>`).join("")}
        </div>
        <div class="profile-summary-row">
          <div class="profile-metric">
            <span>案件相关性</span>
            <strong>${relevanceLabel(character)}</strong>
          </div>
          <div class="profile-metric">
            <span>身份归类</span>
            <strong>${isSportsMember(character) ? "体育部" : "外部人物"}</strong>
          </div>
        </div>
        <div class="detail-grid">
          <section class="detail-block">
            <strong>身份信息</strong>
            <p>${character.school}</p>
          </section>
          <section class="detail-block">
            <strong>宿舍位置</strong>
            <p>${character.dorm}</p>
          </section>
          <section class="detail-block">
            <strong>人物设定</strong>
            <p>${character.summary}</p>
          </section>
          <section class="detail-block">
            <strong>相关人物</strong>
            <p>${related.length > 0 ? related.map((item) => item.name).join("、") : "当前设定中没有直接点名关联人物。"}</p>
          </section>
          <section class="detail-block">
            <strong>侦查建议</strong>
            <p>把这份档案和游戏页里的线索墙、公开资料页里的改编说明一起对照，通常更容易定位结论来源。</p>
          </section>
        </div>
      </article>
    `;
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeFilter = button.dataset.filter;
      renderGrid();
      renderProfile();
    });
  });

  searchInput.addEventListener("input", (event) => {
    state.keyword = event.target.value;
    renderGrid();
    renderProfile();
  });

  renderStats();
  renderGrid();
  renderProfile();
})();
