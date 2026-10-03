/* ==========================================================================
   Stephy S Joy - Architectural & Interior Design Portfolio
   Application Logic & Interactive Components
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Portfolio Projects Dataset
     -------------------------------------------------------------------------- */
  const PROJECTS = [
    {
      slug: "re-insurance-office",
      title: "RE Insurance Office @ RE Tower",
      type: "Corporate Office Fit-Out (14th Floor)",
      place: "RE Tower, Kuwait",
      year: "2025 – 2026",
      role: "Architectural & Interior Design, Working Drawings & Site Supervision",
      firm: "International Interiors",
      summary: "Executive office floor comprising reception, elevator lobby, CEO and Chairman suites, meeting rooms and a diwaniya. Comprehensive design package including working drawings, detailed MEP coordination, and site photos from active construction.",
      cover: "assets/re/composite-ceiling-plan-t.webp",
      category: "corporate",
      tabs: [
        [
          "Drawings",
          [
            { src: "assets/re/furniture-layout-plan.webp", t: "assets/re/furniture-layout-plan-t.webp", title: "Furniture Layout Plan", sub: "Plans" },
            { src: "assets/re/partition-layout-plan.webp", t: "assets/re/partition-layout-plan-t.webp", title: "Partition Layout Plan", sub: "Plans" },
            { src: "assets/re/flooring-layout-plan.webp", t: "assets/re/flooring-layout-plan-t.webp", title: "Flooring Layout Plan", sub: "Plans" },
            { src: "assets/re/composite-ceiling-plan.webp", t: "assets/re/composite-ceiling-plan-t.webp", title: "Composite Ceiling Plan", sub: "Plans" },
            { src: "assets/re/elevator-lobby-details.webp", t: "assets/re/elevator-lobby-details-t.webp", title: "Elevator Lobby Details", sub: "Details & Elevations" },
            { src: "assets/re/reception-area-details.webp", t: "assets/re/reception-area-details-t.webp", title: "Reception Area Details", sub: "Details & Elevations" },
            { src: "assets/re/meeting-room-1-elevations.webp", t: "assets/re/meeting-room-1-elevations-t.webp", title: "Meeting Room 1 Elevations", sub: "Details & Elevations" },
            { src: "assets/re/ceo-office-elevations.webp", t: "assets/re/ceo-office-elevations-t.webp", title: "CEO Office Elevations", sub: "Details & Elevations" },
            { src: "assets/re/chairman-office-elevations.webp", t: "assets/re/chairman-office-elevations-t.webp", title: "Chairman Office Elevations", sub: "Details & Elevations" },
            { src: "assets/re/diwaniya-elevations.webp", t: "assets/re/diwaniya-elevations-t.webp", title: "Diwaniya Elevations", sub: "Details & Elevations" }
          ]
        ],
        [
          "Technical MEP",
          [
            { src: "assets/re/lighting-layout.webp", t: "assets/re/lighting-layout-t.webp", title: "Lighting Layout Plan", sub: "Technical Layouts" },
            { src: "assets/re/power-and-data-layout.webp", t: "assets/re/power-and-data-layout-t.webp", title: "Power & Data Layout Plan", sub: "Technical Layouts" },
            { src: "assets/re/db-schedule.webp", t: "assets/re/db-schedule-t.webp", title: "DB Schedule & Load Calculations", sub: "Technical Layouts" },
            { src: "assets/re/hvac-layout.webp", t: "assets/re/hvac-layout-t.webp", title: "HVAC Layout Plan", sub: "Technical Layouts" },
            { src: "assets/re/water-supply-layout.webp", t: "assets/re/water-supply-layout-t.webp", title: "Water Supply Layout", sub: "Technical Layouts" },
            { src: "assets/re/drainage-layout.webp", t: "assets/re/drainage-layout-t.webp", title: "Drainage Layout Plan", sub: "Technical Layouts" }
          ]
        ],
        [
          "On Site Execution",
          [
            { src: "assets/re/site01.webp", t: "assets/re/site01-t.webp", title: "Setting Out: Partition Framing" },
            { src: "assets/re/site02.webp", t: "assets/re/site02-t.webp", title: "Services: Plumbing Runs" },
            { src: "assets/re/site03.webp", t: "assets/re/site03-t.webp", title: "Services: HVAC Ductwork Installation" },
            { src: "assets/re/site04.webp", t: "assets/re/site04-t.webp", title: "Acoustic Partition Insulation" },
            { src: "assets/re/site05.webp", t: "assets/re/site05-t.webp", title: "Ceiling Void MEP Coordination" },
            { src: "assets/re/site06.webp", t: "assets/re/site06-t.webp", title: "Duct Insulation & Ceiling Works" },
            { src: "assets/re/site07.webp", t: "assets/re/site07-t.webp", title: "Ceiling Grid & Partition Alignment" },
            { src: "assets/re/site08.webp", t: "assets/re/site08-t.webp", title: "Toilet Wall Niche & Tiling" },
            { src: "assets/re/site09.webp", t: "assets/re/site09-t.webp", title: "Protected Furniture & Finishing Works" },
            { src: "assets/re/site10.webp", t: "assets/re/site10-t.webp", title: "Corridor Electrical Conduit Routing" },
            { src: "assets/re/site11.webp", t: "assets/re/site11-t.webp", title: "Drawing Verification on Site" },
            { src: "assets/re/site12.webp", t: "assets/re/site12-t.webp", title: "Staged Stone Floor Tiles Inspection" }
          ]
        ]
      ]
    },
    {
      slug: "trolley-mangaf",
      title: "Trolley @ Mangaf",
      type: "Retail Storefront & Fit-Out",
      place: "Mangaf, Kuwait",
      year: "2026",
      role: "Exterior Design, 3D Visualisation & Complete As-Built Drawing Set",
      firm: "International Interiors",
      summary: "Modern convenience store storefront and retail space. Designed and visualised the exterior facade concept and developed the complete technical as-built architectural and engineering drawing package.",
      cover: "assets/trolley/cover-t.webp",
      category: "retail",
      slider: ["assets/trolley/slider-concept.webp", "assets/trolley/slider-built.webp"],
      tabs: [
        [
          "Drawings",
          [
            { src: "assets/trolley/p04.webp", t: "assets/trolley/p04-t.webp", title: "Furniture Layout Plan", sub: "Plans" },
            { src: "assets/trolley/p05.webp", t: "assets/trolley/p05-t.webp", title: "Flooring Layout Plan", sub: "Plans" },
            { src: "assets/trolley/p06.webp", t: "assets/trolley/p06-t.webp", title: "Reflected Ceiling Plan", sub: "Plans" },
            { src: "assets/trolley/p07.webp", t: "assets/trolley/p07-t.webp", title: "ATM Niche Elevations", sub: "Sections & Elevations" },
            { src: "assets/trolley/p08.webp", t: "assets/trolley/p08-t.webp", title: "Sections 01 and 02", sub: "Sections & Elevations" },
            { src: "assets/trolley/p09.webp", t: "assets/trolley/p09-t.webp", title: "Section 03", sub: "Sections & Elevations" },
            { src: "assets/trolley/p10.webp", t: "assets/trolley/p10-t.webp", title: "Self-Service Counter Details", sub: "Custom Joinery Details" },
            { src: "assets/trolley/p11.webp", t: "assets/trolley/p11-t.webp", title: "Cigarette Display Shelves Details", sub: "Custom Joinery Details" },
            { src: "assets/trolley/p12.webp", t: "assets/trolley/p12-t.webp", title: "Signage Specification (Sheet 1)", sub: "Facade Signage" },
            { src: "assets/trolley/p13.webp", t: "assets/trolley/p13-t.webp", title: "Signage Details (Sheet 2)", sub: "Facade Signage" },
            { src: "assets/trolley/p14.webp", t: "assets/trolley/p14-t.webp", title: "Signage Mounting Details (Sheet 3)", sub: "Facade Signage" },
            { src: "assets/trolley/p15.webp", t: "assets/trolley/p15-t.webp", title: "Cash Counter Construction Details", sub: "Custom Joinery Details" }
          ]
        ],
        [
          "Technical MEP",
          [
            { src: "assets/trolley/p16.webp", t: "assets/trolley/p16-t.webp", title: "Lighting Layout Plan", sub: "Technical Layouts" },
            { src: "assets/trolley/p17.webp", t: "assets/trolley/p17-t.webp", title: "Power Socket Layout Plan", sub: "Technical Layouts" },
            { src: "assets/trolley/p18.webp", t: "assets/trolley/p18-t.webp", title: "CCTV & Security Layout Plan", sub: "Technical Layouts" },
            { src: "assets/trolley/p19.webp", t: "assets/trolley/p19-t.webp", title: "Data & Communication Layout", sub: "Technical Layouts" },
            { src: "assets/trolley/p20.webp", t: "assets/trolley/p20-t.webp", title: "DB Schedule & Electrical Load Analysis", sub: "Technical Layouts" },
            { src: "assets/trolley/p21.webp", t: "assets/trolley/p21-t.webp", title: "HVAC Duct Layout Plan", sub: "Technical Layouts" },
            { src: "assets/trolley/p22.webp", t: "assets/trolley/p22-t.webp", title: "Water Supply Piping Layout", sub: "Technical Layouts" },
            { src: "assets/trolley/p23.webp", t: "assets/trolley/p23-t.webp", title: "Drainage System Layout", sub: "Technical Layouts" }
          ]
        ]
      ]
    },
    {
      slug: "indian-heritage-alkout",
      title: "Indian Heritage @ Al-Kout Mall",
      type: "Retail Fashion Boutique",
      place: "Al-Kout Mall, Kuwait",
      year: "2026",
      role: "Interior Design & 3D Visualization",
      firm: "International Interiors",
      summary: "High-end Indian ethnic-wear boutique located in an irregular corner unit. Designed with a custom boutique floor plan, seating vignette, lounge area, trial rooms and POS counter in a palette of textured plaster, timber, and terracotta.",
      cover: "assets/alkout/r2-t.webp",
      category: "retail",
      tabs: [
        [
          "3D Renders",
          [
            { src: "assets/alkout/r2.webp", t: "assets/alkout/r2-t.webp", title: "Boutique Main Floor View" },
            { src: "assets/alkout/r1.webp", t: "assets/alkout/r1-t.webp", title: "Mall Entrance Shopfront" },
            { src: "assets/alkout/r3.webp", t: "assets/alkout/r3-t.webp", title: "Boutique Area Overview" },
            { src: "assets/alkout/r4.webp", t: "assets/alkout/r4-t.webp", title: "Seating Vignette & Display" },
            { src: "assets/alkout/r7.webp", t: "assets/alkout/r7-t.webp", title: "Point of Sales (POS) Counter" },
            { src: "assets/alkout/r5.webp", t: "assets/alkout/r5-t.webp", title: "Seating & Heritage Brand Wall" },
            { src: "assets/alkout/r6.webp", t: "assets/alkout/r6-t.webp", title: "Lounge & Fitting Rooms Area" }
          ]
        ],
        [
          "Drawings",
          [
            { src: "assets/alkout/plan.webp", t: "assets/alkout/plan-t.webp", title: "Furniture & Fitting Layout Plan", sub: "Plans" }
          ]
        ]
      ]
    },
    {
      slug: "indian-heritage-aventura",
      title: "Indian Heritage @ Aventura Mall",
      type: "Retail Fashion Boutique",
      place: "Aventura Mall, Kuwait",
      year: "2026",
      role: "Interior Design, 3D Visualization & Complete Construction Drawing Package",
      firm: "International Interiors",
      summary: "Second flagship boutique in a structured rectangular layout featuring a central display podium, VIP lounge, feature lighting, custom joinery, and a complete engineering drawing set.",
      cover: "assets/aventura/r4-t.webp",
      category: "retail",
      tabs: [
        [
          "3D Renders",
          [
            { src: "assets/aventura/r4.webp", t: "assets/aventura/r4-t.webp", title: "Shopfront & Entrance" },
            { src: "assets/aventura/r1.webp", t: "assets/aventura/r1-t.webp", title: "Boutique Display Floor (View 1)" },
            { src: "assets/aventura/r2.webp", t: "assets/aventura/r2-t.webp", title: "Boutique Display Floor (View 2)" },
            { src: "assets/aventura/r3.webp", t: "assets/aventura/r3-t.webp", title: "Point of Sales (POS) Desk" },
            { src: "assets/aventura/r5.webp", t: "assets/aventura/r5-t.webp", title: "VIP Lounge Area" }
          ]
        ],
        [
          "Drawings",
          [
            { src: "assets/aventura/id01.webp", t: "assets/aventura/id01-t.webp", title: "Furniture Layout Plan", sub: "Plans" },
            { src: "assets/aventura/id02.webp", t: "assets/aventura/id02-t.webp", title: "Flooring Layout Plan", sub: "Plans" },
            { src: "assets/aventura/id03.webp", t: "assets/aventura/id03-t.webp", title: "Composite Ceiling Plan", sub: "Plans" },
            { src: "assets/aventura/id04.webp", t: "assets/aventura/id04-t.webp", title: "Shopfront Construction Details", sub: "Details" },
            { src: "assets/aventura/id05.webp", t: "assets/aventura/id05-t.webp", title: "Section AA & Section BB", sub: "Sections" },
            { src: "assets/aventura/id06.webp", t: "assets/aventura/id06-t.webp", title: "Section CC Elevation", sub: "Sections" },
            { src: "assets/aventura/id07.webp", t: "assets/aventura/id07-t.webp", title: "Hanger & Display Rack Details", sub: "Details" },
            { src: "assets/aventura/id08.webp", t: "assets/aventura/id08-t.webp", title: "PVC Stretch Ceiling & Custom Light Details", sub: "Details" },
            { src: "assets/aventura/id09.webp", t: "assets/aventura/id09-t.webp", title: "Savera Custom Joinery Unit Details", sub: "Details" }
          ]
        ],
        [
          "Technical MEP",
          [
            { src: "assets/aventura/ac01.webp", t: "assets/aventura/ac01-t.webp", title: "HVAC Duct Layout Plan", sub: "Technical Layouts" },
            { src: "assets/aventura/el01.webp", t: "assets/aventura/el01-t.webp", title: "Lighting Layout Plan", sub: "Technical Layouts" },
            { src: "assets/aventura/el02.webp", t: "assets/aventura/el02-t.webp", title: "Power & Data Socket Plan", sub: "Technical Layouts" },
            { src: "assets/aventura/el03.webp", t: "assets/aventura/el03-t.webp", title: "Distribution Board (DB) Schedule", sub: "Technical Layouts" },
            { src: "assets/aventura/ff01.webp", t: "assets/aventura/ff01-t.webp", title: "Firefighting Pipe Layout", sub: "Technical Layouts" },
            { src: "assets/aventura/ff02.webp", t: "assets/aventura/ff02-t.webp", title: "Fire Alarm Layout Plan", sub: "Technical Layouts" }
          ]
        ]
      ]
    }
  ];

  const SITE_INFO = {
    name: "Stephy S Joy",
    title: "Architect & Interior Designer",
    location: "Kuwait",
    email: "ar.stephysjoy@gmail.com",
    experienceYears: "4+"
  };

  const ABOUT = {
    story: "Architect with 4+ years of professional experience in architectural design and interior fit-outs, specializing in retail, corporate, and commercial developments across Kuwait. Experienced in bringing projects from initial concept and space planning through 3D visualization, detailed CAD working drawings, BOQs, specifications, MEP coordination, and site supervision.",
    edu: [
      ["Bachelor of Architecture (B.Arch)", "University of Calicut, India", "2017 – 2022"]
    ],
    exp: [
      ["Architect / Interior Designer", "International Interiors, Kuwait", "Nov 2025 – Present", "Spearheading concept design, space planning, detailed CAD working drawings, and 3D visualization for retail boutiques and executive corporate offices. Directing design criteria coordination with mall engineers, preparing BOQs, material specs, supplier purchase orders, electrical/MEP layouts (lighting, power, CCTV, DB schedules), and leading on-site execution."],
      ["Freelance Architect & Interior Designer", "Self-Employed", "2023 – 2025", "Delivered architectural plans, 3D Lumion renderings, interior layouts, and technical drawings for residential villas and small-scale commercial fit-outs."],
      ["Junior Architect", "Royal Builders", "2022 – 2023", "Produced architectural drawings, structural coordination plans, and presentation boards for residential and commercial projects."],
      ["Architectural Intern", "Dens Architects", "2021", "Assisted in schematic design drafting, site surveys, and municipal submission documentation."]
    ],
    skills: [
      "Retail & Commercial Fit-Out",
      "Concept & Space Planning",
      "Working Drawings & Details",
      "MEP & DB Schedule Coordination",
      "Mall Engineer & Technical Specs",
      "BOQ & Quantity Surveying",
      "Site Supervision & Construction Verification",
      "3D Rendering & Visualisation"
    ],
    soft: [
      "AutoCAD", "SketchUp", "Lumion", "V-Ray", "Enscape", "Photoshop", "Illustrator", "InDesign", "Canva", "MS Office"
    ],
    lang: ["English (Fluent)", "Malayalam (Native)", "Hindi (Fluent)", "Tamil (Fluent)", "Arabic (Basic)"]
  };

  /* --------------------------------------------------------------------------
     2. DOM Helpers & State Management
     -------------------------------------------------------------------------- */
  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);
  const sanitize = str => String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  let currentCategoryFilter = "all";
  let activeLightboxItems = [];
  let lightboxIndex = 0;
  let lightboxZoom = 1;
  let isPanning = false;
  let panStart = { x: 0, y: 0 };
  let panOffset = { x: 0, y: 0 };

  /* --------------------------------------------------------------------------
     3. Theme Switcher (Dark / Light)
     -------------------------------------------------------------------------- */
  function initTheme() {
    const savedTheme = localStorage.getItem("studio_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("studio_theme", next);
    updateThemeIcon(next);
  }

  function updateThemeIcon(theme) {
    const btn = $("#themeToggle");
    if (!btn) return;
    btn.innerHTML = theme === "dark" 
      ? `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
      : `<svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    btn.title = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
  }

  /* --------------------------------------------------------------------------
     4. Router & Navigation
     -------------------------------------------------------------------------- */
  const NAV_ITEMS = [
    ["#/", "Projects"],
    ["#/about", "About"],
    ["#/resume", "Resume"],
    ["#/contact", "Contact Studio"]
  ];

  function renderNavbar() {
    const hash = location.hash || "#/";
    const navContainer = $("#navLinks");
    if (!navContainer) return;
    
    navContainer.innerHTML = NAV_ITEMS.map(([url, text]) => {
      const isActive = hash === url || (url === "#/" && hash.startsWith("#/p/"));
      return `<a href="${url}" class="${isActive ? 'active' : ''}">${text}</a>`;
    }).join('');
  }

  function route() {
    closeLightbox();
    renderNavbar();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const hash = location.hash || "#/";
    const appContainer = $("#app");

    if (hash.startsWith("#/p/")) {
      const slug = hash.slice(4);
      renderProjectDetail(slug);
    } else if (hash === "#/about") {
      renderAboutView();
    } else if (hash === "#/resume") {
      renderResumeView();
    } else if (hash === "#/contact") {
      renderContactView();
    } else {
      renderHomeView();
    }
  }

  /* --------------------------------------------------------------------------
     5. Views Implementation
     -------------------------------------------------------------------------- */
  
  // Home View (Projects Gallery + Filters + Key Metrics)
  function renderHomeView() {
    const appContainer = $("#app");
    
    const filteredProjects = currentCategoryFilter === "all" 
      ? PROJECTS 
      : PROJECTS.filter(p => p.category === currentCategoryFilter);

    appContainer.innerHTML = `
      <section class="hero-header">
        <div class="hero-tag">Architectural & Interior Design Studio &middot; Kuwait</div>
        <h1 class="hero-title">${sanitize(SITE_INFO.name)}</h1>
        <p class="hero-subtitle">Specializing in commercial fit-outs, executive corporate offices, retail boutiques, detailed CAD working drawings, and on-site MEP coordination.</p>
        
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-num">4+</span>
            <span class="stat-lbl">Years Design<br>Experience</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">4</span>
            <span class="stat-lbl">Featured Commercial<br>Fit-Out Projects</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">50+</span>
            <span class="stat-lbl">Technical CAD & MEP<br>Drawing Sheets</span>
          </div>
          <div class="stat-item">
            <span class="stat-num">100%</span>
            <span class="stat-lbl">Site & Mall Engineering<br>Coordination</span>
          </div>
        </div>
      </section>

      <div class="filter-bar">
        <button class="filter-btn ${currentCategoryFilter === 'all' ? 'active' : ''}" data-cat="all">All Projects (4)</button>
        <button class="filter-btn ${currentCategoryFilter === 'corporate' ? 'active' : ''}" data-cat="corporate">Corporate Offices</button>
        <button class="filter-btn ${currentCategoryFilter === 'retail' ? 'active' : ''}" data-cat="retail">Retail Boutiques & Stores</button>
      </div>

      <div class="projects-grid">
        ${filteredProjects.map((p, i) => `
          <a class="project-card" href="#/p/${p.slug}">
            <div class="card-image-wrap">
              <img src="${p.cover}" alt="${sanitize(p.title)}" loading="lazy">
              <span class="card-badge">PROJECT ${String(i + 1).padStart(2, '0')}</span>
            </div>
            <div class="card-body">
              <div class="card-header">
                <h2 class="card-title">${sanitize(p.title)}</h2>
                <div class="card-arrow">&rarr;</div>
              </div>
              <p class="card-desc">${sanitize(p.summary)}</p>
              <div class="card-footer">
                <span class="mono">${sanitize(p.type)}</span>
                <span class="mono">${sanitize(p.year)}</span>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    `;

    // Add filter bar event listeners
    const filterBtns = $$(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategoryFilter = btn.dataset.cat;
        renderHomeView();
      });
    });
  }

  // Detailed Project View
  function renderProjectDetail(slug) {
    const project = PROJECTS.find(p => p.slug === slug);
    if (!project) return renderHomeView();

    const appContainer = $("#app");
    const metaList = [
      ["Type", project.type],
      ["Location", project.place],
      ["Year", project.year],
      ["Firm", project.firm]
    ];
    if (project.role) metaList.push(["Role", project.role]);

    appContainer.innerHTML = `
      <div class="project-detail">
        <a class="back-link" href="#/">&larr; Back to all projects</a>
        
        <div class="detail-header">
          <span class="hero-tag">${sanitize(project.type)}</span>
          <h1 class="hero-title" style="margin-top:8px">${sanitize(project.title)}</h1>
          <p class="hero-subtitle">${sanitize(project.summary)}</p>
          
          <div class="detail-meta-grid">
            ${metaList.map(([k, v]) => `
              <div class="meta-box">
                <span class="lbl">${k}</span>
                <span class="val">${sanitize(v)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        ${project.slider ? `
          <div class="comparison-container">
            <div class="comparison-header">
              <div class="comparison-title">
                <svg width="20" height="20" fill="none" stroke="var(--accent-gold)" stroke-width="2" viewBox="0 0 24 24"><path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
                <span>Interactive Facade Comparison</span>
              </div>
              <span class="mono" style="color:var(--text-muted)">Drag slider to compare concept with finished project</span>
            </div>
            
            <div class="comparison-stage" id="comparisonStage" style="--split-pos: 50%">
              <img src="${project.slider[1]}" alt="Finished storefront built">
              <img class="img-top" src="${project.slider[0]}" alt="3D Concept visualization">
              <div class="comparison-line"></div>
              <div class="comparison-handle" aria-hidden="true">&#8644;</div>
              <div class="comparison-tag tag-left"><b>3D VISUALIZATION</b><br><span class="mono">Concept</span></div>
              <div class="comparison-tag tag-right"><b>FINISHED PROJECT</b><br><span class="mono">Built</span></div>
              <input type="range" class="comparison-range-input" id="compRange" min="0" max="100" value="50" aria-label="Compare 3D Concept and Finished Storefront">
            </div>
          </div>
        ` : ''}

        <div class="tab-navigation" id="tabNav">
          ${project.tabs.map((tab, idx) => `
            <button class="tab-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}">
              ${tab[0]} (${tab[1].length})
            </button>
          `).join('')}
        </div>

        <div id="tabContent"></div>
      </div>
    `;

    // Render initial active tab
    renderTabContent(project, 0);

    // Tab switcher events
    const tabBtns = $$("#tabNav .tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderTabContent(project, parseInt(btn.dataset.index));
      });
    });

    // Comparison slider logic
    initComparisonSlider();
  }

  function renderTabContent(project, tabIndex) {
    const tabData = project.tabs[tabIndex];
    if (!tabData) return;

    const items = tabData[1];
    const tabContent = $("#tabContent");
    const subGroups = [...new Set(items.map(x => x.sub || ''))];

    tabContent.innerHTML = subGroups.map(sub => `
      ${sub ? `<h2 class="gallery-section-title">${sanitize(sub)}</h2>` : ''}
      <div class="thumb-grid">
        ${items.filter(x => (x.sub || '') === sub).map(item => {
          const globalIdx = items.indexOf(item);
          return `
            <button class="thumb-card" data-idx="${globalIdx}">
              <div class="img-holder">
                <img src="${item.t}" alt="${sanitize(item.title)}" loading="lazy">
              </div>
              <div class="thumb-caption">${sanitize(item.title)}</div>
            </button>
          `;
        }).join('')}
      </div>
    `).join('');

    // Attach click events for lightbox modal
    const thumbCards = $$("#tabContent .thumb-card");
    thumbCards.forEach(card => {
      card.addEventListener("click", () => {
        const itemIdx = parseInt(card.dataset.idx);
        openLightbox(items, itemIdx);
      });
    });
  }

  function initComparisonSlider() {
    const stage = $("#comparisonStage");
    const range = $("#compRange");
    if (!stage || !range) return;

    const updatePosition = val => stage.style.setProperty("--split-pos", `${val}%`);
    range.addEventListener("input", e => updatePosition(e.target.value));

    // Pointer events for smooth drag on stage
    let dragging = false;
    const calcPos = e => {
      const rect = stage.getBoundingClientRect();
      const pos = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
      range.value = pos;
      updatePosition(pos);
    };

    stage.addEventListener("pointerdown", e => {
      dragging = true;
      stage.setPointerCapture(e.pointerId);
      calcPos(e);
    });

    stage.addEventListener("pointermove", e => {
      if (dragging) calcPos(e);
    });

    stage.addEventListener("pointerup", () => dragging = false);
    stage.addEventListener("pointercancel", () => dragging = false);
  }

  // About View
  function renderAboutView() {
    const appContainer = $("#app");
    appContainer.innerHTML = `
      <div class="hero-header">
        <span class="hero-tag">About & Background</span>
        <h1 class="hero-title">Architectural & Interior Design</h1>
        <p class="hero-subtitle">${sanitize(ABOUT.story)}</p>
      </div>

      <div class="about-grid">
        <div class="about-card">
          <h2>Experience & Career</h2>
          <ul class="timeline-list">
            ${ABOUT.exp.map(e => `
              <li class="timeline-item">
                <div class="timeline-role">${sanitize(e[0])}</div>
                <div class="timeline-company">${sanitize(e[1])}</div>
                <div class="timeline-date">${sanitize(e[2])}</div>
                <p class="timeline-desc">${sanitize(e[3])}</p>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="about-card">
          <h2>Core Competencies</h2>
          <div class="tag-cloud" style="margin-bottom: 28px;">
            ${ABOUT.skills.map(s => `<span class="chip-tag">${sanitize(s)}</span>`).join('')}
          </div>

          <h2>Software Proficiency</h2>
          <div class="tag-cloud" style="margin-bottom: 28px;">
            ${ABOUT.soft.map(s => `<span class="chip-tag" style="border-color:var(--accent-gold);color:var(--text-primary);">${sanitize(s)}</span>`).join('')}
          </div>

          <h2>Education & Degree</h2>
          <ul class="timeline-list" style="margin-bottom: 24px;">
            ${ABOUT.edu.map(e => `
              <li class="timeline-item">
                <div class="timeline-role">${sanitize(e[0])}</div>
                <div class="timeline-company">${sanitize(e[1])}</div>
                <div class="timeline-date">${sanitize(e[2])}</div>
              </li>
            `).join('')}
          </ul>

          <h2>Languages Spoken</h2>
          <p class="timeline-desc">${ABOUT.lang.join(' &middot; ')}</p>
        </div>
      </div>
    `;
  }

  // Resume View
  function renderResumeView() {
    const appContainer = $("#app");
    appContainer.innerHTML = `
      <div class="hero-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px">
        <div>
          <span class="hero-tag">Professional Curriculum Vitae</span>
          <h1 class="hero-title">${sanitize(SITE_INFO.name)}</h1>
          <p class="hero-subtitle">${sanitize(SITE_INFO.title)} &middot; ${sanitize(SITE_INFO.location)}</p>
        </div>
        <button class="btn-action" id="printResumeBtn">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
          Print / Save PDF
        </button>
      </div>

      <div class="about-grid">
        <div class="about-card" style="grid-column: 1 / -1;">
          <h2>Professional Work Experience</h2>
          <ul class="timeline-list">
            ${ABOUT.exp.map(e => `
              <li class="timeline-item">
                <div class="timeline-role">${sanitize(e[0])} &middot; <span class="timeline-company">${sanitize(e[1])}</span></div>
                <div class="timeline-date">${sanitize(e[2])}</div>
                <p class="timeline-desc" style="max-width:85ch">${sanitize(e[3])}</p>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    $("#printResumeBtn")?.addEventListener("click", () => window.print());
  }

  // Contact Studio View
  function renderContactView() {
    const appContainer = $("#app");
    appContainer.innerHTML = `
      <div class="contact-container">
        <div class="contact-header">
          <span class="hero-tag">Get in Touch</span>
          <h1 class="hero-title" style="font-size:2.2rem">Let's Create Something Exceptional.</h1>
          <p class="hero-subtitle" style="margin: 0 auto">Available for retail fit-out design, commercial architecture, CAD drafting packages, and site execution management in Kuwait.</p>
        </div>

        <div class="contact-methods">
          <div class="contact-row">
            <div>
              <span class="mono" style="color:var(--text-muted)">Direct Email</span>
              <div style="font-weight:600;font-size:1.05rem;color:var(--accent-gold);margin-top:2px">${sanitize(SITE_INFO.email)}</div>
            </div>
            <button class="btn-action" id="copyEmailBtn" style="padding:8px 16px;font-size:0.85rem">
              Copy Email
            </button>
          </div>

          <div class="contact-row">
            <div>
              <span class="mono" style="color:var(--text-muted)">Location & Studio</span>
              <div style="font-weight:600;font-size:1.05rem;color:var(--text-primary);margin-top:2px">Kuwait &middot; Retail & Commercial Architecture</div>
            </div>
          </div>
        </div>

        <div style="text-align:center">
          <a class="btn-action" href="mailto:${SITE_INFO.email}?subject=Architectural%20Inquiry%20-%20Stephy%20S%20Joy" style="width:100%;box-sizing:border-box">
            Send an Email Message &rarr;
          </a>
        </div>
      </div>
    `;

    $("#copyEmailBtn")?.addEventListener("click", () => {
      navigator.clipboard.writeText(SITE_INFO.email).then(() => {
        showToast("Email address copied to clipboard!");
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. Advanced Blueprint Lightbox Viewer (Pan, Zoom, Keyboard Navigation)
     -------------------------------------------------------------------------- */
  function openLightbox(items, index) {
    activeLightboxItems = items;
    lightboxIndex = index;
    lightboxZoom = 1;
    panOffset = { x: 0, y: 0 };

    renderLightboxMarkup();
    document.addEventListener("keydown", handleLightboxKeydown);
  }

  function closeLightbox() {
    const lbEl = $("#lightboxOverlay");
    if (lbEl) lbEl.remove();
    document.removeEventListener("keydown", handleLightboxKeydown);
  }

  function renderLightboxMarkup() {
    let lbEl = $("#lightboxOverlay");
    if (!lbEl) {
      lbEl = document.createElement("div");
      lbEl.id = "lightboxOverlay";
      lbEl.className = "lightbox-overlay";
      document.body.appendChild(lbEl);
    }

    const item = activeLightboxItems[lightboxIndex];
    if (!item) return closeLightbox();

    lbEl.innerHTML = `
      <div class="lightbox-header">
        <div class="lightbox-title-area">
          <span class="lightbox-counter">${lightboxIndex + 1} / ${activeLightboxItems.length}</span>
          <span class="lightbox-title">${sanitize(item.title)}</span>
        </div>
        <div class="lightbox-controls">
          <button class="lb-btn" id="lbZoomOut" title="Zoom Out (-)">-</button>
          <button class="lb-btn" id="lbZoomReset" title="Reset Zoom">100%</button>
          <button class="lb-btn" id="lbZoomIn" title="Zoom In (+)">+</button>
          <button class="lb-btn" id="lbPrev" title="Previous Image (&larr;)">&larr; Prev</button>
          <button class="lb-btn" id="lbNext" title="Next Image (&rarr;)">Next &rarr;</button>
          <button class="lb-btn" id="lbClose" style="border-color:var(--accent-gold);color:var(--accent-gold)">Close (Esc)</button>
        </div>
      </div>

      <div class="lightbox-viewport" id="lbViewport">
        <div class="lightbox-img-wrapper" id="lbImgWrapper" style="transform: translate(${panOffset.x}px, ${panOffset.y}px) scale(${lightboxZoom})">
          <img src="${item.src}" alt="${sanitize(item.title)}">
        </div>
      </div>

      <div class="lightbox-thumb-rail">
        ${activeLightboxItems.map((it, idx) => `
          <div class="lb-thumb ${idx === lightboxIndex ? 'active' : ''}" data-thumb-idx="${idx}">
            <img src="${it.t}" alt="${sanitize(it.title)}">
          </div>
        `).join('')}
      </div>
    `;

    // Event listeners for controls
    $("#lbClose")?.addEventListener("click", closeLightbox);
    $("#lbPrev")?.addEventListener("click", () => navigateLightbox(-1));
    $("#lbNext")?.addEventListener("click", () => navigateLightbox(1));
    $("#lbZoomIn")?.addEventListener("click", () => adjustZoom(0.3));
    $("#lbZoomOut")?.addEventListener("click", () => adjustZoom(-0.3));
    $("#lbZoomReset")?.addEventListener("click", () => resetZoom());

    // Thumbnail rail clicks
    $$(".lb-thumb").forEach(thumb => {
      thumb.addEventListener("click", () => {
        lightboxIndex = parseInt(thumb.dataset.thumbIdx);
        resetZoom();
        renderLightboxMarkup();
      });
    });

    // Pan & Drag setup
    initLightboxPan();
  }

  function navigateLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + activeLightboxItems.length) % activeLightboxItems.length;
    resetZoom();
    renderLightboxMarkup();
  }

  function adjustZoom(delta) {
    lightboxZoom = Math.max(0.5, Math.min(4.0, lightboxZoom + delta));
    updateLightboxTransform();
  }

  function resetZoom() {
    lightboxZoom = 1;
    panOffset = { x: 0, y: 0 };
    updateLightboxTransform();
  }

  function updateLightboxTransform() {
    const wrapper = $("#lbImgWrapper");
    const resetBtn = $("#lbZoomReset");
    if (wrapper) {
      wrapper.style.transform = `translate(${panOffset.x}px, ${panOffset.y}px) scale(${lightboxZoom})`;
    }
    if (resetBtn) {
      resetBtn.innerText = `${Math.round(lightboxZoom * 100)}%`;
    }
  }

  function initLightboxPan() {
    const viewport = $("#lbViewport");
    if (!viewport) return;

    viewport.addEventListener("mousedown", e => {
      if (lightboxZoom <= 1) return;
      isPanning = true;
      viewport.classList.add("is-dragging");
      panStart = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
    });

    window.addEventListener("mousemove", e => {
      if (!isPanning) return;
      panOffset = { x: e.clientX - panStart.x, y: e.clientY - panStart.y };
      updateLightboxTransform();
    });

    window.addEventListener("mouseup", () => {
      isPanning = false;
      viewport?.classList.remove("is-dragging");
    });

    viewport.addEventListener("wheel", e => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.2 : -0.2;
      adjustZoom(delta);
    }, { passive: false });
  }

  function handleLightboxKeydown(e) {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
    if (e.key === "+" || e.key === "=") adjustZoom(0.3);
    if (e.key === "-" || e.key === "_") adjustZoom(-0.3);
  }

  /* --------------------------------------------------------------------------
     7. Toast Notification Utility
     -------------------------------------------------------------------------- */
  function showToast(msg) {
    const existing = $(".toast-message");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "toast-message";
    toast.innerText = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  /* --------------------------------------------------------------------------
     8. Intro Drawing Screen persistence
     -------------------------------------------------------------------------- */
  function initIntroScreen() {
    const intro = $("#introScreen");
    const enterBtn = $("#enterStudioBtn");
    if (!intro) return;

    let seen = false;
    try {
      seen = sessionStorage.getItem("seen_intro");
    } catch (e) {}

    if (seen || (location.hash && location.hash !== "#/")) {
      intro.remove();
    } else {
      enterBtn?.addEventListener("click", () => {
        intro.classList.add("fade-out");
        setTimeout(() => intro.remove(), 800);
        try {
          sessionStorage.setItem("seen_intro", "1");
        } catch (e) {}
      });
    }
  }

  /* --------------------------------------------------------------------------
     9. App Initialization
     -------------------------------------------------------------------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initIntroScreen();

    // Theme toggle button click
    $("#themeToggle")?.addEventListener("click", toggleTheme);

    // Hash router listeners
    window.addEventListener("hashchange", route);
    route();
  });

})();
