// Рассчитать дистанцию от текущего местоположения пользователя до желаемой точки назначения.

const positionLat = 10;
const positionLong = 10;

const addressLat = 15;
const addressLong = 15;

const deltaLat = addressLat - positionLat;
const deltaLong = addressLong - positionLong;

const distance = Math.sqrt(deltaLat * deltaLat + deltaLong * deltaLong);

console.log(`Расстояние: ${distance.toFixed(2)} градусов`);