let tag = document.querySelector('h1');
tag.style.fontSize = '4';

let condition = true;
 let start = 0;
 let end = 0;
function forward() {
    anime({
        targets: '.menu-small',
    translateX: ['-100%', '0'],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
     });
     condition = false;
     anime({
        targets: '.menu_small_icon',
        rotate: 90,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
     });
     anime({
        targets: '.stick',
        rotate: 180,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
     });
}
function backward() {
    anime({
        targets: '.menu-small',
    translateX: ['0', '-100%'],
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
     });
     condition = true;
     anime({
        targets: '.menu_small_icon',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
     });
     anime({
        targets: '.stick',
        rotate: 0,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 1000,
        loop: false
     });
}
 $('.menu_small_icon').click(function() {
    if (condition) {
       forward();

    } else {
        backward();
    }
});
