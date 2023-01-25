/* Cards select script */
const select = document.querySelector('#select');
const addresses = document.querySelectorAll('.output-information');

function handleSelect(e) {
    const targetId = e.target.value;
    const targetElement = document.querySelector('#' + targetId);
    addresses.forEach(address => {
        address.classList.remove('active');
    });
    targetElement.classList.add('active');
}

select.addEventListener('change', handleSelect)

/* Accordion script */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

/*function accordionSlide() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", accordionSlide);
}*/