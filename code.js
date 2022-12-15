

document.addEventListener('mousemove', (e) => {
    
	const mousex = e.clientX;
	const mousey = e.clientY;
    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2; 
	const angleDeg = Angle(mousex, mousey, anchorX, anchorY);

	const eyes = document.querySelectorAll('.eye');

	eyes.forEach((eye) => {
		eye.style.transform = `rotate(${180 + angleDeg}deg)`;
	});
});

const Angle = (cx, cy, ex, ey) => {
	const dy = ey - cy;
	const dx = ex - cx;
	const rad = Math.atan2(dy, dx);
	const degree = (rad * 180) / Math.PI;
	return degree;
};
