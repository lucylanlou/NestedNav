import { diploma, certificate } from "../assets";

export const navigation = [
  {
    id: "figma",
    title: "Figma",
    url:"https://www.figma.com/design/lXRjjT7VqI4KWBOP5FGlOC/Untitled?node-id=0%3A1&t=oRlotXX9NNua6UqT-1"
  },
  {
    id: "education",
    title: "Education",
    nested: [
      {
        id: "ucb-ba-cs",
        title: "UC Berkeley\nB.A. Computer Science",
        icon: diploma,
        nestedItemSize: "short",
        nested: [
          {
            id:'cs61a',
            title: "CS61A",
            description: "Structure & Interpretation of Computer Programs",
            url: "https://cs61a.org/",
          },
          {
            id:'cs61b',
            title: "CS 61B",
            description: "Data Structures",
            url: "https://sp24.datastructur.es/",
          },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS 61B",
          //   description: "Data Structures",
          //   url: "https://sp24.datastructur.es/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
        ],
      },
      {
        id: "bcdi",
        title: "Berkeley Certificate of Design Innovation",
        icon: certificate,
        nestedItemSize: "short",
        nested: [
          {
            id: "cs160",
            title: "CS160",
            description: "User Interface Design & Development",
            url: "http://teaching.paulos.net/cs160_FL2020/index.html",
          },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
          // {
          //   title: "CS61A",
          //   description: "Structure & Interpretation of Computer Programs",
          //   url: "https://cs61a.org/",
          // },
        ],
      },
    ],
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
    nested: [
      {
        id: "websites",
        title: "Websites",
        nestedItemSize: "long",
        nested: [
          {
            id: "personal-website",
            title: "Personal Website",
            description:
              "React.js website with fun 3D models to showcase my experience, projects, and personality",
            url: "https://lucylanlou.github.io/",
            
          },
          {
            id: "ethicable-landing",
            title: "Ethicable Landing Page",
            description:
              "React.js website to introduce the company and its products",
            url: "https://ethicable.ai/",
            

          },
          {            
            id: "trustwrite-landing",
            title: "TrustWrite Landing Page",
            description:
              "React.js website to draw in customers and provide a preview of the product and pricing",
            url: "https://trustwrite.ai/",
            

          },
          {
            id: "gymhaus-landing",
            title: "Gymhaus",
            description:
              "HTML/CSS clothing brand website for a friend’s t-shirt designs",
            url: "/",
            

          },
          {
            id: "kingpin",
            title: "KingPin Donuts Remake",
            description:
              "HTML/CSS website for a class project to redesign a donut shop’s website. Goal was to make people hungry and ready to shop easily",
            url: "/",
            

          },
        ],
      },
      {
        id: "mobile apps",
        title: "Mobile Apps",
      },
      {
        id: "gd-branding",
        title: "Graphic Design/Branding",
      },
    ],
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "extra",
    title: "Extra",
  },
];

export const navigationRight = [
  {
    id:'contact',
    title: "Contact",
    url: "mailto:lucy.lou@berkeley.edu?Subject=Congrats%21&Body=You%20got%20the%20job%21",
  },
    {
    id:'resume',
    title: "Resume",
    url: "/files/LucyLou_Resume.pdf",
  }
]