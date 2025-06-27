import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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

export const CloudTechnologyPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop&crop=center"
            alt="Cloud technology background"
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
              ҮҮЛЭН ТЕХНОЛОГИ
              <br />
              <span className="text-blue-400">ЦААШДЫН ШИЙДЭЛ</span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-3xl"
              {...fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Хаанаас ч хамаагүй өгөгдөлд хандаж, хамтран ажиллах орчинг бүрдүүлэх
              орчин үеийн үүлэн технологийн шийдлүүд.
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
                ҮҮЛЭН ШИЙДЭЛ АВАХ
              </motion.button>
              <motion.button
                className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg transition-all"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                ДЕМО ҮЗЭХ
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cloud Benefits */}
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
              ҮҮЛЭН ТЕХНОЛОГИЙН ДАВУУ ТАЛ
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Орчин үеийн бизнесийн хурдацтай өөрчлөлтөд дасан зохицох
              уян хатан, найдвартай шийдэл.
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "ХУРДАН ХЭРЭГЖҮҮЛЭЛТ",
                description: "Хэдэн минутын дотор шинэ үйлчилгээг эхлүүлж, бизнесийн хэрэгцээнд хурдан хариулах боломж.",
                color: "blue"
              },
              {
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
                title: "ЗАРДЛЫН ХЭМНЭЛТ",
                description: "Хэрэгтэй зүйлдээ л төлж, тоног төхөөрөмжийн том хөрөнгө оруулалтаас зайлсхийх боломж.",
                color: "green"
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "ДЭЭД ЗЭРГИЙН АЮУЛГҮЙ БАЙДАЛ",
                description: "Олон давхар хамгаалалт, шифрлэлт, нөөцлөлтөөр өгөгдлийн бүрэн аюулгүй байдлыг хангана.",
                color: "purple"
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={cardVariants}
              >
                <motion.div
                  className={`w-16 h-16 bg-${benefit.color}-600 rounded-full mx-auto mb-6 flex items-center justify-center`}
                  whileHover={{
                    rotate: 360,
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)",
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
                      d={benefit.icon}
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Cloud Services */}
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
              ҮҮЛЭН ҮЙЛЧИЛГЭЭНИЙ ТӨРЛҮҮД
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Танай бизнесийн хэрэгцээнд тохирсон үүлэн шийдлүүдийг сонгоно уу.
            </motion.p>
          </div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Microsoft 365",
                subtitle: "Бүрэн хамтын ажиллагааны платформ",
                description: "Office програмууд, имэйл, видео хурал, файл хуваалцах зэрэг бүх хэрэгцээт үйлчилгээг нэг платформд авна.",
                features: [
                  { name: "Office програмууд", desc: "Word, Excel, PowerPoint, Outlook" },
                  { name: "Teams", desc: "Видео хурал, чат, хамтын ажиллагаа" },
                  { name: "SharePoint", desc: "Документ удирдлага, интранет" },
                  { name: "OneDrive", desc: "Файл хадгалалт, хуваалцалт" }
                ],
                color: "blue"
              },
              {
                title: "Amazon Web Services",
                subtitle: "Дэлхийн хамгийн том үүлэн платформ",
                description: "Хүчирхэг AWS дээр суурилсан шийдлүүдээр таны бизнесийг дэлхийн стандартад хүргэнэ.",
                features: [
                  { name: "EC2 серверүүд", desc: "Виртуал серверийн үйлчилгээ" },
                  { name: "S3 хадгалалт", desc: "Файл, өгөгдлийн хадгалалт" },
                  { name: "RDS мэдээллийн сан", desc: "Удирдлагатай өгөгдлийн сан" },
                  { name: "Lambda функц", desc: "Сервергүй програмчлал" }
                ],
                color: "orange"
              },
              {
                title: "Нөөцлөлт & Сэргээлт",
                subtitle: "Өгөгдлийн найдвартай хамгаалалт",
                description: "Өгөгдөл алдагдахаас хамгаалж, аливаа нөхцөлд хурдан сэргээх боломжийг бүрдүүлнэ.",
                features: [
                  { name: "Автомат нөөцлөлт", desc: "Өдөр тутмын автомат нөөцлөлт" },
                  { name: "Түргэн сэргээлт", desc: "Хэдэн минутын дотор сэргээлт" },
                  { name: "Олон газарт хадгалах", desc: "Дэлхийн олон төвд хадгалах" },
                  { name: "Шифрлэлт", desc: "256-бит шифрлэлттэй" }
                ],
                color: "green"
              },
              {
                title: "Хувийн үүл",
                subtitle: "Өндөр нууцлалтай шийдэл",
                description: "Зөвхөн танай байгууллагад зориулсан хувийн үүлэн орчин, дээд зэргийн аюулгүй байдал.",
                features: [
                  { name: "Бүрэн хяналт", desc: "Бүх эрх, хяналт танай гарт" },
                  { name: "Дээд зэргийн нууцлал", desc: "Өндөр нууцлалтай өгөгдөлд" },
                  { name: "Захиалгат тохиргоо", desc: "Танай хэрэгцээнд тохируулсан" },
                  { name: "24/7 дэмжлэг", desc: "Тогтмол техникийн дэмжлэг" }
                ],
                color: "purple"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-8 rounded-lg"
                variants={cardVariants}
                whileHover="whileHover"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-${service.color}-600 rounded-lg mr-6 flex items-center justify-center`}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)",
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl mb-2">{service.title}</h3>
                    <p className={`text-${service.color}-400`}>{service.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="bg-gray-700 p-4 rounded-lg"
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(75, 85, 99, 0.8)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4 className="font-semibold mb-2">{feature.name}</h4>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Migration Timeline */}
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
              ҮҮЛЭНД ШИЛЖИХ ПРОЦЕСС
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Өөрийн өгөгдөл, системийг үүлэнд аюулгүй, үр дүнтэй шилжүүлэх алхмууд.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-blue-600"></div>

              {[
                {
                  title: "ҮНЭЛГЭЭ & ТӨЛӨВЛӨЛТ",
                  description: "Одоогийн системийг дүн шинжилгээ хийж, үүлэнд шилжих стратегийг боловсруулна.",
                  number: "1",
                  color: "blue",
                  side: "left"
                },
                {
                  title: "ОРЧИН БЭЛТГЭХ",
                  description: "Үүлэн орчинг тохируулж, аюулгүй байдлын тохиргоог хийж гүйцэтгэнэ.",
                  number: "2",
                  color: "green",
                  side: "right"
                },
                {
                  title: "ӨГӨГДӨЛ ШИЛЖҮҮЛЭХ",
                  description: "Өгөгдөл, програмуудыг аюулгүй байдлыг хангаж үүлэн орчинд шилжүүлнэ.",
                  number: "3",
                  color: "orange",
                  side: "left"
                },
                {
                  title: "СУРГАЛТ & ДЭМЖЛЭГ",
                  description: "Хэрэглэгчидэд сургалт явуулж, үргэлжлэх техникийн дэмжлэг үзүүлнэ.",
                  number: "4",
                  color: "purple",
                  side: "right"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-16 ${index === 3 ? '' : 'mb-16'}`}
                  initial={{ opacity: 0, x: step.side === 'left' ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`w-1/2 ${step.side === 'left' ? 'pr-8 text-right' : 'order-2 pl-8'}`}>
                    <h3 className="text-xl mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  <motion.div
                    className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-${step.color}-600 rounded-full flex items-center justify-center`}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-white font-bold">{step.number}</span>
                  </motion.div>
                  <div className={`w-1/2 ${step.side === 'right' ? 'pr-8' : 'order-1 pl-8'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
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
            ҮҮЛЭН ШИЛЖИЛТЭЭ ЭХЛҮҮЛЦГЭЭЕ
          </motion.h2>
          <motion.p
            className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Манай мэргэжилтнүүд тантай хамтран ажиллаж, танай байгууллагыг
            үүлэн технологид амжилттай шилжүүлэх болно.
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
              ҮНЭГҮЙ ЗӨВЛӨГӨӨ АВАХ
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              ДЕМО ХҮСЭХ
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};