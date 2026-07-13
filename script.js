const projects = [
  {
    number: "01",
    title: "Cyclistic Bike-Share Case Study",
    type: "Google Data Analytics Capstone",
    filters: ["excel", "sql", "power-bi"],
    image: "assets/project-cyclistic.png",
    screenshots: [
      "assets/cyclistic-report-page-1.png",
      "assets/cyclistic-report-page-2.png",
      "assets/cyclistic-report-page-3.png"
    ],
    summary:
      "Analyzed annual members and casual riders to identify behavior differences and marketing opportunities.",
    tools: ["Excel Power Query", "MySQL", "Power BI", "Case Study"],
    business:
      "How do annual members and casual riders use Cyclistic bikes differently, and how can those insights support membership conversion?",
    process: [
      "Combined and prepared 12 months of bike-share trip data.",
      "Cleaned ride duration, removed invalid trips, and created weekday, month, and hour fields.",
      "Built SQL summary tables and Power BI visuals for rider behavior analysis."
    ],
    insights: [
      "Members completed more rides overall.",
      "Casual riders took longer trips on average.",
      "Members showed commute-oriented weekday patterns while casual riders were stronger on weekends."
    ],
    metrics: ["5.68M", "Final rides", "12 months", "Period", "28", "Duplicates removed"]
  },
  {
    number: "02",
    title: "Bellabeat Wellness Case Study",
    type: "Smart Device Usage Analysis",
    filters: ["excel", "sql", "power-bi"],
    image: "assets/project-bellabeat.png",
    screenshots: [
      "assets/bellabeat-dashboard-page-1.png",
      "assets/bellabeat-dashboard-page-2.png",
      "assets/bellabeat-dashboard-page-3.png",
      "assets/bellabeat-dashboard-page-4.png"
    ],
    summary:
      "Studied Fitbit activity and sleep trends to recommend Bellabeat app marketing improvements.",
    tools: ["Excel", "MySQL", "Power BI", "Wellness Analytics"],
    business:
      "What smart-device usage trends can guide Bellabeat's product positioning and marketing strategy?",
    process: [
      "Prepared daily activity, sleep, and hourly behavior datasets.",
      "Created clean activity levels, sleep measures, and device engagement summaries.",
      "Built a dashboard with activity, sleep, and recommendation pages."
    ],
    insights: [
      "Most users were highly sedentary across the day.",
      "Sleep tracking participation was lower than activity tracking.",
      "Users with higher activity generally showed stronger wellness engagement signals."
    ],
    metrics: ["33", "Users", "940", "Daily records", "7.0", "Avg sleep hours"]
  },
  {
    number: "03",
    title: "Movie Data Analysis with Python",
    type: "Python EDA Project",
    filters: ["python"],
    image: "assets/project-movies.png",
    screenshots: [
      "assets/project-movies.png",
      "assets/movie-top-genres.png",
      "assets/movie-top-profit.png"
    ],
    summary:
      "Explored movie performance patterns with Python, pandas, cleaning, visualization, and storytelling.",
    tools: ["Python", "pandas", "Jupyter", "Seaborn"],
    business:
      "Which movie attributes are associated with stronger audience and commercial performance?",
    process: [
      "Loaded and inspected the movie dataset in Jupyter Notebook.",
      "Cleaned missing values, corrected data types, and explored correlations.",
      "Created charts and a portfolio-ready project report."
    ],
    insights: [
      "Revenue and popularity patterns vary strongly by genre and release period.",
      "Ratings alone do not fully explain commercial performance.",
      "Clean visual storytelling makes the project easier for nontechnical readers."
    ],
    metrics: ["Python", "Main tool", "EDA", "Method", "Report", "Output"]
  },
  {
    number: "04",
    title: "Sephora Product Experience Command Center",
    type: "Advanced Power BI Dashboard",
    filters: ["power-bi"],
    image: "assets/project-sephora.png",
    screenshots: ["assets/sephora-dashboard-pdf-page-1.png"],
    summary:
      "Built a standalone interactive dashboard for product reviews, brands, categories, pricing, and opportunity segments.",
    tools: ["Power BI", "DAX", "Power Query", "UX Design"],
    business:
      "Which brands, categories, price ranges, and products create the strongest review and recommendation opportunities?",
    process: [
      "Loaded Sephora product and review data into Power BI.",
      "Created summary tables, measures, slicers, reset bookmarks, and cross-filter interactions.",
      "Designed a one-page command center for executive product exploration."
    ],
    insights: [
      "Skincare dominates review volume in the dataset.",
      "Top brands and opportunity products can be explored through interactive filters.",
      "Price-band and opportunity segment views support product strategy decisions."
    ],
    metrics: ["1M", "Reviews", "2K", "Products", "142", "Brands"]
  }
];

const interactiveData = {
  "Cyclistic Bike-Share Case Study": {
    filters: {
      Overall: ["5.68M", "Total rides", "18.2", "Avg minutes", "2 rider types", "Segments"],
      Members: ["3.98M", "Member rides", "12.4", "Avg minutes", "Weekdays", "Peak pattern"],
      Casual: ["1.70M", "Casual rides", "20.5", "Avg minutes", "Weekends", "Peak pattern"]
    },
    chartLabels: ["Weekdays", "Weekends", "Evening peak"],
    bars: { Overall: [92, 68, 74], Members: [96, 82, 55], Casual: [58, 70, 91] },
    segmentValues: {
      Overall: [
        ["3.7M", "Weekday rides", "13.1", "Avg minutes", "Members", "Lead segment"],
        ["1.2M", "Weekend rides", "21.4", "Avg minutes", "Casual", "Higher duration"],
        ["1.5M", "Peak-hour rides", "16.8", "Avg minutes", "5-7 PM", "Strongest window"]
      ],
      Members: [
        ["2.9M", "Weekday rides", "12.1", "Avg minutes", "Commute", "Primary use"],
        ["0.8M", "Weekend rides", "13.6", "Avg minutes", "Lower", "Weekend demand"],
        ["1.1M", "Peak-hour rides", "11.9", "Avg minutes", "5-7 PM", "Strongest window"]
      ],
      Casual: [
        ["0.8M", "Weekday rides", "18.7", "Avg minutes", "Flexible", "Usage pattern"],
        ["0.9M", "Weekend rides", "23.2", "Avg minutes", "Leisure", "Primary use"],
        ["0.4M", "Peak-hour rides", "20.1", "Avg minutes", "Afternoon", "Higher demand"]
      ]
    }
  },
  "Bellabeat Wellness Case Study": {
    filters: {
      Overall: ["33", "Users", "7.64K", "Avg steps", "7.0", "Sleep hrs"],
      Activity: ["228", "Active mins", "16.5", "Sedentary hrs", "2.3K", "Calories"],
      Sleep: ["24", "Sleep users", "7.0", "Avg sleep", "16.5", "Sedentary hrs"]
    },
    chartLabels: ["Steps", "Sedentary", "Sleep"],
    bars: { Overall: [72, 84, 59], Activity: [88, 64, 78], Sleep: [62, 92, 70] },
    segmentValues: {
      Overall: [
        ["7.64K", "Avg steps", "33", "Users", "Moderate", "Engagement"],
        ["16.5", "Sedentary hrs", "228", "Active mins", "Low activity", "Risk signal"],
        ["7.0", "Sleep hrs", "24", "Sleep users", "Partial", "Tracking"]
      ],
      Activity: [
        ["8K+", "High-step days", "2.3K", "Calories", "Active", "Segment"],
        ["16.5", "Sedentary hrs", "940", "Daily logs", "Behavior", "Opportunity"],
        ["228", "Active mins", "7.64K", "Avg steps", "Habit", "Signal"]
      ],
      Sleep: [
        ["24", "Sleep users", "7.0", "Avg sleep", "Sleep", "Tracking"],
        ["16.5", "Sedentary hrs", "7.0", "Sleep hrs", "Wellness", "Link"],
        ["33", "Total users", "24", "Sleep users", "Gap", "Opportunity"]
      ]
    }
  },
  "Movie Data Analysis with Python": {
    filters: {
      Overall: ["45K+", "Movies", "Python", "Main tool", "EDA", "Method"],
      Revenue: ["Budget", "Driver", "Revenue", "Outcome", "Genre", "Segment"],
      Ratings: ["Users", "Ratings", "Genres", "Compared", "Visuals", "Output"]
    },
    chartLabels: ["Genre", "Revenue", "Rating"],
    bars: { Overall: [76, 88, 64], Revenue: [92, 79, 58], Ratings: [67, 81, 91] },
    segmentValues: {
      Overall: [
        ["Genres", "Compared", "45K+", "Movies", "EDA", "Scope"],
        ["Revenue", "Outcome", "Budget", "Driver", "Business", "Signal"],
        ["Ratings", "Quality", "Visuals", "Output", "Audience", "View"]
      ],
      Revenue: [
        ["Budget", "Driver", "Profit", "Focus", "Commercial", "Lens"],
        ["Revenue", "Outcome", "Genre", "Segment", "Top", "Pattern"],
        ["ROI", "Metric", "Python", "Tool", "Analysis", "Output"]
      ],
      Ratings: [
        ["Ratings", "Signal", "Genres", "Compared", "Audience", "Lens"],
        ["Popularity", "Context", "Revenue", "Compared", "Market", "Signal"],
        ["Visuals", "Charts", "Report", "Output", "Story", "Result"]
      ]
    }
  },
  "Sephora Product Experience Command Center": {
    filters: {
      Overall: ["1M", "Reviews", "2K", "Products", "142", "Brands"],
      Brands: ["CLINIQUE", "Top brand", "50K", "Reviews", "83.7%", "Rec rate"],
      Products: ["$59.86", "Avg price", "4.30", "Avg rating", "Skincare", "Top category"]
    },
    chartLabels: ["Reviews", "Rating", "Opportunity"],
    bars: { Overall: [94, 73, 86], Brands: [90, 82, 60], Products: [68, 88, 76] },
    segmentValues: {
      Overall: [
        ["1M", "Reviews", "2K", "Products", "Skincare", "Top category"],
        ["4.30", "Avg rating", "83.7%", "Rec rate", "Strong", "Sentiment"],
        ["142", "Brands", "$59.86", "Avg price", "Stable", "Opportunity"]
      ],
      Brands: [
        ["CLINIQUE", "Top brand", "50K", "Reviews", "Brand", "Leader"],
        ["4.6", "Avg rating", "91.5%", "Rec rate", "Positive", "Signal"],
        ["10", "Top brands", "Skincare", "Focus", "Growth", "Area"]
      ],
      Products: [
        ["$59.86", "Avg price", "2K", "Products", "Catalog", "Scope"],
        ["4.30", "Avg rating", "83.7%", "Rec rate", "Customer", "Signal"],
        ["Hidden Gem", "Segment", "Risk", "Monitor", "Action", "Priority"]
      ]
    }
  }
};

const portfolioGrid = document.querySelector("#portfolioGrid");
const dialog = document.querySelector("#projectDialog");
const dialogContent = document.querySelector("#dialogContent");
const closeDialog = document.querySelector(".dialog-close");

function projectCard(project) {
  return `
    <article class="project-card" data-filters="${project.filters.join(" ")}" data-title="${project.title}">
      <div class="project-thumb">
        <img src="${project.image}" alt="${project.title} preview" />
        <span class="project-number">${project.number}</span>
      </div>
      <div class="project-body">
        <span class="project-tag">${project.type}</span>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="tool-list">
          ${project.tools.map((tool) => `<span>${tool}</span>`).join("")}
        </div>
        <div class="project-actions">
          <button class="card-link" type="button" data-open-project="${project.title}">View Project</button>
        </div>
      </div>
    </article>
  `;
}

function renderProjects(filter = "all") {
  portfolioGrid.innerHTML = projects
    .filter((project) => filter === "all" || project.filters.includes(filter))
    .map(projectCard)
    .join("");
}

function openProject(project) {
  const interactive = interactiveData[project.title];
  const defaultFilter = Object.keys(interactive.filters)[0];
  dialogContent.innerHTML = `
    <div class="dialog-hero">
      <img src="${project.image}" alt="${project.title} dashboard preview" />
      <div>
        <span class="project-tag">${project.type}</span>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <div class="tool-list">${project.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
      </div>
    </div>
    <div class="dialog-content">
      <div class="dialog-tabs" role="tablist">
        <button class="dialog-tab active" data-tab="dashboard" type="button">Live Dashboard</button>
        <button class="dialog-tab" data-tab="overview" type="button">Overview</button>
        <button class="dialog-tab" data-tab="process" type="button">Process</button>
        <button class="dialog-tab" data-tab="insights" type="button">Insights</button>
      </div>

      <section class="tab-panel" data-panel="overview">
        <h3>Business Question</h3>
        <p>${project.business}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Replace this paragraph with the final project background, dataset source, and stakeholder context.</p>
      </section>

      <section class="tab-panel" data-panel="process">
        <h3>Process</h3>
        <ul class="insight-list">
          ${project.process.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>

      <section class="tab-panel active" data-panel="dashboard">
        <div class="live-dashboard-head">
          <div>
            <h3>Interactive Dashboard Preview</h3>
            <p>Use the buttons and chart segments like Power BI filters. KPIs update instantly when a visitor clicks a segment.</p>
          </div>
          <span>Live portfolio demo</span>
        </div>
        <div class="interactive-toolbar" data-project="${project.title}">
          ${Object.keys(interactive.filters)
            .map((filter, index) => `<button class="interactive-filter ${index === 0 ? "active" : ""}" type="button" data-filter-name="${filter}">${filter}</button>`)
            .join("")}
        </div>
        <div class="mini-dashboard" data-mini-dashboard="${project.title}">
          ${renderMiniDashboard(project.title, defaultFilter)}
        </div>

        <h3 class="gallery-heading">Dashboard & Analysis Screenshots</h3>
        <div class="screenshot-gallery">
          ${project.screenshots
            .map((shot) => `<img src="${shot}" alt="${project.title} screenshot" />`)
            .join("")}
        </div>
      </section>

      <section class="tab-panel" data-panel="insights">
        <h3>Key Insights</h3>
        <ul class="insight-list">
          ${project.insights.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
    </div>
  `;
  dialog.showModal();
}

function renderMiniDashboard(projectTitle, filterName) {
  const data = interactiveData[projectTitle];
  const values = data.filters[filterName];
  const bars = data.bars[filterName];
  const labels = data.chartLabels;
  return `
    <div class="mini-kpis" data-mini-kpis="${projectTitle}">
      ${renderMiniKpis(values)}
    </div>
    <div class="mini-chart" data-current-filter="${filterName}">
      <div class="mini-chart-title">Click a chart segment to cross-filter KPIs</div>
      ${bars
        .map(
          (bar, index) => `
            <button class="mini-segment ${index === 0 ? "active" : ""}" type="button" data-segment-index="${index}">
              <span class="mini-segment-label">${labels[index]}</span>
              <i><em style="width: ${bar}%"></em></i>
              <b>${bar}%</b>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderMiniKpis(values) {
  return `
    <div class="mini-card"><strong>${values[0]}</strong><span>${values[1]}</span></div>
    <div class="mini-card"><strong>${values[2]}</strong><span>${values[3]}</span></div>
    <div class="mini-card"><strong>${values[4]}</strong><span>${values[5]}</span></div>
  `;
}

function updateMiniSegment(projectTitle, filterName, segmentIndex) {
  const data = interactiveData[projectTitle];
  const segmentValues = data.segmentValues[filterName]?.[segmentIndex] || data.filters[filterName];
  dialogContent.querySelector(`[data-mini-kpis="${projectTitle}"]`).innerHTML = renderMiniKpis(segmentValues);
}

function getActiveFilterName(projectTitle) {
  const toolbar = dialogContent.querySelector(`.interactive-toolbar[data-project="${projectTitle}"]`);
  return toolbar.querySelector(".interactive-filter.active").dataset.filterName;
}

function legacyMiniDashboard(projectTitle, filterName) {
  const values = interactiveData[projectTitle].filters[filterName];
  const bars = interactiveData[projectTitle].bars[filterName];
  return `
    <div class="mini-card"><strong>${values[0]}</strong><span>${values[1]}</span></div>
    <div class="mini-card"><strong>${values[2]}</strong><span>${values[3]}</span></div>
    <div class="mini-card"><strong>${values[4]}</strong><span>${values[5]}</span></div>
    <div class="mini-card">
      <span>Relative pattern</span>
      <div class="bar-demo">
        <span style="width: ${bars[0]}%"></span>
        <span style="width: ${bars[1]}%"></span>
        <span style="width: ${bars[2]}%"></span>
      </div>
    </div>
  `;
}

renderProjects();

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");
    renderProjects(tab.dataset.filter);
  });
});

portfolioGrid.addEventListener("click", (event) => {
  if (event.target.closest("a")) return;
  const card = event.target.closest(".project-card");
  if (!card) return;
  const project = projects.find((item) => item.title === card.dataset.title);
  openProject(project);
});

dialogContent.addEventListener("click", (event) => {
  const tab = event.target.closest(".dialog-tab");
  if (!tab) return;
  dialogContent.querySelectorAll(".dialog-tab").forEach((button) => button.classList.remove("active"));
  dialogContent.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
  tab.classList.add("active");
  dialogContent.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add("active");
});

dialogContent.addEventListener("click", (event) => {
  const filter = event.target.closest(".interactive-filter");
  if (!filter) return;
  const toolbar = filter.closest(".interactive-toolbar");
  const projectTitle = toolbar.dataset.project;
  toolbar.querySelectorAll(".interactive-filter").forEach((button) => button.classList.remove("active"));
  filter.classList.add("active");
  dialogContent.querySelector(`[data-mini-dashboard="${projectTitle}"]`).innerHTML = renderMiniDashboard(
    projectTitle,
    filter.dataset.filterName
  );
});

dialogContent.addEventListener("click", (event) => {
  const segment = event.target.closest(".mini-segment");
  if (!segment) return;
  const dashboard = segment.closest(".mini-dashboard");
  const projectTitle = dashboard.dataset.miniDashboard;
  const filterName = getActiveFilterName(projectTitle);
  dashboard.querySelectorAll(".mini-segment").forEach((button) => button.classList.remove("active"));
  segment.classList.add("active");
  updateMiniSegment(projectTitle, filterName, Number(segment.dataset.segmentIndex));
});

closeDialog.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => document.querySelector(".nav").classList.remove("open"));
});

const imageViewer = document.createElement("dialog");
imageViewer.className = "image-viewer";
imageViewer.innerHTML = `
  <button class="image-close" type="button" aria-label="Close image">x</button>
  <img alt="Expanded project screenshot" />
`;
document.body.appendChild(imageViewer);

dialogContent.addEventListener("click", (event) => {
  const image = event.target.closest(".screenshot-gallery img");
  if (!image) return;
  const viewerImage = imageViewer.querySelector("img");
  viewerImage.src = image.src;
  viewerImage.alt = image.alt;
  imageViewer.showModal();
});

imageViewer.querySelector(".image-close").addEventListener("click", () => imageViewer.close());
imageViewer.addEventListener("click", (event) => {
  if (event.target === imageViewer) imageViewer.close();
});
