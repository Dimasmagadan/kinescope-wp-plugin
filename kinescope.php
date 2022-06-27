<?php
/**
 * Plugin Name:     Kinescope
 * Description:     Building better video experiences. Kinescope video player.
 * Author:          Kinescope
 * Author URI:      https://kinescope.io/
 * Contributors:    odminstudios
 * Text Domain:     kinescope
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Kinescope
 */

if ( ! function_exists( 'kinescope_oembed_provider' ) {
	function kinescope_oembed_provider() {
		wp_oembed_add_provider( 'https://kinescope.io/*', 'https://kinescope.io/oembed?format={format}', false );
	}
	add_action( 'init', 'kinescope_oembed_provider' );
}
