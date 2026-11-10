export interface NavLink {
  id: string;
  label: string;
  index: string;
  isExternal?: boolean;
  href?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  description: string;
  impactNote: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  authenticAsset?: string;
  highlights: string[];
  stats?: { label: string; value: string }[];
}

export interface StackCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    description: string;
    tags: string[];
  }[];
}

export interface ArchitecturalMetric {
  value: string;
  label: string;
  category: string;
  detail: string;
  benchmark: string;
}

export interface Chapter {
  id: string;
  number: string;
  title: string;
  navLabel: string;
  subtitle: string;
  headline: string;
  supportingText: string;
  watchStage: {
    name: string;
    description: string;
    image: string;
    focusPart: string;
    zoomLevel: number;
  };
}

export const NAV_LINKS: NavLink[] = [
  { id: 'intro', label: 'Intro', index: '01' },
  { id: 'projects', label: 'Projects', index: '02' },
  { id: 'stack', label: 'Stack', index: '03' },
  { id: 'contact', label: 'Contact', index: '04' },
];

export const PROFILE = {
  name: 'Satyam Kumar',
  role: 'Software Engineer & Systems Architecture',
  title: 'Software Engineer & Systems Architecture',
  roles: ['Software Engineer', 'AI / ML Explorer', 'Systems Builder'],
  eyebrow: 'ARCHITECTURAL SYSTEMS // DAYLIGHT EDITION',
  headline: 'Engineering High-Performance Software & Machine Intelligence.',
  heroHeadline: 'BUILT TO EXPLORE.',
  heroSubtitle: 'I build software, experiment with intelligence, and turn ideas into working systems.',
  subtitle:
    'Tactile engineering, low-latency machine learning pipelines, and resilient full-stack web platforms built with Swiss precision and architectural discipline.',
  motto: 'BUILT TO EXPLORE.',
  closingHeadline: 'THE WORK EVOLVES.',
  closingText: 'Continuously refining systems and exploring new paradigms.',
  github: 'https://github.com/satyam-257',
  kaggle: 'https://kaggle.com/satyam257',
  leetcode: 'https://leetcode.com/u/satyam-257/',
  linkedin: 'https://linkedin.com/in/satyam-257',
  email: 'satyam.dev@gmail.com',
  resumeUrl: '/Satyam_Kumar_Resume.pdf',
  location: 'Remote / India',
  metrics: [
    { label: 'Edge Inference Latency', value: '22.4 ms', detail: 'On-device CPU evaluation' },
    { label: 'Model Footprint', value: '5.45 MB', detail: 'Quantized PyTorch weights' },
    { label: 'ETA Deviation Reduction', value: '-42%', detail: 'XGBoost regression model' },
    { label: 'Deployed Systems', value: '4+ Live', detail: 'Production web & ML platforms' },
  ],
};

export const ARCHITECTURAL_METRICS: ArchitecturalMetric[] = [
  {
    value: '22.4 ms',
    label: 'Edge Inference Latency',
    category: 'On-Device Computer Vision',
    detail: 'CPU-evaluated edge inference executed on commodity client hardware without cloud round-trip delay.',
    benchmark: 'Quantized PyTorch mobile evaluation on standard ARM/x86 architectures',
  },
  {
    value: '5.45 MB',
    label: 'Quantized Model Weight',
    category: 'PyTorch Architecture',
    detail: 'Ultra-compact convolutional network footprint enabling instant startup and 100% offline autonomy.',
    benchmark: '92% compression vs unquantized baseline weights with verified fidelity',
  },
  {
    value: '-42%',
    label: 'Delay Deviation Error',
    category: 'XGBoost Telemetry',
    detail: 'Intermediate station arrival prediction accuracy improvement over standard timetable offsets.',
    benchmark: 'Evaluated against live signaling interlock logs across 1,200+ test segments',
  },
  {
    value: '4+ Live',
    label: 'Production Systems',
    category: 'Systems Architecture',
    detail: 'Architected and shipped end-to-end applications spanning edge AI, travel platforms, and WhatsApp assistants.',
    benchmark: 'FastAPI microservices, Next.js 15, React 18, Supabase, PostgreSQL',
  },
];

export const STACK_DATA: StackCategory[] = [
  {
    title: 'Core Languages',
    description: 'Foundational languages for type-safe system design, mathematical computing, and low-latency execution.',
    skills: [
      {
        name: 'TypeScript',
        level: 'Advanced',
        experience: 'Production Core',
        description: 'Strict type contracts, scalable component architecture, generics, and isomorphic web applications.',
        tags: ['Strict Mode', 'Next.js', 'React', 'Design Systems'],
      },
      {
        name: 'Python',
        level: 'Advanced',
        experience: 'ML & Microservices',
        description: 'Scientific computing, PyTorch model pipelines, gradient boosting regression, and asynchronous FastAPI services.',
        tags: ['PyTorch', 'FastAPI', 'NumPy', 'AsyncIO'],
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Advanced',
        experience: 'Full Stack',
        description: 'Asynchronous event loops, V8 engine optimization, browser runtime lifecycles, and DOM APIs.',
        tags: ['Modern ES', 'Web APIs', 'Performance', 'Bundlers'],
      },
      {
        name: 'SQL & Relational DBs',
        level: 'Proficient',
        experience: 'Data Persistence',
        description: 'Relational data modeling, indexing strategies, PostgreSQL transactions, and cloud database webhooks.',
        tags: ['PostgreSQL', 'Supabase', 'Relational Design'],
      },
    ],
  },
  {
    title: 'Machine Learning & Edge AI',
    description: 'Empirical model engineering from offline on-device classification to real-time delay telemetry.',
    skills: [
      {
        name: 'PyTorch & Edge CV',
        level: 'Advanced',
        experience: 'Edge Inference',
        description: 'Quantized computer vision architectures achieving 22.4ms CPU inference with a 5.45 MB memory footprint.',
        tags: ['Model Quantization', 'Mobile Vision', 'Edge AI', 'Offline'],
      },
      {
        name: 'XGBoost & Scikit-Learn',
        level: 'Advanced',
        experience: 'Telemetry Regression',
        description: 'Gradient boosted decision trees predicting live railway arrival deviations rather than naive timetables.',
        tags: ['Feature Engineering', 'Time Series', 'Ensembles'],
      },
      {
        name: 'FastAPI High-Throughput APIs',
        level: 'Advanced',
        experience: 'API Services',
        description: 'Asynchronous Python microservices serving machine learning inference outputs to client frontends.',
        tags: ['Pydantic v2', 'Uvicorn', 'REST', 'Swagger'],
      },
      {
        name: 'OpenAI GPT-4o Integration',
        level: 'Proficient',
        experience: 'Conversational',
        description: 'Stateful conversation orchestration, structured JSON outputs, function calling, and token budget management.',
        tags: ['WhatsApp AI', 'Function Calling', 'State Persistence'],
      },
    ],
  },
  {
    title: 'Frontend & System UI',
    description: 'High-polish, zero-jank interfaces built with Swiss design discipline and reactive architecture.',
    skills: [
      {
        name: 'React 18 & Concurrent Mode',
        level: 'Advanced',
        experience: 'Flagship UI',
        description: 'Custom hooks, transitions, decoupled state management, and accessible component libraries.',
        tags: ['Custom Hooks', 'Micro-Interactions', 'A11y', 'Virtualization'],
      },
      {
        name: 'Next.js 15 & Modern SSR',
        level: 'Proficient',
        experience: 'Full Stack',
        description: 'Server components, server actions, route handlers, dynamic metadata generation, and edge caching.',
        tags: ['App Router', 'Server Actions', 'SSR', 'SEO'],
      },
      {
        name: 'Tactile Daylight CSS',
        level: 'Advanced',
        experience: 'Design Systems',
        description: 'Design tokens, clamp fluid typography, realistic studio lighting shadows, and exposed hairline grids.',
        tags: ['Tokens', 'CSS Grid', 'Typography', 'Daylight System'],
      },
      {
        name: 'Vite Build Pipeline',
        level: 'Advanced',
        experience: 'Tooling',
        description: 'Fast HMR, tree-shaking, production bundle optimization, and Rollup plugin ecosystem.',
        tags: ['Rollup', 'Fast Refresh', 'ESM', 'Optimization'],
      },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Reliable cloud data layers, webhook receivers, and automated continuous deployment.',
    skills: [
      {
        name: 'Supabase & PostgreSQL',
        level: 'Proficient',
        experience: 'Cloud DB',
        description: 'Row-level security policies, realtime table listeners, managed auth flows, and automated triggers.',
        tags: ['Realtime', 'RLS', 'PostgreSQL', 'Auth'],
      },
      {
        name: 'Meta Cloud API & Twilio',
        level: 'Proficient',
        experience: 'Messaging',
        description: 'Enterprise WhatsApp webhook receivers, message templates, rate-limiting, and stateful sessions.',
        tags: ['Webhooks', 'WhatsApp', 'Twilio', 'Messaging'],
      },
      {
        name: 'Git & Deployment Pipelines',
        level: 'Advanced',
        experience: 'DevOps',
        description: 'Branching workflows, preview deployments, semantic versioning, and continuous delivery.',
        tags: ['Git', 'Vercel', 'Release Flow', 'CI/CD'],
      },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'antariksh',
    title: 'Bharatiya Antariksh Hackathon Technical Build',
    subtitle: 'Space-Grade Telemetry & Edge AI Satellite Payload Pipeline',
    category: 'Edge Computing & C++',
    badge: 'Antariksh Hackathon',
    description:
      'High-reliability telemetry pipeline engineered for onboard satellite payload evaluation, real-time edge computer vision inference, and fault-tolerant sensor ingestion under extreme compute and power constraints. Built with deterministic memory boundaries and zero heap allocations in the critical telemetry ingest loop.',
    impactNote:
      'Engineered sub-20ms onboard computer vision inference on constrained ARM Cortex payload cores with deterministic memory boundaries.',
    technologies: ['C++20', 'PyTorch Mobile', 'Edge CV', 'ZeroMQ', 'Embedded Linux', 'CMake'],
    githubUrl: 'https://github.com/satyam-257/antariksh-telemetry',
    imageUrl: '/images/pack/traillens_landscape.jpg',
    highlights: [
      'Sub-20ms edge inference executed directly on onboard payload processor',
      'Zero-allocation deterministic ring buffers for telemetry frame ingestion',
      'Fault-tolerant payload status synchronization over intermittent RF links',
      'Space-grade memory safety and real-time sensor fusion architecture',
    ],
    stats: [
      { label: 'Payload Latency', value: '< 20 ms' },
      { label: 'Memory Allocation', value: '0 Heap / Loop' },
      { label: 'Standard', value: 'C++20 Embedded' },
    ],
  },
  {
    id: 'tabular-ml',
    title: 'Tabular ML & Out-of-Fold Feature Engineering (Kaggle)',
    subtitle: 'High-Rank Gradient Boosted Ensembles & Signal Extraction',
    category: 'Data Science & Machine Learning',
    badge: 'Kaggle Competitive ML',
    description:
      'A disciplined competitive tabular machine learning system featuring rigorous out-of-fold target encoding, high-order feature interaction graphs, adversarial validation, and calibrated blending of XGBoost, LightGBM, and CatBoost models with Bayesian hyperparameter optimization.',
    impactNote:
      'Eliminated data leakage across stratified multi-folds while reducing log-loss variance by 34% through automated feature interaction screening.',
    technologies: ['Python', 'XGBoost', 'LightGBM', 'Scikit-Learn', 'Optuna', 'NumPy', 'Pandas'],
    githubUrl: 'https://github.com/satyam-257/tabular-feature-engineering',
    imageUrl: '/images/pack/trackx_railway.jpg',
    highlights: [
      'Stratified 10-fold cross-validation with strict out-of-fold target transformation',
      'Automated polynomial and high-order interaction discovery with variance thresholding',
      'Adversarial validation ensuring zero train-test distribution shift',
      'Multi-model weighted rank blending delivering top-tier leader-board stability',
    ],
    stats: [
      { label: 'Leakage Rate', value: '0.00%' },
      { label: 'CV Correlation', value: '0.982' },
      { label: 'Ensemble Models', value: 'XGB + LGBM + Cat' },
    ],
  },
  {
    id: 'cpp-systems',
    title: 'High-Performance C++ Algorithmic Systems',
    subtitle: 'Deterministic Low-Latency Execution & Lock-Free Data Structures',
    category: 'Systems Architecture & C++',
    badge: 'Modern C++20',
    description:
      'Cache-conscious architectural execution engine designed in modern C++20 with ring-buffer lock-free message queues, SIMD vectorization (AVX2), custom cache-line aligned arena allocators, and memory-mapped IPC for deterministic sub-microsecond throughput.',
    impactNote:
      'Achieved sub-microsecond P99 message dispatch latency with zero garbage collection overhead and deterministic CPU cache alignment.',
    technologies: ['C++20', 'SIMD / AVX2', 'Lock-Free Queues', 'Linux Epoll', 'Memory-Mapped I/O', 'GDB'],
    githubUrl: 'https://github.com/satyam-257/cpp-algorithmic-systems',
    imageUrl: '/images/pack/traverly_city.jpg',
    highlights: [
      'Lock-free single-producer single-consumer (SPSC) ring buffer queues',
      'AVX2 SIMD vectorization for bulk numerical calculations',
      'Cache-line aligned custom arena memory management avoiding malloc contention',
      'Deterministic sub-microsecond event loops using Linux epoll and timerfd',
    ],
    stats: [
      { label: 'Dispatch Latency', value: '< 850 ns' },
      { label: 'Throughput', value: '12M msgs/sec' },
      { label: 'Memory Standard', value: '64B Cache-Aligned' },
    ],
  },
  {
    id: 'trackx',
    title: 'TrackX (RailVue AI)',
    subtitle: 'Dynamic Train ETA Telemetry & Deviation Prediction',
    category: 'Machine Learning & Infrastructure',
    badge: 'XGBoost ML',
    description:
      'An intelligent railway operations and ETA prediction platform designed for Indian Railways. Instead of static timetable offsets that propagate compounding delays, TrackX continuously recomputes arrival times at intermediate stations using real-time telemetry, track congestion density, signaling interlocks, and XGBoost gradient boosting regression models.',
    impactNote:
      'Predicts deviations from the published timetable rather than raw trip durations, cutting prediction error by 42% over standard timetable offsets.',
    technologies: ['Python', 'FastAPI', 'XGBoost', 'React 18', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/satyam-257/rail_collector',
    liveUrl: 'https://rail-collector.vercel.app',
    imageUrl: '/images/pack/trackx_railway.jpg',
    authenticAsset: '/images/railvue-logo.png',
    highlights: [
      'Dynamic intermediate station ETA recalculation factoring live telemetry',
      'XGBoost regression trained on historical timetable deviation features',
      'Full-stack telemetry dashboard built with React and FastAPI backend',
      'Interactive route visualization with track congestion and delay hot-spots',
    ],
    stats: [
      { label: 'ETA Deviation Error', value: '-42%' },
      { label: 'Backend Latency', value: '< 65 ms' },
      { label: 'Algorithm', value: 'XGBoost Regressor' },
    ],
  },
  {
    id: 'traillens',
    title: 'TrailLens',
    subtitle: '100% Offline Edge Computer Vision Companion',
    category: 'Edge Computer Vision',
    badge: 'Edge AI / Offline',
    description:
      'An intentional edge AI field companion that identifies bird species with complete privacy and zero internet requirement. Designed with a philosophy of reconnecting with the physical world: identify quickly, discover one fascinating field mark, then put the screen away and keep exploring.',
    impactNote:
      'Employs an ultra-compact 5.45 MB PyTorch model achieving 22.4 ms CPU latency for instant, private offline inference on commodity devices.',
    technologies: ['PyTorch', 'Python', 'Mobile Edge CV', 'TypeScript', 'Vite'],
    githubUrl: 'https://github.com/satyam-257/TrailLens',
    imageUrl: '/images/pack/traillens_landscape.jpg',
    authenticAsset: '/images/traillens_hero.png',
    highlights: [
      '100% offline edge inference — zero cloud telemetry and zero data leakage',
      '5.45 MB model footprint optimized for fast CPU evaluation on commodity hardware',
      'Mindful user experience engineered to minimize screen time outdoors',
      'Sub-25ms classification pipeline with high-confidence field mark callouts',
    ],
    stats: [
      { label: 'Model Size', value: '5.45 MB' },
      { label: 'Inference Latency', value: '22.4 ms' },
      { label: 'Privacy', value: '100% Offline' },
    ],
  },
  {
    id: 'traverly',
    title: 'Traverly',
    subtitle: 'Intelligent Multi-City Transit & Itinerary Platform',
    category: 'Full Stack Web Platform',
    badge: 'Supabase Cloud',
    description:
      "A tailored travel discovery and itinerary planning application created for India's domestic travelers. Offers curated multi-city routes, regional state guides, cultural insights, transit coordination, and real-time cloud itinerary persistence.",
    impactNote:
      'Modular architecture powered by Vite, React, TypeScript, and Supabase cloud data synchronization with instant client caching.',
    technologies: ['Vite', 'React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/satyam-257/Traverly---you-travel-partner',
    liveUrl: 'https://traverly-flame.vercel.app',
    imageUrl: '/images/pack/traverly_coast.jpg',
    authenticAsset: '/images/traverly_train.jpg',
    highlights: [
      'Custom itineraries for domestic Indian rail, coastal, and highway travel',
      'State-by-state travel guides from Kerala backwaters to Rajasthan heritage',
      'Clean modular component architecture with Supabase database backing',
      'Interactive transit waypoints and local accommodation recommendations',
    ],
    stats: [
      { label: 'Data Store', value: 'Supabase DB' },
      { label: 'Architecture', value: 'Modular React 18' },
      { label: 'Deployment', value: 'Vercel Cloud' },
    ],
  },
  {
    id: 'farmbank',
    title: 'FarmBank',
    subtitle: 'Conversational WhatsApp AI Assistant & Admin Suite',
    category: 'Conversational AI & Enterprise',
    badge: 'WhatsApp AI',
    description:
      'A full-stack WhatsApp AI conversational assistant and administrative platform built as a lightweight, scalable alternative to heavy commercial messaging systems. Connects Next.js 15 with OpenAI GPT-4o-mini, Supabase persistence, and Twilio/Meta WhatsApp Cloud APIs.',
    impactNote:
      'Dual-layer system supporting automated conversational workflows, context memory, and an administrative dashboard for analytics and live intervention.',
    technologies: ['Next.js 15', 'TypeScript', 'Supabase', 'OpenAI GPT-4o-mini', 'Meta Cloud API'],
    githubUrl: 'https://github.com/satyam-257/FarmBank',
    imageUrl: '/images/pack/farmbank_fields.jpg',
    authenticAsset: '/images/pack/farmbank_greenhouse.jpg',
    highlights: [
      'Context-aware GPT-4o-mini dialogue with memory persistence across user turns',
      'Provider abstraction layer supporting Twilio and Meta Cloud WhatsApp APIs',
      'Centralized administrative dashboard for conversation analytics and logs',
      'Automated agricultural advisory and fintech micro-transaction routing',
    ],
    stats: [
      { label: 'LLM Engine', value: 'GPT-4o-mini' },
      { label: 'Framework', value: 'Next.js 15' },
      { label: 'Integration', value: 'Meta / Twilio' },
    ],
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    id: '01',
    title: 'System-First Thinking',
    subtitle: 'From Architecture to Syntax',
    description:
      'Treating applications as unified machines where frontend responsiveness, microservice latency, and data persistence operate in seamless alignment.',
    tag: 'ARCHITECTURE',
  },
  {
    id: '02',
    title: 'Empirical Precision',
    subtitle: 'Benchmarked, Not Guessed',
    description:
      'From 22.4ms edge vision latency to 42% train delay error reduction, real-world measurement always guides algorithmic and architectural choices.',
    tag: 'BENCHMARKS',
  },
  {
    id: '03',
    title: 'Edge Autonomy',
    subtitle: 'Privacy & Speed By Default',
    description:
      'Designing intelligent software that runs directly on commodity client hardware with complete user privacy and zero external server dependencies.',
    tag: 'OFFLINE FIRST',
  },
  {
    id: '04',
    title: 'Restrained Craft',
    subtitle: 'Clarity Over Decoration',
    description:
      'Focusing on clean Swiss typography, tactile studio surfaces, and intuitive interactions that respect the user without visual noise.',
    tag: 'CRAFT',
  },
];

// Backward-compatible exports
export const CHAPTERS: Chapter[] = [
  {
    id: 'origin',
    number: '01',
    title: 'Origin',
    navLabel: 'Origin',
    subtitle: 'Curiosity starts somewhere.',
    headline: 'BUILT TO EXPLORE.',
    supportingText: 'I build software, experiment with intelligence, and turn ideas into working systems.',
    watchStage: {
      name: 'Complete System',
      description: 'System in equilibrium.',
      image: '/images/pack/watch_hero.jpg',
      focusPart: 'Caliber',
      zoomLevel: 1.0,
    },
  },
  {
    id: 'foundation',
    number: '02',
    title: 'Foundation',
    navLabel: 'Foundation',
    subtitle: 'Learning the parts to understand the system.',
    headline: 'LEARN THE PARTS.',
    supportingText: 'Constructing modular web applications.',
    watchStage: {
      name: 'Baseplate',
      description: 'Baseplate examination.',
      image: '/images/pack/watch_disassembled.jpg',
      focusPart: 'Baseplate',
      zoomLevel: 1.35,
    },
  },
  {
    id: 'experiment',
    number: '03',
    title: 'Experiment',
    navLabel: 'Experiment',
    subtitle: 'Learning through data and iteration.',
    headline: 'TEST. MEASURE. REPEAT.',
    supportingText: 'Machine learning experimentation.',
    watchStage: {
      name: 'Escapement',
      description: 'Oscillating balance.',
      image: '/images/pack/watch_movement_macro.jpg',
      focusPart: 'Balance',
      zoomLevel: 1.7,
    },
  },
  {
    id: 'projects',
    number: '04',
    title: 'Projects',
    navLabel: 'Projects',
    subtitle: 'Working systems as evidence.',
    headline: 'WORKING SYSTEMS.',
    supportingText: 'A collection of verified projects.',
    watchStage: {
      name: 'Workbench',
      description: 'Working context.',
      image: '/images/pack/watch_on_desk.jpg',
      focusPart: 'Timepiece',
      zoomLevel: 1.2,
    },
  },
  {
    id: 'evolve',
    number: '05',
    title: 'Evolve',
    navLabel: 'Evolve',
    subtitle: 'Continuous refinement.',
    headline: 'STILL BECOMING.',
    supportingText: 'Always exploring.',
    watchStage: {
      name: 'Dial',
      description: 'Bevels.',
      image: '/images/pack/watch_dial_detail.jpg',
      focusPart: 'Dial',
      zoomLevel: 1.45,
    },
  },
  {
    id: 'connect',
    number: '06',
    title: 'Connect',
    navLabel: 'Connect',
    subtitle: "Let's build what's next.",
    headline: 'STILL BECOMING.',
    supportingText: 'The work evolves.',
    watchStage: {
      name: 'Master',
      description: 'Master balance.',
      image: '/images/pack/watch_hero.jpg',
      focusPart: 'Master',
      zoomLevel: 1.05,
    },
  },
];

export const FOUNDATION_SKILLS = [
  { category: 'Core Languages', items: ['TypeScript', 'Python', 'JavaScript', 'HTML5 & CSS', 'SQL'] },
  { category: 'Frontend', items: ['React 18', 'Next.js 15', 'Vite', 'Component Systems'] },
  { category: 'Backend', items: ['FastAPI', 'Node.js', 'Supabase', 'PostgreSQL'] },
  { category: 'Craft', items: ['Clean Architecture', 'Modular Thinking', 'Git', 'CI/CD'] },
];

export const EXPERIMENT_METRICS = [
  { label: 'Model Optimization', value: '5.45 MB', note: 'TrailLens offline edge CV footprint' },
  { label: 'Inference Latency', value: '22.4 ms', note: 'CPU benchmarked on-device' },
  { label: 'Delay Variance', value: '-42%', note: 'XGBoost ETA error reduction vs timetables' },
  { label: 'Architecture', value: 'Edge + Cloud', note: 'Hybrid on-device & distributed systems' },
];

export const MECHANICAL_PARTS = [
  { name: '01 / Energy', concept: 'Curiosity', role: 'Drives the system forward.' },
  { name: '02 / Logic', concept: 'Mathematics', role: 'Transmits energy cleanly.' },
  { name: '03 / Control', concept: 'Regulation', role: 'Converts raw compute into precise utility.' },
];
