document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");
    const closeFormButton = document.getElementById("closeForm");
    const contactForm = document.getElementById("contactForm");
    const messageDiv = document.getElementById("message");


    function openForm() {
        popup.style.display = "block";
        overlay.style.display = "block";
    }

    function closeForm() {
        popup.style.display = "none";
        overlay.style.display = "none";
    }

    function showMessage(text, isSuccess) {

        messageDiv.textContent = text;
        messageDiv.style.display = "block";

        if (isSuccess) {
            messageDiv.className = "success";
        } else {
            messageDiv.className = "error";
        }

        setTimeout(() => {
            messageDiv.style.display = "none";
        }, 5000);
    }



    // Show the popup after 5 seconds
    setTimeout(openForm, 5000);

    // Close the form when the close button is clicked
    closeFormButton.addEventListener("click", closeForm);

    // Form Submission Handling
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const submitBtn = document.querySelector(".submit-btn");
        const originalBtnText = submitBtn.textContent;
        submitBtn.textContent = "Submitting...";
        submitBtn.disabled = true;

        const formData = new FormData(this);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbx7ieboEXtIlgpoMq8WfQ8Hmya65FsYs4LHuNAiY0JGCH_05sI0hhMQnLfzB7YfHmTwig/exec';

        fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', // This is important
                body: formData
            })
            .then(() => {
                // We can't access the response with no-cors, so we just assume success
                showMessage("Form submitted successfully!", true);
                document.getElementById("contactForm").reset();
                closeForm();
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage("There was an error submitting the form. Please try again later.", false);
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
    });
});