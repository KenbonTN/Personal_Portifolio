'use script';

const projects = [
  {
    id: 0,
    title: 'Tonic',
    technologies: ['css', 'html', 'bootstrap'],
    image: 'images/Snapshoot Portfolio.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live_version: 'https://kenbontn.github.io/Personal_Portifolio/',
    source_code: 'https://github.com/kenbontn/Personal_Portifolio/',
  },
  {
    id: 1,
    title: 'Multi-Post <br> Stories',
    technologies: ['html', 'bootstrap', 'ruby'],
    image: 'images/Snapshoot Portfolio2.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live_version: 'https://kenbontn.github.io/Personal_Portifolio/',
    source_code: 'https://github.com/kenbontn/Personal_Portifolio/',
  },
  {
    id: 2,
    title: 'Tonic',
    technologies: ['css', 'bootstrap', 'ruby'],
    image: 'images/Snapshoot Portfolio3.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live_version: 'https://kenbontn.github.io/Personal_Portifolio/',
    source_code: 'https://github.com/kenbontn/Personal_Portifolio/',
  },
  {
    id: 3,
    title: 'Tonic',
    technologies: ['css', 'html', 'ruby'],
    image: 'images/Snapshoot Portfolio4.svg',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live_version: 'https://kenbontn.github.io/Personal_Portifolio/',
    source_code: 'https://github.com/kenbontn/Personal_Portifolio/',
  },
  {
    id: 4,
    title: 'Multi-Post <br> Stories',
    technologies: ['css', 'html', 'ror'],
    image: './images/projects/project-4.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    live_version: 'https://miltonhenschel.github.io/myPortfolio/',
    source_code: 'https://github.com/miltonHenschel/myPortfolio',
  }
];

const body = document.querySelector('body');
const prjContent = document.querySelector('#portfolio');
prjContent.innerHTML = `
            <section class="first-card card">
                <img class="snapshoot-style" src="images/Snapshoot Portfolio.svg" alt="Snapshoot portfolio image">
                <section>
                    <h2 class="card-header font-style on-small">
                        Tonic
                    </h2>
                    <h2 class="on-large card-header font-style">
                        Facebook 360
                    </h2>
                    <section class="card-description">
                        <ul class="font-style">
                            <li class="card-list-title on-small"> CANOPY</li>
                            <li class="on-large card-list-title ">FACEBOOK</li>
                            <li class="on-large Job-title_and_year">Full Stack Dev</li>
                            <li class="Job-title_and_year on-small">
                                Back End Dev
                            </li>
                            <li class="Job-title_and_year">
                                2022
                            </li>
                        </ul>
                    </section>
                    <p class="notice font-style">
                        A daily selection of privately personalized reads; no accounts or sign-ups required.
                    </p>
                    <ul class="programming-languages font-style">
                        <li>html</li>
                        <li class="on-large">Ruby On Rails</li>
                        <li>css</li>
                        <li>javaScript</li>
                    </ul>
                    <button id= "0" class="project-button button" type="button">See Project</button>
                </section>

            </section>

            </section>
            <section class="card second-card">
                <img class="snapshoot-style" src="images/Snapshoot Portfolio2.svg" alt="Snapshoot portfolio image">
                <section>
                    <h2 class="card-header font-style on-small">
                        Multi-Post <br> Stories
                    </h2>
                    <h2 class="card-header font-style on-large">
                        Uber Navigation
                    </h2>
                    <section class="card-description">
                        <ul class="font-style">
                            <li class="card-list-title on-small"> CANOPY</li>
                            <li class="card-list-title on-large"> Uber</li>

                            <li class="Job-title_and_year on-small">
                                Back End Dev
                            </li>
                            <li class="Job-title_and_year on-large">
                                Lead Developer
                            </li>
                            <li class="Job-title_and_year">
                                2022
                            </li>
                        </ul>
                    </section>
                    <p class="notice font-style">
                        A daily selection of privately personalized reads; no accounts or sign-ups required.
                    </p>
                    <ul class="programming-languages font-style">
                        <li>html</li>
                        <li class="on-large">Ruby On Rails</li>
                        <li>css</li>
                        <li>javaScript</li>
                    </ul>
                    <button id ="1" class="project-button button" type="button">See Project</button>
                </section>
            </section>
            <section class="card third-card">
                <img class="snapshoot-style on-small" src="images/Snapshoot Portfolio3.svg"
                    alt="Snapshoot portfolio image">
                <img class="snapshoot-style on-large" src="images/Snapshoot Portfolio5.svg"
                    alt="Snapshoot portfolio image">
                <section>
                    <h1 class="card-header font-style">
                        Tonic
                    </h1>
                    <section class="card-description">
                        <ul class="font-style">
                            <li class="card-list-title"> CANOPY</li>
                            <li class="Job-title_and_year">
                                Back End Dev
                            </li>
                            <li class="Job-title_and_year">
                                2022
                            </li>
                        </ul>
                    </section>
                    <p class="notice font-style">
                        A daily selection of privately personalized reads; no accounts or sign-ups required.
                    </p>
                    <ul class="programming-languages font-style">
                        <li>html</li>
                        <li>css</li>
                        <li>javaScript</li>
                    </ul>
                    <button id="2" class="project-button button" type="button">See Project</button>
                </section>
            </section>
            <section class="card fourth-card">
                <img class="snapshoot-style" src="images/Snapshoot Portfolio4.svg" alt="Snapshoot portfolio image">
                <section>
                    <h1 class="card-header font-style on-small">
                        Multi-Post <br> Stories
                    </h1>
                    <h1 class="card-header font-style on-large">
                        Multi-Post Stories
                    </h1>
                    <section class="card-description">

                        <ul class="font-style">
                            <li class="card-list-title on-small"> CANOPY</li>
                            <li class="on-large card-list-title ">FACEBOOK</li>
                            <li class="on-large Job-title_and_year">Full Stack Dev</li>
                            <li class="Job-title_and_year on-small">
                                Back End Dev
                            </li>
                            <li class="Job-title_and_year">
                                2022
                            </li>
                        </ul>
                    </section>
                    <p class="notice font-style">
                        A daily selection of privately personalized reads; no accounts or sign-ups required.
                    </p>
                    <ul class="programming-languages font-style">
                        <li>html</li>
                        <li class="on-large">Ruby On Rails</li>
                        <li>css</li>
                        <li>javaScript</li>
                    </ul>
                    <button id= "3" class="project-button button" type="button">See Project</button>
                </section>
            </section>
`
const projectBtn = document.querySelectorAll('.project-button');
projectBtn.forEach((button) => {
    button.addEventListener('click', () => {
      const section = document.createElement('section');
      section.className = 'section-menu';
      section.innerHTML = `
      <div class="popup">
      <section class="card-popup">
          <div id="close-btn">
              <h2 class="popup-header font-style">
              ${projects[button.id].title}
              </h2>
              <img id="menu-close-btn" width="12" height="12" src="images/realIcon.png" alt="Close button">
          </div>

          <section class="popup-description">
              <section class="card-description">
                  <ul class="font-style">
                      <li class="card-list-title-popup on-small"> CANOPY</li>
                      <li class="on-large card-list-title ">FACEBOOK</li>
                      <li class="on-large Job-title_and_year">Full Stack Dev</li>
                      <li class="Job-title_and_year on-small">
                          Back End Dev
                      </li>
                      <li class="Job-title_and_year">
                          2022
                      </li>
                  </ul>
              </section>
              <img class="snapshoot-style popup-img" src="${projects[button.id].image}"
                  alt="Snapshoot portfolio image">
              <div class="popup-footer">
                  <p class="notice-popup font-style">
                  ${projects[button.id].description}
                  </p>

                  <div>
                      <ul class="programming-languages font-style">
                          <li>html</li>
                          <li>css</li>
                          <li>javaScript</li>
                      </ul>
                      <div class="popup-btn">
                          <button class="project-button-popup button" type="button"> <span>See live </span><a href="${projects[button.id].live_version}"><img
                                      src="images/seeLive.png" alt="See Live"></a></button>
                          <button class="project-button-popup button" type="button"><span>See Source</span><a class="social_medias"
                                  href="${projects[button.id].source_code}">
                                  <img src="images/githublogo.png" alt="Github icon" /></a> </button>
                      </div>

                  </div>
              </div>

          </section>
      </section>

  </div>
      `;
      body.appendChild(section);
      const closeBtn = document.getElementById("menu-close-btn");
      closeBtn.addEventListener("click", () => {
        body.removeChild(section);
      });
    });
  });