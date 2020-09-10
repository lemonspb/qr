export const mockupFirst = {
    questionStartIndex: "1",

    cookieName: "myuniquesurveyid",
  title: 'Опрос удовлетворенности пациента условиями оказания медицинской помощи',
  locale: 'ru',
  questions: [
    {
      type: "radiogroup",
      name: "1",
      qnum: "1a",
      title: "Вы пациент или родственник пациента?",
      isRequired: true,
      choices: ["Пациент", "Родственник"],
      colCount: 0,
    },
    {
      type: "radiogroup",
      name: "2",
      qnum: '2b',
      title: "Укажите Ваш пол",
      isRequired: true,
      choices: ["Мужчина", "Женщина"],
      colCount: 0,
    },
  ]
};
