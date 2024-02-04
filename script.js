document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.fadeIn');

    elements.forEach(function(element) {
        element.classList.add('active');
    });
});
