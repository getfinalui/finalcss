// apply theme based attribute (if exists on localstorage)
const htmlElement = document.documentElement;
document.addEventListener('DOMContentLoaded', () => {		
	// Check localStorage for saved theme
	const savedTheme = localStorage.getItem('data-theme');
	if (savedTheme) {
			htmlElement.setAttribute('data-theme', savedTheme);
	}
});

function themeswitch() {
		const currentTheme = htmlElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'light' ? 'dark' : 'light';   
		// Set the new theme on the body element
		htmlElement.setAttribute('data-theme', newTheme);          
		// Save the new theme in localStorage
		localStorage.setItem('data-theme', newTheme);
}

// prevent empty links with # from scrolling top
document.addEventListener('DOMContentLoaded', (event) => {
	document.querySelectorAll('a[href="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
		});
	});
});