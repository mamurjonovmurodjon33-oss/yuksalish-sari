// Home.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import "../assets/styles/portfoilo.css";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

export default function Portfolio() {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      image: "/images/book1.jpg",
      title: "ONA TILI-O‘QISH SAVODXONLIGI VA UNI O‘QITISH METODIKASI",
      author: "M.X.JUMAKULOVA",
      pdfUrl: "/M.Jumakulova. o'quv qo'llanma.pdf"
    },{
      id: 2,
      image: "/images/book1.jpg",
      title: "",
      author: "M.X.JUMAKULOVA",
      pdfUrl: "/rag'batlantirish.pdf"
    },{
      id: 3,
      image: "/images/book1.jpg",
      title: "",
      author: "M.X.JUMAKULOVA",
      pdfUrl: "/Mavludaxon Xosilovna. slayd for muhokama.pdf"
    },
    {
      id: 4,
      image: "/images/4book.jpg",
      title: "",
      author: "M.X.JUMAKULOVA",
      pdfUrl: "USLUBIY QO'LLANMA (3).pdf"
    }
  ];

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="portfolio">
        <div className="container">
          <h1 className="portfolio-title">Portfolio</h1>
          <div className="portfolio-row">
            {portfolioItems.map((item) => (
              <div 
                key={item.id} 
                className="portfolio-item"
                onClick={() => setSelectedPdf(item.pdfUrl)}
              >
                <div className="portfolio-item_img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="portfolio-item_content">
                  <h3 className="portfolio-item_title">{item.title}</h3>
                  <p className="portfolio-item_subtitle">{item.author}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="maqola" href="https://scholar.googleusercontent.com/scholar?q=cache:e1r3w4cQBAsJ:scholar.google.com/+Mavludaxon+Jumakulova&hl=ru&as_sdt=0,5">Ko`proq maqolalar o`qish... </a>
        </div>
      </div>

      {/* PDF Modal */}
      {selectedPdf && (
        <div className="pdf-modal">
          <div className="pdf-modal-content">
            <button 
              className="close-button" 
              onClick={() => setSelectedPdf(null)}
            >
              ✕
            </button>
            <iframe
              src={`${selectedPdf}#toolbar=0&view=FitH`}
              title="PDF Viewer"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            ></iframe>
          </div>
        </div>
      )}
    </motion.div>
  );
}
