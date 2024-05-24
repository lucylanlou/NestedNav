import { diploma, certificate, cat, csm, mesabiotech, thermofisher, ethicable } from "../assets";

export const navigation = [
  {
    id: "prototype",
    title: "Prototype",
    nested: [
      {
        id: "figma",
        title: "Figma Link",
        url: "https://www.figma.com/design/lXRjjT7VqI4KWBOP5FGlOC/Untitled?node-id=0%3A1&t=oRlotXX9NNua6UqT-1"
      },
      {
        id: "icon-example",
        icon: cat,
        title: "Icon Nav Item Example",
      },
      {
        id: "nested-example",
        title: "Short Nested Items Example",
        nestedItemSize: "short",
        nested: [
          {
            id:'short-1',
            title: "Short 1",
            description: "Short Example Description (blank url its an example!)",
            url: "/",
          },
                    {
            id:'short-2',
            title: "Short 2",
            description: "Short Example Description (blank url its an example!)",
            url: "/",
          },
                    {
            id:'short-3',
            title: "Short 3",
            description: "Short Example Description (blank url its an example!)",
            url: "/",
          },
        ]
      },
            {
        id: "nested-icon-example",
        title: "Icon Nested Long Items Example",
        icon: cat,
        nestedItemSize: "long",
        nested: [
          {
            id:'long-1',
            title: "Long 1",
            icon: cat,
            description: "Long Example Description (blank url its an example!)",
            url: "/",
          },
                    {
            id:'long-2',
            title: "Long 2",
            icon: cat,
            description: "Long Example Description (blank url its an example!)",
            url: "/",
          },
                    {
            id:'long-3',
            title: "Long 3",
            icon: cat,
            description: "Long Example Description (blank url its an example!)",
            url: "/",
          },
        ]
      },
    ]
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
            title: "CS61B",
            description: "Data Structures",
            url: "https://sp24.datastructur.es/",
          },
          {
             id: 'cs61c',
             title: "CS61C",
             description: "Computer Architecture",
             url: "https://cs61c.org/sp24/",
          },
          {
             id: 'cs70',
             title: "CS70",
             description: "Structure & Interpretation of Computer Programs",
             url: "https://cs61a.org/",
          },
          {
             id: 'cs188',
             title: "CS188",
             description: "Artificial Intelligence",
             url: "https://inst.eecs.berkeley.edu/~cs188/sp24/",
          },
          {
             id: "cs160",
             title: "CS160",
             description: "User Interface Design and Development",
             url: "https://www2.eecs.berkeley.edu/Courses/CS160/",
          },
          {
             id: "cs184",
             title: "CS184",
             description: "Computer Graphics and Imaging",
             url: "https://cs184.eecs.berkeley.edu/sp24",
          },
          {
             id: "cs186",
             title: "CS186",
             description: "Introduction to Database Systems",
             url: "https://cs186berkeley.net/",
          },
          {
             id: "cs170",
             title: "CS170",
             description: "Efficient Algorithms and Intractable Problems",
             url: "https://cs170.org/",
          },
          {
             id: "data100",
             title: "DATA100",
             description: "Principles and Techniques of Data Science",
             url: "https://ds100.org/",
          },
          {
             id: "eecs16a",
             title: "EECS16A",
             description: "Designing Information Devices and Systems I",
             url: "https://eecs16a.org/",
          },
          {
             id: "eecs16b",
             title: "EECS16B",
             description: "Designing Information Devices and Systems II",
             url: "https://eecs16b.org/",
          },
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
          {
             id: "cs198",
             title: "CS198",
             description: "Web Design",
             url: "https://inst.eecs.berkeley.edu/~cs198/",
          },
          {
             id: "ugba190T",
             title: "UGBA 190T",
             description: "Computer Architecture",
             url: "https://classes.berkeley.edu/content/2022-fall-ugba-190t-003-lec-003",
          },
          {
             id: "desinv25",
             title: "DESINV 25",
             description: "UX Design",
             url: "https://classes.berkeley.edu/content/2021-spring-desinv-25-1-lec-1",
          },
          {
             id: "desinv21",
             title: "DESINV 21",
             description: "Visual Communication and Sketching",
             url: "https://classes.berkeley.edu/content/2021-spring-desinv-21-1-lec-1",
          },
          {
             id: "desinv98",
             title: "DESINV 98",
             description: "Human Centered Design",
             url: "https://classes.berkeley.edu/content/2022-fall-desinv-98-002-lec-002",
          },
          {
             id: "desinv198",
             title: "DESINV 198",
             description: "Brand Identity and Graphic Design",
             url: "https://decal.studentorg.berkeley.edu/courses/6504",
          },
          {
             id: "art21",
             title: "ART 21",
             description: "Beginning Digital Photography",
             url: "https://classes.berkeley.edu/content/2018-fall-art-21-001-lec-001",
          },
        ],
      },
    ],
  },
  {
    id: "experience",
    title: "Experience",
    nested: [
      {
        id: "ethicable",
        title: "Ethicable",
        icon: ethicable,
        url: "https://ethicable.ai/"
      },
            {
        id: "thermofisher",
        icon: thermofisher,
        title: "Thermofisher",
        url: "https://www.thermofisher.com/us/en/home/biotech.html?gclid=CjwKCAjw9cCyBhBzEiwAJTUWNVQ70Hl5Ky32p4BMXieilf4p9mnog1tKwGcBXgCVGXLFCYRGvWVMLhoClV4QAvD_BwE&cid=0se_gaw_14042023_Q3IRZL&ef_id=CjwKCAjw9cCyBhBzEiwAJTUWNVQ70Hl5Ky32p4BMXieilf4p9mnog1tKwGcBXgCVGXLFCYRGvWVMLhoClV4QAvD_BwE:G:s&s_kwcid=AL!3652!3!652706561720!e!!g!!thermo%20biopharma!19891770864!151390436310&gad_source=1"
      },
      {
        id: "mesa-biotech",
        icon: mesabiotech,
        title: "Mesa Biotech",
        url: "https://www.linkedin.com/company/mesa-biotech-inc/"
      },            
      {
        id: "csm",
        icon: csm,
        title: "Computer Science Mentors",
        url: "https://csmentors.studentorg.berkeley.edu/#/"
      },
    ]
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
            url: "/files/GymHaus Website/gymhaus.html",
            

          },
          {
            id: "kingpin",
            title: "KingPin Donuts Remake",
            description:
              "HTML/CSS website for a class project to redesign a donut shop’s website. Goal was to make people hungry and ready to shop easily",
            url: "/files/KingPin/index.html",
            

          },
        ],
      },
      {
        id: "mobile apps",
        title: "Mobile Apps",
        nestedItemSize: "long",
        nested: [
          {
            id: "tiny-tales",
            title: "Tiny Tales",
            description:
              "Android app for a class project. UI/UX targetted towards kids and fostering creatibity.",
            url: "/files/TinyTalesReport.pdf",
            
          },
        ]
      },
      {
        id: "gd-branding",
        title: "Graphic Design/Branding",
        nestedItemSize: "long",
        nested: [
          {
            id: "scrunchies-4-sma",
            title: "Scrunchies 4 SMA",
            description:
              "Branding including stylescapes, logos, and mockups for a passion project to raise funds for my brother's disease. The mood is bright and sparkly to symbolize happiness and hope.",
            url: "/files/Scrunchies4SMA.pdf",
            
          },
        ]
      },
    ],
  },
  {
    id: "skills",
    title: "Skills",
    disabled: true,
  },
  {
    id: "extra",
    title: "Extra",
    url: "https://www.shutterstock.com/search/street-cats-in-greece?cr=c&ds_ag=FF%3DDSA+-+All+Pages_AU%3DProspecting&ds_agid=58700003504592959&ds_cid=71700000027388020&ds_eid=700000001400310&gad_source=1&gclid=CjwKCAjw9cCyBhBzEiwAJTUWNSD1Oq6mOEtsoXokxAL6D8dQXz0A-gR0myByCC_7hA1mVbHskcHK2xoCuEwQAvD_BwE&gclsrc=aw.ds&kw=&pl=PPC_GOO_US_DSA-686871999314&utm_campaign=CO%3DUS_LG%3DEN_BU%3DIMG_AD%3DDSA_TS%3Dlggeneric_RG%3DAMER_AB%3DACQ_CH%3DSEM_OG%3DCONV_PB%3DGoogle&utm_medium=cpc&utm_source=GOOGLE"
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