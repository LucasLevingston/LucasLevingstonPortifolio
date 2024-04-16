import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaShareAltSquare } from 'react-icons/fa';
import { DiScrum } from 'react-icons/di';
import { SiPostman } from 'react-icons/si';
import { BsChevronBarLeft, BsChevronBarRight } from 'react-icons/bs';
import TecnologiaIcon from '../components/TecnologiaIcon';
import { certificados } from '../Data/CertificadosData';
import { TecnologiasDominadas } from '../components/TecnologiasDominadas';
import { tecnologiasDominadasData } from '../Data/TecnologiasDominadasData';

export default function Home() {
	const [indiceAtual, setIndiceAtual] = useState(0);

	const imagemAnterior = () => {
		const novoIndice =
			(indiceAtual - 1 + certificados.certificados.length) %
			certificados.certificados.length;
		setIndiceAtual(novoIndice);
	};

	const proximaImagem = () => {
		const novoIndice = (indiceAtual + 1) % certificados.certificados.length;
		setIndiceAtual(novoIndice);
	};

	return (
		<div className=" text-mainTextColor">
			<Sidebar />
			<div
				id="Sobre"
				className="ml-auto mr-0 h-full  flex-1 bg-aboutBgColor p-[50px] sm:max-w-[75%]"
			>
				<Header />
				<div className="overflow-y-auto">
					<div className='border-b-[2px] '>

						<p className="max-w-[100%]  ">
							Sou um desenvolvedor apaixonado pelo que faço. Costumo dizer que
							“quem faz o que gosta, vive de férias”. Tenho
							<span className="text-mainColor"> 7 meses de experiência </span>e já
							atuei tanto no back end como no front end, utilizando{' '}
							<span className="text-mainColor">
								{' '}
								React, Typescript, Tailwind CSS, MongoDB, Prisma, Express,
								Postman, Git, GitHub, Scrum e Docker.
							</span>
						</p>
						<br />
						<p className="mb-4 max-w-[100%] ">
							Atualmente estou no{' '}
							<span className="text-mainColor">8º semestre </span> do curso de
							<span className="text-mainColor"> Ciências da Computação.</span>
						</p>
						<a
							className="] m-[25px_0] flex w-[150px] rounded-[5px] border-[3px] border-solid border-mainColor bg-mainColor p-[12px_10px] text-center text-[13px] font-bold no-underline transition-[0.5s] hover:bg-transparent hover:text-mainColor"
							href="https://github.com/LucasLevingston"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaShareAltSquare className="text-[22px]  " />
							<span className=" pl-3  text-mainTextColor"> Ver GitHub</span>
						</a>
					</div>

					<div className="border-y-[1px] border-solid border-borderColor py-4 ">
						<p className="text-2xl font-bold ">
							Conheça as tecnologias que domino:
						</p>
						<TecnologiasDominadas tecnologias={tecnologiasDominadasData} />
					</div>
					<div className="border-b-[1px] border-solid border-borderColor pl-3 py-4">
						<div className="pb-2 text-2xl font-bold ">
							Minhas experiências:
						</div>
						<div className="xl:pb-3">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Splendore - Patos, PB
							</h3>
							<p className=" pl-10 pt-3">Início: 06/2023 - Fim: 01/2024</p>
							<p className=" pl-10 pt-3">
								Cargo:{' '}
								<span className="underline">
									Estagiário de Desenvolvedor Web
								</span>
							</p>
							<p className=" pl-10 pt-3">
								Atuava com{' '}
								<span className="text-mainColor">Desenvolvimento web.</span>{' '}
								Desenvolvendo tanto o Back e o Front de aplicações utilizando{' '}
								<span className="text-mainColor">
									React, Typescript, Tailwind CSS, MongoDB, Prisma, Express,
									Postman, Git, GitHub, Scrum e Docker.
								</span>
							</p>
						</div>
						<div className="pb-5 pt-5">
							<h3 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								EndoDerm - Patos, PB
							</h3>
							<p className=" pl-10 pt-3">Início: 06/2022 - Fim: 10/2022</p>
							<p className=" pl-10 pt-3 ">
								Cargo: Atendente de consultório médico
							</p>
							<p className=" pl-10 pt-3">
								Realizava agendamento de consultas, organização de planilhas e
								atendimento ao público.
							</p>
						</div>
					</div>
					<div className="border-b-[1px] border-solid border-borderColor pl-3 py-4">
						<div className="pb-2   text-2xl font-bold ">Formação:</div>
						<div className="pb-3">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Graduação em Ciências da Computação
							</h3>
							<p className=" pl-10 pt-3">
								Universidade Estadual da Paraíba (UEPB)
							</p>
							<p className=" pl-10 pt-3">
								Agosto/2020 - Agosto/2025 (previsto)
							</p>
							<p className=" pl-10 pt-3">
								Atualmente no{' '}
								<span className="text-mainColor">8º/10 semestre.</span>
							</p>
						</div>
						<div className="pt-5">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Graduação em Engenharia Civil
							</h3>
							<p className=" pl-10 pt-3">
								Centro Universitário de Patos (UNIFIP)
							</p>
							<p className=" pl-10 pt-3">
								Fevereiro/2020 - Julho/2020 (1 semestre)
							</p>
						</div>
					</div>
					<div className="pl-3 py-4">
						<div className="  text-2xl font-bold ">Certificados</div>
						<div className=" pt-2">
							<div className="m-auto">
								<div className="flex max-w-full">
									<h2 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
										{certificados.certificados[indiceAtual].nome}
									</h2>
								</div>
								<div className="">
									{certificados.certificados[indiceAtual].sobre.map(
										(sobre: string, index: number) => (
											<div>
												<p className=" pl-10 pt-3">{sobre}</p>
											</div>
										))}
								</div>

								<p className=" pl-10 pt-3 text-[120%] font-bold">
									Tecnologias Utilizadas:
								</p>
								<div className="flex w-full flex-wrap pl-7 pt-3">
									<TecnologiaIcon tecnologias={certificados.certificados[indiceAtual].tecnologias} />
								</div>

							</div>

							<div className="flex h-[200px] w-[300px]  items-center justify-between md:h-[450px] md:w-[700px]">
								<div className="transform cursor-pointer rounded-full  text-2xl text-mainTextColor group-hover:block">
									<BsChevronBarLeft onClick={imagemAnterior} size={30} />
								</div>
								<div
									style={{
										backgroundImage: `url(${certificados.certificados[indiceAtual].imagem})`,
										backgroundSize: 'cover',
									}}
									className="h-[90%] w-[90%] rounded-2xl bg-center duration-500"
								></div>
								<div className="transform cursor-pointer rounded-full  text-2xl text-mainTextColor group-hover:block">
									<BsChevronBarRight onClick={proximaImagem} size={30} />
								</div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
