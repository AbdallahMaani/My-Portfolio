/*function show()
 {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("address");
    var dateInput = document.getElementById("date");
    var checkbox = document.querySelector('input[name="checkbox1"]');
    var descriptionTextarea = document.getElementById("Description");

    if
    (
        nameInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        phoneInput.value.trim() !== "" &&
        addressInput.value.trim() !== "" &&
        dateInput.value.trim() !== "" &&
        checkbox.checked &&
        descriptionTextarea.value.trim() !== ""
    )
        alert('Your Request Has Been Sent');
}*/
function show() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var addressInput = document.getElementById("address");
    var dateInput = document.getElementById("date");
    var checkbox = document.querySelector('input[name="checkbox1"]');
    var descriptionTextarea = document.getElementById("Description");

    if (
        nameInput.value.trim() !== "" &&
        emailInput.value.trim() !== "" &&
        phoneInput.value.trim() !== "" &&
        addressInput.value.trim() !== "" &&
        dateInput.value.trim() !== "" &&
        checkbox.checked &&
        descriptionTextarea.value.trim() !== ""
    ) {
        var confirmation = confirm('Are you sure you want to submit your request?');
        
        if (confirmation) {
            // User clicked "OK" in the confirmation dialog.
            // You can proceed with submitting the form or taking other actions here.
        } else {
            // User clicked "Cancel" in the confirmation dialog.
            // You can choose to do nothing or handle this case as needed.
        }
    }
}
