import type {
  BlogPostData,
  LandingPageData,
} from "./builder.types";
import type { Language } from "../types/common";

export const fallbackLandingPages: Record<
  Language,
  LandingPageData
> = {
  en: {
    locale: "en",
    slug: "home",

    seoTitle:
      "AgroDesk | Location Intelligence for Agriculture",

    seoDescription:
      "Organize field locations, manage team access, and turn agricultural data into practical decisions.",

    eyebrow: "Agricultural operations platform",

    title:
      "From field locations to confident decisions.",

    description:
      "AgroDesk helps agricultural teams organize location data, coordinate access, and turn field information into practical next steps.",

    primaryAction: {
      label: "Explore the demo",
      href: "/login",
    },

    secondaryAction: {
      label: "Read field insights",
      href: "/blog",
    },

    heroImage: {
      url: "/images/agro/hero-field.jpg",
      alt: "Agricultural fields viewed from above",
    },

    visual: {
      eyebrow:
        "AgroDesk / Field intelligence",

      titleLines: [
        "Clear data.",
        "Shared access.",
        "Better decisions.",
      ],

      tags: [
        "Location data",
        "Role access",
        "Field insights",
      ],
    },

    capabilitiesLabel:
      "Platform capabilities",

    featuresTitle:
      "Everything your field team needs in one workspace",

    features: [
      {
        title: "Location datasets",
        description:
          "Keep field locations and operational information organized and easy to access.",
      },
      {
        title: "Role-based collaboration",
        description:
          "Give administrators, managers, and viewers the appropriate level of access.",
      },
      {
        title: "Actionable insights",
        description:
          "Transform scattered field information into clear and practical decisions.",
      },
    ],

    metrics: [
      {
        value: "24/7",
        label: "access to field information",
      },
      {
        value: "3",
        label: "built-in permission levels",
      },
      {
        value: "1",
        label: "shared operational workspace",
      },
    ],

    demo: {
      eyebrow: "Interactive product demo",
      title: "Explore AgroDesk by role",
      description:
        "Use the prepared demo accounts to compare administrator, manager, and viewer access.",
      action: {
        label: "Open the role demo",
        href: "/login",
      },
    },
  },

  uk: {
    locale: "uk",
    slug: "home",

    seoTitle:
      "AgroDesk | Аналітика локацій для агросектору",

    seoDescription:
      "Упорядковуйте локації полів, керуйте доступом команди та перетворюйте аграрні дані на практичні рішення.",

    eyebrow: "Платформа для аграрних операцій",

    title:
      "Від локацій полів — до впевнених рішень.",

    description:
      "AgroDesk допомагає аграрним командам упорядковувати дані про локації, координувати доступ і перетворювати інформацію з полів на практичні наступні кроки.",

    primaryAction: {
      label: "Переглянути демо",
      href: "/login",
    },

    secondaryAction: {
      label: "Читати матеріали",
      href: "/blog",
    },

    heroImage: {
      url: "/images/agro/hero-field.jpg",
      alt: "Сільськогосподарські поля з висоти",
    },

    visual: {
      eyebrow: "AgroDesk / Аналітика полів",

      titleLines: [
        "Чіткі дані.",
        "Спільний доступ.",
        "Кращі рішення.",
      ],

      tags: [
        "Дані про локації",
        "Рольовий доступ",
        "Аналітика полів",
      ],
    },

    capabilitiesLabel:
      "Можливості платформи",

    featuresTitle:
      "Усе необхідне польовій команді в одному робочому просторі",

    features: [
      {
        title: "Дані про локації",
        description:
          "Зберігайте інформацію про поля та операційні дані впорядковано й у зручному доступі.",
      },
      {
        title:
          "Співпраця з рольовим доступом",
        description:
          "Надавайте адміністраторам, менеджерам і переглядачам відповідний рівень доступу.",
      },
      {
        title: "Практична аналітика",
        description:
          "Перетворюйте розрізнену інформацію з полів на зрозумілі практичні рішення.",
      },
    ],

    metrics: [
      {
        value: "24/7",
        label: "доступ до інформації про поля",
      },
      {
        value: "3",
        label: "вбудовані рівні доступу",
      },
      {
        value: "1",
        label: "спільний робочий простір",
      },
    ],

    demo: {
      eyebrow: "Інтерактивна демонстрація",
      title:
        "Перегляньте AgroDesk з різними ролями",
      description:
        "Скористайтеся підготовленими демоакаунтами, щоб порівняти доступ адміністратора, менеджера та переглядача.",
      action: {
        label: "Відкрити демо ролей",
        href: "/login",
      },
    },
  },
};

export const fallbackBlogPostsByLanguage: Record<
  Language,
  BlogPostData[]
> = {
  en: [
    {
      locale: "en",
      translationKey: "location-data-field-planning",
      slug: "location-data-field-planning",

      title:
        "How location data supports better field planning",

      excerpt:
        "Structured location data helps agricultural teams compare fields, coordinate work, and make decisions with greater confidence.",

      category: "Field Operations",
      author: "AgroDesk Team",
      publishedAt: "2026-09-18",

      coverImage: {
        url: "/images/agro/location-data.jpg",
        alt: "Aerial view of agricultural fields",
      },

      sections: [
        {
          paragraphs: [
            "Agricultural operations often depend on information collected from different locations, tools, and team members.",
            "Bringing that information into one structured dataset makes it easier to understand field conditions and coordinate upcoming work.",
          ],
        },
        {
          title: "Create a shared operational view",
          paragraphs: [
            "When location records follow the same structure, teams can compare fields more consistently and reduce repeated manual work.",
            "A shared view also makes it easier for managers to identify missing information before it affects planning.",
          ],
        },
      ],

      featured: true,
    },

    {
      locale: "en",
      translationKey: "role-based-access-agriculture-teams",
      slug: "role-based-access-agriculture-teams",

      title:
        "Why role-based access matters for distributed teams",

      excerpt:
        "Clear permissions help administrators, managers, and field partners work with the same platform without exposing unnecessary controls.",

      category: "Data & Security",
      author: "AgroDesk Team",
      publishedAt: "2026-09-12",

      coverImage: {
        url: "/images/agro/team-access.jpg",
        alt: "Agricultural team reviewing field information",
      },

      sections: [
        {
          paragraphs: [
            "Not every team member needs the same level of access. Some users manage accounts, others coordinate operations, and others only need to review information.",
            "Role-based access keeps these responsibilities clear while allowing everyone to work with the same source of data.",
          ],
        },
        {
          title: "Reduce complexity without limiting collaboration",
          paragraphs: [
            "Well-defined permissions make an application easier to understand and reduce the risk of accidental changes.",
            "They also allow new users to begin working with the platform using an interface appropriate to their responsibilities.",
          ],
        },
      ],

      featured: false,
    },

    {
      locale: "en",
      translationKey: "prepare-data-growing-season",
      slug: "prepare-data-growing-season",

      title:
        "A practical data checklist for the growing season",

      excerpt:
        "Reviewing locations, user access, and operational records before the season begins can prevent avoidable problems later.",

      category: "Planning",
      author: "AgroDesk Team",
      publishedAt: "2026-09-05",

      coverImage: {
        url: "/images/agro/season-planning.jpg",
        alt: "Green crop rows during the growing season",
      },

      sections: [
        {
          paragraphs: [
            "Seasonal preparation is a good opportunity to review the quality of operational data before daily workloads increase.",
            "Teams should confirm that field locations are current, inactive records are archived, and responsible users have the correct access.",
          ],
        },
        {
          title: "Start with the information used every day",
          paragraphs: [
            "Prioritize records that support scheduling, field visits, reporting, and communication between teams.",
            "Small corrections made early can save significant time once field activity accelerates.",
          ],
        },
      ],

      featured: false,
    },
  ],
  uk: [
    {
      locale: "uk",
      translationKey: "location-data-field-planning",
      slug: "location-data-field-planning",
      title:
        "Як дані про місцезнаходження покращують планування польових робіт",
      excerpt:
        "Точні просторові дані допомагають агрокомандам краще планувати роботи, координувати людей і швидше реагувати на зміни в полі.",
      category: "Польові дані",
      author: "Команда AgroDesk",
      publishedAt: "2026-09-12",
      coverImage: {
        url: "/images/agro/field-planning.jpg",
        alt: "Сільськогосподарські поля з висоти",
      },
      sections: [
        {
          paragraphs: [
            "Планування польових робіт часто залежить від інформації, що зберігається в різних таблицях, картах і повідомленнях. Через це команда витрачає час на пошук актуальних даних і додаткове узгодження завдань.",
            "Єдина система просторових даних дозволяє пов’язати кожну ділянку з відповідальними працівниками, запланованими роботами та поточним станом поля.",
          ],
        },
        {
          title: "Від даних до конкретних дій",
          paragraphs: [
            "Координати, межі полів і результати спостережень стають корисними лише тоді, коли допомагають приймати рішення. Наприклад, менеджер може швидко визначити пріоритетні ділянки та сформувати завдання для польової команди.",
            "Працівники бачать не лише опис завдання, а й точне місце його виконання. Це зменшує кількість помилок і повторних уточнень.",
          ],
        },
        {
          title: "Спільна картина для всієї команди",
          paragraphs: [
            "Коли всі учасники працюють з актуальними даними, планування стає прозорішим. Керівники контролюють загальний прогрес, а спеціалісти отримують інформацію, потрібну саме для їхньої роботи.",
            "Такий підхід особливо важливий для команд, які одночасно працюють з великою кількістю полів і локацій.",
          ],
        },
      ],
      featured: true,
    },

    {
      locale: "uk",
      translationKey:
        "role-based-access-agriculture-teams",
      slug: "role-based-access-agriculture-teams",
      title:
        "Як рольовий доступ допомагає агрокомандам працювати безпечніше",
      excerpt:
        "Ролі та дозволи дають кожному учаснику команди необхідний рівень доступу й захищають важливі операційні дані.",
      category: "Управління командою",
      author: "Команда AgroDesk",
      publishedAt: "2026-09-05",
      coverImage: {
        url: "/images/agro/team-access.jpg",
        alt: "Агрокоманда обговорює робочі дані",
      },
      sections: [
        {
          paragraphs: [
            "У сільськогосподарських проєктах з однією системою можуть працювати менеджери, агрономи, оператори техніки та зовнішні спеціалісти. Усім їм потрібні різні дані й різні можливості.",
            "Рольовий доступ дозволяє налаштувати систему так, щоб кожен користувач бачив лише потрібні йому розділи та міг виконувати дозволені дії.",
          ],
        },
        {
          title: "Зрозумілі ролі та відповідальність",
          paragraphs: [
            "Адміністратор може керувати користувачами й налаштуваннями, менеджер — планувати роботи та контролювати їх виконання, а спостерігач — переглядати інформацію без можливості її змінювати.",
            "Чіткий розподіл повноважень зменшує ризик випадкових змін і допомагає встановити відповідальність за кожну дію.",
          ],
        },
        {
          title: "Безпека без зайвих ускладнень",
          paragraphs: [
            "Система дозволів не повинна ускладнювати щоденну роботу. Користувач отримує доступ до потрібних інструментів одразу після входу, а недоступні функції не відволікають його.",
            "Це забезпечує баланс між захистом даних і зручністю роботи команди.",
          ],
        },
      ],
      featured: false,
    },

    {
      locale: "uk",
      translationKey: "prepare-data-growing-season",
      slug: "prepare-data-growing-season",
      title:
        "Як підготувати дані до нового сезону вирощування",
      excerpt:
        "Перевірка польових даних перед початком сезону допомагає уникнути помилок у плануванні та створити надійну основу для роботи.",
      category: "Планування сезону",
      author: "Команда AgroDesk",
      publishedAt: "2026-08-28",
      coverImage: {
        url: "/images/agro/growing-season.jpg",
        alt: "Підготовка сільськогосподарського поля до нового сезону",
      },
      sections: [
        {
          paragraphs: [
            "Перед початком нового сезону варто перевірити інформацію про поля, культури, відповідальних працівників і заплановані операції. Навіть невеликі неточності можуть вплинути на подальше планування.",
            "Підготовка даних не обов’язково має бути складним процесом. Найкраще розділити її на кілька зрозумілих етапів.",
          ],
        },
        {
          title: "Перевірте основну інформацію",
          paragraphs: [
            "Спочатку переконайтеся, що межі полів, назви ділянок і площі залишаються актуальними. Потім перевірте історію культур і додайте плани на новий сезон.",
            "Також важливо видалити дублікати й позначити записи, які потребують додаткового уточнення.",
          ],
        },
        {
          title: "Визначте відповідальних",
          paragraphs: [
            "Для кожної ділянки або групи завдань потрібно призначити відповідальних працівників. Команда повинна розуміти, хто оновлює інформацію і хто приймає остаточні рішення.",
            "Після перевірки даних система стає надійною робочою основою, а не просто архівом минулого сезону.",
          ],
        },
      ],
      featured: false,
    },
  ],
}
