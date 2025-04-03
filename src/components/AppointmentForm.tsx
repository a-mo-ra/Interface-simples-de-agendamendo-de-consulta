
import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon, Clock, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { toast } from "@/components/ui/sonner";

type AppointmentStatus = "scheduled" | "confirmed" | "completed" | "canceled";

interface Appointment {
  id: string;
  date: Date | undefined;
  time: string;
  name: string;
  location: string;
  status: AppointmentStatus;
}

const AppointmentForm: React.FC = () => {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<AppointmentStatus>("scheduled");
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour <= 18; hour++) {
      for (let minute of ["00", "30"]) {
        if (hour === 18 && minute === "30") continue;
        const timeStr = `${hour.toString().padStart(2, "0")}:${minute}`;
        options.push(timeStr);
      }
    }
    return options;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time || !name || !location) {
      toast.error("Preencha todos os campos");
      return;
    }

    const newAppointment: Appointment = {
      id: Date.now().toString(),
      date,
      time,
      name,
      location,
      status,
    };

    setAppointments([...appointments, newAppointment]);
    toast.success("Consulta agendada com sucesso!");
    
    // Resetting the form
    setDate(undefined);
    setTime("");
    setName("");
    setLocation("");
    setStatus("scheduled");
  };

  const handleStatusChange = (appointmentId: string, newStatus: AppointmentStatus) => {
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

  const getStatusColor = (status: AppointmentStatus) => {
    const statusColors = {
      scheduled: "bg-status-scheduled",
      confirmed: "bg-status-confirmed",
      completed: "bg-status-completed",
      canceled: "bg-status-canceled",
    };
    
    return statusColors[status];
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary-700 mb-6">Agendar Consulta</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Picker */}
            <div className="space-y-2">
              <Label htmlFor="date">Data</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? (
                      format(date, "PPP", { locale: ptBR })
                    ) : (
                      <span>Selecione uma data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    locale={ptBR}
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Time Picker */}
            <div className="space-y-2">
              <Label htmlFor="time">Horário</Label>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger id="time" className="w-full">
                    <SelectValue placeholder="Selecione um horário" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    {generateTimeOptions().map((timeOption) => (
                      <SelectItem key={timeOption} value={timeOption}>
                        {timeOption}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Nome do Paciente</Label>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="Digite o nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Local</Label>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                <Input
                  id="location"
                  placeholder="Digite o local da consulta"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary-600"
          >
            Agendar Consulta
          </Button>
        </form>
      </div>

      {/* Appointments List */}
      {appointments.length > 0 && (
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
                    onClick={() => handleStatusChange(appointment.id, "scheduled")}
                  >
                    Agendada
                  </Button>
                  <Button
                    size="sm"
                    variant={appointment.status === "confirmed" ? "default" : "outline"}
                    className={appointment.status === "confirmed" ? "bg-status-confirmed" : ""}
                    onClick={() => handleStatusChange(appointment.id, "confirmed")}
                  >
                    Confirmada
                  </Button>
                  <Button
                    size="sm"
                    variant={appointment.status === "completed" ? "default" : "outline"}
                    className={appointment.status === "completed" ? "bg-status-completed" : ""}
                    onClick={() => handleStatusChange(appointment.id, "completed")}
                  >
                    Concluída
                  </Button>
                  <Button
                    size="sm"
                    variant={appointment.status === "canceled" ? "default" : "outline"}
                    className={appointment.status === "canceled" ? "bg-status-canceled" : ""}
                    onClick={() => handleStatusChange(appointment.id, "canceled")}
                  >
                    Cancelada
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
