export default function renderLocation(location) {
	return html`
		<li class="location-item">
			<button hx-post="/places" hx-vals='{"localtionId": "${location.id}"}'>
				<img
					src="${`/images/${location.image.src}`}"
					alt="${location.image.alt}"
				/>
				<h3>${location.title}</h3>
			</button>
		</li>
	`;
}
