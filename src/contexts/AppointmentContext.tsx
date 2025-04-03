
import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "sonner";

export type AppointmentStatus = "scheduled" | "confirmed" | "completed" | "canceled";

export interface Appointment {
  id: string;
  date: Date | undefined;
  time: string;
  name: string;
  location: string;
  status: AppointmentStatus;
}

interface AppointmentContextType {
  appointments: Appointment[];
  addAppointment: (appointment: Omit<Appointment, "id">) => void;
  updateAppointmentStatus: (appointmentId: string, newStatus: AppointmentStatus) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointmentData: Omit<Appointment, "id">) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
    };

    setAppointments([...appointments, newAppointment]);
    toast.success("Consulta agendada com sucesso!");
  };

  const updateAppointmentStatus = (appointmentId: string, newStatus: AppointmentStatus) => {
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === appointmentId) {
        return { ...appointment, status: newStatus };
      }
      return appointment;
    });
    setAppointments(updatedAppointments);
    
    const statusMessages = {
      scheduled: "Consulta agendada",
      confirmed: "Consulta confirmada",
      completed: "Consulta concluída",
      canceled: "Consulta cancelada"
    };
    
    toast.success(statusMessages[newStatus]);
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        addAppointment,
        updateAppointmentStatus
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = (): AppointmentContextType => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointments must be used within an AppointmentProvider");
  }
  return context;
};
