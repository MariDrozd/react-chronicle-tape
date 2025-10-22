import { Category } from '../types/category';

export const mockCategories: Category[] = [
  {
    id: 1,
    category: 'Технологии',
    start: 1980,
    end: 1986,
    events: [
      {
        id: 1,
        year: 1980,
        description: 'Sinclair Research выпускает домашний компьютер ZX80',
      },
      {
        id: 2,
        year: 1982,
        description: 'Появился домашний компьютер Sinclair ZX Spectrum',
      },
      {
        id: 3,
        year: 1983,
        description:
          'Компания Apple представляет Lisa — первый персональный компьютер с графическим интерфейсом',
      },
      {
        id: 4,
        year: 1984,
        description: 'Появляется Apple Macintosh',
      },
      {
        id: 5,
        year: 1985,
        description: 'Компания Microsoft выпускает Windows 1.0',
      },
      {
        id: 6,
        year: 1986,
        description: 'Создан первый портативный компьютер IBM PC Convertible',
      },
    ],
  },
  {
    id: 2,
    category: 'Кино',
    start: 1987,
    end: 1991,
    events: [
      {
        id: 1,
        year: 1987,
        description: '"Хищник"/Predator, США (реж. Джон Мактирнан)',
      },
      {
        id: 2,
        year: 1988,
        description:
          '"Кто подставил кролика Роджера"/Who Framed Roger Rabbit, США (реж. Роберт Земекис).',
      },
      {
        id: 3,
        year: 1989,
        description:
          '"Назад в будущее 2"/"Back to the Future 2", США (реж. Роберт Земекис)',
      },
      {
        id: 4,
        year: 1990,
        description: '"Крепкий орешек 2"/"Die Hard 2"б США (реж. Ренни Харлин)',
      },
      {
        id: 5,
        year: 1991,
        description:
          '"Семейка Аддамс"/"The Addams Family", США (реж.Барри Зонненфельд)',
      },
    ],
  },
  {
    id: 3,
    category: 'Литература',
    start: 1992,
    end: 1997,
    events: [
      {
        id: 1,
        year: 1992,
        description:
          'Нобелевская премия по литературе - Дерек Уолкотт, "За блестящий образец карибского эпоса в 64 разделах".',
      },
      {
        id: 2,
        year: 1994,
        description: '"Бессонница" - роман Стивена Кинга.',
      },
      {
        id: 3,
        year: 1995,
        description: 'Нобелевская премия по литературе - Шеймас Хини',
      },
      {
        id: 4,
        year: 1997,
        description: '"Гарри Поттер и филосовский камень" Джоан Роулинг.',
      },
    ],
  },
  {
    id: 4,
    category: 'Театр',
    start: 1999,
    end: 2004,
    events: [
      {
        id: 1,
        year: 1999,
        description:
          'Премьера балета "Золушка" в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
      },
      {
        id: 2,
        year: 2000,
        description: 'возобновление издания журнала "Театр".',
      },
      {
        id: 3,
        year: 2002,
        description:
          'премьера трилогии Тома Стоппарда "Берег Утопии", Королевский Национальный театр, Лондон',
      },
      {
        id: 4,
        year: 2003,
        description:
          'В Венеции сгорел театр Ла Фениче — один из самых известных оперных театров мира',
      },
      {
        id: 5,
        year: 2004,
        description: 'Стартовал фестиваль 24:7 Theatre Festival в Манчестере',
      },
    ],
  },
  {
    id: 5,
    category: 'JavaScript',
    start: 2005,
    end: 2014,
    events: [
      {
        id: 1,
        year: 2005,
        description:
          'Компания Google запускает AJAX-технологию в Gmail и Google Maps',
      },
      {
        id: 2,
        year: 2008,
        description:
          'Представлен движок V8 от Google, обеспечивший стремительный рост производительности JavaScript.',
      },
      {
        id: 3,
        year: 2009,
        description:
          'Разработчик Райан Дал выпускает Node.js, позволив выполнять JavaScript на стороне сервера',
      },
      {
        id: 4,
        year: 2014,
        description:
          'Утверждён стандарт ECMAScript 6 (ES2015), добавивший классы, модули и стрелочные функции.',
      },
    ],
  },
  {
    id: 6,
    category: 'Наука',
    start: 2015,
    end: 2022,
    events: [
      {
        id: 1,
        year: 2015,
        description:
          '13 сентября - частичное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: 2,
        year: 2016,
        description:
          'Телеском "Хаббл" оьнаружил самую удаленную из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: 63,
        year: 2017,
        description:
          'Компания "Tesla" официально представила первый в мире электрический грузовик tesla Semi',
      },
      {
        id: 4,
        year: 2018,
        description:
          'Старт космического аппарта solar Probe Plus, предназначенного для изучения Солнца',
      },
      {
        id: 5,
        year: 2019,
        description:
          'Google объявил о создании 53-кубитного квантового компьютера',
      },
      {
        id: 6,
        year: 2020,
        description:
          'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полета',
      },
    ],
  },
];
