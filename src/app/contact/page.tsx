'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MapPin, Phone, Mail, User, MessageSquare, Send } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Pesan berhasil dikirim!');
  };

  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/img/gunung.jpg" 
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay blur + dark tint */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hubungi Kami
          </h1>
          <p className="text-md text-green-100 max-w-3xl mx-auto">
            Kami siap membantu kebutuhan pertanian Anda dengan teknologi AI terbaru.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Side */}
        <div className="space-y-8 h-full flex flex-col">
            {/* Gambar Contact */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
                src="/img/weirdSawah.png"
                alt="Contact Person"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
            />
            </div>

            {/* Info Kontak */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 space-y-6 flex-1">
            {/* Alamat */}
            <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                <h3 className="text-white font-semibold mb-1">Alamat</h3>
                <p className="text-green-100">Arya Jaya Street, Tangerang, Indonesia</p>
                </div>
            </div>
            {/* Telepon */}
            <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                <h3 className="text-white font-semibold mb-1">Telepon</h3>
                <p className="text-green-100">+62 812-3456-7890</p>
                </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-green-100">support@terralytics.ai</p>
                </div>
            </div>
            </div>
        </div>

        {/* Right Side - Form */}
        <form
            onSubmit={handleSubmit}
            className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between"
        >
            <div className="space-y-6">
                {/* Nama */}
                <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                    <User className="w-5 h-5" />
                </div>
                <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/70 border border-white/40 rounded-xl 
                    focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none 
                    transition-all placeholder:text-gray-400 text-gray-800"
                    required
                />
                </div>

                {/* Telepon */}
                <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                    <Phone className="w-5 h-5" />
                </div>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Nomor Telepon"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/70 border border-white/40 rounded-xl 
                    focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none 
                    transition-all placeholder:text-gray-400 text-gray-800"
                    required
                />
                </div>

                {/* Email */}
                <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                    <Mail className="w-5 h-5" />
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Alamat Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/70 border border-white/40 rounded-xl 
                    focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none 
                    transition-all placeholder:text-gray-400 text-gray-800"
                    required
                />
                </div>

                {/* Subjek */}
                <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600">
                    <MessageSquare className="w-5 h-5" />
                </div>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subjek"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/70 border border-white/40 rounded-xl 
                    focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none 
                    transition-all placeholder:text-gray-400 text-gray-800"
                    required
                />
                </div>

                {/* Pesan */}
                <div className="relative">
                <div className="absolute left-4 top-6 text-green-600">
                    <MessageSquare className="w-5 h-5" />
                </div>
                <textarea
                    name="message"
                    placeholder="Bagaimana kami bisa membantu Anda?"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full pl-12 pr-4 py-4 bg-white/70 border border-white/40 rounded-xl 
                    focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none 
                    transition-all placeholder:text-gray-400 text-gray-800 resize-none"
                    required
                />
                </div>

                {/* Tombol */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                    type="button"
                    className="w-full sm:flex-1 bg-transparent border-2 border-white/50 text-white 
                    font-semibold py-3 px-6 rounded-xl hover:bg-white/10 transition-all 
                    transform hover:scale-105"
                >
                    Pelajari Lebih Lanjut
                </button>
                <button
                    type="submit"
                    className="w-full sm:flex-1 bg-gradient-to-r from-green-500 to-yellow-500 text-white 
                    font-semibold py-3 px-6 rounded-xl hover:from-green-600 hover:to-yellow-600 
                    transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                    <Send className="w-5 h-5" />
                    Kirim Pesan
                </button>
                </div>
            </div>
            </form>

        </div>
      </div>
    </div>
  );
}
