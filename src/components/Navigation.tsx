
import React from "react";
import { Building, Contact, HelpCircle, Menu, LogIn } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  <Menu className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Menu</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-white">
                  <ul className="grid gap-3 p-4 w-[200px]">
                    <ListItem href="#" title="Clínicas" icon={<Building className="h-4 w-4 mr-2" />}>
                      Encontre clínicas próximas a você
                    </ListItem>
                    <ListItem href="#" title="Contato" icon={<Contact className="h-4 w-4 mr-2" />}>
                      Entre em contato conosco
                    </ListItem>
                    <ListItem href="#" title="Suporte" icon={<HelpCircle className="h-4 w-4 mr-2" />}>
                      Precisa de ajuda? Fale conosco
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button size="sm" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            <span className="hidden sm:inline">Entrar</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    icon?: React.ReactNode;
  }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navigation;
