const source = document.querySelector('#source');
const target = document.querySelector('#target');
const add = document.querySelector('#add');

const addVal = (e) => {
    e.preventDefault();
    const val = source.value;
    target.textContent = val
}

add.addEventListener('click', addVal);
