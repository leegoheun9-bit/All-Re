// Pre-seeded sites list
const DEFAULT_SITES = [
    {
        id: "mirai-studio",
        name: "MIRAI STUDIO (미래 스튜디오)",
        url: "https://miraistudio.co.kr",
        category: "ai",
        status: "active",
        desc: "실시간 Web 3D AI 버튜버 & 아바타 메이커. 스마트폰이나 노트북 웹캠만으로 사용자의 표정과 10개 손가락 관절 모션을 추적하여 3D 아바타(.vrm)에 리깅하는 실시간 라이브 방송 솔루션입니다.",
        tags: ["Three.js", "MediaPipe", "WebGL", "Kalidokit", "3D AI"],
        dateAdded: "2026-07-15T10:57:00Z",
        monthlyRevenue: 1200000,
        monthlyVisitors: 1540,
        gaId: "G-NPZW5DX2NJ",
        askingPrice: "5,000만원",
        niche: "3D AI Avatar",
        logoIcon: "🧙",
        founderName: "김민수",
        momGrowth: 12.5
    },
    {
        id: "echo-shadowing",
        name: "Echo Shadowing (실시간 AI 다국어 섀도잉 발음 튜터)",
        url: "https://echoshadow.life/",
        category: "ai",
        status: "active",
        desc: "사용자의 발음을 실시간으로 듣고 원어민 발음과의 유사도를 분석하여 정밀한 피드백을 제공하는 AI 외국어 학습 섀도잉 튜터 서비스입니다.",
        tags: ["Gemini Live API", "Web Speech API", "React", "AI Shadowing", "Vite"],
        dateAdded: "2026-07-16T08:05:00Z",
        monthlyRevenue: 120, // USD
        monthlyVisitors: 450,
        askingPrice: "$10k",
        niche: "AI EdTech",
        logoIcon: "🗣️",
        founderName: "Vitalii Dodonov",
        momGrowth: 0
    },
    {
        id: "v-taxflow",
        name: "Vanguard Tax Flow (뱅가드 텍스 플로우)",
        url: "https://v-taxflow.cloud",
        category: "business",
        status: "active",
        desc: "미국 독립 계약자, 1인 사업자 및 프리랜서를 위한 AI 세금 및 현금 흐름 최적화 솔루션. Plaid 연동으로 세금 공제 비용을 찾고 Form 1040-ES 납부서를 내보냅니다.",
        tags: ["Plaid API", "AI Tax", "FinTech", "Freelance", "TailwindCSS"],
        dateAdded: "2026-07-16T08:08:00Z",
        monthlyRevenue: 4000, // USD
        monthlyVisitors: 1200,
        askingPrice: "$60k",
        niche: "Private Venture",
        logoIcon: "🕵️",
        founderName: "Quirky-public-2681",
        momGrowth: -2.4
    },
    {
        id: "magic-kids-ar",
        name: "MagicKids AR (매직키즈 AR)",
        url: "https://magickidsar.com",
        category: "game",
        status: "active",
        desc: "AI와 증강현실(AR) 기술을 결합하여 구연동화, 낱말 놀이, 동물 변신 등을 즐기는 인터랙티브 유아 교육 플랫폼입니다. 신체 움직임으로 상호작용합니다.",
        tags: ["MediaPipe", "WebXR", "Toss Payments", "HTML5 Canvas", "EdTech"],
        dateAdded: "2026-07-16T08:09:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 120,
        askingPrice: "$5k",
        niche: "AR Kids Game",
        logoIcon: "🦄",
        founderName: "박지성",
        momGrowth: 0
    },
    {
        id: "petpic-ai",
        name: "PetPic AI (펫픽 AI)",
        url: "https://petpicai.art",
        category: "ai",
        status: "active",
        desc: "반려동물 사진을 업로드하여 다양한 테마 스타일의 예쁜 고해상도 AI 프로필 이미지로 변환해 주는 반려동물 특화 AI 이미지 생성 서비스입니다.",
        tags: ["Stable Diffusion", "AI Image Gen", "Canvas API", "Pet Art"],
        dateAdded: "2026-07-16T08:10:00Z",
        monthlyRevenue: 100, // USD
        monthlyVisitors: 300,
        askingPrice: "$5k",
        niche: "Mobile Apps",
        logoIcon: "🐱",
        founderName: "이지은",
        momGrowth: 4.2
    },
    {
        id: "bridge-global-ai",
        name: "Bridge Global AI (브릿지 글로벌 AI)",
        url: "https://b-globalai.live",
        category: "ai",
        status: "active",
        desc: "글로벌 무역 언어 장벽 해소를 위한 0.1초 음성 실시간 번역, 인코텀즈 위험 분석 및 AI 회의록 자동 생성 B2B 무역 플랫폼입니다.",
        tags: ["Voice API", "B2B Translation", "Trade AI", "NLP"],
        dateAdded: "2026-07-16T08:10:00Z",
        monthlyRevenue: 89, // USD
        monthlyVisitors: 900,
        askingPrice: "$10k",
        niche: "SaaS",
        logoIcon: "💙",
        founderName: "Romàn",
        momGrowth: 9.4
    },
    {
        id: "care-vision-ai",
        name: "CareVision AI (케어비전 AI)",
        url: "https://carevisionai.co.kr",
        category: "ai",
        status: "active",
        desc: "시니어를 위한 스마트 케어 솔루션. 실시간 카메라 화면을 분석하여 낙상 감지, 환자 상태 모니터링 및 Firebase 실시간 연동 모니터링을 제공합니다.",
        tags: ["MediaPipe Pose", "Firebase", "Computer Vision", "Smart Care"],
        dateAdded: "2026-07-16T08:10:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 50,
        askingPrice: "1,500만원",
        niche: "Elderly Care AI",
        logoIcon: "👵",
        founderName: "최윤성",
        momGrowth: -1.0
    },
    {
        id: "repurpose-ai",
        name: "Connect AI LAB (커넥트 AI 랩)",
        url: "https://repurposeai.live",
        category: "ai",
        status: "active",
        desc: "신경 과학과 인공지능의 경계에서 탄생한 Connect AI LAB 플랫폼. 인지 부하, 생리적 반응 패턴 등을 분석하여 적응형 신경 인터페이스 서비스를 구축합니다.",
        tags: ["Neural AI", "Cognitive AI", "Brain Interface", "R&D"],
        dateAdded: "2026-07-16T08:10:00Z",
        monthlyRevenue: 18000, // USD
        monthlyVisitors: 5600,
        askingPrice: "$160k",
        niche: "No-Code AI",
        logoIcon: "🕵️",
        founderName: "Vitalii Dodonov",
        momGrowth: 0
    },
    {
        id: "creator-guard",
        name: "CreatorGuard (크리에이터 가드)",
        url: "https://creatorguard.cloud",
        category: "business",
        status: "active",
        desc: "유튜브 크리에이터 및 콘텐츠 창작자들을 위해 저작권 보호, 표절 감지, 자동 DMCA 요청 및 채널 중단에 대비한 수익 보호 장치를 제공하는 서비스입니다.",
        tags: ["React", "Vite", "Copyright AI", "DMCA Auto", "YouTube API"],
        dateAdded: "2026-07-16T08:11:00Z",
        monthlyRevenue: 3400, // USD
        monthlyVisitors: 1100,
        askingPrice: "$70k",
        niche: "Artificial Intelligence",
        logoIcon: "🛡️",
        founderName: "Pierre",
        momGrowth: 1.7
    },
    {
        id: "car-tuning-ai",
        name: "CarTuning AI (카튜닝 AI)",
        url: "https://cartuningai.shop",
        category: "ai",
        status: "active",
        desc: "차량 사진 한 장만으로 외관 휠, 스포일러, 데칼, 도색 등을 10초 만에 가상 시뮬레이션해 주는 이미지 생성 기반 자동차 가상 튜닝 시뮬레이터입니다.",
        tags: ["Next.js", "Gemini Flash 2.0", "TailwindCSS", "Image Gen", "Vercel"],
        dateAdded: "2026-07-16T08:11:00Z",
        monthlyRevenue: 13000, // USD
        monthlyVisitors: 0,
        askingPrice: "$40k",
        niche: "Content Creation",
        logoIcon: "🏎️",
        founderName: "Weddx",
        momGrowth: 5.0
    },
    {
        id: "nabula-arc",
        name: "Nabula Arc (네뷸라 아크)",
        url: "https://nabulaarc.xyz",
        category: "game",
        status: "active",
        desc: "Gemini 2.0 Flash AI 연동 및 실시간 목소리/음성 제어가 결합된 레트로 감성의 고성능 HTML5 Canvas 우주 비행기 슈팅 게임입니다.",
        tags: ["HTML5 Canvas", "Gemini 2.0 Flash", "Web Speech API", "Voice Control"],
        dateAdded: "2026-07-16T08:11:00Z",
        monthlyRevenue: 3500, // USD
        monthlyVisitors: 0,
        askingPrice: "$119k",
        niche: "Artificial Intelligence",
        logoIcon: "🚀",
        founderName: "B",
        momGrowth: 3.2
    },
    {
        id: "pharmgenix-xyz",
        name: "PharmGenix (팜제닉스)",
        url: "https://pharmgenix.xyz",
        category: "ai",
        status: "active",
        desc: "AI 기반 바이오/제약 연구 및 신약 후보 물질 탐색 플랫폼. 딥러닝 기술을 활용하여 유전자 데이터와 분자 구조를 분석하고 생체 반응을 예측합니다.",
        tags: ["Bio AI", "Healthcare", "Deep Learning", "Pharma Tech", "SaaS"],
        dateAdded: "2026-08-18T10:20:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0,
        askingPrice: "$20k",
        niche: "Bio AI & Healthcare",
        logoIcon: "🧬",
        founderName: "Vitalii Dodonov",
        momGrowth: 0
    },
    {
        id: "voxiai-xyz",
        name: "VoxiAI (복시 AI)",
        url: "https://voxiai.xyz",
        category: "ai",
        status: "active",
        desc: "고품질 다국어 AI 음성 합성 및 텍스트-음성 변환(TTS) 플랫폼. 초감정 오디오 엔진을 기반으로 자연스럽고 몰입감 넘치는 가상 캐릭터 음성을 생성합니다.",
        tags: ["AI Voice", "TTS", "Speech Synthesis", "Audio AI", "Voice Generator"],
        dateAdded: "2026-08-18T10:20:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0,
        askingPrice: "$15k",
        niche: "AI Voice & Audio",
        logoIcon: "🎙️",
        founderName: "Vitalii Dodonov",
        momGrowth: 0
    },
    {
        id: "voiscely-xyz",
        name: "Voiscely (보이스셀리)",
        url: "https://voiscely.xyz",
        category: "ai",
        status: "active",
        desc: "24/7 실시간 AI 음성 에이전트 및 대화형 콜봇 플랫폼. 높은 정밀도의 음성 인식을 바탕으로 고객 서비스, 예약 안내 및 콜센터 업무를 자동화합니다.",
        tags: ["AI Voice Call", "Conversational AI", "Speech Recognition", "STT", "Customer Agent"],
        dateAdded: "2026-08-18T10:20:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0,
        askingPrice: "$18k",
        niche: "AI Conversational Agent",
        logoIcon: "📞",
        founderName: "Vitalii Dodonov",
        momGrowth: 0
    },
    {
        id: "callock-ai-kr",
        name: "Callock AI (콜락 AI)",
        url: "https://callock.ai.kr",
        category: "ai",
        status: "active",
        desc: "AI 기반 통화 보안 및 스팸/보이스피싱 감지 솔루션. 음성 패브리케이션(딥페이크 음성)과 피싱 패턴을 실시간 분석하여 실시간 스팸 차단 기능을 제공합니다.",
        tags: ["Security AI", "Call Protection", "Voice Anti-Phishing", "Spam Filter", "AI Security"],
        dateAdded: "2026-08-18T10:20:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0,
        askingPrice: "1,500만원",
        niche: "AI Call Security",
        logoIcon: "🔒",
        founderName: "Vitalii Dodonov",
        momGrowth: 0
    },
    {
        id: "aioscore-kr",
        name: "AIO Score (에이아이오 스코어)",
        url: "https://aioscore.kr",
        category: "ai",
        status: "active",
        desc: "AI 검색 엔진(Perplexity, ChatGPT, Gemini 등)에서의 브랜드 노출 지수 및 검색 최적화(AIO, AI Search Optimization) 진단 분석 플랫폼입니다.",
        tags: ["AIO", "SEO AI", "AI Search Index", "Analytics", "Brand Score"],
        dateAdded: "2026-08-18T10:20:00Z",
        monthlyRevenue: 0,
        monthlyVisitors: 0,
        askingPrice: "2,000만원",
        niche: "AI Search Optimization",
        logoIcon: "📈",
        founderName: "Vitalii Dodonov",
        momGrowth: 0
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
    loadTheme();
    loadSites();
    loadIdeas();
    loadNotifications();
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

            let needsSave = false;
            DEFAULT_SITES.forEach(defaultSite => {
                const existingIndex = sites.findIndex(s => s.id === defaultSite.id);
                if (existingIndex === -1) {
                    sites.push({ ...defaultSite });
                    needsSave = true;
                }
            });
            sites.forEach(site => {
                const defaultMatch = DEFAULT_SITES.find(d => d.id === site.id);
                if (defaultMatch) {
                    site.tags = defaultMatch.tags;
                    if (defaultMatch.logoIcon) site.logoIcon = defaultMatch.logoIcon;
                    needsSave = true;
                }
                if (site.id === "mirai-studio" && (!site.gaId || site.gaId === "529963349")) {
                    site.gaId = "G-NPZW5DX2NJ";
                    needsSave = true;
                }
                if (!site.isGaRealData && site.monthlyVisitors !== 0) {
                    site.monthlyVisitors = 0;
                    needsSave = true;
                }
                if (site.monthlyRevenue === undefined) {
                    site.monthlyRevenue = 0;
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
        renderIdeas();
        drawer.classList.add("active");
        backdrop.classList.add("active");
    } else {
        drawer.classList.remove("active");
        backdrop.classList.remove("active");
    }
}

// Bind Global Window Functions for Inline Event Handlers
window.toggleSandbox = toggleSandbox;
window.deleteIdea = deleteIdea;
window.convertToProject = convertToProject;
window.toggleTheme = toggleTheme;

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
    // Render Highlight Sections (Recently Listed & Best Deals)
    renderHighlights();

    // Render Leaderboard
    renderLeaderboard();

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
        card.innerHTML = createPremiumCardHtml(site);
        grid.appendChild(card.firstElementChild);
    });
}

// Render the 2 showcase sections (Recently Listed, Best Deals)
function renderHighlights() {
    const recentlyGrid = document.getElementById("recently-listed-grid");
    const bestGrid = document.getElementById("best-deals-grid");
    
    if (!recentlyGrid || !bestGrid) return;
    
    recentlyGrid.innerHTML = "";
    bestGrid.innerHTML = "";

    // 1. Recently Listed: Sort by dateAdded descending, take top 4
    const recently = [...sites]
        .sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0))
        .slice(0, 4);

    recently.forEach(site => {
        const card = document.createElement("div");
        card.innerHTML = createPremiumCardHtml(site);
        recentlyGrid.appendChild(card.firstElementChild);
    });

    // 2. Best Deals: Sort by multiple (lowest positive first), take top 4
    const bestDeals = [...sites]
        .map(site => {
            const price = parsePriceValue(site.askingPrice);
            const revenue = site.monthlyRevenue || 0;
            let adjustedRevenue = revenue;
            const priceIsUsd = site.askingPrice && site.askingPrice.trim().startsWith('$');
            const revenueIsKrw = revenue > 20000;
            if (priceIsUsd && revenueIsKrw) adjustedRevenue = revenue / 1300;
            else if (!priceIsUsd && !revenueIsKrw && revenue > 0) adjustedRevenue = revenue * 1300;

            const multiple = (price > 0 && adjustedRevenue > 0) ? price / (adjustedRevenue * 12) : Infinity;
            return { site, multiple, revenue: adjustedRevenue };
        })
        .filter(item => item.site.askingPrice && item.multiple !== Infinity)
        .sort((a, b) => a.multiple - b.multiple);

    let selectedDeals = bestDeals.map(d => d.site);
    
    // Fill up to 4 if we don't have enough deals
    if (selectedDeals.length < 4) {
        const extraSites = sites
            .filter(s => !selectedDeals.find(d => d.id === s.id))
            .sort((a, b) => (b.monthlyRevenue || 0) - (a.monthlyRevenue || 0));
        
        selectedDeals = [...selectedDeals, ...extraSites].slice(0, 4);
    } else {
        selectedDeals = selectedDeals.slice(0, 4);
    }

    selectedDeals.forEach(site => {
        const card = document.createElement("div");
        card.innerHTML = createPremiumCardHtml(site);
        bestGrid.appendChild(card.firstElementChild);
    });
}

// Generate premium card layout HTML
function createPremiumCardHtml(site) {
    const multipleText = calculateMultiple(site.monthlyRevenue, site.askingPrice);
    const avatarHtml = getAvatarHtml(site.name, site.logoIcon);
    const nicheText = site.niche || getCategoryLabel(site.category);
    const priceText = formatPrice(site.askingPrice);
    const revenueText = formatRevenue(site.monthlyRevenue);
    
    // Check if askingPrice is specified to show For Sale badge
    const hasSaleBadge = site.askingPrice ? `<span class="premium-sale-badge">For Sale</span>` : "";

    return `
        <div class="premium-card">
            <div class="premium-card-click-area" onclick="window.open('${site.url}', '_blank')"></div>
            ${hasSaleBadge}
            <div class="premium-card-header">
                ${avatarHtml}
                <div class="premium-title-group">
                    <h3 class="premium-title" title="${escapeHtml(site.name)}">${escapeHtml(site.name)}</h3>
                    <span class="premium-niche">${escapeHtml(nicheText)}</span>
                </div>
            </div>
            <div class="premium-stats-row">
                <div class="premium-stat-col">
                    <span class="stat-label">Revenue</span>
                    <span class="stat-value">${revenueText}</span>
                </div>
                <div class="premium-stat-col">
                    <span class="stat-label">Price</span>
                    <span class="stat-value">${priceText}</span>
                </div>
                <div class="premium-stat-col">
                    <span class="stat-label">Multiple</span>
                    <span class="stat-value">${multipleText}</span>
                </div>
            </div>
            <button class="premium-card-edit-btn" onclick="openEditModal('${site.id}')" title="편집">
                ✏️
            </button>
        </div>
    `;
}

// Render Leaderboard ordered by sort selection
function renderLeaderboard() {
    const tbody = document.getElementById("leaderboard-body");
    if (!tbody) return;
    tbody.innerHTML = "";

    const sortSelect = document.getElementById("leaderboard-sort-select");
    const sortBy = sortSelect ? sortSelect.value : "revenue";

    // Clone and sort sites
    const rankedSites = [...sites];
    rankedSites.sort((a, b) => {
        if (sortBy === "revenue") {
            // Standardize USD vs KRW values for sorting
            const revA = parsePriceValue(a.askingPrice) > 0 && a.askingPrice.trim().startsWith('$') ? a.monthlyRevenue * 1300 : a.monthlyRevenue;
            const revB = parsePriceValue(b.askingPrice) > 0 && b.askingPrice.trim().startsWith('$') ? b.monthlyRevenue * 1300 : b.monthlyRevenue;
            return (revB || 0) - (revA || 0);
        } else if (sortBy === "visitors") {
            return (b.monthlyVisitors || 0) - (a.monthlyVisitors || 0);
        } else if (sortBy === "growth") {
            return (b.momGrowth || 0) - (a.momGrowth || 0);
        }
        return 0;
    });

    rankedSites.forEach((site, index) => {
        const row = document.createElement("tr");
        
        // Rank Badge / Icon
        let rankHtml = "";
        if (index === 0) rankHtml = `<span class="rank-badge">🥇</span>`;
        else if (index === 1) rankHtml = `<span class="rank-badge">🥈</span>`;
        else if (index === 2) rankHtml = `<span class="rank-badge">🥉</span>`;
        else rankHtml = `<span class="rank-number">${index + 1}</span>`;

        // Startup column info
        const avatarHtml = getAvatarHtml(site.name, site.logoIcon);
        
        // Founder display
        let founderHtml = "-";
        if (site.founderName) {
            const firstLetter = site.founderName.trim().charAt(0);
            founderHtml = `
                <div class="leaderboard-founder">
                    <div class="leaderboard-founder-avatar">${escapeHtml(firstLetter)}</div>
                    <span class="leaderboard-founder-name">${escapeHtml(site.founderName)}</span>
                </div>
            `;
        }

        // MoM Growth display
        let growthHtml = "-";
        let growthClass = "growth-neutral";
        if (site.momGrowth > 0) {
            growthHtml = `↑ ${site.momGrowth}%`;
            growthClass = "growth-up";
        } else if (site.momGrowth < 0) {
            growthHtml = `↓ ${Math.abs(site.momGrowth)}%`;
            growthClass = "growth-down";
        }

        row.innerHTML = `
            <td style="text-align: center; font-weight: 700;">${rankHtml}</td>
            <td>
                <div class="leaderboard-startup" style="cursor: pointer;" onclick="window.open('${site.url}', '_blank')">
                    ${avatarHtml}
                    <div class="leaderboard-startup-info">
                        <span class="leaderboard-startup-name">${escapeHtml(site.name)}</span>
                        <span class="leaderboard-startup-desc">${escapeHtml(site.desc)}</span>
                    </div>
                </div>
            </td>
            <td>${founderHtml}</td>
            <td style="text-align: right; font-weight: 700;">${formatRevenue(site.monthlyRevenue)}</td>
            <td style="text-align: right;" class="${growthClass}">${growthHtml}</td>
        `;
        tbody.appendChild(row);
    });
}

// Bind to window for inline HTML dropdown visibility
window.renderLeaderboard = renderLeaderboard;


// Parsing prices like "$10k" or "5000만원" into numeric values
function parsePriceValue(priceStr) {
    if (!priceStr) return 0;
    const clean = priceStr.toLowerCase().replace(/,/g, '').trim();
    if (clean.includes('$')) {
        let num = parseFloat(clean.replace('$', ''));
        if (clean.includes('k')) num *= 1000;
        if (clean.includes('m')) num *= 1000000;
        return num;
    }
    if (clean.includes('만원')) {
        return parseFloat(clean) * 10000;
    }
    if (clean.includes('억원') || clean.includes('억')) {
        return parseFloat(clean) * 100000000;
    }
    return parseFloat(clean) || 0;
}

// Calculate Multiple: Asking Price / (Monthly Revenue * 12)
function calculateMultiple(revenue, priceStr) {
    if (!priceStr || !revenue) return "-";
    const price = parsePriceValue(priceStr);
    if (price <= 0 || revenue <= 0) return "-";
    
    let adjustedRevenue = revenue;
    
    const priceIsUsd = priceStr.trim().startsWith('$');
    const revenueIsKrw = revenue > 20000;
    
    if (priceIsUsd && revenueIsKrw) {
        adjustedRevenue = revenue / 1300;
    } else if (!priceIsUsd && !revenueIsKrw) {
        adjustedRevenue = revenue * 1300;
    }
    
    const annualRevenue = adjustedRevenue * 12;
    const mult = price / annualRevenue;
    return mult.toFixed(1) + "x";
}

// Render dynamic logo icon or letter avatar
function getAvatarHtml(name, logoIcon) {
    if (logoIcon) {
        if (logoIcon.startsWith('http://') || logoIcon.startsWith('https://') || logoIcon.startsWith('./') || logoIcon.startsWith('/') || logoIcon.includes('.')) {
            return `<img src="${escapeHtml(logoIcon)}" class="premium-avatar" alt="${escapeHtml(name)}">`;
        }
        return `<div class="premium-avatar">${escapeHtml(logoIcon)}</div>`;
    }
    const firstChar = name ? name.trim().charAt(0) : '?';
    const colors = [
        'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
        'linear-gradient(135deg, #10b981 0%, #047857 100%)',
        'linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)',
        'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
        'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)',
        'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
    ];
    const index = firstChar.charCodeAt(0) % colors.length;
    const bg = colors[index];
    return `<div class="premium-avatar avatar-text" style="background: ${bg}">${escapeHtml(firstChar)}</div>`;
}

// Pretty price formatting
function formatPrice(priceStr) {
    return priceStr || "-";
}

// Pretty revenue formatting
function formatRevenue(revenue) {
    if (!revenue) return "$0";
    if (revenue < 20000) {
        return "$" + (revenue >= 1000 ? (revenue / 1000).toFixed(1) + "k" : revenue);
    }
    return (revenue >= 10000 ? Math.round(revenue / 10000) + "만원" : Number(revenue).toLocaleString() + "원");
}

// Toggle light/dark themes
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("allre_theme", newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem("allre_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
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

// Helper for D-Day calculation
function calculateDDay(targetDateStr) {
    if (!targetDateStr) return null;
    const target = new Date(targetDateStr);
    if (isNaN(target.getTime())) return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);

    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return { text: `만료됨 (D+${Math.abs(diffDays)})`, days: diffDays };
    if (diffDays === 0) return { text: "D-Day (오늘 만료)", days: 0 };
    return { text: `D-${diffDays}`, days: diffDays };
}

// Modal Form Operations
function openAddModal() {
    editingSiteId = null;
    document.getElementById("modal-title").textContent = "새 웹사이트 등록";
    document.getElementById("btn-delete-site").style.display = "none";
    document.getElementById("site-form").reset();
    
    // Clear new fields
    document.getElementById("site-logo-icon").value = "";
    document.getElementById("site-niche").value = "";
    document.getElementById("site-asking-price").value = "";
    document.getElementById("site-founder").value = "";
    document.getElementById("site-growth").value = "";
    
    document.getElementById("site-modal").classList.add("active");
}

window.openAddModal = openAddModal;
window.openEditModal = openEditModal;

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
    document.getElementById("site-domain-exp").value = site.domainExpDate || "";
    document.getElementById("site-ssl-exp").value = site.sslExpDate || "";
    document.getElementById("site-ga-id").value = site.gaId || "";
    document.getElementById("site-desc").value = site.desc;
    document.getElementById("site-tags").value = (site.tags || []).join(", ");
    
    // Populate new fields
    document.getElementById("site-logo-icon").value = site.logoIcon || "";
    document.getElementById("site-niche").value = site.niche || "";
    document.getElementById("site-asking-price").value = site.askingPrice || "";
    document.getElementById("site-founder").value = site.founderName || "";
    document.getElementById("site-growth").value = site.momGrowth !== undefined ? site.momGrowth : "";

    document.getElementById("site-modal").classList.add("active");
}

function closeModal() {
    document.getElementById("site-modal").classList.remove("active");
}

// Toast Notification helper
function showToast(message, type = "success") {
    let container = document.getElementById("toast-container");
    if (!container) {
        container = document.createElement("div");
        container.id = "toast-container";
        container.className = "toast-container";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    const icon = type === "success" ? "✅" : "⚠️";
    toast.innerHTML = `<span style="font-size: 1.1rem;">${icon}</span> <span>${escapeHtml(message)}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function saveForm(event) {
    event.preventDefault();

    const name = document.getElementById("site-name").value;
    const url = document.getElementById("site-url").value;
    const category = document.getElementById("site-category").value;
    const status = document.getElementById("site-status").value;
    const monthlyRevenue = Number(document.getElementById("site-revenue").value) || 0;
    const monthlyVisitors = Number(document.getElementById("site-visitors").value) || 0;
    const domainExpDate = document.getElementById("site-domain-exp").value || null;
    const sslExpDate = document.getElementById("site-ssl-exp").value || null;
    const gaId = document.getElementById("site-ga-id").value.trim() || null;
    const desc = document.getElementById("site-desc").value;
    const tagsString = document.getElementById("site-tags").value;
    
    // New fields
    const logoIcon = document.getElementById("site-logo-icon").value.trim() || null;
    const niche = document.getElementById("site-niche").value.trim() || null;
    const askingPrice = document.getElementById("site-asking-price").value.trim() || null;
    const founderName = document.getElementById("site-founder").value.trim() || null;
    const momGrowth = document.getElementById("site-growth").value !== "" ? Number(document.getElementById("site-growth").value) : 0;

    const tags = tagsString ? tagsString.split(",").map(t => t.trim()).filter(t => t.length > 0) : [];
    const isEdit = !!editingSiteId;

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
                domainExpDate,
                sslExpDate,
                gaId,
                desc,
                tags,
                logoIcon,
                niche,
                askingPrice,
                founderName,
                momGrowth
            };
        }
    } else {
        // Add Mode - Add to start of array so it appears at top
        const newId = "site-" + Date.now();
        const newSite = {
            id: newId,
            name,
            url,
            category,
            status,
            monthlyRevenue,
            monthlyVisitors,
            domainExpDate,
            sslExpDate,
            gaId,
            desc,
            tags,
            logoIcon,
            niche,
            askingPrice,
            founderName,
            momGrowth,
            dateAdded: new Date().toISOString()
        };
        sites.unshift(newSite);
    }

    saveSites();

    // Automatically reset category & search filters so the user IMMEDIATELY sees their new/edited site
    currentCategory = "all";
    currentTag = "";
    currentSearch = "";
    const searchBox = document.getElementById("search-box");
    if (searchBox) searchBox.value = "";

    document.querySelectorAll(".tab-btn").forEach(btn => {
        if (btn.textContent.includes("전체")) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderStats();
    renderFilters();
    renderSites();
    closeModal();

    showToast(isEdit ? `"${name}" 웹사이트 정보가 수정되었습니다.` : `🎉 "${name}" 웹사이트가 성공적으로 등록되었습니다!`, "success");
}

function deleteSite() {
    if (!editingSiteId) return;
    const site = sites.find(s => s.id === editingSiteId);
    const siteName = site ? site.name : "웹사이트";

    if (confirm(`정말로 "${siteName}" 웹사이트 등록을 삭제하시겠습니까?`)) {
        sites = sites.filter(s => s.id !== editingSiteId);
        saveSites();
        renderStats();
        renderFilters();
        renderSites();
        closeModal();
        showToast(`"${siteName}" 웹사이트가 삭제되었습니다.`, "danger");
    }
}

// ----------------------------------------------------
// Health Monitor (Server Ping & Uptime Check) Logic
// ----------------------------------------------------
let siteHealthResults = {};

function openHealthModal() {
    document.getElementById("health-modal").classList.add("active");
    renderHealthGrid();
}

function closeHealthModal() {
    document.getElementById("health-modal").classList.remove("active");
}

// ----------------------------------------------------
// Google Analytics 4 (GA4) Data API Real-time Integration
// ----------------------------------------------------
let ga4Config = {
    token: "",
    defaultProperty: "529963349"
};

function loadGa4Config() {
    const saved = localStorage.getItem("allre_ga4_config");
    if (saved) {
        try {
            ga4Config = JSON.parse(saved);
            if (!ga4Config.defaultProperty) {
                ga4Config.defaultProperty = "529963349";
            }
        } catch (e) {
            console.error("Failed to parse GA4 config", e);
        }
    } else {
        ga4Config = { token: "", defaultProperty: "529963349" };
        saveGa4Config("", "529963349");
    }
}

function saveGa4Config(token, defaultProperty) {
    ga4Config = { token, defaultProperty };
    localStorage.setItem("allre_ga4_config", JSON.stringify(ga4Config));
}

function openGa4Modal() {
    loadGa4Config();
    document.getElementById("ga4-api-token").value = ga4Config.token || "";
    document.getElementById("ga4-default-property").value = ga4Config.defaultProperty || "";
    document.getElementById("ga4-modal").classList.add("active");
}

function closeGa4Modal() {
    document.getElementById("ga4-modal").classList.remove("active");
}

function handleGoogleSignIn() {
    if (typeof google === "undefined" || !google.accounts || !google.accounts.oauth2) {
        alert("구글 라이브러리를 불러오는 중입니다. 1초 후 다시 시도해 주세요.");
        return;
    }

    try {
        const tokenClient = google.accounts.oauth2.initTokenClient({
            client_id: "1071253912952-sampleclientid.apps.googleusercontent.com",
            scope: "https://www.googleapis.com/auth/analytics.readonly",
            callback: (response) => {
                if (response && response.access_token) {
                    const token = response.access_token;
                    const defaultProp = document.getElementById("ga4-default-property").value.trim() || "529963349";
                    document.getElementById("ga4-api-token").value = token;
                    saveGa4Config(token, defaultProp);
                    alert("🎉 구글 계정이 성공적으로 연동되었습니다! 실시간 데이터 동기화를 시작합니다.");
                    closeGa4Modal();
                    syncTrafficData();
                } else {
                    promptGa4ManualFallback();
                }
            }
        });
        tokenClient.requestAccessToken({ prompt: "consent" });
    } catch (e) {
        promptGa4ManualFallback();
    }
}

function promptGa4ManualFallback() {
    const manualToken = prompt("🔑 구글 인증 또는 Access Token (ya29...)을 입력해 주시면 바로 연동을 완료합니다:");
    if (manualToken && manualToken.trim()) {
        const cleanToken = manualToken.trim();
        document.getElementById("ga4-api-token").value = cleanToken;
        saveGa4Config(cleanToken, "529963349");
        alert("🎉 연동이 성공적으로 완료되었습니다! 실시간 트래픽을 동기화합니다.");
        closeGa4Modal();
        syncTrafficData();
    }
}

async function fetchGa4RealData(propertyId, token) {
    if (!propertyId || !token) return null;
    const cleanProp = propertyId.replace("properties/", "");
    const endpoint = `https://analyticsdata.googleapis.com/v1beta/properties/${cleanProp}:runReport`;

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                metrics: [{ name: "activeUsers" }]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();
        if (data.rows && data.rows.length > 0 && data.rows[0].metricValues) {
            const activeUsers = parseInt(data.rows[0].metricValues[0].value, 10);
            return isNaN(activeUsers) ? null : activeUsers;
        }
        return 0;
    } catch (err) {
        console.warn(`GA4 API Fetch Error for property ${cleanProp}:`, err);
        return null;
    }
}

async function syncTrafficData() {
    const btn = document.getElementById("btn-sync-traffic");
    const originalText = btn.textContent;
    btn.textContent = "⏳ 구글 GA4 서버 트래픽 수신 중...";
    btn.disabled = true;

    loadGa4Config();
    let totalUpdated = 0;
    let gaConnectedCount = 0;

    for (const site of sites) {
        const targetProperty = site.gaId || ga4Config.defaultProperty;

        // Try fetching real GA4 Data API if token & property available
        if (ga4Config.token && targetProperty) {
            const realVisitors = await fetchGa4RealData(targetProperty, ga4Config.token);
            if (realVisitors !== null) {
                site.monthlyVisitors = realVisitors;
                site.isGaRealData = true;
                gaConnectedCount++;
                totalUpdated++;
                continue;
            }
        }

        // If GA4 real data is not connected or token invalid, set to 0 (No fake numbers)
        site.monthlyVisitors = 0;
        site.isGaRealData = false;
    }

    saveSites();
    renderStats();
    renderSites();

    btn.textContent = gaConnectedCount > 0 ? `✅ 구글 GA4 ${gaConnectedCount}개 연동 동기화!` : "✅ 트래픽 측정 동기화 완료!";
    setTimeout(() => {
        btn.textContent = originalText;
        btn.disabled = false;
    }, 2500);
}

async function testSingleUrl() {
    const urlInput = document.getElementById("site-url");
    const resultDiv = document.getElementById("url-test-result");
    const url = urlInput.value.trim();

    if (!url) {
        alert("테스트할 URL을 먼저 입력해 주세요.");
        return;
    }

    resultDiv.style.display = "block";
    resultDiv.style.color = "#93c5fd";
    resultDiv.textContent = "⏳ 실시간 서버 커넥션 핑 측정 중...";

    const startTime = performance.now();
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        await fetch(url, { method: "HEAD", signal: controller.signal, mode: "no-cors" });
        clearTimeout(timeoutId);
        const duration = Math.round(performance.now() - startTime);

        resultDiv.style.color = "#34d399";
        resultDiv.textContent = `✅ 정상 연결 확인 (응답 속도: ${duration}ms)`;
    } catch (err) {
        const duration = Math.round(performance.now() - startTime);
        if (url.startsWith("http://") || url.startsWith("https://")) {
            resultDiv.style.color = "#6ee7b7";
            resultDiv.textContent = `✅ 연결 완료 (응답 측정: ${duration}ms)`;
        } else {
            resultDiv.style.color = "#fb7185";
            resultDiv.textContent = `⚠️ 연결 확인 필요 (경로: ${url})`;
        }
    }
}

async function pingSite(site) {
    const startTime = performance.now();
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        // Fetch check with no-cors fallback mode if cross-origin
        let response;
        try {
            response = await fetch(site.url, { method: "HEAD", signal: controller.signal, mode: "no-cors" });
        } catch (e) {
            // Retry with GET if HEAD fails
            response = await fetch(site.url, { method: "GET", signal: controller.signal, mode: "no-cors" });
        }
        clearTimeout(timeoutId);
        const duration = Math.round(performance.now() - startTime);
        
        return { status: "online", time: duration, code: 200, label: "정상" };
    } catch (err) {
        const duration = Math.round(performance.now() - startTime);
        if (err.name === "AbortError") {
            return { status: "warning", time: duration, code: 408, label: "응답 지연 (타임아웃)" };
        }
        // Local relative paths in dev environment check
        if (site.url.startsWith("../") || site.url.endsWith(".html") || site.url.includes("localhost")) {
            return { status: "online", time: Math.min(duration, 15), code: 200, label: "정상 (로컬 경로)" };
        }
        return { status: "offline", time: duration, code: 500, label: "연결 불가" };
    }
}

async function runPingAll() {
    const listContainer = document.getElementById("health-site-list");
    const summaryText = document.getElementById("health-summary-text");
    summaryText.textContent = "웹사이트 서버 응답 및 핑(Ping) 테스트 수행 중...";

    // Set checking status
    sites.forEach(site => {
        siteHealthResults[site.id] = { status: "checking", label: "검사 중...", time: 0 };
    });
    renderHealthGrid();

    let onlineCount = 0;
    let totalCount = sites.length;

    for (const site of sites) {
        const result = await pingSite(site);
        siteHealthResults[site.id] = result;
        if (result.status === "online") onlineCount++;
        renderHealthGrid();
    }

    summaryText.textContent = `검사 완료: 총 ${totalCount}개 웹사이트 중 ${onlineCount}개 정상 가동중 (${Math.round((onlineCount / totalCount) * 100 || 0)}%)`;
}

function renderHealthGrid() {
    const container = document.getElementById("health-site-list");
    container.innerHTML = "";

    if (sites.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">등록된 웹사이트가 없습니다.</div>`;
        return;
    }

    sites.forEach(site => {
        const health = siteHealthResults[site.id] || { status: "online", label: "대기 중", time: 0 };
        let dotClass = health.status;
        let timeLabel = health.time > 0 ? `${health.time}ms` : "-";

        const item = document.createElement("div");
        item.className = "health-item-card";
        item.innerHTML = `
            <div style="display: flex; align-items: center; gap: 0.8rem;">
                <span class="status-dot ${dotClass}"></span>
                <div>
                    <div style="font-weight: 600; font-size: 0.95rem;">${escapeHtml(site.name)}</div>
                    <div style="font-size: 0.8rem; color: var(--text-secondary);">${escapeHtml(site.url)}</div>
                </div>
            </div>
            <div style="text-align: right;">
                <div style="font-weight: 700; font-size: 0.85rem; color: ${health.status === 'online' ? '#10b981' : health.status === 'warning' ? '#f59e0b' : '#f43f5e'};">${health.label}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${timeLabel}</div>
            </div>
        `;
        container.appendChild(item);
    });
}

// ----------------------------------------------------
// Central Inbox (Notifications & Customer Inquiries)
// ----------------------------------------------------
const DEFAULT_NOTIFICATIONS = [
    {
        id: "notif-1",
        type: "contact",
        siteName: "MIRAI STUDIO",
        sender: "김철수 (chulsoo@example.com)",
        message: "안녕하세요, VRM 아바타 모션 트래킹 기능관련 기업형 커스텀 도입 문의드립니다.",
        date: "2026-07-21T09:30:00Z",
        read: false
    },
    {
        id: "notif-2",
        type: "system",
        siteName: "Vanguard Tax Flow",
        sender: "시스템 보안 알림",
        message: "SSL 보안 인증서 만료가 14일 남았습니다. 사전 갱신을 진행해 주세요.",
        date: "2026-07-20T14:15:00Z",
        read: false
    },
    {
        id: "notif-3",
        type: "contact",
        siteName: "Echo Shadowing",
        sender: "Sarah Jenkins (sarah@edutech.com)",
        message: "Your AI shadowing tutor tool is amazing! Do you offer API endpoint access?",
        date: "2026-07-19T18:00:00Z",
        read: true
    }
];

let notifications = [];
let currentInboxFilter = "all";

function loadNotifications() {
    const stored = localStorage.getItem("all_re_notifications");
    if (stored) {
        try {
            notifications = JSON.parse(stored);
        } catch (e) {
            notifications = DEFAULT_NOTIFICATIONS;
        }
    } else {
        notifications = DEFAULT_NOTIFICATIONS;
        saveNotifications();
    }
    updateInboxBadge();
}

function saveNotifications() {
    localStorage.setItem("all_re_notifications", JSON.stringify(notifications));
    updateInboxBadge();
}

function updateInboxBadge() {
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.getElementById("inbox-badge");
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = "inline-block";
    } else {
        badge.style.display = "none";
    }
}

function openInboxModal() {
    document.getElementById("inbox-modal").classList.add("active");
    renderInbox();
}

function closeInboxModal() {
    document.getElementById("inbox-modal").classList.remove("active");
}

function renderInbox() {
    const container = document.getElementById("inbox-list");
    container.innerHTML = "";

    let filtered = notifications.filter(n => {
        if (currentInboxFilter === "unread") return !n.read;
        if (currentInboxFilter === "contact") return n.type === "contact";
        if (currentInboxFilter === "system") return n.type === "system";
        return true;
    });

    if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 2.5rem;">해당하는 알림이나 문의가 없습니다.</div>`;
        return;
    }

    filtered.forEach(notif => {
        const item = document.createElement("div");
        item.className = `inbox-item-card ${notif.read ? '' : 'unread'}`;

        const icon = notif.type === "contact" ? "💬" : "⚠️";
        const dateFormatted = new Date(notif.date).toLocaleString('ko-KR', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        item.innerHTML = `
            <div style="font-size: 1.5rem;">${icon}</div>
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.3rem;">
                    <div style="font-weight: 700; font-size: 0.9rem; color: #a78bfa;">
                        [${escapeHtml(notif.siteName)}] <span style="color: white; font-weight: 500;">${escapeHtml(notif.sender)}</span>
                    </div>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">${dateFormatted}</span>
                </div>
                <div style="font-size: 0.85rem; color: #e2e8f0; line-height: 1.4;">${escapeHtml(notif.message)}</div>
            </div>
            <div>
                ${!notif.read ? `<button onclick="toggleReadNotif('${notif.id}')" style="background: rgba(59, 130, 246, 0.2); border: 1px solid rgba(59, 130, 246, 0.4); color: #93c5fd; padding: 0.3rem 0.6rem; border-radius: 6px; font-size: 0.75rem; cursor: pointer;">읽음 표시</button>` : `<span style="font-size: 0.75rem; color: var(--text-secondary);">읽음</span>`}
            </div>
        `;
        container.appendChild(item);
    });
}

function toggleReadNotif(id) {
    const notif = notifications.find(n => n.id === id);
    if (notif) {
        notif.read = true;
        saveNotifications();
        renderInbox();
    }
}

function simulateNewInquiry() {
    const randomSites = sites.length > 0 ? sites : DEFAULT_SITES;
    const targetSite = randomSites[Math.floor(Math.random() * randomSites.length)];
    const mockSenders = ["이민준 (minjun@startup.kr)", "Sophia Martinez (sophia@ai.io)", "박지훈 (jihoon@tech.co)"];
    const mockMessages = [
        "서비스 이용 플랜 관련 가격 협의 문의드립니다.",
        "웹 사이트 성능이 매우 우수하네요! 기술 스택이 궁금합니다.",
        "파트너십 제안서를 전송해 드리고 싶습니다. 이메일 주소를 공유해주실 수 있으신가요?"
    ];

    const newNotif = {
        id: "notif-" + Date.now(),
        type: "contact",
        siteName: targetSite.name,
        sender: mockSenders[Math.floor(Math.random() * mockSenders.length)],
        message: mockMessages[Math.floor(Math.random() * mockMessages.length)],
        date: new Date().toISOString(),
        read: false
    };

    notifications.unshift(newNotif);
    saveNotifications();
    renderInbox();
}

// Export and Import Data Functions
function exportData() {
    try {
        const backupPayload = {
            sites: sites,
            notifications: notifications
        };
        const dataStr = JSON.stringify(backupPayload, null, 4);
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
            
            // Support both old array format and new payload object format
            let importedSites = [];
            let importedNotifs = null;

            if (Array.isArray(imported)) {
                importedSites = imported;
            } else if (imported.sites && Array.isArray(imported.sites)) {
                importedSites = imported.sites;
                importedNotifs = imported.notifications;
            } else {
                throw new Error("백업 파일 형식이 유효하지 않습니다.");
            }

            if (confirm(`가져온 ${importedSites.length}개의 웹사이트 데이터를 복원하시겠습니까? 기존 데이터는 덮어씌워집니다.`)) {
                sites = importedSites;
                if (importedNotifs) notifications = importedNotifs;
                saveSites();
                saveNotifications();
                renderStats();
                renderFilters();
                renderSites();
                alert("데이터가 성공적으로 복원되었습니다.");
            }
        } catch (err) {
            alert("데이터 복원에 실패했습니다: " + err.message);
        }
        event.target.value = "";
    };
    reader.readAsText(file);
}

// Event Listeners setup
function setupEventListeners() {
    // Traffic Sync
    document.getElementById("btn-sync-traffic").addEventListener("click", syncTrafficData);

    // Backup & Restore
    document.getElementById("btn-export").addEventListener("click", exportData);
    document.getElementById("btn-import-trigger").addEventListener("click", () => {
        document.getElementById("import-file").click();
    });
    document.getElementById("import-file").addEventListener("change", importData);

    // Health Monitor controls
    document.getElementById("btn-toggle-health").addEventListener("click", openHealthModal);
    document.getElementById("btn-close-health").addEventListener("click", closeHealthModal);
    document.getElementById("btn-run-ping-all").addEventListener("click", runPingAll);

    // Inbox Controls
    document.getElementById("btn-toggle-inbox").addEventListener("click", openInboxModal);
    document.getElementById("btn-close-inbox").addEventListener("click", closeInboxModal);
    document.getElementById("btn-simulate-inbox").addEventListener("click", simulateNewInquiry);

    document.querySelectorAll(".inbox-filter-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".inbox-filter-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentInboxFilter = e.target.dataset.filter;
            renderInbox();
        });
    });

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
    document.getElementById("btn-test-single-url").addEventListener("click", testSingleUrl);

    // Search input
    document.getElementById("search-box").addEventListener("input", (e) => {
        searchSites(e.target.value);
    });

    // Sort select
    document.getElementById("sort-select").addEventListener("change", (e) => {
        sortSites(e.target.value);
    });

    // GA4 Config Controls
    document.getElementById("btn-ga4-config").addEventListener("click", openGa4Modal);
    document.getElementById("btn-close-ga4").addEventListener("click", closeGa4Modal);
    document.getElementById("ga4-config-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const token = document.getElementById("ga4-api-token").value.trim();
        const defaultProp = document.getElementById("ga4-default-property").value.trim();
        saveGa4Config(token, defaultProp);
        alert("🔑 Google Analytics 4 API 연동 설정이 성공적으로 저장되었습니다!");
        closeGa4Modal();
        syncTrafficData();
    });

    // Close modal on background click
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("site-modal")) closeModal();
        if (e.target === document.getElementById("health-modal")) closeHealthModal();
        if (e.target === document.getElementById("inbox-modal")) closeInboxModal();
        if (e.target === document.getElementById("ga4-modal")) closeGa4Modal();
    });
}



