<?php get_header(); ?>

<!-- Hero Section -->
<section class="animated-bg py-20 pt-32 relative overflow-hidden">
    <div class="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&crop=center" 
             alt="Technology background" class="w-full h-full object-cover">
    </div>

    <!-- Simplified Particle Animation -->
    <div class="particle-bg">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 hero-content">
        <div class="max-w-3xl">
            <div class="mb-4 animate-float">
                <?php if (has_custom_logo()) : ?>
                    <?php the_custom_logo(); ?>
                <?php else : ?>
                    <img src="https://i.ibb.co/9DcTr0G/Logo-color.png" alt="<?php bloginfo('name'); ?>" class="h-16 w-auto">
                <?php endif; ?>
            </div>

            <h1 class="text-4xl md:text-6xl mb-6 leading-tight animate-fade-in-up hero-title">
                <?php echo esc_html(izi_get_theme_option('hero_title', 'ТЕХНОЛОГИЙН ШИЛДЭГ ШИЙДЛИЙГ ТАНАЙ БАЙГУУЛЛЛАГАД')); ?>
            </h1>

            <p class="text-gray-400 text-lg mb-8 max-w-2xl animate-fade-in-up">
                <?php echo esc_html(izi_get_theme_option('hero_description', 'Бид танай байгууллагын хэрэгцээнд тохирсон технологийн шийдлүүдийг санал болгож, найдвартай үйлчилгээ үзүүлдэг.')); ?>
            </p>

            <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all hover-lift animate-fade-in-up">
                <?php echo esc_html(izi_get_theme_option('hero_button_text', 'ТАНИЛЦАХ')); ?>
            </button>
        </div>
    </div>
</section>

<!-- Services Section -->
<section class="py-20 bg-gray-800 fade-in">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl text-center mb-16 fade-in">ШИЙДЛҮҮД</h2>

        <div class="grid services-grid gap-8 stagger-animation">
            <?php
            $services = array(
                array(
                    'icon' => 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
                    'title' => 'БАЙГУУЛЛАГЫН СҮЛЖЭЭ',
                    'description' => 'Байгуулагын сүлжээ'
                ),
                array(
                    'icon' => 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
                    'title' => 'ҮҮЛЭН ТЕХНОЛОГИ',
                    'description' => 'Үүлэн технологид суурилсан бүхий л шийдэл'
                ),
                array(
                    'icon' => 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                    'title' => 'КИБЕР АЮУЛГҮЙ БАЙДАЛ',
                    'description' => 'Кибер аюулгүй байдлын шийдэл, мэдээллийн нууцлал хамгаалалт'
                ),
                array(
                    'icon' => 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
                    'title' => 'IT ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ',
                    'description' => 'Олон жилийн туршлагатай инженерүүдийн мэдлэг туршлага'
                ),
                array(
                    'icon' => 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
                    'title' => 'ДАТА ТӨВ СЕРВЕР',
                    'description' => 'Байгууллагын сервер, дата төвийн програм хангамж болон тоног төхөөрөмж'
                ),
                array(
                    'icon' => 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
                    'title' => 'ВИДЕО УДИРДЛАГЫН СИСТЕМ',
                    'description' => 'КАМЕРЫН ПРОГРАМ ХАНГАМЖИЙН ШИЙДЭЛ'
                )
            );

            foreach ($services as $service) : ?>
                <div class="bg-gray-700 p-6 rounded-lg cursor-pointer hover-lift fade-in">
                    <div class="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center hover-scale transition-all">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="<?php echo esc_attr($service['icon']); ?>"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-3"><?php echo esc_html($service['title']); ?></h3>
                    <p class="text-gray-400"><?php echo esc_html($service['description']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Partners Section with Horizontal Scrolling -->
<section class="py-20 bg-gray-900 fade-in">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl text-center mb-16 fade-in">ХАМТРАГЧ БАЙГУУЛЛАГУУД</h2>

        <div class="partners-container">
            <div class="partners-carousel" id="partners-carousel">
                <?php
                $brands = array(
                    'Microsoft',
                    'Cisco',
                    'VMware',
                    'Dell Technologies',
                    'HP Enterprise',
                    'Lenovo',
                    'Intel',
                    'AMD',
                    'NVIDIA',
                    'IBM',
                    'Oracle',
                    'Samsung'
                );
                
                // Triple the partners for seamless infinite scroll
                for ($i = 0; $i < 3; $i++) {
                    foreach ($brands as $brand) : ?>
                        <div class="partner-card">
                            <div class="partner-text"><?php echo esc_html($brand); ?></div>
                        </div>
                    <?php endforeach;
                } ?>
            </div>
        </div>
    </div>
</section>

<!-- News Section -->
<section class="py-20 bg-gray-800 fade-in">
    <div class="container mx-auto px-6">
        <h2 class="text-3xl text-center mb-16 fade-in">МЭДЭЭЛЭЛ</h2>

        <div class="grid news-grid gap-8 stagger-animation">
            <?php
            $latest_posts = get_posts(array(
                'numberposts' => 3,
                'post_status' => 'publish'
            ));

            if (empty($latest_posts)) {
                // Default articles if no posts exist
                $articles = array(
                    array(
                        'image' => 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
                        'date' => '2025.06.01',
                        'title' => 'Хаанаас ч хамаагүй хяна',
                        'content' => 'Nx Witness — Хаанаас ч хамаагүй хяна. Үүлэн технологид суурилсан ухаалаг хяналтын шийдэл. Татаад суулга. Cloud-оор хяна. Гол боломжууд:...'
                    ),
                    array(
                        'image' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
                        'date' => '2025.04.25',
                        'title' => 'Secutech Taiwan 2025',
                        'content' => 'Тэр зүгээр нэг VMS хийсэнгүй. Тэр дүрмийг өөрчилсөн. 2010 он. Nathan Wheeler нэртэй энэ залуу нэг л зүйлийг ойлгосон байв. Видео хяналтын салбар хөгжилд биш, уламжлалт сэтгэлгээнд баригдчихсан байнаа гэж . . .'
                    ),
                    array(
                        'image' => 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
                        'date' => '2025.04.04',
                        'title' => 'QNAP & Nx Witness хамтдаа!',
                        'content' => 'Одоо та Nx Witness видео хяналтын системийг QNAP төхөөрөмж дээр шууд суулгаж, ашиглах боломжтой боллоо! QNAP нь Network Optix-ийн албан ёсны технологийн түнш болж. Видео бичлэгээ найдвартай, хурдан, үр дүнтэй хадгалах боломжыг хэрэглэгч нарт илүү ойртууллаа.…'
                    )
                );

                foreach ($articles as $article) : ?>
                    <article class="bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover-lift fade-in">
                        <div class="overflow-hidden">
                            <img src="<?php echo esc_url($article['image']); ?>" 
                                 alt="Article image" 
                                 class="w-full h-48 object-cover hover-scale transition-transform">
                        </div>
                        <div class="p-6">
                            <div class="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm mb-3 hover-scale">
                                <?php echo esc_html($article['date']); ?>
                            </div>
                            <h3 class="mb-3"><?php echo esc_html($article['title']); ?></h3>
                            <p class="text-gray-400 text-sm mb-4"><?php echo esc_html($article['content']); ?></p>
                        </div>
                    </article>
                <?php endforeach;

            } else {
                foreach ($latest_posts as $post) : 
                    setup_postdata($post); ?>
                    <article class="bg-gray-700 rounded-lg overflow-hidden cursor-pointer hover-lift fade-in">
                        <div class="overflow-hidden">
                            <?php if (has_post_thumbnail()) : ?>
                                <?php the_post_thumbnail('medium', array('class' => 'w-full h-48 object-cover hover-scale transition-transform')); ?>
                            <?php else : ?>
                                <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop&crop=center" 
                                     alt="<?php the_title(); ?>" 
                                     class="w-full h-48 object-cover hover-scale transition-transform">
                            <?php endif; ?>
                        </div>
                        <div class="p-6">
                            <div class="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm mb-3 hover-scale">
                                <?php echo get_the_date('Y.m.d'); ?>
                            </div>
                            <h3 class="mb-3">
                                <a href="<?php the_permalink(); ?>" class="hover:text-blue-400 transition-colors">
                                    <?php the_title(); ?>
                                </a>
                            </h3>
                            <p class="text-gray-400 text-sm mb-4">
                                <?php echo esc_html(wp_trim_words(get_the_excerpt(), 30, '...')); ?>
                            </p>
                        </div>
                    </article>
                <?php endforeach;
                wp_reset_postdata();
            } ?>
        </div>
    </div>
</section>

<?php get_footer(); ?>