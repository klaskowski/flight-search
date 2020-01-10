import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirportsService {

  constructor() { }

  airports = {"identifier":"result","items":[{"airport":"London City Airport","code":"lcy","country":"Wielka Brytania"},{"area":"Londyn okoliczne lotniska","items":[{"airport":"London Gatwick","code":"lgw","country":"Wielka Brytania"},{"airport":"London Heathrow","code":"lhr","country":"Wielka Brytania"}]},{"airport":"London-Stansted","code":"stn","country":"Wielka Brytania"},{"area":"Londyn okoliczne lotniska","items":[{"airport":"Southampton","code":"sou","country":"Wielka Brytania"}]},{"airport":"London Gatwick","code":"lgw","country":"Wielka Brytania"},{"area":"Londyn okoliczne lotniska","items":[{"airport":"London City Airport","code":"lcy","country":"Wielka Brytania"},{"airport":"London Heathrow","code":"lhr","country":"Wielka Brytania"}]},{"airport":"London-Stansted","code":"stn","country":"Wielka Brytania"},{"area":"Londyn okoliczne lotniska","items":[{"airport":"Southampton","code":"sou","country":"Wielka Brytania"}]},{"airport":"London Heathrow","code":"lhr","country":"Wielka Brytania"},{"area":"Londyn okoliczne lotniska","items":[{"airport":"London City Airport","code":"lcy","country":"Wielka Brytania"},{"airport":"London Gatwick","code":"lgw","country":"Wielka Brytania"},{"airport":"London-Stansted","code":"stn","country":"Wielka Brytania"},{"airport":"Southampton","code":"sou","country":"Wielka Brytania"}]},{"airport":"London-Stansted","code":"stn","country":"Wielka Brytania"},{"area":"Londyn okoliczne lotniska","items":[{"airport":"London City Airport","code":"lcy","country":"Wielka Brytania"},{"airport":"London Gatwick","code":"lgw","country":"Wielka Brytania"},{"airport":"London Heathrow","code":"lhr","country":"Wielka Brytania"}]},{"airport":"London (CA)","code":"yxu","country":"Kanada"},{"area":"London, Kanada okoliczne lotniska","items":[{"airport":"Sarnia","code":"yzr","country":"Kanada"},{"airport":"Windsor","code":"yqg","country":"Kanada"}]},{"airport":"Londrina","code":"ldb","country":"Brazylia"},{"airport":"Longyearbyen - Svalbard","code":"lyr","country":"Norwegia"}]}
}
