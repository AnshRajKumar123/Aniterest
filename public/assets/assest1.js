function generateImageArray(basePath, count, options = {}) {
    const {
        prefix = 'img',
        category = 'uncategorized',
        namePrefix = 'Image',
        startIndex = 1
    } = options;

    return Array.from({ length: count }, (_, i) => {
        const num = i + startIndex;

        return {
            _id: `${prefix}${String(num).padStart(6, '0')}`,
            name: `${namePrefix} ${num}`,
            description: `Beautiful ${category}`,
            // ✅ use num directly
            src: new URL(`${basePath}-${num}.jpeg`, import.meta.url).href,
            category: category.toLowerCase(),
            isLiked: false,
        };
    });
}

function generateImageArray2(basePath, count, options = {}) {
    const {
        prefix = 'img',
        category = 'uncategorized',
        namePrefix = 'Image',
        startIndex = 1
    } = options;

    return Array.from({ length: count }, (_, i) => {
        const num = i + startIndex;

        return {
            _id: `${prefix}${String(num).padStart(6, '0')}`,
            name: `${namePrefix}`,
            description: `Beautiful ${category}`,
            // ✅ use num directly
            src: new URL(`${basePath}-${num}.jpg`, import.meta.url).href,
            category: category.toLowerCase(),
            isLiked: false,
        };
    });
}

export const SketchImg = generateImageArray('./SketchImg/Img', 130, {
    prefix: 'Sketch',
    category: 'SketchArt',
    namePrefix: 'Sketch Art'
});

export const WildLiImg = generateImageArray('./WildLFImg/Img', 120, {
    prefix: 'Animal',
    category: 'WildLife',
    namePrefix: 'Wild Life'
});

export const NatureImg = generateImageArray('./NatureImg/Img', 100, {
    prefix: 'Nature',
    category: 'Nature',
    namePrefix: 'Nature'
});

export const BoysFashion = generateImageArray('./BoysFImg/Img', 120, {
    prefix: 'BoysFashion',
    category: 'BoysFashion',
    namePrefix: 'Boys Fashion'
});

export const CarsImg = generateImageArray('./CarsImg/Img', 150, {
    prefix: 'Cars',
    category: 'Cars',
    namePrefix: 'Cars'
});

export const DarkImg = generateImageArray('./DarkImg/Img', 100, {
    prefix: 'Dark',
    category: 'Dark',
    namePrefix: 'Dark'
});

export const DeskImg = generateImageArray('./DeskImg/Img', 80, {
    prefix: 'Desktop',
    category: 'Desk',
    namePrefix: 'Desk'
});

export const FreeFireImg = generateImageArray('./FreeFireImg/Img', 70, {
    prefix: 'FreeFire',
    category: 'FreeFire',
    namePrefix: 'Free Fire'
});

export const GirlFashionImg = generateImageArray('./GirlFashionImg/Img', 100, {
    prefix: 'GirlFashion',
    category: 'GirlFashion',
    namePrefix: 'Girl Fashion'
});

export const AnimeImg = generateImageArray('./Anime-Img/Img', 110, {
    prefix: 'Anime',
    category: 'Anime',
    namePrefix: 'Anime'
});

export const FlowersImg = generateImageArray('./FlowersImg/Img', 170, {
    prefix: 'Flowers',
    category: 'Flowers',
    namePrefix: 'Flowers'
});

export const NaurtoImg = generateImageArray('./NaurtoImg/Img', 93, {
    prefix: 'Naurto',
    category: 'Naurto',
    namePrefix: 'Naurto'
});

export const OnePieceImg = generateImageArray('./OnePieceImg/Img', 60, {
    prefix: 'OnePiece',
    category: 'OnePiece',
    namePrefix: 'One Piece'
});

export const BtthImg = generateImageArray('./BtthImg/Img', 80, {
    prefix: 'Btth',
    category: 'Btth',
    namePrefix: 'Btth'
});

export const SoloLevelingImg = generateImageArray('./SoloLevelingImg/Img', 70, {
    prefix: 'SoloLeveling',
    category: 'SoloLeveling',
    namePrefix: 'Solo Leveling'
});

export const RenegadeImg = generateImageArray('./RenegadeImg/Img', 99, {
    prefix: 'RenegadeImmortal',
    category: 'RenegadeImg',
    namePrefix: 'Renegade Immortal'
});

export const WangLingImg = generateImageArray('./WangLingImg/Img', 53, {
    prefix: 'WangLing',
    category: 'WangLing',
    namePrefix: 'Wang Ling'
});

export const NezukoImg = generateImageArray('./NezukoImg/Img', 51, {
    prefix: 'Nezuko',
    category: 'Nezuko',
    namePrefix: 'Nezuko'
});

export const TanjiroImg = generateImageArray('./TanjiroImg/Img', 51, {
    prefix: 'Tanjiro',
    category: 'Tanjiro',
    namePrefix: 'Tanjiro'
});

export const FairyDoctorImg = generateImageArray('./FairyDoctorImg/Img', 53, {
    prefix: 'FairyDoctor',
    category: 'FairyDoctor',
    namePrefix: 'FairyDoctor'
});

export const PrefectImg = generateImageArray('./PrefectImg/Img', 80, {
    prefix: 'PrefectWorld',
    category: 'PrefectWorld',
    namePrefix: 'PrefectWorld'
});

export const HXHImg = generateImageArray('./HXHImg/Img', 60, {
    prefix: 'HXH',
    category: 'HXHImg',
    namePrefix: 'HXHImg'
});

export const SoulLandImg = generateImageArray('./SoulLandImg/Img', 72, {
    prefix: 'SoulLand',
    category: 'SoulLand',
    namePrefix: 'Soul Land'
});

export const DemonSlayerImg = generateImageArray('./DemonSlayerImg/Img', 100, {
    prefix: 'DemonSlayer',
    category: 'DemonSlayer',
    namePrefix: 'Demon Slayer'
});

export const SukunaImg = generateImageArray2('./SukunaImg/Img', 50, {
    prefix: 'Sukuna',
    category: 'Sukuna',
    namePrefix: 'Sukuna'
});

export const ThroneOSealImg = generateImageArray('./ThroneOSealImg/Img', 70, {
    prefix: 'ThroneOSeal',
    category: 'ThroneOSeal',
    namePrefix: 'ThroneOSeal'
});

export const GojoImg = generateImageArray('./GojoImg/Img', 50, {
    prefix: 'Gojo',
    category: 'Gojo',
    namePrefix: 'Gojo'
});

export const ZenitsuImg = generateImageArray('./ZenitsuImg/Img', 36, {
    prefix: 'Zentisu',
    category: 'Zentisu',
    namePrefix: 'Zentisu'
});



export const CombineImage = {
    sketch: SketchImg,
    animal: WildLiImg,
    nature: NatureImg,
    boysfashion: BoysFashion,
    cars_wallpaer: CarsImg,
    dark_wallpaper: DarkImg,
    desktop_wallpaper: DeskImg,
    freefire_wallpaper: FreeFireImg,
    girlsfashion: GirlFashionImg,
    main_anime_img: AnimeImg,
    flower_img: FlowersImg,
    naurto_img: NaurtoImg,
    one_piece_img: OnePieceImg,
    btth_img: BtthImg,
    solo_leveling_img: SoloLevelingImg,
    renegade_immortal_img: RenegadeImg,
    wang_ling_img: WangLingImg,
    nezuko_img: NezukoImg,
    tanjiro_img: TanjiroImg,
    little_fairy_doctor_img: FairyDoctorImg,
    perfect_world_img: PrefectImg,
    hunter_X_hunter_img: HXHImg,
    soul_land_2_img: SoulLandImg,
    demon_slayer_img: DemonSlayerImg,
    sukuna_img: SukunaImg,
    throne_of_seal_img: ThroneOSealImg,
    gojo_img: GojoImg,
    zenitsu_img: ZenitsuImg,
}

export const CategoryBanner = {
    sketch: {
        banner: new URL('./ImageBanner/ArtBanner.jpg', import.meta.url).href,
        title: "Sketch Art",
        description: "Beautiful sketches created with creativity."
    },
    animal: {
        banner: new URL('./ImageBanner/WildLifeBanner.jpg', import.meta.url).href,
        title: "Wild Life",
        description: "Explore the untamed beauty and diversity of wildlife."
    },
    nature: {
        banner: new URL('./ImageBanner/NatureBanner.jpeg', import.meta.url).href,
        title: "Nature",
        description: "Discover breathtaking landscapes, forests, and the beauty of the natural world."
    },
    boysfashion: {
        banner: new URL('./ImageBanner/BoysFashionBanner.jpg', import.meta.url).href,
        title: "Boys Fashion",
        description: "Trendy boys' fashion collection featuring outfits, styles, and looks for every occasion."
    },
    cars_wallpaer: {
        banner: new URL('./ImageBanner/CarBanner.jpg', import.meta.url).href,
        title: "Cars",
        description: "Discover stunning car wallpapers featuring luxury, sports, and classic models."
    },
    dark_wallpaper: {
        banner: new URL('./ImageBanner/DarkBanner.webp', import.meta.url).href,
        title: "Dark Wallpaper",
        description: "Experience the elegance of minimalistic and aesthetic dark wallpapers."
    },
    desktop_wallpaper: {
        banner: new URL('./ImageBanner/DesktopBanner.jpeg', import.meta.url).href,
        title: "Desktop Wallpaper",
        description: "Beautify your screen with high-quality desktop wallpapers for every mood."
    },
    freefire_wallpaper: {
        banner: new URL('./ImageBanner/FreeFireBanner.jpg', import.meta.url).href,
        title: "Free Fire",
        description: "Action-packed Free Fire wallpapers to energize your screen with gaming vibes."
    },
    girlsfashion: {
        banner: new URL('./ImageBanner/GirlsFashionBanner.jpg', import.meta.url).href,
        title: "Girls Fashion",
        description: "Discover the latest styles and trends in girls' fashion."
    },
    main_anime_img: {
        banner: new URL('./ImageBanner/AnimeBanner.jpg', import.meta.url).href,
        title: "All Anime MC",
        description: "Dive into the world of anime with stunning main character wallpapers."
    },
    flower_img: {
        banner: new URL('./ImageBanner/FlowerBanner.jpg', import.meta.url).href,
        title: "Flowers",
        description: "Brighten your day with the beauty and colors of flowers."
    },
    naurto_img: {
        banner: new URL('./ImageBanner/NaurtoBanner.jpg', import.meta.url).href,
        title: "Naurto",
        description: "Dive into the ninja world of Naruto with epic battles, friendships, and inspiring moments."
    },
    one_piece_img: {
        banner: new URL('./ImageBanner/OnePieceBanner.jpg', import.meta.url).href,
        title: "One Piece",
        description: "Set sail with Luffy and the Straw Hat Pirates on their legendary journey for the One Piece."
    },
    btth_img: {
        banner: new URL('./ImageBanner/BtthBanner.jpg', import.meta.url).href,
        title: "Battle through the heaven",
        description: "Experience the thrilling cultivation journey of Xiao Yan in the world of Battle Through the Heavens."
    },
    solo_leveling_img: {
        banner: new URL('./ImageBanner/SoloLevelingBanner.jpg', import.meta.url).href,
        title: "Solo Leveling Anime",
        description: "Follow Sung Jin-Woo’s rise from the weakest hunter to the most powerful being in Solo Leveling."
    },
    renegade_immortal_img: {
        banner: new URL('./ImageBanner/RenegadeBanner.jpg', import.meta.url).href,
        title: "Renegade Immortal Anime",
        description: "Step into the journey of Wang Lin as he defies fate and cultivates toward immortality."
    },
    wang_ling_img: {
        banner: new URL('./ImageBanner/WangLingBanner.jpg', import.meta.url).href,
        title: "Wang Ling",
        description: "Step into the journey of Wang Lin as he defies fate and cultivates toward immortality."
    },
    nezuko_img: {
        banner: new URL('./ImageBanner/NezukoBanner.jpeg', import.meta.url).href,
        title: "Kamado Nezuko",
        description: "Embrace the charm and strength of Nezuko Kamado, the beloved demon with a gentle heart from Demon Slayer."
    },
    tanjiro_img: {
        banner: new URL('./ImageBanner/TanjiroBanner.jpg', import.meta.url).href,
        title: "Kamado Tanjiro",
        description: "Follow the journey of Tanjiro Kamado, a kind-hearted swordsman who fights demons with unwavering resolve in Demon Slayer."
    },
    little_fairy_doctor_img: {
        banner: new URL('./ImageBanner/FairyDoctorBanner.jpg', import.meta.url).href,
        title: "Little Fairy Doctor ( Xiao Yi Xian )",
        description: "Discover Xiao Yi Xian, the mysterious and kind-hearted Little Fairy Doctor, whose unique poison body holds both great danger and immense power in Battle Through the Heavens."
    },
    perfect_world_img: {
        banner: new URL('./ImageBanner/PerfectWorldBanner.jpeg', import.meta.url).href,
        title: "Perfect World",
        description: "Step into the world of Shi Hao as he embarks on a journey of growth, trials, and battles in the majestic realm of Perfect World."
    },
    hunter_X_hunter_img: {
        banner: new URL('./ImageBanner/hXhBanner.jpg', import.meta.url).href,
        title: "Hunter X Hunter",
        description: "Join Gon, Killua, Kurapika, and Leorio on their thrilling adventures as Hunters in a world filled with danger, friendship, and endless mysteries."
    },
    soul_land_2_img: {
        banner: new URL('./ImageBanner/SoulLandBanner.webp', import.meta.url).href,
        title: "Soul Land 2",
        description: "Experience the legacy of Tang Sect in Soul Land 2, where new generations rise with spirit power, martial souls, and unshakable bonds."
    },
    demon_slayer_img: {
        banner: new URL('./ImageBanner/DemonSlayerBanner.jpg', import.meta.url).href,
        title: "Demon Slayer",
        description: "Follow Tanjiro Kamado and his companions as they fight demons and uncover the secrets of the Demon Slayer Corps in this epic tale of courage and family bonds."
    },
    sukuna_img: {
        banner: new URL('./ImageBanner/SukunaBanner.jpg', import.meta.url).href,
        title: "Ryomen Sukuna",
        description: "Witness the terrifying power of Ryomen Sukuna, the King of Curses, feared across the world of Jujutsu Kaisen for his unmatched strength and cruelty."
    },
    throne_of_seal_img: {
        banner: new URL('./ImageBanner/ThroneOSealBanner.jpg', import.meta.url).href,
        title: "Throne of Seal",
        description: "Step into the fantasy world of Throne of Seal, where courage, destiny, and the power of bonds shape the journey of Long Haochen and his companions."
    },
    gojo_img: {
        banner: new URL('./ImageBanner/GojoBanner.jpg', import.meta.url).href,
        title: "Saturo Gojo",
        description: "Embrace the charisma and overwhelming power of Satoru Gojo, the strongest Jujutsu sorcerer, known for his Six Eyes and Limitless technique."
    },
    zenitsu_img: {
        banner: new URL('./ImageBanner/ZenitsuBanner.jpeg', import.meta.url).href,
        title: "Zenitsu Agatsuma",
        description: "Zenitsu Agatsuma — the thunder-breathing prodigy whose fear turns into unmatched speed, striking like lightning in a single, perfect moment."
    },
};