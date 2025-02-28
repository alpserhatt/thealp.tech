function hesapla() {
    const birthdate = document.getElementById("birthdate").value;
    if (!birthdate) {
        alert("Lütfen doğum tarihinizi girin!");
        return;
    }

    const today = new Date();
    const birthDate = new Date(birthdate);
    
    // Yaşı hesapla
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Yıl, ay, hafta, gün, saat, dakika hesaplama
    let years = age;
    let months = today.getMonth() - birthDate.getMonth();
    if (months < 0) {
        months += 12;
    }

    const dayInMillis = 1000 * 60 * 60 * 24;
    const daysPassed = Math.floor((today - birthDate) / dayInMillis);
    const weeks = Math.floor(daysPassed / 7);
    const days = daysPassed % 7;
    
    const hours = today.getHours();
    const minutes = today.getMinutes();

    // Sonuçları göster
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p>Toplam ${years} yıl, ${months} ay, ${weeks} hafta, ${days} gün, ${hours} saat, ${minutes} dakika boyunca yaşamışssınız.</p>
    `;
}
