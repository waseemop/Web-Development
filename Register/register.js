function validateForm() {
    document.querySelectorAll('.error').forEach(function (element) {
        element.textContent = '';
    });

    let isValid = true;
    const firstName = document.getElementById('firstname').value;
    if (firstName.trim() === '') {
        document.getElementById('firstname-error').textContent = 'First name is required.';
        isValid = false;
    }
    const lastName = document.getElementById('lastname').value;
    if (lastName.trim() === '') {
        document.getElementById('lastname-error').textContent = 'Last name is required.';
        isValid = false;
    }

    const teamName = document.getElementById('teamname').value;
    if (teamName.trim() === '') {
        document.getElementById('teamname-error').textContent = 'Team name is required.';
        isValid = false;
    }
    if(isValid)
    {
        alert("Registration Successful");
    }
    return isValid;
    
}
