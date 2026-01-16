import { useState } from 'react';
import { Mail,  MapPin, Send, Linkedin, Github, MessageSquare, Paperclip, CheckCircle, Sparkles, Globe, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-900/30 to-purple-900/30 text-blue-400 text-sm font-semibold rounded-full mb-4 border border-blue-500/20">
            <MessageSquare className="h-4 w-4" />
            <span>GET IN TOUCH</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/20">
                  <Mail className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                  <p className="text-gray-400">Ways to reach me</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-blue-900/20 to-blue-900/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-400 text-sm">priyanshukumari93933@gmail.com</p>
                    <a 
                      href="mailto:priyanshu@gmail.com"
                      className="text-blue-400 text-xs hover:text-blue-300 transition-colors"
                    >
                      Click to send email
                    </a>
                  </div>
                </div>

              

                <div className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                  <div className="p-3 bg-gradient-to-r from-purple-900/20 to-purple-900/10 rounded-lg group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-400 text-sm">Gurugram, Haryana, India</p>
                    <p className="text-gray-500 text-xs">Open to remote opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/20">
                  <Globe className="h-7 w-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Connect Online</h3>
                  <p className="text-gray-400">Find me on social platforms</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/Priyanshu-89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                    <Github className="h-6 w-6 text-gray-400 group-hover:text-white" />
                  </div>
                  <div className="text-white font-medium">GitHub</div>
                  <div className="text-gray-500 text-xs">@Priyanshu-89</div>
                </a>

                <a 
                  href="https://www.linkedin.com/in/priyanshu-kumari93933/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-900/20 to-blue-900/10 rounded-lg mb-3 group-hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                  </div>
                  <div className="text-white font-medium">LinkedIn</div>
                  <div className="text-gray-500 text-xs">/priyanshu-kumari93933</div>
                </a>
              </div>

              {/* Availability Status */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Available for opportunities</span>
                  </div>
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-xl border border-emerald-500/20">
                  <Send className="h-7 w-7 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send Your Message</h3>
                  <p className="text-gray-400">I typically respond within 24 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-900/30 to-teal-900/30 rounded-full mb-6">
                    <CheckCircle className="h-10 w-10 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-lg">
                    <Sparkles className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">Expect a response within 24 hours</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="group">
                      <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                      placeholder="Project Inquiry or Job Opportunity"
                      required
                    />
                  </div>
                  
                  <div className="group">
                    <label className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-white transition-colors">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 text-white rounded-xl focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                      required
                    ></textarea>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Paperclip className="h-4 w-4" />
                        <span>You can also email me directly</span>
                      </div>
                      <span className="text-gray-500 text-sm">{formData.message.length}/1000</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <div className="text-sm text-gray-500">
                      <span className="text-emerald-400">✓</span> All fields are required
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="relative z-10 flex items-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
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