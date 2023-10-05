import { Component, OnInit } from '@angular/core';
import { IFullCommandDetail } from 'src/app/core/interface';
import { AppFacades } from 'src/app/facades/app.facades';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit {
  header: string[] = [
    'Identifiant',
    'nom et prenom client',
    'email',
    'telephone',
    'Date',
    'Statut',
    'Action',
  ];
  buttons: string[] = ['Voir plus', 'Livrer'];
  commandes: IFullCommandDetail[] = [];
  commandesForCsvFile: any[] = [];

  constructor(private appFacades: AppFacades) {}

  ngOnInit(): void {
    this.getCommandes();
  }

  getCommandes() {
    this.appFacades.getCommand().subscribe((response) => {
      this.commandes = response as IFullCommandDetail[];
      this.formatDataToCsv(this.commandes);
    });
  }

  formatDataToCsv(commandes:IFullCommandDetail[]) {
    commandes.forEach((element) => {
      this.commandesForCsvFile.push({
        Identifiant: element.guid,
        'Nom et prenom du client': element.nom + ' ' + element.prenom,
        'Email ': element.email,
        Telephone: element.telephone,
        'Date de commmande': element.createdAt,
        status: element.delivery == 0 ? 'En attente de livraison' : 'Livré',
        marque: element.marque,
        description: element.description,
      });
    });
  }
}
