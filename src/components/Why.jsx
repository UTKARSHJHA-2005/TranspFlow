import React from 'react'

export default function Why() {
    const features = [
        { icon: "🚀", title: "Faster Shipping", color: "text-pink-500" },
        { icon: "📊", title: "Real-Time Analytics", color: "text-purple-500" },
        { icon: "🎁", title: "Custom Packaging", color: "text-orange-500" },
        { icon: "📦", title: "Automated Fulfillment", color: "text-blue-500" },
        { icon: "🛡️", title: "Private Labeling", color: "text-green-500" },
        { icon: "💖", title: "World Class Support", color: "text-pink-400" },
    ];
    return (
        <section className="bg-white py-20 text-center">
            <h2 className="text-4xl font-bold text-gray-800">Why We Are Best?</h2>
            <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet there will be sapien gravida sed nisl.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-6 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
                        <div className={`text-5xl ${feature.color} mb-4`}>{feature.icon}</div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-gray-500 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a turpis aliquet erat dolor vitae sagittis facilisis.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
