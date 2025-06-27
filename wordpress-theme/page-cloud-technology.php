<?php get_header(); ?>

<main class="site-main min-h-screen bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="bg-gray-900 py-20 pt-32 relative overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&crop=center" 
                 alt="Cloud technology background" class="w-full h-full object-cover">
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
                    ҮҮЛЭН ТЕХНОЛОГИ
                    <br />
                    <span class="text-blue-400">ЦААШДЫН ШИЙДЭЛ</span>
                </h1>

                <p class="text-gray-400 text-lg mb-8 max-w-3xl animate-fade-in-up">
                    Хаанаас ч хамаагүй өгөгдөлд хандаж, хамтран ажиллах орчинг бүрдүүлэх 
                    орчин үеийн үүлэн технологийн шийдлүүд.
                </p>

                <div class="flex flex-wrap gap-4 animate-fade-in-up">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all hover-lift">
                        ҮҮЛЭН ШИЙДЭЛ АВАХ
                    </button>
                    <button class="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all hover-lift">
                        ДЕМО ҮЗЭХ
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Cloud Benefits -->
    <section class="py-20 bg-gray-800">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl mb-6 fade-in">ҮҮЛЭН ТЕХНОЛОГИЙН ДАВУУ ТАЛ</h2>
                <p class="text-gray-400 text-lg max-w-3xl mx-auto fade-in">
                    Орчин үеийн бизнесийн хурдацтай өөрчлөлтөд дасан зохицох 
                    уян хатан, найдвартай шийдэл.
                </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 stagger-animation">
                <div class="text-center fade-in">
                    <div class="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M13 10V3L4 14h7v7l9-11h-7z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">ХУРДАН ХЭРЭГЖҮҮЛЭЛТ</h3>
                    <p class="text-gray-400">
                        Хэдэн минутын дотор шинэ үйлчилгээг эхлүүлж, 
                        бизнесийн хэрэгцээнд хурдан хариулах боломж.
                    </p>
                </div>

                <div class="text-center fade-in">
                    <div class="w-16 h-16 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">ЗАРДЛЫН ХЭМНЭЛТ</h3>
                    <p class="text-gray-400">
                        Хэрэгтэй зүйлдээ л төлж, тоног төхөөрөмжийн 
                        том хөрөнгө оруулалтаас зайлсхийх боломж.
                    </p>
                </div>

                <div class="text-center fade-in">
                    <div class="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center hover-scale">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                        </svg>
                    </div>
                    <h3 class="text-xl mb-4">ДЭЭД ЗЭРГИЙН АЮУЛГҮЙ БАЙДАЛ</h3>
                    <p class="text-gray-400">
                        Олон давхар хамгаалалт, шифрлэлт, нөөцлөлтөөр 
                        өгөгдлийн бүрэн аюулгүй байдлыг хангана.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Cloud Services -->
    <section class="py-20 bg-gray-900">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl mb-6 fade-in">ҮҮЛЭН ҮЙЛЧИЛГЭЭНИЙ ТӨРЛҮҮД</h2>
                <p class="text-gray-400 text-lg max-w-3xl mx-auto fade-in">
                    Танай бизнесийн хэрэгцээнд тохирсон үүлэн шийдлүүдийг сонгоно уу.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Microsoft 365 -->
                <div class="bg-gray-800 p-8 rounded-lg hover-lift fade-in">
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-blue-600 rounded-lg mr-6 flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-2xl mb-2">Microsoft 365</h3>
                            <p class="text-blue-400">Бүрэн хамтын ажиллагааны платформ</p>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Office програмууд, имэйл, видео хурал, файл хуваалцах зэрэг 
                        бүх хэрэгцээт үйлчилгээг нэг платформд авна.
                    </p>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Office програмууд</h4>
                            <p class="text-sm text-gray-400">Word, Excel, PowerPoint, Outlook</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Teams</h4>
                            <p class="text-sm text-gray-400">Видео хурал, чат, хамтын ажиллагаа</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">SharePoint</h4>
                            <p class="text-sm text-gray-400">Документ удирдлага, интранет</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">OneDrive</h4>
                            <p class="text-sm text-gray-400">Файл хадгалалт, хуваалцалт</p>
                        </div>
                    </div>
                </div>

                <!-- AWS Solutions -->
                <div class="bg-gray-800 p-8 rounded-lg hover-lift fade-in">
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-orange-600 rounded-lg mr-6 flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-2xl mb-2">Amazon Web Services</h3>
                            <p class="text-orange-400">Дэлхийн хамгийн том үүлэн платформ</p>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Хүчирхэг AWS дээр суурилсан шийдлүүдээр таны бизнесийг 
                        дэлхийн стандартад хүргэнэ.
                    </p>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">EC2 серверүүд</h4>
                            <p class="text-sm text-gray-400">Виртуал серверийн үйлчилгээ</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">S3 хадгалалт</h4>
                            <p class="text-sm text-gray-400">Файл, өгөгдлийн хадгалалт</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">RDS мэдээллийн сан</h4>
                            <p class="text-sm text-gray-400">Удирдлагатай өгөгдлийн сан</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Lambda функц</h4>
                            <p class="text-sm text-gray-400">Сервергүй програмчлал</p>
                        </div>
                    </div>
                </div>

                <!-- Backup & Recovery -->
                <div class="bg-gray-800 p-8 rounded-lg hover-lift fade-in">
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-green-600 rounded-lg mr-6 flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-2xl mb-2">Нөөцлөлт & Сэргээлт</h3>
                            <p class="text-green-400">Өгөгдлийн найдвартай хамгаалалт</p>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Өгөгдөл алдагдахаас хамгаалж, аливаа нөхцөлд 
                        хурдан сэргээх боломжийг бүрдүүлнэ.
                    </p>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Автомат нөөцлөлт</h4>
                            <p class="text-sm text-gray-400">Өдөр тутмын автомат нөөцлөлт</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Түргэн сэргээлт</h4>
                            <p class="text-sm text-gray-400">Хэдэн минутын дотор сэргээлт</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Олон газарт хадгалах</h4>
                            <p class="text-sm text-gray-400">Дэлхийн олон төвд хадгалах</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Шифрлэлт</h4>
                            <p class="text-sm text-gray-400">256-бит шифрлэлттэй</p>
                        </div>
                    </div>
                </div>

                <!-- Private Cloud -->
                <div class="bg-gray-800 p-8 rounded-lg hover-lift fade-in">
                    <div class="flex items-center mb-6">
                        <div class="w-16 h-16 bg-purple-600 rounded-lg mr-6 flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-2xl mb-2">Хувийн үүл</h3>
                            <p class="text-purple-400">Өндөр нууцлалтай шийдэл</p>
                        </div>
                    </div>
                    <p class="text-gray-400 mb-6">
                        Зөвхөн танай байгууллагад зориулсан хувийн үүлэн орчин, 
                        дээд зэргийн аюулгүй байдал.
                    </p>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Бүрэн хяналт</h4>
                            <p class="text-sm text-gray-400">Бүх эрх, хяналт танай гарт</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Дээд зэргийн нууцлал</h4>
                            <p class="text-sm text-gray-400">Өндөр нууцлалтай өгөгдөлд</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">Захиалгат тохиргоо</h4>
                            <p class="text-sm text-gray-400">Танай хэрэгцээнд тохируулсан</p>
                        </div>
                        <div class="bg-gray-700 p-4 rounded-lg">
                            <h4 class="font-semibold mb-2">24/7 дэмжлэг</h4>
                            <p class="text-sm text-gray-400">Тогтмол техникийн дэмжлэг</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Migration Process -->
    <section class="py-20 bg-gray-800">
        <div class="container mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-3xl mb-6 fade-in">ҮҮЛЭНД ШИЛЖИХ ПРОЦЕСС</h2>
                <p class="text-gray-400 text-lg max-w-3xl mx-auto fade-in">
                    Өөрийн өгөгдөл, системийг үүлэнд аюулгүй, үр дүнтэй шилжүүлэх алхмууд.
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="relative">
                    <!-- Timeline line -->
                    <div class="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-600"></div>
                    
                    <!-- Step 1 -->
                    <div class="relative flex items-center mb-16 fade-in">
                        <div class="w-1/2 pr-8 text-right">
                            <h3 class="text-xl mb-4">ҮНЭЛГЭЭ & ТӨЛӨВЛӨЛТ</h3>
                            <p class="text-gray-400">
                                Одоогийн системийг дүн шинжилгээ хийж, үүлэнд шилжих 
                                стратегийг боловсруулна.
                            </p>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                            <span class="text-white font-bold">1</span>
                        </div>
                        <div class="w-1/2 pl-8"></div>
                    </div>

                    <!-- Step 2 -->
                    <div class="relative flex items-center mb-16 fade-in">
                        <div class="w-1/2 pr-8"></div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                            <span class="text-white font-bold">2</span>
                        </div>
                        <div class="w-1/2 pl-8">
                            <h3 class="text-xl mb-4">ОРЧИН БЭЛТГЭХ</h3>
                            <p class="text-gray-400">
                                Үүлэн орчинг тохируулж, аюулгүй байдлын тохиргоог 
                                хийж гүйцэтгэнэ.
                            </p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="relative flex items-center mb-16 fade-in">
                        <div class="w-1/2 pr-8 text-right">
                            <h3 class="text-xl mb-4">ӨГӨГДӨЛ ШИЛЖҮҮЛЭХ</h3>
                            <p class="text-gray-400">
                                Өгөгдөл, програмуудыг аюулгүй байдлыг хангаж 
                                үүлэн орчинд шилжүүлнэ.
                            </p>
                        </div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                            <span class="text-white font-bold">3</span>
                        </div>
                        <div class="w-1/2 pl-8"></div>
                    </div>

                    <!-- Step 4 -->
                    <div class="relative flex items-center fade-in">
                        <div class="w-1/2 pr-8"></div>
                        <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                            <span class="text-white font-bold">4</span>
                        </div>
                        <div class="w-1/2 pl-8">
                            <h3 class="text-xl mb-4">СУРГАЛТ & ДЭМЖЛЭГ</h3>
                            <p class="text-gray-400">
                                Хэрэглэгчидэд сургалт явуулж, үргэлжлэх техникийн 
                                дэмжлэг үзүүлнэ.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-blue-600">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl mb-6 fade-in">ҮҮЛЭН ШИЛЖИЛТЭЭ ЭХЛҮҮЛЦГЭЭЕ</h2>
            <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto fade-in">
                Манай мэргэжилтнүүд тантай хамтран ажиллаж, танай байгууллагыг 
                үүлэн технологид амжилттай шилжүүлэх болно.
            </p>
            <div class="flex flex-wrap justify-center gap-4 fade-in">
                <button class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors hover-lift">
                    ҮНЭГҮЙ ЗӨВЛӨГӨӨ АВАХ
                </button>
                <button class="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors hover-lift">
                    ДЕМО ХҮСЭХ
                </button>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>