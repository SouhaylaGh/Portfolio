import React, { useState ,useEffect} from "react";
import {Github} from "lucide-react";

function Projects(){
    const [isVisible,setIsVisible] = useState(false);
    useEffect(()=>{
        const observer= new IntersectionObserver(([entry]) => {
            if(entry.intersectionRatio){
                setIsVisible(true)
            }
        },
        {threshold:0.3}
     );
     const element = document.getElementById("projects");
     if(element) observer.observe(element);
     return () => observer.disconnect();
    },[]);
    const projects = [
        {
            id:1,
            title:"Application web pour la colocation et le logement étudiant",
            description:"notre mini-projet vise à concevoir une application web innovante facilitant la recherche de logements et de colocations pour les étudiants. ",
            image:"/image/Capture-1.png",
            technologies:["React","C#","ASP.NET", "SQL Server"],
            category:"Full Stack",
            featured:true,
            ref:"https://github.com/SouhaylaGh/projet--logement-tudiant-documentation"
        },
        {
            id:2,
            title:"Système de prédiction médicale basé sur les symptômes",
            description:"une application de prédiction des maladies qui combine intelligence artificielle et développement web. ",
            image:"/image/Capture2.png",
            technologies:["ReactJs","Node.js","Express.js","MongoDB","Flask","Python"],
            category:"Full Stack",
            featured:true,
            ref:"https://github.com/SouhaylaGh/projet-Syst-me-de-pr-diction-m-dicale-bas-sur-les-sympt-mes-documentation?tab=readme-ov-file"
        },
        {
            id:3,
            title:"Site Web de Vente de Jeux en Ligne",
            description:"Nous avons développé un site web interactif et dynamique axé sur la vente de jeux installables en utilisant des technologies telles que CSS, HTML, JavaScript et PHP",
            image:"/image/Capture3.png",
            technologies:["Html", "CSS", "JS", "Php", "MySQL"],
            category:"Full Stack",
            featured:true,
        }
    ]
    return(
        <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
             <div className="absolute inset-0">
                 <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                 <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
              </div>
              <div className="container mx-auto px-6 relative z-10">
                 <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} `}>
                    <p className="text-green-400 font-semibold text-lg mb-4">Protfolio</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projets remarquables</h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Voici quelques-uns de mes projets récents qui mettent en valeur mes compétences et mon expertise.
                    </p>
                 </div>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                     {projects.map((project,index)=>{
                         return(
                            <div className={`group bg-slate-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-1000 delay-600 overflow-hidden border border-slate-700 hover:border-green-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}style={{transitionDelay: `${(index + 3)* 150} ms`}}>
                                <div className="relative overflow-hidden">
                                   <img src={project.image} alt={project.title} className="w-full h-70 object-cover group-hover:scale-105 transition-all duration-300"/>
                                   <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                      <a href={project.ref}>
                                         <button className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all duration-300">
                                             <Github className="w-4 h-4 text-gray-700"/>
                                          </button>
                                       </a>
                                   </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-3">
                                         <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded-full text-xs font-medium">{project.category}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-all duration-300">{project.title}</h4>
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}...</p>
                                    <div className="flex flex-wrap gap-1 mb-4">
                                        {project.technologies.map((tech,techindex) => {
                                            return <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-medium">{tech}</span>;
                                        })}
                                    </div>
                                </div>
                            </div>
                         );
                     })}
                 </div>
                 {/*<div className={`text-center transition-all duration-1000 delay-1000 mt-5`}>
                    <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105">
                        View All Projects
                    </button>
                 </div>*/}
              </div>
        </section>
    );
}
export default Projects;