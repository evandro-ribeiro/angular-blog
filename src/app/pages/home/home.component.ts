import { Component, OnInit } from '@angular/core';
import { GithubData } from 'src/app/data/testData';

type ReposType = {
  title: string,
  url: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export default class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getList();
    }

  async getList(): Promise<void> {
    var listNames: [] = await GithubData();
    listNames.forEach((repo: ReposType) => {
      let ul = document.getElementById("listNames");
      let li = document.createElement("li");
      li.innerHTML = `<a href="${repo.url}" style="background-color: #344C64; padding: .5rem; border-radius: 10px;" target="_blank">${repo.title}</a>`;
      
      ul != null ? ul.appendChild(li) : "";
    })
  }

}
