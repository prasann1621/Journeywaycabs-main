$(document).ready(function() {
    // Open the popup
    $(document).on('click', '#openBookingForm', function() {
        $("#booking-popup").removeClass("d-none");
        $('body').css('overflow', 'hidden');
    });

    // Close the popup
    $(document).on('click', '#closeBookingForm', function() {
        $("#booking-popup").addClass("d-none");
        $('body').css('overflow', 'auto');
    });

    // Handle form submission
    $("#booking-form").submit(function(event) {
        event.preventDefault();
        alert("Booking submitted!"); // Replace with actual submission logic
        $("#booking-popup").addClass("d-none");
        $('body').css('overflow', 'auto');
    });

    // Form submission (Placeholder)
    $("#booking-form").submit(function(event) {
        event.preventDefault(); // Prevent the form from actually submitting

        // Get the form data
        const pickupDate = $("#pickup-date").val();
        const pickupTime = $("#pickup-time").val();
        const pickupAddress = $("#pickup-address").val();
        const otherDetails = $("#other-details").val();

        // You would typically send this data to your server using AJAX
        console.log("Booking Details:");
        console.log("Pickup Date:", pickupDate);
        console.log("Pickup Time:", pickupTime);
        console.log("Pickup Address:", pickupAddress);
        console.log("Other Details:", otherDetails);

        alert("Booking submitted (check console for details)!");  //Replace with a better message
        $("#booking-popup").addClass("d-none"); // Hide the booking popup
        $('body').css('overflow', 'auto'); // Restore scrolling
    });
});