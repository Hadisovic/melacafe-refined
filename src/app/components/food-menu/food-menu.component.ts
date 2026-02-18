import { Component } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.scss',
})
export class FoodMenuComponent {
  // lunchMenu = [
  //   {
  //     name: 'dolma',
  //     price: '179,-',
  //     type: 'Vegansk',
  //     description:
  //       'Fylte vinblader med ris. Servert med bulgur, pitabrød og salat.',
  //     allergens: ['H'],
  //   },
  //   {
  //     name: 'Falafel',
  //     price: '179,-',
  //     type: 'Vegansk',
  //     description:
  //       'Fritert kikertblanding, servert med pitabrød og avokadohummus.',
  //     allergens: ['H', 'Sf', 'Sn'],
  //   },
  //   // {
  //   //   name: 'Eplesalat',
  //   //   price: '179,-',
  //   //   type: 'Vegansk',
  //   //   description:
  //   //     'Blandet salat med rosiner og hvitløk braisert i olivenolje, granateple og eddik. Servert med pitabrød. (Man, Fre, Lør)',
  //   //   allergens: [],
  //   // },
  //   {
  //     name: 'Mulligatawny',
  //     price: '179,-',
  //     type: 'Vegansk',
  //     description: 'Linsesuppe.',
  //     allergens: ['H'],
  //   },
  //   // {
  //   //   name: 'Shakshuka',
  //   //   price: '179,-',
  //   //   type: 'Inneholder melk, egg',
  //   //   description:
  //   //     'Posjerte egg i en krydret tomatsaus med pitabrød ved siden av.',
  //   //   allergens: ['H', 'E'],
  //   // },
  //   // {
  //   //   name: 'Seekh Kebab',
  //   //   price: '199,-',
  //   //   type: 'Inneholder melk',
  //   //   description:
  //   //     'Seekh kebab på spyd, servert med pitabrød, salat og tzatziki.',
  //   //   allergens: ['M', 'H'],
  //   // },
  //   {
  //     name: 'Kylling Tawok',
  //     price: '299,-',
  //     type: 'Inneholder melk',
  //     description: 'Godt marinert utbenet kyllinglår fra grillen. Saftig og smakfull. Serveres med bulgur, pitabrød, avokadohummus, tzatziki og salat',
  //     allergens: ['M', 'H'],
  //   },
  //   // {
  //   //   name: 'Mezah Lunsjtallerken (Vegetar/Kjøtt)',
  //   //   price: '189,-/199,-',
  //   //   type: 'Begge alternativer',
  //   //   description:
  //   //     'Variasjon av dagens mezah. Servert som vegetarisk eller kjøttrett med pitabrød.',
  //   //   allergens: ['M', 'H', 'Sf'],
  //   // },
  // ];

  mainCourses = [
    {
      name: 'Kyllingvinger',
      price: '299,-',
      description: 'Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Kofta',
      price: '299,-',
      description:
        'Koftagryte, godt krydret kjøttdeig. Servert med salat, pitabrød, tzatziki og bulgur.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Kyllinggryte',
      price: '299,-',
      description:
        'Kylling med spinat og egyptisk molokhia (jute-blader). Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H', 'Sf', 'Pk'],
    },
    {
      name: 'Seekh Kebab',
      price: '299,-',
      description:
        'Seekh kebab tilberedt med tradisjonelle Midtøsten-metoder. Servert med pitabrød, tomat og hvitløk.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Shakiria Masala',
      price: '299,-',
      description:
        'Oksegryte i smakfull yoghurtsaus med masala krydder. Anbefales. Serveres med bulgur, pitabrød, tzatziki og salat',
      allergens: ['M', 'H'],
    },
    {
      name: 'Lammekoteletter',
      price: '349,-',
      description: 'Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Kylling Tawok',
      price: '309,-',
      description:
        'Godt marinert benfri kyllinglår fra grillen. Saftig og smakfull. Servert med bulgur, pitabrød, avokadohummus, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Grill Mix',
      price: '339,-',
      description:
        'Marinert kylling og Seekh kebab på spyd. Servert med bulgur, pitabrød, tzatziki og salat.',
      allergens: ['M', 'H'],
    },
    {
      name: 'Halloumiburger',
      price: '289,-',
      description:
        'Ost med tradisjon fra tidlig arabisk kjøkken. Servert med avokadohummus og tzatziki.',
      allergens: ['M', 'H', 'Sf'],
    },
  ];

  mezahMenu = [
    {
      name: 'Vegetar Mezah',
      price: '349,-',
      description:
        'Seks forskjellige vegetariske mezahretter satt sammen av kokken. Perfekt for deling.',
      allergens: ['H', 'M', 'P', 'Sf'],
    },
    {
      name: 'Mezah med Kjøtt',
      price: '369,-',
      description:
        'Seks forskjellige mezahretter med kjøtt, satt sammen av kokken. Flott for to eller flere.',
      allergens: ['H', 'M', 'P', 'Sf'],
    },
    {
      name: 'Klassisk Mezah med Grillretter',
      price: '459,- per person',
      description:
        'Inkluderer hummus, tzatziki, tabbouleh, falafel, sambosa, arabisk tallerken, halloumi, kylling, seekh kebab, buffalo kyllingvinger, bulgur og pitabrød. Minst 2 personer.',
      allergens: ['M', 'H', 'Sf', 'P'],
    },
    {
      name: 'Kald Mezah – per rett',
      price: '99,-',
      description:
        'Hummus • Hummus med avokado • Tzatziki • Aioli • Tabbouleh • Baba Ganosh • Syrisk salat • Oliven',
      allergens: ['Sf', 'M', 'H'],
    },
    {
      name: 'Varm Mezah – per rett',
      price: '99,- (kjøtt 109,-)',
      description:
        'Bulgur • Börek • Potetgryte • Dolma • Kikerter • Falafel • Sambosa • Ris • Arabisk pølse • Kyllingvinger • Kjøttboller (109,-) • Kylling i saus (109,-) • Oksekjøtt i saus (109,-) • Potetbåter • Batataharra',
      allergens: ['H', 'M', 'Sf'],
    },
    {
      name: 'Mini Grill Mezah Retter',
      price: '129,-/149,-',
      description:
        'Seekh Kebab (129,-) • Kylling Tawok (129,-) • Lammekoteletter (149,-)',
      allergens: ['H', 'M'],
    },
    {
      name: 'Pitabrød',
      price: '39,-',
      description: 'Vanlig hvete-pitabrød. Også tilgjengelig med zaatar eller hvitløk.',
      allergens: ['H'],
    },
    {
      name: 'Chessy pita',
      price: '49,-',
      description: 'Pitabrød toppet med ost.',
      allergens: ['H', 'M', 'Sf'],
    },
    {
      name: 'Mix Pita',
      price: '59,-',
      description: 'Kombinasjonspitabrød med ost og andre toppinger.',
      allergens: ['H', 'M', 'Sf'],
    },
  ];

  hummusEmpireMenu = [
    {
      name: 'Vegetar mix/Hummus',
      price: '289,-',
      description: 'Halloumi, börek med spinat og fetaost, ovnsbakte rotgrønnsaker og hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Halloumi/Hummus',
      price: '279,-',
      description: 'Halloumiost med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Börek Minirull/Hummus',
      price: '279,-',
      description: 'Hummus med börek (spinat og fetaost). Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Arabisk Pølse/Hummus',
      price: '289,-',
      description: 'Sterk arabisk pølse med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Oksekjøtt/Hummus',
      price: '279,-',
      description: 'Smakfullt oksekjøtt fra gryte med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Kjøttboller/Hummus',
      price: '279,-',
      description: 'Godt krydrede kjøttboller med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Kylling/Hummus',
      price: '309,-',
      description: 'Godt marinert kylling med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Lammekoteletter/Hummus',
      price: '349,-',
      description: 'Lammekoteletter med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Seekh Kebab/Hummus',
      price: '299,-',
      description: 'Tradisjonell Seekh kebab med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Kyllingvinger/Hummus',
      price: '279,-',
      description: 'Grillede kyllinglår med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
    {
      name: 'Grillmix/Hummus',
      price: '319,-',
      description: 'Marinert kylling og Seekh kebab med hummus. Inkluderer tzatziki, salat og pitabrød.',
      allergens: ['Sf', 'H', 'M'],
    },
  ];


  veganMenu = [
    {
      name: 'Spicy Hummus',
      price: '249,-',
      description: 'Med ovnsbakte rotgrønnsaker, salat og pitabrød.',
      allergens: ['Sf', 'H']
    },
    {
      name: 'Spicy Sambosa',
      price: '249,-',
      description: 'Med ovnsbakte rotgrønnsaker, salat og pitabrød.',
      allergens: ['H']
    },
    {
      name: 'Salat à la Mela',
      price: '249,-',
      description: 'Blandet salat med rosiner og hvitløk braisert i olivenolje, granateple og eddik. Servert med pitabrød.',
      allergens: []
    },
    {
      name: 'Falafel',
      price: '249,-',
      description: 'Fritert kikertblanding, servert med pitabrød, avokadohummus og salat. Tilgjengelig uten allergener.',
      allergens: ['H', 'Sf', 'Sn']
    },
    {
      name: 'Dolma',
      price: '249,-',
      description: 'Fylte vinblader med ris. Serveres med pitabrød og salat.',
      allergens: ['H']
    },
  ];


  desserts = [
    {
      name: 'Baklawa',
      price: '120,-',
      description: 'Deigverk med pistasjnøtter. Veldig søt og veldig god!',
      allergens: ['H', 'Ma', 'N']
    },
    {
      name: 'Ostekake',
      price: '120,-',
      description: 'Kjeksbunn med kremost og sitron',
      allergens: ['M', 'E', 'H', 'So', 'N']
    },
    {
      name: 'Creme Catalan',
      price: '120,-',
      description: 'Tradisjonell kake fra Midtøsten. Søt og deilig.',
      allergens: ['M', 'H', 'E', 'N']
    },
    {
      name: 'Basbousa-Revani',
      price: '120,-',
      description: 'Tradisjonell kake fra midtøsten. Søt',
      allergens: ['M', 'H', 'E', 'N']
    },
    {
      name: 'Sjokoladekake',
      price: '120,-',
      description: 'Rik og deilig sjokoladekake.',
      allergens: ['M', 'H', 'E', 'N']
    }
  ];

}
