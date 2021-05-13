import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Descricao } from 'src/app/models/descricao.model';
import { SwApiService } from 'src/app/services/sw.service';


@Component({
  selector: 'app-home-detalhe',
  templateUrl: './home-detalhe.component.html',
  styleUrls: ['./home-detalhe.component.scss']
})
export class HomeDetalheComponent implements OnInit {

  descricao: Descricao[] = [];
  id!: number;
  constructor(private swService: SwApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe().subscribe(params => {
      this.id = params.id;
      console.log(this.id);
    });
    this.getDesc();
  }

  // tslint:disable-next-line:typedef
  getDesc() {
    this.swService.getFilmes().subscribe(
      (data) => {
        this.descricao = data.results;
        console.log(this.descricao);
      });
  }

}
