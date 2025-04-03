
import React from "react";
import { AppointmentProvider } from "@/contexts/AppointmentContext";
import AppointmentFormInput from "@/components/appointment/AppointmentFormInput";
import AppointmentList from "@/components/appointment/AppointmentList";

const AppointmentForm: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <AppointmentProvider>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-primary-700">Sistema de Agendamento</h2>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-6">Agendar Consulta</h2>
          <AppointmentFormInput />
        </div>
        <AppointmentList />
      </AppointmentProvider>
    </div>
  );
};

export default AppointmentForm;
