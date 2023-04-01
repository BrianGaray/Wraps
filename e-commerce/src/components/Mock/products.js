const Products = [
  {
    title: "Far Cry® 6",
    price: 50,
    stock: 3,
    category: "shots",
    img: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640",
    description:
      "Dive into the gritty world of modern day guerrilla revolution to free a nation from its oppressive dictators.",
  },
  {
    title: "Cyberpunk 2077",
    price: 50,
    stock: 6,
    category: "action",
    img: "https://a.allegroimg.com/original/1195ed/7e685c7c4abba242c7ff478a230a/CYBERPUNK-2077-PC-STEAM",
    description:
      "Cyberpunk 2077 is an open world action-adventure story set in Night City, a megalopolis obsessed with power, glamor and body modification. Your character is V, a mercenary in pursuit of a unique implant that allows for immortality. You'll be able to customize your character's cybernetic enhancements, abilities, and playstyle to shape a world and story that depends on your decisions.",
  },
  {
    title: "Marvel's Spider-Man",
    price: 49.99,
    stock: 2,
    category: "fight",
    img: "https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S2_1200x1600-76424286902489f4d9639ac9b735c2b2?h=854&resize=1&w=640",
    description:
      "In Marvel's Spider-Man Remastered, Peter Parker's world collides with Spider-Man's in an action-packed original story. He embodies an experienced Peter Parker and fights against the underworld and a cast of well-known villains in Marvel's New York. Swing through bustling neighborhoods and take down villains in spectacular fashion.",
  },
  {
    title: "Battlefield™ 2042",
    price: 59.99,
    stock: 2,
    category: "shots",
    img: "https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048?h=854&resize=1&w=640",
    description:
      "Battlefield™ 2042 marks the return to the franchise's iconic Total War. Assemble your squad and use a state-of-the-art arsenal on large-scale battlefields in a near-future world transformed by disarray.",
  },
  {
    title: "Red Dead Redemption 2",
    price: 36.99,
    stock: 7,
    category: "action",
    img: "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg?h=854&resize=1&w=640",
    description:
      "With over 175 Game of the Year awards and over 250 perfect ratings, Red Dead Redemption 2 is an epic tale of honor and loyalty on the threshold of a new era. Includes Red Dead Redemption 2: Story Mode and Red Dead Online.",
  },
  {
    title: "God of War",
    price: 39.99,
    stock: 5,
    category: "fight",
    img: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640",
    description:
      "Kratos has put his vendetta against the Olympian gods behind him and now lives as a man in the realm of the Norse gods and monsters. In this cruel and unforgiving world he must fight to survive... and teach his son to do so too.",
  },
  {
    title: "Shadow of the Tomb Raider",
    price: 39.99,
    stock: 5,
    category: "shots",
    img: "https://cdn1.epicgames.com/offer/4b5461ca8d1c488787b5200b420de066/egs-shadowofthetombraiderdefinitiveedition-eidosmontralcrystaldynamicsnixxessoftware-s4-1200x1600-7ee40d6fa744_1200x1600-950cdb624cc75d04fe3c8c0b62ce98de?h=854&resize=1&w=640",
    description:
      "In Shadow of the Tomb Raider: Definitive Edition, experience the final chapter of Lara's origin story as she becomes the Tomb Raider she is destined to be.",
  },
  {
    title: "Grand Theft Auto V",
    price: 10.99,
    stock: 10,
    category: "action",
    img: "https://cdn1.epicgames.com/0584d2013f0149a791e7b9bad0eec102/offer/GTAV_EGS_Artwork_1200x1600_Portrait%20Store%20Banner-1200x1600-382243057711adf80322ed2aeea42191.jpg?h=854&resize=1&w=640",
    description:
      "Grand Theft Auto V: Premium Edition allows you to fully experience the GTAV storyline and access Grand Theft Auto Online and all existing enhancements and content. Also includes the Criminal Enterprise Starter Pack, the fastest way to jumpstart your criminal empire in GTA Online.",
  },
  {
    title: "Dead by Daylight",
    price: 9.49,
    stock: 10,
    category: "fight",
    img: "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-f2a7ae8676457d052c1344ce717dfb7a?h=854&resize=1&w=640",
    description:
      "Dead by Daylight is a multiplayer (4v1) horror game where one player takes on the role of the ruthless killer and the remaining 4 play as survivors trying to escape from him to avoid being captured and killed.",
  },
  {
    title: "Crysis 3 Remastered",
    price: 5.99,
    stock: 10,
    category: "shots",
    img: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Crysis3Remastered_Crytek_S2_1200x1600-a98a0e5a8215ee2f2b768ec2140f5fd4?h=854&resize=1&w=640",
    description:
      "Experience the single-player experience of the iconic first-person shooter, Crysis 3, optimized to take advantage of today's devices in Crysis 3 Remastered.",
  },
  {
    title: "ghost runner",
    price: 8.49,
    stock: 8,
    category: "action",
    img: "https://cdn1.epicgames.com/95d0b9561be1464cb43bd029e94cf526/offer/GR_Portrait_Offer_1200x1600-1200x1600-a7811e23904db375486535513d10412f.jpg?h=854&resize=1&w=640",
    description:
      "Ghostrunner offers a unique single-player experience with fast-paced and violent combat, as well as a setting that combines science fiction with post-apocalyptic themes. Discover the story of a world that has come to an end and whose inhabitants struggle to survive.",
  },
  {
    title: "Sifu",
    price: 12,
    stock: 10,
    category: "fight",
    img: "https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640",
    description:
      "Sifu is the new game from the independent studio Sloclap, creators of Absolver. In this third-person action game with intense hand-to-hand combat, you control a young kung-fu trainee who is out for revenge.",
  },
];

export default Products;
