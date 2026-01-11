// Wedding Countdown Timer
// Wedding Date: February 8, 2026 at 10:00 AM

function initCountdown() {
    // Set wedding date (Year, Month-1, Day, Hour, Minute)
    const weddingDate = new Date(2026, 1, 8, 10, 0, 0).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM elements
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');

        // If countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
        }
    }

    // Update immediately and then every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initCountdown);
// Heart Animation Background
$(document).ready(function () {
    function createHeart(instant) {
        var r_num = Math.floor(Math.random() * 40) + 1;
        var r_size = Math.floor(Math.random() * 35) + 10;
        var r_left = Math.floor(Math.random() * 100) + 1;
        var r_time = Math.floor(Math.random() * 5) + 10;

        // Solid Sage Green color (No Opacity in color definition)
        var color = "#4a7c64";

        // If instant, start animation from a random point by using negative delay
        var delay = instant ? (Math.random() * r_time * -1) : 0;

        $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:" + color + ";-webkit-animation:love " + r_time + "s ease " + delay + "s infinite;-moz-animation:love " + r_time + "s ease " + delay + "s infinite;-ms-animation:love " + r_time + "s ease " + delay + "s infinite;animation:love " + r_time + "s ease " + delay + "s infinite'></div>");

        $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:" + color + ";-webkit-animation:love " + (r_time + 5) + "s ease " + delay + "s infinite;-moz-animation:love " + (r_time + 5) + "s ease " + delay + "s infinite;-ms-animation:love " + (r_time + 5) + "s ease " + delay + "s infinite;animation:love " + (r_time + 5) + "s ease " + delay + "s infinite'></div>");
    };

    // Create 30 hearts immediately to fill screen
    for (var i = 0; i < 30; i++) {
        createHeart(true);
    }

    // Continue spawning new ones
    setInterval(function () {
        createHeart(false);

        // Cleanup old hearts (simple check)
        $('.heart').each(function () {
            var top = $(this).css("top").replace(/[^-\d\.]/g, '');
            if (top < -100) {
                $(this).remove();
            }
        });
    }, 800);
});
