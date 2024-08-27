document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');
    const speed = 80; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('%', '');
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment) + '%';
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target + '%';
            }
        };

        updateCount();

        // Update the progress bar width
        const progressBar = counter.parentElement.nextElementSibling.querySelector('.progress');
        progressBar.style.width = counter.getAttribute('data-target') + '%';
    });
});
