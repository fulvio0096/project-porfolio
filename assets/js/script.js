(function() {
    emailjs.init("hLiRKd3jSXPbZL6zR");
})();

// Gestione del form di contatto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_pcv1pid', 'template_i5l5hpd', this)
        .then(function() {
            alert('Messaggio inviato con successo!');
        }, function(error) {
            alert('Errore nell\'invio del messaggio: ' + JSON.stringify(error));
        });
});