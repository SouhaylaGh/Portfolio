import React,{useState,useEffect,useRef} from "react";
import emailjs from "emailjs-com";
import {Mail,Phone,MapPin,Github,Linkedin,Send } from "lucide-react";
import Swal from "sweetalert2";

function Contact(){
    const [isVisible,setIsVisible] = useState(false);
    useEffect(()=>{
        const observer= new IntersectionObserver(([entry]) => {
            if(entry.intersectionRatio){
                setIsVisible(true)
            }
            },
            {threshold:0.3}
         );
         const element = document.getElementById("contact");
         if(element) observer.observe(element);
         return () => observer.disconnect();
    },[]);
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wbe1qar",   // ⚡ Service ID
        "template_rppitns",  // ⚡ Template ID
        form.current,
        "lATVcnhDWv9xoU2qM"    // ⚡ Public key
      )
       .then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Message envoyé !",
          text: "Merci de m’avoir contactée, je vous répondrai bientôt.",
          confirmButtonColor: "#16a34a"
        });
        e.target.reset(); // ✅ vide les inputs
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Oups...",
          text: "Erreur lors de l’envoi du message.",
          footer: error.text
        });
      }
    );
   };
    return(
      <section id="contact" className="py-24 bg-slate-800 relative overflow-hidden">
          <div className="absolute inset-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-green-600/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-green-600/5 to-transparent"></div>
           </div>
           <div className="container mx-auto px-6 relative z-10">
              <div className={`text-center mb-16 transition-all duration-1000 ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <p className="text-green-400 font-semibold text-lg mb-4">Contactez-moi</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Collaborons sur vos projets</h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                   Vous avez un projet en tête ? J’adorerais en entendre parler. Discutons de la façon dont nous pouvons donner vie à vos idées.
                </p>

              </div>
              <div className="grid lg:grid-cols-2 gap-16">
              <div className={`space-y-8 transition-all duration-1000 ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                     Je suis constamment ouverte à de nouvelles opportunités et à des projets stimulants. 
                     N’hésitez pas à me contacter pour toute question ou collaboration potentielle, 
                     je m’engage à vous répondre dans les plus brefs délais.
                  </p>
                  <div className="space-y-4">
                     {[
                        {
                            icon:Mail,
                            title:"Email",
                            info:"souhaghanem5@gmail.com"
                        },
                        { icon:Phone, title: "Téléphone",info:"0772341692"},
                        {icon:MapPin, title:"Location",info:"Safi"},
                     ].map((contact,index)=>{
                        return(
                            <div key={index} className={`flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-300 border border-slate-700 hover:border-green-500 group cursor-pointer transform hover:scale-105 ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{animationDelay:`${index * 200 + 300}ms`}}>
                               <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-all duration-300 group-hover:rotate6">
                                   <contact.icon className="w-6 h-6 text-white"/>
                               </div>
                               <div>
                                 <p className="font-semibold text-white group-hover:text-gray-400 transition-all duration-300">{contact.title}</p>
                                 <p className="text-gray-300 group-hover:text-gray-200 transition-all duration-300">{contact.info}{" "}</p>
                               </div>
                            </div>
                        );
                     })
                     }
                  </div>
                   <div className={`pt-8 transition-all duration-1000 delay-900 ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                      <h4 className="text-lg font-semibold text-white mb-4">Suivez-moi</h4>
                      {/*<div className="flex gap-4">
                        {[{ Icon: Github, url: "https://github.com/tonprofil" },{ Icon: Linkedin, url: "https://linkedin.com/in/tonprofil" }].map((item,index)=>{
                            return (
                              <a className={`w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 group border border-slate-700 hover:border-green-500 hover:scale-110 hover:rotate-6"`}>
                                 <Icon className="w-5 h-5"/>
                              </a>
                            );
                        })}
                      </div>*/}
                      <div className="flex gap-4">
                         {[
                            { Icon: Github, url: "https://github.com/SouhaylaGh" },
                            { Icon: Linkedin, url: "https://www.linkedin.com/in/souhayla-ghanem-28791b306/" }
                          ].map((item, index) => {
                            const { Icon, url } = item;
                            return (
                              <a
                                 key={index}
                                 href={url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center 
                                      hover:bg-green-600 hover:text-white transition-all duration-300 group 
                                      border border-slate-700 hover:border-green-500 hover:scale-110 hover:rotate-6"
                                >
                                 <Icon className="w-5 h-5"/>
                               </a>
                            );
                       })}
                  </div>

                   </div>
              </div>
              <div className={`transition-all duration-1000 delay-300 ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                 <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                     <h3 className="text-2xl font-bold text-white mb-6">Envoyer un message</h3>
                     <form ref={form} onSubmit={sendEmail} >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="group">
                               <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">Nom complet</label>
                               <input type="text" id="name" name="user_name"  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50" placeholder="Your name"  required/>
                            </div>
                           <div className="group">
                               <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">Email</label>
                               <input type="email" id="name" name="user_email" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50" placeholder="Email"  required/>
                           </div>

                        </div>
                        <div className="group mt-5">
                          <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">Sujet</label>
                          <input type="text" id="name" name="subject" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50" placeholder="Project discussion"  required/>
                        </div>
                         <div className="group mt-5">
                          <label className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-green-400 transition-all duration-300">Message</label>
                          <textarea type="text" id="name" name="message" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder:gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:border-green-500/50 resize-none" placeholder="tell me about your project"  required/>
                        </div>
                        <button type="submit" className="mt-5 w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 group">
                            Envoyer un message<Send className="w-5 h-5 transition-all group-hover:translate-x-1 group-hover:translate-y-1" />
                        </button>
                     </form>
                  </div>
              </div>
              </div>
           </div>
      </section>
    );

}
export default Contact;