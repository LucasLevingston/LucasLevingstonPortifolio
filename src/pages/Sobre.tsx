import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FaShareAltSquare } from 'react-icons/fa';
import { DiScrum } from 'react-icons/di';
import { SiPostman } from 'react-icons/si';

export default function Home() {
	return (
		<div className=" text-mainTextColor">
			<Sidebar />
			<div
				id="Sobre"
				className="ml-auto mr-0  flex-1 bg-aboutBgColor p-[50px] sm:max-w-[75%]"
			>
				<Header />
				<div className="overflow-y-auto">
					<p className="max-w-[100%]  ">
						Sou um desenvolvedor apaixonado pelo que faço. Costumo dizer que
						“quem faz o que gosta vive de férias”. Por isso estou sempre
						querendo aprender algo novo que me ajude a ser um desenvolvedor cada
						vez melhor. Estou com
						<span className="text-mainColor"> 6 meses de experiência </span>e já
						atuei tanto no back end como no front end, utilizando{' '}
						<span className="text-mainColor">
							{' '}
							React, Typescript, Tailwind, Mongo, Prisma, Express e Docker.
						</span>
					</p>
					<br />
					<p className="mb-4 max-w-[100%] ">
						Atualmente estou atuando como estagiário na empresa Splendore, na
						qual desempenho a função de{' '}
						<span className="text-mainColor">Desenvolvedor Web.</span>
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
					<h2 className="mb-5 border-t-[1px] border-solid border-mainTextColor pt-10 text-[32px] font-bold">
						Minhas Skills
					</h2>
					<div className="border-b-[1px]  border-solid border-borderColor  pt-3">
						<p className="text-2xl font-bold ">
							Conheça as tecnologias que domino:
						</p>
						<div className="mt-5 flex flex-wrap">
							<div className="mb-8  w-full sm:w-[33%]">
								<p className="mb-4  border-l-[5px] border-solid border-mainColor pl-2 text-xl font-bold">
									Linguagens de programação
								</p>
								<i className="devicon-html5-plain colored ml-3 mr-2 text-4xl"></i>
								<i className="devicon-css3-plain colored mr-2 text-4xl"></i>
								<i className="devicon-javascript-plain colored mr-2 text-4xl"></i>
								<i className="devicon-typescript-plain colored mr-2 text-4xl"></i>
								<i className="devicon-java-plain colored mr-2 text-4xl "></i>
								<i className="devicon-python-plain colored mr-2 text-4xl"></i>
							</div>

							<div className="mb-8  w-full sm:w-[33%]">
								<p className="mb-4   border-l-[5px] border-solid border-mainColor pl-2 text-xl font-bold">
									Front-End Frameworks
								</p>
								<i className="devicon-react-plain colored ml-3 mr-2 text-4xl"></i>
								<i className="devicon-tailwindcss-plain colored text-4xl "></i>
								<i className="devicon-nextjs-original ml-3 mr-2 text-4xl"></i>
							</div>
							<div className="mb-8  w-full sm:w-[33%]">
								<p className="mb-4   border-l-[5px] border-solid border-mainColor pl-2 text-xl font-bold">
									Back-End Frameworks
								</p>
								<i className="devicon-express-original ml-3 mr-2 text-4xl"></i>
							</div>
							<div className="mb-8  w-full sm:w-[33%]">
								<p className="mb-4   border-l-[5px] border-solid border-mainColor pl-2 text-xl font-bold">
									Databases
								</p>
								<i className="devicon-postgresql-plain colored ml-3 mr-2 text-4xl"></i>
								<i className="devicon-mysql-plain colored mr-2 text-4xl"></i>
								<i className="devicon-mongodb-plain colored mr-2 text-4xl"></i>
							</div>
							<div className="mb-8  w-full sm:w-[33%] ">
								<p className="mb-4 flex border-l-[5px] border-solid border-mainColor pl-2 text-xl font-bold">
									Ferramentas
								</p>
								<div className="flex">
									<i className="devicon-docker-plain-wordmark colored ml-3 mr-2 text-4xl"></i>
									<i className="devicon-git-plain-wordmark colored ml-3 mr-2 text-4xl"></i>
									<i className="devicon-github-original-wordmark ml-3 mr-2 text-4xl"></i>
									<SiPostman className="ml-3 mr-2 text-4xl " />
								</div>
							</div>
							<div className="mb-8  w-full sm:w-[33%]">
								<p className="mb-4   border-l-[5px] border-solid border-mainColor pl-2 text-xl font-bold">
									Metodologias Ágeis{' '}
								</p>
								<div className="flex">
									<DiScrum className=" colored ml-3 mr-2 text-5xl" />
								</div>
							</div>
						</div>
					</div>
					<div className="border-b-[1px]  border-solid border-borderColor pt-3">
						<div className="pb-2 pt-5  text-2xl font-bold ">
							Minhas experiências:
						</div>
						<div className=" xl:pb-3">
							<h3 className="border-l-[5px]  border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								Splendore - Patos, PB (atual)
							</h3>
							<p className=" pl-10 pt-3">Inicio: 06/2023</p>
							<p className=" pl-10 pt-3">
								Cargo: Estagiário de Desenvolvedor Web
							</p>
							<p className=" pl-10 pt-3">
								Trabalho com desenvolvimento web. Desenvolvendo tanto o Back e o
								Front de aplicações utilizando React, Typescript, Tailwind,
								Mongo, Prisma, Express e Docker.
							</p>
						</div>
						<div className="pb-5 pt-5">
							<h3 className="border-l-[5px] border-mainColor pl-3 text-xl font-bold sm:border-l-[5px] xl:border-l-[5px]">
								EndoDerm - Patos, PB
							</h3>
							<p className=" pl-10 pt-3">Inicio: 06/2022 - Fim: 10/2022</p>
							<p className=" pl-10 pt-3 ">
								Cargo: Atendente de consultório médico
							</p>
							<p className=" pl-10 pt-3">
								Realizava agendamento de consultas, organização de planilhas e
								atendimento ao público.
							</p>
						</div>
					</div>
					<div>
						<div className="pb-2 pt-5  text-2xl font-bold ">Formação:</div>
						<div className=" pb-3">
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
							<p className=" pl-10 pt-3 lg:pb-6">
								Fevereiro/2020 - Julho/2020 (1 semestre)
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
