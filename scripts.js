document.addEventListener("DOMContentLoaded", function () {
    // Get all postcards
    const postcards = document.querySelectorAll(".postcard");

    // Get the audio element
    const hoverSound = document.getElementById("hoverSound");

    // Attach event listeners to each postcard
    postcards.forEach((postcard) => {
        postcard.addEventListener("mouseenter", function () {
            // Play the sound
            const soundFile = postcard.dataset.sound;
            if (soundFile) {
                hoverSound.src = soundFile;
                hoverSound.play();
            }
        });

        postcard.addEventListener("mouseleave", function () {
            // Reset the sound
            hoverSound.pause();
            hoverSound.currentTime = 0;
        });
    });

    function ageCalc() {
        var minutes = 1000 * 60;
        var hours = minutes * 60;
        var days = hours * 24;
        var years = days * 365.25;

        // Set your birthday explicitly
        var birthday = new Date("September 26, 1997");

        var date1 = new Date(birthday);

        var date2 = new Date();
        var timeDiff = date2.getTime() - date1.getTime();
        var age = timeDiff / years;
        age = parseFloat(Math.round(age * 100000000000) / 100000000000).toFixed(11);

        document.getElementById("age").innerHTML = age;

        setTimeout(ageCalc, 50);
    }

    // Trigger the age calculation when the window loads
    window.onload = ageCalc;

});
