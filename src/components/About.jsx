import React, { useEffect, useState } from "react";

function About() {
    const [isVisible,setIsVisible]=useState(false);
    useEffect(()=>{
        const observer= new IntersectionObserver(([entry]) => {
            if(entry.intersectionRatio){
                setIsVisible(true)
            }
        },
        {threshold:0.3}
    );
    const element = document.getElementById("about");
    if(element) observer.observe(element);
    return () => observer.disconnect();
    },[]);
    return(
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 py-4">
                <div className="container px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-space">
                        <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                            <div className="relative group">
                                <div className="w-full max-w-md mx-auto">
                                    <div className="relative border-4 border-green-500 rounded-2xl p-2 group-hover:border-green-400 transition-all duration-300">
                                        <img src="/image/Gemini_Generated_Image_r8rlwcr8rlwcr8rl.png" alt="" className="w-full rounded-xl transition-all duration-500 group-hover:scale-105"/>
                                        <div className="absolute inset-2 bg-gradient-to-tr from-green-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute -top-6 -right-6 w-12 h-12 bg-red-600/20 rounded-full"></div>
                                        <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-blue-600/20 rounded-full"></div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                            <div className="space-y-4">
                                <p className="text-green-400 font-semibold text-lg">À propos de moi</p>
                                <h2 className="text-4xl md:text-5xl text-white font-bold animate-slide-up">Pourquoi me choisir pour votre prochain projet ?<br/></h2>
                                <p className="text-green-400 font-semibold delay-200">Développeuse Full-Stack & Intelligence Artificielle </p>
                            </div>
                            <div className="space-y-6 text-gray-300 leading-relaxed">
                               <p className="text-base sm:text-lg lg:text-xl text-justify text-gray-300 leading-relaxed tracking-wide">
                                 Vous pouvez me choisir pour votre prochain projet parce que je ne me contente pas seulement d’écrire du code : 
                                 je <span className="font-semibold text-white">transforme vos besoins en solutions concrètes, performantes et fiables</span>. 
                                 Mon objectif est de <span className="font-semibold text-white">comprendre en profondeur votre vision</span> pour livrer un travail qui dépasse vos attentes.
                                 Je suis <span className="text-white font-medium">rigoureuse, réactive et orientée résultats</span> : 
                                 je sais respecter les délais, m’adapter aux imprévus et proposer des améliorations lorsque c’est nécessaire. 
                                 En me confiant votre projet, vous aurez une <span className="italic text-white">collaboratrice impliquée</span>, 
                                 qui <span className="font-semibold text-white">communique clairement</span> et qui met 
                                 <span className="font-semibold text-white"> toute son énergie pour garantir la réussite et la qualité du produit final</span>.
                               </p>

                            </div>
                            {/*<div className={`grid grid-cols-2 gap-8 py-6 transition-all duration-1000 dealy-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                <div className="group">
                                    <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">
                                       Nom:
                                    </p>
                                    <p className="text-gray-300">Ghanem Souhayla</p>

                                </div>
                                <div className="group">
                                    <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">Localisation:</p>
                                    <p className="text-gray-300">Safi</p>

                                </div>
                                <div className="group">
                                    <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">Date de naissance:</p>
                                    <p className="text-gray-300">28 février,2003 </p>

                                </div>
                                <div className="group">
                                    <p className="text-white font-semibold group-hover:text-green-400 transition-all duration-300">Email:</p>
                                    <p className="text-gray-300">souhaghanem5@gmail.com</p>

                                </div>
                            </div>*/}
                           {/* <div className="flex flex-wrap gap-4 transition-all duration-1000 delay-1100">
                                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                                   Download
                                </button>
                                <button className="border-2 border-slate-600 text-white px-8 py-3 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium hover:scale-105">
                                   LEARN MORE
                                </button>
                            </div>*/}

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
export default About;