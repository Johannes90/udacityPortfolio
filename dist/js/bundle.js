/**
 * Created by johannes on 12/9/16.
 */


var navbar = document.querySelector('.nav');

navbar.addEventListener('click', function(e) {
    e.preventDefault();
    navbar.classList.toggle('open');
});