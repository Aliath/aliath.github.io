type WorkExperience = {
  company: string;
  entries: {
    title: string;
    start: string;
    end: string;
    id: string;
  }[];
  id: string;
};

type BlogPost = {
  title: string;
  source?: string;
  description: string;
  link: string;
  uid: string;
};

type EducationAndActivity = {
  id: string;
  title: string;
  institution: string;
  start: string;
  end: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Luminary Cloud, Inc.",
    entries: [
      {
        title: "Senior Software Engineer (via Kruko)",
        start: "2024",
        end: "now",
        id: "1",
      },
    ],
    id: "kruko-2",
  },
  {
    company: "Couchbase, Inc.",
    entries: [
      {
        title: "Senior Software Engineer (via Kruko)",
        start: "2023",
        end: "2024",
        id: "1",
      },
    ],
    id: "kruko-1",
  },
  {
    company: "Estimote, Inc.",
    entries: [
      {
        title: "Senior Software Engineer",
        start: "2021",
        end: "2023",
        id: "2",
      },
      {
        title: "Software Engineer (via The Codest)",
        start: "2020",
        end: "2021",
        id: "1",
      },
    ],
    id: "estimote",
  },
  {
    company: "Ideo",
    entries: [
      {
        id: "1",
        title: "Software Engineer",
        start: "2019",
        end: "2020",
      },
    ],
    id: "ideo",
  },
  {
    company: "Freelance",
    entries: [
      {
        id: "1",
        title: "Software Engineer",
        start: "2018",
        end: "2019",
      },
    ],
    id: "freelance",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "AbortController is cooler than you think",
    source: "Jun '25, @blog",
    description:
      "Really, if you don't like it yet -- you definitely should start",
    link: "/blog/cool-abort-controller",
    uid: "blog-6",
  },
  {
    title: "From Lag to Swag: Performance Hacks in the JS World",
    source: "Jan '25, @kruko",
    description:
      "Quick tips to help developers enhance their applications with simple techniques",
    link: "https://kruko.io/insights/lag-to-swag",
    uid: "blog-5",
  },
  {
    title: "Creative Shorts #1 - Demystifying Our Hero Animation",
    source: "May '24, @kruko",
    description:
      "A concise breakdown of the coding techniques and algorithms behind the visual effects in the hero animation",
    link: "https://kruko.io/insights/kruko-creative-stories-1-demystifying-hero-animation",
    uid: "blog-4",
  },
  {
    title: "How not to kill a project with bad coding practices",
    source: "May '21, @codest",
    description:
      "An article on how not to drown in a sea of common mistakes developers make, and how to balance between optimal and good code",
    link: "https://thecodest.co/blog/how-not-to-kill-a-project-with-bad-coding-practices/",
    uid: "blog-3",
  },
  {
    title: "A few tricks to speed up your JavaScript application",
    source: "Nov '20, @codest",
    description: "Some tips about how to be sneaky when using JS",
    link: "https://thecodest.co/blog/tricks-to-speed-up-javascript-application/",
    uid: "blog-2",
  },
  {
    title: "The power of JavaScript objects",
    source: "Oct '20, @codest",
    description:
      "A few words about variables scope and hook pattern in JavaScript language",
    link: "https://thecodest.co/blog/tricks-to-speed-up-javascript-application/",
    uid: "blog-1",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/Aliath",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/bartslysz",
  },
];

export const EDUCATION_AND_ACTIVITIES: EducationAndActivity[] = [
  {
    institution: "rzeszów.js",
    title: "Organizing JS-related tech events",
    start: "2024",
    end: "now",
    id: "2",
  },
  {
    institution: "Rzeszów University of Technology",
    title: "BSc in Computer Science (Networks and Systems)",
    start: "2020",
    end: "2024",
    id: "1",
  },
];

export const EMAIL = "bart.slysz@gmail.com";
