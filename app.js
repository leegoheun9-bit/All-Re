// Pre-seeded sites list
const DEFAULT_SITES = [
    {
        id: "mirai-studio",
        name: "MIRAI STUDIO (미래 스튜디오)",
        url: "../미디어파이프활용-사업웹/index.html",
        category: "ai",
        status: "active",
        desc: "실시간 Web 3D AI 버튜버 & 아바타 메이커. 스마트폰이나 노트북 웹캠만으로 사용자의 표정과 10개 손가락 관절 모션을 추적하여 3D 아바타(.vrm)에 리깅하는 실시간 라이브 방송 솔루션입니다.",
        tags: ["Three.js", "MediaPipe", "WebGL", "Kalidokit"],
        dateAdded: "2026-07-15T10:57:00Z",
        monthlyRevenue: 1200000,
        monthlyVisitors: 4500
    },
    {
        id: "echo-shadowing",
        name: "Echo Shadowing (실시간 AI 다국어 섀도잉 발음 튜터)",
        url: "https://echoshadow.life/",
        category: "ai",
        status: "active",
        desc: "사용자의 발음을 실시간으로 듣고 원어민 발음과의 유사도를 분석하여 정밀한 피드백을 제공하는 AI 외국어 학습 섀도잉 튜터 서비스입니다.",
        tags: ["AI", "Speech Recognition", "Shadowing", "English Study"],
        dateAdded: "2026-07-16T08:05:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "v-taxflow",
        name: "Vanguard Tax Flow (뱅가드 텍스 플로우)",
        url: "https://v-taxflow.cloud",
        category: "business",
        status: "active",
        desc: "미국 독립 계약자, 1인 사업자 및 프리랜서를 위한 AI 세금 및 현금 흐름 최적화 솔루션. Plaid 연동으로 세금 공제 비용을 찾고 Form 1040-ES 납부서를 내보냅니다.",
        tags: ["AI Tax", "Freelancer", "Finance"],
        dateAdded: "2026-07-16T08:08:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "magic-kids-ar",
        name: "MagicKids AR (매직키즈 AR)",
        url: "https://magickidsar.com",
        category: "game",
        status: "active",
        desc: "AI와 증강현실(AR) 기술을 결합하여 구연동화, 낱말 놀이, 동물 변신 등을 즐기는 인터랙티브 유아 교육 플랫폼입니다. 신체 움직임으로 상호작용합니다.",
        tags: ["AR", "MediaPipe", "Education", "Kids"],
        dateAdded: "2026-07-16T08:09:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "petpic-ai",
        name: "PetPic AI (펫픽 AI)",
        url: "https://petpicai.art",
        category: "ai",
        status: "active",
        desc: "반려동물 사진을 업로드하여 다양한 테마 스타일의 예쁜 고해상도 AI 프로필 이미지로 변환해 주는 반려동물 특화 AI 이미지 생성 서비스입니다.",
        tags: ["AI Profile", "Pet Art", "Image Gen"],
        dateAdded: "2026-07-16T08:10:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "bridge-global-ai",
        name: "Bridge Global AI (브릿지 글로벌 AI)",
        url: "https://b-globalai.live",
        category: "ai",
        status: "active",
        desc: "뇌과학과 인공지능을 융합하여 인지 부하, 생리적 상태 및 신경 경로를 분석하고 실시간으로 지능적 대응을 수행하는 차세대 Neural-AI 인터페이스입니다.",
        tags: ["Neural AI", "Cognitive AI", "Bio-Tech"],
        dateAdded: "2026-07-16T08:10:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "care-vision-ai",
        name: "CareVision AI (케어비전 AI)",
        url: "https://carevisionai.co.kr",
        category: "ai",
        status: "active",
        desc: "시니어를 위한 스마트 케어 솔루션. 실시간 카메라 화면을 분석하여 낙상 감지, 환자 상태 모니터링 및 실시간 알림을 제공하는 실시간 헬스케어 시스템입니다.",
        tags: ["Smart Care", "Fall Detection", "Senior Tech"],
        dateAdded: "2026-07-16T08:10:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "repurpose-ai",
        name: "Connect AI LAB (커넥트 AI 랩)",
        url: "https://repurposeai.live",
        category: "ai",
        status: "active",
        desc: "신경 과학과 인공지능의 경계에서 탄생한 Connect AI LAB 플랫폼. 인지 부하, 생리적 반응 패턴 등을 분석하여 적응형 신경 인터페이스 서비스를 구축합니다.",
        tags: ["Brain AI", "Interface", "R&D"],
        dateAdded: "2026-07-16T08:10:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "creator-guard",
        name: "CreatorGuard (크리에이터 가드)",
        url: "https://creatorguard.cloud",
        category: "business",
        status: "active",
        desc: "유튜브 크리에이터 및 콘텐츠 창작자들을 위해 저작권 보호, 표절 감지, 자동 DMCA 요청 및 채널 중단에 대비한 수익 보호 장치를 제공하는 크리에이터 특화 안심 서비스입니다.",
        tags: ["Copyright", "Creator Economy", "Protection"],
        dateAdded: "2026-07-16T08:11:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "car-tuning-ai",
        name: "CarTuning AI (카튜닝 AI)",
        url: "https://cartuningai.shop",
        category: "ai",
        status: "active",
        desc: "차량 사진 한 장만으로 외관 휠, 스포일러, 데칼, 도색 등을 10초 만에 가상 시뮬레이션해 주는 이미지 생성 기반 자동차 가상 튜닝 시뮬레이터입니다.",
        tags: ["Car Tuning", "Virtual Simulation", "Image Gen"],
        dateAdded: "2026-07-16T08:11:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    },
    {
        id: "nabula-arc",
        name: "Nabula Arc (네뷸라 아크)",
        url: "https://nabulaarc.xyz",
        category: "game",
        status: "active",
        desc: "Gemini 2.0 Flash AI 연동 및 실시간 목소리/음성 제어가 결합된 레트로 감성의 고성능 HTML5 Canvas 우주 비행기 슈팅 게임입니다.",
        tags: ["AI Game", "Voice Control", "Space Shooter"],
        dateAdded: "2026-07-16T08:11:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0
    }
];

// Pre-seeded ideas
const DEFAULT_IDEAS = [
    {
        id: "idea-1",
        name: "인물 사진 기반 3D 웹 아바타 메이커",
        desc: "사용자 셀카 1장을 입력받아 즉시 three-vrm 규격의 3D 아바타로 렌더링하고, 모션 캡쳐를 연동하는 차세대 서비스"
    },
    {
        id: "idea-2",
        name: "PDF 기반 AI 논문 요약 및 변역 리뷰어",
        desc: "수십 장의 복잡한 해외 논문이나 IT 보고서 PDF를 업로드하면 실시간 3줄 핵심 요약 및 한글 리포트를 이메일로 자동 전송"
    }
];

// App State
let sites = [];
let ideas = [];
let currentCategory = "all";
let currentTag = "";
let currentSearch = "";
let currentSort = "name";
let editingSiteId = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    loadSites();
    loadIdeas();
    renderStats();
    renderFilters();
    renderSites();
    renderIdeas();
    setupEventListeners();
});

// Load from LocalStorage or default
function loadSites() {
    const saved = localStorage.getItem("allre_sites");
    if (saved) {
        try {
            sites = JSON.parse(saved);

            // Migration: Add monthlyRevenue and monthlyVisitors to legacy saved cards
            let needsSave = false;
            sites.forEach(site => {
                if (site.monthlyRevenue === undefined) {
                    const defaultSite = DEFAULT_SITES.find(d => d.id === site.id);
                    site.monthlyRevenue = defaultSite ? defaultSite.monthlyRevenue : 0;
                    site.monthlyVisitors = defaultSite ? defaultSite.monthlyVisitors : 0;
                    needsSave = true;
                }
            });
            if (needsSave) {
                saveSites();
            }
        } catch (e) {
            console.error("Failed to parse saved sites, loading defaults.", e);
            sites = [...DEFAULT_SITES];
        }
    } else {
        sites = [...DEFAULT_SITES];
        saveSites();
    }
}

function saveSites() {
    localStorage.setItem("allre_sites", JSON.stringify(sites));
}

// Sandbox Ideas Functions
function loadIdeas() {
    const saved = localStorage.getItem("allre_ideas");
    if (saved) {
        try {
            ideas = JSON.parse(saved);
        } catch (e) {
            console.error("Failed to parse saved ideas, loading defaults.", e);
            ideas = [...DEFAULT_IDEAS];
        }
    } else {
        ideas = [...DEFAULT_IDEAS];
        saveIdeas();
    }
}

function saveIdeas() {
    localStorage.setItem("allre_ideas", JSON.stringify(ideas));
}

function renderIdeas() {
    const list = document.getElementById("sandbox-list");
    list.innerHTML = "";

    if (ideas.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 2rem 1rem; color: var(--text-secondary);">
                <div style="font-size: 2rem; margin-bottom: 0.5rem;">💡</div>
                <div style="font-size: 0.9rem; font-weight: 600;">아이디어 보드가 비어있습니다</div>
                <div style="font-size: 0.75rem; margin-top: 0.25rem;">새로운 번뜩이는 기획을 추가해 보세요!</div>
            </div>
        `;
        return;
    }

    ideas.forEach(idea => {
        const card = document.createElement("div");
        card.className = "idea-card";
        card.innerHTML = `
            <h3 class="idea-title">${escapeHtml(idea.name)}</h3>
            <p class="idea-desc">${escapeHtml(idea.desc)}</p>
            <div class="idea-actions">
                <button class="btn-delete-idea" onclick="deleteIdea('${idea.id}')">🗑️ 삭제</button>
                <button class="btn-convert-idea" onclick="convertToProject('${idea.id}')">🚀 프로젝트 변환</button>
            </div>
        `;
        list.appendChild(card);
    });
}

function addIdea(name, desc) {
    const newIdea = {
        id: "idea-" + Date.now(),
        name,
        desc
    };
    ideas.unshift(newIdea);
    saveIdeas();
    renderIdeas();
}

function deleteIdea(id) {
    ideas = ideas.filter(idea => idea.id !== id);
    saveIdeas();
    renderIdeas();
}

function convertToProject(id) {
    const idea = ideas.find(i => i.id === id);
    if (!idea) return;

    // Fill the web site registration form with the idea details
    openAddModal();
    document.getElementById("site-name").value = idea.name;
    document.getElementById("site-desc").value = idea.desc;

    // Remove from sandbox drawer
    deleteIdea(id);

    // Close sandbox drawer
    toggleSandbox(false);
}

function toggleSandbox(show) {
    const drawer = document.getElementById("sandbox-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    if (show) {
        drawer.classList.add("active");
        backdrop.classList.add("active");
    } else {
        drawer.classList.remove("active");
        backdrop.classList.remove("active");
    }
}

// Render Header/Challenge Board stats
function renderStats() {
    const totalCount = sites.length;
    const goalPercent = Math.min((totalCount / 100) * 100, 100);

    document.getElementById("progress-bar").style.width = `${goalPercent}%`;
    document.getElementById("total-count-val").textContent = totalCount;

    // Sum revenue and visitors
    const totalRevenue = sites.reduce((sum, s) => sum + Number(s.monthlyRevenue || 0), 0);
    const totalVisitors = sites.reduce((sum, s) => sum + Number(s.monthlyVisitors || 0), 0);

    document.getElementById("stat-total-revenue").textContent = totalRevenue.toLocaleString() + "원";
    document.getElementById("stat-total-visitors").textContent = totalVisitors.toLocaleString() + "명";

    // Count stats by categories & status
    const activeCount = sites.filter(s => s.status === "active").length;
    const devCount = sites.filter(s => s.status === "dev").length;
    const aiCount = sites.filter(s => s.category === "ai").length;
    const gameCount = sites.filter(s => s.category === "game").length;
    const bizCount = sites.filter(s => s.category === "business").length;

    document.getElementById("stat-active").textContent = activeCount;
    document.getElementById("stat-dev").textContent = devCount;
    document.getElementById("stat-ai").textContent = aiCount;
    document.getElementById("stat-game").textContent = gameCount;
    document.getElementById("stat-biz").textContent = bizCount;
}

// Render dynamic tag filters based on all registered sites
function renderFilters() {
    const allTags = new Set();
    sites.forEach(site => {
        if (site.tags && Array.isArray(site.tags)) {
            site.tags.forEach(tag => allTags.add(tag.trim()));
        }
    });

    const tagFiltersContainer = document.getElementById("tag-filters");
    tagFiltersContainer.innerHTML = `<span class="tag-filter-title">태그 필터:</span>`;

    // All tag badge
    const allBadge = document.createElement("span");
    allBadge.className = `tag-badge-filter ${!currentTag ? 'active' : ''}`;
    allBadge.textContent = "전체";
    allBadge.onclick = () => filterByTag("");
    tagFiltersContainer.appendChild(allBadge);

    // Dynamic tag badges
    Array.from(allTags).sort().forEach(tag => {
        const badge = document.createElement("span");
        badge.className = `tag-badge-filter ${currentTag === tag ? 'active' : ''}`;
        badge.textContent = tag;
        badge.onclick = () => filterByTag(tag);
        tagFiltersContainer.appendChild(badge);
    });
}

// Filter Actions
function filterByCategory(category, element) {
    currentCategory = category;

    // Manage active tab state
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    element.classList.add("active");

    renderSites();
}

function filterByTag(tag) {
    currentTag = tag;
    renderFilters();
    renderSites();
}

function searchSites(query) {
    currentSearch = query.toLowerCase();
    renderSites();
}

function sortSites(criterion) {
    currentSort = criterion;
    renderSites();
}

// Render Web Card List
function renderSites() {
    const grid = document.getElementById("cards-grid");
    grid.innerHTML = "";

    // 1. Filter
    let filtered = sites.filter(site => {
        const matchesCategory = currentCategory === "all" || site.category === currentCategory;
        const matchesTag = !currentTag || (site.tags && site.tags.some(t => t.trim() === currentTag));
        const matchesSearch = !currentSearch ||
            site.name.toLowerCase().includes(currentSearch) ||
            site.desc.toLowerCase().includes(currentSearch) ||
            (site.tags && site.tags.some(t => t.toLowerCase().includes(currentSearch)));

        return matchesCategory && matchesTag && matchesSearch;
    });

    // 2. Sort
    filtered.sort((a, b) => {
        if (currentSort === "name") {
            return a.name.localeCompare(b.name);
        } else if (currentSort === "dateNew") {
            return new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0);
        } else if (currentSort === "dateOld") {
            return new Date(a.dateAdded || 0) - new Date(b.dateAdded || 0);
        } else if (currentSort === "status") {
            return a.status.localeCompare(b.status);
        }
        return 0;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <div class="empty-state-title">검색된 웹사이트가 없습니다</div>
                <div class="empty-state-desc">새로운 웹사이트를 등록하거나 필터링을 변경해 보세요.</div>
            </div>
        `;
        return;
    }

    filtered.forEach(site => {
        const card = document.createElement("div");
        card.className = "web-card";

        // Custom colored border gradients based on category
        let gradient = "linear-gradient(90deg, #8b5cf6, #10b981)";
        if (site.category === "ai") gradient = "linear-gradient(90deg, #a78bfa, #8b5cf6)";
        if (site.category === "game") gradient = "linear-gradient(90deg, #f43f5e, #fda4af)";
        if (site.category === "business") gradient = "linear-gradient(90deg, #10b981, #6ee7b7)";
        if (site.category === "utility") gradient = "linear-gradient(90deg, #3b82f6, #93c5fd)";
        card.style.setProperty("--accent-gradient", gradient);

        const categoryText = getCategoryLabel(site.category);
        const statusText = site.status === "active" ? "운영 중" : site.status === "dev" ? "개발 중" : "기획 단계";

        const tagBadges = (site.tags || []).map(tag => `<span class="card-tag">${escapeHtml(tag)}</span>`).join("");

        card.innerHTML = `
            <div class="card-header">
                <span class="card-category cat-${site.category}">${categoryText}</span>
                <span class="card-status status-${site.status}">
                    <span class="status-dot"></span>${statusText}
                </span>
            </div>
            <h2 class="card-title">${escapeHtml(site.name)}</h2>
            <p class="card-desc">${escapeHtml(site.desc)}</p>
            <div class="card-tags">
                ${tagBadges}
            </div>
            
            <!-- Financial Indicators -->
            <div style="display: flex; justify-content: space-between; margin-bottom: 1.2rem; font-size: 0.85rem; padding: 0.6rem 0.8rem; background: rgba(255, 255, 255, 0.02); border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.04);">
                <div style="display: flex; align-items: center; gap: 0.3rem;">
                    <span>💸</span>
                    <span style="color: var(--text-secondary);">월 수익:</span>
                    <span style="font-weight: 700; color: #fb7185;">${Number(site.monthlyRevenue || 0).toLocaleString()}원</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.3rem;">
                    <span>👥</span>
                    <span style="color: var(--text-secondary);">방문자:</span>
                    <span style="font-weight: 700; color: #34d399;">${Number(site.monthlyVisitors || 0).toLocaleString()}명</span>
                </div>
            </div>

            <div class="card-actions">
                <a href="${site.url}" target="_blank" class="btn-open">
                    바로가기 ↗
                </a>
                <button class="btn-edit" onclick="openEditModal('${site.id}')">
                    ✏️ 편집
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Helpers
function getCategoryLabel(cat) {
    switch (cat) {
        case "ai": return "AI / 3D";
        case "game": return "게임 (Game)";
        case "business": return "비즈니스 (Biz)";
        case "utility": return "유틸리티 (Utility)";
        default: return "기타 (Etc)";
    }
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Modal Form Operations
function openAddModal() {
    editingSiteId = null;
    document.getElementById("modal-title").textContent = "새 웹사이트 등록";
    document.getElementById("btn-delete-site").style.display = "none";
    document.getElementById("site-form").reset();
    document.getElementById("site-modal").classList.add("active");
}

function openEditModal(id) {
    const site = sites.find(s => s.id === id);
    if (!site) return;

    editingSiteId = id;
    document.getElementById("modal-title").textContent = "웹사이트 편집";
    document.getElementById("btn-delete-site").style.display = "block";

    document.getElementById("site-name").value = site.name;
    document.getElementById("site-url").value = site.url;
    document.getElementById("site-category").value = site.category;
    document.getElementById("site-status").value = site.status;
    document.getElementById("site-revenue").value = site.monthlyRevenue || 0;
    document.getElementById("site-visitors").value = site.monthlyVisitors || 0;
    document.getElementById("site-desc").value = site.desc;
    document.getElementById("site-tags").value = (site.tags || []).join(", ");

    document.getElementById("site-modal").classList.add("active");
}

function closeModal() {
    document.getElementById("site-modal").classList.remove("active");
}

function saveForm(event) {
    event.preventDefault();

    const name = document.getElementById("site-name").value;
    const url = document.getElementById("site-url").value;
    const category = document.getElementById("site-category").value;
    const status = document.getElementById("site-status").value;
    const monthlyRevenue = Number(document.getElementById("site-revenue").value) || 0;
    const monthlyVisitors = Number(document.getElementById("site-visitors").value) || 0;
    const desc = document.getElementById("site-desc").value;
    const tagsString = document.getElementById("site-tags").value;

    const tags = tagsString ? tagsString.split(",").map(t => t.trim()).filter(t => t.length > 0) : [];

    if (editingSiteId) {
        // Edit Mode
        const index = sites.findIndex(s => s.id === editingSiteId);
        if (index !== -1) {
            sites[index] = {
                ...sites[index],
                name,
                url,
                category,
                status,
                monthlyRevenue,
                monthlyVisitors,
                desc,
                tags
            };
        }
    } else {
        // Add Mode
        const newId = "site-" + Date.now();
        const newSite = {
            id: newId,
            name,
            url,
            category,
            status,
            monthlyRevenue,
            monthlyVisitors,
            desc,
            tags,
            dateAdded: new Date().toISOString()
        };
        sites.push(newSite);
    }

    saveSites();
    renderStats();
    renderFilters();
    renderSites();
    closeModal();
}

function deleteSite() {
    if (!editingSiteId) return;

    if (confirm("정말로 이 웹사이트 등록을 삭제하시겠습니까?")) {
        sites = sites.filter(s => s.id !== editingSiteId);
        saveSites();
        renderStats();
        renderFilters();
        renderSites();
        closeModal();
    }
}

// Export and Import Data Functions
function exportData() {
    try {
        const dataStr = JSON.stringify(sites, null, 4);
        const dataBlob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(dataBlob);

        const dateStr = new Date().toISOString().slice(0, 10);
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = `all-re-backup-${dateStr}.json`;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    } catch (e) {
        alert("백업 중 오류가 발생했습니다: " + e.message);
    }
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (!Array.isArray(imported)) {
                throw new Error("백업 파일 형식이 유효하지 않습니다. (배열이 아님)");
            }

            // Simple validation of required keys
            const isValid = imported.every(site =>
                site.id && site.name && site.url && site.category && site.status && site.desc
            );

            if (!isValid) {
                throw new Error("필수 항목(이름, 경로, 카테고리 등)이 누락된 항목이 있습니다.");
            }

            if (confirm(`가져온 ${imported.length}개의 웹사이트 데이터를 복원하시겠습니까? 기존 데이터는 덮어씌워집니다.`)) {
                sites = imported;
                saveSites();
                renderStats();
                renderFilters();
                renderSites();
                alert("데이터가 성공적으로 복원되었습니다.");
            }
        } catch (err) {
            alert("데이터 복원에 실패했습니다: " + err.message);
        }
        // Reset file input value
        event.target.value = "";
    };
    reader.readAsText(file);
}

// Event Listeners setup
function setupEventListeners() {
    // Backup & Restore
    document.getElementById("btn-export").addEventListener("click", exportData);
    document.getElementById("btn-import-trigger").addEventListener("click", () => {
        document.getElementById("import-file").click();
    });
    document.getElementById("import-file").addEventListener("change", importData);

    // Sandbox Drawer controls
    document.getElementById("btn-toggle-sandbox").addEventListener("click", () => toggleSandbox(true));
    document.getElementById("btn-close-sandbox").addEventListener("click", () => toggleSandbox(false));
    document.getElementById("drawer-backdrop").addEventListener("click", () => toggleSandbox(false));

    // Sandbox Add Idea form
    document.getElementById("sandbox-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const titleInput = document.getElementById("idea-title-input");
        const descInput = document.getElementById("idea-desc-input");
        addIdea(titleInput.value, descInput.value);
        titleInput.value = "";
        descInput.value = "";
    });

    // Modal controls
    document.getElementById("btn-add-site").addEventListener("click", openAddModal);
    document.getElementById("btn-close-modal").addEventListener("click", closeModal);
    document.getElementById("site-form").addEventListener("submit", saveForm);
    document.getElementById("btn-delete-site").addEventListener("click", deleteSite);

    // Search input
    document.getElementById("search-box").addEventListener("input", (e) => {
        searchSites(e.target.value);
    });

    // Sort select
    document.getElementById("sort-select").addEventListener("change", (e) => {
        sortSites(e.target.value);
    });

    // Close modal on background click
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("site-modal");
        if (e.target === modal) {
            closeModal();
        }
    });
}
