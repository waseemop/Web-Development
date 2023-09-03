document.getElementById('l1').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('un').value;
    const password = document.getElementById('pwd').value;
    const users = {
        'Waseem': {
            'username': 'Waseem',
            'password': '786786'
        }
    };
    if (users[username] && users[username].password === password) {
        localStorage.setItem('currentUser', JSON.stringify(users[username]));
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your credentials.');
    }
});