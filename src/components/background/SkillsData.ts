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
        { name: "C#", logo: "https://learn.microsoft.com/en-us/dotnet/media/logo_csharp.png", link: "https://docs.microsoft.com/dotnet/csharp/" },
        { name: "C++", logo: "https://raw.githubusercontent.com/Benio101/cpp-logo/master/cpp_logo.png", link: "https://isocpp.org/" },
        { name: "Python", logo: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg", link: "https://www.python.org/" },
        { name: "JavaScript", logo: "https://github.com/voodootikigod/logo.js/raw/master/js.png", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
        { name: "TypeScript", logo: "/logos/ts-logo-256.svg", link: "https://www.typescriptlang.org/" },
      ],
      [
        { name: "Angular", logo: "/logos/icon_angular_wht.svg", link: "https://angular.io/" },
        { name: "HTML", logo: "https://www.w3.org/html/logo/downloads/HTML5_Logo.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        // This work is attributed to the W3C. "https://www.w3.org/ 
        { name: "CSS", logo: "https://raw.githubusercontent.com/CSS-Next/logo.css/48f24dccd4e169118d17bab998c3d276e95167df/css.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "React", logo: "/logos/react.svg", link: "https://reactjs.org/" },
        { name: "Bootstrap", logo: "/logos/bootstrap-punchout.svg", link: "https://getbootstrap.com/" },
        { name: "Vue.js", logo: "/logos/vue.svg", link: "https://vuejs.org/" },
      ],
      [
        { name: "PHP", logo: "https://www.php.net/images/logos/php-logo.svg", link: "https://www.php.net/" },
        { name: "SQL", logo: "/logos/Sql_data_base_with_logo.svg", link: "https://www.mysql.com/" },
        { name: "Bash", logo: "https://bashlogo.com/img/symbol/svg/full_colored_dark.svg", link: "https://www.gnu.org/software/bash/" },
        { name: "PowerShell", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/PowerShell_5.0_icon.png", link: "https://docs.microsoft.com/powershell/" },
        { name: "Git", logo: "https://git-scm.com/images/logos/downloads/Git-Icon-White.svg", link: "https://git-scm.com/" },
      ]
    ]
  },
  {
    title: "Cybersecurity",
    belts: [
      [
        { name: "Wireshark", logo: "/logos/wsicon1024.png", link: "https://www.wireshark.org/" },
        { name: "Burp Suite", logo: "https://cdn.brandfetch.io/idC7C956wH/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1744841067178", link: "https://portswigger.net/burp" },
        { name: "Nessus", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Nessus-Professional-FullColor-RGB.svg", link: "https://www.tenable.com/products/nessus" },
        { name: "Kali Linux", logo: "https://www.kali.org/docs/policy/trademark/kali-tm.png", link: "https://www.kali.org/" },
        { name: "Parrot OS", logo: "/logos/parrotsec-logo.svg", link: "https://www.parrotsec.org/" },
      ]
    ]
  },
  {
    title: "Systems & Cloud",
    belts: [
      [
        { name: "Windows", logo: "/logos/windows-10.svg", link: "https://www.microsoft.com/windows" },
        { name: "Linux", logo: "https://upload.wikimedia.org/wikipedia/commons/d/df/Font_Awesome_5_brands_linux.svg", link: "https://www.linux.org/" },
        // Font Awesome Free 5.4.1 by @fontawesome - https://fontawesome.com, CC BY 4.0 https://creativecommons.org/licenses/by/4.0, via Wikimedia Commons
        { name: "Ubuntu", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Ubuntu-logo-no-wordmark-solid-o-2022.svg", link: "https://ubuntu.com/" },
        // Canonical Ltd., GPLv3 <http://www.gnu.org/licenses/gpl-3.0.html>, via Wikimedia Commons
        { name: "macOS", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", link: "https://www.apple.com/macos/" },
      ],
      [
        { name: "Microsoft Azure", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg", link: "https://azure.microsoft.com/" },
        { name: "AWS", logo: "/logos/aws.png", link: "https://aws.amazon.com/" },
        { name: "GitHub", logo: "/logos/GitHub_Invertocat_White.svg", link: "https://github.com/" }
      ]
    ]
  }
]