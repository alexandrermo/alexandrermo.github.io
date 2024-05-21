import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#78C5E1]">
            <div className="flex items-center w-screen p-4 font-bold bg-[#118AB6] shadow-lg justify-between">
                <span className="text-white stroke-black stroke-2 text-lg">
                    Alexandre Rodrigues Macedo de Oliveira
                </span>

                <div className="flex gap-4">
                    <a href="https://github.com/alexandrermo" target="_blank">
                        <Image
                            src="/github.webp"
                            alt="Git Hub Logo"
                            width={40}
                            height={40}
                        />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/alexandre-rodrigues-495b06129/"
                        target="_blank"
                    >
                        <Image
                            src="/linkedin.png"
                            alt="Linkedin Logo"
                            width={40}
                            height={40}
                        />
                    </a>
                </div>
            </div>
        </main>
    )
}
