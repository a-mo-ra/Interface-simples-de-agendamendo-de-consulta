
import React from "react";
import AppointmentForm from "@/components/AppointmentForm";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary-700">Sistema de Agendamento</h1>
            <p className="text-gray-600 mt-2">Gerencie suas consultas de forma simples e eficiente</p>
          </header>
          
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
