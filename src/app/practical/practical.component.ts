import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practical',
  templateUrl: './practical.component.html',
  styleUrls: ['./practical.component.scss']
})
export class PracticalComponent implements OnInit {

  constructor() { }

  infoText1 =
    '  Træning foregår på et ca 8000 m2 stor indhegnet græsareal (hegnet er forhøjet i 2017 til 180 cm højt), omkranset af marker og skov.';

  infoText2 =
    'Alle hunde skal føres i snor på træningspladsen med mindre andet er aftalt med mig. På hvalpeholdene bliver der selvfølgelig også tid til, at hvalpene får mulighed for at lege sammen, men det kommer til at foregå under stor hensyntagen til de enkelte hvalpes størrelse og temperament, således at ingen hvalpe bliver trynet af de andre, men tværtimod får en god og sjov oplevelse ud af det. Alle hunde skal bære fast halsbånd eller sele på træningspladsen. Endvidere en fast line, 1-2 m lang, ingen flexliner. Kvælerhalsbånd accepteres ikke, ligesom hårdhændet opførsel over for hundene ikke accepteres.Det skal være sjovt og trygt for såvel hunde som mennesker at komme til træning.Af samme grund, og da jeg ikke selv har erfaring med "kamphunde" eller såkaldte "listehunde", kan jeg desværre ikke';

  texts = ['Din hund skal selvfølgelig også være vaccineret efter gældende foreskrifter og have en udvidet ansvarsforsikring.',
    'Al deltagelse i leg og træning på træningspladsen sker på eget ansvar. "Hund & Klikker" kan ikke drages til ansvar for eventuelle skader, der er opstået på træningspladsen eller i forbindelse med undervisningen.',
    'Da træningspladsen er så stor, er løbske tæver også velkomne til træning, når blot man som tæveejer accepterer, at man kommer til at træne i god afstand af de andre hunde.',
    'Det siger sig selv, at man selvfølgelig kun møder med sin hund, hvis den er sund og rask. Specielt er hunde med diaresygdomme ikke velkomne. I så fald mød gerne op uden din hund. Det kan være meget lærerigt blot at høre og observere de andre træne.',
    'Husk "hømhøm"-poser til hunden og masser af forskellige  lækre godbidder og også meget gerne mindst 2 stykker trækkelegetøj til hunden. Det er også en god ide at have vand og vandskål med til hunden. Husk også gerne at tage et tæppe med til hunden, som er godt til at lære hunden at være i ro, når der f.eks. instrueres i den næste øvelse, og tænk også på et godt, varmt dækken til de dage, det er regnvejr, ligesom små hvalpe let kommer til at fryse på kølige aftener.',
    'Afbud: Jeg vil meget gerne have besked så snart du ved, at du ikke kommer til en planlagt træningstime, så jeg kan planlægge undervisningen bedst muligt til den enkelte gang.'
  ];

  ngOnInit() {

  }

}
