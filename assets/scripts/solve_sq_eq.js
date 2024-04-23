solve_button = document.getElementById('solve_sq_eq_btn');


solve_button.addEventListener('click', function() {
    coefs = document.getElementById('equation').value;

    coefs = coefs.split(' ');
    a = parseFloat(coefs[0]);
    b = parseFloat(coefs[1]);
    c = parseFloat(coefs[2]);

    if (a == 0) {
        document.getElementById('result').innerHTML = 'x = ' + (-c/b).toString();
        return;
    }

    D = b*b - 4*a*c;
    if (D < 0) {
        document.getElementById('result').innerHTML = 'Нема дійсних коренів';
    } else if (D == 0) {
        x = -b / (2*a);
        document.getElementById('result').innerHTML = 'x = ' + x;
    } else {
        x1 = (-b + Math.sqrt(D)) / (2*a);
        x2 = (-b - Math.sqrt(D)) / (2*a);
        document.getElementById('result').innerHTML = 'x1 = ' + x1 + ', x2 = ' + x2;
    }


});
