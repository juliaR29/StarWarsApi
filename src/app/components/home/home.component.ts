import { Component, OnInit } from '@angular/core';
import { SwApiService } from '../../services/sw.service';
import { Router } from '@angular/router';
import { Filmes } from '../../models/home.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filmes: Filmes[] = [];
  error: any;

  constructor(private swService: SwApiService, private route: Router) {
  }

  ngOnInit(): void {
    this.getter();
  }

  // tslint:disable-next-line:typedef
  getter() {
    this.swService.getFilmes().subscribe(
      (data) => {
        this.filmes = data.results;
        console.log(this.filmes);

      }, error => {
        this.error = error;
        console.error('Erro: ', error);
      });
  }
  // tslint:disable-next-line:typedef
  descricao(i: any) {
    const id = i + 1;
    console.log(i);
    this.route.navigate([`filme/${id}`]);
  }
}
