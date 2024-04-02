
// 1 Способ
// const dropdownBtns = document.querySelectorAll('.block-filter');
// const dropdownMenu = document.querySelectorAll('.block-filter__dropdown ');


// dropdownBtns.forEach(item => {
//     item.addEventListener('click', event => {
//         const dropdownBtnAtribute = event.target.getAttribute('data-tab');
//         dropdownMenu.forEach(element => element.classList.remove('hidden'));
//         item.querySelector('.block-filter__icon').classList.toggle('active')
        
//         const dropContent = document.getElementById(dropdownBtnAtribute);
        
//         dropContent.classList.add('hidden');

//     })
// })

// 2 Способ

const filter = document.querySelector('.filter');
if(filter) {
    const items = filter.querySelectorAll('.block-filter');


    items.forEach(item => {
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle('active');
            item.querySelector('.block-filter__icon').classList.toggle('active');



            if(event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    });
}
