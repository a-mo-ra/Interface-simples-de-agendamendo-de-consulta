
import React, { useState } from "react";
import { AppointmentProvider } from "@/contexts/AppointmentContext";
import AppointmentFormInput from "@/components/appointment/AppointmentFormInput";
import AppointmentList from "@/components/appointment/AppointmentList";
import StyleGuide from "@/components/StyleGuide";
import { Button } from "@/components/ui/button";

const AppointmentForm: React.FC = () => {
  const [showStyleGuide, setShowStyleGuide] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AppointmentProvider>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-primary-700">Sistema de Agendamento</h2>
          <Button 
            variant="outline"
            onClick={() => setShowStyleGuide(!showStyleGuide)}
          >
            {showStyleGuide ? "Voltar" : "Ver Style Guide"}
          </Button>
        </div>
        
        {showStyleGuide ? (
          <StyleGuide />
        ) : (
          <>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary-700 mb-6">Agendar Consulta</h2>
              <AppointmentFormInput />
            </div>
            <AppointmentList />
          </>
        )}
      </AppointmentProvider>
    </div>
  );
};

export default AppointmentForm;
