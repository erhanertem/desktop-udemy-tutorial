import { html } from '../../prettierhtmx.js';

export default function renderLocation(
	location,
	isAvailableLocationList = true
) {
	let attributes;

	// If the clicked pic card belongs to 'Available Locations' List, send a POST req
	if (isAvailableLocationList) {
		attributes = `
         hx-post="/places"
		   hx-vals='{"locationId": "${location.id}"}'
		   hx-target="#interesting-locations"
		   hx-swap="beforeend show:#int-locations-section:top"
         `;
	} else {
		// If the clicked pic card belongs to 'My Dream Locations' List, send a DELETE req
		attributes = `
			hx-delete="/places/${location.id}" 
         hx-target="closest li"
         hx-swap="outerHTML"
		`;
	}

	return html`
		<li class="location-item">
			<button ${attributes}>
				<img
					src="${`/images/${location.image.src}`}"
					alt="${location.image.alt}"
				/>
				<h3>${location.title}</h3>
			</button>
		</li>
	`;
}
