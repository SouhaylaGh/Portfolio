import { ArrowRight,Play,Github,Linkedin,Mail} from "lucide-react";
import React, { useEffect, useState } from "react";

function Hero() {
    const [isVisible,setIsVisible] = useState(false)

    useEffect(()=>{
        setIsVisible(true)
    },[]);
    return(
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 to-slate-900 pt-20 relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>
            <div className="container mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                      <p className={`text-green-400 font-semibold text-lg transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>Bienvenue sur mon Portfolio</p>
                      <h1 className={`text-5xl md:text-7xl font-black text-white leading-tight transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                         {/*I'm
                        <span className="text-green-400">Developer</span><br/>*/}
                        <span className="text-white">Souhayla Ghanem</span>
                      </h1>
                      <p className={`mt-4 text-gray-300 text-lg leading-8 max-w-3xl text-left transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                         Ingénieure en Génie Informatique et Intelligence Artificielle, passionnée par le développement web et la data science.
                       </p>
                       {/*<div className="flex flex-wrap gap-4 pt-4 transition-all duration-1000 delay-600">
                          <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl font-medium hover:scale-105">LEARN MORE <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></button>
                          <button className="border-2 border-slate-600 text-white px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-400 transition-all duration-300 font-medium flex items-center gap-2 group hover:scale-105"><Play className="w-5 h-5"/>PLAY VIDEO</button>
                       </div>*/}
                       <div className={`flex gap-4 pt-6 transition-all duration-100 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                          <a href="https://github.com/SouhaylaGh" className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:roate-6">
                             <Github className="w-5 h-5" />
                          </a>
                          <a href="https://www.linkedin.com/in/souhayla-ghanem-28791b306/" className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:roate-6">
                             <Linkedin className="w-5 h-5" />
                          </a>
                          <a href="mailto:souhaghanem5@gmail.com?subject=Demande%20de%20collaboration&body=Bonjour,%20je%20veux%20discuter%20de%20votre%20projet." className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group hover:scale-110 hover:roate-6">
                             <Mail className="w-5 h-5" />
                          </a>
                       </div>
                    </div>
                  </div>
                  {/* Right Content */}
                  <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <div className="relative">
                        <div className="w-full max-w-lg mx-auto">
                            <div className="relative group">
                               <img src="/image/souha.jpeg" alt="" className="w-full rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105" />
                            </div>

                        </div>
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-600 rounded-2xl opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20"></div>
                    </div>

                  </div>
                </div>
            </div>

        </section>
    )
}
export default Hero;