// ============================================================
// CUSTOMIZE THIS FILE WITH YOUR PERSONAL INFORMATION
// ============================================================

export const personalInfo = {
  name: "AbouBakr Ramadan Nafady AbouBakr",          // ← Change this
  title: "Network & Cybersecurity Engineer",
  subtitle: "Final-Year Computer Science Student",
  location: "Cairo, Egypt",
  email: "aboubakr2703@gmail.com",     // ← Change this
  phone: "+20 109 864 8378",           // ← Change this
  github: "https://github.com/bakr27",        // ← Change this
  linkedin: "https://www.linkedin.com/in/a27o3/",  // ← Change this
  whatsapp: "https://wa.me/201098648378",           // ← Change this
  cvUrl: "/A2703/Aboubakr_Ramadan_Nafady_CV.pdf",        // public file path (matches Vite base)
  cvFilename: "Aboubakr_Ramadan_Nafady_CV.pdf",     // used by download attribute
  bio: "A highly motivated final-year Computer Science student with deep specialization in enterprise networking and cybersecurity. Passionate about designing resilient network infrastructures, securing critical systems, and developing skills across SOC operations, penetration testing, and threat intelligence. Driven to build and protect the digital backbone of tomorrow's organizations.",
  bio2: "With hands-on experience in Cisco technologies, network security architectures, Linux environments, and virtualization platforms, I bring a full-stack networking perspective — from physical layer troubleshooting to Layer 7 application security. Seeking opportunities in Network Engineering, SOC Analysis, or Cybersecurity Operations.",
};

export const stats = [
  { label: "Labs Completed", value: 50, suffix: "+" },
  { label: "Cisco Skills", value: 15, suffix: "+" },
  { label: "Projects Built", value: 8, suffix: "" },
  { label: "Months Training", value: 18, suffix: "+" },
];

export const skills = [
  {
    category: "Networking",
    icon: "Network",
    color: "#00d4ff",
    items: [
      { name: "CCNA / CCNP", level: 90 },
      { name: "BGP & OSPF", level: 85 },
      { name: "MPLS & VPN", level: 80 },
      { name: "Routing & Switching", level: 92 },
      { name: "VLANs & Trunking", level: 88 },
    ],
  },
  {
    category: "Cybersecurity",
    icon: "Shield",
    color: "#7b2fff",
    items: [
      { name: "Network Security", level: 82 },
      { name: "SOC Fundamentals", level: 78 },
      { name: "Penetration Testing", level: 70 },
      { name: "Firewall Config", level: 85 },
      { name: "Threat Analysis", level: 75 },
    ],
  },
  {
    category: "Systems & Infrastructure",
    icon: "Server",
    color: "#00ffcc",
    items: [
      { name: "Linux Administration", level: 80 },
      { name: "VMware / Virtualization", level: 82 },
      { name: "Windows Server / AD", level: 78 },
      { name: "Python Scripting", level: 65 },
      { name: "IT Support", level: 90 },
    ],
  },
];

export const techStack = [
  { name: "Cisco IOS", icon: "Router" },
  { name: "Packet Tracer", icon: "Network" },
  { name: "GNS3", icon: "Layers" },
  { name: "Wireshark", icon: "Activity" },
  { name: "Linux", icon: "Terminal" },
  { name: "VMware", icon: "Server" },
  { name: "Windows Server", icon: "Monitor" },
  { name: "Python", icon: "Code2" },
  { name: "Nmap", icon: "Scan" },
  { name: "Metasploit", icon: "Bug" },
  { name: "Splunk", icon: "BarChart3" },
  { name: "Firewall", icon: "Shield" },
];

export const projects = [
  {
    title: "Enterprise Network Design",
    description: "Designed and implemented a full enterprise network topology for a simulated organization with 500+ endpoints. Configured OSPF multi-area routing, redundant WAN links, hierarchical LAN design, and network segmentation across HQ and branch offices.",
    tags: ["OSPF", "VLAN", "STP", "Redundancy", "Cisco IOS"],
    color: "#00d4ff",
    icon: "Network",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "MPLS/BGP Core Lab",
    description: "Built a service provider core network simulation with MPLS label switching, iBGP/eBGP peering, VRF-Lite for customer isolation, and traffic engineering. Implemented L3VPN for enterprise customer separation.",
    tags: ["MPLS", "BGP", "L3VPN", "VRF", "Traffic Engineering"],
    color: "#7b2fff",
    icon: "GitMerge",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "SOC Monitoring Dashboard",
    description: "Deployed a Security Operations Center monitoring environment using open-source SIEM tools. Configured log aggregation, alert correlation, and incident dashboards. Simulated and detected common attack patterns including brute-force and port scanning.",
    tags: ["SIEM", "Log Analysis", "Splunk", "IDS/IPS", "SOC"],
    color: "#00ffcc",
    icon: "Monitor",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Penetration Testing Lab",
    description: "Built an isolated lab environment for ethical hacking practice. Performed reconnaissance, exploitation, privilege escalation, and post-exploitation on vulnerable VMs. Documented findings in professional penetration test report format.",
    tags: ["Kali Linux", "Metasploit", "Nmap", "Burp Suite", "CTF"],
    color: "#ff003c",
    icon: "Bug",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Active Directory & Windows Server",
    description: "Deployed a complete Windows Server 2022 environment with Active Directory Domain Services, DNS, DHCP, Group Policy Objects, and role-based access control. Configured domain trust relationships and user lifecycle management.",
    tags: ["Windows Server", "Active Directory", "GPO", "DNS", "DHCP"],
    color: "#00d4ff",
    icon: "Users",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "VLAN & Inter-VLAN Routing",
    description: "Designed and deployed multi-VLAN segmentation for a university campus network model. Implemented IEEE 802.1Q trunking, Router-on-a-Stick, and Layer 3 switching for inter-VLAN routing with proper ACL policies.",
    tags: ["VLANs", "802.1Q", "SVI", "ACLs", "Layer 3 Switching"],
    color: "#7b2fff",
    icon: "Layers",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Firewall & Security Hardening",
    description: "Configured enterprise-grade firewall policies using Cisco ASA and pfSense. Implemented stateful inspection, DMZ architecture, NAT/PAT rules, VPN tunnels (IPSec/SSL), and IPS policies for perimeter defense.",
    tags: ["Cisco ASA", "pfSense", "IPSec VPN", "DMZ", "NAT"],
    color: "#00ffcc",
    icon: "Shield",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    title: "Packet Tracer Labs Collection",
    description: "A comprehensive library of 30+ Cisco Packet Tracer labs covering all CCNA and partial CCNP objectives. Includes configuration files, topology diagrams, and step-by-step documentation for each scenario.",
    tags: ["Packet Tracer", "CCNA", "CCNP", "Documentation"],
    color: "#ff003c",
    icon: "BookOpen",
    github: "#",
    demo: "#",
    featured: false,
  },
];

export const certifications = [
  {
    name: "CCNA",
    fullName: "Cisco Certified Network Associate",
    issuer: "Cisco",
    year: "2024",
    status: "Completed",
    color: "#00d4ff",
    icon: "Award",
    credlyUrl: "#",
  },
  {
    name: "CCNP",
    fullName: "Cisco Certified Network Professional (In Progress)",
    issuer: "Cisco",
    year: "2025",
    status: "In Progress",
    color: "#7b2fff",
    icon: "Award",
    credlyUrl: "#",
  },
  {
    name: "SOC Analyst",
    fullName: "SOC Fundamentals & Blue Team Operations",
    issuer: "TryHackMe / BTL1",
    year: "2024",
    status: "Completed",
    color: "#00ffcc",
    icon: "Shield",
    credlyUrl: "#",
  },
  {
    name: "Linux Essentials",
    fullName: "Linux System Administration Fundamentals",
    issuer: "LPI / Linux Foundation",
    year: "2023",
    status: "Completed",
    color: "#ff9500",
    icon: "Terminal",
    credlyUrl: "#",
  },
  {
    name: "VMware VCA",
    fullName: "VMware Certified Associate — Virtualization",
    issuer: "VMware",
    year: "2024",
    status: "Completed",
    color: "#00d4ff",
    icon: "Server",
    credlyUrl: "#",
  },
  {
    name: "Pentest Basics",
    fullName: "Penetration Testing Fundamentals",
    issuer: "TCM Security / HTB",
    year: "2024",
    status: "Completed",
    color: "#ff003c",
    icon: "Bug",
    credlyUrl: "#",
  },
];

export const timeline = [
  {
    year: "2021",
    title: "Started IT Degree",
    description: "Enrolled in Computer Networks & IT program. Began foundational courses in networking, OS, and programming.",
    color: "#00d4ff",
  },
  {
    year: "2022",
    title: "Networking Fundamentals",
    description: "Mastered OSI model, TCP/IP stack, subnetting, and began first Cisco labs. Discovered passion for network engineering.",
    color: "#7b2fff",
  },
  {
    year: "2023",
    title: "CCNA Preparation & Linux",
    description: "Deep dive into CCNA curriculum, routing protocols, and Linux administration. Built first home lab environment.",
    color: "#00ffcc",
  },
  {
    year: "2024",
    title: "CCNA Certified + Cybersecurity",
    description: "Achieved CCNA certification. Expanded into cybersecurity — SOC operations, firewall config, and penetration testing basics.",
    color: "#ff9500",
  },
  {
    year: "2025",
    title: "CCNP & Advanced Security",
    description: "Pursuing CCNP (ENCOR/ENARSI), advanced BGP/MPLS labs, SOC analyst training, and final-year graduation project.",
    color: "#00d4ff",
  },
];

export const services = [
  {
    icon: "Network",
    title: "Network Design & Architecture",
    description: "Design and implementation of enterprise-grade network topologies, including campus networks, WAN connectivity, routing protocol optimization, and redundancy planning.",
    color: "#00d4ff",
  },
  {
    icon: "Shield",
    title: "Network Security Consulting",
    description: "Security assessment of network infrastructure, firewall policy design, DMZ architecture, VPN deployment, and security hardening recommendations.",
    color: "#7b2fff",
  },
  {
    icon: "Monitor",
    title: "SOC Support & Monitoring",
    description: "Setting up security monitoring environments, SIEM configuration, log analysis, alert tuning, and incident response documentation.",
    color: "#00ffcc",
  },
  {
    icon: "Bug",
    title: "Vulnerability Assessment",
    description: "Basic penetration testing and vulnerability scanning of network devices, servers, and applications. Professional reporting of findings and remediation guidance.",
    color: "#ff003c",
  },
  {
    icon: "Server",
    title: "Infrastructure Setup",
    description: "Windows Server deployment, Active Directory design, VMware virtualization setup, and IT infrastructure planning for small to mid-sized organizations.",
    color: "#ff9500",
  },
  {
    icon: "LifeBuoy",
    title: "Technical Troubleshooting & Support",
    description: "Expert-level network and systems troubleshooting, performance optimization, and hands-on IT support. Fast diagnosis and resolution of complex technical issues.",
    color: "#00d4ff",
  },
];

export const terminalLines = [
  { text: "$ nmap -sV -p 1-65535 192.168.1.0/24", delay: 0, color: "#00d4ff" },
  { text: "Starting Nmap 7.94 ( https://nmap.org )", delay: 600, color: "#94a3b8" },
  { text: "Discovered open port 22/tcp on 192.168.1.1 [SSH]", delay: 1200, color: "#00ffcc" },
  { text: "Discovered open port 80/tcp on 192.168.1.10 [HTTP]", delay: 1800, color: "#00ffcc" },
  { text: "Discovered open port 443/tcp on 192.168.1.10 [HTTPS]", delay: 2400, color: "#00ffcc" },
  { text: "Discovered open port 3389/tcp on 192.168.1.20 [RDP]", delay: 3000, color: "#ff9500" },
  { text: "WARNING: Port 3389 exposed — recommend firewall rule", delay: 3600, color: "#ff003c" },
  { text: "$ show bgp summary", delay: 4400, color: "#00d4ff" },
  { text: "BGP router identifier 10.0.0.1, local AS 65001", delay: 5000, color: "#94a3b8" },
  { text: "Neighbor       AS     MsgRcvd  State  PfxRcvd", delay: 5600, color: "#94a3b8" },
  { text: "10.0.0.2     65002     48291  Established  320", delay: 6000, color: "#00ffcc" },
  { text: "10.0.0.3     65003     31204  Established  184", delay: 6400, color: "#00ffcc" },
  { text: "$ All systems operational. Network secure.", delay: 7200, color: "#7b2fff" },
];
