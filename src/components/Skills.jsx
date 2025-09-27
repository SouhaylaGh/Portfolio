import React ,{useEffect, useState}from "react";

function Skills() {

    const [isVisible,setIsVisible] = useState(false);
    const [animatedSkills,setAnimatedSkills]=useState({});

    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setIsVisible(true);
                skills.forEach((skill,index)=>{
                    setTimeout(()=>{
                        setAnimatedSkills((prev)=>({
                            ...prev,[skill.name]:skill.level,
                        }));
                    }, index * 200);
                },{threshold:0.3});
            }
        });
        const element = document.getElementById("skills");
        if(element) observer.observe(element);
        return () => observer.disconnect();
    },[]);
    const skills=[
        {name:"JavaScript ,Python, C#",level:70},
        {name:"React, React Native,CSS, Tailwind CSS,Material UI",level:80},
        {name:"Node.js, Express.js, Flask, Laravel, ASP.NET",level:90},
        {name:"MySQL, SQL Server, NoSQL : MongoDB",level:90},
        {name:"TensorFlow, Scikit-learn, Pandas, NumPy, Matplotlib",level:85},
        {name:"GitHub, Postman",level:75},
    ];
    const education = [
        {
            year:"Depuis septembre 2023",
            title:"Cycle d'ingénieur",
            institution:" École Nationale des Sciences Appliquées Safi"
        },
        {
            year:"2022-2023",
            title:"Cycle Préparatoire",
            institution:"Koutoubia Prépas Marrakech"
        },
        {
            year:"2019-2020 ",
            title:"Baccalauréat en Sciences Mathématiques",
            institution:"Sidi Ahmed Bennacer Zagora"
        },
    ]
    return(
       <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
           <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
               <div className="grid lg:grid-cols-2 gap-16">
                   <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                      <div className="mb-12">
                         <p className="text-green-400 font-semibold text-lg mb-4">Qualification</p>
                         <p className="text-green-400 text-4xl font-bold mb-8">Formation</p>
                      </div>
                      <div className="space-y-8">
                         {education.map((edu,index)=>{
                            return(
                             <div key={index} className={`border-l-2 border-green-500 pl-6 relative group transition-all duration-1000  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                                <div className="text-green-400 text-sm font-semibold mb-2 group-hover:text-gren-300 transition-all duration-300">{edu.year}</div>
                                <h3 className="text-xl font-black text-white mb-2 group-hover:text-green-400 transition-all duration-300">{edu.title}</h3>
                                <p className="text-gray-400 mb-2 group-hover:text-gray-300 transition-all duration-300">{edu.institution}</p>
                             </div>
                            );
                         })}
                      </div>
                   </div>
                   <div className={`transition-all duration-1000 delay-300  ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
                      <div className="mb-12">
                          <p className="text-green-400 font-semibold text-lg mb-4">Expert</p>
                          <p className="text-4xl font-bold text-white mb-8">Mes compétences</p>
                      </div>
                      <div className="space-y-6">
                          {skills.map((skill,index)=>{
                            return(
                               <div key={index} className={`space-y-2 transition-all duration-1000 `} style={{transitionDelay: `${index * 150}ms`}}>
                                 <div className="flex justify-between items-center">
                                    <span className="text-white font-medium group-hover:text-green-400 transition-all duration-300">{skill.name}</span>
                                    <span className="text-green-400 font-semibold">{skill.level}%</span>
                                 </div>
                                 <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                                    <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all duration-1500 ease-out relative" style={{width: `${animatedSkills[skill.name] || 0}%`}}>
                                        <div className="absolute inset-0 bg-white/20"></div>
                                    </div>
                                    
                                    
                                 </div>
                               </div>
                            );
                          })}
                      </div>
                   </div>
               </div>
            </div>
       </section>
    );
}
export default Skills;