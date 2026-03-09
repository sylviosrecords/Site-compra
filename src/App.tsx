/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Disc, PlayCircle, Tv, MessageCircle, MapPin, CheckCircle2, Truck, DollarSign } from 'lucide-react';

export default function App() {
  const whatsappNumber = "5513973455873";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá,%20tenho%20alguns%20itens%20(CDs/DVDs/Blu-rays)%20para%20vender.%20Gostaria%20de%20uma%20avaliação.`;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
              <Disc className="text-white animate-spin-slow" size={24} />
            </div>
            <span className="text-xl font-bold tracking-tighter uppercase">Compramos seu Acervo</span>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full font-semibold transition-all"
          >
            <MessageCircle size={18} />
            Vender Agora
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-orange-500 text-sm font-bold tracking-widest uppercase">
              Compramos seu acervo hoje
            </span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 uppercase">
              TRANSFORME SEUS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                DISCOS EM DINHEIRO
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
              Compramos CDs, DVDs e Blu-rays usados. Avaliamos seu lote in loco na Baixada Santista e Grande SP. Pagamento rápido e justo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-green-600/20"
              >
                <MessageCircle size={28} />
                FALAR NO WHATSAPP
              </motion.a>
              <div className="text-zinc-500 font-mono text-sm">
                (13) 97345-5873
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we buy */}
      <section className="py-20 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-black border border-white/5 hover:border-orange-500/50 transition-colors"
            >
              <Disc className="text-orange-500 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">CDs Musicais</h3>
              <p className="text-zinc-400">Rock, Pop, Jazz, MPB e muito mais. Compramos coleções completas ou itens avulsos de valor.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-black border border-white/5 hover:border-blue-500/50 transition-colors"
            >
              <PlayCircle className="text-blue-500 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">DVDs de Filmes</h3>
              <p className="text-zinc-400">Clássicos, séries, shows e edições especiais. Damos vida nova ao seu acervo de cinema.</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-black border border-white/5 hover:border-purple-500/50 transition-colors"
            >
              <Tv className="text-purple-500 mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Blu-rays</h3>
              <p className="text-zinc-400">Alta definição em filmes e shows. Pagamos excelentes valores por títulos em bom estado.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Sylvios */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase leading-none">
                POR QUE VENDER PARA <br />
                <span className="text-orange-600">A NOSSA EQUIPE?</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-orange-600/20 p-2 rounded-lg">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase">Atendimento Local</h4>
                    <p className="text-zinc-400">Estamos na Baixada Santista. Vamos até você em Santos, São Vicente, Praia Grande, Guarujá e Cubatão.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-green-600/20 p-2 rounded-lg">
                    <DollarSign className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase">Melhor Avaliação</h4>
                    <p className="text-zinc-400">Não somos apenas um sebo, somos colecionadores. Valorizamos itens raros e edições especiais.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-600/20 p-2 rounded-lg">
                    <Truck className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold uppercase">Retirada no Local</h4>
                    <p className="text-zinc-400">Para lotes grandes, avaliamos e retiramos inclusive em São Paulo Capital e região.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80&w=1000" 
                  alt="Coleção de Discos" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <p className="text-sm italic text-zinc-300">"Excelente atendimento. Vieram em casa, avaliaram meus DVDs e pagaram na hora via Pix. Recomendo!"</p>
                    <p className="mt-2 font-bold text-orange-500">— Cliente Satisfeito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 bg-orange-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase text-black">COMO FUNCIONA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="text-8xl font-black text-black/10 absolute -top-10 left-1/2 -translate-x-1/2">01</div>
              <h3 className="text-2xl font-bold text-black mb-4 relative">CHAME NO WHATS</h3>
              <p className="text-black/80">Envie fotos ou uma lista dos itens que você deseja vender.</p>
            </div>
            <div className="relative">
              <div className="text-8xl font-black text-black/10 absolute -top-10 left-1/2 -translate-x-1/2">02</div>
              <h3 className="text-2xl font-bold text-black mb-4 relative">AVALIAÇÃO</h3>
              <p className="text-black/80">Fazemos uma pré-avaliação online ou agendamos uma visita in loco.</p>
            </div>
            <div className="relative">
              <div className="text-8xl font-black text-black/10 absolute -top-10 left-1/2 -translate-x-1/2">03</div>
              <h3 className="text-2xl font-bold text-black mb-4 relative">PAGAMENTO</h3>
              <p className="text-black/80">Se aceitar a oferta, pagamos na hora e retiramos o material.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <footer className="py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase">
            NÃO DEIXE SEUS DISCOS <br />
            <span className="text-zinc-500">PEGANDO POEIRA</span>
          </h2>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-10 py-6 rounded-2xl text-2xl font-black transition-all hover:bg-orange-600 hover:text-white"
          >
            <MessageCircle size={32} />
            QUERO VENDER AGORA
          </motion.a>
          
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-500 text-sm">
            <p>© 2024 Compramos seu Acervo. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <span>Baixada Santista / SP</span>
              <span>(13) 97345-5873</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp for Mobile */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-green-600 p-4 rounded-full shadow-2xl md:hidden animate-bounce"
      >
        <MessageCircle size={32} className="text-white" />
      </a>
    </div>
  );
}
