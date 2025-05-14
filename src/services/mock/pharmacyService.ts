import { Pharmacy } from "@models/index";

export async function getPharmacies(limit?: number): Promise<Pharmacy[]> {
  const pharmacies: Pharmacy[] = [
    {
      id: "1",
      title: "Dragonfly Wellness",
      locations: [
        {
          id: "1",
          pharmacyId: "1",
          address: "711 South State Street, Salt Lake City UT 84111",
          phone: "801-413-6945",
          website: "www.dragonflywellness.com"
        },
        {
          id: "2",
          pharmacyId: "1", 
          address: "20 Main Street, Price UT 84501",
          phone: "435-637-3770",
          website: "www.dragonflywellness.com"
        }
      ],
      tags: ["New Patient Specials"]
    },
    {
      id: "2",
      title: "Bloc Pharmacy",
      locations: [
        {
          id: "3",
          pharmacyId: "2",
          address: "10392 South Jordan Gateway South Jordan UT 84095",
          phone: "385-249-9400",
          website: "www.blocdispensary.com"
        },
        {
          id: "4",
          pharmacyId: "2",
          address: "1624 S Convention Center Dr. St. George UT 84790",
          phone: "435-216-3400",
          website: "www.blocdispensary.com"
        }
      ],
      tags: []
    },
    {
      id: "3",
      title: "Beehive Farmacy",
      locations: [
        {
          id: "5",
          pharmacyId: "3",
          address: "1991 S 3600 W Salt Lake City UT 84004",
          phone: "385-212-0088",
          website: "www.beehivefarmacy.com"
        },
        {
          id: "6",
          pharmacyId: "3",
          address: "870 W 1150 S Suite C Brigham City UT 84032",
          phone: "435-919-0966",
          website: "www.beehivefarmacy.com"
        }
      ],
      tags: []
    },
    {
      id: "4",
      title: "Cannabist",
      locations: [
        {
          id: "7",
          pharmacyId: "4",
          address: "484 South 1750 West Springville UT 84663",
          phone: "385-327-0922",
          website: "www.gocannabiSt.com"
        }
      ],
      tags: []
    },
    {
      id: "5",
      title: "Curaleaf",
      locations: [
        {
          id: "8",
          pharmacyId: "5",
          address: "3633 N Thanksgiving Way, Lehi UT 84043",
          phone: "385-338-8010",
          website: "www.curaleaf.com"
        },
        {
          id: "9",
          pharmacyId: "5",
          address: "1351 Kearns Blvd Suite 110 B Park City UT 84060",
          phone: "435-252-1052",
          website: "www.curaleaf.com"
        },
        {
          id: "10",
          pharmacyId: "5",
          address: "222 N Draper Ln Provo UT 84601",
          phone: "801-872-7447",
          website: "www.curaleaf.com"
        },
        {
          id: "11",
          pharmacyId: "5",
          address: "757 S 1040 W Payson UT 84651",
          phone: "385-404-4422",
          website: "www.curaleaf.com"
        }
      ],
      tags: []
    },
    {
      id: "6",
      title: "The Flower Shop",
      locations: [
        {
          id: "12",
          pharmacyId: "6",
          address: "3775 S Wall Ave South Ogden UT 84405",
          phone: "385-289-1800(Ext 1)",
          website: "www.theflowershopusa.com"
        },
        {
          id: "13",
          pharmacyId: "6",
          address: "2150 N Main St. Suite 1 North Logan UT 84341",
          phone: "385-289-1800(Ext 2)",
          website: "www.theflowershopusa.com"
        }
      ],
      tags: []
    },
    {
      id: "7",
      title: "WholesomeCo",
      locations: [
        {
          id: "14",
          pharmacyId: "7",
          address: "580 W 100 N Suite 1, West Bountiful UT 84010",
          phone: "801-695-4480",
          website: "www.wholesome.co"
        }
      ],
      tags: []
    },
    {
      id: "8",
      title: "Zion Medicinal",
      locations: [
        {
          id: "15",
          pharmacyId: "8",
          address: "301 S Main St. Cedar City UT 84720",
          phone: "435-244-4485",
          website: "www.zionmed.co"
        }
      ],
      tags: []
    }
  ];

  const result = limit ? pharmacies.slice(0, limit) : pharmacies;
  
  
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return result;
}
