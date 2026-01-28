import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt, FaGlobe, FaFileDownload, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// INSTALL ICONS FIRST: npm install react-icons

export default function LegalCard() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900 text-slate-100">
      <div className="w-full max-w-md bg-slate-800/50 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* Gold Glow Effect */}
        <div className="absolute top-0 left-0 w-full h-32 bg-amber-500/10 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* LOGO */}
          <div className="w-24 h-24 rounded-full bg-white p-2 mb-6 border-4 border-slate-700 shadow-lg">
            <Image 
              src="/logo.png" 
              alt="UR LAW HERO" 
              width={100} 
              height={100} 
              className="object-contain w-full h-full"
            />
          </div>
          
          <h1 className="text-2xl font-bold font-serif tracking-wide text-white">Antonis Nikolaides</h1>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-2">Owner • UR LAW HERO</p>
          <p className="text-xs text-slate-400 italic mb-8">"Simplifying Company Formation in Cyprus"</p>

          <div className="w-full space-y-3">
            <a href="/contact.vcf" download className="flex items-center justify-center gap-3 w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-amber-900/20">
              <FaFileDownload className="text-xl" /> Save Contact
            </a>

            <a href="https://wa.me/35799XXXXXX" className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl hover:opacity-90 transition-all font-medium">
              <FaWhatsapp className="text-xl" /> WhatsApp
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a href="tel:+35799XXXXXX" className="flex items-center justify-center gap-2 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all">
                <FaPhoneAlt /> Call
              </a>
              <a href="mailto:urlawhero@gmail.com" className="flex items-center justify-center gap-2 py-4 bg-slate-700 hover:bg-slate-600 rounded-xl transition-all">
                <FaEnvelope /> Email
              </a>
            </div>

            <a href="https://urlawhero.com" className="flex items-center justify-center gap-2 w-full py-4 border border-slate-600 hover:bg-slate-700 rounded-xl transition-all text-sm">
              <FaGlobe /> Visit Website
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-slate-500">
            <FaMapMarkerAlt /> Nicosia, Cyprus
          </div>
        </div>
      </div>
    </div>
  );
}
