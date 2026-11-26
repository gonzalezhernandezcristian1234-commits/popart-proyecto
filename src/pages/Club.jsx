import React from 'react'

function Club() {
    return (
        <div>
            <section
                id="contacto"
                className="relative h-screen w-full snap-start overflow-hidden bg-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex items-center justify-center border-t-4 border-black"
            >

                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="halftone-end"
                            width="18"
                            height="18"
                            patternUnits="userSpaceOnUse"
                        >
                            <circle cx="5" cy="5" r="3" fill="#000" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#halftone-end)" />
                </svg>

                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">

                    {/* Formulario Pop Art */}
                    <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_#000] flex flex-col gap-4">

                        <div className="flex items-center justify-between">
                            <h2 className="text-3xl font-black uppercase">
                                06 · Únete al Club
                            </h2>

                            <span className="px-2.5 py-1 bg-[#00E5FF] border-2 border-black font-black text-xs uppercase -rotate-3">
                                VIP
                            </span>
                        </div>

                        <p className="text-xs font-bold text-neutral-700">
                            Recibe preventas secretas, horarios oficiales y un 15% de descuento en merchandising.
                        </p>

                        <input
                            type="text"
                            placeholder="Tu Nombre"
                            className="w-full px-4 py-2.5 bg-[#FFFDF5] border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#00E5FF]"
                        />

                        <input
                            type="email"
                            placeholder="tu@correo.com"
                            className="w-full px-4 py-2.5 bg-[#FFFDF5] border-2 border-black font-bold text-sm focus:outline-none focus:bg-[#00E5FF]"
                        />

                        <button
                            type="button"
                            className="w-full py-3.5 bg-[#FF0055] text-white border-4 border-black font-black text-sm uppercase tracking-wider shadow-[5px_5px_0px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                        >
                            ¡Quiero mi Descuento!
                        </button>
                    </div>

                    {/* Panel Visual Cómic */}
                    <div className="bg-[#0047FF] text-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_#000] flex flex-col items-center text-center gap-4">

                        <svg className="w-36 h-36" viewBox="0 0 120 120" fill="none">
                            <polygon
                                points="60,4 75,35 110,20 92,52 118,72 84,84 96,114 64,96 46,118 36,88 6,98 24,66 4,48 36,36 24,8 52,26"
                                fill="#FFE600"
                                stroke="#000"
                                strokeWidth="5"
                            />

                            <text
                                x="60"
                                y="65"
                                textAnchor="middle"
                                fill="#FF0055"
                                fontWeight="900"
                                fontSize="18"
                                fontFamily="sans-serif"
                            >
                                BAM!
                            </text>
                        </svg>

                        <h3 className="text-2xl font-black uppercase">
                            ¡Nos vemos en el Parque Central!
                        </h3>

                        <p className="text-xs font-bold text-[#00E5FF] uppercase tracking-wider">
                            14, 15 y 16 de Noviembre · 2026
                        </p>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Club
