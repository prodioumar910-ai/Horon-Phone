export interface Produit {
  id: string;
  nom: string;
  prix: number;
  statut: 'Disponible' | 'Stock limité' | 'Sur commande';
  image: string;
  categorie: 'iPhone' | 'Samsung' | 'Tecno';
  sousCategorie?: string;
}

export const produits: Produit[] = [
  // --- iPHONES ---
  // Série 17
  { id: 'ip17pm', nom: 'iPhone 17 Pro  256Go', prix: 950000, statut: 'Sur commande', image: 'https://picsum.photos/seed/ip17pm/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 17' },
  { id: 'ip17p', nom: 'iPhone 17 air 256Go', prix: 850000, statut: 'Sur commande', image: 'https://picsum.photos/seed/ip17p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 17' },
  { id: 'ip17', nom: 'iPhone 17 128Go', prix: 700000, statut: 'Sur commande', image: 'https://picsum.photos/seed/ip17/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 17' },
  
  // Série 16
  { id: 'ip16pm', nom: 'iPhone 16 Pro Max 256Go', prix: 850000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip16pm/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 16' },
  { id: 'ip16p', nom: 'iPhone 16 Pro 256Go', prix: 750000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip16p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 16' },
  { id: 'ip16', nom: 'iPhone 16 128Go', prix: 600000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip16/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 16' },

  // Série 15
  { id: 'ip15pm', nom: 'iPhone 15 Pro Max 256Go', prix: 680000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip15pm/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 15' },
  { id: 'ip15p', nom: 'iPhone 15 Pro 128Go', prix: 600000, statut: 'Stock limité', image: 'https://picsum.photos/seed/ip15p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 15' },
  { id: 'ip15', nom: 'iPhone 15 128Go', prix: 480000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip15/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 15' },

  // Série 14
  { id: 'ip14pm', nom: 'iPhone 14 Pro Max 256Go', prix: 580000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip14pm/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 14' },
  { id: 'ip14p', nom: 'iPhone 14 Pro 128Go', prix: 520000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip14p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 14' },
  { id: 'ip14', nom: 'iPhone 14 128Go', prix: 420000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip14/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 14' },

  // Série 13
  { id: 'ip13pm', nom: 'iPhone 13 Pro Max 256Go', prix: 480000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip13pm/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 13' },
  { id: 'ip13p', nom: 'iPhone 13 Pro 128Go', prix: 420000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip13p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 13' },
  { id: 'ip13', nom: 'iPhone 13 128Go', prix: 350000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip13/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 13' },

  // Série 12
  { id: 'ip12pm', nom: 'iPhone 12 Pro Max 128Go', prix: 380000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip12pm/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 12' },
  { id: 'ip12p', nom: 'iPhone 12 Pro 128Go', prix: 320000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip12p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 12' },
  { id: 'ip12', nom: 'iPhone 12 64Go', prix: 250000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip12/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 12' },

  // Série 11
  { id: 'ip11pm', nom: 'iPhone 11 Pro Max 256Go', prix: 280000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip11pm/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 11' },
  { id: 'ip11p', nom: 'iPhone 11 Pro 64Go', prix: 230000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip11p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 11' },
  { id: 'ip11', nom: 'iPhone 11 64Go', prix: 180000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip11/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 11' },

  // Série X / XS / XR
  { id: 'ipxsm', nom: 'iPhone XS Max 256Go', prix: 190000, statut: 'Disponible', image: 'https://picsum.photos/seed/ipxsm/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone X / XS / XR' },
  { id: 'ipxs', nom: 'iPhone XS 64Go', prix: 150000, statut: 'Disponible', image: 'https://picsum.photos/seed/ipxs/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone X / XS / XR' },
  { id: 'ipxr', nom: 'iPhone XR 64Go', prix: 130000, statut: 'Disponible', image: 'https://picsum.photos/seed/ipxr/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone X / XS / XR' },
  { id: 'ipx', nom: 'iPhone X 64Go', prix: 120000, statut: 'Disponible', image: 'https://picsum.photos/seed/ipx/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone X / XS / XR' },

  // Série 8 / 7 / 6
  { id: 'ip8p', nom: 'iPhone 8 Plus 64Go', prix: 100000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip8p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 8 / 7 / 6' },
  { id: 'ip8', nom: 'iPhone 8 64Go', prix: 80000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip8/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 8 / 7 / 6' },
  { id: 'ip7p', nom: 'iPhone 7 Plus 32Go', prix: 70000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip7p/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 8 / 7 / 6' },
  { id: 'ip7', nom: 'iPhone 7 32Go', prix: 50000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip7/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 8 / 7 / 6' },
  { id: 'ip6s', nom: 'iPhone 6s 32Go', prix: 35000, statut: 'Disponible', image: 'https://picsum.photos/seed/ip6s/400/500', categorie: 'iPhone', sousCategorie: 'Série iPhone 8 / 7 / 6' },

  // --- SAMSUNG ---
  { id: 's24u', nom: 'Samsung Galaxy S24 Ultra', prix: 850000, statut: 'Sur commande', image: 'https://picsum.photos/seed/s24u/400/500', categorie: 'Samsung', sousCategorie: 'Série Galaxy S' },
  { id: 's23u', nom: 'Samsung Galaxy S23 Ultra', prix: 650000, statut: 'Disponible', image: 'https://picsum.photos/seed/s23u/400/500', categorie: 'Samsung', sousCategorie: 'Série Galaxy S' },
  { id: 'a54', nom: 'Samsung Galaxy A54', prix: 250000, statut: 'Disponible', image: 'https://picsum.photos/seed/a54/400/500', categorie: 'Samsung', sousCategorie: 'Série Galaxy A' },
  { id: 'zfold5', nom: 'Samsung Galaxy Z Fold 5', prix: 950000, statut: 'Sur commande', image: 'https://picsum.photos/seed/zfold5/400/500', categorie: 'Samsung', sousCategorie: 'Série Galaxy Z' },

  // --- TECNO ---
  { id: 'camon20', nom: 'Tecno Camon 20 Pro', prix: 150000, statut: 'Disponible', image: 'https://picsum.photos/seed/camon20/400/500', categorie: 'Tecno', sousCategorie: 'Série Camon' },
  { id: 'spark10', nom: 'Tecno Spark 10 Pro', prix: 110000, statut: 'Disponible', image: 'https://picsum.photos/seed/spark10/400/500', categorie: 'Tecno', sousCategorie: 'Série Spark' },
  { id: 'phantomv', nom: 'Tecno Phantom V Fold', prix: 600000, statut: 'Sur commande', image: 'https://picsum.photos/seed/phantomv/400/500', categorie: 'Tecno', sousCategorie: 'Série Phantom' },
];

export const accessoires = [
  { id: 'acc1', nom: 'AirPods Pro 2', prix: 150000, icon: 'Headphones' },
  { id: 'acc2', nom: 'Chargeur Rapide 20W', prix: 15000, icon: 'BatteryCharging' },
  { id: 'acc3', nom: 'Coque Magsafe', prix: 10000, icon: 'Smartphone' },
  { id: 'acc4', nom: 'Verre Trempé', prix: 5000, icon: 'Shield' },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF', maximumFractionDigits: 0 }).format(price);
};

export const WHATSAPP_NUMBER = "22371883207";
