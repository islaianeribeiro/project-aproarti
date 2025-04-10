"use client";
import React, { useState } from "react";
import Details from "../ui/Details";
import Button from "../ui/Button";
import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import CustomTextarea from "./CustomTextarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "", // Novo campo para o select
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Exibe os dados, incluindo o "subject" selecionado
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value, // Atualiza o valor do subject selecionado
    });
  };

  const subjectOptions = [
    { label: "Selecione seu assunto", value: "", disabled: true },
    { label: "Quero Colaborar", value: "colaborar" },
    { label: "Sou Artesão", value: "artesao" },
    { label: "Patrocínio", value: "patrocinio" },
    { label: "Outros", value: "outros" },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <Details />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-teste mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 text-lg">
            Tem interesse em colaborar com a associação?
          </p>
          <p className="text-gray-600">
            Seja você artesão, apoiador ou patrocinador, será um prazer
            conversar com você.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-b from-marfim to-white rounded-lg shadow-lg p-8 mx-80"
        >
          <CustomInput
            id="name"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
          />
          <CustomInput
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />

          <CustomSelect
            value={formData.subject}
            onChange={handleSelectChange}
            options={subjectOptions}
          />
          <CustomTextarea
            id="message"
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
          />
          <Button
            type="submit"
            text="Enviar mensagem"
            className="w-50 items-center mx-70 bg-azul text-white py-3 rounded-lg hover:bg-blue-950 transition-colors duration-200"
          />
        </form>
        <p className="text-center text-azul mt-8 text-lg">
          Estamos sempre abertos a novas ideias, parcerias e trocas culturais.
          Sua mensagem é muito bem-vinda!
        </p>
      </div>
    </section>
  );
};

export default Contact;
