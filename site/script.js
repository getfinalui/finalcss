// apply theme based attribute (if exists on localstorage)
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('data-theme');
if (savedTheme) {
		htmlElement.setAttribute('data-theme', savedTheme);
}


function themeSwitcher() {
		const currentTheme = htmlElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'light'  || !currentTheme ? 'dark' : 'light';   

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