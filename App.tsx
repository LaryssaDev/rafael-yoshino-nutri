import React, { useState } from 'react';
import { 
  WHATSAPP_LINK, 
  INSTAGRAM_LINK, 
  IMAGES, 
  BIO_POINTS, 
  DIFFERENTIALS, 
  PROCESS_STEPS,
  ADDRESS
} from './constants';
import { Button } from './components/Button';
import { Lightbox } from './components/Lightbox';
import { CheckCircle2, Instagram, MapPin, ChevronDown, Trophy } from 'lucide-react';

const App: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (img: string) => {
    setCurrentImage(img);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen text-gray-100 selection:bg-brand-green selection:text-brand-dark pb-20 md:pb-0">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pb-8 md:pb-16 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Rafael Yoshino" 
            className="w-full h-full object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        </div>

        <div className="container mx-auto px-5 relative z-10 md:max-w-2xl lg:ml-20">
          <div className="inline-flex items-center gap-2 bg-brand-green/20 backdrop-blur-sm border border-brand-green/30 px-3 py-1 rounded-full mb-4 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-brand-green text-xs font-bold tracking-wider uppercase">Nutrição Esportiva</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-2">
            Eu sou <span className="text-brand-green">Rafael Yoshino</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 font-medium mb-6 max-w-lg">
            Ajudando atletas a ter mais massa, energia e saúde sem abrir mão de comer o que gostam.
          </p>

          <div className="animate-bounce mb-6 w-8 h-8 text-brand-green opacity-80 md:hidden">
             <ChevronDown />
          </div>

          <div className="md:w-fit">
            <Button />
          </div>
        </div>
      </section>

      {/* AUTHORITY / ABOUT SECTION */}
      <section className="py-16 bg-brand-gray relative overflow-hidden">
        <div className="container mx-auto px-5 md:max-w-4xl">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            
            <div className="w-full md:w-1/2 relative">
              <div className="absolute -inset-4 bg-brand-green/20 rounded-2xl blur-xl"></div>
              <img 
                src={IMAGES.expert} 
                alt="Rafael Yoshino Atendendo" 
                className="relative rounded-2xl shadow-2xl border border-gray-700 w-full transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Atleta por natureza,<br/>
                <span className="text-brand-green">Nutricionista por vocação.</span>
              </h2>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Desde os 16 anos, respiro esporte. Pesava apenas 50kg com 1,70m e foi na busca por força que descobri minha paixão pela nutrição.
              </p>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                Já passei pelo <strong>Hospital São Camilo</strong> e clínicas renomadas no Itaim Bibi. Hoje, unindo minha vivência prática com a ciência, ajudo você a alcançar o corpo que deseja.
              </p>

              <ul className="space-y-3 mb-8">
                {BIO_POINTS.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-green w-5 h-5 flex-shrink-0" />
                    <span className="font-medium text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
              
              <Button text="Conhecer o Método" variant="outline" />
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS GALLERY */}
      <section className="py-16 bg-brand-dark">
        <div className="container mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Resultados Reais</h2>
            <p className="text-gray-400">Pessoas comuns alcançando resultados de atleta.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            {IMAGES.results.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square relative overflow-hidden rounded-xl cursor-pointer group bg-gray-900 border border-gray-800"
                onClick={() => openLightbox(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${idx + 1}`} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-widest border border-white px-3 py-1 rounded-full">Ver zoom</span>
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 text-xs mt-6">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* DIFFERENTIALS / TRUST */}
      <section className="py-16 bg-gradient-to-b from-brand-gray to-brand-dark">
        <div className="container mx-auto px-5 md:max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Por que confiar no meu trabalho?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFFERENTIALS.map((item, idx) => (
              <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-green/50 transition-colors">
                <item.icon className="w-10 h-10 text-brand-green mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-md mx-auto">
            <Button />
          </div>
        </div>
      </section>

      {/* PROCESS / HOW IT WORKS */}
      <section className="py-16 bg-brand-dark relative">
        <div className="container mx-auto px-5 md:max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-brand-green font-bold tracking-widest uppercase text-sm">Passo a Passo</span>
            <h2 className="text-3xl font-bold mt-2">Como funciona a consultoria</h2>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-green before:via-gray-800 before:to-transparent">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative flex items-start group">
                <div className="absolute left-0 md:left-1/2 md:-ml-3.5 mt-1.5 w-7 h-7 bg-brand-dark border-2 border-brand-green rounded-full z-10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-brand-green rounded-full group-hover:animate-pulse"></div>
                </div>
                
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className="bg-brand-gray p-5 rounded-xl border border-white/5 hover:border-brand-green/30 transition-colors">
                    <span className="text-brand-green font-bold text-sm mb-1 block">Passo 0{idx + 1}</span>
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-brand-green/10 border border-brand-green/20 rounded-xl text-center">
            <p className="text-brand-green font-bold mb-4">Presencial ou Online?</p>
            <p className="text-sm text-gray-300 mb-6">
              A qualidade é a mesma. No online, te dou todo suporte para medições e ajustes.
              No presencial, te espero no Itaim Bibi.
            </p>
            <Button text="Quero Agendar Agora" />
          </div>
        </div>
      </section>

      {/* HOBBY / BASTIDORES SECTION */}
      <section className="py-16 bg-brand-gray">
        <div className="container mx-auto px-5 md:max-w-4xl">
          <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl border border-white/5">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <img 
                  src={IMAGES.hobby} 
                  alt="Rafael jogando futevôlei" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent md:hidden" />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4 text-brand-green">
                  <Trophy size={20} />
                  <span className="font-bold text-sm uppercase">Lifestyle</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pratico o que prego</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  Não sou um nutricionista de escritório. Amo futevôlei e musculação. Sei exatamente como é a rotina, o cansaço e a necessidade de energia de quem treina.
                </p>
                <div className="text-white font-bold italic border-l-4 border-brand-green pl-4">
                  "Mostro que é possível ter saúde e qualidade de vida sem abrir mão dos alimentos que gostamos."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-brand-dark relative overflow-hidden text-center px-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Seu corpo de atleta começa <span className="text-brand-green">hoje</span>.
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Pare de perder tempo com dietas que não funcionam. Vamos montar uma estratégia real para você.
          </p>
          
          <div className="flex flex-col items-center gap-4">
            <Button className="w-full md:w-auto min-w-[300px] text-xl py-5" />
            <p className="text-sm text-gray-500">
              Junte-se a mais de 100 atletas atendidos
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 border-t border-white/5">
        <div className="container mx-auto px-5 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-1">Rafael Yoshino</h3>
            <p className="text-brand-green font-medium">Nutricionista Esportivo</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-400 text-sm mb-8">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-green transition-colors">
              <Instagram size={18} />
              @rafayoshinonutri
            </a>
            <div className="flex items-center gap-2 hover:text-brand-green transition-colors text-center md:text-left">
              <MapPin size={18} className="flex-shrink-0" />
              {ADDRESS}
            </div>
          </div>

          <div className="text-xs text-gray-600 pt-8 border-t border-white/5">
            &copy; {new Date().getFullYear()} Rafael Yoshino. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* FIXED MOBILE CTA */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden animate-fade-in">
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-black/50 text-white"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.029.575 1.933.88 3.149.88 3.181 0 5.767-2.587 5.768-5.766.001-3.183-2.575-5.765-5.76-5.765zm8.553 5.763c0 4.713-3.84 8.549-8.554 8.549a8.48 8.48 0 0 1-4.706-1.42l-5.323 1.397 1.423-5.187a8.482 8.482 0 0 1-1.393-4.721c.001-4.714 3.84-8.549 8.554-8.549a8.555 8.555 0 0 1 8.553 8.549z"/></svg>
        </a>
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        imageSrc={currentImage} 
        onClose={() => setLightboxOpen(false)} 
      />
    </div>
  );
};

export default App;