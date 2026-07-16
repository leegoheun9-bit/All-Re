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
        id: "snap-calorie-ai",
        name: "스냅칼로리 AI (SnapCalorie AI)",
        url: "../../OneDrive/바탕 화면/스냅칼로리AI/index.html",
        category: "ai",
        status: "active",
        desc: "카메라로 음식 사진을 촬영하여 칼로리 및 영양 성분을 즉시 자동 분석해주는 Vision AI 기반 스마트 헬스케어 서비스입니다.",
        tags: ["Vision AI", "Diet Tracker", "Webcam", "Canvas"],
        dateAdded: "2026-07-09T03:00:00Z",
        monthlyRevenue: 150000,
        monthlyVisitors: 2200
    },
    {
        id: "ai-hand-alkkagi",
        name: "AI 손가락 알까기 게임",
        url: "../../OneDrive/바탕 화면/게임프로젝트-Skills/ai-hand-alkkagi/index.html",
        category: "game",
        status: "active",
        desc: "카메라 핸드 트래킹을 이용한 AI 손가락 알까기 물리 게임. 화면 앞에서 손가락 튕기기 동작으로 돌을 날려 상대편 알을 떨어트리는 중독성 강한 캐주얼 보드 게임입니다.",
        tags: ["MediaPipe Hands", "Physics Engine", "HTML5 Canvas"],
        dateAdded: "2026-07-11T07:04:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 850
    },
    {
        id: "link-bio-profit",
        name: "Link-Bio Profit (수익화 에이전트)",
        url: "../../OneDrive/바탕 화면/수익화에이전트_Paypal/link-bio-profit/index.html",
        category: "business",
        status: "active",
        desc: "인플루언서 및 크리에이터를 위한 링크인바이오 페이지 제작 솔루션. 페이팔 다이렉트 결제 모듈이 연동되어 있어 디지털 콘텐츠 판매 및 후원 기능을 즉시 활용할 수 있습니다.",
        tags: ["PayPal API", "Link-in-Bio", "Monetization"],
        dateAdded: "2026-07-08T09:00:00Z",
        monthlyRevenue: 450000,
        monthlyVisitors: 3100
    },
    {
        id: "your-caricature",
        name: "Your 캐리커쳐 아바타 메이커",
        url: "../../OneDrive/바탕 화면/your 케리터쳐/index.html",
        category: "ai",
        status: "active",
        desc: "카메라로 찍은 인물 사진을 스타일 전송 기술로 개성 넘치는 만화풍 캐리커쳐 아바타 이미지로 변환해주는 AI 아트 스케치 웹앱입니다.",
        tags: ["Style Transfer", "HTML5 Canvas", "Blob API"],
        dateAdded: "2026-07-10T12:00:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 620
    },
    {
        id: "drone-racing-game",
        name: "3D 드론 레이싱 게임",
        url: "../../Downloads/드론게임/index.html",
        category: "game",
        status: "active",
        desc: "3D 공간 속 장애물들을 피해 비행하는 드론 조종 시뮬레이터. 웹 브라우저에서 조종 감각을 테스트할 수 있도록 부드러운 물리 가속을 구현했습니다.",
        tags: ["WebGL", "Three.js", "Physics"],
        dateAdded: "2026-07-05T15:00:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 1250
    },
    {
        id: "real-estate-mgmt",
        name: "스마트 부동산 관리 앱",
        url: "../../OneDrive/바탕 화면/부동산관리앱/index.html",
        category: "utility",
        status: "active",
        desc: "임대 매물 분석, 계약 일정 관리, 투자금 대비 임대 수익률 계산기를 원스톱으로 제공하는 로컬 부동산 자산 관리 유틸리티 앱입니다.",
        tags: ["Local Storage", "JavaScript", "Finance Calc"],
        dateAdded: "2026-07-07T11:55:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 450
    },
    {
        id: "dog-photoshop",
        name: "반려견 강아지 포토샵",
        url: "../../Downloads/강아지포토샵/index.html",
        category: "utility",
        status: "active",
        desc: "강아지 사진에 특화된 이미지 필터 편집기. 귀여운 데코 스티커, 안경/모자 3D 오버레이 및 텍스트 문구 툴로 엽서를 꾸밀 수 있습니다.",
        tags: ["Canvas API", "Image Filter", "CSS Filters"],
        dateAdded: "2026-07-06T10:00:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 310
    },
    {
        id: "kodari-dev-mgr",
        name: "코다리 개발부장 AI 에이전트",
        url: "../../OneDrive/바탕 화면/코다리개발부장에이전트/index.html",
        category: "ai",
        status: "active",
        desc: "1인 개발자 및 스타트업을 위한 가상 AI 개발 팀장. 코드 리뷰, 기능 상세 설계, 리팩토링 제안 등 개발 사이클을 가이드해주는 조력자 챗봇 서비스입니다.",
        tags: ["OpenAI API", "Code Review", "AI Agent"],
        dateAdded: "2026-07-12T11:00:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 550
    },
    {
        id: "sales-performance",
        name: "로컬 판매 실적 분석 대시보드",
        url: "../../OneDrive/바탕 화면/판매실적-local/index.html",
        category: "business",
        status: "active",
        desc: "오프라인/온라인 매출 데이터를 CSV 파일로 업로드하여 실시간 월별 통계 차트와 카테고리별 마진율을 즉각 계산하여 시각화해 주는 ERP 솔루션입니다.",
        tags: ["Chart.js", "CSV Parser", "Data Visual"],
        dateAdded: "2026-07-13T09:30:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 280
    },
    {
        id: "flying-mini-game",
        name: "플라잉 장애물 회피 게임",
        url: "../../OneDrive/바탕 화면/플라잉게임/index.html",
        category: "game",
        status: "active",
        desc: "화면 터치나 마우스 클릭으로 비행 캐릭터의 높낮이를 조절하여 끊임없이 나타나는 파이프와 링을 피해 점수를 획득하는 복고풍 미니 아케이드 게임입니다.",
        tags: ["Game Loop", "Collision Detect", "High Scores"],
        dateAdded: "2026-07-04T08:00:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 1900
    },
    {
        id: "it-law-guide",
        name: "정보통신법 크리에이터 가이드",
        url: "../정보통신법유튜버크리이터/index.html",
        category: "business",
        status: "active",
        desc: "유튜버와 1인 방송 크리에이터가 놓치기 쉬운 저작권 가이드라인, 뒷광고 규제 조항 및 유의 사항을 법 조항 기반 AI 질의응답으로 쉽게 해결해 주는 법률 가이드 솔루션입니다.",
        tags: ["IT Law", "Copyright Guide", "RAG Chat"],
        dateAdded: "2026-07-14T14:00:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 410
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
    reader.onload = function(e) {
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
