function Services() {
    const services = [
        {
            title: "Plumbing",
            image:
                "https://plus.unsplash.com/premium_photo-1663045495725-89f23b57cfc5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Electrical",
            image:
                "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "House Cleaning",
            image:
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        },
        {
            title: "Appliance Repair",
            image:
                "https://plus.unsplash.com/premium_photo-1661342474567-f84bb6959d9f?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Painting",
            image:
                "https://plus.unsplash.com/premium_photo-1683133227667-6b6eaf3852f7?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Pest Control",
            image:
                "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=80",
        },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Our <span className="text-blue-600">Services</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find trusted professionals for everyday services at your convenience.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer bg-white"
                        >
                            {/* Image */}
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Text BELOW image */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Services;
