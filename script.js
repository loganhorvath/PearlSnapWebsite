// JavaScript to handle page navigation

document.addEventListener('DOMContentLoaded', function() {

    // Get all page elements

    const homePage = document.getElementById('home-page');

    const pricingPage = document.getElementById('pricing-page');

    const aboutPage = document.getElementById('about-page');

    

    // Get all navigation links

    const homeLink = document.getElementById('home-link');

    const pricingLink = document.getElementById('pricing-link');

    const aboutLink = document.getElementById('about-link');

    const contactLink = document.getElementById('contact-link');

    

    // Function to show only the selected page

    function showPage(page) {

        // Hide all pages

        homePage.style.display = 'none';

        pricingPage.style.display = 'none';

        aboutPage.style.display = 'none';

        

        // Show the selected page

        page.style.display = 'block';

        

        // Remove active class from all links

        homeLink.classList.remove('active');

        pricingLink.classList.remove('active');

        aboutLink.classList.remove('active');

        contactLink.classList.remove('active');

    }

    

    // Add click event listeners to navigation links

    homeLink.addEventListener('click', function(e) {

        e.preventDefault();

        showPage(homePage);

        homeLink.classList.add('active');

        // Scroll to top

        window.scrollTo(0, 0);

    });

    

    pricingLink.addEventListener('click', function(e) {

        e.preventDefault();

        showPage(pricingPage);

        pricingLink.classList.add('active');

        // Scroll to top

        window.scrollTo(0, 0);

    });

    

    aboutLink.addEventListener('click', function(e) {

        e.preventDefault();

        showPage(aboutPage);

        aboutLink.classList.add('active');

        // Scroll to top

        window.scrollTo(0, 0);

    });

    

    contactLink.addEventListener('click', function(e) {

        e.preventDefault();

        showPage(homePage);

        // Scroll to contact section

        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});

    });

    

    // Add event listeners for booking buttons in the pricing page

    const pricingButtons = document.querySelectorAll('.pricing-btn');

    pricingButtons.forEach(function(button) {

        button.addEventListener('click', function(e) {

            e.preventDefault();

            showPage(homePage);

            // Scroll to booking section

            document.getElementById('booking').scrollIntoView({behavior: 'smooth'});

        });

    });

    

    // Initialize mobile menu toggle

    const mobileMenuToggle = document.querySelector('.mobile-menu');

    const navMenu = document.querySelector('nav ul');

    

    mobileMenuToggle.addEventListener('click', function() {

        navMenu.classList.toggle('show');

    });

// add set remind that you must pick a certain time    

    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const timeContainer = document.getElementById('time-container');

    function updateTimeLimits() {
        const selectedDate = new Date(dateInput.value);
        const day = selectedDate.getDay(); // 6 = Sunday, 5 = Saturday

        if (isNaN(day)) return;

        // Show the time input when a valid date is selected
        timeContainer.style.display = 'block';

        if (day === 5 || day === 6) {
        // Weekend: 8:00 AM to 8:00 PM
        timeInput.min = "08:00";
        timeInput.max = "20:00";
        } else {
        // Weekday: 4:00 PM to 10:00 PM
        timeInput.min = "16:00";
        timeInput.max = "22:00";
        }

        // Reset time input if out of range
        if (timeInput.value && (timeInput.value < timeInput.min || timeInput.value > timeInput.max)) {
        //alert(`Selected time is not valid for this day. Please choose a time between ${timeInput.min} and ${timeInput.max}.`);
        alert('This time is outside of our operating hours: Weekdays 4pm-Sunset and Weekends Sunrise-Sunset')
        timeInput.value = '';
        }
    }

    dateInput.addEventListener('change', updateTimeLimits);

    timeInput.addEventListener('input', function () {
        if (timeInput.value < timeInput.min || timeInput.value > timeInput.max) {
        //alert(`Please select a time between ${timeInput.min} and ${timeInput.max}.`);
        alert('This time is outside of our operating hours: Weekdays 4pm-Sunset and Weekends Sunrise-Sunset');
        timeInput.value = '';
        }
    });



});

