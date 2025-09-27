import React, { useEffect, useState } from "react";
import Skills from "./Skills";
import { Award, Briefcase, Calendar, MapPin } from "lucide-react";

function Experience(){
    const [visibleItems,setVisibleItems]=useState([]);
    const [timelineVisible,setTimelineVisible]=useState(false);
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    if(entry.target.classList.contains("timeline-item")){
                        setTimelineVisible(true);
                    }else{
                        const index = parseInt(entry.target.dataset.index);
                        setVisibleItems((prev)=>[...new Set([...prev,index])]);
                    }
                }
            });
        },{threshold: 0.3})
        const timelineELement = document.querySelector(".timeline-item");
        const experienceItems = document.querySelectorAll(".experience-item")
        if(timelineELement) observer.observe(timelineELement);
        experienceItems.forEach((item) => observer.observe(item));
        return () => observer.disconnect();
    },[])
    const experience = [
        {
            company:"OCP Maintenance Solutions",
            position:"stagiaire",
            period:"Juillet 2024 – Août 2024",
            location:"Safi",
            description:"Application web de gestion des tâches pour les employés d’entreprise, facilitant l’attribution et le suivi des missions internes.Développée avec Laravel 10 & MySQL côté backend et React, JavaScript, CSS côté frontend pour une interface moderne et performante.",
            Skills:["React", "JavaScript", "CSS", "Laravel 10", "MySQL"],
        },
        {
            company:"Tasmim Web ",
            position:"stagiaire",
            period:"Juillet 2025 – Septembre 2025",
            location:"télétravail",
            description:"Plateforme web de gestion des demandes et offres de stages, permettant aux étudiants et aux entreprises de publier, consulter et gérer efficacement leurs opportunités.",
            Skills:["React", "JavaScript", "CSS","ASP.NET","SQL Server"],
        }
    ]
    return(
        <section id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
           </div>
           <div className="container mx-auto px-6 relative z-10">
              <div className="text-center mb-16">
                 <p className="text-green-400 font-semibold text-lg mb-4">Toutes les entreprises</p>
                 <h2 className="text-2xl md:text-5xl font-bold text-white mb-6">Mon expérience</h2>
                 <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto delay-300">parcours professionnel et l'expérience qui a façonné mon expertise</p>
              </div>
              <div className="max-w-5xl mx-auto">
                <div className="relative">
                    <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-700 rounded-full overflow-hidden">
                      <div className={`w-full bg-gradient-to-b from-green-500 via-green-400 to-green-300 rounded-full transition-all duration-2000 ease-out ${timelineVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"}`}>
                          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-green-300 to-transparent"></div>
                      </div>

                    </div>
                    {experience.map((exp,index)=>{
                        return( <div key={index} className={` experience-item relative flex flex-col md:items-center mb-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} transition-all duration-1000 ${visibleItems.includes(index) ? "opacity-100 translate-y-0":"opacity-0 translate-y-10"}`} data-index={index} style={{transitionDelay:`${(index * 300 + 800)}ms`,transform:visibleItems.includes(index) ? 'translateY(0)' : index % 2 === 0 ? "translateX(-50px) translateY(20px)" : "translateX(50px) translateY(20px)"}}>
                           <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900 shadow-lg z-10 ${visibleItems.includes(index) ? "scale-110" : "scale-0"}`} style={{transitionDelay:`${index * 300 + 1200}ms`}}>
                              <div className="absolute inset-0 bg-green-500 rounded-full"></div>
                              <div className="absolute inset-0 bg-green-400 rounded-full"></div>
                           </div>
                           <div className={`ml-0 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                              <div className={`bg-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700 hover:border-green-500 transition-all duration-500 transform hover:scale-105 hover:shadow-red-500/20 group`}>
                                <div className="flex items-center gap-3 mb-6 group-hover:transform group-hover:scale-105 transition-all duration-300">
                                   <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate-6">
                                      <Briefcase className="w-6 h-6 text-white"/>
                                   </div>
                                   <div>
                                     <h3 className="text-xl font-black text-white group-hover:text-green-400 transition-colors duration-300">{exp.company}</h3>
                                     <div className="flex items-center gap-2 text-green-400 text-sm">
                                        <Calendar className="w-4 h-4"/>
                                        {exp.period}
                                     </div>
                                   </div>
                                </div>
                                <div className="mb-4">
                                  <h4 className="text-lg font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">{exp.position}</h4>
                                  <div className="flex items-center gap-2 text-green-400 text-sm">
                                        <MapPin className="w-4 h-4"/>
                                        {exp.location}
                                   </div>
                                </div>
                                <div className="text-gray-300 mb-6 leading-relaxed group-hover:text-white transition-all duration-300">
                                  {exp.description}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {exp.Skills.map((Skill,Skillindex)=>{
                                        return(
                                            <span key={Skillindex} className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full transition-all duration-300 hover:bg-green-400" style={{animationDelay: `${index * 300 + Skillindex * 200 + 18000}ms`,}}>
                                              {Skill}
                                            </span>
                                        );
                                    })}
                                </div>
                              </div>
                           </div>
                        </div>
                        );
                    })}
                </div>
              </div>
           </div>
        </section>
    )
}
export default Experience;