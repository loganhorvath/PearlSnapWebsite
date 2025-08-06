// JavaScript to handle page navigation - Updated with Membership page

document.addEventListener('DOMContentLoaded', function() {

    // Get all page elements
    const homePage = document.getElementById('home-page');
    const pricingPage = document.getElementById('pricing-page');
    const aboutPage = document.getElementById('about-page');
    const membershipPage = document.getElementById('membership-page');
    
    // Get all navigation links
    const homeLink = document.getElementById('home-link');
    const pricingLink = document.getElementById('pricing-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const membershipLink = document.getElementById('membership-link');
    
    // Function to show only the selected page
    function showPage(page) {
        // Hide all pages
        homePage.style.display = 'none';
        pricingPage.style.display = 'none';
        aboutPage.style.display = 'none';
        membershipPage.style.display = 'none';
        
        // Show the selected page
        page.style.display = 'block';
        
        // Remove active class from all links
        homeLink.classList.remove('active');
        pricingLink.classList.remove('active');
        aboutLink.classList.remove('active');
        contactLink.classList.remove('active');
        membershipLink.classList.remove('active');
        
        // Fix for footer positioning - force reflow
        document.body.offsetHeight;
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
    
    membershipLink.addEventListener('click', function(e) {
        e.preventDefault();
        showPage(membershipPage);
        membershipLink.classList.add('active');
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
    //const pricingButtons = document.querySelectorAll('.pricing-btn');
    const pricingButtons = document.querySelectorAll('.Setmore_button_iframe');
    // pricingButtons.forEach(function(button) {
    //     button.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         showPage(homePage);
    //         // Scroll to booking section
    //         document.getElementById('booking').scrollIntoView({behavior: 'smooth'});
    //     });
    // });
    
    // Initialize mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

});