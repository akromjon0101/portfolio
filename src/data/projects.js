// Single source of truth for project cards and their detail pages.
// Non-text fields (slug, image, links, stack) live at the top level;
// every piece of user-facing copy is provided per language under `content`.
// Add a project here and it appears in <Projects /> and at
// /projects/:slug via <ProjectDetails />. The first entry is rendered
// as the large featured card.

export const projects = [
  {
    slug: 'mock-platform',
    year: '2026',
    domain: 'mock-platform.uz',
    image: '/projects/mock-platform.jpg',
    screenshots: [],
    stack: ['React 19', 'Vite', 'Node.js', 'Express', 'MongoDB Atlas', 'OpenAI GPT-4o', 'JWT'],
    demo: 'https://www.mock-platform.uz/',
    repoOnRequest: true,
    featured: true,
    content: {
      en: {
        title: 'Mock Platform',
        tagline: 'The next generation of the IELTS mock exam — AI examiner, instant band scores and progress tracking.',
        description:
          'My flagship production project: an IELTS practice platform with an AI examiner that scores Speaking recordings and Writing essays in seconds, plus a band-score trend chart and daily streaks. Live at mock-platform.uz.',
        role:
          'Sole full-stack developer — architecture, React frontend, Express/MongoDB backend, OpenAI integration, security headers and deployment.',
        overview:
          'Mock Platform is a live IELTS preparation product focused on instant, automated feedback. It provides a full four-section exam engine with an AI examiner and student analytics.',
        problem:
          'Manually scoring every Speaking recording and Writing essay does not scale, and students practicing alone get no exam-style feedback between sessions with a teacher.',
        solution:
          'Added an AI evaluation layer on top of the exam engine: Speaking answers are transcribed and analyzed for fluency, pronunciation and coherence; Writing is scored against band descriptors with actionable feedback — both within about 30 seconds of submission. A dashboard shows band-score trends and practice streaks.',
        features: [
          'AI examiner — Speaking and Writing scored automatically in ~30 seconds',
          'Band-score trend chart and daily practice streaks',
          'Full Listening, Reading, Writing, Speaking exam flow',
          'First test free, then guided practice with feedback history',
          'Hardened deployment — security headers, caching rules, JWT auth',
        ],
        challenges:
          'Keeping AI turnaround fast enough to feel instant while calibrating scores to real IELTS band descriptors, and shipping a secure, cache-correct production deployment.',
      },
      uz: {
        title: 'Mock Platform',
        tagline: 'IELTS mock-imtihonning keyingi avlodi — AI imtihon oluvchi, bir zumda band-baho va progress kuzatuvi.',
        description:
          'Mening asosiy production loyiham: AI imtihon oluvchili IELTS mashq platformasi — Speaking yozuvlari va Writing insholarini soniyalarda baholaydi, band-baho grafigi va kunlik ketma-ket kunlar (streak) bilan. mock-platform.uz manzilida jonli.',
        role:
          'Yagona full-stack dasturchi — arxitektura, React frontend, Express/MongoDB backend, OpenAI integratsiyasi, xavfsizlik sozlamalari va deploy.',
        overview:
          'Mock Platform — bir zumda, avtomatik izohga qaratilgan jonli IELTS tayyorgarlik mahsuloti. To‘rt bo‘limli to‘liq imtihon dvigateli, AI imtihon oluvchi va o‘quvchi analitikasi bilan.',
        problem:
          'Har bir Speaking yozuvi va Writing inshosini qo‘lda baholash ko‘lamlanmaydi, mustaqil mashq qilayotgan o‘quvchilar esa o‘qituvchi bilan darslar orasida imtihon uslubidagi izoh ololmaydi.',
        solution:
          'Imtihon dvigateli ustiga AI baholash qatlami qo‘shildi: Speaking javoblari transkripsiya qilinib ravonlik, talaffuz va izchillik bo‘yicha tahlil qilinadi; Writing band deskriptorlari bo‘yicha baholanadi — ikkalasi ham javob berilgach ~30 soniyada. Dashboard band-baho tendensiyasi va mashq streaklarini ko‘rsatadi.',
        features: [
          'AI imtihon oluvchi — Speaking va Writing ~30 soniyada avtomatik baholanadi',
          'Band-baho tendensiyasi grafigi va kunlik mashq streaklari',
          'To‘liq Listening, Reading, Writing, Speaking imtihon oqimi',
          'Birinchi test bepul, keyin izoh tarixi bilan yo‘naltirilgan mashq',
          'Mustahkamlangan deploy — xavfsizlik header’lari, keshlash qoidalari, JWT auth',
        ],
        challenges:
          'AI javobini bir zumdek tez saqlab, baholarni real IELTS band deskriptorlariga sozlash, hamda xavfsiz va kesh jihatidan to‘g‘ri production deploy chiqarish.',
      },
      ru: {
        title: 'Mock Platform',
        tagline: 'Новое поколение пробного IELTS — AI-экзаменатор, мгновенные band-оценки и отслеживание прогресса.',
        description:
          'Мой главный продакшн-проект: платформа подготовки к IELTS с AI-экзаменатором — оценивает записи Speaking и эссе Writing за секунды, с графиком динамики band и ежедневными streak-ами. Работает на mock-platform.uz.',
        role:
          'Единственный full-stack разработчик — архитектура, React-фронтенд, бэкенд на Express/MongoDB, интеграция OpenAI, заголовки безопасности и деплой.',
        overview:
          'Mock Platform — живой продукт подготовки к IELTS с упором на мгновенную автоматическую обратную связь. Полный движок экзамена из четырёх разделов с AI-экзаменатором и аналитикой для студента.',
        problem:
          'Ручная оценка каждой записи Speaking и эссе Writing не масштабируется, а студенты, занимающиеся самостоятельно, не получают экзаменационной обратной связи между занятиями с преподавателем.',
        solution:
          'Поверх движка экзамена добавлен слой AI-оценки: ответы Speaking транскрибируются и анализируются на беглость, произношение и связность; Writing оценивается по band-дескрипторам с конкретной обратной связью — и то и другое примерно за 30 секунд после отправки. Дашборд показывает динамику band и streak-и практики.',
        features: [
          'AI-экзаменатор — Speaking и Writing оцениваются автоматически за ~30 секунд',
          'График динамики band-оценки и ежедневные streak-и практики',
          'Полный поток экзамена Listening, Reading, Writing, Speaking',
          'Первый тест бесплатно, затем направляемая практика с историей обратной связи',
          'Усиленный деплой — заголовки безопасности, правила кэширования, JWT-аутентификация',
        ],
        challenges:
          'Сохранить скорость ответа AI на уровне «мгновенно», калибруя оценки под реальные band-дескрипторы IELTS, и выпустить безопасный, корректный по кэшу продакшн-деплой.',
      },
    },
  },

  {
    slug: 'harvard-school',
    year: '2025 — now',
    domain: 'harvard-school.uz',
    image: '/projects/harvard-school.jpg',
    screenshots: [],
    stack: ['React 19', 'Vite', 'React Router', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OpenAI GPT-4o'],
    demo: 'https://www.harvard-school.uz/',
    repoOnRequest: true,
    featured: true,
    content: {
      en: {
        title: 'Harvard School',
        tagline: 'A live Computer-Based IELTS mock-exam portal, used by real students preparing for the exam.',
        description:
          'A full CBT IELTS mock-exam platform with Listening, Reading, Writing and Speaking, plus AI band-score feedback. Live in production at harvard-school.uz.',
        role: 'Sole full-stack developer — product design, React frontend, Express/MongoDB API, AI grading integration, deployment and maintenance.',
        overview:
          'Harvard School is a complete Computer-Based IELTS (CBT) practice platform that recreates the real exam interface. It is deployed to a live domain and actively used by students, not a portfolio demo.',
        problem:
          'Students preparing for IELTS need a realistic, full-length practice environment with real timing pressure and exam-style sections, available anytime — not limited to a physical test center.',
        solution:
          'Built and shipped a full exam portal covering all four IELTS sections with an exam-accurate UI, a student practice flow, an admin panel to build and grade exams, and GPT-4o powered scoring for Writing and Speaking with band feedback.',
        features: [
          'Full CBT exam interface — Listening, Reading, Writing, Speaking with official-style layout',
          'AI grading: Writing and Speaking scored against IELTS band descriptors with feedback',
          'In-exam text highlighting during Reading, Listening and Writing',
          'Admin panel to create exams, manage users and review submissions',
          'Printable IELTS TRF-style result report',
          'JWT authentication with student / admin role separation',
        ],
        challenges:
          'Taking the project from a local build to a stable live product that handles real users and real exam sessions reliably, and calibrating AI band scores to track official IELTS descriptors closely enough to be trustworthy.',
      },
      uz: {
        title: 'Harvard School',
        tagline: 'Jonli Computer-Based IELTS mock-imtihon portali — imtihonga tayyorlanayotgan real o‘quvchilar foydalanadi.',
        description:
          'Listening, Reading, Writing va Speaking bo‘limlari hamda AI band-baho izohi bilan to‘liq CBT IELTS mock-imtihon platformasi. harvard-school.uz manzilida production’da jonli.',
        role:
          'Yagona full-stack dasturchi — mahsulot dizayni, React frontend, Express/MongoDB API, AI baholashni integratsiya qilish, deploy va texnik xizmat.',
        overview:
          'Harvard School — haqiqiy imtihon interfeysini takrorlaydigan to‘liq Computer-Based IELTS (CBT) mashq platformasi. U jonli domenga chiqarilgan va o‘quvchilar tomonidan faol ishlatiladi, portfolio uchun demo emas.',
        problem:
          'IELTS’ga tayyorlanayotganlar real vaqt bosimi va imtihon uslubidagi bo‘limlar bilan, istalgan vaqtda ochiladigan real, to‘liq mashq muhitiga muhtoj — faqat imtihon markazi bilan cheklanmagan.',
        solution:
          'To‘rtala IELTS bo‘limini qamrab olgan to‘liq imtihon portali: imtihonga aniq mos interfeys, o‘quvchi mashq oqimi, imtihon tuzish va baholash uchun admin panel hamda Writing va Speaking uchun GPT-4o asosidagi band-baho va izoh.',
        features: [
          'To‘liq CBT imtihon interfeysi — Listening, Reading, Writing, Speaking rasmiy uslubda',
          'AI baholash: Writing va Speaking IELTS band deskriptorlari bo‘yicha baholanadi va izoh beriladi',
          'Reading, Listening va Writing paytida matnni belgilash (highlight)',
          'Imtihon yaratish, foydalanuvchilarni boshqarish va javoblarni ko‘rish uchun admin panel',
          'Chop etsa bo‘ladigan IELTS TRF uslubidagi natija hisoboti',
          'JWT autentifikatsiya, o‘quvchi / admin rollarini ajratish',
        ],
        challenges:
          'Loyihani lokal buildlardan real foydalanuvchilar va real imtihon sessiyalarini barqaror ko‘taradigan jonli mahsulotga olib chiqish, hamda AI band-baholarni rasmiy IELTS deskriptorlariga yetarlicha yaqin sozlash.',
      },
      ru: {
        title: 'Harvard School',
        tagline: 'Живой портал компьютерных пробных экзаменов IELTS (CBT), которым пользуются реальные студенты.',
        description:
          'Полноценная CBT-платформа пробного IELTS с Listening, Reading, Writing и Speaking и AI-оценкой по band-дескрипторам. Работает в продакшене на harvard-school.uz.',
        role:
          'Единственный full-stack разработчик — дизайн продукта, React-фронтенд, API на Express/MongoDB, интеграция AI-оценки, деплой и поддержка.',
        overview:
          'Harvard School — это полноценная платформа подготовки к компьютерному IELTS (CBT), воспроизводящая интерфейс настоящего экзамена. Она развёрнута на живом домене и активно используется студентами, это не демо.',
        problem:
          'Тем, кто готовится к IELTS, нужна реалистичная полноформатная среда практики с настоящим ограничением по времени и экзаменационными разделами, доступная в любое время, а не только в центре тестирования.',
        solution:
          'Разработан и выпущен полный экзаменационный портал по всем четырём разделам IELTS: точный интерфейс экзамена, поток практики для студента, админ-панель для создания и проверки экзаменов и оценка Writing и Speaking на GPT-4o с обратной связью по band.',
        features: [
          'Полный интерфейс CBT-экзамена — Listening, Reading, Writing, Speaking в официальном стиле',
          'AI-оценка: Writing и Speaking оцениваются по band-дескрипторам IELTS с обратной связью',
          'Выделение текста во время Reading, Listening и Writing',
          'Админ-панель для создания экзаменов, управления пользователями и проверки ответов',
          'Печатный отчёт о результате в стиле IELTS TRF',
          'JWT-аутентификация с разделением ролей студент / админ',
        ],
        challenges:
          'Довести проект от локальной сборки до стабильного живого продукта, надёжно выдерживающего реальных пользователей и экзаменационные сессии, и откалибровать AI-оценки так, чтобы они достаточно точно соответствовали официальным дескрипторам IELTS.',
      },
    },
  },

  {
    slug: 'education-crm',
    year: '2026',
    domain: 'education-crm.uz',
    image: '/projects/education-crm.jpg',
    screenshots: [],
    stack: ['React 18', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'Recharts'],
    demo: 'https://education-crm.uz/',
    github: 'https://github.com/akromjon0101/crm',
    featured: true,
    content: {
      en: {
        title: 'EduCRM',
        tagline: 'One dashboard for students, teachers, groups, attendance, payments and finance.',
        description:
          'A full-stack CRM for learning centers: manage students, teachers and groups, track attendance and schedules, and see income, salary and profit at a glance. Live at education-crm.uz with EN / UZ / RU.',
        role:
          'Sole full-stack developer — data model, React + Tailwind dashboards, Express API, PostgreSQL schema, auth and VPS deployment.',
        overview:
          'EduCRM replaces the scattered spreadsheets and chat messages that small education centers run on with a single system for enrollment, scheduling, attendance and billing, including a finance dashboard.',
        problem:
          'Small centers struggle to track who paid, who attended, which teacher is free, and whether the month is actually profitable — the data is spread across spreadsheets and messengers.',
        solution:
          'Designed a relational model around students, teachers, groups and payments, then built role-based dashboards on an Express/PostgreSQL API: searchable tables, group scheduling, per-session attendance, payment history with outstanding balances, and monthly income / salary / profit charts.',
        features: [
          'Student, teacher and group management with searchable, filterable tables',
          'Group scheduling and per-session attendance tracking',
          'Payments, outstanding balances and debtor list',
          'Finance dashboard — monthly income, salary expense, net profit and margin',
          'Leads pipeline and archive',
          'Role-based access (superadmin / staff) and a built-in EN / UZ / RU switch',
        ],
        challenges:
          'Modeling the relationships between students, groups, schedules and payments so that one change — a student switching groups mid-month — stays consistent everywhere, including the finance totals.',
      },
      uz: {
        title: 'EduCRM',
        tagline: 'O‘quvchilar, o‘qituvchilar, guruhlar, davomat, to‘lovlar va moliya — bitta boshqaruv panelida.',
        description:
          'O‘quv markazlari uchun full-stack CRM: o‘quvchi, o‘qituvchi va guruhlarni boshqarish, davomat va jadvalni kuzatish, daromad, maosh va sof foydani bir qarashda ko‘rish. education-crm.uz manzilida jonli, EN / UZ / RU bilan.',
        role:
          'Yagona full-stack dasturchi — ma’lumot modeli, React + Tailwind panellari, Express API, PostgreSQL sxema, autentifikatsiya va VPS deploy.',
        overview:
          'EduCRM kichik o‘quv markazlari ishlatadigan tarqoq jadvallar va chat xabarlarini enrollment, jadval, davomat va hisob-kitob uchun bitta tizimga almashtiradi, moliya paneli bilan birga.',
        problem:
          'Kichik markazlarga kim to‘lagani, kim qatnashgani, qaysi o‘qituvchi bo‘shligi va oy foydali bo‘lganmi-yo‘qmi kuzatish qiyin — ma’lumot jadvallar va messenjerlarga tarqalgan.',
        solution:
          'O‘quvchi, o‘qituvchi, guruh va to‘lovlar atrofida relatsion model tuzildi, keyin Express/PostgreSQL API ustida rolga asoslangan panellar qurildi: qidiriladigan jadvallar, guruh jadvali, dars bo‘yicha davomat, qarzlar bilan to‘lov tarixi va oylik daromad / maosh / foyda grafiklari.',
        features: [
          'O‘quvchi, o‘qituvchi va guruhlarni qidirish va filtrlash mumkin bo‘lgan jadvallarda boshqarish',
          'Guruh jadvali va dars bo‘yicha davomatni kuzatish',
          'To‘lovlar, qolgan qarzlar va qarzdorlar ro‘yxati',
          'Moliya paneli — oylik daromad, maosh xarajati, sof foyda va marja',
          'Lidlar (leads) oqimi va arxiv',
          'Rolga asoslangan kirish (superadmin / xodim) va o‘rnatilgan EN / UZ / RU almashtirgich',
        ],
        challenges:
          'O‘quvchi, guruh, jadval va to‘lovlar orasidagi bog‘lanishlarni shunday modellashtirishki, bitta o‘zgarish — o‘quvchining oy o‘rtasida guruh almashtirishi — hamma joyda, jumladan moliya jamlarida ham izchil qolsin.',
      },
      ru: {
        title: 'EduCRM',
        tagline: 'Один дашборд для студентов, преподавателей, групп, посещаемости, платежей и финансов.',
        description:
          'Full-stack CRM для учебных центров: управление студентами, преподавателями и группами, учёт посещаемости и расписания, доход, зарплата и чистая прибыль с первого взгляда. Работает на education-crm.uz с EN / UZ / RU.',
        role:
          'Единственный full-stack разработчик — модель данных, дашборды на React + Tailwind, API на Express, схема PostgreSQL, аутентификация и деплой на VPS.',
        overview:
          'EduCRM заменяет разрозненные таблицы и переписку, на которых держатся небольшие учебные центры, единой системой для зачисления, расписания, посещаемости и биллинга, включая финансовый дашборд.',
        problem:
          'Небольшим центрам трудно отслеживать, кто заплатил, кто пришёл, какой преподаватель свободен и прибылен ли месяц — данные разбросаны по таблицам и мессенджерам.',
        solution:
          'Спроектирована реляционная модель вокруг студентов, преподавателей, групп и платежей, затем на API Express/PostgreSQL построены ролевые дашборды: таблицы с поиском, расписание групп, посещаемость по занятиям, история платежей с задолженностями и графики дохода / зарплаты / прибыли по месяцам.',
        features: [
          'Управление студентами, преподавателями и группами в таблицах с поиском и фильтрами',
          'Расписание групп и учёт посещаемости по каждому занятию',
          'Платежи, остаточные задолженности и список должников',
          'Финансовый дашборд — доход за месяц, расходы на зарплату, чистая прибыль и маржа',
          'Воронка лидов и архив',
          'Ролевой доступ (суперадмин / сотрудник) и встроенный переключатель EN / UZ / RU',
        ],
        challenges:
          'Смоделировать связи между студентами, группами, расписанием и платежами так, чтобы одно изменение — переход студента в другую группу в середине месяца — оставалось согласованным везде, включая финансовые итоги.',
      },
    },
  },

  {
    slug: 'dream-tour',
    year: '2024',
    domain: 'DreamTour',
    image: '/projects/dream-tour.jpg',
    screenshots: [],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'SEO', 'Schema.org', 'GitHub Pages'],
    demo: 'https://akromjon0101.github.io/Dream-tour/',
    github: 'https://github.com/akromjon0101/Dream-tour',
    featured: false,
    content: {
      en: {
        title: 'Dream Tour',
        tagline: 'A marketing site for a travel agency — fast, responsive and built for search visibility.',
        description:
          'A responsive landing site for a Tashkent travel agency operating since 2022: tour packages, destinations, search and contact, with structured data and SEO baked in.',
        role:
          'Frontend developer — layout, responsive CSS, vanilla-JS interactions, SEO markup (meta, sitemap, JSON-LD) and deployment to GitHub Pages.',
        overview:
          'Dream Tour is a static marketing website for a travel agency, focused on loading fast on mobile and being discoverable by search engines and rich results.',
        problem:
          'A small travel agency needed a credible online presence that loads instantly on phones and shows up properly in search, without a heavy CMS.',
        solution:
          'Built a hand-coded responsive site with a hero search, tour packages, destination sections and a booking call-to-action, plus TravelAgency JSON-LD structured data, Open Graph tags, a sitemap and robots.txt.',
        features: [
          'Fully responsive layout from mobile to desktop',
          'Hero destination search and tour package sections',
          'SEO: semantic HTML, meta / Open Graph tags, sitemap, robots.txt',
          'Schema.org TravelAgency structured data for rich results',
          'Zero-dependency vanilla JavaScript, deployed on GitHub Pages',
        ],
        challenges:
          'Getting strong SEO and fast mobile performance out of a purely static, framework-free build while keeping the layout clean and easy for the agency to update.',
      },
      uz: {
        title: 'Dream Tour',
        tagline: 'Sayyohlik agentligi uchun marketing sayti — tez, moslashuvchan va qidiruvda ko‘rinishga qurilgan.',
        description:
          '2022 yildan beri ishlayotgan Toshkentdagi sayyohlik agentligi uchun moslashuvchan landing sayt: tur paketlari, yo‘nalishlar, qidiruv va aloqa, tuzilmali ma’lumot va SEO bilan.',
        role:
          'Frontend dasturchi — tuzilma, moslashuvchan CSS, vanilla-JS o‘zaro ta’sirlar, SEO belgilash (meta, sitemap, JSON-LD) va GitHub Pages’ga deploy.',
        overview:
          'Dream Tour — sayyohlik agentligi uchun statik marketing sayti; mobil qurilmada tez yuklanishi va qidiruv tizimlarida yaxshi ko‘rinishiga qaratilgan.',
        problem:
          'Kichik sayyohlik agentligiga telefonlarda bir zumda yuklanadigan va qidiruvda to‘g‘ri chiqadigan ishonchli onlayn ko‘rinish kerak edi — og‘ir CMS’siz.',
        solution:
          'Qo‘lda yozilgan moslashuvchan sayt: hero qidiruv, tur paketlari, yo‘nalish bo‘limlari va bron qilish tugmasi, hamda TravelAgency JSON-LD tuzilmali ma’lumot, Open Graph teglar, sitemap va robots.txt.',
        features: [
          'Mobil’dan desktop’gacha to‘liq moslashuvchan tuzilma',
          'Hero yo‘nalish qidiruvi va tur paketlari bo‘limlari',
          'SEO: semantik HTML, meta / Open Graph teglar, sitemap, robots.txt',
          'Rich natijalar uchun Schema.org TravelAgency tuzilmali ma’lumot',
          'Bog‘liqliksiz vanilla JavaScript, GitHub Pages’da joylashtirilgan',
        ],
        challenges:
          'Sof statik, freymvorksiz build’dan kuchli SEO va tez mobil ishlashga erishish, shu bilan birga tuzilmani toza va agentlik uchun yangilash oson saqlash.',
      },
      ru: {
        title: 'Dream Tour',
        tagline: 'Маркетинговый сайт турагентства — быстрый, адаптивный и заточенный под поиск.',
        description:
          'Адаптивный лендинг для ташкентского турагентства, работающего с 2022 года: турпакеты, направления, поиск и контакты, со структурированными данными и SEO.',
        role:
          'Frontend-разработчик — вёрстка, адаптивный CSS, взаимодействия на ванильном JS, SEO-разметка (meta, sitemap, JSON-LD) и деплой на GitHub Pages.',
        overview:
          'Dream Tour — статический маркетинговый сайт турагентства, ориентированный на быструю загрузку на мобильных и хорошую видимость в поисковиках и rich-результатах.',
        problem:
          'Небольшому турагентству нужно было убедительное присутствие в сети, которое мгновенно грузится на телефонах и корректно отображается в поиске, без тяжёлой CMS.',
        solution:
          'Свёрстан вручную адаптивный сайт с hero-поиском, турпакетами, разделами направлений и призывом к бронированию, плюс структурированные данные TravelAgency (JSON-LD), теги Open Graph, sitemap и robots.txt.',
        features: [
          'Полностью адаптивная вёрстка от мобильных до десктопа',
          'Hero-поиск направлений и разделы турпакетов',
          'SEO: семантический HTML, meta / Open Graph теги, sitemap, robots.txt',
          'Структурированные данные Schema.org TravelAgency для rich-результатов',
          'Ванильный JavaScript без зависимостей, развёрнут на GitHub Pages',
        ],
        challenges:
          'Добиться сильного SEO и быстрой мобильной загрузки на чисто статической сборке без фреймворков, сохранив вёрстку чистой и удобной для обновления агентством.',
      },
    },
  },
]

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug)
