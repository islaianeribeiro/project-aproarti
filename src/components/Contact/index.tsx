"use client";
import emailjs from "emailjs-com";
import { useState } from "react";
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

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({ type: null, text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )
      .then(
        (result) => {
          console.log("Mensagem enviada com sucesso:", result.text);

          setStatusMessage({
            type: "success",
            text: "Sua mensagem foi enviada com sucesso!",
          });

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => {
            setStatusMessage({ type: null, text: "" });
          }, 5000);
        },
        (error) => {
          console.error("Erro ao enviar a mensagem:", error.text);

          setStatusMessage({
            type: "error",
            text: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
          });

          setTimeout(() => {
            setStatusMessage({ type: null, text: "" });
          }, 5000);
        }
      );
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
      subject: value,
    });
  };

  const subjectOptions = [
    { label: "Selecione seu assunto", value: "", disabled: true },
    { label: "Quero Colaborar", value: "Quero Colaborar" },
    { label: "Sou Artesão", value: "Sou Artesão" },
    { label: "Patrocínio", value: "Patrocínio" },
    { label: "Outros", value: "Outros" },
  ];

  return (
    <section id="contact" className="py-20 bg-white relative">
      <Details />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-verde mb-4 z-10">
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
          className="bg-gradient-to-b from-marfim to-neutral-0 rounded-lg shadow-lg p-8 mx-0 md:mx-20 lg:mx-28 xl:mx-65"
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
          <div className="flex justify-center">
            <Button
              type="submit"
              text="Enviar mensagem"
              className="w-50 items-center bg-azul text-white py-3 rounded-lg hover:bg-blue-950 transition-colors duration-200"
            />
          </div>
        </form>

        {statusMessage.type && (
          <div
            className={`mt-4 flex justify-center text-center py-3 px-4 rounded-lg font-medium transition-opacity duration-500 z-10 ${
              statusMessage.type === "success"
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <p className="text-center text-azul mt-8 text-lg z-10">
          Estamos sempre abertos a novas ideias, parcerias e trocas culturais.
          Sua mensagem é muito bem-vinda!
        </p>
      </div>
    </section>
  );
};

export default Contact;
