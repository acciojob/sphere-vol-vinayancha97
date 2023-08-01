function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius");
    const volumeInput = document.getElementById("volume");

	const radius = parseFloat(radiusInput.value);

	// if (isNaN(radius)) {
 //        alert("Please enter a valid number for the radius.");
 //        return;
 //      }

      const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      volumeInput.value = volume.toFixed(2);
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
