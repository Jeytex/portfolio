export const signalStack = [
  {
    label: "Runtime",
    value: "Next 16 / React 19",
    detail: "Server-first routing with isolated client surfaces for motion.",
  },
  {
    label: "Motion",
    value: "Framer + GSAP-ready",
    detail: "A reusable animation layer for camera shifts and scroll reveals.",
  },
  {
    label: "Render",
    value: "Three.js",
    detail: "Lazy-loaded WebGL environment with pointer-reactive particles.",
  },
];

export const projectNodes = [
  {
    code: "AX-01",
    title: "Neural Ops Console",
    metric: "42ms input latency",
    desc: "A speculative command surface for live model routing, telemetry, and incident triage.",
    tags: ["Realtime", "Systems", "Motion"],
    whyBuilt: "Designed to explore low-latency data visualization for high-stakes operational environments.",
    techStack: ["React", "WebGL", "WebSockets"],
    keyHighlight: "Achieved sub-50ms render cycles with thousands of active nodes.",
    demoLink: "#"
  },
  {
    code: "VX-18",
    title: "Volumetric Commerce",
    metric: "144hz interactions",
    desc: "Product exploration interface built around spatial previews and dense conversion flows.",
    tags: ["3D", "Checkout", "UX"],
    whyBuilt: "To bridge the gap between physical retail browsing and digital convenience using spatial computing concepts.",
    techStack: ["Three.js", "Next.js", "Framer Motion"],
    keyHighlight: "Seamless transition between 2D UI and 3D product inspection without layout thrashing.",
    demoLink: "#"
  },
  {
    code: "QX-77",
    title: "Signal Intelligence",
    metric: "9 data layers",
    desc: "A cinematic analytics cockpit for finding anomalies across high-frequency streams.",
    tags: ["Dashboards", "Data", "AI"],
    whyBuilt: "Created as an experiment in presenting dense, multi-layered analytical data without overwhelming the user.",
    techStack: ["D3.js", "TailwindCSS", "TypeScript"],
    keyHighlight: "Custom WebGL shader pipeline for rendering millions of data points smoothly.",
    demoLink: "#"
  },
];

export const skillsData = {
  frontend: [
    { name: "React / Next.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "TailwindCSS", level: "Advanced" },
    { name: "Three.js / WebGL", level: "Intermediate" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "GraphQL", level: "Intermediate" },
  ],
  tools: [
    { name: "Git / GitHub Actions", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "Figma", level: "Advanced" },
    { name: "AWS", level: "Intermediate" },
  ]
};

export const proofData = [
  {
    id: "arch-01",
    title: "Microservices Architecture",
    type: "diagram",
    description: "System design for a high-throughput event processing pipeline.",
    placeholder: "SYSTEM_DIAGRAM_RENDER"
  },
  {
    id: "perf-01",
    title: "Render Optimization",
    type: "code",
    description: "Reduced React render cycles by 40% using memoization and spatial hashing.",
    placeholder: "const optimizedRender = useMemo(() => { ... }, [dependencies]);"
  }
];

export const terminalCommands = [
  { cmd: "whoami", output: "sidharth_ammisetti --role='CS Student & Cybersecurity Enthusiast'" },
  { cmd: "cat skills.txt", output: "Securing Systems. Building the Future." },
  { cmd: "sudo execute build", output: "Compiling assets... Done in 0.42s. All systems operational." }
];

export const contactData = {
  email: "hello@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  resumeLink: "/resume.pdf"
};
