/* Словарь сайта. Английский — язык по умолчанию, русский переключается кнопкой.
   Ключи одинаковые в обоих словарях: если добавляешь текст, добавь его в оба. */

const TRANSLATIONS = {
  en: {
    'meta.title': 'VitalyWorks — Roblox Studio scripter',
    'meta.description':
      'Roblox Studio scripter with three years of experience. Systems of any complexity in Luau.',

    'a11y.sections': 'Sections',
    'a11y.language': 'Language',
    'a11y.close': 'Close',

    'nav.works': 'Work',
    'nav.stack': 'What I do',
    'nav.payment': 'Payment',
    'nav.faq': 'FAQ',
    'nav.cta': 'Message on Discord',

    'hero.badge': 'Open for commissions',
    'hero.title': 'I make <em>Roblox Studio systems</em> for any task and any complexity',
    'hero.lead':
      'I take commissions for game systems in Roblox Studio (Luau), from small jobs to complex systems. I pay close attention to code quality so every system runs reliably and fits cleanly into your project. Over three years of experience.',
    'hero.ctaPrimary': 'View work',
    'hero.ctaSecondary': 'Start a project',
    'hero.point1.title': '3 years',
    'hero.point1.text': 'In Roblox Studio',
    'hero.point2.title': 'Simulators',
    'hero.point2.text': 'Main specialization',
    'hero.point3.title': 'Luau',
    'hero.point3.text': 'Modular server-side code',

    'works.kicker': 'Work',
    'works.title': 'Built end to end. See every system in action',
    'works.lead':
      'Eight systems shown in action. Click a card to watch the video.',
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

    'works.placing.title': 'Placing system',
    'works.placing.alt': 'Object placement system with a live preview',
    'works.placing.text':
      'A placement system for positioning objects with a live preview before confirming the final location.',
    'works.placing.tags':
      '<em>Placement</em><em>Preview</em><em>Objects</em>',

    'works.stands.title': 'Stand and combo system',
    'works.stands.alt': 'Stand summoning and combo system in Roblox Studio',
    'works.stands.text':
      'Stand summoning, M1 chains with a combo counter, barrage, heavy punch and block. Damage is calculated on the server and the combo resets on timeout — visible right in the Studio test session.',
    'works.stands.tags':
      '<em>Combo</em><em>Server-side</em><em>Roblox Studio</em>',

    'works.loadout.title': 'Loadout switcher',
    'works.loadout.alt': 'Loadout switcher with automatic inventory updates',
    'works.loadout.text':
      'One-tap switching between item loadouts. The inventory updates automatically when a new option is selected.',
    'works.loadout.tags':
      '<em>Loadouts</em><em>Inventory</em><em>UI</em>',

    'works.rail.title': 'Rail system',
    'works.rail.alt': 'Rail movement system with slope-aware physics',
    'works.rail.text':
      'Players can mount rails and move along them forward or backward with adjustable speed. Physics accounts for slope: uphill movement slows down and needs more momentum, while downhill the player accelerates naturally.',
    'works.rail.tags':
      '<em>Movement</em><em>Physics</em><em>Rails</em>',

    'works.push.title': 'Push system',
    'works.push.alt': 'Robux push purchase system',
    'works.push.text':
      'Players can push another player for Robux: pressing the “Push” button (5 Robux) sends the target flying on impact.',
    'works.push.tags':
      '<em>Robux</em><em>Developer product</em><em>Physics</em>',

    'works.bomber.title': 'Bomber minigame',
    'works.bomber.alt': 'Top-down bomber survival minigame',
    'works.bomber.text':
      'One player becomes the bomber with a top-down view of the field. Each round they mark up to three tiles to detonate, giving everyone else 5 seconds to pick a tile they believe is safe. Whoever stands on a detonated tile is out, and the last survivor becomes the next bomber.',
    'works.bomber.tags':
      '<em>Minigame</em><em>Rounds</em><em>Top-down</em>',

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
      '<span>Not taking</span> FPS shooters, vehicles — cars and aircraft — and mechanics with complex geometry. For those you are better off with a specialist.',

    'payment.kicker': 'Payment',
    'payment.title': 'How payment works',
    'payment.step1': 'You place the order, I start building the system.',
    'payment.step2': 'When the work is finished, I send you a video walkthrough of how everything works.',
    'payment.step3': 'You share your feedback, and I make any tweaks.',
    'payment.step4': 'After the tweaks, you make the payment.',
    'payment.step4note': "You pay only after you've confirmed that everything works.",
    'payment.step5': 'After payment, I send you the .rbxl file or transfer the system into your place.',
    'payment.step6': 'You test it, and I make the final adjustments.',

    'faq.kicker': 'FAQ',
    'faq.title': 'Common questions',
    'faq.q1': 'Why are there only eight videos?',
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
    'faq.q6': 'Do you sign NDAs?',
    'faq.a6':
      "Yes, no problem. If you have your own template, send it over and we'll go through the details.",
    'faq.q7': 'Do you work for revenue share?',
    'faq.a7':
      'Usually no, I work on fixed payment. In some cases I consider it on an individual basis, if the project is worth it.',

    'contact.kicker': 'Contact',
    'contact.title': 'Let’s build the mechanic your game is missing',
    'contact.lead':
      'Message me on Discord — I reply within a day. Tell me what you need and attach a reference if you have one.',
    'contact.cta': 'Message on Discord',

    'footer.copy': '© 2026 VitalyWorks · Roblox Studio scripter · Discord: vitalyworks',

    'modal.title': 'Work',
  },

  ru: {
    'meta.title': 'VitalyWorks — скриптер Roblox Studio',
    'meta.description':
      'Скриптер Roblox Studio с опытом более трёх лет. Игровые системы любой сложности на Luau.',

    'a11y.sections': 'Разделы',
    'a11y.language': 'Выбор языка',
    'a11y.close': 'Закрыть',

    'nav.works': 'Работы',
    'nav.stack': 'Специализация',
    'nav.payment': 'Оплата',
    'nav.faq': 'Вопросы',
    'nav.cta': 'Написать в Discord',

    'hero.badge': 'Принимаю заказы',
    'hero.title': 'Разрабатываю <em>игровые системы для Roblox Studio</em> любой сложности',
    'hero.lead':
      'Разрабатываю игровые системы на Luau: от небольших задач до комплексных решений. Пишу стабильный и аккуратный код, который легко интегрируется в существующий проект. Более трёх лет опыта.',
    'hero.ctaPrimary': 'Посмотреть работы',
    'hero.ctaSecondary': 'Обсудить проект',
    'hero.point1.title': '3 года',
    'hero.point1.text': 'Разработки в Roblox Studio',
    'hero.point2.title': 'Симуляторы',
    'hero.point2.text': 'Основная специализация',
    'hero.point3.title': 'Luau',
    'hero.point3.text': 'Модульная серверная логика',

    'works.kicker': 'Работы',
    'works.title': 'Системы целиком — посмотрите их в действии',
    'works.lead':
      'В портфолио восемь систем. Нажмите на карточку, чтобы открыть видео.',
    'works.note':
      'Некоторые командные проекты закрылись или остались под NDA, поэтому записи не сохранились. Здесь представлены только системы, которые я разработал самостоятельно и могу показать целиком.',

    'works.combat.title': 'Комбат-система с абилками',
    'works.combat.alt': 'Комбат-система с абилками, кулдаунами и VFX',
    'works.combat.text':
      'Хотбар на четыре абилки с отдельными кулдаунами, полоса стамины и манекены с индикаторами урона и здоровья. Каждая абилка реализована отдельным модулем: анимация, хитбокс, эффекты и собственная фаза восстановления.',
    'works.combat.tags':
      '<em>Комбат</em><em>Кулдауны</em><em>Хитбоксы</em><em>VFX</em>',

    'works.moveset.title': 'Мувсет персонажа — Culling Grounds',
    'works.moveset.alt': 'Мувсет персонажа в проекте Culling Grounds',
    'works.moveset.text':
      'Полный набор абилок одного персонажа: рывок, блок, Cleave, Dismantle, Spider Web и Dissolve. Анимации, эффекты и хитбоксы работают через единую машину состояний, поэтому приёмы не конфликтуют между собой.',
    'works.moveset.tags':
      '<em>Мувсет</em><em>Машина состояний</em><em>Анимации</em>',

    'works.placing.title': 'Система размещения объектов',
    'works.placing.alt': 'Система размещения объектов с предпросмотром',
    'works.placing.text':
      'Система позволяет размещать объекты с предпросмотром их положения до подтверждения установки.',
    'works.placing.tags':
      '<em>Размещение</em><em>Предпросмотр</em><em>Объекты</em>',

    'works.stands.title': 'Система стенда и комбо',
    'works.stands.alt': 'Система призыва стенда и комбо в Roblox Studio',
    'works.stands.text':
      'Призыв стенда, цепочки M1 со счётчиком комбо, бараж, тяжёлый удар и блок. Урон рассчитывается на сервере, а счётчик комбо сбрасывается по тайм-ауту — всё это показано в тестовой сессии Roblox Studio.',
    'works.stands.tags':
      '<em>Комбо</em><em>Серверная логика</em><em>Roblox Studio</em>',

    'works.loadout.title': 'Loadout Switcher',
    'works.loadout.alt': 'Loadout Switcher с автоматическим обновлением инвентаря',
    'works.loadout.text':
      'Переключение между наборами снаряжения одним нажатием. При выборе нового набора инвентарь обновляется автоматически.',
    'works.loadout.tags':
      '<em>Наборы снаряжения</em><em>Инвентарь</em><em>UI</em>',

    'works.rail.title': 'Система движения по рельсам',
    'works.rail.alt': 'Система движения по рельсам с учётом уклона',
    'works.rail.text':
      'Игрок может двигаться по рельсам вперёд и назад с регулируемой скоростью. Система учитывает уклон: на подъёме скорость снижается и требуется больше инерции, а на спуске персонаж естественно ускоряется.',
    'works.rail.tags':
      '<em>Движение</em><em>Физика</em><em>Рельсы</em>',

    'works.push.title': 'Система толчка',
    'works.push.alt': 'Система покупки толчка другого игрока за Robux',
    'works.push.text':
      'Игрок может за 5 Robux толкнуть другого игрока: после нажатия кнопки «Push» цель отлетает при столкновении.',
    'works.push.tags':
      '<em>Robux</em><em>Developer Product</em><em>Физика</em>',

    'works.bomber.title': 'Мини-игра «Бомбер»',
    'works.bomber.alt': 'Мини-игра на выживание с видом сверху',
    'works.bomber.text':
      'Один игрок становится бомбером и видит поле сверху. В каждом раунде он отмечает до трёх клеток для взрыва, а остальные игроки за пять секунд выбирают безопасную клетку. Игрок на взорванной клетке выбывает, а последний выживший становится следующим бомбером.',
    'works.bomber.tags':
      '<em>Мини-игра</em><em>Раунды</em><em>Вид сверху</em>',

    'stack.kicker': 'Специализация',
    'stack.title': 'Системы, которые я разрабатываю',
    'stack.lead':
      'Каждую систему реализую отдельными модулями: её можно расширить или отключить, не затрагивая остальную игру.',
    'stack.simulators.title': 'Симуляторы',
    'stack.simulators.text':
      'Прогрессия, ребёрты, множители, зоны, петы и сбалансированная кривая роста.',
    'stack.combat.title': 'Комбат-системы',
    'stack.combat.text':
      'Мувсеты, комбо, кулдауны, хитбоксы, блоки и парирования.',
    'stack.saves.title': 'Сохранение данных',
    'stack.saves.text':
      'DataStore, профили игроков, миграции данных и защита прогресса от потери.',
    'stack.economy.title': 'Экономика',
    'stack.economy.text':
      'Валюты, магазины, крафт, гача, таблицы лидеров и лимитированные предметы.',
    'stack.ui.title': 'Интерфейсы',
    'stack.ui.text':
      'Интерфейсы инвентаря и улучшений, анимации UI и интеграция с серверной логикой.',
    'stack.security.title': 'Безопасность и оптимизация',
    'stack.security.text':
      'Серверная валидация для защиты от эксплойтов, профилирование и снижение нагрузки.',
    'stack.note':
      '<span>Не берусь за</span> FPS-шутеры, транспортные системы для автомобилей и авиации, а также механики со сложной геометрией. Для таких задач лучше обратиться к профильному разработчику.',

    'payment.kicker': 'Оплата',
    'payment.title': 'Как проходит оплата',
    'payment.step1': 'Вы совершаете заказ, я разрабатываю систему.',
    'payment.step2': 'После окончания работы я присылаю вам видео — детальный показ проделанной работы.',
    'payment.step3': 'Вы говорите своё мнение, мы вносим правки.',
    'payment.step4': 'После внесения правок вы производите оплату.',
    'payment.step4note': 'Оплачиваете только после того, как убедитесь, что всё работает.',
    'payment.step5': 'После оплаты я высылаю вам .rbxl-файл или переношу систему в ваш плейс.',
    'payment.step6': 'Вы тестируете, и я вношу финальные правки.',

    'faq.kicker': 'Вопросы',
    'faq.title': 'Частые вопросы',
    'faq.q1': 'Почему в портфолио только восемь видео?',
    'faq.a1':
      'Я участвовал во многих проектах, но большинство записей не сохранилось: некоторые игры закрылись, а часть материалов осталась у заказчиков. Показываю только работы, которые выполнил самостоятельно и могу продемонстрировать полностью.',
    'faq.q2': 'За какие задачи вы не берётесь?',
    'faq.a2':
      'Не берусь за FPS-шутеры, транспортные системы для автомобилей и авиации, а также механики со сложной геометрией. Разрабатываю симуляторы, комбат-системы, экономику, прогрессию и интерфейсы.',
    'faq.q3': 'На чём вы пишете?',
    'faq.a3':
      'На Luau в Roblox Studio. Использую модульную архитектуру; ключевая логика и проверки выполняются на сервере, чтобы механику нельзя было сломать со стороны клиента.',
    'faq.q4': 'Сколько времени занимает разработка?',
    'faq.a4':
      'Небольшая система занимает от одного до трёх дней, крупная механика или полноценный симулятор — от недели. После обсуждения задачи называю точные сроки.',
    'faq.q5': 'Что потребуется для начала работы?',
    'faq.a5':
      'Опишите задачу и пришлите референсы в Discord. Я оценю сроки и стоимость и предложу оптимальный вариант реализации.',
    'faq.q6': 'Подписываете ли вы NDA?',
    'faq.a6':
      'Да. Если у вас есть шаблон соглашения, пришлите его — обсудим детали.',
    'faq.q7': 'Работаете ли вы за долю от дохода?',
    'faq.a7':
      'Как правило, нет: я работаю за фиксированную оплату. В отдельных случаях готов рассмотреть долю от дохода, если проект мне интересен.',

    'contact.kicker': 'Контакты',
    'contact.title': 'Разработаю механику, которой не хватает вашей игре',
    'contact.lead':
      'Напишите мне в Discord — обычно отвечаю в течение дня. Опишите нужную механику и приложите референс, если он есть.',
    'contact.cta': 'Написать в Discord',

    'footer.copy': '© 2026 VitalyWorks · скриптер Roblox Studio · Discord: vitalyworks',

    'modal.title': 'Демонстрация работы',
  },
};

const DEFAULT_LANG = 'en';
const LANG_STORAGE_KEY = 'vitalyworks.lang';

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
