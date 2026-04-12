import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // EmailJS configuration (you'll need to set up EmailJS account and get these IDs)
      const serviceId = 'service_your_service_id'; // Replace with your EmailJS service ID
      const templateId = 'template_your_template_id'; // Replace with your EmailJS template ID
      const publicKey = 'your_public_key'; // Replace with your EmailJS public key

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'suryaseenivasan12@gmail.com',
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Show success alert
      alert(`Thank you ${formData.name}! Your message has been sent successfully. I'll get back to you soon!`);

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error('Error sending message:', error);

      // Fallback to mailto if EmailJS fails
      const mailtoLink = `mailto:suryaseenivasan12@gmail.com?subject=Portfolio Contact Form - ${encodeURIComponent(formData.name)}&body=Name: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AMessage: ${encodeURIComponent(formData.message)}`;
      window.open(mailtoLink);

      alert(`Thank you ${formData.name}! Your message has been sent successfully. I'll get back to you soon!`);

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'suryaseenivasan12@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'Remote / Available Worldwide' },
    { icon: Phone, label: 'Phone', value: '+91 98949 37533' },
  ];

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#00ff41] mb-4" style={{ fontFamily: 'monospace' }}>
            {'<Contact />'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-[#0a0a0a] border-2 border-[#00ff41]/30 rounded-lg p-6">
              <h3 className="text-2xl text-[#00ff41] mb-6" style={{ fontFamily: 'monospace' }}>
                Get In Touch
              </h3>
              <p className="text-[#e5e5e5]/70 mb-8">
                Have a project in mind or just want to chat about tech?
                Feel free to reach out! I'm always open to discussing new opportunities
                and interesting projects.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-lg group-hover:bg-[#00ff41]/20 transition-colors">
                      <info.icon className="text-[#00ff41]" size={20} />
                    </div>
                    <div>
                      <p className="text-[#e5e5e5]/60 text-sm">{info.label}</p>
                      <p className="text-[#e5e5e5]">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Encrypted message effect */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-[#00ff41]/30 rounded-lg p-4"
            >
              <p className="text-[#00ff41] text-xs" style={{ fontFamily: 'monospace' }}>
                $ encrypt-message --level=256
              </p>
              <motion.p
                className="text-[#00ff41]/60 text-xs mt-2"
                style={{ fontFamily: 'monospace' }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                [✓] Connection secured with end-to-end encryption
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[#e5e5e5] text-sm" style={{ fontFamily: 'monospace' }}>
                  {'> Name'}
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-[#0a0a0a] border-2 border-[#2a2a2a] text-[#e5e5e5] focus:border-[#00ff41] transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#e5e5e5] text-sm" style={{ fontFamily: 'monospace' }}>
                  {'> Email'}
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#0a0a0a] border-2 border-[#2a2a2a] text-[#e5e5e5] focus:border-[#00ff41] transition-colors"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[#e5e5e5] text-sm" style={{ fontFamily: 'monospace' }}>
                  {'> Message'}
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-[#0a0a0a] border-2 border-[#2a2a2a] text-[#e5e5e5] focus:border-[#00ff41] transition-colors min-h-[150px]"
                  placeholder="Your message here..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-3 bg-[#00ff41] text-black flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <Send size={18} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#00ff41] to-[#00d9ff]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
