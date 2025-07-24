export function getPorductCategories() {
  return [
    { id: 1, name: "White wine", value: "whiteWine", categories: [
        { name: "Chardonnay", value: "chardonnay" },
        { name: "Sauvignon Blanc", value: "sauvignonBlanc" },
        { name: "Pinot Grigio", value: "pinotGrigio" },
        { name: "Riesling", value: "riesling" },
        { name: "Gewürztraminer", value: "gewurztraminer" },
        { name: "Viognier", value: "viognier" }
      ] 
    },
    { id: 2, name: "Red wine", value: "redWine", categories: [
        { name: "Cabernet Sauvignon", value: "cabernetSauvignon" },
        { name: "Merlot", value: "merlot" },
        { name: "Pinot Noir", value: "pinotNoir" },
        { name: "Syrah", value: "syrah" },
        { name: "Zinfandel", value: "zinfandel" },
        { name: "Malbec", value: "malbec" }
      ] 
    },
    { id: 3, name: "Rosé wine", value: "roseWine", categories: [
        { name: "Grenache", value: "grenache" },
        { name: "Syrah", value: "syrah" },
        { name: "Mourvèdre", value: "mourvedre" },
        { name: "Cinsault", value: "cinsault" },
        { name: "Carignan", value: "carignan" },
        { name: "Zinfandel Rosé", value: "zinfandelRose" }
      ] 
    },
    { id: 4, name: "Sparkling wine", value: "sparklingWine", categories: [
        { name: "Champagne", value: "champagne" },
        { name: "Prosecco", value: "prosecco" },
        { name: "Cava", value: "cava" },
        { name: "Crémant", value: "cremant" },
        { name: "Sekt", value: "sekt" },
        { name: "Moscato", value: "moscato" }
      ] 
    },
    { id: 5, name: "Dessert wine", value: "dessertWine", categories: [
        { name: "Port", value: "port" },
        { name: "Sherry", value: "sherry" },
        { name: "Madeira", value: "madeira" },
        { name: "Vin Santo", value: "vinSanto" },
        { name: "Ice wine", value: "iceWine" },
        { name: "Late harvest wine", value: "lateHarvestWine" }
      ] 
    },
  ];
}

export function getTourCategories() {
  return [
    { id: 1, name: "Montenegrin White Wine Tour", desc: "Embark on a delightful journey through the picturesque vineyards of Montenegro, where you'll discover the hidden gems of our ", },
    { id: 2, name: "French Riviera Wine Tasting Experience", desc: "Explore the enchanting vineyards of Provence on a captivating wine tour, where you'll uncover the treasures of our ", },
    { id: 3, name: "Italian Vineyard Exploration Tour", desc: "Join us on an enchanting exploration through the charming vineyards of Tuscany to uncover the ", },
    { id: 4, name: "Spanish Wine Country Adventure", desc: "Embark on an exciting adventure through the stunning vineyards of Andalusia, where you'll uncover the treasures of our exceptional red ", },
    { id: 5, name: "Greek Island Winery Discovery", desc: "Immerse yourself in a captivating adventure exploring the enchanting vineyards of Greek Discovery, where you'll uncover ", },
  ];
}

export function getServicesCategories() {
  return [
    {
      id: 1, name: "Tasting Sessions", options: [
        { id: 1, desc: "Private tastings" },
        { id: 1, desc: "Corporate tastings" },
        { id: 1, desc: "Online tastings" }]
    },
    {
      id: 2, name: "Education & Courses", options: [
        { id: 1, desc: "For beginners" },
        { id: 1, desc: "For professionals" },
        { id: 1, desc: "Masterclasses" }]
    },
    {
      id: 3, name: "Wine Collection", options: [
        { id: 1, desc: "For personal collections" },
        { id: 1, desc: "Collection audit and " },
        { id: 1, desc: "Climate control and " }]
    },
    {
      id: 4, name: "Food Pairing", options: [
        { id: 1, desc: "Wine pairings for menu" },
        { id: 1, desc: "Wine dinners" },
        { id: 1, desc: "Seasonal pairings" }]
    },
    {
      id: 5, name: "Services for Collectors", options: [
        { id: 1, desc: "Wine investment" },
        { id: 1, desc: "Exclusive access to rare" },
        { id: 1, desc: "Auction support" }]
    },
  ];
}

export const mockProducts = [
  { id: 1, name: 'Wine A', price: 10.99, image: 'wine-a.jpg', parentCategory: 'whiteWine', category: 'chardonnay' },
  { id: 2, name: 'Wine B', price: 12.99, image: 'wine-b.jpg', parentCategory: 'redWine', category: 'merlot' },
  { id: 3, name: 'Wine C', price: 15.99, image: 'wine-c.jpg', parentCategory: 'whiteWine', category: 'riesling' },
  { id: 4, name: 'Wine D', price: 8.99, image: 'wine-d.jpg', parentCategory: 'roseWine', category: 'grenache' },
  { id: 5, name: 'Wine E', price: 20.99, image: 'wine-e.jpg', parentCategory: 'sparklingWine', category: 'champagne' },
  { id: 6, name: 'Wine F', price: 25.99, image: 'wine-f.jpg', parentCategory: 'redWine', category: 'cabernetSauvignon' },
  { id: 7, name: 'Wine G', price: 30.99, image: 'wine-g.jpg', parentCategory: 'dessertWine', category: 'port' },
  { id: 8, name: 'Wine H', price: 18.99, image: 'wine-h.jpg', parentCategory: 'sparklingWine', category: 'prosecco' },
  { id: 9, name: 'Wine I', price: 22.99, image: 'wine-i.jpg', parentCategory: 'whiteWine', category: 'sauvignonBlanc' },
  { id: 10, name: 'Wine J', price: 19.99, image: 'wine-j.jpg', parentCategory: 'redWine', category: 'pinotNoir' },
  { id: 11, name: 'Wine A1', price: 10.99, image: 'wine-a.jpg', parentCategory: 'whiteWine', category: 'chardonnay' },
  { id: 12, name: 'Wine A2', price: 11.99, image: 'wine-a.jpg', parentCategory: 'whiteWine', category: 'chardonnay' },
  { id: 13, name: 'Wine A3', price: 12.99, image: 'wine-a.jpg', parentCategory: 'whiteWine', category: 'chardonnay' },
  { id: 14, name: 'Wine A4', price: 13.99, image: 'wine-a.jpg', parentCategory: 'whiteWine', category: 'chardonnay' },
  { id: 15, name: 'Wine A5', price: 14.99, image: 'wine-a.jpg', parentCategory: 'whiteWine', category: 'chardonnay' },
  { id: 16, name: 'Wine A6', price: 15.99, image: 'wine-a.jpg', parentCategory: 'whiteWine', category: 'chardonnay' },
];

export function getProductById(id){
  return mockProducts.find((product)=> product.id == id);
}