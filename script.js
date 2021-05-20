// add rate input preview
document.getElementById('computed-rate').innerHTML = document.getElementById('rate').value

document.getElementById('rate').addEventListener('change', function (event) {
    document.getElementById('computed-rate').innerHTML = event.target.value
});

// populate year select
for (var i = 1; i <= 20; i++) {
    var el = document.createElement('option');
    el.value = i;
    el.innerHTML = i;

    document.getElementById('years').appendChild(el);
}

// handle form submit
function compute(event) {
    event.preventDefault();

    var amount = document.getElementById("principal").value,
        rate = document.getElementById('rate').value,
        years = document.getElementById('years').value,
        resultContainer = document.getElementById('result');

    resultContainer.innerHTML = '';

    if(amount <= 0) {
        alert('Please enter a positive number');
        return;
    }

    resultContainer.innerHTML = 'If you deposit ' + amount + ',<br>' +
        'at an interest rate of ' + rate + '%.<br>' +
        'You will receive an amount of ' + amount * (rate / 100) * years + ',<br>' +
        'in the year ' + (+(new Date()).getFullYear() + +years);

    resultContainer.style.display = 'block';
}


document.getElementById('calculator').addEventListener('submit', compute)

