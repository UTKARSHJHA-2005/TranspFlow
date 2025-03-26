import React from 'react'

export default function Need() {
    return (
        <section className="bg-gradient-to-r from-blue-600 to-blue-300 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Everything <span className="text-white">you need</span> in <br /> one place
                    </h2>
                    <p className="mt-4 text-lg text-white/80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt turpis ornare,
                        placerat orci varius.
                    </p>

                    {/* Features List */}
                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-2">
                            ✅ Real-time data
                        </li>
                        <li className="flex items-center gap-2">
                            ✅ Ship to and anywhere
                        </li>
                        <li className="flex items-center gap-2">
                            ✅ 100% Trusted
                        </li>
                        <li className="flex items-center gap-2">
                            ✅ REST API enabled
                        </li>
                    </ul>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
                    <img
                        src="https://supplychainmanagement.utk.edu/wp-content/uploads/sites/2/2020/03/blog-ut-haslam-end-to-end-supply-chain-management-2.f9169736-1024x512.jpg"
                        alt="Supply Chain"
                        className="max-w-full md:max-w-lg"
                    />
                </div>
            </div>
        </section>
    )
}
