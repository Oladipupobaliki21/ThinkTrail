
const courses = [
  {
    id: 1,
    title: "UI/UX Design",
    lessons: 7,
    category: "Design",
    duration: "10h",
    image: "/course1.jpg",
    content: [
  { 
    id: 1, 
    title: "Introduction to UI/UX",
    video: "https://www.youtube.com/embed/X-_eMAaPv5I",
  },
  { 
    id: 2, 
    title: "Design Principles",
    video: "https://www.youtube.com/embed/Jg0DjhGXHbg",
  },
  { 
    id: 3, 
    title: "Wireframing Basics",
    video: "https://www.youtube.com/embed/qWIdforZ9x0",
  },
  { 
    id: 4, 
    title: "Prototyping with Figma",
    video: "https://www.youtube.com/embed/ez0pjKNWygk",
  },
  { 
    id: 5, 
    title: "User Research Methods",
    video: "https://www.youtube.com/embed/kQ_6faxhyIw",
  },
  { 
    id: 6, 
    title: "Usability Testing",
    video: "https://www.youtube.com/embed/ID0fwi2q028",
  },
  { 
    id: 7, 
    title: "Design Systems",
    video: "https://www.youtube.com/embed/wc5krC28ynQ",
  },
   
 
],
  },
  {
    id: 2,
    title: "React for Beginners",
    lessons: 3,
    category: "Development",  
    duration: "3h",
    image: "/course2.jpg",
     content: [
      { id: 1, 
        title: "What is React?",
        video: "https://www.youtube.com/embed/Ke90Tje7VS0", 
      },

      { id: 2, 
        title: "Components & Props",
        video: "https://www.youtube.com/embed/IYvD9oBCuJI", 
      },
      { id: 3, 
        title: "State & Events",
        video: "https://www.youtube.com/embed/JhIbXor84Wc"
      },
    
      
    ],
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    lessons: 5,
    category: "Development",
    duration: "6h",
    image: "/course3.jpg",
     content: [
      { id: 1, 
        title: "JavaScript Basics" ,
        video: "https://www.youtube.com/embed/W6NZfCO5SIk",
      },
      { id: 2, 
        title: "Functions & Scope",
        video: "https://www.youtube.com/embed/1idOY3C1gYU",
       },
      { id: 3, 
        title: "Asynchronous JS",
        video: "https://www.youtube.com/embed/PoRJizFvM7s", 
      },
      { id: 4, 
        title: "ES6+ Features",
        video: "https://www.youtube.com/embed/NCwa_xi0Uuc", 
      },
      { id: 5, 
        title: "DOM Manipulation",
        video: "https://www.youtube.com/embed/0ik6X4DJKCc",
      },

       
    ],
  },
  {
    id: 4,
    title: "Graphic Design Fundamentals",
    lessons: 0, 
    category: "Design",
    duration: "",
    image: "/course4.jpg",
      content: [
      
    ],   
  },  
  {
    id: 5,
    title: "Full-Stack Web Development",
    lessons: 2,
    category: "Development",
    duration: "25h",
    image: "/course5.jpg",
     content: [
      { id: 1, 
        title: "Introduction to Full-Stack Development",
        video: "https://www.youtube.com/embed/nu_pCVPKzTk",
       },
      { id: 2, 
        title: "Backend Development with Node.js",
        video: "https://www.youtube.com/embed/Oe421EPjeBE", 
      },
      
    ],

  },
  {
    id: 6,
    title: "Digital Marketing 101",
    lessons: 4, 
    category: "Marketing",
    duration: "8h",
    image: "/course6.jpg",
      content: [
      { id: 1, 
        title: "Introduction to Digital Marketing",
        video: "https://www.youtube.com/embed/X8kTG_L4lVg",},
      { id: 2, 
        title: "Content Marketing Strategies",
        video: "https://www.youtube.com/embed/H9DXLvR-Yb8",},
      { id: 3, 
        title: "Social Media Marketing",
        video: "https://www.youtube.com/embed/t09ECV6VhTE",},
      { id: 4, 
        title: "Email Marketing",
        video: "https://www.youtube.com/embed/CF7MCoXT-Ks",},
     
    ],
  },
  {
    id: 7,
    title: "Python Programming for Everyone",
    lessons: 0,
    category: "Development",
    duration: "",
    image: "/course7.jpg",
     content: [
     
    ], 
  },
  {
    id: 8,
    title: "Introduction to Data Science",
    lessons: 1,
    category: "Development",
    duration: "6h",
    image: "/course8.jpg",
     content: [
      { id: 1, 
        title: "What is Data Science?" ,
        video: "https://www.youtube.com/embed/ua-CiDNNj30",

      },
    ],
      
  },
  {
    id: 9,
    title: "Mobile App Development with Flutter",
    lessons: 3,
    category: "Development",
    duration: "5h",
    image: "/course9.jpg",
      content: [
      { id: 1, 
        title: "Introduction to Flutter" ,
        video: "https://www.youtube.com/embed/fq4N0hgOWzU",
      },
      { id: 2, 
        title: "Dart Programming Basics",
        video: "https://www.youtube.com/embed/JZukfxvc7Mc",},
      { id: 3, 
        title: "Flutter Widgets",
        video: "https://www.youtube.com/embed/M9J-JJOuyE0",

       },
      
    ],
  },
  {
    id: 10,
    title: "Content Creation & Video Editing",
    lessons: 0,
    category: "Design",
    duration: "",
    image: "/course10.jpg",
      content: [
     
    ],

  },
  {
    id: 11,
    title: "Advanced CSS & Responsive Design",
    lessons: 0, 
    category: "Development",
    duration: "",
    image: "/course11.jpg",
      content: [
     
    ],
  },
  {
    id: 12,
    title: "Social Media Marketing Strategies",
    lessons: 2,
    category: "Marketing",
    duration: "5h",
    image: "/course12.jpg",
      content: [
      { id: 1, 
        title: "Introduction to Social Media Marketing",
        video: "https://www.youtube.com/embed/t09ECV6VhTE",
      },
      { id: 2, 
        title: "Creating a Social Media Strategy",
        video: "https://www.youtube.com/embed/H9DXLvR-Yb8",
      },
      
      
    ],
  },
  
]

export default courses;

