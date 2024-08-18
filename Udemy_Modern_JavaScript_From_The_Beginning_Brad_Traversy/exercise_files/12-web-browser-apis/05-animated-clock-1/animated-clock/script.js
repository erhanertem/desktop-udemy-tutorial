function clock() {
	const now = new Date();
	const canvas = document.getElementById('canvas');
	const ctx = canvas.getContext('2d');

	// Setup canvas
	ctx.save(); //Save the default state
	ctx.clearRect(0, 0, 500, 500);
	ctx.translate(250, 250); //Relocate traslation gizmo @ 0,0 to the middle of 500by500 rect
	ctx.rotate(-Math.PI / 2); //Rotate the 2d grid

	// Set default styles
	ctx.strokeStyle = 'black';
	ctx.fillStyle = '#f4f4f4';
	ctx.lineWidth = 5;
	ctx.lineCap = 'round';

	//Draw clock face/border
	ctx.save(); //Save the default state
	ctx.lineWidth = 14;
	ctx.strokeStyle = '#800000';
	ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
	ctx.stroke(); //apply stoke to arc
	ctx.fill(); //Apply the filler to arc
	ctx.restore(); //Restore the default state

	//Draw hour strokes
	ctx.save(); //Save the default state
	for (let i = 0; i < 12; i++) {
		ctx.beginPath();
		ctx.rotate(Math.PI / 6);
		ctx.moveTo(100, 0);
		ctx.lineTo(120, 0);
		ctx.stroke();
	}
	ctx.restore(); //Restore the default state

	//Draw hour strokes
	ctx.save(); //Save the default state
	ctx.lineWidth = 2;
	for (let i = 0; i < 60; i++) {
		// Skip the hour lines and draw rest
		if (i % 5 !== 0) {
			ctx.beginPath();
			ctx.moveTo(117, 0);
			ctx.lineTo(120, 0);
			ctx.stroke();
		}
		ctx.rotate(Math.PI / 30);
	}
	ctx.restore(); //Restore the default state

	// Get curr time
	const hr = now.getHours() % 12;
	const min = now.getMinutes();
	const sec = now.getSeconds();
	console.log(`${hr} : ${min} : ${sec}`);

	// Draw Hour hand
	ctx.save(); //Save the default state
	ctx.strokeStyle = '#800000';
	ctx.lineWidth = 14;
	ctx.rotate((Math.PI / 6) * hr + (Math.PI / (6 * 60)) * min + (Math.PI / (6 * 60 * 60)) * sec);
	ctx.beginPath();
	ctx.moveTo(-15, 0);
	ctx.lineTo(80, 0);
	ctx.stroke();
	ctx.restore(); //Restore the default state
	// Draw Min hand
	ctx.save(); //Save the default state
	ctx.strokeStyle = '#800000';
	ctx.lineWidth = 6;
	ctx.rotate((Math.PI / 30) * min + (Math.PI / (30 * 60)) * sec);
	ctx.beginPath();
	ctx.moveTo(-15, 0);
	ctx.lineTo(100, 0);
	ctx.stroke();
	ctx.restore(); //Restore the default state
	// Draw Sec hand
	ctx.save(); //Save the default state
	ctx.strokeStyle = '#FF7F50';
	ctx.fillStyle = '#FF7F50';
	ctx.lineWidth = 6;
	ctx.rotate((Math.PI / 30) * sec);
	ctx.beginPath();
	ctx.moveTo(-30, 0);
	ctx.lineTo(100, 0);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.restore(); //Restore the default state

	ctx.restore(); //Restore the default state

	requestAnimationFrame(clock); //Recursive call
}

requestAnimationFrame(clock);
