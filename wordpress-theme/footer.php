</main>

<footer class="bg-gray-900 py-12 border-t border-gray-700">
    <div class="container mx-auto px-6">
        <div class="footer-grid grid gap-8">
            <!-- Company Info -->
            <div class="footer-column">
                <h4>IZI SUPPORT</h4>
                <p><?php echo esc_html(izi_get_theme_option('hero_description', 'Бид танай байгууллагын хэрэгцээнд тохирсон технологийн шийдлүүдийг санал болгож, найдвартай үйлчилгээ үзүүлдэг.')); ?></p>
            </div>

            <!-- Services -->
            <div class="footer-column">
                <h4>ҮЙЛЧИЛГЭЭ</h4>
                <p>Байгууллагын сүлжээ</p>
                <p>Үүлэн технологи</p>
                <p>Кибер аюулгүй байдал</p>
                <p>IT зөвлөх үйлчилгээ</p>
                <p>Дата төв сервер</p>
                <p>Видео удирдлагын систем</p>
            </div>

            <!-- Contact Info -->
            <div class="footer-column">
                <h4>ХОЛБОО БАРИХ</h4>
                <p>И-мэйл: <?php echo esc_html(izi_get_theme_option('contact_email', 'info@izsupport.mn')); ?></p>
                <p>Утас: <?php echo esc_html(izi_get_theme_option('contact_phone', '8088-8888')); ?></p>
                <p>Хаяг: <?php echo esc_html(izi_get_theme_option('contact_address', 'Чингэлтэй дүүрэг, 5-р хороо МН ТАУЭР 12 давхар 1206 тоот')); ?></p>
            </div>

            <!-- Social Links -->
            <div class="footer-column">
                <h4>НИЙГМИЙН СҮЛЖЭЭ</h4>
                <div class="space-y-2">
                    <a href="#" class="block hover:text-blue-400 transition-colors">Facebook</a>
                    <a href="#" class="block hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="#" class="block hover:text-blue-400 transition-colors">Twitter</a>
                    <a href="#" class="block hover:text-blue-400 transition-colors">Instagram</a>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; <?php echo date('Y'); ?> IZI Support. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>

</body>
</html>