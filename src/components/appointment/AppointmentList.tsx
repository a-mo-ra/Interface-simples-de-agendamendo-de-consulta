
import React from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppointments, AppointmentStatus } from "@/contexts/AppointmentContext";

const AppointmentList: React.FC = () => {
  const { appointments, updateAppointmentStatus } = useAppointments();

  const getStatusColor = (status: AppointmentStatus) => {
    const statusColors = {
      scheduled: "bg-status-scheduled",
      confirmed: "bg-status-confirmed",
      completed: "bg-status-completed",
      canceled: "bg-status-canceled",
    };
    
    return statusColors[status];
  };

  if (appointments.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary-700 mb-6">Consultas Agendadas</h2>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div 
            key={appointment.id} 
            className="border rounded-md p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          >
            <div className="space-y-1 flex-1">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${getStatusColor(appointment.status)}`}></span>
                <h3 className="text-lg font-semibold">{appointment.name}</h3>
              </div>
              <div className="text-sm text-gray-500 flex flex-wrap gap-x-6 gap-y-1">
                <span className="flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {appointment.date && format(appointment.date, "dd/MM/yyyy")}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {appointment.time}
                </span>
                <span className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {appointment.location}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              <Button
                size="sm"
                variant={appointment.status === "scheduled" ? "default" : "outline"}
                className={appointment.status === "scheduled" ? "bg-status-scheduled" : ""}
                onClick={() => updateAppointmentStatus(appointment.id, "scheduled")}
              >
                Agendada
              </Button>
              <Button
                size="sm"
                variant={appointment.status === "confirmed" ? "default" : "outline"}
                className={appointment.status === "confirmed" ? "bg-status-confirmed" : ""}
                onClick={() => updateAppointmentStatus(appointment.id, "confirmed")}
              >
                Confirmada
              </Button>
              <Button
                size="sm"
                variant={appointment.status === "completed" ? "default" : "outline"}
                className={appointment.status === "completed" ? "bg-status-completed" : ""}
                onClick={() => updateAppointmentStatus(appointment.id, "completed")}
              >
                Concluída
              </Button>
              <Button
                size="sm"
                variant={appointment.status === "canceled" ? "default" : "outline"}
                className={appointment.status === "canceled" ? "bg-status-canceled" : ""}
                onClick={() => updateAppointmentStatus(appointment.id, "canceled")}
              >
                Cancelada
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;
