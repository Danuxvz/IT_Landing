export interface ServiceGroup {
  id: string
  title: string
  items: string[]
  image?: string 
}

export const services: ServiceGroup[] = [
  {
    id: "it-support",
    title: "IT Support & Operations",
    items: [
      "Hardware / software troubleshooting",
      "User onboarding & access management",
      "Desktop & printer support",
      "Office connectivity issues",
      "Asset tracking & documentation",
    ],
  },
  {
    id: "networking",
    title: "Networking & Infrastructure",
    image: "/computers-server.jpg",
    items: [
      "LAN/WAN configuration & troubleshooting",
      "DNS, DHCP, VLANs, firewalls",
      "Installation & testing",
      "Switch/router/Wi-Fi deployment",
      "Network performance analysis",
    ],
  },
  {
    id: "development",
    title: "Software & Automation",
    items: [
      "Internal tools & web applications",
      "Bots & workflow automation",
      "API development",
      "Debugging & system improvements",
      "Bash / Python / PowerShell automation",
    ],
  },
  {
    id: "data",
    title: "Data & Systems Analysis",
    items: [
      "Data collection & reporting",
      "Dashboard creation",
      "SQL database support",
      "Workflow optimization",
      "Business-to-technical translation",
    ],
  },
  {
    id: "admin",
    title: "Administrative & Office Systems",
    items: [
      "HR systems support",
      "Document control & compliance",
      "Operations coordination",
      "Digital records management",
      "Workflow automation",
    ],
  },
]