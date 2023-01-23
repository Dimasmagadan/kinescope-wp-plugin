<?php
/**
 * Plugin Name:     Kinescope
 * Description:     Building better video experiences. Kinescope video player.
 * Author:          Kinescope
 * Author URI:      https://kinescope.io/
 * Contributors:    odminstudios
 * Text Domain:     kinescope
 * Domain Path:     /languages
 * Version:         0.2.1
 *
 * @package         Kinescope
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'kinescope_oembed_provider' ) ){
	function kinescope_oembed_provider() {
		wp_oembed_add_provider( 'https://kinescope.io/*', 'https://kinescope.io/oembed?format={format}', false );
	}
	add_action( 'init', 'kinescope_oembed_provider' );
}

function kinescope_register_oembed_provider_block() {
    wp_register_script(
        'kinescope-block-editor-script',
        plugin_dir_url( __FILE__ ) . 'dist/block.js',
        array(
			'wp-blocks',
			'wp-components',
			'wp-editor',
			'wp-element',
			'wp-i18n',
		)
    );

	// wp_enqueue_script('kinescope-block-editor-script');

	register_block_type_from_metadata( plugin_dir_path( __FILE__ ) . 'block/block.json' );
}
add_action( 'enqueue_block_editor_assets', 'kinescope_register_oembed_provider_block' );

