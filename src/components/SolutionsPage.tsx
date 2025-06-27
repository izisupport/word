import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Particle Network Animation Component (reusable)
const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update particles
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle, j) => {
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

export const SolutionsPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 pt-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop&crop=center"
            alt="Solutions background"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Animated Particle Network */}
        <ParticleNetwork />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
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
              ТЕХНОЛОГИЙН ШИЙДЛҮҮД
              <br />
              <span className="text-blue-400">ТАНАЙ БИЗНЕСТ</span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-3xl"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Орчин үеийн технологийн шийдлүүдээр танай байгууллагыг
              цахим орчинд тэргүүлэгч болгож, өрсөлдөх чадварыг нэмэгдүүлнэ.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                ШИЙДЭЛ АВАХ
              </motion.button>
              <motion.button
                className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                ЗӨВЛӨГӨӨ АВАХ
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <motion.section
        className="py-20 bg-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              БИДНИЙ ШИЙДЛҮҮД
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Олон жилийн туршлага, дээд зэргийн мэргэжилтэн, дэлхийн шилдэг брэндүүдийн
              бүтээгдэхүүнээр танай хэрэгцээг хангана.
            </motion.p>
          </div>

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
                description: "Найдвартай, хурдан, аюулгүй сүлжээний дэд бүтцийг бий болгож, бизнесийн үр ашгийг нэмэгдүүлнэ.",
                features: ["LAN/WAN сүлжээний дизайн", "Wi-Fi шийдэл", "Сүлжээний хяналт, удирдлага", "24/7 техникийн дэмжлэг"],
                color: "blue"
              },
              {
                icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10",
                title: "ҮҮЛЭН ТЕХНОЛОГИ",
                description: "Хаанаас ч хамаагүй өгөгдөлд хандаж, хамтран ажиллах орчинг бүрдүүлэх үүлэн шийдлүүд.",
                features: ["Microsoft 365 шийдэл", "Amazon AWS дээр суурилсан шийдэл", "Өгөгдлийн нөөцөлт, сэргээлт", "Үүлэн серверийн үйлчилгээ"],
                color: "green"
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "КИБЕР АЮУЛГҮЙ БАЙДАЛ",
                description: "Кибер довтолгооноос хамгаалж, мэдээллийн аюулгүй байдлыг хангах цогц шийдэл.",
                features: ["Firewall, антивирус шийдэл", "Өгөгдлийн шифрлэлт", "Аюулгүй байдлын аудит", "Кибер аюулгүй байдлын сургалт"],
                color: "red"
              },
              {
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                title: "IT ЗӨВЛӨХ ҮЙЛЧИЛГЭЭ",
                description: "Технологийн стратеги боловсруулж, хэрэгжүүлэхэд туслах мэргэжлийн зөвлөгөө.",
                features: ["IT стратегийн зөвлөгөө", "Системийн дизайн", "Төслийн удирдлага", "Техникийн аудит"],
                color: "purple"
              },
              {
                icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                title: "ДАТА ТӨВ СЕРВЕР",
                description: "Өндөр хүчин чадалтай серверийн шийдэл, дата төвийн бүрэн үйлчилгээ.",
                features: ["Сервер, хадгалах сангийн шийдэл", "Виртуализацийн платформ", "Нөөцлөлт, сэргээлтийн шийдэл", "Серверийн хяналт, удирдлага"],
                color: "orange"
              },
              {
                icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
                title: "ВИДЕО УДИРДЛАГЫН СИСТЕМ",
                description: "Дэвшилтэт камерийн хяналтын системээр аюулгүй байдлыг хангана.",
                features: ["IP камерийн шийдэл", "Видео аналитик", "Алсын зайнаас хяналт", "Нэгдсэн хяналтын платформ"],
                color: "teal"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 p-8 rounded-lg cursor-pointer"
                variants={cardVariants}
                whileHover="whileHover"
                onClick={() => service.title === "ҮҮЛЭН ТЕХНОЛОГИ" && onNavigate('cloud')}
              >
                <motion.div
                  className={`w-16 h-16 bg-${service.color}-600 rounded-lg mb-6 flex items-center justify-center`}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: `0 10px 25px rgba(59, 130, 246, 0.5)`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-8 h-8 text-white"
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
                <h3 className="text-xl mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="text-sm text-gray-400 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-20 bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              МАНАЙ АЖИЛЛАХ АРГА
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Төслийн эхнээс эцэс хүртэл та бидэнтэй хамтран ажиллах болно.
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                number: "1",
                title: "ШИНЖИЛГЭЭ",
                description: "Танай байгууллагын хэрэгцээ, одоогийн нөхцөл байдлыг дүн шинжилгээ хийнэ.",
                color: "blue"
              },
              {
                number: "2",
                title: "ДИЗАЙН",
                description: "Таны хэрэгцээнд тохирсон технологийн шийдлийг дизайнлан боловсруулна.",
                color: "green"
              },
              {
                number: "3",
                title: "ХЭРЭГЖҮҮЛЭЛТ",
                description: "Төлөвлөсөн шийдлийг мэргэжлийн баг танай байгууллагад хэрэгжүүлнэ.",
                color: "orange"
              },
              {
                number: "4",
                title: "ДЭМЖЛЭГ",
                description: "Үргэлжлэх техникийн дэмжлэг, хяналтаар системийн найдвартай ажиллагааг хангана.",
                color: "purple"
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={cardVariants}
              >
                <motion.div
                  className={`w-20 h-20 bg-${step.color}-600 rounded-full mx-auto mb-6 flex items-center justify-center`}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-2xl font-bold">{step.number}</span>
                </motion.div>
                <h3 className="text-xl mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-blue-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ӨӨРИЙН ШИЙДЛИЙГ ОЛЦГООЁ
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Манай мэргэжилтнүүд тантай хамтран ажиллаж, танай байгууллагад
            хамгийн тохиромжтой технологийн шийдлийг олох болно.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              ХОЛБОГДОХ
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              ЦАГ ТОХИРУУЛАХ
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};