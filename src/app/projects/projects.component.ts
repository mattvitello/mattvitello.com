import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  atomProject: any = {
    title: "shopatombrand.com",
    isLive: false,
    versions: [
      {
        versionNum: 1,
        link: "https://shopatombrand.com/",
        description: "Online merchandise shop created for <a href='https://www.youtube.com/channel/UCXcn2mBqcdqe6EwsBFrJmDA/featured'>Drew Phillips's</a> brand Atom. Design inspiration from <a href='https://www.cameronsworld.net/'>camerons world</a>.",
        techSpecs: "Angular 6, Shopify buy button sdk",
        images: [
          {
            url: "assets/img/atom/1.png",
            width: 9
          },
          {
            url: "assets/img/atom/1m.png",
            width: 3
          },
          {
            url: "assets/img/atom/2.png",
            width: 6
          },
          {
            url: "assets/img/atom/3.png",
            width: 6
          },
          {
            url: "assets/img/atom/4.jpg",
            width: 9
          },
          {
            url: "assets/img/atom/4m.png",
            width: 3
          }
        ],
        isNotLive: true,
        latestMessage: "Website is no longer live ☹"
      }
    ]
  }

  drewProject: any = {
      title: "shopgrease.com",
      isLive: false,
      versions: [
        {
          versionNum: 1,
          link: "https://shopgrease.com/",
          description: "Online merchandise shop created for <a href='https://www.youtube.com/channel/UCXcn2mBqcdqe6EwsBFrJmDA/featured'>Drew Phillips</a>. Each merchandise item is a spinning 3D rendered animation.",
          techSpecs: "Static html/css/js pages, Shopify buy button sdk",
          images: [
            {
              url: "assets/img/grease/1.png",
              width: 9
            },
            {
              url: "assets/img/grease/m1.png",
              width: 3
            },
            {
              url: "assets/img/grease/2.png",
              width: 9
            },
            {
              url: "assets/img/grease/m2.png",
              width: 3
            }
          ],
          latestMessage: "This version of the site is no longer live"
        },
        {
          versionNum: 2,
          link: "https://shopgrease.com/",
          description: "Online merchandise shop created for <a href='https://www.youtube.com/channel/UCXcn2mBqcdqe6EwsBFrJmDA/featured'>Drew Phillips</a>",
          techSpecs: "Static html/css/js pages, Shopify buy button sdk",
          images: [
            {
              url: "assets/img/grease/v2-1.png",
              width: 9
            },
            {
              url: "assets/img/grease/v2-m1.png",
              width: 3
            },
            {
              url: "assets/img/grease/v2-2.png",
              width: 9
            },
            {
              url: "assets/img/grease/v2-m2.png",
              width: 3
            },
            {
              url: "assets/img/grease/v2-3.png",
              width: 9
            },
            {
              url: "assets/img/grease/v2-m3.png",
              width: 3
            }
          ],
          latestMessage: "This version of the site is no longer live",
        },
        {
          versionNum: 3,
          link: "https://shopgrease.com/",
          description: "Online merchandise shop created for <a href='https://www.youtube.com/channel/UCXcn2mBqcdqe6EwsBFrJmDA/featured'>Drew Phillips</a>",
          techSpecs: "Angular 6, Shopify buy button sdk",
          images: [
            {
              url: "assets/img/grease/v3-1.jpg",
              width: 9
            },
            {
              url: "assets/img/grease/v3-m1.png",
              width: 3
            },
            {
              url: "assets/img/grease/v3-2.png",
              width: 9
            },
            {
              url: "assets/img/grease/v3-m2.png",
              width: 3
            }
          ],
          latestMessage: "Website is no longer live ☹",
        }
      ]
  }

  royProject: any = {
    title: "royblair.com",
    isLive: true,
    versions: [
      {
        versionNum: 1,
        link: "https://royblair.com/",
        description: "Online store selling a t-shirt promoting Roy's album Cat Heaven.",
        techSpecs: "Static html/css/js page, Shopify buy button sdk",
        images: [
          {
            url: "assets/img/roy/v1-1.png",
            width: 9
          },
          {
            url: "assets/img/roy/v1-m1.png",
            width: 3
          },
          {
            url: "assets/img/roy/v1-2.png",
            width: 9
          },
          {
            url: "assets/img/roy/v1-m2.png",
            width: 3
          }
        ],
        latestMessage: "This version of the site is no longer live"
      },
      {
        versionNum: 2,
        link: "https://royblair.com/",
        description: "Promoting Roy's latest singles, Perfume and Jane, off of his debut album Cat Heaven.",
        techSpecs: "Static html/css/js pages",
        images: [
          {
            url: "assets/img/roy/v2-1.png",
            width: 9
          },
          {
            url: "assets/img/roy/v2-m1.png",
            width: 3
          },
          {
            url: "assets/img/roy/v2-2.png",
            width: 9
          },
          {
            url: "assets/img/roy/v2-m2.png",
            width: 3
          }
        ],
        latestMessage: "This version of the site is no longer live"
      },
      {
        versionNum: 3,
        link: "https://royblair.com/",
        description: "Album pre-order",
        techSpecs: "Static html/css/js page",
        images: [
          {
            url: "assets/img/roy/v3-1.png",
            width: 9
          },
          {
            url: "assets/img/roy/v3-m1.png",
            width: 3
          }
        ],
        latestMessage: "This version of the site is no longer live"
      },
      {
        versionNum: 4,
        link: "https://royblair.com/",
        description: "Album release - auto scrolling album credits over video",
        techSpecs: "Static html/css/js page",
        images: [
          {
            url: "assets/img/roy/v4-1.png",
            width: 9
          },
          {
            url: "assets/img/roy/v4-m1.png",
            width: 3
          }
        ],
        latestMessage: "This version of the site is no longer live"
      },
      {
        versionNum: 5,
        link: "https://royblair.com/",
        description: "Multi-page site containing pages for the album credits, music, shows, and shop.",
        techSpecs: "Static html/css/js pages, Shopify buy button sdk",
        images: [
          {
            url: "assets/img/roy/v5-1.png",
            width: 12
          },
          {
            url: "assets/img/roy/v5-2.png",
            width: 6
          },
          {
            url: "assets/img/roy/v5-3.png",
            width: 6
          },
          {
            url: "assets/img/roy/v5-5.png",
            width: 6
          },
          {
            url: "assets/img/roy/v5-6.png",
            width: 6
          },
          {
            url: "assets/img/roy/v5-4.png",
            width: 6
          },
          {
            url: "assets/img/roy/v5-7.png",
            width: 6
          }
        ],
        latestMessage: "This version of the site is no longer live"
      },
      {
        versionNum: 6,
        link: "https://royblair.com/",
        description: "Homepage redesign promoting Roy's single Dennis.",
        techSpecs: "Angular 6, Shopify buy button sdk",
        images: [
          {
            url: "assets/img/roy/v6-1.png",
            width: 9
          },
          {
            url: "assets/img/roy/v6-m1.png",
            width: 3
          },
          {
            url: "assets/img/roy/v6-2.png",
            width: 9
          },
          {
            url: "assets/img/roy/v6-m2.png",
            width: 3
          }
        ],
        latestMessage: "This version of the site is no longer live"
      },
      {
        versionNum: 7,
        link: "https://royblair.com/",
        description: "Redesign for new music video and merch drop.",
        techSpecs: "Angular 6, Shopify buy button sdk",
        images: [
          {
            url: "assets/img/roy/v7-1.png",
            width: 9
          },
          {
            url: "assets/img/roy/v7-m3.png",
            width: 3
          },
          {
            url: "assets/img/roy/v7-2.png",
            width: 9
          },
          {
            url: "assets/img/roy/v7-m2.png",
            width: 3
          },
          {
            url: "assets/img/roy/v7-3.png",
            width: 9
          },
          {
            url: "assets/img/roy/v7-m1.png",
            width: 3
          },
          {
            url: "assets/img/roy/v7-4.png",
            width: 9
          },
          {
            url: "assets/img/roy/v7-m4.png",
            width: 3
          },
          {
            url: "assets/img/roy/v7-5.png",
            width: 6
          },
          {
            url: "assets/img/roy/v7-6.png",
            width: 6
          }
        ],
        latestMessage: "This version of the site is no longer live"
      },
      {
        versionNum: 8,
        link: "https://royblair.com/",
        description: "Redesign for US tour.",
        techSpecs: "Angular 6",
        images: [
          {
            url: "assets/img/roy/v8-1.png",
            width: 9
          },
          {
            url: "assets/img/roy/v8-2m.png",
            width: 3
          },
          {
            url: "assets/img/roy/v8-2.png",
            width: 9
          },
          {
            url: "assets/img/roy/v8-1m.png",
            width: 3
          },
          {
            url: "assets/img/roy/v8-3.png",
            width: 6
          },
          {
            url: "assets/img/roy/v8-4.png",
            width: 6
          },
          {
            url: "assets/img/roy/v8-5.png",
            width: 6
          },
          {
            url: "assets/img/roy/v8-6.png",
            width: 6
          }
        ],
        latestMessage: "This version of the site is no longer live"
      },
      {
        versionNum: 9,
        link: "https://royblair.com/",
        description: "Website created for musician <a href='https://open.spotify.com/artist/6Sa4YbwEdGlfVSJMF1Lp67'>Roy Blair</a>.",
        techSpecs: "Angular 6",
        images: [
          {
            url: "assets/img/roy/v9-1.png",
            width: 9
          },
          {
            url: "assets/img/roy/v9-1m.png",
            width: 3
          },
          {
            url: "assets/img/roy/v9-2.png",
            width: 9
          },
          {
            url: "assets/img/roy/v9-2m.png",
            width: 3
          },
          {
            url: "assets/img/roy/v9-3.png",
            width: 6
          },
          {
            url: "assets/img/roy/v9-4.png",
            width: 6
          }
        ],
        latestMessage: ""
      }
    ]
  }

  pathwayBiotechnologyProject: any = {
      title: "pathwaybiotechnology.com",
      isLive: true,
      versions: [
        {
          versionNum: 1,
          link: "https://pathwaybiotechnology.com/",
          description: "Website created for Pathway Biotechnology, a pre-patent life science technology evaluation firm.",
          techSpecs: "Static html/css/js pages, formspree contact form",
          images: [
            {
              url: "assets/img/pathway/1.png",
              width: 12
            },
            {
              url: "assets/img/pathway/2.png",
              width: 6
            },
            {
              url: "assets/img/pathway/3.png",
              width: 6
            },
            {
              url: "assets/img/pathway/4.png",
              width: 6
            },
            {
              url: "assets/img/pathway/5.png",
              width: 6
            },
            {
              url: "assets/img/pathway/6.png",
              width: 6
            },
            {
              url: "assets/img/pathway/7.png",
              width: 6
            },
            {
              url: "assets/img/pathway/8.png",
              width: 12
            }
          ],
          latestMessage: ""
        }
      ]
  }

  ecnowProject: any = {
      title: "ecnowtech.com",
      isLive: false,
      versions: [
        {
          versionNum: 1,
          link: "http://www.ecnowtech.com/",
          description: "EcNow Tech is a compostable plastics manufacturer based out of Corvallis, Oregon. A notable feature of this site is the homepage animation which drew inspiration from the graphic design company Active Theory. Screen captures of my work can be found below.",
          techSpecs: "ruby on rails application (ruby v2.3.1, rails v5.0.1), three.js homepage animation",
          images: [
            {
              url: "assets/img/ecnow/1.png",
              width: 6
            },
            {
              url: "assets/img/ecnow/2.png",
              width: 6
            },
            {
              url: "assets/img/ecnow/3.png",
              width: 6
            },
            {
              url: "assets/img/ecnow/4.png",
              width: 6
            },
            {
              url: "assets/img/ecnow/5.png",
              width: 6
            },
            {
              url: "assets/img/ecnow/6.png",
              width: 6
            }
          ],
          latestMessage: "Website is no longer live ☹"
        }
      ]
  }

  earthsmartProject: any = {
      title: "earthsmartpd.com",
      isLive: true,
      versions: [
        {
          versionNum: 1,
          link: "http://earthsmartpd.com/",
          description: "Earthsmart P&D is a compostable product distributor based out of Corvallis, Oregon. I helped design and develop this site with another developer. Some of the most notable and useful features of this site include an online catalog which allows users to add items to cart and place orders, as well as an admin page with allows products to be added and edited.",
          techSpecs: "react frontend, flask backend, postgresql db",
          images: [
            {
              url: "assets/img/earthsmart/e1.png",
              width: 12
            },
            {
              url: "assets/img/earthsmart/5.png",
              width: 6
            },
            {
              url: "assets/img/earthsmart/4.png",
              width: 6
            },
            {
              url: "assets/img/earthsmart/e2.png",
              width: 6
            },
            {
              url: "assets/img/earthsmart/e3.png",
              width: 6
            }
          ],
          latestMessage: ""
        }
      ]
  }

  livproactivProject: any = {
    title: "livproactiv.com",
    isLive: true,
    versions: [
      {
        versionNum: 1,
        link: "http://livproactiv.com/",
        description: "Website created for LivProactiv, a diabetes managment company base out of Hollywood, Florida.",
        techSpecs: "asp.net web application, demo calculators created using shiny (an r package)",
        images: [
          {
            url: "assets/img/livpro/1.png",
            width: 6
          },
          {
            url: "assets/img/livpro/2.png",
            width: 6
          },
          {
            url: "assets/img/livpro/6.png",
            width: 6
          },
          {
            url: "assets/img/livpro/5.png",
            width: 6
          },
          {
            url: "assets/img/livpro/3.png",
            width: 6
          },
          {
            url: "assets/img/livpro/4.png",
            width: 6
          }
        ],
        latestMessage: ""
      }
    ]
  }

  desalinationProject: any = {
    title: "Membrane & Resin Desalination System",
    isLive: true,
    versions: [
      {
        versionNum: 1,
        link: "https://www.marquette.edu/innovation/documents/membrane-resin-desalination.pdf",
        description: "<br/>Over the course of a year, I built a membrane and resin desalination system with a team of two other students. Funding was provided by Marquette University's Strategic Innovation Fund where we were 1 of 38 teams funded out of 275 student and faculty applicants. <br/><br/> The concept for this system arose from a need to make desalination processes more efficient and economical around the globe. Current methods such as reverse osmosis, and thermal distillation, are cost prohibitive due to the high amount of electricity used. The Membrane and Resin Desalination System uses a novel patented approach to transport ions through semi-permeable membranes under the influence of an applied electric potential, thus reducing the power consumption of desalination. <br/><br/> My primary role in the development of this device involved building and testing the system peice by peice. Today, the system is still being developed and improved upon by the project lead Emannuel Kayiwa. <br/><br/>",
        techSpecs: "",
        images: [
          {
            url: "assets/img/desalination/1.jpg",
            width: 12
          },
          {
            url: "assets/img/desalination/2.png",
            width: 12
          },
        ],
        latestMessage: ""
      }
    ]
  }

  projects = [this.royProject, this.atomProject, this.drewProject, this.pathwayBiotechnologyProject, this.earthsmartProject, this.ecnowProject, this.livproactivProject, this.desalinationProject]
  currentProject: any;
  currentProjectVersion: any;

  constructor() { }

  ngOnInit() {
    this.currentProject = this.royProject;
    this.currentProjectVersion = this.currentProject.versions[this.currentProject.versions.length - 1];
  }

  changeProject(event: any, projectNum: number){
    this.currentProject = this.projects[projectNum];
    this.currentProjectVersion = this.currentProject.versions[this.currentProject.versions.length - 1];
    $('.p-item').removeClass('active');
    $($(event.target).parent()).addClass('active');
    this.hideTechSpecs();
  }

  changeVersion(versionNum: number){
    this.currentProjectVersion = this.currentProject.versions[versionNum - 1];
  }

  showTechSpecs(){
    $('.tech-specs').hide();
    $('.tech-specs-show').show();
  }

  hideTechSpecs(){
    $('.tech-specs').show();
    $('.tech-specs-show').hide();
  }
}
