//@ts-nocheck
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ArrowDown, ArrowUpRight, Menu, X, 
  Star, Quote, Award, Wine, Calendar, ChevronDown, Instagram 
} from 'lucide-react';

// Animation Preset for Scroll Reveals
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

export default function ScarletLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="antialiased selection:bg-rust-900 selection:text-white bg-neutral-950">
      
      {/* --- 1. NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 border-b border-white/5 transition-all duration-500 ${isScrolled ? 'h-16 glass-nav' : 'h-24 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Brand */}
          <Link href="#" className="group flex items-center gap-3">
            <motion.div 
              whileHover={{ rotate: 12 }}
              className="w-8 h-8 bg-rust-600 rounded-sm flex items-center justify-center text-white font-serif italic text-lg shadow-[0_0_15px_rgba(219,39,33,0.3)]"
            >S</motion.div>
            <span className="text-white font-medium tracking-widest text-xs uppercase group-hover:text-rust-500 transition-colors">Scarlet</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['Philosophy', 'Signatures', 'Reviews'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-rust-600 transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-6">
            <Link href="#reserve" className="hidden sm:flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest hover:text-rust-500 transition-colors group">
              Reservations <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="md:hidden text-white outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: 'auto' }} 
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-neutral-950 border-b border-white/10 overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {['Philosophy', 'Signatures', 'Reviews', 'Reserve'].map((item) => (
                  <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-light tracking-widest border-b border-white/5 pb-2">
                    {item}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- 2. HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "alternate" }}
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069" 
            className="w-full h-full object-cover opacity-40" alt="Dark Moody Dining"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-neutral-950/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-neutral-950/60 to-neutral-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <motion.div className="md:col-span-8" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-rust-500 animate-pulse"></span>
                <span className="text-[10px] font-medium uppercase tracking-widest text-neutral-300">Michelin Guide 2024</span>
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-normal text-white tracking-tighter mb-6 leading-[0.9]">
                Elegance in <br />
                <span className="font-serif italic text-rust-500 pr-4">Every</span> Detail.
              </h1>
            </motion.div>
            <motion.div className="md:col-span-4 pb-2" {...fadeInUp} transition={{ delay: 0.2 }}>
              <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed mb-8 border-l border-rust-900 pl-6">
                Experience the intersection of primitive fire cooking and contemporary finesse. A culinary journey designed for the senses.
              </p>
              <div className="flex items-center gap-4">
                <Link href="#menu" className="h-12 px-8 bg-white text-neutral-950 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center hover:bg-neutral-200 transition-colors">Explore Menu</Link>
                <Link href="#signatures" className="h-12 w-12 border border-white/20 flex items-center justify-center text-white hover:border-white hover:bg-white/5 transition-colors"><ArrowDown size={18} /></Link>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* --- 3. PHILOSOPHY --- */}
      <section id="philosophy" className="py-32 bg-neutral-950 border-y border-white/5">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-rust-600 to-transparent mx-auto mb-12"></div>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-12 leading-tight">
            "We don't just cook. We curate <span className="font-serif italic text-rust-500">moments</span> through the language of flavor, fire, and atmosphere."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <img src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=200" className="w-12 h-12 rounded-full object-cover grayscale opacity-60 border border-white/10" alt="Chef" />
            <div className="text-left">
              <p className="text-white text-xs font-bold uppercase tracking-widest">Elena Rossi</p>
              <p className="text-rust-500 text-[10px] uppercase tracking-widest font-medium">Executive Chef</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 4. SIGNATURE PLATES --- */}
     It sounds like those specific Unsplash IDs might have been deprecated or throttled. I have selected three high-resolution, reliable URLs from Unsplash that perfectly fit the moody, dark aesthetic of Scarlet.

Replace the Signature Plates section (starting around line 125) in your page.tsx with this updated block:

TypeScript

      {/* --- 4. SIGNATURE PLATES --- */}
      <section id="signatures" className="w-full px-6 max-w-7xl mx-auto py-32">
        <motion.div {...fadeInUp} className="flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-px bg-rust-600"></span>
              <p className="text-[10px] uppercase text-rust-500 tracking-[0.3em] font-bold">The Selections</p>
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white">Signature Plates</h2>
          </div>
          <Link href="#menu" className="hidden sm:inline-flex items-center gap-2 border border-white/10 px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-white hover:bg-white/5 transition-all">
            Full menu <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Saffron Risotto - Golden hues on dark background */}
          <DishCard 
            tag="Primi • Risotto" 
            title="Saffron & Bone Marrow" 
            img="https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070&auto=format&fit=crop" 
            delay={0.1} 
          />
          
          {/* Wagyu - High contrast, moody lighting */}
          <DishCard 
            tag="Secondi • Grill" 
            title="Wagyu Striploin" 
            img="https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2031&auto=format&fit=crop" 
            delay={0.2} 
          />
          
          {/* Truffle Pasta - Rustic and premium detail */}
          <DishCard 
            tag="Pasta • Handmade" 
            title="Truffle Tagliolini" 
            img="https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=1994&auto=format&fit=crop" 
            delay={0.3} 
          />
        </div>
      </section>

      {/* --- 5. DETAILED MENU LIST --- */}
      <section id="menu" className="py-32 bg-neutral-900/20 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">
            <MenuColumn title="Starters" index="i." items={[
              { name: "Smoked Burrata", price: "$24", desc: "Heirloom tomato confit, basil oil, toasted pine nuts, aged balsamic." },
              { name: "Beef Tartare", price: "$28", desc: "Hand-cut fillet, cured egg yolk, capers, truffle aioli, rye crisp." },
              { name: "Charred Octopus", price: "$32", desc: "Romesco sauce, confit potato, chorizo oil, lemon zest." },
            ]} />
            <MenuColumn title="Mains" index="ii." items={[
              { name: "Dry Aged Duck", price: "$45", desc: "Honey glaze, roasted parsnip, blackberry jus, thyme." },
              { name: "Market Fish", price: "$MP", desc: "Pan-seared catch of the day, fennel puree, citrus beurre blanc." },
              { name: "Lamb Rack", price: "$52", desc: "Herb crust, smoked eggplant, pomegranate molasses, mint." },
            ]} />
          </div>
        </div>
      </section>

      {/* --- 6. IMPROVED CRITICAL PERSPECTIVES (EDITORIAL DESIGN) --- */}
      <section id="reviews" className="py-32 bg-neutral-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-[0.02] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-rust-900/10 rounded-full blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <motion.div {...fadeInUp} className="flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-rust-600" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-rust-500 font-bold">The Acclaim</span>
            </motion.div>
            <motion.h2 {...fadeInUp} className="text-4xl md:text-7xl font-light text-white tracking-tight leading-none">
              Critical <span className="font-serif italic text-neutral-500 underline decoration-rust-900/30 underline-offset-8">Perspectives</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Featured Review */}
            <motion.div {...fadeInUp} className="lg:col-span-7 group relative">
              <div className="relative bg-neutral-900/40 backdrop-blur-md border border-white/10 p-10 md:p-16 overflow-hidden">
                <Quote className="absolute -top-4 -right-4 w-32 h-32 text-rust-600/10" />
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-rust-500 fill-rust-500" />)}
                </div>
                <blockquote className="text-3xl md:text-5xl text-white font-serif italic leading-[1.2] mb-12">
                  "Scarlet isn't just a restaurant; it is a theatre of fire and flavor. The striploin <span className="text-rust-500">redefines</span> what a steak can be."
                </blockquote>
                <div className="flex items-center gap-6 border-t border-white/5 pt-10">
                  <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center font-black text-sm rotate-[-5deg]">NYT</div>
                  <div>
                    <p className="text-white text-sm font-bold uppercase tracking-widest">The New York Times</p>
                    <p className="text-neutral-500 text-xs uppercase mt-1">Top Pick 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Reviews Stack */}
            <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-20">
              <ReviewSmallCard icon={<Award size={20} />} author="Michelin Guide" quote="Impeccable service and a menu that respects seasonality with bold strokes." />
              <ReviewSmallCard icon={<Wine size={20} />} author="Bon Appétit" quote="The wine pairing was nothing short of revelatory. An essential destination." />
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. RESERVATION FORM --- */}
      <section id="reserve" className="bg-neutral-950 border-t border-white/5">
        <div className="grid lg:grid-cols-12 min-h-[700px]">
          <div className="relative lg:col-span-5 hidden lg:block overflow-hidden">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-[20s] hover:scale-110" alt="Interior" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 to-neutral-950"></div>
            <div className="absolute inset-0 p-16 flex flex-col justify-between z-10">
              <div>
                <span className="text-rust-500 text-[10px] font-bold uppercase tracking-widest block mb-6">Reservations</span>
                <h2 className="text-5xl font-serif italic text-white mb-6">Secure your table.</h2>
                <p className="text-neutral-400 text-sm max-w-xs leading-relaxed">Join us for an evening of culinary excellence. Tables released 30 days in advance.</p>
              </div>
              <div className="space-y-8">
                <div>
                  <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-2">Private Dining</p>
                  <Link href="#" className="text-neutral-400 text-xs hover:text-rust-400 transition-colors">events@scarlet.com</Link>
                </div>
                <div>
                  <p className="text-white text-[10px] font-bold uppercase tracking-widest mb-2">Location</p>
                  <p className="text-neutral-400 text-xs leading-relaxed">128 West Broadway,<br />New York, NY 10013</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-8 md:p-24 flex items-center bg-neutral-950">
            <motion.div {...fadeInUp} className="w-full max-w-lg mx-auto">
              <form className="space-y-12">
                <div className="grid grid-cols-2 gap-10">
                  <FormInput label="Date" placeholder="Select Date" icon={<Calendar size={16} />} />
                  <div className="relative group">
                    <label className="absolute -top-3 left-0 text-[10px] uppercase tracking-widest text-neutral-500 group-focus-within:text-rust-500 transition-colors">Guests</label>
                    <select className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white appearance-none cursor-pointer transition-colors">
                      <option className="bg-neutral-900">2 Guests</option>
                      <option className="bg-neutral-900">4 Guests</option>
                      <option className="bg-neutral-900">6+ Guests</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-0 top-4 text-neutral-600" />
                  </div>
                </div>

                <div className="space-y-5">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-500 block">Available Times</label>
                  <div className="flex flex-wrap gap-3">
                    {['17:30', '18:15', '19:30', '20:45'].map((time) => (
                      <label key={time} className="cursor-pointer group">
                        <input type="radio" name="time" className="peer sr-only" />
                        <span className="inline-block px-5 py-3 border border-neutral-800 text-neutral-400 text-[10px] uppercase tracking-widest rounded-sm transition-all duration-300 peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:border-neutral-600">
                          {time}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-8 pt-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-600" />
                  <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-600" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-600" />
                </div>

                <div className="pt-8">
                  <button type="submit" className="group w-full bg-rust-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] py-5 hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-3">
                    Confirm Reservation <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <p className="text-center text-[9px] text-neutral-600 mt-6 uppercase tracking-widest leading-relaxed">
                    By booking, you agree to our 24-hour cancellation policy.
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="bg-neutral-950 border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1">
              <Link href="#" className="flex items-center gap-2 mb-8 text-white font-medium tracking-tight">
                <div className="w-6 h-6 bg-rust-600 rounded-sm flex items-center justify-center text-[10px] font-serif italic">S</div>
                <span className="uppercase tracking-widest text-sm">SCARLET</span>
              </Link>
              <p className="text-neutral-500 text-xs leading-relaxed max-w-xs">
                A tribute to the warmth of the hearth and the richness of the earth. Est. 2024.
              </p>
            </div>
            <FooterColumn title="Discovery" links={['Our Producers', 'The Wine List', 'Private Events', 'Careers']} />
            <FooterColumn title="Visit Us" links={['128 West Broadway, NYC', '+1 (212) 555-0199', 'reservations@scarlet.com']} />
            <div>
              <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Hours</h4>
              <ul className="space-y-4 text-xs text-neutral-500">
                <li className="flex justify-between w-40"><span>Tue - Thu</span> <span className="text-neutral-300 italic font-serif">17:00 - 22:00</span></li>
                <li className="flex justify-between w-40"><span>Fri - Sat</span> <span className="text-neutral-300 italic font-serif">17:00 - 23:00</span></li>
                <li className="text-[10px] uppercase tracking-widest mt-4">Closed Sunday - Monday</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] text-neutral-600 uppercase tracking-[0.2em]">© 2025 Scarlet Restaurant Group. All Rights Reserved.</p>
            <div className="flex gap-8">
              <Instagram size={18} className="text-neutral-600 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- HELPER COMPONENTS (Cleanly separated) ---

function DishCard({ tag, title, img, delay }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }} 
      className="group relative overflow-hidden border border-white/5 cursor-pointer bg-neutral-900 h-[500px]"
    >
      <img src={img} alt={title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-[10px] uppercase tracking-[0.3em] text-rust-400 mb-3 font-bold">{tag}</p>
        <div className="flex items-center justify-between border-t border-white/10 pt-6 text-white">
          <h3 className="text-xl font-medium tracking-tight">{title}</h3>
          <span className="inline-flex h-10 w-10 items-center justify-center border border-white/20 group-hover:bg-rust-600 group-hover:border-rust-600 transition-colors">
            <ArrowRight size={18} />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function MenuColumn({ title, index, items }: any) {
  return (
    <div>
      <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-6 mb-12 flex justify-between items-center">
        {title} <span className="text-rust-500 font-serif italic text-xl lowercase">{index}</span>
      </h3>
      <ul className="space-y-12">
        {items.map((item: any) => (
          <li key={item.name} className="group cursor-pointer">
            <div className="flex justify-between items-baseline mb-3">
              <span className="text-white font-medium text-lg group-hover:text-rust-500 transition-colors">{item.name}</span>
              <span className="text-neutral-500 text-sm font-serif italic">{item.price}</span>
            </div>
            <p className="text-xs text-neutral-500 leading-relaxed max-w-sm">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewSmallCard({ author, quote, icon }: any) {
  return (
    <div className="relative p-10 bg-neutral-900/20 border-l border-rust-900 group hover:bg-neutral-900/40 transition-colors">
      <div className="flex gap-1 mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
        {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-white fill-white" />)}
      </div>
      <blockquote className="text-lg text-neutral-300 font-light leading-relaxed mb-8 italic">"{quote}"</blockquote>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-rust-500 group-hover:scale-110 transition-transform">{icon}</div>
        <div>
          <p className="text-white text-[10px] font-bold uppercase tracking-widest">{author}</p>
          <p className="text-neutral-600 text-[9px] uppercase tracking-widest mt-1">Critic Review</p>
        </div>
      </div>
    </div>
  );
}

function FormInput({ label, placeholder, icon }: any) {
  return (
    <div className="relative group">
      <label className="absolute -top-3 left-0 text-[10px] uppercase tracking-widest text-neutral-500 group-focus-within:text-rust-500 transition-colors">{label}</label>
      <input type="text" placeholder={placeholder} className="w-full bg-transparent border-b border-neutral-800 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-neutral-700 pt-5" />
      <div className="absolute right-0 bottom-3 text-neutral-600 group-focus-within:text-white transition-colors">{icon}</div>
    </div>
  );
}

function FooterColumn({ title, links }: any) {
  return (
    <div>
      <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8">{title}</h4>
      <ul className="space-y-4 text-[11px] text-neutral-500 uppercase tracking-widest">
        {links.map((link: string) => (
          <li key={link}><Link href="#" className="hover:text-rust-400 transition-colors">{link}</Link></li>
        ))}
      </ul>
    </div>
  );
}