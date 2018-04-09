/** 
 * Open all external links in a new window
 */
jQuery(document).ready(function($) {
	$('a')
		.filter('[href^="https"], [href^="//"]')
		.not('[href*="' + window.location.host + '"]')
		.attr('rel', 'noopener noreferrer')
		.attr('target', '_blank');
    console.log("done!")
});