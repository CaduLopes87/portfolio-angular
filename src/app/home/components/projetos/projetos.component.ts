import { Component, inject } from '@angular/core';
import { IProjeto, IProjetos } from '../../models/IProjetos';
import { HomeService } from '../../services/home.service';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesProjetoComponent } from './components/detalhes-projeto/detalhes-projeto.component';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.scss',
})
export class ProjetosComponent {
  readonly dialog = inject(MatDialog);

  listaProjetos: IProjetos = {
    profissionais: [
      {
        nome: 'Contabilizador de Rifas',
        src: '../../../../assets/contabilizador-backdrop.png',
        alt: 'Imagem ilustrativa do site contabilizador de rifas',
        github_Link: 'https://github.com/CaduLopes87/contabilizador-de-rifas',
        projeto_Link: 'https://contabilizador-de-rifas.vercel.app/',
        detalhes: {
          objetivo:
            'Criar uma ferramenta web para facilitar a gestão e organização de rifas vendidas por uma loja, centralizando os dados de vendas e números disponíveis.',
          descricao:
            'O Contabilizador de Rifas é uma solução web desenvolvida com HTML, CSS e JavaScript puro, conectada a um servidor construído em Node.js e Fastify para o gerenciamento e a visualização de dados. A aplicação se comunica com um banco de dados PostgreSQL, onde todas as informações relacionadas às rifas (como números vendidos e disponíveis) são armazenadas e gerenciadas. Este projeto automatizou o processo de controle de rifas, substituindo métodos manuais e otimizando a gestão de vendas.',
          contribuicoesTecnicas: [
            {
              texto: 'Criação do front-end interativo e responsivo.',
            },
            {
              texto:
                'Desenvolvimento do servidor utilizando Fastify para garantir desempenho otimizado.',
            },
            {
              texto:
                'Integração com banco de dados PostgreSQL para armazenar e consultar informações em tempo real.',
            },
            {
              texto:
                'Implementação de validações de dados e respostas rápidas para uma experiência do usuário eficiente.',
            },
          ],
        },
      },
      {
        nome: 'Onirica Psique',
        src: '../../../../assets/oniricapsique-backdrop.png',
        alt: 'Imagem ilustrativa do site Onirica Psique',
        github_Link: 'https://github.com/CaduLopes87/tarot-landpage',
        projeto_Link: 'https://oniricapsique.vercel.app/',
        detalhes: {
          objetivo:
            'Desenvolver uma landing page para uma taróloga que buscava uma plataforma online para apresentar seu trabalho de forma profissional e impactante.',
          descricao:
            'A Onírica Psique é uma landing page criada em Angular, projetada para funcionar como um cartão de visitas digital, destacando os serviços e a identidade única da cliente. O design foi elaborado com base em um modelo fornecido pela cliente, com adaptações e sugestões próprias para melhorar a experiência do usuário e o apelo visual. A página combina elementos modernos de design responsivo, garantindo uma navegação fluida em diferentes dispositivos. A colaboração direta com a cliente permitiu a criação de uma interface personalizada e fiel à essência do trabalho da taróloga.',
          contribuicoesTecnicas: [
            {
              texto: 'Desenvolvimento do front-end responsivo em Angular.',
            },
            {
              texto:
                'Implementação de boas práticas de SEO para melhor posicionamento nos motores de busca.',
            },
            {
              texto:
                'Personalização de elementos visuais e layout para alinhamento com a proposta esotérica e estética da cliente.',
            },
          ],
        },
      },
      {
        nome: 'Painel de Consolidação Financeira',
        src: '../../../../assets/BB-backdrop.png',
        alt: 'Imagem ilustrativa da aplicação desenvolvida no Banco do Brasil para Consolidação Financeira',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: '',
        detalhes: {
          objetivo:
            'Concentrar as informações das operações de mercado.',
          descricao:
            'Interface desenvolvida para consolidar informações de operações financeiras realizadas em ambiente de mercado, com funcionalidade para exportação de relatórios diários.',
          contribuicoesTecnicas: [
            {
              texto:
                'Desenvolvimento do front-end utilizando Angular.',
            },
            {
              texto:
                'Integração eficiente de requisições com o backend por meio de serviços otimizados para comunicação com banco de dados.',
            },
            {
              texto:
                'Desenvolvimento de formulários dinâmicos para a criação e edição de operações, utilizando Reactive Forms no Angular.',
            },
            {
              texto:
                'Uso de lazy loading para otimizar o carregamento da aplicação e melhorar a experiência do usuário.',
            },
            {
              texto:
                'Uso de lazy loading para otimizar o carregamento da aplicação e melhorar a experiência do usuário.',
            },
            {
              texto:
                'Implementação de testes unitários utilizando o Jasmine e Karma.',
            },
          ],
        },
      },
      {
        nome: 'Painel de Gerenciamento Operacional',
        src: '../../../../assets/BB-backdrop.png',
        alt: 'Imagem ilustrativa da aplicação desenvolvida no Banco do Brasil para Gerenciamento Operacional',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: '',
        detalhes: {
          objetivo:
            'Planejar as operações que serão relizadas no dia.',
          descricao:
            'Ferramenta desenvolvida para gestores planejarem e ajustarem estratégias operacionais, centralizando o controle das operações financeiras do dia.',
          contribuicoesTecnicas: [
            {
              texto:
                'Desenvolvimento do front-end utilizando Angular.',
            },
            {
              texto:
                'Integração eficiente de requisições com o backend por meio de serviços otimizados para comunicação com banco de dados.',
            },
            {
              texto:
                'Desenvolvimento de formulários dinâmicos para a criação e edição de operações, utilizando Reactive Forms no Angular.',
            },
            {
              texto:
                'Uso de lazy loading para otimizar o carregamento da aplicação e melhorar a experiência do usuário.',
            },
            {
              texto:
                'Uso de lazy loading para otimizar o carregamento da aplicação e melhorar a experiência do usuário.',
            },
            {
              texto:
                'Implementação de testes unitários utilizando o Jasmine e Karma.',
            },
          ],
        },
      },
      {
        nome: 'Painel de Execução de Transações',
        src: '../../../../assets/BB-backdrop.png',
        alt: 'Imagem ilustrativa da aplicação desenvolvida no Banco do Brasil para Execução de Transações',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: '',
        detalhes: {
          objetivo:
            'Executar as operações de compra e venda.',
          descricao:
            'Plataforma para execução de operações financeiras integrada diretamente aos sistemas de mercado, permitindo transações de compra e venda de ativos conforme os critérios definidos pela gestão.',
          contribuicoesTecnicas: [
            {
              texto:
                'Desenvolvimento do front-end utilizando Angular.',
            },
            {
              texto:
                'Implementação de serviços de integração em tempo real com a bolsa de valores, garantindo sincronização e confiabilidade das transações.',
            },
            {
              texto:
                'Integração eficiente de requisições com o backend por meio de serviços otimizados para comunicação com banco de dados.',
            },
            {
              texto:
                'Desenvolvimento de formulários dinâmicos para a criação e edição de operações, utilizando Reactive Forms no Angular.',
            },
            {
              texto:
                'Uso de lazy loading para otimizar o carregamento da aplicação e melhorar a experiência do usuário.',
            },
            {
              texto:
                'Uso de lazy loading para otimizar o carregamento da aplicação e melhorar a experiência do usuário.',
            },
            {
              texto:
                'Implementação de testes unitários utilizando o Jasmine e Karma.',
            },
          ],
        },
      },
    ],
    pessoais: [
      {
        nome: 'Cult Review',
        src: '../../../../assets/cult-review-backdrop.png',
        alt: 'Imagem ilustrativa do site Cult Review',
        github_Link: 'https://github.com/CaduLopes87/cult-review',
        projeto_Link: 'https://cult-review.vercel.app/index.html',
        detalhes: {
          objetivo:
            'Explorar o consumo de APIs externas e aprimorar habilidades em desenvolvimento web através da criação de um catálogo interativo voltado ao cinema.',
          descricao:
            'O CultReview é um projeto pessoal que reflete a paixão por cinema, criado como um laboratório prático para explorar o consumo de APIs. Desenvolvido com HTML, CSS e JavaScript puro, o aplicativo permite que os usuários pesquisem informações sobre filmes, incluindo sinopses, notas de avaliação e outros dados relacionados. O design minimalista foi escolhido para enfatizar o conteúdo, enquanto a integração com APIs externas permitiu a criação de um catálogo dinâmico e funcional.',
          contribuicoesTecnicas: [
            {
              texto:
                'Desenvolvimento do front-end utilizando HTML, CSS e JS puro.',
            },
            {
              texto:
                'Integração com APIs públicas para busca e exibição de informações em tempo real.',
            },
            {
              texto:
                'Projeto orientado a responsividade, garantindo boa experiência em dispositivos móveis e desktops.',
            },
            {
              texto:
                'Organização do código e boas práticas para facilitar futuras manutenções e extensões.',
            },
          ],
        },
      },
    ],
  };

  constructor(private homeService: HomeService) {}

  animarIcone(event: any, animacaoClasse: string, link: string) {
    this.homeService.animarIcone(event, animacaoClasse, link);
  }

  openDialog(projeto: IProjeto) {
    const dialogRef = this.dialog.open(DetalhesProjetoComponent, {
      data: projeto,
      width: '80vw',
      maxWidth: '1080px',
      enterAnimationDuration: '1000',
      panelClass: 'detalhes-dialog',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
