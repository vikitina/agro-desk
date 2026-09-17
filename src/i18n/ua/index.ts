import { common } from "./common";
import { dashboard } from "./dashboard";
import { home } from "./home";
import { navigation } from "./navigation";
import { profile } from "./profile";
import { roles } from "./roles";
import { users } from "./users";
import { login } from "./login";

export const uk = {
    common,

    navigation,

    roles,

    theme: {
      light: "Світла тема",
      dark: "Темна тема",
    },

    language: {
      english: "English",
      ukrainian: "Українська",
    },

    home,
    profile,
    login,

    register: {
      eyebrow: "НОВИЙ АКАУНТ",
      title: "Створення акаунта",
      description:
        "Створіть демонстраційний акаунт та дослідіть застосунок з рольовим доступом.",

      name: "Ім'я",
      email: "Email",
      password: "Пароль",

      submit: "Створити акаунт",

      haveAccount: "Вже маєте акаунт?",
      login: "Увійти",
    },

    notFound: {
      eyebrow: "404",
      title: "Сторінку не знайдено",
      description:
        "Сторінка, яку ви шукаєте, не існує або була переміщена.",
    },

    footer: {
      text: "RoleDesk — демонстраційний застосунок",
    },

    users,
    
    dashboard,
  }