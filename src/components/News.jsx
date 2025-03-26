import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const newsData = [
  {
    title: "Global Shipping Updates",
    description: "The shipping industry faces new challenges due to increased fuel prices...",
    image: "https://mecaluxcom.cdnwm.com/documents/d/global/m53p11-logistica-internacional?e=jpg",
  },
  {
    title: "Air Freight Demand Surges",
    description: "Air cargo services experience high demand amid global supply chain shifts...",
    image: "https://www.michiganstateuniversityonline.com/wp-content/uploads/sites/3/2014/04/logistics-fundamentals-supply-chain.jpg",
  },
  {
    title: "Maritime Logistics Trends",
    description: "Technological innovations are transforming maritime logistics...",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjP4s_mlst_2WWYZDkg_qVVlrRglV_wusFJw&s",
  },
  {
    title: "Rail Freight Developments",
    description: "Rail transport sees growth with sustainable logistics solutions...",
    image: "https://morethanshipping.com/wp-content/uploads/2019/12/overview-of-railroads.jpg",
  },
];

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <div className="bg-gray-100 p-3">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        🚛 Logistics Industry News
      </h2>

      {/* News Grid (Horizontal Scrolling) */}
      <div className="flex overflow-x-auto space-x-6 p-4">
        {newsData.map((news, index) => (
          <div
            key={index}
            className="w-96 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => setSelectedNews(news)}
          >
            <img src={news.image} alt={news.title} className="w-full h-52 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{news.title}</h3>
              <p className="text-gray-600 text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">{selectedNews.title}</h3>
              <button onClick={() => setSelectedNews(null)} className="text-gray-600 hover:text-gray-900">
                <FaTimes size={20} />
              </button>
            </div>
            <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-48 object-cover rounded-lg" />
            <p className="text-gray-700 mt-4">{selectedNews.description}</p>
            <button
              onClick={() => setSelectedNews(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
