import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageSquare,
  Paperclip,
  CheckCircle,
  Sparkles,
  Globe,
  Clock,
  User,
  Target,
  Phone,
  Zap,
} from "lucide-react";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const messageLength = watch("message")?.length || 0;

  const onSubmit = async (data) => {
    try {
      await axios.post("https://formspree.io/f/mvzzzbgj", data, {
        headers: { Accept: "application/json" },
      });

      setIsSubmitted(true);
      reset();

      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (err) {
      console.error("Form error:", err);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 text-sm font-semibold rounded-full mb-6 border border-blue-500/20">
            <MessageSquare className="h-4 w-4" />
            <span>GET IN TOUCH</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Work Together
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT SIDE — CONTACT INFO + SOCIAL */}
          <div className="space-y-8">
            {/* Contact Information Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 shadow-2xl h-full">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/20">
                  <User className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Details</h3>
                  <p className="text-gray-400">Direct ways to reach me</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="group flex items-start space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-3 bg-gradient-to-r from-blue-900/20 to-blue-900/10 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Email Address</h4>
                    <p className="text-gray-400 text-sm mb-2">For project inquiries and collaborations</p>
                    <a 
                      href="mailto:priyanshukumari93933@gmail.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm inline-flex items-center group/link"
                    >
                      priyanshukumari93933@gmail.com
                      <Send className="h-3 w-3 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="group flex items-start space-x-4 p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-3 bg-gradient-to-r from-purple-900/20 to-purple-900/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">Location</h4>
                    <p className="text-gray-400 text-sm mb-2">Based in Gurugram, Haryana</p>
                    <div className="text-gray-300 text-sm">India 🇮🇳</div>
                    <div className="mt-2 inline-flex items-center px-3 py-1 bg-purple-900/20 text-purple-300 text-xs rounded-full border border-purple-500/20">
                      <Globe className="h-3 w-3 mr-1" />
                      Open to remote work
                    </div>
                  </div>
                </div>


                
             
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
                  <Globe className="h-7 w-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Connect Online</h3>
                  <p className="text-gray-400">Follow my work and connect professionally</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/Priyanshu-89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Github className="h-7 w-7 text-gray-400 group-hover:text-white" />
                  </div>
                  <div className="text-white font-medium mb-1">GitHub</div>
                  <div className="text-gray-500 text-sm">@Priyanshu-89</div>
                  <div className="mt-3 text-blue-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    View Projects →
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/priyanshu-kumari93933/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-900/20 to-blue-900/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="h-7 w-7 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <div className="text-white font-medium mb-1">LinkedIn</div>
                  <div className="text-gray-500 text-sm">/priyanshu-kumari93933</div>
                  <div className="mt-3 text-blue-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    Connect →
                  </div>
                </a>
              </div>

       
            </div>
                </div>
              </div>
        

         
          
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="h-full">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 shadow-2xl h-full flex flex-col">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/20">
                  <Send className="h-7 w-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                  <p className="text-gray-400">Fill out the form below and I'll get back to you soon</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="flex-1 flex flex-col items-center justify-center py-12">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-xl opacity-20"></div>
                    <CheckCircle className="relative h-20 w-20 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                  <p className="text-gray-400 text-center mb-6 max-w-md">
                    Thank you for reaching out. I've received your message and will respond within 24 hours.
                  </p>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-900/20 text-emerald-300 rounded-lg border border-emerald-500/20">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm">Expect a quick response</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <label className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          Your Name
                        </label>
                      </div>
                      <input
                        {...register("name", { required: true })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      />
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <label className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          Email Address
                        </label>
                      </div>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-xl focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <label className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        Subject
                      </label>
                    </div>
                    <input
                      {...register("subject", { required: true })}
                      placeholder="Project Inquiry / Job Opportunity"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-xl focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="group flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <label className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          Your Message
                        </label>
                      </div>
                      <span className="text-xs text-gray-500">{messageLength}/1000</span>
                    </div>
                    <textarea
                      {...register("message", { 
                        required: true,
                        maxLength: 1000 
                      })}
                      rows="6"
                      placeholder="Tell me about your project, timeline, budget, or any specific requirements..."
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-xl focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 resize-none flex-1"
                    />
                    <div className="flex items-center space-x-2 mt-2 text-gray-500 text-sm">
                      <Paperclip className="h-4 w-4" />
                      <span>For detailed proposals, you can also email directly</span>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-700/50">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="relative z-10 flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <div className="mt-4 text-center">
                      <p className="text-gray-500 text-sm">
                        By submitting, you agree to receive a response from me regarding your inquiry.
                      </p>
                    </div>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

    
      </div>
    </section>
  );
};

export default Contact;