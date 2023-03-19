import { calculate_age } from "./languages";

const ua = {
  tittlePage: {
    about: "Про мене",
    experience: "Досвід",
    skills: "Навички",
    portfolio: "Портфоліо",
  },

  constants: {
    buttons: {
      back: "Назад",
    },
    empty: {
      loading: "Завантаження...",
    },
    label: {
      technologies: "Tехнології",
      tasks: "Завдання",
    },
  },

  about: {
    title: "Інформація про мене",

    name: {
      value: "Андрій Геннадійович",
      specialty: "Front-end developer",
    },

    date: {
      label: "Дата народження: ",
      value: `10 лютого 1990 року ( ${calculate_age(
        new Date(1990, 2, 10)
      )} роки)`,
    },

    married: {
      label: "Сімейний стан: ",
      value: "одружений",
    },

    education: {
      title: "Освіта: ",
      list: [
        {
          label: "Середня освіта: ",
          list: ["1997-2008 м. Середина-Буда ЗОШ №1."],
        },
        {
          label: "Вища освіта: ",
          list: [
            "2008-2013 м. Харків ХНУРЕ Спеціальність: Метрологія, стандартизація та сертифікація",
          ],
        },
      ],
    },

    skills: {
      title: "Навички",
      list: [
        "HTML, CSS, SCSS",
        "JS,  jQuery, Vue, React, Redux, TypeScript",
        "BEM, Gulp, Git",
        "VS Code,  Figma",
      ],
    },

    experience: {
      title: "Досвід роботи",
      list: [
        {
          label: {
            name: "г. Харьков веб студия, Front-end разработчик",
            time: "11.2020 - наст. время",
          },
          text: [
            "Вёрстка новых проектов (SCSS, HTML5, BEM, Gulp, Figma, Git);",
            "Новые проекты Front-end (js, jQuery);",
            "Новые проекты Back-end (wordpress);",
            "Оптимизация скорости загрузки сайта;",
          ],
        },
        {
          label: {
            name: "Freelance Front-end developer.",
            time: "03.2020 - 10.2020",
          },
          text: [
            "Вёрска сайтов (HTML, SCSS, BEM, Gulp, Git, Figma, JS, jQuery)",
          ],
        },
        {
          label: {
            name: "Польша г. Гданьск монтер металлических конструкций и труб",
            time: "2018-2019",
          },
          text: [
            "Монтаж конструкций согласно чертежам, работа стропальщиком, контроль соблюдения техники безопасности, обучение сотрудников.",
          ],
        },
        {
          label: {
            name: "г. Харьков Оператор Call-Center магазин MotoStyle и Shlem",
            time: "2014-2017",
          },
          text: [
            "Обработка заказов, оформленных на сайте, проём звонков, работа с проблемными заказами, обучение новых сотрудников.",
          ],
        },
      ],
    },
  },

  portfolio: {
    tagsList: [
      "All",
      "Vanilla_JS",
      "jQuery",
      "Alpine.js",
      "React",
      "Vue.js",
      "TypeScript",
      "WordPress",
      "Php_Laravel",
      "OpenCart",
      "css",
      "scss",
      "Webpack",
      "Gulp",
    ],
    // "Tailwind"
    portfolioList: {
      tofaDadashev: {
        title: "tofaDadashev",
        url: "https://tofa-dadashev.com",
        tags: ["WordPress", "jQuery", "css", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      mammolog: {
        title: "mammolog",
        url: "https://mammolog.com.ua",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      acmd: {
        title: "acmd",
        url: "http://acmd.artyshok.studio",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      lazersvit: {
        title: "lazersvit",
        url: "https://lazersvit.com",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      selera: {
        title: "selera",
        url: "https://selera.systems",
        tags: ["WordPress", "Vanilla_JS", "scss", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      hypeGeneration: {
        title: "hypeGeneration",
        url: "",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      institutven: {
        title: "institutven",
        url: "",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      kinoshniki: {
        title: "kinoshniki",
        url: "",
        tags: ["Vue.js", "Php_Laravel", "scss", "Webpack"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      magazinShashlyka: {
        title: "magazinShashlyka",
        url: "https://www.magazin-shashlyka.com.ua",
        tags: ["Vanilla_JS", "OpenCart", "scss", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      artMarks: {
        title: "artMarks",
        url: "https://art-marks.com",
        tags: ["WordPress", "jQuery", "css", "Gulp"],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      ispace: {
        title: "ispace",
        url: "https://ispace.news",
        tags: [
          "Vanilla_JS",
          "React",
          "TypeScript",
          "Php_Laravel",
          "scss",
          "Webpack",
        ],
        tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
    },
  },
};

export default ua;
