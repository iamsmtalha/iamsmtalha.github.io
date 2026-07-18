const projects = [
  {
    number: "03",
    title: "Cyclistic Bike-Share Case Study",
    githubUrl: "https://github.com/iamsmtalha/cyclistic-bike-share-case-study",
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
    executiveSummary:
      "Analyzed twelve months of Cyclistic bike-share data to compare annual members and casual riders. The project found that members ride more frequently, while casual riders take longer trips and show stronger weekend and seasonal behavior.",
    business:
      "How do annual members and casual riders use Cyclistic bikes differently, and how can those insights support membership conversion?",
    dataSource:
      "Twelve monthly Cyclistic/Divvy bike-share trip CSV files covering one full year of ride-level data.",
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
    metrics: ["5.68M", "Final rides", "12 months", "Period", "28", "Duplicates removed"],
    keyMetrics: [
      "Final cleaned dataset contained 5,680,812 rides.",
      "Annual members completed substantially more rides than casual riders.",
      "Casual riders had longer average ride durations.",
      "Member usage was strongest on weekdays and commute hours.",
      "Electric bikes were the most frequently used bike type for both rider groups."
    ],
    recommendations: [
      "Target casual riders with weekend-focused membership promotions.",
      "Run digital campaigns during warmer months and peak casual riding hours.",
      "Promote annual membership savings to frequent casual riders, especially electric-bike users."
    ],
    conclusion:
      "Cyclistic should focus conversion campaigns on frequent casual riders by using weekend, seasonal, and electric-bike usage patterns to make membership value more relevant."
  },
  {
    number: "02",
    title: "Bellabeat Wellness Case Study",
    githubUrl: "https://github.com/iamsmtalha/bellabeat-case-study",
    type: "Smart Device Usage Analysis",
    filters: ["excel", "sql", "power-bi"],
    image: "assets/project-bellabeat.png",
    screenshots: [
      "assets/bellabeat-dashboard-page-1.png",
      "assets/bellabeat-dashboard-page-2.png",
      "assets/bellabeat-dashboard-page-3.png"
    ],
    summary:
      "Studied Fitbit activity and sleep trends to recommend Bellabeat app marketing improvements.",
    tools: ["Excel", "MySQL", "Power BI", "Wellness Analytics"],
    executiveSummary:
      "Analyzed Fitbit smart-device activity and sleep data to understand wellness behavior patterns. Users averaged 7,638 steps, 2,304 calories, 991 sedentary minutes, and 228 active minutes per day, with sleep data available for 24 of 33 users.",
    business:
      "What smart-device usage trends can guide Bellabeat's product positioning and marketing strategy?",
    dataSource:
      "FitBit Fitness Tracker Data from Kaggle, including daily activity, sleep, hourly steps, hourly calories, hourly intensities, and weight log files.",
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
    metrics: ["33", "Users", "940", "Daily records", "7.0", "Avg sleep hours"],
    keyMetrics: [
      "33 users in daily activity data and 940 daily records.",
      "Average daily steps: 7,638.",
      "Average daily calories: 2,304.",
      "Average sedentary time: 991 minutes, or 16.5 hours.",
      "Average sleep: 419 minutes, or 7.0 hours."
    ],
    recommendations: [
      "Position Bellabeat as a holistic wellness companion, not only a step tracker.",
      "Send movement reminders to users with high sedentary behavior.",
      "Time motivational app messages around 12 PM and 5 PM to 7 PM.",
      "Encourage consistent sleep tracking through reminders and weekly summaries."
    ],
    conclusion:
      "Bellabeat can use activity, sedentary, and sleep-tracking patterns to market a complete wellness experience that connects movement, recovery, hydration, mindfulness, and daily routines."
  },
  {
    number: "04",
    title: "Movie Data Analysis with Python",
    githubUrl: "https://github.com/iamsmtalha/movie-data-analysis-python",
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
    executiveSummary:
      "Analyzed movie metadata, ratings, credits, keywords, budget, and revenue fields using Python to identify patterns in genre performance, user ratings, profit, ROI, and release trends.",
    business:
      "Which movie attributes are associated with stronger audience and commercial performance?",
    dataSource:
      "Movies dataset from Kaggle, using movies metadata, ratings, links, credits, and keywords CSV files.",
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
    metrics: ["Python", "Main tool", "EDA", "Method", "Report", "Output"],
    keyMetrics: [
      "Cleaned movie rows: 45,430.",
      "Movies with usable financial data: 5,375.",
      "Movies joined with user-rating sample: 9,025.",
      "Most common primary genre: Drama.",
      "Top average-profit genre: Family; top average-revenue genre: Animation."
    ],
    recommendations: [
      "Use profit and ROI together when evaluating movie performance.",
      "Treat Animation, Family, Adventure, and Action as strong high-revenue candidates.",
      "Use lower-budget Horror and niche films as ROI opportunities after validating budget quality.",
      "Combine audience ratings with financial metrics to identify durable catalog value."
    ],
    conclusion:
      "Movie success is multidimensional: blockbusters dominate total profit, while smaller films can produce high ROI. Better decisions should evaluate financial results and audience response together."
  },
  {
    number: "01",
    title: "Sephora Product Experience Command Center",
    githubUrl: "https://github.com/iamsmtalha/sephora-powerbi-dashboard",
    type: "Advanced Power BI Dashboard",
    filters: ["power-bi", "python"],
    image: "assets/project-sephora.png",
    screenshots: ["assets/sephora-dashboard-pdf-page-1.png"],
    summary:
      "Built a standalone interactive dashboard for product reviews, brands, categories, pricing, and opportunity segments.",
    tools: ["Power BI", "Python", "pandas", "DAX", "Power Query"],
    executiveSummary:
      "Built an executive command center for Sephora product and review data to analyze product performance, customer sentiment, brand engagement, pricing patterns, and product opportunity segments.",
    business:
      "Which brands, categories, price ranges, and products create the strongest review and recommendation opportunities?",
    dataSource:
      "Public Sephora product and skincare review dataset from Kaggle, including product metadata and more than one million customer review records.",
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
    metrics: ["1M", "Reviews", "2K", "Products", "142", "Brands"],
    keyMetrics: [
      "Total reviews analyzed: approximately 1.09 million.",
      "Products analyzed: approximately 2.35 thousand reviewed products.",
      "Brands represented: 142.",
      "Average review rating: approximately 4.30.",
      "Recommendation rate: approximately 83.7%; average product price: approximately $59.86."
    ],
    recommendations: [
      "Promote hidden-gem products with strong ratings but lower review visibility.",
      "Monitor high-visibility risk products with high review volume and weaker customer signals.",
      "Focus category strategy on high-engagement skincare segments such as moisturizers, treatments, and cleansers.",
      "Use price-band insights for campaign planning and product recommendation strategy."
    ],
    conclusion:
      "The dashboard helps stakeholders identify where customer attention is strongest, which products may need improvement, and which products could benefit from additional promotion."
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
          <a class="card-link secondary" href="${project.githubUrl}" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>
    </article>
  `;
}

function renderProjects(filter = "all") {
  portfolioGrid.innerHTML = projects
    .filter((project) => filter === "all" || project.filters.includes(filter))
    .sort((a, b) => Number(a.number) - Number(b.number))
    .map(projectCard)
    .join("");
}

function openProject(project) {
  dialogContent.innerHTML = `
    <div class="dialog-hero">
      <img src="${project.image}" alt="${project.title} dashboard preview" />
      <div>
        <span class="project-tag">${project.type}</span>
        <h2>${project.title}</h2>
        <p>${project.summary}</p>
        <div class="tool-list">${project.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
        <div class="modal-actions">
          <a class="card-link secondary" href="${project.githubUrl}" target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      </div>
    </div>
    <div class="dialog-content">
      <div class="dialog-tabs" role="tablist">
        <button class="dialog-tab active" data-tab="dashboard" type="button">Interactive View</button>
        <button class="dialog-tab" data-tab="overview" type="button">Overview</button>
        <button class="dialog-tab" data-tab="process" type="button">Process</button>
        <button class="dialog-tab" data-tab="insights" type="button">Insights</button>
      </div>

      <section class="tab-panel" data-panel="overview">
        <div class="report-section">
          <h3>Executive Summary</h3>
          <p>${project.executiveSummary}</p>
        </div>
        <div class="report-grid">
          <article>
            <h4>Business Task / Question</h4>
            <p>${project.business}</p>
          </article>
          <article>
            <h4>Data Source</h4>
            <p>${project.dataSource}</p>
          </article>
          <article>
            <h4>Tools Used</h4>
            <p>${project.tools.join(", ")}</p>
          </article>
        </div>
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
            <h3>Interactive View</h3>
            <p>Use the buttons and chart segments like Power BI filters. KPIs update instantly when a visitor clicks a segment.</p>
          </div>
        </div>
        <div class="interactive-toolbar" data-project="${project.title}">
          ${Object.keys(interactiveData[project.title].filters)
            .map((filter, index) => `<button class="interactive-filter ${index === 0 ? "active" : ""}" type="button" data-filter-name="${filter}">${filter}</button>`)
            .join("")}
        </div>
        <div class="mini-dashboard" data-mini-dashboard="${project.title}">
          ${renderMiniDashboard(project.title, Object.keys(interactiveData[project.title].filters)[0])}
        </div>

        <h3 class="gallery-heading">Dashboard & Analysis Screenshots</h3>
        <div class="screenshot-gallery">
          ${project.screenshots
            .map((shot) => `<img src="${shot}" alt="${project.title} screenshot" />`)
            .join("")}
        </div>
      </section>

      <section class="tab-panel" data-panel="insights">
        <div class="report-grid">
          <article>
            <h4>Key Metrics</h4>
            <ul class="insight-list">
              ${project.keyMetrics.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
          <article>
            <h4>Key Insights</h4>
            <ul class="insight-list">
              ${project.insights.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
          <article>
            <h4>Recommendations</h4>
            <ul class="insight-list">
              ${project.recommendations.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </article>
        </div>
        <div class="report-section conclusion-box">
          <h3>Conclusion</h3>
          <p>${project.conclusion}</p>
        </div>
      </section>
    </div>
  `;
  dialog.showModal();
}

function renderMiniDashboard(projectTitle, filterName) {
  const data = interactiveData[projectTitle];
  const values = data.filters[filterName];
  const labels = data.chartLabels;
  return `
    <div class="mini-kpis" data-mini-kpis="${projectTitle}">
      ${renderMiniKpis(values)}
    </div>
    <div class="mini-chart" data-current-filter="${filterName}">
      <div class="mini-chart-title">Click a chart segment to cross-filter KPIs</div>
      ${labels
        .map(
          (label, index) => `
            <button class="mini-segment ${index === 0 ? "active" : ""}" type="button" data-segment-index="${index}">
              <span class="mini-segment-label">${label}</span>
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

renderProjects();

const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle?.querySelector(".theme-icon");
const themeLabel = themeToggle?.querySelector(".theme-label");

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeIcon) themeIcon.textContent = theme === "light" ? "☀" : "☾";
  if (themeLabel) themeLabel.textContent = theme === "light" ? "Light" : "Dark";
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      theme === "light" ? "Switch to dark theme" : "Switch to light theme"
    );
  }
  localStorage.setItem("portfolio-theme", theme);
}

setTheme(localStorage.getItem("portfolio-theme") || "dark");

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

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
