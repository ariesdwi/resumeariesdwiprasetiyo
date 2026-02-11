import { personalInfo } from '@/lib/data'

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Get form data
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }
    
    console.log('Form data:', data)
    alert('Thank you for your message! I will get back to you soon.')
    
    // Reset form
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Get In Touch</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm uppercase tracking-wide">
          Let's Discuss Your Mobile Development Needs
        </p>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="border border-gray-200 rounded-sm p-6 bg-white">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 text-sm">📞</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 text-sm">✉️</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 border border-gray-200 rounded-sm hover:border-gray-300 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-600 text-sm">💼</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">LinkedIn</p>
                    <a 
                      href={`https://${personalInfo.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">Services Offered</h4>
                <ul className="space-y-2">
                  {[
                    'Custom iOS App Development',
                    'Mobile App Architecture & Optimization',
                    'Code Review & Technical Consultation',
                    'Team Mentoring & Best Practices',
                    'Performance Tuning & Debugging',
                    'Flutter Cross-Platform Development'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-3 py-1">
                      <div className="w-4 h-4 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response Time */}
              <div className="mt-6 p-3 border border-gray-200 rounded-sm bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-gray-600 text-xs">⏱</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-xs">Quick Response</p>
                    <p className="text-gray-600 text-xs">Typically within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="border border-gray-200 rounded-sm p-6 bg-white">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b border-gray-200 pb-2">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-gray-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="ios-development">iOS App Development</option>
                    <option value="flutter-development">Flutter Development</option>
                    <option value="code-review">Code Review & Consultation</option>
                    <option value="mentoring">Team Mentoring</option>
                    <option value="optimization">Performance Optimization</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:border-gray-500 focus:outline-none transition-colors"
                    placeholder="Describe your project requirements, timeline, and goals..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-sm hover:bg-gray-800 transition-colors font-medium text-sm uppercase tracking-wide"
                >
                  Send Message
                </button>

                <p className="text-center text-gray-500 text-xs">
                  I typically respond within 24 hours
                </p>
              </form>
            </div>
          </div>

          {/* Direct Contact Options */}
          <div className="mt-12 border border-gray-200 rounded-sm p-8 bg-gray-50">
            <h3 className="text-xl font-semibold text-center mb-6 text-gray-900">Direct Contact Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="border border-gray-300 rounded-sm p-4 text-center hover:border-gray-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">✉️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Email Directly</h4>
                <p className="text-gray-600 text-xs">For detailed project discussions</p>
              </a>
              
              <a 
                href={`https://${personalInfo.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-gray-300 rounded-sm p-4 text-center hover:border-gray-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-lg">💼</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">LinkedIn</h4>
                <p className="text-gray-600 text-xs">Connect for professional networking</p>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Why Work With Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-sm">⚡</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Proven Performance</h4>
                <p className="text-gray-600 text-xs">60% performance improvements in production apps</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-sm">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Zero Crash Rate</h4>
                <p className="text-gray-600 text-xs">Exceptional app stability and reliability</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-gray-600 text-sm">👥</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Team Leadership</h4>
                <p className="text-gray-600 text-xs">Mentored 3+ iOS development teams</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}