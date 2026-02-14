import { useState } from "react";
import {
    Search,
    UserCheck,
    MessageCircle,
    CreditCard,
    Briefcase,
    CheckCircle,
    DollarSign,
} from "lucide-react";

function HowItWorks() {
    const [activeTab, setActiveTab] = useState("client");

    const clientSteps = [
        { icon: <Search size={42} />, title: "Browse Services" },
        { icon: <UserCheck size={42} />, title: "Choose Provider" },
        { icon: <MessageCircle size={42} />, title: "Book & Chat" },
        { icon: <CreditCard size={42} />, title: "Pay Securely" },
    ];

    const providerSteps = [
        { icon: <Briefcase size={42} />, title: "Accept Jobs" },
        { icon: <MessageCircle size={42} />, title: "Chat with Customers" },
        { icon: <CheckCircle size={42} />, title: "Complete Task" },
        { icon: <DollarSign size={42} />, title: "Receive Payment" },
    ];

    const steps = activeTab === "client" ? clientSteps : providerSteps;

    return (
        <section id="how-it-works" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                        How It Works
                    </h2>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setActiveTab("client")}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${activeTab === "client"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            For Clients
                        </button>
                        <button
                            onClick={() => setActiveTab("provider")}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${activeTab === "provider"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            For Service Providers
                        </button>
                    </div>
                </div>

                {/* Steps Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl p-8 flex flex-col items-start hover:shadow-lg transition min-h-[180px]"
                        >
                            <div className="text-blue-700 mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">
                                {step.title}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default HowItWorks;
