
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
            <div className="relative w-full h-80 max-w-md mx-auto">
                 <div className="absolute top-0 left-0 w-full h-full rounded-xl bg-brand-beige transform -rotate-3"></div>
                 <img src="https://picsum.photos/seed/team/800/600" alt="Creative Team" className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-xl" />
            </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold font-display text-brand-dark mb-6">
            Tentang SIMULASI GAYA
          </h2>
          <p className="text-lg text-brand-brown leading-relaxed">
            Kami adalah agensi kreatif yang bersemangat membantu brand fashion lokal untuk bersinar. Kami percaya bahwa setiap brand punya cerita unik, dan tugas kami adalah menerjemahkannya menjadi visual yang memikat dan strategi marketing yang efektif. Kami bukan hanya vendor, kami adalah partner pertumbuhan Anda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
