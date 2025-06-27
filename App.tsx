import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SolutionsPage } from "./components/SolutionsPage";
import { CloudTechnologyPage } from "./components/CloudTechnologyPage";

// Particle Network Animation Component
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<
    Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      connections: number[];
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles
    const particleCount = 50;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: [],
      });
    }
    setParticles(newParticles);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      newParticles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width)
          particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height)
          particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(
          0,
          Math.min(canvas.width, particle.x),
        );
        particle.y = Math.max(
          0,
          Math.min(canvas.height, particle.y),
        );

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.fill();

        // Draw connections
        newParticles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.3 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.4 }}
    />
  );
};

// Horizontal Scrolling Partners Component
const HorizontalScrollingPartners = ({ brands }: { brands: string[] }) => {
  return (
    <div className="overflow-hidden relative w-full h-24 flex items-center">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
      
      {/* Scrolling container */}
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
        style={{ width: "max-content" }}
      >
        {/* Triple the brands for seamless loop */}
        {[...Array(3)].map((_, setIndex) =>
          brands.map((brand, index) => (
            <motion.div
              key={`${setIndex}-${index}`}
              className="bg-gray-800 px-6 py-4 rounded-lg border-2 border-transparent hover:border-blue-500/50 hover:bg-blue-500/10 transition-all cursor-pointer flex-shrink-0"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">
                {brand}
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

// Header Component
const Header = ({ currentPage, onNavigate }: { currentPage: string; onNavigate: (page: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "НҮҮР", page: "home" },
    { label: "БИДНИЙ ТУХАЙ", page: "about" },
    { label: "ШИЙДЛҮҮД", page: "solutions" },
    { label: "ҮЙЛЧИЛГЭЭ", page: "services" },
    { label: "ТҮНШҮҮД", page: "partners" },
    { label: "ХОЛБОГДОХ", page: "contact" },
  ];

  return (
    <motion.header
      className={`py-4 fixed w-full top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-800/95 shadow-lg' 
          : 'bg-gray-800/80'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          onClick={() => onNavigate('home')}
        >
          <ImageWithFallback
            src="https://i.ibb.co/9DcTr0G/Logo-color.png"
            alt="IZI Support Logo"
            className="h-8 w-auto"
          />
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`text-gray-300 hover:text-white transition-colors relative ${
                currentPage === item.page ? 'text-blue-400' : ''
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              whileHover={{ 
                scale: 1.05,
                color: "#60a5fa"
              }}
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400"
                whileHover={{ width: "100%" }}
                animate={{ width: currentPage === item.page ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

// Homepage Component
const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    whileHover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const logoFloat = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const brandNames = [
    "Microsoft",
    "Cisco", 
    "VMware",
    "Dell Technologies",
    "HP Enterprise",
    "Lenovo",
    "Intel",
    "AMD",
    "NVIDIA",
    "IBM",
    "Oracle",
    "Samsung"
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 pt-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&crop=center"
            alt="Technology background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated Particle Network */}
        <ParticleNetwork />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              className="mb-4"
              variants={logoFloat}
              animate="animate"
            >
              <ImageWithFallback
                src="https://i.ibb.co/9DcTr0G/Logo-color.png"
                alt="IZI Support Logo" 
                className="h-16 w-auto"
              />
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl mb-6 leading-tight"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ТЕХНОЛОГИЙН ШИЛДЭГ
              <br />
              ШИЙДЛИЙГ ТАНАЙ
              <br />
              БАЙГУУЛЛЛАГАД
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-2xl"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Бид танай байгууллагын хэрэгцээнд тохирсон
              технологийн шийдлүүдийг санал болгож, найдвартай
              үйлчилгээ үзүүлдэг.
            </motion.p>

            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 25px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('solutions')}
            >
              ТАНИЛЦАХ
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ШИЙДЛҮҮД
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
                title: "БАЙГУУЛЛАГЫН СҮЛЖЭЭ",
                description: "Байгуулагын сүлжээ",
                page: "solutions"
              },
              {
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                title: "ҮҮЛЭН ТЕХНОЛОГИ",
                description:
                  "Үүлэн технологид суурилсан бүхий л шийдэл",
                page: "cloud"
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "КИБЕР АЮУЛГҮЙ БАЙДАЛ",
                description:
                  "Кибер аюулгүй байдлын шийдэл, мэдээллийн нууцлал хамгаалалт",
                page: "solutions"
              },
              {
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                title: "IT ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ",
                description:
                  "Олон жилийн туршлагатай инженерүүдийн мэдлэг туршлага",
                page: "solutions"
              },
              {
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                title: "ДАТА ТӨВ СЕРВЕР",
                description:
                  "Байгууллагын сервер, дата төвийн програм хангамж болон тоног төхөөрөмж",
                page: "solutions"
              },
              {
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "ВИДЕО УДИРДЛАГЫН СИСТЕМ",
                description:
                  "КАМЕРЫН ПРОГРАМ ХАНГАМЖИЙН ШИЙДЭЛ",
                page: "solutions"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-6 rounded-lg cursor-pointer"
                variants={cardVariants}
                whileHover="whileHover"
                onClick={() => onNavigate(service.page)}
              >
                <motion.div
                  className="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center"
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    boxShadow:
                      "0 10px 25px rgba(59, 130, 246, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.icon}
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section - Horizontal Scrolling */}
      <motion.section
        className="py-20 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ХАМТРАГЧ БАЙГУУЛЛАГУУД
          </motion.h2>

          <HorizontalScrollingPartners brands={brandNames} />
        </div>
      </motion.section>

      {/* News Section */}
      <motion.section
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            МЭДЭЭЛЭЛ
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
                date: "2025.06.01",
                title: "Хаанаас ч хамаагүй хяна",
                content:
                  "Nx Witness — Хаанаас ч хамаагүй хяна. Үүлэн технологид суурилсан ухаалаг хяналтын шийдэл. Татаад суулга. Cloud-оор хяна. Гол боломжууд:...",
              },
              {
                image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
                date: "2025.04.25",
                title: "Secutech Taiwan 2025",
                content:
                  "Тэр зүгээр нэг VMS хийсэнгүй. Тэр дүрмийг өөрчилсөн. 2010 он. Nathan Wheeler нэртэй энэ залуу нэг л зүйлийг ойлгосон байв. Видео хяналтын салбар хөгжилд биш, уламжлалт сэтгэлгээнд баригдчихсан байнаа гэж . . .",
              },
              {
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
                date: "2025.04.04",
                title: "QNAP & Nx Witness хамтдаа!",
                content:
                  "Одоо та Nx Witness видео хяналтын системийг QNAP төхөөрөмж дээр шууд суулгаж, ашиглах боломжтой боллоо! QNAP нь Network Optix-ийн албан ёсны технологийн түнш болж. Видео бичлэгээ найдвартай, хурдан, үр дүнтэй хадгалах боломжыг хэрэглэгч нарт илүү ойртууллаа.…",
              },
            ].map((article, index) => (
              <motion.article
                key={index}
                className="bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <ImageWithFallback
                    src={article.image}
                    alt="Article image"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <motion.div
                    className="inline-block bg-green-500 text-black px-3 py-1 rounded-full text-sm font-semibold mb-3"
                    whileHover={{
                      scale: 1.05,
                      boxShadow:
                        "0 5px 15px rgba(34, 197, 94, 0.4)",
                    }}
                  >
                    {article.date}
                  </motion.div>
                  <h3 className="mb-3">{article.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {article.content}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={cardVariants}>
              <div className="flex items-center space-x-2 mb-4">
                <ImageWithFallback
                  src="https://i.ibb.co/9DcTr0G/Logo-color.png"
                  alt="IZI Support Logo"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm">
                Таны бизнесийг технологийн шилдэг шийдлээр
                дэмжие
              </p>
            </motion.div>

            <motion.div variants={cardVariants}>
              <h4 className="text-white mb-4">Шийдлүүд</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('solutions')}>Байгууллагын сүлжээ</p>
                <p className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('cloud')}>Клауд үйлчилгээ</p>
                <p className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('solutions')}>Кибер аюулгүй байдал</p>
                <p className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('solutions')}>IT зөвлөх үйлчилгээ</p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <h4 className="text-white mb-4">Компани</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="hover:text-white cursor-pointer transition-colors">Бидний тухай</p>
                <p className="hover:text-white cursor-pointer transition-colors">Кэйсүүд</p>
                <p className="hover:text-white cursor-pointer transition-colors">Түншүүд</p>
                <p className="hover:text-white cursor-pointer transition-colors">Холбогдох</p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants}>
              <h4 className="text-white mb-4">Холбогдох</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>
                  <span className="inline-block w-16">Имэйл:</span>
                  <motion.a 
                    href="mailto:info@izsupport.mn" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    info@izsupport.mn
                  </motion.a>
                </p>
                <p>
                  <span className="inline-block w-16">Утас:</span>
                  <motion.a 
                    href="tel:80888888" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    8088-8888
                  </motion.a>
                </p>
                <p>
                  <span className="inline-block w-16 align-top">Хаяг:</span>
                  <span className="inline-block max-w-48">
                    Чингэлтэй дүүрэг, 5-р хороо МН ТАУЭР 12 давхар 1206 тоот
                  </span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p>
              &copy; 2025 IZI Support. Бүх эрх хуулиар хамгаалагдсан.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} />;
      case 'cloud':
        return <CloudTechnologyPage onNavigate={handleNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}