var typingEffect = new Typed(".multiText", {
    strings: ["Web Developer.", "Photographer."],
    loop: true,
    typeSpeed: 80,
    backSpeed: 50,
    startDelay: 1000,
    backDelay: 1500,


})
setTimeout(function () {
    document.querySelectorAll('.Technical-bars .bar .progress-line span').forEach(function (span) {
        span.classList.add('active');
    });
}, 1000);
const moreAboutMeButton = document.querySelector('.btn-box');
const moreText = document.querySelector('.more-text');
const readLessButton = document.querySelector('.read-less');

moreAboutMeButton.addEventListener('click', () => {
    moreText.style.display = 'block';
    moreAboutMeButton.textContent = 'Read Less';
    readLessButton.style.display = 'block';
    moreAboutMeButton.style.display = 'none';
});

readLessButton.addEventListener('click', () => {
    moreText.style.display = 'none';
    moreAboutMeButton.textContent = 'More About Me.';
    moreAboutMeButton.style.display = 'block';
    readLessButton.style.display = 'none';
});