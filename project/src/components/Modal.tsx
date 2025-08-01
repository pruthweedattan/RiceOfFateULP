import React, { useMemo, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { getFunnyAstroFact } from '../lib/gemini';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const names = [
  "Govind Hans",
  "Ayush Vp",
  "Shamil V K",
  "Nazil Muhammed",
  "Pruthwee Dattan",
  "Keerthana L S",
  "Sruthi M",
  "Amrid Chandh",
  "Dhanvin Krishna",
  "Sana P",
  "NIHA P",
  "Sona Shahiry",
  "Fathima Shifana ch",
  "Niveditha T",
  "Aldona Thomas",
  "Sarang Kc",
  "Bhama K P",
  "Vaishnav T",
  "Sana Fathima. M",
  "Keerthana K",
  "Aadit Martin",
  "Hrishikesh R Nair",
  "Gowri Padmakumar",
  "Muhammed Farih Abdul Hameed",
  "Farhan Aflah",
  "Avanthika P",
  "Adwaith J",
  "Niranjana K",
  "Deol Robin",
  "Gautham Krishna",
  "Pavan A K",
  "P. AKASH",
  "Gowtham Sundar S",
  "Muhammed Anfal vm",
  "Vyshnav P",
  "Gowri Laxmi",
  "Devika K",
  "Sabeel V",
  "Pranith M K",
  "Jinsha Prasad",
  "Abhinaya K. P",
  "Amrithesh Kp",
  "Vismaya Menon",
  "Stesia Biju",
  "Naji Abdulla",
  "Agney C",
  "Sharon Shaju Augustine",
  "Anjanakrishnan A",
  "Adrija Rajeev T K",
  "Neha C",
  "Nandakiran R",
  "Akshath Ok",
  "Parnika Praveen",
  "Keerthana S krishna",
  "Devika Ks",
  "Devanandana B",
  "Gayathri Ajith",
  "Fathima Fidha",
  "PS Mahalakshmi",
  "Arjun K",
  "Aleena M",
  "Muhammed Jazim T",
  "SANDRA SURESH",
  "Leo Shine",
  "Alexio Pj",
  "Sandra Shaji",
  "Zahwa K",
  "Saja sanika T H",
  "Nandana M R",
  "Asin Mariya",
  "Fathima Miya",
  "Keerthana Shyju T V",
  "Shivani Shivani",
  "Likitha A S",
  "Lamha Fathima m k",
  "Noel Paul",
  "ARUNAMSHU DEV D R",
  "Aseel K V",
  "Ansila KK",
  "Anugraha C",
  "Krishnasree M",
  "Sreeranjini Kp",
  "Fadiee Mhd",
  "Aryananda Aryananda",
  "Angitha M",
  "Khadeeja Nasri",
  "Parvathi Pratheesh Kumar",
  "Sneha Shine",
  "Sandra S Raj",
  "Niya Santhosh",
  "Rohan Vijesh",
  "Hadhiya Parveen cm",
  "Nihara Praveenlal",
  "Devasankari M R"
];
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [astroFact, setAstroFact] = useState<string>("");
  
  const randomName = useMemo(() => {
    return names[Math.floor(Math.random() * names.length)];
  }, [isOpen]); 

  useEffect(() => {
    if (isOpen) {
      setAstroFact("Consulting the stars...");
      getFunnyAstroFact(randomName).then(fact => setAstroFact(fact));
    }
  }, [isOpen, randomName]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg animate-fade-in" onClick={onClose} />
      <div className="relative bg-gradient-to-br from-amber-50/95 to-amber-100/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 mx-4 max-w-lg w-full animate-modal-appear border border-amber-200/30">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-amber-600 hover:text-amber-800 transition-colors duration-200 p-2 rounded-full hover:bg-amber-100/50"
        >
          <X size={24} />
        </button>
        
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-block w-20 h-20 mx-auto mb-6 relative">
              <div 
                className="w-full relative"
                style={{
                  width: '32px',
                  height: '88px',
                  background: `linear-gradient(135deg, #fefcf7, #f0ebe0)`,
                  boxShadow: `0 6px 20px rgba(0, 0, 0, 0.25)`,
                  borderRadius: '45% 55% 48% 52% / 25% 25% 75% 75%',
                  transform: 'rotate(-8deg)',
                }}
              />
            </div>
          </div>
          
          <h2 className="text-3xl font-light text-amber-900 mb-6">
            {randomName}
          </h2>
          
          <p className="text-amber-700 mb-10 leading-relaxed text-lg opacity-90">
            {astroFact}
          </p>
          
          <button
            onClick={onClose}
            className="px-10 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-xl font-medium text-lg tracking-wide"
          >
            Begin Again
          </button>
        </div>
      </div>
    </div>
  );
};
