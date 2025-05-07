import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>('idle');
  const [result, setResult] = useState<string>('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending....');

    const formDataObj = new FormData(e.target as HTMLFormElement);

    // Accessing the environment variable with VITE_ prefix in Vite
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      formDataObj.append("access_key", accessKey);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataObj
        });

        const data = await response.json();

        if (data.success) {
          setSubmitStatus('success');
          setResult('Form Submitted Successfully');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setSubmitStatus('error');
          setResult(data.message);
        }
      } catch (error) {
        setSubmitStatus('error');
        setResult('Oops! Something went wrong. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setSubmitStatus('error');
      setResult('API key is missing. Please check your configuration.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-black/80 py-20 border-t border-green-500/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-green-400 text-glow">
            Get in Touch
          </h2>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-center gap-4 p-6 rounded-lg bg-black/90 border border-green-500/30">
              <Mail className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-green-400">Email</h3>
                <p className="text-green-400/70">dimalmaloku@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-black/90 border border-green-500/30">
              <Phone className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-green-400">Phone</h3>
                <p className="text-green-400/70">+383 45 439 223</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 rounded-lg bg-black/90 border border-green-500/30">
              <MapPin className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-green-400">Location</h3>
                <p className="text-green-400/70">Pristina, Kosovo</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/90 border border-green-500/30 rounded-lg p-8">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-green-500/30 rounded-lg px-4 py-2 text-green-400 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-green-500/30 rounded-lg px-4 py-2 text-green-400 focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-green-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-green-500/30 rounded-lg px-4 py-2 text-green-400 focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-black border border-green-500/30 rounded-lg px-4 py-2 text-green-400 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="text-center text-green-400 mt-4">
                  {result}
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-center text-red-400 mt-4">
                  {result}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
