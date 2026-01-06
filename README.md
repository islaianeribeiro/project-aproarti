# 🎨 Associação de Artesanato Local — Site Institucional

Site institucional desenvolvido para **fortalecer a presença digital de uma associação de artesanato local**, com foco em **acessibilidade, identidade cultural e organização de conteúdo**.
O projeto aplica boas práticas de desenvolvimento front-end em um contexto real, conectando tecnologia e valorização do trabalho artesanal.

<div align="center">
  <img src="./public/screenshot-home.png" alt="Tela inicial do site." width="100%"/>
  <img src="./public/screenshot-about.png" alt="Seção sobre a associação." width="100%"/>
  <img src="./public/screenshot-products.png" alt="Galeria de produtos artesanais." width="100%"/>
  <img src="./public/screenshot-contact.png" alt="Tela de contato com formulário funcional." width="100%"/>
</div>

---

## 🚀 Tecnologias Utilizadas

### Front-end

* **Next.js** — Framework React com foco em performance, SEO e organização de rotas.
* **React.js** — Construção de interfaces componentizadas e reutilizáveis.
* **TypeScript** — Tipagem estática para maior segurança e manutenção do código.
* **Tailwind CSS** — Estilização utilitária com foco em responsividade.
* **PostCSS** — Processamento de estilos integrado ao Tailwind CSS.
* **Lucide React** — Biblioteca de ícones leve e personalizável.
* **@headlessui/react** — Componentes acessíveis e sem estilo, integrados ao Tailwind.

### Integrações

* **EmailJS** — Envio de mensagens diretamente pelo front-end, sem necessidade de backend.

---

## 📌 Funcionalidades Principais

### Home

* Apresentação da associação e sua missão cultural.

### Sobre

* História, comunidades atendidas e objetivos da associação.

### Produtos

* Galeria de produtos artesanais com descrições informativas (sem fins comerciais).

### Contato

* Formulário funcional para comunicação com colaboradores, artesãos e apoiadores.

### Interface e Navegação

* Navegação clara entre seções.
* Layout totalmente responsivo.
* Footer com informações de contato e redes sociais.

---

## 🧠 Destaques Técnicos

* Estruturação do projeto utilizando o **App Router do Next.js**.
* Componentização por domínio (`About`, `Products`, `Contact`, etc.), facilitando manutenção e escalabilidade.
* Uso de **dados via JSON** para exibição dos produtos.
* Integração com **EmailJS** para envio de mensagens sem dependência de backend.
* Organização de código seguindo boas práticas de front-end.

---

## ♿ Acessibilidade

O projeto foi desenvolvido considerando boas práticas de acessibilidade, incluindo:

* Uso de componentes acessíveis com **Headless UI**.
* Estrutura semântica adequada.
* Layout responsivo e legível em diferentes dispositivos.
* Navegação simples e intuitiva.

---

## 🗂️ Organização do Código

```
📁 public                        # Imagens e arquivos públicos
📁 src
├─ 📁 app                        # Rotas e páginas (Next.js App Router)
├─ 📁 components                 # Componentes reutilizáveis
│  ├─ 📁 About                   # Seção "Sobre"
│  ├─ 📁 Contact                 # Formulário de contato
│  ├─ 📁 Footer                  # Rodapé
│  ├─ 📁 Hero                    # Seção principal
│  ├─ 📁 NavBar                  # Navegação
│  ├─ 📁 Products                # Exibição dos produtos
│  └─ 📁 ui                      # Componentes visuais reutilizáveis
├─ 📁 data
│  └─ 📄 products.json           # Dados dos produtos artesanais
```

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

* Node.js instalado

### Passo a passo

```bash
# Clone o repositório
git clone https://github.com/islaianeribeiro/project-aproarti.git

# Acesse a pasta
cd project-aproarti

# Instale as dependências
npm install
```

### Configuração do EmailJS

Crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

### Rodando o projeto

```bash
npm run dev
```

Acesse em:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📌 Status do Projeto

* ✔️ Versão funcional concluída
* 🔧 Possíveis evoluções futuras:

  * Integração com API real
  * Área administrativa
  * Sistema de agendamento ou contato avançado

---

## 👩‍💻 Desenvolvido por

**Islaiane Ribeiro**
Front-End Developer

🔗 [https://www.linkedin.com/in/islaianeribeiro](https://www.linkedin.com/in/islaianeribeiro)

---

## 📝 Licença

MIT © 2025 — Sinta-se à vontade para usar como base para seus próprios projetos.
