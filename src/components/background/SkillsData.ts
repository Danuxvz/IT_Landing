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
        { name: "JavaScript", logo: "/logos/js.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", logo: "/logos/typescript.png", link: "https://www.typescriptlang.org/" },
      ],
      [
        { name: "Angular", logo: "/logos/icon_angular_wht.svg", link: "https://angular.io/" },
        { name: "HTML", logo: "/logos/html.png", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", logo: "/logos/css.png", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "React", logo: "/logos/react.png", link: "https://reactjs.org/" },
        { name: "Bootstrap", logo: "/logos/bootstrap-punchout.svg", link: "https://getbootstrap.com/" },
        { name: "Vue.js", logo: "/logos/vue.svg", link: "https://vuejs.org/" },
      ],
      [
        { name: "PHP", logo: "/logos/php.png", link: "https://www.php.net/" },
        { name: "SQL", logo: "https://gitlab.com/parrotsec/project/graphics/-/blob/master/logo/parrot-logo.svg", link: "https://www.mysql.com/" },
        { name: "Bash", logo: "/logos/bash.png", link: "https://www.gnu.org/software/bash/" },
        { name: "PowerShell", logo: "/logos/powershell.png", link: "https://docs.microsoft.com/powershell/" },
        { name: "Git", logo: "https://git-scm.com/images/logos/downloads/Git-Icon-White.svg", link: "https://git-scm.com/" },
      ]
    ]
  },
  {
    title: "Cybersecurity",
    belts: [
      [
        { name: "Wireshark", logo: "/logos/wsicon1024.png", link: "https://www.wireshark.org/" },
        { name: "Burp Suite", logo: "/logos/burp.png", link: "https://portswigger.net/burp" },
        { name: "Nessus", logo: "/logos/nessus.png", link: "https://www.tenable.com/products/nessus" },
        { name: "Kali Linux", logo: "/logos/kali.png", link: "https://www.kali.org/" },
        { name: "Parrot OS", logo: "/logos/parrotsec-logo.svg", link: "https://www.parrotsec.org/" },
      ]
    ]
  },
  {
    title: "Systems & Cloud",
    belts: [
      [
        { name: "Windows", logo: "/logos/windows.png", link: "https://www.microsoft.com/windows" },
        { name: "Linux", logo: "/logos/linux.png", link: "https://www.linux.org/" },
        { name: "Ubuntu", logo: "/logos/ubuntu.png", link: "https://ubuntu.com/" },
        { name: "Unix Shell", logo: "/logos/unix.png", link: "https://www.unix.org/" },
      ],
      [
        { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", link: "https://azure.microsoft.com/" },
        { name: "AWS", logo: "/logos/aws.png", link: "https://aws.amazon.com/" },
        { name: "GitHub", logo: "/logos/GitHub_Invertocat_White.svg", link: "https://github.com/" }
      ]
    ]
  }
]