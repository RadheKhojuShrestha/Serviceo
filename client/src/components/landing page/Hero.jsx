function Hero() {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80)",
                }}
            />

            {/* Dark Blue / Black Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3A]/90 via-[#0F2A4A]/85 to-[#000814]/90" />


            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
                <div className="max-w-3xl">

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        Trusted Local Services,
                        <br />
                        <span className="text-blue-200">
                            Just One Click Away
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100 mb-10">
                        Book verified professionals for plumbing, electrical work,
                        house cleaning, and more — fast, reliable, and hassle-free.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition transform hover:scale-105">
                            Get Started
                        </button>

                        <button className="border border-white/70 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
                            Become a Service Provider
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
