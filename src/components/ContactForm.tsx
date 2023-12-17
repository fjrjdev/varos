import { useState } from "react";
import TailwindButton from "../styles/button";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        phone: '',
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await fetch('https://varos.com/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Resposta da API:', data);
        } catch (error) {
            console.error('Erro ao enviar dados para a API:', error, formData);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col bg-[#131516] rounded-[32px] border border-[#4D5358] p-10 gap-6">
                <input autoComplete="given-name" className="bg-[#222729] p-4 border border-[#4D5358] rounded-sm text-white" placeholder="Nome" type="text" name="nome" value={formData.nome} onChange={handleChange} />
                <input autoComplete="email" className="bg-[#222729] p-4 border border-[#4D5358] rounded-sm text-white" placeholder="Seu melhor email" type="email" name="email" value={formData.email} onChange={handleChange} />
                <input autoComplete="tel" className="bg-[#222729] p-4 border border-[#4D5358] rounded-sm text-white" placeholder="Celular" name="phone" type="text" value={formData.phone} onChange={handleChange} />
                <TailwindButton type="submit" buttonStyle='green' buttonSize='large'>QUERO ME INSCREVER</TailwindButton>
            </form>
        </>
    );
};

export default ContactForm