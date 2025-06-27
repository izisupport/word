<?php
/**
 * IZI Support Theme Functions
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Theme setup
 */
function izi_support_theme_setup() {
    // Add theme support for various features
    add_theme_support('post-thumbnails');
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'izi-support-theme'),
    ));
}
add_action('after_setup_theme', 'izi_support_theme_setup');

/**
 * Enqueue scripts and styles
 */
function izi_support_enqueue_scripts() {
    // Enqueue main stylesheet with cache-busting
    wp_enqueue_style(
        'izi-support-main-style',
        get_template_directory_uri() . '/assets/css/main.css',
        array(),
        '1.0.1' // Updated version to force cache refresh
    );

    // Enqueue main JavaScript with cache-busting
    wp_enqueue_script(
        'izi-support-main-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        '1.0.1', // Updated version to force cache refresh
        true
    );

    // Localize script for AJAX
    wp_localize_script('izi-support-main-script', 'izi_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('izi_nonce'),
    ));
}
add_action('wp_enqueue_scripts', 'izi_support_enqueue_scripts');

/**
 * Add inline CSS for animation debugging (development only)
 */
function izi_support_debug_styles() {
    if (WP_DEBUG || (defined('WP_LOCAL_DEV') && WP_LOCAL_DEV)) {
        echo '<style>
        /* Debug styles for partners carousel */
        .partners-container {
            border: 2px solid red !important;
            background: rgba(255, 0, 0, 0.1) !important;
        }
        .partners-carousel {
            border: 2px solid blue !important;
            background: rgba(0, 0, 255, 0.1) !important;
        }
        /* Force animation restart */
        .partners-carousel {
            animation: scrollHorizontal 30s linear infinite !important;
        }
        </style>';
    }
}
add_action('wp_head', 'izi_support_debug_styles');

/**
 * Custom post type for Services
 */
function izi_support_create_services_post_type() {
    register_post_type('services',
        array(
            'labels' => array(
                'name' => __('Services', 'izi-support-theme'),
                'singular_name' => __('Service', 'izi-support-theme')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
            'menu_icon' => 'dashicons-admin-tools',
        )
    );
}
add_action('init', 'izi_support_create_services_post_type');

/**
 * Custom post type for Partners
 */
function izi_support_create_partners_post_type() {
    register_post_type('partners',
        array(
            'labels' => array(
                'name' => __('Partners', 'izi-support-theme'),
                'singular_name' => __('Partner', 'izi-support-theme')
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'thumbnail'),
            'menu_icon' => 'dashicons-groups',
        )
    );
}
add_action('init', 'izi_support_create_partners_post_type');

/**
 * Customizer settings
 */
function izi_support_customize_register($wp_customize) {
    // Hero section
    $wp_customize->add_section('izi_hero_section', array(
        'title' => __('Hero Section', 'izi-support-theme'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('hero_title', array(
        'default' => 'ТЕХНОЛОГИЙН ШИЛДЭГ ШИЙДЛИЙГ ТАНАЙ БАЙГУУЛЛЛАГАД',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_title', array(
        'label' => __('Hero Title', 'izi-support-theme'),
        'section' => 'izi_hero_section',
        'type' => 'textarea',
    ));

    $wp_customize->add_setting('hero_description', array(
        'default' => 'Бид танай байгууллагын хэрэгцээнд тохирсон технологийн шийдлүүдийг санал болгож, найдвартай үйлчилгээ үзүүлдэг.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('hero_description', array(
        'label' => __('Hero Description', 'izi-support-theme'),
        'section' => 'izi_hero_section',
        'type' => 'textarea',
    ));

    $wp_customize->add_setting('hero_button_text', array(
        'default' => 'ТАНИЛЦАХ',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('hero_button_text', array(
        'label' => __('Hero Button Text', 'izi-support-theme'),
        'section' => 'izi_hero_section',
        'type' => 'text',
    ));

    // Contact information
    $wp_customize->add_section('izi_contact_section', array(
        'title' => __('Contact Information', 'izi-support-theme'),
        'priority' => 40,
    ));

    $wp_customize->add_setting('contact_email', array(
        'default' => 'info@izsupport.mn',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('contact_email', array(
        'label' => __('Email', 'izi-support-theme'),
        'section' => 'izi_contact_section',
        'type' => 'email',
    ));

    $wp_customize->add_setting('contact_phone', array(
        'default' => '8088-8888',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('contact_phone', array(
        'label' => __('Phone', 'izi-support-theme'),
        'section' => 'izi_contact_section',
        'type' => 'text',
    ));

    $wp_customize->add_setting('contact_address', array(
        'default' => 'Чингэлтэй дүүрэг, 5-р хороо МН ТАУЭР 12 давхар 1206 тоот',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));

    $wp_customize->add_control('contact_address', array(
        'label' => __('Address', 'izi-support-theme'),
        'section' => 'izi_contact_section',
        'type' => 'textarea',
    ));
}
add_action('customize_register', 'izi_support_customize_register');

/**
 * Get theme option with fallback
 */
function izi_get_theme_option($option, $default = '') {
    return get_theme_mod($option, $default);
}

/**
 * Remove default WordPress widgets that we don't want
 */
function izi_support_remove_default_widgets() {
    unregister_widget('WP_Widget_Pages');
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Archives');
    unregister_widget('WP_Widget_Links');
    unregister_widget('WP_Widget_Meta');
    unregister_widget('WP_Widget_Search');
    unregister_widget('WP_Widget_Text');
    unregister_widget('WP_Widget_Categories');
    unregister_widget('WP_Widget_Recent_Posts');
    unregister_widget('WP_Widget_Recent_Comments');
    unregister_widget('WP_Widget_RSS');
    unregister_widget('WP_Widget_Tag_Cloud');
    unregister_widget('WP_Nav_Menu_Widget');
    unregister_widget('WP_Widget_Custom_HTML');
    unregister_widget('WP_Widget_Media_Audio');
    unregister_widget('WP_Widget_Media_Image');
    unregister_widget('WP_Widget_Media_Video');
    unregister_widget('WP_Widget_Media_Gallery');
}
add_action('widgets_init', 'izi_support_remove_default_widgets', 1);

/**
 * Disable WordPress default widgets dashboard
 */
function izi_support_remove_dashboard_widgets() {
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
    remove_meta_box('dashboard_recent_drafts', 'dashboard', 'side');
    remove_meta_box('dashboard_primary', 'dashboard', 'side');
    remove_meta_box('dashboard_secondary', 'dashboard', 'side');
    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');
}
add_action('admin_init', 'izi_support_remove_dashboard_widgets');

/**
 * Clean up WordPress head
 */
function izi_support_clean_head() {
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');
    remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10);
}
add_action('after_setup_theme', 'izi_support_clean_head');

/**
 * Remove WordPress version from RSS feeds
 */
function izi_support_remove_version() {
    return '';
}
add_filter('the_generator', 'izi_support_remove_version');

/**
 * Disable XML-RPC
 */
add_filter('xmlrpc_enabled', '__return_false');

/**
 * Remove WordPress emoji scripts
 */
function izi_support_disable_emojis() {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
}
add_action('init', 'izi_support_disable_emojis');

/**
 * Custom logo setup
 */
function izi_support_custom_logo_setup() {
    $defaults = array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    );
    add_theme_support('custom-logo', $defaults);
}
add_action('after_setup_theme', 'izi_support_custom_logo_setup');