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

