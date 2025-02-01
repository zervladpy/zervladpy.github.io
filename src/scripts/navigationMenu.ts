
const indicator = document.getElementById("indicator");
const navigationItems: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("nav a");
const sections: NodeListOf<HTMLElement> = document.querySelectorAll("section");

function updateIndicator(element: HTMLAnchorElement) {

    if (!indicator) return;

    const { offsetLeft, offsetWidth } = element;

    indicator.style.left = `${offsetLeft}px`;
    indicator.style.width = `${offsetWidth}px`;
}

navigationItems.forEach((element) => {
    element.addEventListener("click", () => {
        updateIndicator(element);
    });
});

function changeUrlOnScroll() {
    const scrollY = window.scrollY * 1.2;
    let active: HTMLElement | undefined;

    sections.forEach((section) => {
        const { offsetTop, offsetHeight } = section;
        const id = section.getAttribute("id")

        if (id && scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            active = section;
        }
    })

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 5) {
        active = sections[sections.length - 1];
    }

    if (active) {
        const id = active.getAttribute("id");

        if (history.state !== id) {
            history.replaceState(id, "", `#${id}`)
        }

        const activeLink: HTMLAnchorElement | null = document.querySelector(`nav a[href="#${id}"]`)

        if (activeLink) {
            updateIndicator(activeLink)
        }
    }

}

window.addEventListener("load", () => {
    if (navigationItems.length > 0 && indicator) {
        let element: HTMLAnchorElement = navigationItems[0];
        indicator.style.height = `${element.offsetHeight}px`
        updateIndicator(element);
    }
});

window.addEventListener("scroll", changeUrlOnScroll)