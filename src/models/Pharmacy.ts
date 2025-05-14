export interface PharmacyLocation {
  id: string;
  pharmacyId: string;
  address: string;
  phone: string;
  website: string | null;
}

export interface Pharmacy {
  id: string;
  title: string;
  locations: PharmacyLocation[];
  tags: string[];
}

export interface PharmacyTag {
  id: string;
  pharmacyId: string;
  name: string;
}
