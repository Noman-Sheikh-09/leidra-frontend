import React from "react";
import Image from "next/image";
import { div } from "framer-motion/client";

function Hero() {
  return (
    <>
     <div className="absolute inset-0 flex ">
        <video
          className="h-full w-full flex-1 object-cover object-center"
          autoPlay
          loop
          playsInline
          muted
          controls={false}
        >
          <source src="/Hero-Bg.mp4" type="video/mp4" />
        </video>
      </div>
    <section className=" flex flex-col justify-between min-h-[100vh]  relative mb-[240px]">
      {/* Background Video */}
     
      {/* Navbar */}
      <div className="flex max-w-[1920px] px-[20px] md:px-[60px] py-10 justify-between items-center">
        <Image
          src="/logo-white.svg"
          alt="Logo..."
          className="w-[123px] h-[42px] xl:w-[142px] xl:h-[60px]"
          width={1}
          height={1}
        />
        <div className="gap-5 hidden min-[1050px]:flex">
          {/* Navigation */}
          <nav className="flex uppercase font-gustavo-medium text-sm items-center bg-white px-9 xl:h-[60px] md:h-[52px] rounded-full gap-5">
            <p className="flex gap-1 items-center cursor-pointer">
              <span>Soluciones</span> <img src="/angle-down.svg" alt="" />
            </p>
            <p className="cursor-pointer">proyectos</p>
            <p className="cursor-pointer">noticias</p>
            <p className="cursor-pointer">hublidera</p>
            <p className="cursor-pointer">nosotros</p>
          </nav>
          {/* CTA */}
          <button className="px-4 flex items-center bg-white rounded-full xl:h-[60px] md:h-[52px]">
            <div className="w-[14px] aspect-square rounded-full bg-green"></div>
            <p className="text-[22px] ml-2">Contacts</p>
            <img className="ml-6" src="arrow-right.svg" alt="" />
          </button>
        </div>
        <button className="px-1 bg-white hidden rounded-full max-[1050px]:block">
          <img src="menu.svg" alt="" />
        </button>
      </div>

      {/* Bottom */}
      <div className="text-white">
        <div className="flex flex-col items-center gap-16 min-[1200px]:gap-0 min-[1200px]:items-stretch min-[1200px]:flex-row justify-between px-[60px] mb-9">
          <div>
            <div>
              <div className="flex items-center gap-6">
                <p className="font-gustavo-reg max-w-[110px] sm:text-lg uppercase leading-[1.2]">
                  BIENVENIDO A LIDERA
                </p>
                <h2 className="text-[40px] min-[450px]:text-[60px] md:text-[110px] xxl:text-[140px] leading-none">
                  Consultoría
                </h2>
              </div>
              <h2 className="text-[80px] md:text-[100px] xxl:text-[140px] leading-none">
                deportiva
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-between relative">
            <button className="hidden min-[1200px]:block px-[52px] absolute -top-[50%] -left-[170%] py-[15px] xxl:py-[30px] text-[22px] border-2 border-white bg-transparent rounded-[72px] mr-[90px]">
              Play
            </button>
            <button className="hidden min-[1200px]:block px-[52px] py-[22px] xxl:py-[34px] border-2 border-white bg-transparent rounded-full mr-[90px]">
              <img src="arrow-right-white.svg" alt="" />
            </button>
            <div className="min-[1200px]:ml-auto font-gustavo-reg flex items-center gap-1">
              1
              <img src="/line-gray.svg" alt="" />
              2
              <img src="/line-half-white.svg" alt="" />
              3
              <img src="/line-gray.svg" alt="" />4
            </div>
          </div>
        </div>


        <div className="px-[60px] gap-10 flex items-center justify-between overflow-x-scroll hide-scroll border-t border-b border-white py-10 ">
          <p className="text-nowrap xl:text-[18px] text-[15px]">HOLA, ¿QUÉ ESTÁS BUSCANDO?</p>
          <div className="flex gap-3">
            {[
              {
                text: "Fin de contrato de prestación de servicios",
                active: true,
              },
              {
                text: "Elaborar pliegos",
                active: false,
              },
              {
                text: "Fin de contrato de concesión",
                active: false,
              },
              {
                text: "Elaborar pliegos",
                active: false,
              },
              {
                text: "Otros...",
                active: false,
              },
            ].map((v) => (
              <div
                className={` p-[20px] h-[36px] md:h-[46px] xxl:h-[52px] cursor-pointer flex items-center justify-center  border border-white text-nowrap font-gustavo-reg text-[15px] xl:text-[18px] rounded-[72px] ${v.active ? "bg-white text-black" : ""}`}
              >
                {v.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>

  );
}

export default Hero;
