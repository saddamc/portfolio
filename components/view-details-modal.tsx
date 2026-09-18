"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { Code } from "lucide-react";

interface ViewDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ViewDetailsModal({
  isOpen,
  onClose,
}: ViewDetailsModalProps) {
  const skills = [
    {
      category: "Skills",
      items: [
        "#JavaScript", "#React", "#Next.js", "#TypeScript","#Tailwind CSS","#Redux","#Node.js","#Express.js","#MongoDB", "#Mongoose","#Cloudinary", "#Zod", "#Sass","#shadcn/ui", "#Git", "#GitHub", "#Figma", "#HTML", "#CSS"
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-lg shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-xl text-cyan-400 uppercase">About Me</p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Content */}
              <div className="space-y-6">
                {/* Bio Section */}
                <Card className="bg-gray-800/50 border-gray-600">
                  <CardContent className="pt-6">
                    <p className="text-gray-300 leading-relaxed">
                      I help business owners and busy web developers to design &
                      develop creative websites that fits their vision and
                      attracts the visitors to stay for ever. Technologies and
                      tools that I use to create such awesome websites.
                    </p>
                  </CardContent>
                </Card>

                {/* Skills Section */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <Code className="h-6 w-6 text-cyan-400" />
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skillGroup) =>
                      skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/40 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Coder Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md lg:max-w-lg">
                  <Image
                    src="/coder.svg"
                    alt="Coder Illustration"
                    width={400}
                    height={300}
                    className="w-full h-auto filter drop-shadow-2xl"
                  />
                  <div className="text-center mt-4 text-gray-400 text-sm">
                    Passionate Code Developer
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

