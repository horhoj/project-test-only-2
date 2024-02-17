import { CircleOfHistoricalEventsDataItem } from '~/components/CircleOfHistoricalEvents/CircleOfHistoricalEvents.types';
import { getUUID } from '~/utils/getUUID';

export interface InfoItem {
  id: string;
  year: number;
  text: string;
}

export interface DataItem {
  id: string;
  title: string;
  startYear: number;
  endYear: number;
  info: InfoItem[];
}

export const data: DataItem[] = [
  {
    id: getUUID(),
    title: 'История',
    startYear: 1980,
    endYear: 1986,
    info: [
      {
        id: getUUID(),
        year: 1981,
        text: 'Премьер-министром Норвегии стала Гру Харлем Брунтланн',
      },
      {
        id: getUUID(),
        year: 1982,
        text: 'Испания заявляет о своем согласии прекратить блокаду Гибралтара',
      },
      {
        id: getUUID(),
        year: 1983,
        text: 'В результате перестановок в британском правительстве Майкл Хезлтайн назначается министром обороны.',
      },
      {
        id: getUUID(),
        year: 1984,
        text: 'Власть в Нигерии переходит к Верховному военному совету, состоящему из 19 членов.',
      },
      {
        id: getUUID(),
        year: 1985,
        text: 'В Кампучии Хун Сен сменяет Чан Си на посту председателя Совета министров.',
      },
      {
        id: getUUID(),
        year: 1986,
        text: 'Испания и Португалия становятся соответственно 11-м и 12-м членами ЕЭС',
      },
    ],
  },
  {
    id: getUUID(),
    title: 'Кино',
    startYear: 1987,
    endYear: 1991,
    info: [
      {
        id: getUUID(),
        year: 1987,
        text: '«Безумство духов»/Ghost Fever, США (реж. Алан Смити)',
      },
      {
        id: getUUID(),
        year: 1988,
        text: '«Ариэль»/Ariel, Финляндия (реж. Аки Каурисмяки)',
      },
      {
        id: getUUID(),
        year: 1989,
        text: '«Зона скорости»/Speed Zone, США (реж. Джим Дрейк)',
      },
      {
        id: getUUID(),
        year: 1990,
        text: '«Авалон»/Avalon, США (реж. Барри Левинсон)',
      },
      {
        id: getUUID(),
        year: 1991,
        text: 'Непредвиденное убийство»/Homicide, США, (реж. Дэвид Мэмет)',
      },
    ],
  },
  {
    id: getUUID(),
    title: 'Литература',
    startYear: 1992,
    endYear: 1997,
    info: [
      {
        id: getUUID(),
        year: 1992,
        text: '«Дамы и Господа» (англ. Lords and Ladies) — роман-фэнтези Терри Пратчетта.',
      },
      {
        id: getUUID(),
        year: 1993,
        text: '«Американские выдумки» (хорв. Americki fikcionar) — эссе Дубравки Угрешич.',
      },
      {
        id: getUUID(),
        year: 1994,
        text: '«Бессонница» (англ. Insomnia) — роман Стивена Кинга.',
      },
      {
        id: getUUID(),
        year: 1995,
        text: '«Географ глобус пропил» — роман Алексея Иванова.',
      },
      {
        id: getUUID(),
        year: 1996,
        text: '«Чапаев и Пустота» — роман Виктора Пелевина.',
      },
      {
        id: getUUID(),
        year: 1997,
        text: '«Секс в большом городе» (англ. Sex & The City) — роман Кэндес Бушнелл.',
      },
    ],
  },
  {
    id: getUUID(),
    title: 'Театр',
    startYear: 1999,
    endYear: 2004,
    info: [
      {
        id: getUUID(),
        year: 1999,
        text: '«Додо» Клайва Пэтона, постановка Александра Дзекуна (Театр драмы имени И. А. Слонова, Саратов).',
      },
      {
        id: getUUID(),
        year: 2000,
        text: ' на конкурсе «Окно в Россию» «театром года» назван новосибирский «Глобус».',
      },
      {
        id: getUUID(),
        year: 2001,
        text: 'Танцовщик Дэвид Макалистер[en] занял пост руководителя труппы «Австралийский балет».',
      },
      {
        id: getUUID(),
        year: 2002,
        text: 'Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон',
      },
      {
        id: getUUID(),
        year: 2003,
        text: '«Завтрак у предводителя» И. С. Тургенева, постановка Антона Кузнецова, Саратовский театр драмы имени И. А. Слонова',
      },
      {
        id: getUUID(),
        year: 2004,
        text: 'Открыта мемориальная доска памяти Н. И. Сухостав на здании Дворца творчества детей и молодёжи г. Саратова.',
      },
    ],
  },
  {
    id: getUUID(),
    title: 'Медицина',
    startYear: 2005,
    endYear: 2010,
    info: [
      {
        id: getUUID(),
        year: 2005,
        text: 'Жан-Мишель Дюбернар произвёл первую частичную трансплантацию лица.',
      },
      {
        id: getUUID(),
        year: 2006,
        text: 'Получена первая вакцина против вируса папилломы человека.',
      },
      {
        id: getUUID(),
        year: 2007,
        text: 'Разработана вторая вакцина против ротавирусной инфекции (первая была отменена).',
      },
      {
        id: getUUID(),
        year: 2008,
        text: 'За открытие вируса иммунодефицита человека Монтанье и его коллега Ф. Барре-Синусси получили Нобелевскую премию',
      },
      {
        id: getUUID(),
        year: 2009,
        text: 'Учёные из США стали обладателями Нобелевской премии 2009 года в области медицины',
      },
      {
        id: getUUID(),
        year: 2010,
        text: 'Химикат рапамицин продлил жизнь подопытной мыши на 9-14 процентов.',
      },
    ],
  },
  {
    id: getUUID(),
    title: 'Наука',
    startYear: 2015,
    endYear: 2022,
    info: [
      {
        id: getUUID(),
        year: 2015,
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        id: getUUID(),
        year: 2016,
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        id: getUUID(),
        year: 2017,
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        id: getUUID(),
        year: 2018,
        text: 'Ученым удалось выделить ДНК из останков древних людей, обнаруженных в Алтайской пещере несколько лет назад.',
      },
      {
        id: getUUID(),
        year: 2019,
        text: 'Ученые из Университета Миннесоты открыла новую технологию, позволяющие ускорять химические реакции до 10 000 раз быстрее',
      },
      {
        id: getUUID(),
        year: 2020,
        text: 'Ученые определили, что повышение выбросов углекислого газа вдвое вызовет рост температуры на 3°C',
      },
      {
        id: getUUID(),
        year: 2021,
        text: 'Представили первую вакцину против малярии под названием Mosquirix. Над ее созданием работали с 1980-х годов.',
      },
      {
        id: getUUID(),
        year: 2022,
        text: 'В канадских льдах обнаружен детеныш шерстистого мамонта возрастом 130 000 лет',
      },
    ],
  },
];

export const dataForCircleOfHistoricalEvents: CircleOfHistoricalEventsDataItem[] =
  data.map(({ id, title }, index) => ({
    id,
    title,
    buttonTitle: (index + 1).toString(),
  }));

export const getDataForCurrentHistoricalDataItemId = (id: string) => {
  return data.find((el) => el.id === id) ?? null;
};
