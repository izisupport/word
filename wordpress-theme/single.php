<?php get_header(); ?>

<div class="py-20 pt-32 bg-gray-800">
    <div class="container mx-auto px-6">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article class="bg-gray-700 rounded-lg overflow-hidden max-w-4xl mx-auto">
                    <?php if (has_post_thumbnail()) : ?>
                        <div class="w-full h-64 md:h-96 overflow-hidden">
                            <?php the_post_thumbnail('full', array('class' => 'w-full h-full object-cover')); ?>
                        </div>
                    <?php endif; ?>
                    
                    <div class="p-8">
                        <div class="mb-4">
                            <span class="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm">
                                <?php echo get_the_date('Y.m.d'); ?>
                            </span>
                        </div>
                        
                        <h1 class="text-3xl md:text-4xl mb-6 text-white"><?php the_title(); ?></h1>
                        
                        <div class="prose prose-invert max-w-none text-gray-300">
                            <?php the_content(); ?>
                        </div>
                        
                        <div class="mt-8 pt-8 border-t border-gray-600">
                            <div class="flex items-center justify-between">
                                <div class="text-sm text-gray-400">
                                    <?php _e('Нийтэлсэн:', 'izi-support-theme'); ?> <?php echo get_the_date(); ?>
                                </div>
                                
                                <?php if (has_category()) : ?>
                                    <div class="text-sm text-gray-400">
                                        <?php _e('Ангилал:', 'izi-support-theme'); ?> 
                                        <?php the_category(', '); ?>
                                    </div>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </article>
                
                <div class="max-w-4xl mx-auto mt-8">
                    <div class="flex justify-between">
                        <div>
                            <?php previous_post_link('%link', '← %title'); ?>
                        </div>
                        <div>
                            <?php next_post_link('%link', '%title →'); ?>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>