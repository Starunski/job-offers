(function () {
  let selectedSkills = [];

  const allJobsOffersContainer = document.getElementsByClassName(
    "all-job-offers"
  )[0];
  const searchBlock = document.getElementsByClassName("search-block")[0];
  const allOffers = [
    {
      id: 1,
      company: "Photosnap",
      logo: "./images/photosnap.svg",
      new: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      company: "Manage",
      logo: "./images/manage.svg",
      new: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"],
    },
    {
      id: 3,
      company: "Account",
      logo: "./images/account.svg",
      new: true,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
    {
      id: 4,
      company: "MyHome",
      logo: "./images/myhome.svg",
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
    },
    {
      id: 5,
      company: "Loop Studios",
      logo: "./images/loop-studios.svg",
      new: false,
      featured: false,
      position: "Software Engineer",
      role: "FullStack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["Ruby", "Sass"],
    },
    {
      id: 6,
      company: "FaceIt",
      logo: "./images/faceit.svg",
      new: false,
      featured: false,
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      tools: ["RoR"],
    },
    {
      id: 7,
      company: "Shortly",
      logo: "./images/shortly.svg",
      new: false,
      featured: false,
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"],
    },
    {
      id: 8,
      company: "Insure",
      logo: "./images/insure.svg",
      new: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue, Sass"],
    },
    {
      id: 9,
      company: "Eyecam Co.",
      logo: "./images/eyecam-co.svg",
      new: false,
      featured: false,
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"],
    },
    {
      id: 10,
      company: "The Air Filter Company",
      logo: "./images/the-air-filter-company.svg",
      new: false,
      featured: false,
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
  ];

  function createOfferList(offers) {
    const offerElems = [];

    for (i = 0; i < offers.length; i++) {
      const offer = offers[i];
      let oneNewOffer = document.createElement("div");
      oneNewOffer.classList.add("oneJobOffer");

      // наше лого
      let companyLogo = document.createElement("div");
      companyLogo.classList.add("company-logo");

      const img = document.createElement("img");
      img.setAttribute("src", offer.logo);
      companyLogo.appendChild(img);

      // главный блок с вакансией
      let mainInfo = document.createElement("div");
      mainInfo.classList.add("mainInfo-block");

      // в нем 3 строки : first second lastline
      let firstLine = document.createElement("div");
      firstLine.classList.add("first-line");
      mainInfo.appendChild(firstLine);

      let company = document.createElement("div");
      company.innerHTML = offer.company;
      company.classList.add("company-info");
      firstLine.appendChild(company);

      if (offer.new == true) {
        let newOrNot = document.createElement("div");
        newOrNot.innerHTML = " NEW ";
        newOrNot.classList.add("newOrNot-info");
        firstLine.appendChild(newOrNot);
      }

      if (offer.featured == true) {
        let featuredOrNot = document.createElement("div");
        featuredOrNot.innerHTML = " FEATURED ";
        featuredOrNot.classList.add("featuredOrNot-info");
        firstLine.appendChild(featuredOrNot);
      }

      let secondLine = document.createElement("div");
      secondLine.innerHTML = offer.position;
      secondLine.classList.add("position");
      mainInfo.appendChild(secondLine);

      let lastLine = document.createElement("div");
      lastLine.classList.add("lastLine-info");
      mainInfo.appendChild(lastLine);

      let daysAgo = document.createElement("div");
      daysAgo.innerHTML = offer.postedAt;
      daysAgo.classList.add("daysAgo-info");
      lastLine.appendChild(daysAgo);

      let role = document.createElement("div");
      role.innerHTML = offer.contract;
      role.classList.add("role-info");
      lastLine.appendChild(role);

      let location = document.createElement("div");
      location.innerHTML = offer.location;
      location.classList.add("location-info");
      lastLine.appendChild(location);

      let skillsBlock = document.createElement("div");
      skillsBlock.classList.add("skills-block");

      // блок информации о скилах с права
      if (offer.languages !== undefined && offer.languages.length) {
        for (j = 0; j < offer.languages.length; j++) {
          const languageSkill = offer.languages[j];

          let skillsItem = document.createElement("div");
          skillsItem.innerHTML = languageSkill;
          skillsItem.classList.add("skills-item");
          skillsBlock.appendChild(skillsItem);
        }
      }

      oneNewOffer.appendChild(companyLogo);
      oneNewOffer.appendChild(mainInfo);
      oneNewOffer.appendChild(skillsBlock);

      offerElems.push(oneNewOffer);
    }

    return offerElems;
  }
  // создание кнопки /закрытие/ одного маленького блока в поисковике
  function createXIcon() {
    const closeSkill = document.createElement("div");
    closeSkill.classList.add("x", "spin", "medium");

    const b1 = document.createElement("b");
    b1.classList.add("b");
    closeSkill.appendChild(b1);

    const b2 = document.createElement("b");
    b2.classList.add("b");
    closeSkill.appendChild(b2);

    const b3 = document.createElement("b");
    b3.classList.add("b");
    closeSkill.appendChild(b3);

    const b4 = document.createElement("b");
    b4.classList.add("b");
    closeSkill.appendChild(b4);

    return closeSkill;
  }
  // создание одного маленького блока в поисковике
  function createFilterItem(skillName) {
    const skill = document.createElement("div");
    skill.setAttribute("data-id", skillName);
    skill.classList.add("skill-filter-item");
    skill.innerHTML = skillName;

    // положили  в переменную и добавили эту кнопку /закрытие/ одного маленького блока в поисковике
    const closeSkill = createXIcon();
    skill.appendChild(closeSkill);

    return skill;
  }
  //удаление одного маленького блока в поисковике из посковика
  function removeFilterItem(skillItem) {
    skillItem.remove();
  }

  function sortOffersBySkills() {
    const sortedOffers = allOffers.filter((offer) => {
      if (offer.languages && offer.languages.length) {
        const exist = offer.languages.filter((language) =>
          selectedSkills.includes(language)
        );

        return exist.length ? true : false;
      }

      return false;
    });

    return sortedOffers;
  }

  function renderOfferList(offers) {
    const offerElems = createOfferList(offers);

    allJobsOffersContainer.innerHTML = "";

    offerElems.forEach((offerElem) =>
      allJobsOffersContainer.appendChild(offerElem)
    );
  }

  (function init() {
    renderOfferList(allOffers);
  })();

  // следим за кликом в офферах
  allJobsOffersContainer.addEventListener("click", (event) => {
    const isSkillsElement = event.target.className === "skills-item";
    if (!isSkillsElement) {
      return;
    }

    if (selectedSkills.indexOf(event.target.innerText) !== -1) {
      return;
    }

    const skillFilterItem = createFilterItem(event.target.innerText);
    searchBlock.appendChild(skillFilterItem);

    selectedSkills.push(event.target.innerText);
    console.log(selectedSkills);

    // think about it;
    searchBlock.style.display = "flex";
    //сортрировка списка(
    const sortedOffers = sortOffersBySkills();
    //отрисовка только тех у кого есть selectedSkills in lenguages)
    renderOfferList(sortedOffers);
  });

  // следим за кликом в фильтре
  searchBlock.addEventListener("click", (event) => {
    const isXIcon = ["x", "b"].indexOf(event.target.className) !== -1;
    if (!isXIcon) {
      return;
    }

    const skillItem = event.target.closest(".skill-filter-item");
    if (!skillItem) {
      return;
    }

    //вызываем
    removeFilterItem(skillItem);

    const skillName = skillItem.getAttribute("data-id");
    selectedSkills = selectedSkills.filter((sf) => sf !== skillName);
    console.log(selectedSkills);
    console.log(skillName);
    if (!selectedSkills.length) {
      searchBlock.style.display = "none";
      renderOfferList(allOffers);
    } else {
      const sortedOffers = sortOffersBySkills();
      //отрисовка только тех у кого есть selectedSkills in lenguages)
      renderOfferList(sortedOffers);
    }
  });

  // main
})();
