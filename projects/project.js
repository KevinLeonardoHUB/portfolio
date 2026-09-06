var projects = {
  portfolio: {
    title: { pt: "Portfólio Pessoal", en: "Personal Portfolio" },
    eyebrow: {
      pt: "Web · Identidade profissional",
      en: "Web · Professional identity",
    },
    summary: {
      pt: "Um portfólio responsivo e bilingue para apresentar competências, experiência, projetos e contactos numa interface pessoal.",
      en: "A responsive bilingual portfolio presenting skills, experience, projects and contact details through a personal interface.",
    },
    image: "../assets/Portfolio.png",
    status: { pt: "Em evolução", en: "Evolving" },
    year: "2026",
    version: "HTML/CSS/JS",
    about: {
      pt: "Este é o próprio site que estás a visitar. Foi construído sem frameworks, com páginas em português e inglês, layout responsivo e interações implementadas em JavaScript.",
      en: "This is the website you are currently visiting. It was built without frameworks, with Portuguese and English pages, a responsive layout and JavaScript interactions.",
    },
    features: {
      pt: [
        "Versões em português e inglês",
        "Grelha responsiva de projetos e competências",
        "Animações e navegação suave em JavaScript",
        "Publicação através do GitHub Pages",
      ],
      en: [
        "Portuguese and English versions",
        "Responsive projects and skills grid",
        "JavaScript animations and smooth navigation",
        "Published through GitHub Pages",
      ],
    },
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    challenge: {
      pt: "Organizar informação profissional variada sem perder clareza, mantendo a experiência rápida e consistente em computador e telemóvel.",
      en: "Organising varied professional information without losing clarity, while keeping the experience fast and consistent across desktop and mobile.",
    },
    flow: [
      "Conteúdo",
      "HTML semântico",
      "Layout responsivo",
      "Interações JS",
      "GitHub Pages",
    ],
    github: "https://github.com/KevinLeonardoHUB/portfolio",
  },
  xpc: {
    title: { pt: "XPC Loja Online", en: "XPC Online Shop" },
    eyebrow: {
      pt: "Full-stack · Projeto de estágio",
      en: "Full stack · Internship project",
    },
    summary: {
      pt: "Loja online em PHP com autenticação, carrinho, checkout, gestão de stock, área de cliente e painel administrativo.",
      en: "A PHP online shop with authentication, cart, checkout, stock management, customer area and administration panel.",
    },
    image: "../assets/Loja XPC.png",
    status: { pt: "Versão funcional", en: "Functional version" },
    year: "2026",
    version: "PHP 8+",
    about: {
      pt: "Projeto comercial desenvolvido durante um estágio na XPC Informática. O sistema cobre o percurso de compra e fornece ao administrador ferramentas para gerir produtos, categorias, serviços, pedidos e utilizadores.",
      en: "Commercial project developed during an internship at XPC Informática. It covers the purchasing journey and gives administrators tools to manage products, categories, services, orders and users.",
    },
    features: {
      pt: [
        "Registo, login e recuperação de palavra-passe",
        "Carrinho com atualização de quantidades",
        "Checkout, criação de pedidos e controlo de stock",
        "Painel administrativo e pedidos de serviços",
        "Upload validado de imagens",
      ],
      en: [
        "Registration, login and password recovery",
        "Cart with quantity updates",
        "Checkout, order creation and stock control",
        "Admin panel and service requests",
        "Validated image uploads",
      ],
    },
    tech: ["PHP 8", "HTML", "CSS", "JavaScript", "PHPMailer", "JSON"],
    challenge: {
      pt: "Construir um fluxo completo de e-commerce com permissões de cliente/administrador e persistência simples em JSON. A versão atual fecha o pedido internamente e não integra um gateway de pagamento.",
      en: "Building a complete e-commerce flow with customer/admin permissions and simple JSON persistence. The current version completes orders internally and does not integrate a payment gateway.",
    },
    flow: ["Catálogo", "Carrinho", "Checkout", "Pedido", "Stock/Admin"],
    github: "https://github.com/KevinLeonardoHUB/xpc",
    live: "https://lojaxpc.great-site.net/",
  },
  armiac: {
    title: {
      pt: "ARMIAC — Mão Robótica Inteligente",
      en: "ARMIAC — Intelligent Robotic Hand",
    },
    eyebrow: {
      pt: "PAP 2025/2026 · Robótica",
      en: "Final Project 2025/2026 · Robotics",
    },
    summary: {
      pt: "Protótipo funcional de mão robótica articulada, impressa em 3D e controlada por uma app Flutter através de Wi‑Fi, HTTP e comandos de voz.",
      en: "A functional articulated robotic-hand prototype, 3D printed and controlled by a Flutter app through Wi-Fi, HTTP and voice commands.",
    },
    image: "../assets/armiac-cover.png",
    status: { pt: "PAP concluída", en: "PAP completed" },
    year: "2025/2026",
    version: "App 1.1.7",
    about: {
      pt: "O ARMIAC integra desenvolvimento móvel, sistemas embebidos, eletrónica, redes e fabrico 3D. A app Android envia pedidos HTTP ao ESP32, que comunica por I2C com o PCA9685 e transforma os comandos em sinais PWM para os servomotores.",
      en: "ARMIAC integrates mobile development, embedded systems, electronics, networking and 3D manufacturing. The Android app sends HTTP requests to the ESP32, which communicates over I2C with the PCA9685 and turns commands into PWM signals for the servomotors.",
    },
    features: {
      pt: [
        "Controlo individual dos dedos e antebraço",
        "Abrir/fechar a mão e gestos predefinidos",
        "Comandos de voz em português",
        "Interface bilingue, tutorial e estado da ligação",
        "Estrutura articulada impressa em PLA",
      ],
      en: [
        "Individual finger and forearm control",
        "Open/close hand and predefined gestures",
        "Portuguese voice commands",
        "Bilingual interface, tutorial and connection status",
        "Articulated PLA-printed structure",
      ],
    },
    tech: [
      "Flutter",
      "Dart",
      "C++/Arduino",
      "ESP32",
      "PCA9685",
      "Wi‑Fi/HTTP",
      "I2C/PWM",
      "3D Printing",
    ],
    challenge: {
      pt: "Foi necessário aprender Flutter e Dart, calibrar servos, estabilizar a alimentação, ajustar tendões e peças mecânicas e integrar software com hardware real. A visão futura inclui uma segunda mão e investigação de gestos de língua gestual, algo ainda não implementado.",
      en: "The work required learning Flutter and Dart, calibrating servos, stabilising power, adjusting tendons and mechanical parts, and integrating software with real hardware. The future vision includes a second hand and sign-language gesture research, which is not currently implemented.",
    },
    flow: [
      "App Flutter",
      "Wi‑Fi / HTTP",
      "ESP32",
      "I2C",
      "PCA9685",
      "PWM",
      "Servos",
      "Mão",
    ],
    github: "https://github.com/KevinLeonardoHUB/armiac-pap",
    live: "https://www.youtube.com/watch?v=DZ1Mz6-E2Yc&t=1s",
  },
  clinica: {
    title: { pt: "Clínica Escolar", en: "School Clinic" },
    eyebrow: {
      pt: "Full-stack · Projeto escolar",
      en: "Full stack · School project",
    },
    summary: {
      pt: "Sistema web para alunos criarem conta, confirmarem o email e gerirem marcações numa clínica escolar.",
      en: "A web system where students create accounts, verify email and manage appointments at a school clinic.",
    },
    image: "../assets/clinica_escolar.png",
    status: { pt: "Projeto concluído", en: "Completed project" },
    year: "2026",
    version: "PHP/MySQL",
    about: {
      pt: "Aplicação full-stack organizada em páginas públicas e uma API PHP. Os horários disponíveis são gerados pelo sistema e os dados de utilizadores e consultas são guardados em MySQL.",
      en: "A full-stack application organised into public pages and a PHP API. Available schedules are generated by the system, while user and appointment data is stored in MySQL.",
    },
    features: {
      pt: [
        "Registo, login e logout de alunos",
        "Verificação de endereço de email",
        "Marcação e cancelamento de consultas",
        "Listagem das consultas do aluno",
        "Geração de horários e emails com PHPMailer",
      ],
      en: [
        "Student registration, login and logout",
        "Email-address verification",
        "Appointment booking and cancellation",
        "Student appointment list",
        "Schedule generation and PHPMailer emails",
      ],
    },
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "PHPMailer", "XAMPP"],
    challenge: {
      pt: "Ligar autenticação, horários, marcações e notificações por email, mantendo credenciais de base de dados e SMTP configuráveis por variáveis de ambiente.",
      en: "Connecting authentication, schedules, bookings and email notifications while keeping database and SMTP credentials configurable through environment variables.",
    },
    flow: ["Aluno", "Autenticação", "Horários", "Marcação", "MySQL", "Email"],
    github: "https://github.com/KevinLeonardoHUB/clinica-escolar",
  },
  gestao: {
    title: { pt: "Gestão de Alunos", en: "Student Management" },
    eyebrow: {
      pt: "C · Aplicação de terminal",
      en: "C · Terminal application",
    },
    summary: {
      pt: "Primeiro projeto em C: uma aplicação de terminal para professores gerirem alunos, disciplinas e notas.",
      en: "First C project: a terminal application for teachers to manage students, subjects and grades.",
    },
    image: "../assets/C.png",
    status: { pt: "Projeto concluído", en: "Completed project" },
    year: "2026",
    version: "C / GCC",
    about: {
      pt: "O programa utiliza estruturas, arrays, funções e manipulação de ficheiros. Separa declarações e implementação entre funcoes.h, funcoes.c e main.c.",
      en: "The program uses structures, arrays, functions and file handling. It separates declarations and implementation across funcoes.h, funcoes.c and main.c.",
    },
    features: {
      pt: [
        "Registo e login de professores",
        "Associação do professor a uma disciplina",
        "Adição de alunos à turma",
        "Registo e alteração de notas",
        "Cálculo de médias e persistência local",
      ],
      en: [
        "Teacher registration and login",
        "Teacher-to-subject association",
        "Adding students to a class",
        "Recording and changing grades",
        "Average calculation and local persistence",
      ],
    },
    tech: ["C", "GCC", "Structs", "Arrays", "File I/O"],
    challenge: {
      pt: "Modelar dados de professores e alunos em C e persistir o estado num ficheiro local, aplicando pela primeira vez uma organização modular do código.",
      en: "Modelling teacher and student data in C and persisting state to a local file, while applying modular code organisation for the first time.",
    },
    flow: ["Professor", "Login", "Turma", "Notas", "Média", "Ficheiro local"],
    github: "https://github.com/KevinLeonardoHUB/gestao_alunos",
  },
};

// Read the project selected in the HTML and its requested language.
var data = projects[document.body.getAttribute("data-project")];
var lang = new URLSearchParams(location.search).get("lang");
if (lang !== "en") lang = "pt";
var english = lang === "en";

function setText(selector, text) {
  document.querySelector(selector).textContent = text;
}
function addItems(selector, items, tagName, arrows) {
  var container = document.querySelector(selector);
  for (var i = 0; i < items.length; i++) {
    if (arrows && i > 0) {
      var arrow = document.createElement("b");
      arrow.textContent = "→";
      container.appendChild(arrow);
    }
    var item = document.createElement(tagName);
    item.textContent = items[i];
    container.appendChild(item);
  }
}

document.documentElement.lang = english ? "en" : "pt-PT";
document.title = data.title[lang] + " | Quévin Tavares";
setText("h1", data.title[lang]);
setText(".eyebrow", data.eyebrow[lang]);
setText(".lead", data.summary[lang]);
var cover = document.querySelector(".hero-image");
cover.src = data.image;
cover.alt = data.title[lang];
setText("[data-fact=status]", data.status[lang]);
setText("[data-fact=year]", data.year);
setText("[data-fact=version]", data.version);
setText("[data-copy=about]", data.about[lang]);
setText("[data-copy=challenge]", data.challenge[lang]);
addItems("[data-list=features]", data.features[lang], "li", false);
addItems("[data-list=tech]", data.tech, "span", false);
addItems("[data-list=flow]", data.flow, "strong", true);

var labels = {
  status: english ? "Status" : "Estado",
  year: english ? "Year" : "Ano",
  version: english ? "Version" : "Versão",
  about: english ? "About the project" : "Sobre o projeto",
  features: english ? "Features" : "Funcionalidades",
  tech: english ? "Technologies" : "Tecnologias",
  challenge: english ? "Challenges and learning" : "Desafios e aprendizagem",
  flow: english ? "How it works" : "Como funciona",
};
var headings = document.querySelectorAll("[data-label], [data-title]");
for (var i = 0; i < headings.length; i++) {
  var key =
    headings[i].getAttribute("data-label") ||
    headings[i].getAttribute("data-title");
  headings[i].textContent = labels[key];
}
var back = document.querySelector(".back-link");
back.textContent = english ? "← Back to portfolio" : "← Voltar ao portfólio";
back.href = english ? "../en.html#projects" : "../index.html#projetos";
var languageLink = document.querySelector(".language-link");
languageLink.textContent = english ? "PT" : "EN";
languageLink.href = english ? "?lang=pt" : "?lang=en";
var repo = document.querySelector("[data-link=repo]");
repo.href = data.github;
repo.textContent = english ? "View on GitHub" : "Ver no GitHub";
var live = document.querySelector("[data-link=live]");
if (data.live) {
  live.href = data.live;
  if (document.body.getAttribute("data-project") === "armiac") {
    live.textContent = english ? "Watch demonstration" : "Ver demonstração";
  } else {
    live.textContent = english ? "Visit website" : "Visitar site";
  }
} else {
  live.remove();
}
setText(
  "footer p",
  english
    ? "© 2026 A project by Quévin Tavares"
    : "© 2026 Projeto de Quévin Tavares",
);

// Show the other projects as image cards, matching the home page.
var related = document.createElement("nav");
related.className = "container related-projects";
related.setAttribute("aria-label", english ? "Other projects" : "Outros projetos");
var heading = document.createElement("h2");
heading.textContent = english ? "Explore other projects" : "Explorar outros projetos";
related.appendChild(heading);
var grid = document.createElement("div");
grid.className = "related-projects-grid";
var pages = { portfolio: "portfolio", xpc: "xpc", armiac: "armiac", clinica: "clinica", gestao: "gestao-alunos" };
for (var projectId in pages) {
  if (projectId === document.body.getAttribute("data-project")) continue;
  var item = document.createElement("a");
  item.className = "related-project-card";
  item.href = pages[projectId] + ".html" + (english ? "?lang=en" : "");
  var image = document.createElement("img");
  image.src = projects[projectId].image;
  image.alt = projects[projectId].title[lang];
  var content = document.createElement("div");
  var title = document.createElement("strong");
  title.textContent = projects[projectId].title[lang];
  var summary = document.createElement("small");
  summary.textContent = projects[projectId].summary[lang];
  content.appendChild(title);
  content.appendChild(summary);
  item.appendChild(image);
  item.appendChild(content);
  grid.appendChild(item);
}
related.appendChild(grid);
document.querySelector("main").appendChild(related);
