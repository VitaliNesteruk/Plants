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
var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.add("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            setTimeout(() => {
                this.classList.remove("active");
            }, 200)
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

/* Hamburger button */
let hamburgerMenu = document.querySelector('.hamburger-menu');
let menu = document.querySelector('.head-menu');
hamburgerMenu.addEventListener('click', function(){
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active');
})