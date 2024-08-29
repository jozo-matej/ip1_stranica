document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        alert(`Hvala na poruci! Odgovor će biti na ${email}.`);
        console.log(`Hvala na poruci! Odgovor će biti na ${email}.`);
    });
});
