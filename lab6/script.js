document.getElementById('visitingCardForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);
    var visitingCard = document.getElementById('visitingCard');
    visitingCard.innerHTML = ''; // Clear previous cards

    var name = formData.get('name');
    var designation = formData.get('designation');
    var email = formData.get('email');
    var phone = formData.get('phone');
    var orgName = formData.get('orgName');
    var primaryColor = formData.get('primaryColor');
    var secondaryColor = formData.get('secondaryColor');
    var textColor = formData.get('textColor');
    var cardFormat = formData.get('cardFormat');

    // Generate cards for each format
    for (var i = 1; i <= 4; i++) {
        var card = document.createElement('div');
        card.classList.add('card', 'format' + i);

        var heading = document.createElement('h2');
        heading.textContent = name;

        var desig = document.createElement('p');
        desig.textContent = designation;

        var mail = document.createElement('p');
        mail.textContent = 'Email: ' + email;

        var mobile = document.createElement('p');
        mobile.textContent = 'Mobile: ' + phone;

        var org = document.createElement('p');
        org.textContent = orgName;

        card.appendChild(heading);
        card.appendChild(desig);
        card.appendChild(mail);
        card.appendChild(mobile);
        card.appendChild(org);

        visitingCard.appendChild(card);
    }

    visitingCard.style.display = 'grid'; // Display cards in grid layout
});
