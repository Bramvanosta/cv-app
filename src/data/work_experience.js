const data = [
  {
    "id": 1,
    "date": "June 2014 - Juli 2014",
    "title": "Work placement",
    "location": "IRPS in Bordeaux",
    "jobTitle": "Intern",
    "description": "Website development, web design, graphic design",
    "projects": [
      {
        "id": 1,
        "title": "Irps",
        "description": "Website development using Wordpress.",
        "link": "http://irps.fr",
        "image_path": require('./../../assets/projects/irps.png')
      },
      {
        "id": 2,
        "title": "Lelien CE",
        "description": "Logo and banner design for the existing website",
        "image_path": require('./../../assets/projects/lelien-ce.png')
      }
    ]
  },
  {
    "id": 2,
    "date": "2015 - Present",
    "title": "Freelancer",
    "description": "Front- and back-end development, API design, website design, testing, deployment, maintenance",
    "projects": [
      {
        "id": 1,
        "title": "Praticampus",
        "description": "Website development from scratch using Ruby on Rails. Development of a custom tool for an easier administration by the members of the team.",
        "link": "https://praticampus.fr",
        "image_path": require('./../../assets/projects/praticampus.png')
      },
      {
        "id": 2,
        "title": "Precisenior",
        "description": "Website development using Ruby on Rails. Using the same structure as Praticampus and reusage of the custom administration tool.",
        "link": "https://praticampus.fr",
        "image_path": require('./../../assets/projects/precisenior.png')
      },
      {
        "id": 3,
        "title": "Mes datas et moi",
        "description": "One page website development without using a framework, vanilla HTML, CSS and JS. Short deadline.",
        "link": "https://www.mesdatasetmoi.fr/experience-realite-virtuelle.html",
        "image_path": require('./../../assets/projects/mes-datas-et-moi.png')
      },
      {
        "id": 4,
        "title": "La Jembertie",
        "description": "Website development using Wordpress.",
        "link": "https://activites-equestre-la-jembertie.fr/",
        "image_path": require('./../../assets/projects/la-jembertie.png')
      },
      {
        "id": 5,
        "title": "Lestaubière",
        "description": "Website development with custom API. For the front-end I used VueJS with a custom design. For the back-end I designed an API using the Lumen framework (PHP). To visualise the gathered data, I made a custom Google Sheets plugin to fetch the content from the API.",
        "link": "https://camping-lestaubiere.fr/",
        "image_path": require('./../../assets/projects/lestaubiere.png')
      },
      {
        "id": 6,
        "title": "La Cave des CE",
        "description": "Website development with custom API. For the front-end I used VueJS with server-side rendering with a custom design. For the back-end I designed an API using the Laravel framework.",
        "link": "https://lacavedesce.com/",
        "image_path": require('./../../assets/projects/la-cave-des-ce.png')
      }
    ]
  },
  {
    "id": 3,
    "date": "May 2015 - July 2015",
    "title": "Work placement",
    "location": "IRPS in Bordeaux",
    "jobTitle": "Intern",
    "description": "Website development, custom module and template development for Wordpress",
    "projects": [
      {
        "id": 1,
        "title": "Pressbook",
        "description": "Website development using Wordpress with a base theme with a lot of custom features. Development of custom modules for Wordpress, like an event plugin gathering information from on open API.",
        "link": "http://lepressbook.fr/",
        "image_path": require('./../../assets/projects/le-press-book.png')
      },
      {
        "id": 2,
        "title": "Lelien CE",
        "description": "Website development using Wordpress using the same base as Pressbook",
        "link": "http://lelience.com/",
        "image_path": require('./../../assets/projects/lelien-ce.png')
      }
    ]
  },
  {
    "id": 4,
    "date": "February 2016 - June 2016",
    "title": "Work placement",
    "location": "SQLI Bordeaux",
    "jobTitle": "Intern",
    "description": "Creation of website designs, front-end development using AngularJS, research in creating reusable UI libraries."
  },
  {
    "id": 5,
    "date": "July 2016 - June 2017",
    "title": "Work/study training program",
    "location": "SQLI Bordeaux",
    "jobTitle": "Front-end developer",
    "description": "Creation of website designs, CSS toolkits and styleguides, development with AngularJS, participation at user experience workshops, client relation.",
    "projects": [
      {
        "id": 1,
        "title": "Services RTE",
        "description": "UI design and front-end development for service management website of a large French electricity firm.",
        "link": "https://www.services-rte.com",
        "image_path": require('./../../assets/projects/rte.png')
      }
    ]
  },
  {
    "id": 6,
    "date": "August 2017 - Present",
    "title": "Work/study training program",
    "location": "Clever Age Bordeaux",
    "jobTitle": "Front-end developer",
    "description": "Front-end development of Single Page Applications, Progressive Web App, native mobile apps with ReactJS.",
    "projects": [
      {
        "id": 1,
        "title": "Mieuxplacer",
        "description": "Front-end development using ReactJS of the the user's dashboard",
        "link": "https://mieuxplacer.com/",
        "image_path": require('./../../assets/projects/mieux-placer.png')
      },
      {
        "id": 2,
        "title": "InfoTBM",
        "description": "Front-end development using ReactJS of mobility block including line schedules, real-time data, itinerary, ...",
        "link": "https://beta.infotbm.com",
        "image_path": require('./../../assets/projects/info-tbm.png')
      }
    ]
  }
];

export default data;
