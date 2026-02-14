import {
    ShieldCheck,
    CreditCard,
    MessageSquare,
    Star,
    MapPin,
    Clock,
} from "lucide-react";

function Features() {
    const features = [
        {
            icon: ShieldCheck,
            title: "Verified Service Providers",
            description:
                "All professionals are verified by our platform to ensure safety and quality service.",
            bg: "bg-green-100",
            color: "text-green-600",
        },
        {
            icon: CreditCard,
            title: "Secure eSewa Payments",
            description:
                "Pay securely through eSewa with transparent pricing and no hidden charges.",
            bg: "bg-purple-100",
            color: "text-purple-600",
        },
        {
            icon: MessageSquare,
            title: "Real-Time Chat",
            description:
                "Chat directly with service providers after booking to discuss details instantly.",
            bg: "bg-blue-100",
            color: "text-blue-600",
        },
        {
            icon: Star,
            title: "Ratings & Reviews",
            description:
                "Choose services based on real customer ratings and honest feedback.",
            bg: "bg-yellow-100",
            color: "text-yellow-600",
        },
        {
            icon: MapPin,
            title: "Location-Based Services",
            description:
                "Find trusted service providers near your location quickly and easily.",
            bg: "bg-teal-100",
            color: "text-teal-600",
        },
        {
            icon: Clock,
            title: "Fast & Easy Booking",
            description:
                "Book services in minutes with a simple and user-friendly interface.",
            bg: "bg-orange-100",
            color: "text-orange-600",
        },
    ];


    return (
        <section id="why-serviceo" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Why Choose <span className="text-blue-600">Serviceo</span>?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Everything you need to book trusted local services — all in one
                        platform.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
                        >
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-xl mb-6
    ${feature.bg} ${feature.color}`}
                            >
                                <feature.icon size={26} />
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
