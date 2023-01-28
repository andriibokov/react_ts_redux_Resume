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
      label: "ИО: ",
      value: "Андрей Геннадиевич",
    },

    date: {
      label: "Дата рождения: ",
      value: `10 февраля 1990 года ( ${calculate_age(
        new Date(1990, 2, 10)
      )} год)`,
    },

    married: {
      label: "Семейное положение: ",
      value: "женат",
    },

    education: {
      title: "Образование: ",
      list: [
        {
          label: "Среднее образование: ",
          list: ["1997-2008 г. Середина-Буда ЗОШ№1."],
        },
        {
          label: "Высшее образование: ",
          list: [
            "2008-2013 г. Харьков ХНУРЭ Специальность: Метрология, стандартизация и сертификация. Дипломированный специалист.",
          ],
        },
        {
          label: "Самообразование: ",
          list: ["2020 -  наст. время Изучение IT направления"],
        },
      ],
    },
  },

  experience: {
    title: "Опыт работы",
    list: [
      {
        label:
          "2014-2017 г. Харьков Оператор Call-Center магазин MotoStyle и Shlem",
        text: [
          "Обработка заказов, оформленных на сайте, проём звонков, работа с проблемными заказами, обучение новых сотрудников.",
        ],
      },
      {
        label:
          "2018-2019 Польша г. Гданьск монтер металлических конструкций и труб",
        text: [
          "Монтаж конструкций согласно чертежам, работа стропальщиком, контроль соблюдения техники безопасности, обучение сотрудников.",
        ],
      },
      {
        label: "03.2020 - 10.2020 Freelance Front-end разработчик.",
        text: ["Вёрска сайтов (HTML, SCSS, BEM, Gulp, Git, Figma, JS, jQuery)"],
      },
      {
        label: "11.2020 - наст. время веб студия, Front-end разработчик,",
        text: [
          `Вёрстка новых проектов (SCSS, HTML5, BEM, Gulp, Figma, Git);
          Новые проекты Front-end (js, jQuery);
          Новые проекты Back-end (wordpress);
          Работа над существеющими проектами:
          - вёрстка,
          - Front-end (vue, react, js, jQuery),
          - Back-end (OpenCart),
          - Оптимизация скорости загрузки сайта;`,
        ],
      },
    ],
  },

  skills: {
    title: "Навыки",
    list: [
      "HTML, CSS, SCSS",
      "JS,  jQuery, Vue, React, Redux, TypeScript",
      "BEM, Gulp, Git",
      "VS Code,  Figma",
    ],
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
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      acmd: {
        title: "acmd",
        url: "http://acmd.artyshok.studio",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      lazersvit: {
        title: "lazersvit",
        url: "https://lazersvit.com",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      selera: {
        title: "selera",
        url: "https://selera.systems",
        tags: ["WordPress", "Vanilla_JS", "scss", "Gulp"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      hypeGeneration: {
        title: "hypeGeneration",
        url: "",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      institutven: {
        title: "institutven",
        url: "",
        tags: ["Alpine.js", "Php_Laravel", "scss", "Gulp"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      kinoshniki: {
        title: "kinoshniki",
        url: "",
        tags: ["Vue.js", "Php_Laravel", "scss", "Webpack"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      magazinShashlyka: {
        title: "magazinShashlyka",
        url: "https://www.magazin-shashlyka.com.ua",
        tags: ["Vanilla_JS", "OpenCart", "scss", "Gulp"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
      artMarks: {
        title: "artMarks",
        url: "https://art-marks.com",
        tags: ["WordPress", "jQuery", "css", "Gulp"],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
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
        ],tasks: ["Вже скоро тут з'явиться всі поставлені завдання"],
      },
    },
  },
};

export default ua;
