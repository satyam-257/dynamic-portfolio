export interface NavLink {
  id: string;
  label: string;
  index: string;
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  problemStatement: string;
  whatIBuilt: string;
  technicalApproach: string;
  description: string;
  measurableResults: {
    value: string;
    label: string;
    context: string;
  }[];
  keyContributions: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  achievementNote?: string;
  previewImage?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  tag: string;
  title: string;
  organization: string;
  year: string;
  metric?: string;
  description: string;
}

export interface EducationItem {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location: string;
  score: string;
  details: string;
}

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', index: '01' },
  { id: 'about', label: 'About', index: '02' },
  { id: 'projects', label: 'Projects', index: '03' },
  { id: 'experiments', label: 'Experiments', index: '04' },
  { id: 'skills', label: 'Skills', index: '05' },
  { id: 'achievements', label: 'Achievements', index: '06' },
  { id: 'contact', label: 'Contact', index: '07' },
];

export const PROFILE = {
  name: 'Satyam Kumar',
  location: 'Kolkata, West Bengal, India',
  identity: 'ML Engineer | AI Engineer | Data Science',
  educationSummary:
    'B.Tech Computer Science and Engineering (Data Science), Netaji Subhash Engineering College, Kolkata, 2024–2028, CGPA 7.6',
  positioningStatement:
    'I build machine learning systems that turn complex data into measurable results.',
  heroIntro: "HELLO, I'M SATYAM KUMAR",
  heroHeadline: 'Building Intelligent Systems. Engineering Real-World Impact.',
  heroSupport:
    'From predictive machine learning pipelines to full-stack AI products, I turn complex problems into measurable engineering solutions.',
  aboutParagraphs: [
    "I'm Satyam Kumar, a Computer Science and Data Science student passionate about building intelligent systems end to end.",
    'My work spans machine learning pipelines, leakage-aware model validation, predictive analytics, model evaluation platforms, and full-stack AI applications.',
    'I enjoy going beyond training a model. I focus on understanding data, designing reliable experiments, measuring performance, and turning machine learning ideas into usable products.',
  ],
  philosophyParagraphs: [
    'I enjoy the process behind building intelligent systems: understanding the problem, exploring the data, experimenting with models, questioning results, and improving the solution.',
    'I believe a good ML model is more than a high score. It needs reliable validation, meaningful evaluation, and a clear path towards practical application.',
    'Outside ML, I enjoy competitive programming and building full-stack products — sharpening algorithmic thinking across 150+ solved LeetCode problems and 100+ CodeChef problems.',
  ],
  email: 'sa.25.07.2006@gmail.com',
  github: 'https://github.com/satyam-257',
  linkedin: 'https://linkedin.com/in/satyam-kumar-006b52324',
  resumeUrl: '/Satyam_Kumar_AI_ML_Resume.pdf',
};

export const HERO_METRICS = [
  {
    id: 'leetcode',
    value: 150,
    suffix: '+',
    displayValue: '150+',
    label: 'LeetCode Problems Solved',
    context: 'Algorithmic problem solving in C++ & Python',
  },
  {
    id: 'cv-auc',
    value: 0.968,
    decimals: 3,
    displayValue: '0.968',
    label: 'CV ROC-AUC | Smartphone Addiction ML',
    context: '10-fold CV vs 0.957 raw baseline (not public LB)',
  },
  {
    id: 'trackx-mae',
    value: 42,
    suffix: '%',
    displayValue: '42%',
    label: 'Lower MAE | TrackX ETA Model',
    context: 'vs timetable baseline on 515-snapshot prototype eval',
  },
  {
    id: 'projects',
    value: 3,
    suffix: '',
    displayValue: '3',
    label: 'Major Engineering Projects',
    context: 'End-to-end ML pipelines & full-stack AI systems',
  },
];

export const FEATURED_PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'trackx',
    number: 'PROJECT 01',
    title: 'TrackX',
    subtitle: 'Dynamic Train ETA Prediction System for Indian Railways',
    category: 'ML Systems & Predictive Telemetry',
    badge: 'PROTOTYPE // 515-SNAPSHOT EVAL',
    problemStatement:
      'Static railway timetables propagate cascading upstream delays to downstream intermediate stations, producing high arrival-time errors during route congestion and adverse weather.',
    whatIBuilt:
      'An end-to-end five-source data ingestion pipeline, leakage-free XGBoost delay-deviation modeling suite, FastAPI inference endpoints, and an interactive React/TypeScript network dashboard.',
    technicalApproach:
      'Modelled arrival ETA as a predicted deviation from scheduled arrival time rather than raw trip duration. Engineered delay-history features strictly within training splits to prevent temporal leakage, benchmarked XGBoost against Random Forest and a delay-risk classifier on a journey-aware held-out evaluation of 515 snapshots, and exposed feature attribution & congestion APIs via FastAPI.',
    description:
      'An intelligent railway ETA prediction system designed to estimate train arrival times using historical delay patterns, route information, station data, and weather conditions.',
    measurableResults: [
      {
        value: '10.37 min',
        label: 'Model MAE',
        context: 'Held-out prototype eval (515 snapshots)',
      },
      {
        value: '17.97 min',
        label: 'Timetable Baseline MAE',
        context: 'Published schedule offset reference',
      },
      {
        value: '~42%',
        label: 'Lower MAE',
        context: 'Improvement vs timetable baseline',
      },
    ],
    keyContributions: [
      'Built a five-source data pipeline involving historical delays, route/station GeoJSON, station master data, Open-Meteo weather, and a RailRadar client.',
      'Engineered leakage-free delay features computed only within training splits.',
      'Modelled ETA as a deviation from scheduled arrival time.',
      'Achieved 10.37-minute MAE compared with 17.97 minutes for the timetable baseline.',
      'Improved MAE by approximately 42% on a journey-aware held-out evaluation containing 515 snapshots.',
      'Compared XGBoost with Random Forest and a delay-risk classifier.',
      'Developed FastAPI endpoints for ETA, feature attribution, and congestion.',
      'Built a React/TypeScript dashboard featuring network maps, live tracking, and model-comparison visualizations.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'XGBoost',
      'scikit-learn',
      'Open-Meteo',
      'React',
      'TypeScript',
    ],
    githubUrl: 'https://github.com/satyam-257/rail_collector',
    liveUrl: 'https://rail-collector.vercel.app',
    previewImage: '/images/pack/trackx_railway.jpg',
  },
  {
    id: 'experimentpilot',
    number: 'PROJECT 02',
    title: 'ExperimentPilot',
    subtitle: 'ML Experiment Tracking & Model-Behavior Analysis Platform',
    category: 'MLOps, Calibration & Model Evaluation',
    badge: 'MODEL VERIFICATION & GUARDRAILS',
    problemStatement:
      'Self-reported ML metrics frequently hide calibration drift, dataset mismatches across runs, and silent failure modes on minority classes or sample subgroups.',
    whatIBuilt:
      'A model-agnostic ML experiment management and verification workbench backed by FastAPI and SQLite, paired with a React + TypeScript analysis UI and hybrid deterministic + LLM insight synthesis.',
    technicalApproach:
      'Decoupled author-reported metrics from independently recomputed verification scores derived directly from sample-level predictions (Accuracy, Precision, Recall, Macro-F1, Confusion Matrices, Regression MAE/MSE/RMSE/R², and 10-bin Expected Calibration Error). Built scientific guardrails to block invalid comparisons across mismatched datasets, splits, or task types, alongside an offline rule-based insight engine with optional Gemini/OpenAI synthesis.',
    description:
      'An experiment analysis platform that makes machine learning experiments more transparent, comparable, and trustworthy.',
    measurableResults: [
      {
        value: '10-Bin ECE',
        label: 'Calibration Analysis',
        context: 'Independent reliability curves from raw probs',
      },
      {
        value: 'Guardrailed',
        label: 'Split & Task Checks',
        context: 'Blocks mismatched dataset/split comparisons',
      },
      {
        value: '9/9 Suites',
        label: 'Backend Verification',
        context: 'Persistence, metrics, guardrails & LLM fallback',
      },
    ],
    keyContributions: [
      'Built a model-agnostic platform to log and compare ML experiment runs.',
      'Independently recomputes accuracy, precision, recall, macro-F1, confusion matrices, and regression metrics from sample-level predictions.',
      'Implemented 10-bin Expected Calibration Error.',
      'Separated independently verified metrics from author-reported results.',
      'Added experiment comparison guardrails for mismatched datasets, splits, and task types.',
      'Built hyperparameter comparison and false-positive/false-negative exploration.',
      'Developed an offline rule-based insight engine with optional Gemini/OpenAI synthesis.',
      'Implemented FastAPI and SQLite backend infrastructure with tests and deployment configuration.',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'SQLite',
      'Pydantic',
      'React',
      'TypeScript',
      'Vite',
      'Gemini API',
      'OpenAI API',
    ],
    githubUrl: 'https://github.com/satyam-257/ExperimentPilotAI',
    previewImage: '/images/pack/ml_lab_monitor.jpg',
  },
  {
    id: 'traverly',
    number: 'PROJECT 03',
    title: 'Traverly',
    subtitle: 'Domestic Travel Planning Platform',
    category: 'Full-Stack AI & Cost Modeling',
    badge: 'AMAZON AI SUMMIT 2026 SELECTION',
    achievementNote:
      'Selected for Amazon AI Summit 2026 as one of a limited set of student-built AI projects.',
    problemStatement:
      'Domestic travelers lack unified tools that connect multi-city destination discovery, realistic Indian regional cost datasets, and day-by-day budgeting across transit modes.',
    whatIBuilt:
      'A full-stack domestic travel planning application integrating Supabase auth/storage, a FastAPI multi-factor cost estimation microservice, fuzzy destination matching, and itemized itinerary planning.',
    technicalApproach:
      'Constructed a FastAPI budget estimation service powered by Indian city-cost datasets with fuzzy string destination matching. Modelled total and per-category trip costs across travel style, seasonality, party size, and transportation mode, storing user itineraries cleanly in Supabase with automated GitHub Actions CI/CD.',
    description:
      'A full-stack domestic travel planning platform designed to simplify trip planning, budgeting, transportation, and travel connections.',
    measurableResults: [
      {
        value: 'Amazon AI',
        label: 'Summit 2026 Selection',
        context: 'Selected among limited student AI builds',
      },
      {
        value: '4-Factor',
        label: 'Cost Estimation Model',
        context: 'Style, season, party size & transit mode',
      },
      {
        value: 'CI/CD',
        label: 'Automated Delivery',
        context: 'GitHub Actions + Supabase + Vercel',
      },
    ],
    keyContributions: [
      'Built trip-planning and budget-estimation functionality.',
      'Integrated Supabase authentication and database services.',
      'Implemented a FastAPI budget estimation service using Indian city-cost datasets.',
      'Developed fuzzy destination matching and a multi-factor cost estimation model.',
      'Included travel style, season, party size, and transportation as estimation factors.',
      'Generated itemized trip estimates and day-by-day recommendations.',
      'Configured GitHub Actions deployment.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Supabase',
      'FastAPI',
      'Pandas',
    ],
    githubUrl: 'https://github.com/satyam-257/Traverly---you-travel-partner',
    liveUrl: 'https://traverly-flame.vercel.app',
    previewImage: '/images/pack/traverly_coast.jpg',
  },
];

export const KAGGLE_CASE_STUDY = {
  eyebrow: 'BEYOND PROJECTS: MACHINE LEARNING EXPERIMENTS',
  title: 'Predicting Smartphone Addiction | Kaggle Playground Series S6E8',
  badge: '10-FOLD STRATIFIED CV // BINARY CLASSIFICATION',
  description:
    'An intensive binary classification experiment focused on feature engineering, leakage-aware validation, model specialization, and ensemble optimization.',
  validationDisclaimer:
    'All metrics below reflect local 10-fold stratified cross-validation (CV ROC-AUC), not a public leaderboard rank or competition placement.',
  headlineStats: [
    { label: 'Engineered Features', value: '172', detail: 'Digit, trig, cohort & missingness' },
    { label: 'CV ROC-AUC (Ensemble)', value: '0.968', detail: 'vs 0.957 raw CatBoost baseline' },
    { label: 'Validation Scheme', value: '10-Fold OOF', detail: 'm-estimate target encoding' },
    { label: 'Logged Experiments', value: '28 Runs', detail: 'Systematic keep / reject ablations' },
  ],
  pipelineStages: [
    {
      step: '01',
      title: 'Feature Engineering (172 Features)',
      detail:
        'Extracted digit decomposition, cyclical trigonometric transforms, high-order domain interactions, cohort-level aggregates, and missingness indicators.',
    },
    {
      step: '02',
      title: 'Leakage-Free 10-Fold OOF Encoding',
      detail:
        'Implemented strictly inside-fold out-of-fold target encoding using m-estimate smoothing, verified via target-encoding leakage checks and adversarial validation.',
    },
    {
      step: '03',
      title: 'Diverse GBDT & Specialist Models',
      detail:
        'Trained LightGBM, XGBoost, CatBoost, and an XGBoost specialist model tuned systematically with Optuna across 28 logged keep/reject ablation runs.',
    },
    {
      step: '04',
      title: 'Percentile-Rank Nelder-Mead Blend',
      detail:
        'Combined out-of-fold probability ranks across diverse model families using Nelder-Mead simplex weight optimization to push CV ROC-AUC from 0.957 to 0.968.',
    },
  ],
  modelProgression: [
    {
      model: 'Raw-Feature CatBoost (Baseline)',
      score: 0.957,
      delta: 'Baseline',
      notes: 'Unmodified raw tabular columns, 10-fold stratified CV',
      status: 'BASELINE',
    },
    {
      model: 'CatBoost + 172 Engineered Features',
      score: 0.963,
      delta: '+0.006',
      notes: 'OOF m-estimate TE, digit, trig & cohort aggregates',
      status: 'KEEP',
    },
    {
      model: 'LightGBM (Optuna Tuned)',
      score: 0.965,
      delta: '+0.008',
      notes: 'Leaf-wise tree diversity & regularized feature subsampling',
      status: 'KEEP',
    },
    {
      model: 'XGBoost + XGB Specialist Model',
      score: 0.966,
      delta: '+0.009',
      notes: 'Depth-wise splits + cohort-focused specialist weighting',
      status: 'KEEP',
    },
    {
      model: 'Percentile-Rank Nelder-Mead Ensemble',
      score: 0.968,
      delta: '+0.011',
      notes: 'Calibrated rank blend of LGBM + XGB + XGB-Spec + CatBoost',
      status: 'BEST CV',
    },
  ],
  ablationHighlights: [
    {
      experiment: 'Adversarial Validation & TE Leakage Audit',
      verdict: 'DIAGNOSTIC',
      finding:
        'Audited CV-to-leaderboard divergence by testing train/test separability and verifying zero target leakage across OOF m-estimate folds.',
    },
    {
      experiment: 'Raw TE vs Inside-Fold m-Estimate Smoothing',
      verdict: 'KEEP',
      finding:
        'Inside-fold smoothing prevented high-cardinality overfitting and stabilized validation AUC variance across all 10 stratified folds.',
    },
    {
      experiment: 'Unconstrained Probability Averaging vs Rank Blending',
      verdict: 'REJECT -> REPLACE',
      finding:
        'Replaced raw logit averaging with percentile-rank Nelder-Mead weight optimization to align disparate tree calibration scales.',
    },
  ],
  contributions: [
    'Engineered 172 features.',
    'Implemented leakage-free 10-fold out-of-fold target encoding using m-estimate smoothing.',
    'Developed digit, trigonometric, interaction, cohort-aggregate, and missingness features.',
    'Trained LightGBM, XGBoost, and CatBoost models.',
    'Built an XGBoost specialist model.',
    'Used Optuna for hyperparameter optimization.',
    'Blended percentile-ranked OOF predictions using Nelder-Mead weight optimization.',
    'Achieved 0.968 CV ROC-AUC compared with 0.957 for the raw-feature CatBoost baseline.',
    'Logged 28 experiments with keep/reject ablations.',
    'Investigated CV-to-leaderboard differences through adversarial validation and target-encoding leakage analysis.',
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Typed application code, low-overhead algorithms & relational queries',
    skills: ['Python', 'C++', 'C', 'SQL', 'TypeScript'],
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    subtitle: 'Gradient boosted ensembles, classical models & Bayesian tuning',
    skills: [
      'Scikit-learn',
      'XGBoost',
      'LightGBM',
      'CatBoost',
      'Optuna',
      'SciPy',
      'Random Forest',
      'K-Means',
    ],
  },
  {
    id: 'ml-engineering',
    title: 'ML Engineering Techniques',
    subtitle: 'Leakage prevention, validation rigor & calibration diagnostics',
    skills: [
      'Feature Engineering',
      'Out-of-Fold Target Encoding',
      'Stratified K-Fold Cross Validation',
      'Ensemble Learning and Stacking',
      'Hyperparameter Optimization',
      'Data Leakage Auditing',
      'Model Evaluation and Calibration',
    ],
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    subtitle: 'Neural architectures, lightweight fine-tuning & portable inference',
    skills: [
      'PyTorch',
      'TorchScript',
      'Transfer Learning',
      'MobileNetV3-Small Fine-tuning',
    ],
  },
  {
    id: 'ds-genai',
    title: 'Data Science & GenAI',
    subtitle: 'Data manipulation, statistical visualization, LLM APIs & serving',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'OpenAI API',
      'Gemini API',
      'FastAPI',
      'REST APIs',
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools',
    subtitle: 'Experiment environments, full-stack web delivery & CI/CD',
    skills: [
      'Git and GitHub',
      'GitHub Actions',
      'Jupyter Notebook',
      'Google Colab',
      'Kaggle',
      'React',
      'Vite',
      'Supabase',
    ],
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'amazon-ai-summit',
    tag: 'PROJECT SELECTION',
    title: 'Amazon AI Summit 2026 Selection',
    organization: 'Amazon AI Summit 2026 (Traverly)',
    year: '2026',
    metric: 'Selected Student AI Build',
    description:
      'Traverly was selected for Amazon AI Summit 2026 among a limited set of student-built AI projects showcasing practical multi-factor cost modeling and planning.',
  },
  {
    id: 'kshitij-ca',
    tag: 'CAMPUS LEADERSHIP',
    title: 'Campus Ambassador — KSHITIJ 2025',
    organization: 'IIT Kharagpur',
    year: '2025',
    metric: '30+ Participants Recruited',
    description:
      'Served as Campus Ambassador for KSHITIJ, IIT Kharagpur’s annual techno-management fest, driving campus outreach and recruiting 30+ student participants.',
  },
  {
    id: 'leetcode',
    tag: 'ALGORITHMIC DSA',
    title: '150+ Problems Solved on LeetCode',
    organization: 'LeetCode',
    year: 'Ongoing',
    metric: '150+ Solved',
    description:
      'Consistent problem-solving practice across dynamic programming, graphs, trees, sliding window, and greedy algorithms to keep implementation fundamentals sharp.',
  },
  {
    id: 'codechef',
    tag: 'COMPETITIVE PROGRAMMING',
    title: '100+ Problems Solved on CodeChef',
    organization: 'CodeChef',
    year: 'Ongoing',
    metric: '100+ Solved',
    description:
      'Solved 100+ timed algorithmic challenges focusing on time/space complexity discipline and clean C++ STL problem execution.',
  },
  {
    id: 'kaggle-ml',
    tag: 'TABULAR ML VALIDATION',
    title: '0.968 CV ROC-AUC Experiment Pipeline',
    organization: 'Kaggle Playground Series S6E8',
    year: '2026',
    metric: '0.968 CV vs 0.957 Baseline',
    description:
      'Developed leakage-free 10-fold out-of-fold target encoding, 172 engineered features, Optuna tuning, and Nelder-Mead rank blending across 28 ablation runs.',
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'nsec',
    period: '2024 – 2028',
    degree: 'B.Tech, Computer Science and Engineering (Data Science)',
    institution: 'Netaji Subhash Engineering College',
    location: 'Kolkata, West Bengal',
    score: 'CGPA 7.6',
    details:
      'Coursework and applied engineering spanning Data Structures & Algorithms, Machine Learning, DBMS, Statistical Modeling, and Full-Stack Systems.',
  },
  {
    id: 'gossner',
    period: '2021 – 2023',
    degree: 'Intermediate, BSEB (Physics, Chemistry, Mathematics)',
    institution: 'Gossner College',
    location: 'Ranchi, Jharkhand',
    score: '76%',
    details:
      'Strong quantitative foundation in calculus, linear algebra, probability, and analytical problem solving.',
  },
];
