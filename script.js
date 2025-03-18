$(document).ready(function() {
    // Service descriptions
    const serviceDetails = {
        "mumbai-darshan": {
            title: "Mumbai Darshan",
            description: `
                <div class="service-detail-content">
                    <h3>Mumbai Darshan: Experience the City of Dreams</h3>
                    <img src="Assets/Gateway Of India Travel Plan.jpg" alt="Mumbai Darshan" class="img-fluid rounded mb-3">
                    <p>Our comprehensive Mumbai Darshan package takes you through the heart and soul of the vibrant city of Mumbai. Experience the perfect blend of history, culture, architecture, and modern life.</p>
                    
                    <h4>Popular Attractions Covered:</h4>
                    <ul>
                        <li><strong>Gateway of India</strong> - The iconic monument overlooking the Arabian Sea</li>
                        <li><strong>Marine Drive</strong> - The spectacular sea-facing promenade, also known as the Queen's Necklace</li>
                        <li><strong>Chhatrapati Shivaji Terminus</strong> - A UNESCO World Heritage Site with stunning Victorian Gothic architecture</li>
                        <li><strong>Dhobi Ghat</strong> - The world's largest outdoor laundry</li>
                        <li><strong>Haji Ali Dargah</strong> - The famous mosque and tomb located on an islet off the coast</li>
                        <li><strong>Bandra-Worli Sea Link</strong> - Marvel at this engineering masterpiece connecting Bandra and Worli</li>
                    </ul>
                    
                    <h4>Package Includes:</h4>
                    <ul>
                        <li>Professional, knowledgeable driver</li>
                        <li>Air-conditioned vehicle</li>
                        <li>Complimentary bottled water</li>
                        <li>Flexible itinerary (upon request)</li>
                        <li>Pickup and drop-off at your location in Mumbai</li>
                    </ul>
                    
                    <h4>Duration:</h4>
                    <p>8-10 hours (Full day tour)</p>
                    
                    <h4>Best Time to Visit:</h4>
                    <p>October to March (Pleasant weather)</p>
                </div>
            `
        },
        "lonavla-trip": {
            title: "Lonavla Trip",
            description: `
                <div class="service-detail-content">
                    <h3>Lonavla Trip: Escape to Serenity</h3>
                    <img src="Assets/lonavla.jpg" alt="Lonavla Trip" class="img-fluid rounded mb-3">
                    <p>Escape the hustle and bustle of Mumbai with our Lonavla Trip package. Nestled in the Sahyadri Mountains, Lonavla offers breathtaking landscapes, misty valleys, and a refreshing break from city life.</p>
                    
                    <h4>Popular Attractions Covered:</h4>
                    <ul>
                        <li><strong>Tiger Point</strong> - Scenic viewpoint offering panoramic views of the valley</li>
                        <li><strong>Bhushi Dam</strong> - Popular waterfall spot during monsoon</li>
                        <li><strong>Lonavla Lake</strong> - Tranquil lake surrounded by natural beauty</li>
                        <li><strong>Karla and Bhaja Caves</strong> - Ancient Buddhist rock-cut caves</li>
                        <li><strong>Rajmachi Point</strong> - Historic fort with spectacular views</li>
                        <li><strong>Ryewood Park</strong> - Lush green gardens for relaxation</li>
                    </ul>
                    
                    <h4>Package Includes:</h4>
                    <ul>
                        <li>Experienced driver familiar with mountain routes</li>
                        <li>Comfortable, air-conditioned vehicle</li>
                        <li>Complimentary bottled water</li>
                        <li>Flexible time at each location</li>
                        <li>Pickup and drop-off at your location in Mumbai</li>
                    </ul>
                    
                    <h4>Duration:</h4>
                    <p>10-12 hours (Day trip) or customizable for overnight stays</p>
                    
                    <h4>Best Time to Visit:</h4>
                    <p>Monsoon (June to September) for waterfalls and lush greenery</p>
                    <p>Winter (October to February) for pleasant weather</p>
                </div>
            `
        },
        "local-rental": {
            title: "Local Rental",
            description: `
                <div class="service-detail-content">
                    <h3>Local Rental: Flexible City Transportation</h3>
                    <img src="Assets/sedan.jpg" alt="Local Rental" class="img-fluid rounded mb-3">
                    <p>Our Local Rental service offers the perfect solution for your transportation needs within Mumbai. Whether you're running errands, attending meetings, or exploring the city at your own pace, our hourly rental option provides maximum flexibility.</p>
                    
                    <h4>Service Highlights:</h4>
                    <ul>
                        <li><strong>Flexible Duration</strong> - Book for as few as 4 hours or for the entire day</li>
                        <li><strong>Multiple Vehicle Options</strong> - Choose from sedans, SUVs, or premium vehicles</li>
                        <li><strong>No Hidden Charges</strong> - Transparent pricing with no surprise fees</li>
                        <li><strong>Wait & Return</strong> - Driver waits while you complete your tasks</li>
                        <li><strong>Multiple Stops</strong> - Make as many stops as needed within your rental period</li>
                    </ul>
                    
                    <h4>Package Includes:</h4>
                    <ul>
                        <li>Professional, courteous driver</li>
                        <li>Well-maintained, air-conditioned vehicle</li>
                        <li>Fuel charges</li>
                        <li>All applicable taxes and tolls within city limits</li>
                        <li>Pickup and drop-off at your location in Mumbai</li>
                    </ul>
                    
                    <h4>Available Durations:</h4>
                    <ul>
                        <li>4-hour package</li>
                        <li>8-hour package</li>
                        <li>12-hour package</li>
                        <li>Custom duration (upon request)</li>
                    </ul>
                    
                    <h4>Service Area:</h4>
                    <p>All areas within Mumbai city limits</p>
                </div>
            `
        },
        "outstation-travel": {
            title: "Outstation Travel",
            description: `
                <div class="service-detail-content">
                    <h3>Outstation Travel: Journey Beyond Mumbai</h3>
                    <img src="Assets/innova.jpg" alt="Outstation Travel" class="img-fluid rounded mb-3">
                    <p>Explore destinations beyond Mumbai with our reliable Outstation Travel service. Whether you're planning a weekend getaway, a business trip to a nearby city, or a family vacation, we provide comfortable and safe transportation for your journey.</p>
                    
                    <h4>Popular Destinations:</h4>
                    <ul>
                        <li><strong>Pune</strong> - Cultural capital with historic forts and modern amenities</li>
                        <li><strong>Alibaug</strong> - Coastal town with beautiful beaches</li>
                        <li><strong>Mahabaleshwar</strong> - Hill station known for strawberries and viewpoints</li>
                        <li><strong>Nashik</strong> - Wine country with religious significance</li>
                        <li><strong>Shirdi</strong> - Famous pilgrimage center</li>
                        <li><strong>Goa</strong> - Beach paradise (long-distance option)</li>
                    </ul>
                    
                    <h4>Package Includes:</h4>
                    <ul>
                        <li>Experienced driver familiar with intercity routes</li>
                        <li>Comfortable, air-conditioned vehicle suitable for long journeys</li>
                        <li>Complimentary bottled water</li>
                        <li>Driver accommodation and allowance</li>
                        <li>Pickup and drop-off at your location in Mumbai</li>
                    </ul>
                    
                    <h4>Booking Options:</h4>
                    <ul>
                        <li>One-way transfer</li>
                        <li>Round trip with return on the same day</li>
                        <li>Multi-day packages with driver stay</li>
                        <li>Custom itinerary planning</li>
                    </ul>
                    
                    <h4>Vehicle Options:</h4>
                    <p>Sedans, SUVs, Tempo Travelers, and Premium vehicles based on group size and preferences</p>
                </div>
            `
        }
    };

    // Show service details when a service item is clicked
    $(".service-item").click(function() {
        const serviceId = $(this).data("service");
        
        // Get the service details
        const service = serviceDetails[serviceId];
        
        if (service) {
            // Update the service detail section
            $("#detail-title").text(service.title);
            $("#detail-description").html(service.description);
            
            // Hide services grid and show details
            $(".service-container").hide();
            $("#service-detail").show();
            
            // Scroll to the service detail section
            $('html, body').animate({
                scrollTop: $("#service-detail").offset().top - 100
            }, 500);
        }
    });
    
    // Back button functionality
    $("#back-to-services").click(function() {
        $("#service-detail").hide();
        $(".service-container").show();
    });

    // Open the booking popup from the "Book Now" button in the service detail view
    $("#openBookingForm").on('click', function() {
        // Get the currently displayed service title
        const serviceTitle = $("#detail-title").text();
        
        // Pre-select the related service in the dropdown if it exists
        if (serviceTitle) {
            $("#service-type").val(serviceTitle);
        }
        
        $("#booking-popup").removeClass("d-none");
        $('body').css('overflow', 'hidden');
        console.log("Booking form opened from service detail"); // Debug log
    });

    // Open the popup from the header "Book Now" button
    $(".book-now-btn").on('click', function() {
        $("#booking-popup").removeClass("d-none");
        $('body').css('overflow', 'hidden');
        console.log("Booking form opened from header"); // Debug log
    });

    // Close the popup
    $("#closeBookingForm").on('click', function() {
        $("#booking-popup").addClass("d-none");
        $('body').css('overflow', 'auto');
        console.log("Booking form closed"); // Debug log
    });

    // Handle form submission
    $("#booking-form").submit(function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Get the form data
        const pickupDate = $("#pickup-date").val();
        const pickupTime = $("#pickup-time").val();
        const pickupAddress = $("#pickup-address").val();
        const otherDetails = $("#other-details").val();
        const serviceType = $("#service-type").val();

        // You would typically send this data to your server using AJAX
        console.log("Booking Details:");
        console.log("Service Type:", serviceType);
        console.log("Pickup Date:", pickupDate);
        console.log("Pickup Time:", pickupTime);
        console.log("Pickup Address:", pickupAddress);
        console.log("Other Details:", otherDetails);

        // Show success message
        $("#booking-message").html("Booking submitted successfully! We'll contact you shortly.")
            .removeClass("alert-danger")
            .addClass("alert alert-success")
            .show();
            
        setTimeout(function() {
            $("#booking-popup").addClass("d-none"); // Hide the booking popup
            $('body').css('overflow', 'auto'); // Restore scrolling
            $("#booking-message").hide();
        }, 3000);
    });
    
    // Debug - Log if the booking button exists
    console.log("openBookingForm button exists:", $("#openBookingForm").length);
    console.log("Book Now button exists:", $(".book-now-btn").length);
})