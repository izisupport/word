<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header fixed top-0 w-full z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm transition-all">
    <div class="container mx-auto px-6">
        <div class="flex items-center justify-between py-4">
            <!-- Logo -->
            <div class="flex items-center">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center">
                        <img src="https://i.ibb.co/9DcTr0G/Logo-color.png" alt="<?php bloginfo('name'); ?>" class="h-8 w-auto">
                        <span class="ml-2 text-xl text-white hidden md:block"><?php bloginfo('name'); ?></span>
                    </a>
                <?php endif; ?>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-8">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'primary-menu flex space-x-8',
                    'container' => false,
                    'fallback_cb' => 'izi_support_fallback_menu',
                ));
                ?>
            </nav>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-button" class="mobile-menu-button md:hidden">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="mobile-menu">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'mobile-menu-items',
                'container' => false,
                'fallback_cb' => 'izi_support_fallback_mobile_menu',
            ));
            ?>
        </div>
    </div>
</header>

<main class="site-main">

<?php
// Fallback menu if no menu is assigned
function izi_support_fallback_menu() {
    echo '<ul class="primary-menu flex space-x-8">';
    echo '<li><a href="' . esc_url(home_url('/')) . '" class="text-gray-300 hover:text-white transition-colors">Нүүр</a></li>';
    echo '<li><a href="#services" class="text-gray-300 hover:text-white transition-colors">Үйлчилгээ</a></li>';
    echo '<li><a href="#partners" class="text-gray-300 hover:text-white transition-colors">Хамтрагчид</a></li>';
    echo '<li><a href="#news" class="text-gray-300 hover:text-white transition-colors">Мэдээлэл</a></li>';
    echo '<li><a href="#contact" class="text-gray-300 hover:text-white transition-colors">Холбоо барих</a></li>';
    echo '</ul>';
}

function izi_support_fallback_mobile_menu() {
    echo '<a href="' . esc_url(home_url('/')) . '" class="block py-2 text-gray-300 hover:text-white">Нүүр</a>';
    echo '<a href="#services" class="block py-2 text-gray-300 hover:text-white">Үйлчилгээ</a>';
    echo '<a href="#partners" class="block py-2 text-gray-300 hover:text-white">Хамтрагчид</a>';
    echo '<a href="#news" class="block py-2 text-gray-300 hover:text-white">Мэдээлэл</a>';
    echo '<a href="#contact" class="block py-2 text-gray-300 hover:text-white">Холбоо барих</a>';
}
?>