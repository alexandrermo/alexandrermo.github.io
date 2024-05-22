import { Card, CardContent, CardHeader, Divider } from '@mui/material'
import Image from 'next/image'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col  bg-[#78C5E1]">
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

            <div className="max-w-screen-lg mt-4 w-full m-auto flex flex-col items-start p-4">
                <Card>
                    <div className="text-xl ml-4 mt-2 font-bold">
                        Informações
                    </div>

                    <Divider />

                    <CardContent className="flex flex-col gap-2">
                        <div>
                            <b>Área de atuação:</b> Desenvolvimento de software
                            com foco em{' '}
                            <span className="italic">frontend.</span>
                        </div>

                        <div>
                            <b>Data de nascimento:</b> 15/10/1994.
                        </div>

                        <div>
                            <b>Cidade/Estado:</b> Florianópolis, SC.
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    )
}
