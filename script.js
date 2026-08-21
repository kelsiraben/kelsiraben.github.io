document.addEventListener("DOMContentLoaded", () => {
  const projectGrid = document.getElementById("project-grid");

  if (projectGrid && typeof portfolioProjects !== "undefined") {
    projectGrid.innerHTML = portfolioProjects
      .map(
        (project) => `
          <a class="project-card" href="${project.href}">
            <span class="project-number">${project.number}</span>
            <span class="project-arrow">↗</span>

            <div>
              <div class="project-kicker">${project.kicker}</div>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </div>
          </a>
        `
      )
      .join("");
  }

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
