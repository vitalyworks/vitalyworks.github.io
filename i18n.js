/* Словарь сайта. Английский — язык по умолчанию, русский переключается кнопкой.
   Ключи одинаковые в обоих словарях: если добавляешь текст, добавь его в оба. */

const TRANSLATIONS = {
  en: {
    'meta.title': 'kyronixes — Roblox Studio scripter',
    'meta.description':
      'Roblox Studio scripter with four years of experience. Simulators, combat systems, movesets, economy and saves in Luau.',

    'a11y.sections': 'Sections',
    'a11y.language': 'Language',
    'a11y.close': 'Close',

    'nav.works': 'Work',
    'nav.stack': 'What I do',
    'nav.process': 'Process',
    'nav.faq': 'FAQ',
    'nav.cta': 'Message on Discord',

    'hero.badge': 'Open for commissions',
    'hero.title': 'I build <em>Roblox mechanics</em> that hold up',
    'hero.lead':
      'Four years writing game mechanics in Luau: simulators, combat systems, progression and economy. I build logic that runs on the server and holds up under load.',
    'hero.ctaPrimary': 'View work',
    'hero.ctaSecondary': 'Start a project',
    'hero.point1.title': '4 years',
    'hero.point1.text': 'In Roblox Studio',
    'hero.point2.title': 'Simulators',
    'hero.point2.text': 'Main specialization',
    'hero.point3.title': 'Luau',
    'hero.point3.text': 'Modular server-side code',

    'works.kicker': 'Work',
    'works.title': 'Built end to end. See every system in action',
    'works.lead':
      'Three solo projects I still have footage of. Click a card to watch the video.',
    'works.note':
      'Some of the projects I worked on in teams shut down or stayed under NDA, so no footage survived. What is here is solo work I can show in full.',

    'works.combat.title': 'Ability-based combat system',
    'works.combat.alt': 'Ability-based combat system with cooldowns and VFX',
    'works.combat.text':
      'A four-slot hotbar with independent cooldowns, a stamina bar and dummies with damage and health bars. Every ability is its own module: animation, hitbox, effects and its own recovery phase.',
    'works.combat.tags':
      '<em>Combat</em><em>Cooldowns</em><em>Hitboxes</em><em>VFX</em>',

    'works.moveset.title': 'Character moveset — Culling Grounds',
    'works.moveset.alt': 'Character moveset in the Culling Grounds project',
    'works.moveset.text':
      'A full ability set for one character: dash, block, Cleave, Dismantle, Spider Web and Dissolve. Animations, effects and hitboxes run through one state controller so moves never conflict.',
    'works.moveset.tags':
      '<em>Moveset</em><em>State machine</em><em>Animation</em>',

    'works.stands.title': 'Stand and combo system',
    'works.stands.alt': 'Stand summoning and combo system in Roblox Studio',
    'works.stands.text':
      'Stand summoning, M1 chains with a combo counter, barrage, heavy punch and block. Damage is calculated on the server and the combo resets on timeout — visible right in the Studio test session.',
    'works.stands.tags':
      '<em>Combo</em><em>Server-side</em><em>Roblox Studio</em>',

    'stack.kicker': 'Specialization',
    'stack.title': 'Mechanics I build',
    'stack.lead':
      'Every system is written as a module, so it can be extended or switched off without touching the rest of the game.',
    'stack.simulators.title': 'Simulators',
    'stack.simulators.text':
      'Progression, rebirths, multipliers, zones, pets and a balanced growth curve.',
    'stack.combat.title': 'Combat systems',
    'stack.combat.text':
      'Movesets, combos, cooldowns, hitboxes, blocking and parrying.',
    'stack.saves.title': 'Saving and data',
    'stack.saves.text':
      'DataStore and player profiles, data migrations, protection against progress loss.',
    'stack.economy.title': 'Economy',
    'stack.economy.text':
      'Currencies, shops, crafting, gacha, leaderboards and limited items.',
    'stack.ui.title': 'Interfaces',
    'stack.ui.text':
      'Inventory, upgrade windows, animated UI and its wiring to the server.',
    'stack.security.title': 'Security and performance',
    'stack.security.text':
      'Server-side validation against exploits, profiling and lower server load.',
    'stack.note':
      '<span>Not taking</span> FPS shooters and vehicles — cars and aircraft. For those you are better off with a specialist.',

    'process.kicker': 'Process',
    'process.title': 'How the work goes',
    'process.step1': 'We go through the task, references and deadlines',
    'process.step2': 'I build a prototype to test the mechanic',
    'process.step3': 'I write the final version in modules and test it',
    'process.step4': 'I hand over the source and fix your notes',

    'faq.kicker': 'FAQ',
    'faq.title': 'Common questions',
    'faq.q1': 'Why are there only three videos?',
    'faq.a1':
      'I have worked on a lot of projects, but almost no recordings survived: some games shut down, some material stayed with the clients. I only show work I did myself and can back with a full recording.',
    'faq.q2': 'What do you not take on?',
    'faq.a2':
      'FPS shooters and vehicles — cars and aircraft. Everything else — simulators, combat systems, economy, progression, interfaces — I do.',
    'faq.q3': 'What do you write in?',
    'faq.a3':
      'Luau in Roblox Studio. Modular architecture, with all the important logic and checks on the server so the mechanic cannot be broken from the client.',
    'faq.q4': 'How long does it take?',
    'faq.a4':
      'A small system takes one to three days. A large mechanic or a full simulator, a week or more. I give an exact estimate once we have gone through the task.',
    'faq.q5': 'What do you need to start?',
    'faq.a5':
      'Describe the task and send references on Discord. I will come back with timing, price and a suggestion for a simpler way to build the mechanic.',

    'contact.kicker': 'Contact',
    'contact.title': 'Let’s build the mechanic your game is missing',
    'contact.lead':
      'Message me on Discord — I reply within a day. Tell me what you need and attach a reference if you have one.',
    'contact.copy': 'Copy username',
    'contact.copied': 'Username copied',
    'contact.copyManual': 'Copy manually: {handle}',

    'footer.copy': '© 2026 kyronixes · Roblox Studio scripter · Discord: kyronixes',

    'modal.title': 'Work',
  },

  ru: {
    'meta.title': 'kyronixes — скриптер Roblox Studio',
    'meta.description':
      'Скриптер Roblox Studio с опытом четыре года. Симуляторы, боевые системы, мувсеты, экономика и сохранения на Luau.',

    'a11y.sections': 'Разделы',
    'a11y.language': 'Язык',
    'a11y.close': 'Закрыть',

    'nav.works': 'Работы',
    'nav.stack': 'Что делаю',
    'nav.process': 'Процесс',
    'nav.faq': 'Вопросы',
    'nav.cta': 'Написать в Discord',

    'hero.badge': 'Открыт для заказов',
    'hero.title': '<em>Механики Roblox</em>, которые не ломаются',
    'hero.lead':
      'Четыре года пишу игровые механики на Luau: симуляторы, боевые системы, прогресс и экономику. Делаю логику, которая работает на сервере и не ломается под нагрузкой.',
    'hero.ctaPrimary': 'Смотреть работы',
    'hero.ctaSecondary': 'Обсудить проект',
    'hero.point1.title': '4 года',
    'hero.point1.text': 'Опыт в Roblox Studio',
    'hero.point2.title': 'Симуляторы',
    'hero.point2.text': 'Основная специализация',
    'hero.point3.title': 'Luau',
    'hero.point3.text': 'Модульный серверный код',

    'works.kicker': 'Работы',
    'works.title': 'Собрано от и до. Посмотри каждую систему в деле',
    'works.lead':
      'Три сольных проекта, записи которых сохранились. Нажми на карточку, чтобы посмотреть видео.',
    'works.note':
      'Часть проектов, над которыми я работал в командах, закрылась или осталась под NDA — записей с них не сохранилось. Здесь только то, что я делал в соло и могу показать целиком.',

    'works.combat.title': 'Боевая система с абилками',
    'works.combat.alt': 'Боевая система с абилками: кулдауны и VFX',
    'works.combat.text':
      'Хотбар на четыре способности с независимыми кулдаунами, полоса стамины и манекены с уроном и хп-барами. Каждая абилка — отдельный модуль: анимация, хитбокс, эффекты и своя фаза восстановления.',
    'works.combat.tags':
      '<em>Combat</em><em>Кулдауны</em><em>Хитбоксы</em><em>VFX</em>',

    'works.moveset.title': 'Мувсет персонажа — Culling Grounds',
    'works.moveset.alt': 'Мувсет персонажа в проекте Culling Grounds',
    'works.moveset.text':
      'Полный набор способностей одного персонажа: рывок, блок, Cleave, Dismantle, Spider Web и Dissolve. Анимации, эффекты и хитбоксы связаны в один контроллер состояний, чтобы приёмы не конфликтовали.',
    'works.moveset.tags':
      '<em>Мувсет</em><em>State machine</em><em>Анимации</em>',

    'works.stands.title': 'Система стендов и комбо',
    'works.stands.alt': 'Система стендов и комбо в Roblox Studio',
    'works.stands.text':
      'Призыв стенда, цепочки M1 со счётчиком комбо, barrage, тяжёлый удар и блок. Урон считается на сервере, комбо сбрасывается по таймауту — видно прямо в тестовой сессии Studio.',
    'works.stands.tags':
      '<em>Комбо</em><em>Server-side</em><em>Roblox Studio</em>',

    'stack.kicker': 'Специализация',
    'stack.title': 'Механики, которые я собираю',
    'stack.lead':
      'Каждая система пишется модулем: её можно расширить или выключить, не задев остальную игру.',
    'stack.simulators.title': 'Симуляторы',
    'stack.simulators.text':
      'Прогрессия, реборны, множители, зоны, петы и баланс кривой роста.',
    'stack.combat.title': 'Боевые системы',
    'stack.combat.text':
      'Мувсеты, комбо, кулдауны, хитбоксы, блок и парирование.',
    'stack.saves.title': 'Сохранения',
    'stack.saves.text':
      'DataStore и профили игроков, миграции данных, защита прогресса от потерь.',
    'stack.economy.title': 'Экономика',
    'stack.economy.text':
      'Валюты, магазины, крафт, гача, лидерборды и лимитированные предметы.',
    'stack.ui.title': 'Интерфейсы',
    'stack.ui.text':
      'Инвентарь, окна апгрейдов, анимированный UI и его связка с сервером.',
    'stack.security.title': 'Защита и оптимизация',
    'stack.security.text':
      'Серверная валидация против эксплойтов, профилирование и снижение нагрузки.',
    'stack.note':
      '<span>Не берусь</span> FPS-шутеры и транспорт — машины, авиация. В этих направлениях лучше найти профильного разработчика.',

    'process.kicker': 'Процесс',
    'process.title': 'Как проходит работа',
    'process.step1': 'Обсуждаем задачу, референсы и сроки',
    'process.step2': 'Собираю прототип, чтобы проверить механику',
    'process.step3': 'Пишу финальную версию модулями и тестирую',
    'process.step4': 'Передаю исходники и правлю замечания',

    'faq.kicker': 'Вопросы',
    'faq.title': 'Частые вопросы',
    'faq.q1': 'Почему в портфолио всего три видео?',
    'faq.a1':
      'Я работал на многих проектах, но записи почти не сохранились: часть игр закрылась, часть материалов осталась у заказчиков. Показываю только то, что делал сам и на что могу дать полную запись.',
    'faq.q2': 'Какие задачи не берёшь?',
    'faq.a2':
      'FPS-шутеры и транспорт — автомобили и авиацию. Всё остальное: симуляторы, боевые системы, экономику, прогресс, интерфейсы — делаю.',
    'faq.q3': 'На чём пишешь?',
    'faq.a3':
      'Luau в Roblox Studio. Модульная архитектура, вся важная логика и проверки — на сервере, чтобы механику нельзя было сломать с клиента.',
    'faq.q4': 'Сколько занимает работа?',
    'faq.a4':
      'Небольшая система — от одного до трёх дней. Крупная механика или симулятор целиком — от недели. Точный срок называю после того, как разберём задачу.',
    'faq.q5': 'Что нужно, чтобы начать?',
    'faq.a5':
      'Опиши задачу и пришли референсы в Discord. Отвечу по срокам, цене и предложу, как реализовать механику проще.',

    'contact.kicker': 'Контакты',
    'contact.title': 'Соберём механику, которой не хватает твоей игре',
    'contact.lead':
      'Пиши в Discord — отвечаю в течение дня. Расскажи, какая механика нужна, и приложи референс, если он есть.',
    'contact.copy': 'Скопировать ник',
    'contact.copied': 'Ник скопирован',
    'contact.copyManual': 'Скопируй вручную: {handle}',

    'footer.copy': '© 2026 kyronixes · Скриптер Roblox Studio · Discord: kyronixes',

    'modal.title': 'Работа',
  },
};

const DEFAULT_LANG = 'en';
const LANG_STORAGE_KEY = 'kyronixes.lang';

const i18n = {
  current: DEFAULT_LANG,

  t(key, replacements) {
    const dictionary = TRANSLATIONS[this.current] || TRANSLATIONS[DEFAULT_LANG];
    let value = dictionary[key] ?? TRANSLATIONS[DEFAULT_LANG][key] ?? key;
    if (replacements) {
      Object.entries(replacements).forEach(([name, replacement]) => {
        value = value.replace(`{${name}}`, replacement);
      });
    }
    return value;
  },

  apply(lang) {
    this.current = TRANSLATIONS[lang] ? lang : DEFAULT_LANG;
    const html = document.documentElement;
    html.lang = this.current;

    document.title = this.t('meta.title');
    setMeta('name', 'description', this.t('meta.description'));
    setMeta('property', 'og:title', this.t('meta.title'));
    setMeta('property', 'og:description', this.t('meta.description'));

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = this.t(element.dataset.i18n);
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      element.innerHTML = this.t(element.dataset.i18nHtml);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      element.alt = this.t(element.dataset.i18nAlt);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      element.setAttribute('aria-label', this.t(element.dataset.i18nAria));
    });

    document.querySelectorAll('.lang-option').forEach((button) => {
      const active = button.dataset.lang === this.current;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, this.current);
    } catch {
      /* приватный режим — язык просто не запомнится */
    }

    document.dispatchEvent(
      new CustomEvent('languagechange', { detail: { lang: this.current } })
    );
  },

  init() {
    let saved = null;
    try {
      saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    } catch {
      /* доступ к хранилищу заблокирован */
    }
    this.apply(saved || DEFAULT_LANG);

    document.querySelectorAll('.lang-option').forEach((button) => {
      button.addEventListener('click', () => this.apply(button.dataset.lang));
    });
  },
};

function setMeta(attribute, name, content) {
  const tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (tag) tag.setAttribute('content', content);
}

window.i18n = i18n;
