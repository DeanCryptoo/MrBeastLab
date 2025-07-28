// --- SCROLL-TRIGGERED ANIMATIONS ---
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    scrollObserver.observe(element);
});


// --- COUNTDOWN TIMER ---
// Set the target date: October 1, 2025. NOTE: Months are 0-indexed, so 9 is October.
const countDownDate = new Date(2025, 9, 1, 0, 0, 0).getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros if number is less than 10
    const format = (num) => num < 10 ? '0' + num : num;

    // Display the result
    document.getElementById("days").innerText = format(days);
    document.getElementById("hours").innerText = format(hours);
    document.getElementById("minutes").innerText = format(minutes);
    document.getElementById("seconds").innerText = format(seconds);

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<div class='btn btn-primary'>LAUNCHED!</div>";
    }
}, 1000);