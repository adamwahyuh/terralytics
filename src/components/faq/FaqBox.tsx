import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Apa itu Sistem Irigasi Pintar?",
    answer:
      "Sistem irigasi otomatis berbasis sensor yang mengatur aliran air sesuai dengan kelembaban tanah dan kondisi cuaca.",
  },
  {
    question: "Bagaimana cara kerja prediksi AI dalam sistem ini?",
    answer:
      "AI menganalisis data tanah, cuaca, dan pola historis untuk memprediksi kebutuhan air tanaman.",
  },
  {
    question: "Apakah bisa digunakan dalam skala kecil?",
    answer:
      "Ya, sistem ini dapat dipasang mulai dari lahan kecil hingga area pertanian yang luas.",
  },
];


export default function FaqBox() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto px-4">

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            className="border border-white/20 bg-white/5 backdrop-blur-md rounded-xl shadow-md overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {/* Button pertanyaan */}
            <button
              className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-white hover:bg-white/10 transition cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-300" />
              </motion.div>
            </button>

            {/* Jawaban */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="px-5 pb-5 text-gray-200 text-sm leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
