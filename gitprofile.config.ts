// gitprofile.config.ts
const CONFIG = {
  github: {
    username: 'AliMemon7', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<username>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<username>.github.io/<repo_name>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['AliMemon7/gitprofile'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Data Science & AI Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Real-Time Face Recognition System',
          description: 'An advanced face recognition attendance system utilizing vector databases and computer vision for lightning-fast identification and automated attendance tracking.',
          imageUrl: 'https://img.freepik.com/free-vector/face-recognition-concept-illustration_114360-4800.jpg',
          link: 'https://github.com/AliMemon7',
        },
        {
          title: 'Weather Prediction ML Model',
          description: 'Machine learning model for weather forecasting using historical weather data and satellite imagery with advanced preprocessing and feature engineering.',
          imageUrl: 'https://img.freepik.com/free-vector/weather-concept-illustration_114360-1234.jpg',
          link: 'https://github.com/AliMemon7',
        },
        {
          title: 'Image Segmentation with YOLO',
          description: 'Computer vision project implementing YOLOv8 for precise object detection and image segmentation with real-time processing capabilities.',
          imageUrl: 'https://img.freepik.com/free-vector/artificial-intelligence-ai-robot-hand-eye_107791-1649.jpg',
          link: 'https://github.com/AliMemon7',
        },
        {
          title: 'NLP Text Classification',
          description: 'Natural Language Processing application for text classification and sentiment analysis using transformer models and deep learning techniques.',
          imageUrl: 'https://img.freepik.com/free-vector/natural-language-processing-concept_23-2148916607.jpg',
          link: 'https://github.com/AliMemon7',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio of Ali Memon - Data Science & AI Engineer', 
    description: 'Data Science and AI Engineering portfolio showcasing projects in Machine Learning, Deep Learning, Computer Vision, and NLP', 
    imageURL: '' 
  },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '+919307791486',
    email: 'memon58ali@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Data Science',
    'Machine Learning',
    'Deep Learning',
    'Natural Language Processing',
    'Computer Vision',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'OpenCV',
    'Pandas',
    'NumPy',
    'YOLO',
    'Transformers',
    'SQL',
    'Git',
    'Docker',
    'FastAPI',
    'Flask',
    'REST APIs',
    'Streamlit',
    'Hugging Face',
  ],
  experiences: [
    {
      company: 'Savitribai Phule Pune University',
      position: 'Data Science Research Intern',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Machine Learning Specialization',
      body: 'Coursera - Stanford University',
      year: 'August 2024',
      link: 'https://example.com',
    },
    {
      name: 'Deep Learning Specialization',
      body: 'Coursera - deeplearning.ai',
      year: 'June 2024',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Savitribai Phule Pune University',
      degree: 'BSc in Data Science (Third Year - Currently Pursuing)',
      from: '2023',
      to: 'Present',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',
    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,
    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,
    // Display the ring in Profile picture
    displayAvatarRing: true,
    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a class="text-primary" href="/arifszn/gitprofile" rel="noreferrer" target="_blank">GitProfile</a> and ❤️`,
  enablePWA: true,
};
export default CONFIG;
