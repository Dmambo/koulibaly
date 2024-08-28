"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";
import emailjs from 'emailjs-com';

const SecondSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        projectScope: "",
        preferredDate: "",
        preferredTime: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
        .send(
          'service_r4qauao',
          'template_t7bp7yp',
          formData,
          'qfKYZS8k3qOWMhcIm'
        )
        .then(
            (result) => {
                alert('Votre message a été envoyé avec succès. Nous vous répondrons sous peu.');
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    serviceType: "",
                    projectScope: "",
                    preferredDate: "",
                    preferredTime: "",
                });
            },
            error => {
                alert("Une erreur s'est produite, veuillez réessayer");
            }
        )
    };
  return (
    <div className="bg-white p-10 text-black max-w-xl mx-auto shadow-lg rounded-lg text-left">
      <h2 className="text-3xl font-semibold mb-6 ">Demander un devis</h2>
      <p className="text-sm text-gray-500 my-4 leading-1">
        Nous sommes fiers de tout ce que nous faisons, en veillant à ce que nos clients reçoivent le meilleur service en solutions solaires et électriques.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-5">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            placeholder="Votre nom"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            placeholder="Votre email"
          />
        </div>
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Numéro de téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
            placeholder="+224 Votre numéro de téléphone"
          />
        </div>
        <div className="mb-4">
            <label htmlFor="serviceType" className="block text-sm font-medium mb-2">Type de service</label>
            <select
              id="serviceType"
              name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="" disabled selected>Choisissez un service</option>
              <option value="solar">Installation de panneaux solaires</option>
              <option value="electrical">Installation de systèmes électriques</option>
              <option value="maintenance">Maintenance et réparations</option>
              <option value="consultation">Consultation et conception</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="projectScope" className="block text-sm font-medium mb-2">Portée du projet</label>
            <textarea
              id="projectScope"
              name="projectScope"
                value={formData.projectScope}
                onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Décrivez les besoins de votre projet (par exemple, résidentiel, commercial, taille, emplacement)"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="preferredDate" className="block text-sm font-medium mb-2">Date préférée</label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

            <div className="mb-4">
                <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">Heure préférée</label>
                <input
                type="time"
                id="preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                </div>

        <div className="text-center">
          <Button type="submit" className=" text-white px-6 py-3 rounded-lg hover:bg-green-500 hover:text-white hover:border-white transition-colors duration-300">
            Envoyer
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SecondSection;
