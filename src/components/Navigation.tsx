
import React from "react";
import { Building, Contact, HelpCircle, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm py-3 px-4 mb-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary-700 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">SA</span>
          </div>
          <span className="text-xl font-bold text-primary-700 hidden sm:inline-block">
            Sistema de Agendamento
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center space-x-6">
            <NavItem title="Clínicas" icon={<Building className="h-4 w-4 mr-2" />}>
              <AccordionItem value="clinicas-locais">
                <AccordionTrigger className="py-2 px-1">Clínicas Locais</AccordionTrigger>
                <AccordionContent>
                  <ul className="py-2">
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">São Paulo</li>
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Rio de Janeiro</li>
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Belo Horizonte</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="especialidades">
                <AccordionTrigger className="py-2 px-1">Especialidades</AccordionTrigger>
                <AccordionContent>
                  <ul className="py-2">
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Cardiologia</li>
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Dermatologia</li>
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Ortopedia</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </NavItem>

            <NavItem title="Contato" icon={<Contact className="h-4 w-4 mr-2" />}>
              <AccordionItem value="telefones">
                <AccordionTrigger className="py-2 px-1">Telefones</AccordionTrigger>
                <AccordionContent>
                  <ul className="py-2">
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">(11) 9999-9999</li>
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">(11) 8888-8888</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="email">
                <AccordionTrigger className="py-2 px-1">Email</AccordionTrigger>
                <AccordionContent>
                  <ul className="py-2">
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">contato@sistema.com</li>
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">suporte@sistema.com</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </NavItem>

            <NavItem title="Suporte" icon={<HelpCircle className="h-4 w-4 mr-2" />}>
              <AccordionItem value="faq">
                <AccordionTrigger className="py-2 px-1">FAQ</AccordionTrigger>
                <AccordionContent>
                  <ul className="py-2">
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Como marcar consulta?</li>
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Como cancelar consulta?</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tutoriais">
                <AccordionTrigger className="py-2 px-1">Tutoriais</AccordionTrigger>
                <AccordionContent>
                  <ul className="py-2">
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Guia de uso</li>
                    <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Vídeos explicativos</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </NavItem>
          </div>
          
          {/* Mobile navigation menu - shows only on small screens */}
          <div className="md:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  Menu
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-2 pointer-events-auto">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="clinicas">
                    <AccordionTrigger className="py-2">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-2" />
                        Clínicas
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="py-2">
                        <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Clínicas Locais</li>
                        <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Especialidades</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="contato">
                    <AccordionTrigger className="py-2">
                      <div className="flex items-center">
                        <Contact className="h-4 w-4 mr-2" />
                        Contato
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="py-2">
                        <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Telefones</li>
                        <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Email</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="suporte">
                    <AccordionTrigger className="py-2">
                      <div className="flex items-center">
                        <HelpCircle className="h-4 w-4 mr-2" />
                        Suporte
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="py-2">
                        <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">FAQ</li>
                        <li className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Tutoriais</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </PopoverContent>
            </Popover>
          </div>
          
          <Button size="sm" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Entrar</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

interface NavItemProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ title, icon, children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="flex items-center text-gray-700 hover:text-primary-700 transition-colors">
          {icon}
          {title}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-2 pointer-events-auto">
        <Accordion type="single" collapsible className="w-full">
          {children}
        </Accordion>
      </PopoverContent>
    </Popover>
  );
};

export default Navigation;
