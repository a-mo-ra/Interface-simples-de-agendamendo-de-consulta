
import React from "react";
import AppointmentForm from "@/components/AppointmentForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700">Sistema de Agendamento</h1>
          <p className="text-gray-600 mt-2">Agende e gerencie consultas de forma simples</p>
        </header>
        
        <AppointmentForm />
      </div>
    </div>
  );
};

export default Index;
