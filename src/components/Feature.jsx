import React from 'react'

export default function Feature() {
    return (
        <div>
            {/* Analytics Section */}
            <section className="bg-blue-900 text-white py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img src="https://images.squarespace-cdn.com/content/v1/5ea2eb4be710ac685db45b46/1631236919417-PE3MOS7JUV1RR7E5L3DW/PV+Logistics+Management+shipment+tracking-01.jpg" alt="Product Details" className="w-full rounded-lg" />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 mt-8 md:mt-0 md:pl-10">
                        <h2 className="text-4xl font-bold">Visibility, Analytics, Intelligence</h2>
                        <p className="text-gray-300 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcor consectetur porttitor tristique nulla amet, velit.
                            Aliquam mattis quam mauris, sapien orci commodo, non egestas.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
