if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      document.getElementById("mapa").src = `https://maps.google.com/maps?q=${lat},${lon}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    }, function(error) {
      document.getElementById("mapa").src = "https://maps.google.com/maps?q=38.3571915,-0.4844547&t=&z=13&ie=UTF8&iwloc=&output=embed";
    });
  }