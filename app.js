window.onload = function() {
    alert("Pasajero, se le recuerda que para abordar el avión debe tener en mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.");
    updateFlightInfo();
    setInterval(updateTime, 1000); // Actualiza la hora cada segundo
};

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const dateString = now.toLocaleDateString();
    document.getElementById("time").innerHTML = timeString;
    document.getElementById("date").innerHTML = dateString;
}

function updateFlightInfo() {
    const flightNumber = Math.floor(Math.random() * 9000 + 1000); // Genera un número entre 1000 y 9999
    const terminalNumber = Math.floor(Math.random() * 5 + 1); // Genera un número entre 1 y 5
    document.getElementById("flight").innerHTML = flightNumber;
    document.getElementById("terminal").innerHTML = terminalNumber;
}
