"use client";

import { motion } from "framer-motion";
import { creditData, imageAssetsCredit, npmLibrariesCredit } from "@/lib/credit";
import CreditItemCard from "@/components/credit/CreditItem";
import ImageAssetCard from "@/components/credit/ImageAssetCard";
import NpmLibraryCard from "@/components/credit/NpmLibraryCard";
import { Image as ImageIcon, Package, Heart } from "lucide-react";

export default function CreditPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-700 to-yellow-500 text-white"
    >
      <div className="container mx-auto px-6 py-32">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold drop-shadow-lg">Credits</h1>
          <p className="text-xl text-green-100 mt-4">
            Terima kasih kepada semua yang telah berkontribusi
          </p>
        </motion.div>

        {/* Credit Items */}
        <div className="space-y-16">
          {creditData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <CreditItemCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* Image Assets */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 pt-12 border-t border-green-600/50"
        >
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3 text-green-100 drop-shadow">
            <ImageIcon className="w-8 h-8" /> Image Assets Credits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {imageAssetsCredit.map((asset, i) => (
              <motion.div
                key={asset.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <ImageAssetCard asset={asset} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NPM Libraries */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 pt-12 border-t border-green-600/50"
        >
          <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3 text-green-100 drop-shadow">
            <Package className="w-8 h-8" /> NPM Libraries Credits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {npmLibrariesCredit.map((lib, i) => (
              <motion.div
                key={lib.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <NpmLibraryCard lib={lib} />
              </motion.div>
            ))}
          </div>

          {/* Thank You Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12 p-5 bg-green-800/40 rounded-2xl border border-green-600/40 shadow-lg backdrop-blur-sm"
          >
            <p className="text-green-200 text-sm flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-red-400" />
              Thank you to all open-source maintainers & contributors!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
