<?php get_header(); ?>

<main class="site-main min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="bg-gray-900 py-20 pt-32 relative overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&crop=center" 
                 alt="Solutions background" class="w-full h-full object-cover">
        </div>

        <!-- Particle Background -->
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

        <div class="container mx-auto px-6 relative z-10">
            <div class="max-w-4xl">
                <div class="mb-4 animate-float">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/logo-color.png" 
                         alt="IZI Support Logo" class="h-16 w-auto">
                </div>

                <h1 class="text-4xl md:text-6xl mb-6 leading-tight hero-title animate-fade-in-up">
                    ТЕХНОЛОГИЙН ШИЙДЛҮҮД
                    <br />
                    <span class="text-blue-400">ТАНАЙ БИЗНЕСТ</span>
                </h1>

                <p class="text-gray-400 text-lg mb-8 max-w-3xl animate-fade-in-up">
                    Орчин үеийн технологийн шийдлүүдээр танай байгууллагыг 
                    цахим орчинд тэргүүлэгч болгож, өрсөлдөх чадварыг нэмэгдүүлнэ.
                </p>

                <div class="flex flex-wrap gap-4 animate-fade-in-up">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all hover-lift">
                        ШИЙДЭЛ АВАХ
                    </button>
                    <button class="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all hover-lift">
                        ЗӨВЛӨГӨӨ АВАХ
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Solutions Overview -->
    <section class="py-20 bg-gray-800">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl mb-6 fade-in">БИДНИЙ ШИЙДЛҮҮД</h2>
                <p class="text-gray-400 text-lg max-w-3xl mx-auto fade-in">
                    Олон жилийн туршлага, дээд зэргийн мэргэжилтэн, дэлхийн шилдэг брэндүүдийн 
                    бүтээгдэхүүнээр танай хэрэгцээг хангана.
                </p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
                <!-- Network Infrastructure -->
                <div class="bg-gray-700 p-8 rounded-lg hover-lift cursor-pointer fade-in">
                    <div class="w-16 h-16 bg-blue-600 rounded-lg mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">БАЙГУУЛЛАГЫН СҮЛЖЭЭ</h3>
                    <p class="text-gray-400 mb-6">
                        Найдвартай, хурдан, аюулгүй сүлжээний дэд бүтцийг бий болгож, 
                        бизнесийн үр ашгийг нэмэгдүүлнэ.
                    </p>
                    <ul class="text-sm text-gray-400 space-y-2">
                        <li>• LAN/WAN сүлжээний дизайн</li>
                        <li>• Wi-Fi шийдэл</li>
                        <li>• Сүлжээний хяналт, удирдлага</li>
                        <li>• 24/7 техникийн дэмжлэг</li>
                    </ul>
                </div>

                <!-- Cloud Technology -->
                <div class="bg-gray-700 p-8 rounded-lg hover-lift cursor-pointer fade-in">
                    <div class="w-16 h-16 bg-green-600 rounded-lg mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">ҮҮЛЭН ТЕХНОЛОГИ</h3>
                    <p class="text-gray-400 mb-6">
                        Хаанаас ч хамаагүй өгөгдөлд хандаж, хамтран ажиллах орчинг бүрдүүлэх 
                        үүлэн шийдлүүд.
                    </p>
                    <ul class="text-sm text-gray-400 space-y-2">
                        <li>• Microsoft 365 шийдэл</li>
                        <li>• Amazon AWS дээр суурилсан шийдэл</li>
                        <li>• Өгөгдлийн нөөцөлт, сэргээлт</li>
                        <li>• Үүлэн серверийн үйлчилгээ</li>
                    </ul>
                </div>

                <!-- Cybersecurity -->
                <div class="bg-gray-700 p-8 rounded-lg hover-lift cursor-pointer fade-in">
                    <div class="w-16 h-16 bg-red-600 rounded-lg mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">КИБЕР АЮУЛГҮЙ БАЙДАЛ</h3>
                    <p class="text-gray-400 mb-6">
                        Кибер довтолгооноос хамгаалж, мэдээллийн аюулгүй байдлыг 
                        хангах цогц шийдэл.
                    </p>
                    <ul class="text-sm text-gray-400 space-y-2">
                        <li>• Firewall, антивирус шийдэл</li>
                        <li>• Өгөгдлийн шифрлэлт</li>
                        <li>• Аюулгүй байдлын аудит</li>
                        <li>• Кибер аюулгүй байдлын сургалт</li>
                    </ul>
                </div>

                <!-- IT Consulting -->
                <div class="bg-gray-700 p-8 rounded-lg hover-lift cursor-pointer fade-in">
                    <div class="w-16 h-16 bg-purple-600 rounded-lg mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">IT ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ</h3>
                    <p class="text-gray-400 mb-6">
                        Технологийн стратеги боловсруулж, хэрэгжүүлэхэд туслах 
                        мэргэжлийн зөвлөгөө.
                    </p>
                    <ul class="text-sm text-gray-400 space-y-2">
                        <li>• IT стратегийн зөвлөгөө</li>
                        <li>• Системийн дизайн</li>
                        <li>• Төслийн удирдлага</li>
                        <li>• Техникийн аудит</li>
                    </ul>
                </div>

                <!-- Data Center -->
                <div class="bg-gray-700 p-8 rounded-lg hover-lift cursor-pointer fade-in">
                    <div class="w-16 h-16 bg-orange-600 rounded-lg mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">ДАТА ТӨВ СЕРВЕР</h3>
                    <p class="text-gray-400 mb-6">
                        Өндөр хүчин чадалтай серверийн шийдэл, дата төвийн бүрэн үйлчилгээ.
                    </p>
                    <ul class="text-sm text-gray-400 space-y-2">
                        <li>• Сервер, хадгалах сангийн шийдэл</li>
                        <li>• Виртуализацийн платформ</li>
                        <li>• Нөөцлөлт, сэргээлтийн шийдэл</li>
                        <li>• Серверийн хяналт, удирдлага</li>
                    </ul>
                </div>

                <!-- Video Management -->
                <div class="bg-gray-700 p-8 rounded-lg hover-lift cursor-pointer fade-in">
                    <div class="w-16 h-16 bg-teal-600 rounded-lg mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">ВИДЕО УДИРДЛАГЫН СИСТЕМ</h3>
                    <p class="text-gray-400 mb-6">
                        Дэвшилтэт камерийн хяналтын системээр аюулгүй байдлыг хангана.
                    </p>
                    <ul class="text-sm text-gray-400 space-y-2">
                        <li>• IP камерийн шийдэл</li>
                        <li>• Видео аналитик</li>
                        <li>• Алсын зайнаас хяналт</li>
                        <li>• Нэгдсэн хяналтын платформ</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl mb-6 fade-in">МАНАЙ АЖИЛЛАХ АРГА</h2>
                <p class="text-gray-400 text-lg max-w-3xl mx-auto fade-in">
                    Төслийн эхнээс эцэс хүртэл та бидэнтэй хамтран ажиллах болно.
                </p>
            </div>

            <div class="grid md:grid-cols-4 gap-8">
                <div class="text-center fade-in">
                    <div class="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span class="text-2xl font-bold">1</span>
                    </div>
                    <h3 class="text-xl mb-4">ШИНЖИЛГЭЭ</h3>
                    <p class="text-gray-400">
                        Танай байгууллагын хэрэгцээ, одоогийн нөхцөл байдлыг дүн шинжилгээ хийнэ.
                    </p>
                </div>

                <div class="text-center fade-in">
                    <div class="w-20 h-20 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span class="text-2xl font-bold">2</span>
                    </div>
                    <h3 class="text-xl mb-4">ДИЗАЙН</h3>
                    <p class="text-gray-400">
                        Таны хэрэгцээнд тохирсон технологийн шийдлийг дизайнлан боловсруулна.
                    </p>
                </div>

                <div class="text-center fade-in">
                    <div class="w-20 h-20 bg-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span class="text-2xl font-bold">3</span>
                    </div>
                    <h3 class="text-xl mb-4">ХЭРЭГЖҮҮЛЭЛТ</h3>
                    <p class="text-gray-400">
                        Төлөвлөсөн шийдлийг мэргэжлийн баг танай байгууллагад хэрэгжүүлнэ.
                    </p>
                </div>

                <div class="text-center fade-in">
                    <div class="w-20 h-20 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                        <span class="text-2xl font-bold">4</span>
                    </div>
                    <h3 class="text-xl mb-4">ДЭМЖЛЭГ</h3>
                    <p class="text-gray-400">
                        Үргэлжлэх техникийн дэмжлэг, хяналтаар системийн найдвартай ажиллагааг хангана.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl mb-6 fade-in">ӨӨРИЙН ШИЙДЛИЙГ ОЛЦГООЁ</h2>
            <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto fade-in">
                Манай мэргэжилтнүүд тантай хамтран ажиллаж, танай байгууллагад 
                хамгийн тохиромжтой технологийн шийдлийг олох болно.
            </p>
            <div class="flex flex-wrap justify-center gap-4 fade-in">
                <button class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors hover-lift">
                    ХОЛБОГДОХ
                </button>
                <button class="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors hover-lift">
                    ЦАГ ТОХИРУУЛАХ
                </button>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>