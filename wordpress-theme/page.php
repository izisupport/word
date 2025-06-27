<?php get_header(); ?>

<section class="py-20 pt-32 bg-gray-800">
    <div class="container mx-auto px-6">
        <?php while (have_posts()) : the_post(); ?>
            <article class="prose prose-lg max-w-4xl mx-auto">
                <h1 class="text-4xl mb-8 text-center text-white"><?php the_title(); ?></h1>
                
                <?php if (has_post_thumbnail()) : ?>
                    <div class="mb-8">
                        <?php the_post_thumbnail('large', array('class' => 'w-full h-64 object-cover rounded-lg')); ?>
                    </div>
                <?php endif; ?>
                
                <div class="content text-gray-300">
                    <?php the_content(); ?>
                </div>
                
                <?php
                // Page navigation for multi-page content
                wp_link_pages(array(
                    'before' => '<div class="page-links mt-8"><span class="page-links-title">Pages:</span>',
                    'after'  => '</div>',
                ));
                ?>
            </article>
        <?php endwhile; ?>
    </div>
</section>

<?php get_footer(); ?>