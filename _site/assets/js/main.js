


var map = L.map("map").setView([-34.60541319979051, -58.36356593258121], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);






L.marker([-34.60541319979051, -58.36356593258121])
    
    .addTo(map)
    .bindTooltip("<strong>Hilton Buenos Aires</strong>");
    




