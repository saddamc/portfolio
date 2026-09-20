"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Coffee,
  Heart,
  Loader2,
  Rocket,
  Send,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

const specialFeatures = [
  {
    icon: Sparkles,
    title: "Creative Solutions",
    description:
      "Turning complex problems into elegant, user-friendly experiences",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance and blazing-fast load times for every project",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description:
      "Built with cutting-edge technologies and scalable architectures",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Star,
    title: "Premium Quality",
    description: "Attention to detail and pixel-perfect implementations",
    color: "from-green-400 to-teal-500",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Format the WhatsApp message template beautifully
      const formattedText = `*New Portfolio Inquiry* 🚀\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || "Not provided"}\n\n*Message:*\n${formData.message}`;
      
      // Encode for URL query
      const encodedText = encodeURIComponent(formattedText);
      
      // Target WhatsApp link (using Saddam's verified phone number)
      const whatsappUrl = `https://wa.me/8801974544443?text=${encodedText}`;
      
      // Open in a new tab
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("WhatsApp Redirection Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  useEffect(() => {
    const scrollToConnect = () => {
      const hash = window.location.hash;
      if (hash === "#lets-connect" || hash === "#contact") {
        setTimeout(() => {
          const section = document.getElementById("lets-connect");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }, 150);
      }
    };

    scrollToConnect();
    window.addEventListener("hashchange", scrollToConnect);
    return () => window.removeEventListener("hashchange", scrollToConnect);
  }, []);

  return (
    <section id="why-choose-me" className="py-20 bg-background relative overflow-hidden">
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100"
            >
              Why Choose Me?
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto text-gray-900 dark:text-gray-100"
            >
              I bring passion, expertise, and innovation to every project.
              Here's what makes working with me special.
            </p>
          </motion.div>

          {/* Feature Cards with stagger entrance */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <Card
                  className="contactSection h-full p-6 text-foreground transition-shadow duration-300"
                >
                  <div
                    className={`inline-flex p-4 rounded-full bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300"
                  >
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center bg-white dark:bg-gray-900 rounded-2xl p-12 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-red-400 animate-pulse" />
                <Coffee className="h-6 w-6 text-amber-400" />
                <Sparkles className="h-6 w-6 text-purple-400 animate-pulse" />
              </div>
            </div>
            <h3
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100"
            >
              Ready to Build Something Amazing?
            </h3>
            <p
              className="text-xl mb-8 max-w-2xl mx-auto text-gray-900 dark:text-gray-100"
            >
              Let's collaborate and bring your vision to life with cutting-edge
              technology and exceptional design.
            </p>
            <button
              onClick={() => {
                const section = document.getElementById("lets-connect");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-500 hover:text-black transition-all duration-300"
            >
              Start a Project
              <Rocket className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Target Anchor for both contact & lets-connect */}
      <div id="contact" className="scroll-mt-32" />
      <div id="lets-connect" className="max-w-6xl mx-auto scroll-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100"
          >
            Let's{" "}
            <span
              style={{
                background: "linear-gradient(45deg, #667eea, #764ba2)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-900 dark:text-gray-100">
            I am always open to discussing new opportunities, interesting
            projects, or just having a chat about technology and development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Get in Touch Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100"
              >
                Ready to Build Something Amazing?
              </h3>
              <div className="space-y-4 text-gray-900 dark:text-gray-100">
                <p className="flex items-start ">
                  <span className="text-2xl mr-3 ">💡</span>
                  <span>
                    Got a brilliant idea that needs to come to life? I'm here to
                    turn your vision into reality with cutting-edge technology
                    and creative solutions.
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-3">🚀</span>
                  <span>
                    Whether it's a sleek web application, mobile app, or complex
                    system architecture, I love tackling challenging projects
                    that push boundaries.
                  </span>
                </p>
                <p className="flex items-start">
                  <span className="text-2xl mr-3">🤝</span>
                  <span>
                    I believe great projects come from great collaborations.
                    Let's discuss your goals and create something extraordinary
                    together!
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card className="bg-slate-900/40 backdrop-blur-xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-500 relative shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 font-mono">
                      Live WhatsApp Gateway
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 text-emerald-400 text-xs font-semibold select-none">
                    <svg className="w-3.5 h-3.5 fill-emerald-400" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.452 5.418 1.453 5.387 0 9.771-4.382 9.774-9.77 0-2.61-1.014-5.064-2.857-6.91s-4.302-2.856-6.917-2.857c-5.391 0-9.778 4.384-9.782 9.772 0 1.99.52 3.939 1.507 5.663l-.987 3.6 3.693-.97c1.656.903 3.513 1.38 5.4 1.38l.062-.001zm11.516-7.85c-.301-.15-1.78-.877-2.056-.977-.276-.1-.476-.15-.676.15-.2.3-.778.977-.954 1.177-.176.2-.351.226-.652.076-.301-.15-1.272-.469-2.422-1.496-.895-.798-1.5-1.784-1.676-2.084-.176-.3-.019-.462.132-.611.135-.134.301-.351.451-.527.15-.176.2-.301.3-.5.1-.2.05-.376-.026-.526-.076-.15-.676-1.63-1.012-2.438-.302-.727-.604-.627-.827-.638l-.701-.01c-.24-.009-.638.083-.972.446-.334.363-1.276 1.248-1.276 3.042s1.3 3.524 1.48 3.761c.18.238 2.56 3.908 6.2 5.476.866.373 1.542.597 2.069.764.87.276 1.662.237 2.288.143.699-.104 1.78-.727 2.03-1.43.25-.704.25-1.304.175-1.43-.075-.127-.275-.201-.576-.352z"/>
                    </svg>
                    Direct Connect
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
                  Drop a Message
                </h3>

                {/* Status Messages */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2.5 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl mb-6 text-sm text-emerald-600 dark:text-emerald-400"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0" />
                    <span>
                      Transmitting message payload... Opening WhatsApp!
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2.5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl mb-6 text-sm text-red-600 dark:text-red-400"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                    <span>
                      Failed to initialize link. Please try again.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-black dark:text-gray-200 font-semibold tracking-wide">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="bg-white dark:bg-slate-950/50 border-gray-300 dark:border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20 mt-2 rounded-xl text-black dark:text-white transition-all duration-300"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-black dark:text-gray-200 font-semibold tracking-wide">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="bg-white dark:bg-slate-950/50 border-gray-300 dark:border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20 mt-2 rounded-xl text-black dark:text-white transition-all duration-300"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-black dark:text-gray-200 font-semibold tracking-wide">
                      Mobile Number
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone/mobile number"
                      className="bg-white dark:bg-slate-950/50 border-gray-300 dark:border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20 mt-2 rounded-xl text-black dark:text-white transition-all duration-300"
                      disabled={status === "loading"}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-black dark:text-gray-200 font-semibold tracking-wide">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or just say hello..."
                      rows={5}
                      className="bg-white dark:bg-slate-950/50 border-gray-300 dark:border-slate-800 focus:border-emerald-500 focus:ring-emerald-500/20 mt-2 rounded-xl text-black dark:text-white resize-none transition-all duration-300"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: status === "loading" ? 1 : 1.015 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.985 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-xl font-bold tracking-wide transition-all duration-500 group shadow-[0_4px_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-400/20 focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed py-6 flex items-center justify-center gap-2"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Transmitting...
                        </>
                      ) : (
                        <>
                          Send Message via WhatsApp
                          <motion.div
                            className="ml-1 relative flex items-center justify-center text-white"
                            whileHover={{ x: 4 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            }}
                          >
                            <svg className="w-4.5 h-4.5 fill-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.452 5.418 1.453 5.387 0 9.771-4.382 9.774-9.77 0-2.61-1.014-5.064-2.857-6.91s-4.302-2.856-6.917-2.857c-5.391 0-9.778 4.384-9.782 9.772 0 1.99.52 3.939 1.507 5.663l-.987 3.6 3.693-.97c1.656.903 3.513 1.38 5.4 1.38l.062-.001zm11.516-7.85c-.301-.15-1.78-.877-2.056-.977-.276-.1-.476-.15-.676.15-.2.3-.778.977-.954 1.177-.176.2-.351.226-.652.076-.301-.15-1.272-.469-2.422-1.496-.895-.798-1.5-1.784-1.676-2.084-.176-.3-.019-.462.132-.611.135-.134.301-.351.451-.527.15-.176.2-.301.3-.5.1-.2.05-.376-.026-.526-.076-.15-.676-1.63-1.012-2.438-.302-.727-.604-.627-.827-.638l-.701-.01c-.24-.009-.638.083-.972.446-.334.363-1.276 1.248-1.276 3.042s1.3 3.524 1.48 3.761c.18.238 2.56 3.908 6.2 5.476.866.373 1.542.597 2.069.764.87.276 1.662.237 2.288.143.699-.104 1.78-.727 2.03-1.43.25-.704.25-1.304.175-1.43-.075-.127-.275-.201-.576-.352z"/>
                            </svg>
                          </motion.div>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
