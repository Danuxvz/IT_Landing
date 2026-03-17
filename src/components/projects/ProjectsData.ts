export interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Astral Core",
    description:
      "Full-stack character management web app with local database, sync system, and modular architecture.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    link: "https://github.com/Danuxvz/AstralCore",
    tags: ["React", "Dexie", "TypeScript", "PWA"],
  },
  {
    id: 2,
    title: "Discord Management Bot",
    description:
      "Scalable multi-server bot with per-guild configuration and database-backed permissions.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    link: "https://github.com/Danuxvz/OSDiscordBot",
    tags: ["Python", "Discord API", "Supabase"],
  },
  {
    id: 3,
    title: "Enterprise Web Tooling",
    description:
      "Internal tools focused on automation, analytics, and operations efficiency.",
    image: "/images/enterprise.png",
    link: "https://your-link.com",
    tags: ["Angular", "SQL", "Azure"],
  },
]