/*<script>
    document.addEventListener("DOMContentLoaded", function() {
        const counterElement = document.getElementById('member-counter');
        let count = 0;
        const targetCount = 131;
        const duration = 2000; // Duration in milliseconds to reach the target count
        const intervalTime = duration / targetCount;

        const counter = setInterval(() => {
            count++;
            counterElement.textContent = count;
            if (count >= targetCount) {
                clearInterval(counter);
            }
        }, intervalTime);
    });
</script>
let count = 0;
const counterElement = document.getElementById('member-counter');

function updateCounter() {
    if (count <= 131) {
        count++;
        counterElement.textContent = count;
        updateColor();
    }
}

function updateColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generates random color hex code
    counterElement.style.color = randomColor;
}

// Call updateCounter() every second (1000 milliseconds)
setInterval(updateCounter, 1000);*/
// JavaScript to animate the counter
document.addEventListener("DOMContentLoaded", function () {
    const memberCount = document.getElementById("member-counter");
    let count = 0;
    const target = 131;
    const interval = setInterval(() => {
        if (count < target) {
            count++;
            memberCount.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, 50);
});


document.addEventListener("DOMContentLoaded", function() {
    const memberCount = document.getElementById("member-counter");
    const count = 131;  // Set your count here

    if (parseInt(memberCount.textContent) === count) {
        memberCount.classList.add("blast");
    }
});





















