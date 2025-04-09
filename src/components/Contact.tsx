"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    select: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600">
            Tem interesse em colaborar com a associação? Seja você artesão,
            apoiador ou patrocinador, será um prazer conversar com você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-navy-900 mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-navy-900 mr-4" size={24} />
                  <span>Icó, Ceará</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-navy-900 mr-4" size={24} />
                  <span>contato@aproati.org.br</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-navy-900 mr-4" size={24} />
                  <span>(88) 9999-9999</span>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="mb-6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900"
                required
              />
            </div>
            <div className="mb-6">
              <select
                id="select"
                name="select"
                defaultValue=""
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900"
              >
                <option value="" disabled className="text-gray-400">
                  Selecione seu assunto
                </option>
                <option value="colaborar">Quero Colaborar</option>
                <option value="artesao">Sou Artesão</option>
                <option value="patrocinio">Patrocínio</option>
                <option value="outros">Outros</option>
              </select>
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-navy-900 text-black py-3 rounded-lg hover:bg-navy-800 transition-colors duration-200"
            >
              Enviar Mensagem
            </button>
          </form>
          <p className="text-center text-gray-500 mt-8">
            Estamos sempre abertos a novas ideias, parcerias e trocas culturais.
            Sua mensagem é muito bem-vinda!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
