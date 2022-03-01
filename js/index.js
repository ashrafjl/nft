const icon = document.querySelector('.menu-icon');
const cross = document.querySelector('.cross');
const menu = document.querySelector('.vertical-menu');


icon.addEventListener('click',()=>{
    menu.classList.add('active')
});
cross.addEventListener('click',()=>{
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active')
    }
})
