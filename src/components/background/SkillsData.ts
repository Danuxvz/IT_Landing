export type SkillItem = {
  name: string
  logo: string
  link?: string
}

export type SkillCategory = {
  title: string
  belts: SkillItem[][]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    belts: [
      [
        { name: "C#", logo: "/logos/csharp.png", link: "https://docs.microsoft.com/dotnet/csharp/" },
        { name: "C++", logo: "/logos/cpp.png", link: "https://isocpp.org/" },
        { name: "Python", logo: "/logos/python.png", link: "https://www.python.org/" },
      ],
      [
        { name: "JavaScript", logo: "/logos/js.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "Angular", logo: "/logos/angular.png", link: "https://angular.io/" },
        { name: "HTML", logo: "/logos/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      ],
      [
        { name: "CSS", logo: "/logos/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "PHP", logo: "/logos/php.png", link: "https://www.php.net/" },
        { name: "SQL", logo: "/logos/sql.png", link: "https://www.mysql.com/" },
        { name: "Bash", logo: "/logos/bash.png", link: "https://www.gnu.org/software/bash/" },
      ]
    ]
  },
  {
    title: "Cybersecurity",
    belts: [
      [
        { name: "Wireshark", logo: "/logos/wireshark.png", link: "https://www.wireshark.org/" },
        { name: "Burp Suite", logo: "/logos/burp.png", link: "https://portswigger.net/burp" },
        { name: "Nessus", logo: "/logos/nessus.png", link: "https://www.tenable.com/products/nessus" },
        { name: "Kali Linux", logo: "/logos/kali.png", link: "https://www.kali.org/" },
        { name: "Parrot OS", logo: "/logos/parrot.png", link: "https://www.parrotsec.org/" },
      ]
    ]
  },
  {
    title: "Systems & Cloud",
    belts: [
      [
        { name: "Windows", logo: "/logos/windows.png", link: "https://www.microsoft.com/windows" },
        { name: "Linux", logo: "/logos/linux.png", link: "https://www.linux.org/" },
        { name: "Unix Shell", logo: "/logos/unix.png", link: "https://www.unix.org/" },
      ],
      [
        { name: "Ubuntu", logo: "/logos/ubuntu.png", link: "https://ubuntu.com/" },
        { name: "Microsoft Azure", logo: "/logos/azure.png", link: "https://azure.microsoft.com/" },
      ]
    ]
  }
]