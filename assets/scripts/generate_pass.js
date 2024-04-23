function generatePassword() {
    let password_len = document.getElementById('password_len').value;
    password_len = parseInt(password_len);

    if (isNaN(password_len) || password_len < 2 || password_len > 99) {
        document.getElementById('password').innerHTML = 'Введіть ціле число у межах від 2 до 99!';
        return;
    }

    let password = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';
    for (let i = 0; i < password_len; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('password').innerHTML = password;

}