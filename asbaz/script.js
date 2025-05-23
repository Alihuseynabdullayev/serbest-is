document.getElementById('chefForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Form dəyərlərini alırıq
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !service) {
        document.getElementById('formResult').textContent = "Zəhmət olmasa bütün tələb olunan sahələri doldurun.";
        document.getElementById('formResult').style.color = "#e74c3c";
        return;
    }

    // Burada əslində bir backendə göndərmək olar, indi sadəcə təsdiq mesajı göstəririk
    document.getElementById('formResult').style.color = "#27ae60";
    document.getElementById('formResult').textContent = 
        `Təşəkkür edirik, ${name}! Sifarişiniz qəbul olundu. Tezliklə sizinlə əlaqə saxlanılacaq.`;

    // Formu sıfırlayırıq
    document.getElementById('chefForm').reset();
});