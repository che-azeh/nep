import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bureau-detudes',
  templateUrl: './bureau-detudes.page.html',
  styleUrls: ['./bureau-detudes.page.scss'],
})
export class BureauDetudesPage implements OnInit {
  stage: any = [
    'En cours',
    'En attente de financement',
    'En pause',
  ];
  orders: any = [
    {
        "id": "17318",
        "client": "850",
        "dt_time": "2023-11-02 09:25:32",
        "client_name": "CONSTRUCTION D'UN IMMEUBLE A YASSA",
        "status": "5",
        "invoiceDate": null,
        "loaded": "0",
        "complete": "0",
        "invoiceNo": null,
        "invoiced": null
    },
    {
        "id": "17318",
        "client": "850",
        "dt_time": "2023-11-02 09:25:32",
        "client_name": "CONSTRUCTION D'UN IMMEUBLE A YASSA",
        "status": "5",
        "invoiceDate": null,
        "loaded": "0",
        "complete": "0",
        "invoiceNo": null,
        "invoiced": null
    },
    {
        "id": "17318",
        "client": "850",
        "dt_time": "2023-11-02 09:25:32",
        "client_name": "CONSTRUCTION D'UN IMMEUBLE A YASSA",
        "status": "5",
        "invoiceDate": null,
        "loaded": "0",
        "complete": "0",
        "invoiceNo": null,
        "invoiced": null
    },
    {
        "id": "17318",
        "client": "850",
        "dt_time": "2023-11-02 09:25:32",
        "client_name": "CONSTRUCTION D'UN IMMEUBLE A YASSA",
        "status": "5",
        "invoiceDate": null,
        "loaded": "0",
        "complete": "0",
        "invoiceNo": null,
        "invoiced": null
    },
    {
        "id": "17318",
        "client": "850",
        "dt_time": "2023-11-02 09:25:32",
        "client_name": "CONSTRUCTION D'UN IMMEUBLE A YASSA",
        "status": "5",
        "invoiceDate": null,
        "loaded": "0",
        "complete": "0",
        "invoiceNo": null,
        "invoiced": null
    },
    {
        "id": "17318",
        "client": "850",
        "dt_time": "2023-11-02 09:25:32",
        "client_name": "CONSTRUCTION D'UN IMMEUBLE A YASSA",
        "status": "5",
        "invoiceDate": null,
        "loaded": "0",
        "complete": "0",
        "invoiceNo": null,
        "invoiced": null
    },
    {
        "id": "17318",
        "client": "850",
        "dt_time": "2023-11-02 09:25:32",
        "client_name": "CONSTRUCTION D'UN IMMEUBLE A YASSA",
        "status": "5",
        "invoiceDate": null,
        "loaded": "0",
        "complete": "0",
        "invoiceNo": null,
        "invoiced": null
    },
  ]

  constructor(
    public location: Location,
  ) { }

  ngOnInit() {
  }

}
