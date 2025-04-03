
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StyleGuide: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-white">
      {/* Cabeçalho */}
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-2">Sistema de Agendamento</h1>
        <p className="text-lg text-gray-600">Guia de Estilo e Componentes</p>
      </header>

      {/* Paleta de Cores */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Paleta de Cores</h2>
        
        {/* Cores Primárias */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Cor Primária</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-primary" />
              <div>
                <p className="font-medium">Primária</p>
                <p className="text-sm text-gray-500">#9b87f5</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cores de Status */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Cores de Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-status-scheduled" />
              <div>
                <p className="font-medium">Agendada</p>
                <p className="text-sm text-gray-500">#f97316</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-status-confirmed" />
              <div>
                <p className="font-medium">Confirmada</p>
                <p className="text-sm text-gray-500">#16a34a</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-status-completed" />
              <div>
                <p className="font-medium">Concluída</p>
                <p className="text-sm text-gray-500">#0ea5e9</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-status-canceled" />
              <div>
                <p className="font-medium">Cancelada</p>
                <p className="text-sm text-gray-500">#ef4444</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tons de Cinza */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Tons de Cinza</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-gray-50 border" />
              <div>
                <p className="font-medium">Fundo da página</p>
                <p className="text-sm text-gray-500">#f9fafb</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-white border" />
              <div>
                <p className="font-medium">Fundo dos cards</p>
                <p className="text-sm text-gray-500">#ffffff</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-gray-900" />
              <div>
                <p className="font-medium">Texto principal</p>
                <p className="text-sm text-gray-500">#111827</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-gray-500" />
              <div>
                <p className="font-medium">Texto secundário</p>
                <p className="text-sm text-gray-500">#6b7280</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-md bg-gray-200" />
              <div>
                <p className="font-medium">Bordas</p>
                <p className="text-sm text-gray-500">#e5e7eb</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tipografia */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Tipografia</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Família de Fontes</h3>
            <p>Interface do sistema (sans-serif)</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tamanhos de Texto</h3>
            <div className="space-y-3">
              <div>
                <p className="text-2xl md:text-3xl font-bold">Título principal (h1)</p>
                <p className="text-sm text-gray-500">24px/30px (md:32px/36px), bold</p>
              </div>
              <div>
                <p className="text-xl font-bold">Subtítulo (h2)</p>
                <p className="text-sm text-gray-500">20px/24px, bold</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Nome do paciente</p>
                <p className="text-sm text-gray-500">18px/24px, semibold</p>
              </div>
              <div>
                <p className="text-sm font-medium">Texto de rótulos</p>
                <p className="text-sm text-gray-500">14px/20px, medium</p>
              </div>
              <div>
                <p className="text-base md:text-sm">Texto de inputs</p>
                <p className="text-sm text-gray-500">16px/24px (md:14px/20px), normal</p>
              </div>
              <div>
                <p className="text-sm font-medium">Texto de botões</p>
                <p className="text-sm text-gray-500">14px/20px, medium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Espaçamento */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Espaçamento</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Padding</h3>
          <div className="space-y-2">
            <p>- Página: 32px (py-8) vertical, 16px (px-4) horizontal</p>
            <p>- Cards: 24px (p-6) em todos os lados</p>
            <p>- Botões: 16px horizontal (px-4), 8px vertical (py-2)</p>
            <p>- Inputs: 12px horizontal (px-3), 8px vertical (py-2)</p>
            <p>- Entre elementos de formulário: 24px (space-y-6)</p>
            <p>- Entre campos do formulário: 24px (gap-6)</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Margens</h3>
          <div className="space-y-2">
            <p>- Entre header e conteúdo: 40px (mb-10)</p>
            <p>- Entre card de agendamento e lista: 32px (mb-8)</p>
            <p>- Entre itens na lista de consultas: 16px (space-y-4)</p>
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Componentes</h2>
        
        {/* Cards */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Cards</h3>
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Card de Formulário</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Fundo: #ffffff (branco)<br />
                Borda arredondada: 8px (rounded-lg)<br />
                Sombra: shadow-md<br />
                Largura máxima: 896px (max-w-4xl)
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Inputs */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Inputs</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="example-input" className="mb-2 block">Campo de Texto</Label>
              <Input id="example-input" placeholder="Exemplo de input" />
              <p className="text-sm text-gray-500 mt-2">
                Altura: 40px (h-10)<br />
                Largura: 100% (w-full)<br />
                Borda: 1px, cor #e5e7eb (border border-input)<br />
                Borda arredondada: 6px (rounded-md)
              </p>
            </div>
          </div>
        </div>
        
        {/* Botões */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Botões</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">Botão Principal</h4>
              <Button className="w-full bg-primary hover:bg-primary-600">Agendar Consulta</Button>
              <p className="text-sm text-gray-500 mt-2">
                Altura: 40px (h-10)<br />
                Largura: 100% no formulário<br />
                Cor de fundo: #9b87f5 (bg-primary)
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Botões de Status</h4>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" variant="outline" className="bg-status-scheduled">Agendada</Button>
                <Button size="sm" variant="outline" className="bg-status-confirmed">Confirmada</Button>
                <Button size="sm" variant="outline" className="bg-status-completed">Concluída</Button>
                <Button size="sm" variant="outline" className="bg-status-canceled">Cancelada</Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Altura: 36px (h-9)<br />
                Padding horizontal: 12px (px-3)<br />
                Borda arredondada: 6px (rounded-md)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interações e Comportamento */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Interações e Comportamento</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Formulário</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Validação:</span> Todos os campos são obrigatórios.</p>
            <p><span className="font-medium">Feedback:</span> Toast de sucesso ao agendar, toast de erro quando faltam campos.</p>
            <p><span className="font-medium">Comportamento após envio:</span> Limpa o formulário, adiciona consulta à lista.</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Lista de Consultas</h3>
          <div className="space-y-2">
            <p><span className="font-medium">Exibição:</span> Ordenada pela data mais recente.</p>
            <p><span className="font-medium">Status:</span> Clicar em um botão de status atualiza o status da consulta.</p>
            <p><span className="font-medium">Feedback:</span> Toast de confirmação ao alterar status.</p>
            <p><span className="font-medium">Comportamento responsivo:</span> Em telas pequenas, botões de status ficam empilhados.</p>
          </div>
        </div>
      </section>

      {/* Layout Responsivo */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Layout Responsivo</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Mobile (< 768px)</h3>
            <p>- Layout em coluna única</p>
            <p>- Botões de status empilhados</p>
            <p>- Tamanho de fonte aumentado para inputs (16px)</p>
            <p>- Padding horizontal reduzido</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2">Tablet e Desktop (≥ 768px)</h3>
            <p>- Layout em duas colunas para o formulário</p>
            <p>- Botões de status em linha</p>
            <p>- Tamanho de fonte reduzido para inputs (14px)</p>
            <p>- Padding horizontal aumentado</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;
