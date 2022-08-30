class Site {
    constructor() {
        this.year = new Date().getFullYear();
    }

    init() {
        this.bindEvents();
        this.populateCurrentYear();
    }

    bindEvents() {
        this.bindModalEvents();
    }

    bindModalEvents() {
        const projectModal = document.getElementById('projects-modal');

        projectModal.addEventListener('show.bs.modal', event => {
            const clickedButton = event.relatedTarget;
            const selectedProject = clickedButton.getAttribute('data-bs-project');

            // Remove old active
            const tabLinks = projectModal.getElementsByClassName('nav-link');
            const tabs = projectModal.getElementsByClassName('tab-pane');

            Array.from(tabLinks).forEach(element => {
                element.classList.remove("active");
            });

            Array.from(tabs).forEach(element => {
                element.classList.remove("active", "show");
            });

            // Set new active
            const tabLink = projectModal.querySelector('#nav-' + selectedProject + "-tab");
            const tab = projectModal.querySelector('#nav-' + selectedProject);

            tabLink.classList.add("active");
            tab.classList.add("show", "active");
        });
    }

    populateCurrentYear() {
        document.getElementById("current-year").innerHTML = this.year;
    }
}